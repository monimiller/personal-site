// Fetch and extract content from Starburst blog posts

import * as cheerio from "cheerio";
import type { ExtractedContent, AuthorInfo } from "./types";

/**
 * Slugify a string for use in URLs and file names
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

/**
 * Fetch and extract content from a Starburst blog post
 */
export async function fetchPostContent(url: string): Promise<ExtractedContent> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }

  const html = await response.text();
  const $ = cheerio.load(html);

  // Extract title
  const title = $("h1").first().text().trim() || $("title").text().split("|")[0].trim();

  // Extract description from meta
  const description =
    $('meta[name="description"]').attr("content") ||
    $('meta[property="og:description"]').attr("content") ||
    "";

  // Extract publication date
  const timeEl = $("time").first();
  const pubDate =
    timeEl.attr("datetime") ||
    timeEl.text().trim() ||
    new Date().toISOString().split("T")[0];

  // Extract authors from author links
  const authors: AuthorInfo[] = [];
  $('a[href*="/blog/author/"]').each((_, el) => {
    const $el = $(el);
    const name = $el.find(".font-semibold, .text-xs.font-semibold").text().trim();
    const href = $el.attr("href") || "";
    const slug = href.split("/author/")[1]?.replace(/\/$/, "") || "";

    // Avoid duplicates
    if (name && slug && !authors.find((a) => a.slug === slug)) {
      const titleEl = $el.find(".text-gray-600").first();
      const companyEl = $el.find(".text-gray-600").last();
      const imgEl = $el.find("img");

      authors.push({
        name,
        slug,
        title: titleEl.text().trim(),
        company: companyEl.text().trim(),
        imageUrl: imgEl.attr("src"),
      });
    }
  });

  // If no authors found, try alternate pattern
  if (authors.length === 0) {
    $(".flex.items-center.gap-4").each((_, el) => {
      const $el = $(el);
      const name = $el.find("p.font-semibold, p.text-xs.font-semibold").text().trim();
      if (name) {
        authors.push({
          name,
          slug: slugify(name),
        });
      }
    });
  }

  // Extract categories from the page
  const categories: string[] = [];
  $('a[href*="/blog/category/"]').each((_, el) => {
    const cat = $(el).text().trim();
    if (cat && !categories.includes(cat)) {
      categories.push(cat);
    }
  });

  // Extract hero image
  const heroImageUrl =
    $('meta[property="og:image"]').attr("content") ||
    $(".blog-content img, article img").first().attr("src");

  // Extract main content
  const contentSelectors = [
    ".prose-sb-full.blog-content",
    ".blog-content",
    "article .prose",
    "article",
    "main .container",
  ];

  let htmlContent = "";
  for (const selector of contentSelectors) {
    const el = $(selector);
    if (el.length > 0) {
      // Remove CTAs, share buttons, and other non-content elements
      el.find(".btn, .rounded-2xl.bg-smokeyBlack, [class*='share']").remove();
      el.find("a[href*='free-trial']").parent().remove();

      htmlContent = el.html() || "";
      if (htmlContent.length > 100) break;
    }
  }

  // Clean up the HTML content
  htmlContent = cleanHtmlContent(htmlContent);

  return {
    title,
    description: description.substring(0, 300),
    pubDate: formatDate(pubDate),
    authors,
    categories,
    heroImageUrl,
    htmlContent,
  };
}

/**
 * Format date to YYYY-MM-DD
 */
function formatDate(dateStr: string): string {
  try {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) {
      return new Date().toISOString().split("T")[0];
    }
    return date.toISOString().split("T")[0];
  } catch {
    return new Date().toISOString().split("T")[0];
  }
}

/**
 * Clean up HTML content before markdown conversion
 */
function cleanHtmlContent(html: string): string {
  const $ = cheerio.load(html, null, false);

  // Remove Starburst-specific CTAs
  $("a.btn").remove();
  $('[class*="conversion"]').remove();
  $('[class*="cta"]').remove();

  // Remove "Start Free" and trial-related content
  $('a[href*="free-trial"]').remove();
  $(':contains("Start Free")').filter((_, el) => {
    const text = $(el).text();
    return text.includes("Start Free") && text.length < 100;
  }).remove();

  // Remove share buttons
  $('[class*="share"]').remove();

  // Remove empty paragraphs
  $("p:empty").remove();

  return $.html();
}

/**
 * Extract the canonical URL from the blog post
 */
export function getCanonicalUrl(url: string): string {
  // Ensure it uses the public domain
  return url
    .replace("live-starburst.pantheonsite.io", "www.starburst.io")
    .replace(/\/$/, "") + "/";
}
