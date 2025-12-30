// File writing utilities for blog posts
/// <reference types="bun-types" />

import { mkdir } from "node:fs/promises";
import { join } from "node:path";
import { slugify } from "./content-fetcher";
import type { ImportResult } from "./types";

const BLOG_DIR = "src/content/blog/starburst";

/**
 * Write a blog post to the filesystem
 */
export async function writePost(
  slug: string,
  frontmatter: string,
  markdown: string
): Promise<ImportResult> {
  const result: ImportResult = {
    success: false,
    slug,
    path: "",
    warnings: [],
    errors: [],
  };

  try {
    const dir = join(BLOG_DIR, slug);
    const filePath = join(dir, "index.md");
    result.path = filePath;

    // Create directory
    await mkdir(dir, { recursive: true });

    // Combine frontmatter and content
    const content = `${frontmatter}\n\n${markdown}\n`;

    // Write file
    await Bun.write(filePath, content);

    result.success = true;
  } catch (error) {
    result.errors.push(
      `Failed to write file: ${error instanceof Error ? error.message : String(error)}`
    );
  }

  return result;
}

/**
 * Generate a slug from a URL or title
 */
export function getSlugFromUrl(url: string): string {
  // Extract the last part of the URL path
  const path = url.replace(/\/$/, "").split("/").pop() || "";
  return slugify(path);
}

/**
 * Check if a post already exists
 */
export async function postExists(slug: string): Promise<boolean> {
  const path = join(BLOG_DIR, slug, "index.md");
  try {
    const file = Bun.file(path);
    return await file.exists();
  } catch {
    return false;
  }
}
