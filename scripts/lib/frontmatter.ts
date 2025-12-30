// Frontmatter generation for blog posts

import YAML from "yaml";
import type { ExtractedContent, FrontmatterData, AuthorInfo } from "./types";
import categoryMapping from "../config/category-mapping.json";

// Known author slugs that exist in your site
const KNOWN_AUTHORS = new Set([
  "monica-miller",
  "dan-codeluppi",
  "ryo-komatsuzaki",
  "evan-smith",
  "brian-zhan",
  "eric-hwang",
  "cole-bowden",
  "manfred-moser",
  "anna-schibli",
  "mandy-darnell",
  "brandy-love",
  "matt-fuller",
]);

/**
 * Generate frontmatter YAML for a blog post
 */
export function generateFrontmatter(
  content: ExtractedContent,
  canonicalUrl: string
): string {
  const frontmatter: FrontmatterData = {
    title: escapeYamlString(content.title),
    description: escapeYamlString(
      content.description || `${content.title.substring(0, 150)}...`
    ),
    pubDate: content.pubDate,
    authors: mapAuthors(content.authors),
    categories: mapCategories(content.categories),
    heroImage: "../../orange-blobs-1.jpg", // Default to shared image
    draft: true, // Always start as draft
    canonicalUrl: canonicalUrl,
  };

  // Use YAML library for proper formatting
  const yamlStr = YAML.stringify(frontmatter, {
    lineWidth: 0, // Don't wrap lines
    singleQuote: false,
  });

  return `---\n${yamlStr}---`;
}

/**
 * Escape special characters in YAML strings
 */
function escapeYamlString(str: string): string {
  return str
    .replace(/"/g, '\\"')
    .replace(/\n/g, " ")
    .trim();
}

/**
 * Map extracted authors to author reference slugs
 * Includes all known authors, warns about unknown ones
 */
function mapAuthors(authors: AuthorInfo[]): string[] {
  // Map all authors, keeping only those we have entries for
  const mapped = authors
    .map((a) => a.slug)
    .filter((slug) => KNOWN_AUTHORS.has(slug));

  // If no known authors found, default to monica-miller
  // (shouldn't happen since we filter to Monica posts)
  if (mapped.length === 0) {
    return ["monica-miller"];
  }

  // Ensure Monica is first in the list (she's the site owner)
  const monicaIdx = mapped.indexOf("monica-miller");
  if (monicaIdx > 0) {
    mapped.splice(monicaIdx, 1);
    mapped.unshift("monica-miller");
  }

  return mapped;
}

/**
 * Map Starburst categories to your site's categories
 */
function mapCategories(categories: string[]): string[] {
  const mapping = categoryMapping as Record<string, string>;
  const mapped = new Set<string>();

  for (const cat of categories) {
    const mappedCat = mapping[cat];
    if (mappedCat) {
      mapped.add(mappedCat);
    }
  }

  // If no categories mapped, use default
  if (mapped.size === 0) {
    mapped.add(mapping["_default"] || "Starburst");
  }

  return Array.from(mapped);
}

/**
 * Get warnings about unmapped categories
 */
export function getCategoryWarnings(categories: string[]): string[] {
  const mapping = categoryMapping as Record<string, string>;
  const unmapped = categories.filter((cat) => !mapping[cat]);

  if (unmapped.length > 0) {
    return [`Unmapped categories: ${unmapped.join(", ")}`];
  }

  return [];
}

/**
 * Get warnings about co-authors
 */
export function getAuthorWarnings(authors: AuthorInfo[]): string[] {
  const warnings: string[] = [];

  const unknownAuthors = authors.filter((a) => !KNOWN_AUTHORS.has(a.slug));
  if (unknownAuthors.length > 0) {
    const names = unknownAuthors.map((a) => a.name).join(", ");
    warnings.push(`Co-authors need author entries: ${names}`);
  }

  return warnings;
}
