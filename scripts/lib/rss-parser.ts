// RSS feed parsing for Starburst blog
/// <reference types="bun-types" />

import type { RssPost } from "./types";
import { readdir } from "node:fs/promises";
import { join } from "node:path";
import {
  loadCache,
  saveCache,
  getCachedEntry,
  setCacheEntry,
  shouldRecheck,
} from "./author-cache";

const STARBURST_RSS_URL = "https://live-starburst.pantheonsite.io/feed/";

/**
 * Parse RSS XML and extract post items
 */
function parseRssXml(xml: string): RssPost[] {
  const posts: RssPost[] = [];

  // Match all <item> blocks
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;

  while ((match = itemRegex.exec(xml)) !== null) {
    const itemXml = match[1];

    const title = extractTag(itemXml, "title");
    const link = extractTag(itemXml, "link");
    const pubDateStr = extractTag(itemXml, "pubDate");
    const creator = extractTag(itemXml, "dc:creator");
    const guid = extractTag(itemXml, "guid");
    const description = extractTag(itemXml, "description");

    // Extract all categories
    const categories: string[] = [];
    const catRegex = /<category><!\[CDATA\[(.*?)\]\]><\/category>/g;
    let catMatch;
    while ((catMatch = catRegex.exec(itemXml)) !== null) {
      categories.push(catMatch[1]);
    }

    if (title && link) {
      posts.push({
        title,
        link: link.replace("live-starburst.pantheonsite.io", "www.starburst.io"),
        pubDate: pubDateStr ? new Date(pubDateStr) : new Date(),
        creator: creator || "Unknown",
        categories,
        guid: guid || link,
        description: cleanDescription(description || ""),
      });
    }
  }

  return posts;
}

/**
 * Extract content from an XML tag
 */
function extractTag(xml: string, tagName: string): string {
  // Try CDATA first
  const cdataRegex = new RegExp(
    `<${tagName}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tagName}>`,
    "i"
  );
  const cdataMatch = xml.match(cdataRegex);
  if (cdataMatch) {
    return cdataMatch[1].trim();
  }

  // Try regular content
  const regex = new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)</${tagName}>`, "i");
  const match = xml.match(regex);
  return match ? match[1].trim() : "";
}

/**
 * Clean HTML from description
 */
function cleanDescription(html: string): string {
  return html
    .replace(/<[^>]+>/g, "") // Remove HTML tags
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Fetch and parse the Starburst RSS feed
 */
export async function fetchRssFeed(): Promise<RssPost[]> {
  const response = await fetch(STARBURST_RSS_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch RSS: ${response.status} ${response.statusText}`);
  }

  const xml = await response.text();
  return parseRssXml(xml);
}

/**
 * Filter posts by author (Monica Miller)
 */
export function filterByMonica(posts: RssPost[]): RssPost[] {
  return posts.filter(
    (post) =>
      post.creator.toLowerCase().includes("monica") ||
      post.link.includes("/author/monica-miller/")
  );
}

/**
 * Filter to only blog posts (not news, resources, etc.)
 */
export function filterBlogPosts(posts: RssPost[]): RssPost[] {
  return posts.filter((post) => post.link.includes("/blog/"));
}

/**
 * Check which posts are already imported
 */
export async function getExistingPosts(): Promise<Set<string>> {
  const existingSlugs = new Set<string>();
  const blogDir = "src/content/blog/starburst";

  try {
    const entries = await readdir(blogDir, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory()) {
        const indexPath = join(blogDir, entry.name, "index.md");
        try {
          const content = await Bun.file(indexPath).text();
          const canonicalMatch = content.match(/canonicalUrl:\s*["']([^"']+)["']/);
          if (canonicalMatch) {
            existingSlugs.add(canonicalMatch[1]);
          }
          // Also add the folder name as a slug check
          existingSlugs.add(entry.name);
        } catch {
          // File doesn't exist, skip
        }
      }
    }
  } catch {
    // Directory doesn't exist yet
  }

  return existingSlugs;
}

/**
 * Check if a post URL is already imported
 */
export function isAlreadyImported(post: RssPost, existing: Set<string>): boolean {
  // Check canonical URL
  if (existing.has(post.link)) return true;

  // Check slug from URL
  const slug = post.link.split("/blog/")[1]?.replace(/\/$/, "");
  if (slug && existing.has(slug)) return true;

  return false;
}

/**
 * Extract author slugs from post HTML
 */
function extractAuthorSlugs(html: string): string[] {
  const slugs: string[] = [];
  const regex = /href="\/blog\/author\/([^/"]+)\/?"/g;
  let match;
  while ((match = regex.exec(html)) !== null) {
    if (!slugs.includes(match[1])) {
      slugs.push(match[1]);
    }
  }
  return slugs;
}

/**
 * Fetch HTML and check if Monica is an author
 * Uses cache to avoid re-fetching
 */
export async function checkPostHasMonica(
  url: string,
  onProgress?: (msg: string) => void
): Promise<{ hasMonica: boolean; authors: string[] }> {
  const cache = await loadCache();
  const cached = getCachedEntry(cache, url);

  // Return cached result if fresh
  if (cached && !shouldRecheck(cached)) {
    return { hasMonica: cached.hasMonica, authors: cached.authors };
  }

  // Fetch HTML
  onProgress?.(`Checking authors: ${url}`);
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const html = await response.text();
    const authors = extractAuthorSlugs(html);
    const hasMonica = authors.includes("monica-miller");

    // Update cache
    setCacheEntry(cache, url, hasMonica, authors);
    await saveCache(cache);

    return { hasMonica, authors };
  } catch (error) {
    // On error, don't cache, return false
    onProgress?.(`Failed to check ${url}: ${error}`);
    return { hasMonica: false, authors: [] };
  }
}

/**
 * Filter posts to only those where Monica is an author
 * Fetches HTML for each post and checks author list
 */
export async function filterByMonicaWithHtml(
  posts: RssPost[],
  onProgress?: (msg: string) => void
): Promise<RssPost[]> {
  const results: RssPost[] = [];

  for (const post of posts) {
    const { hasMonica } = await checkPostHasMonica(post.link, onProgress);
    if (hasMonica) {
      results.push(post);
    }
  }

  return results;
}
