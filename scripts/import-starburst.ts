#!/usr/bin/env bun
// Semi-automated Starburst blog post importer
/// <reference types="bun-types" />

import {
  fetchRssFeed,
  filterBlogPosts,
  getExistingPosts,
  isAlreadyImported,
  filterByMonicaWithHtml,
} from "./lib/rss-parser";
import { fetchPostContent, getCanonicalUrl, slugify } from "./lib/content-fetcher";
import { htmlToMarkdown } from "./lib/html-to-markdown";
import {
  generateFrontmatter,
  getCategoryWarnings,
  getAuthorWarnings,
} from "./lib/frontmatter";
import { writePost, getSlugFromUrl, postExists } from "./lib/file-writer";
import type { RssPost } from "./lib/types";

// ANSI colors for terminal output
const colors = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  red: "\x1b[31m",
};

const log = {
  info: (msg: string) => console.log(`${colors.blue}ℹ${colors.reset} ${msg}`),
  success: (msg: string) => console.log(`${colors.green}✓${colors.reset} ${msg}`),
  warn: (msg: string) => console.log(`${colors.yellow}⚠${colors.reset} ${msg}`),
  error: (msg: string) => console.log(`${colors.red}✗${colors.reset} ${msg}`),
  step: (msg: string) => console.log(`${colors.cyan}→${colors.reset} ${msg}`),
};

/**
 * Parse command line arguments
 */
function parseArgs(): { url?: string; batch?: boolean; help?: boolean } {
  const args = process.argv.slice(2);
  const result: { url?: string; batch?: boolean; help?: boolean } = {};

  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--url" && args[i + 1]) {
      result.url = args[i + 1];
      i++;
    } else if (args[i] === "--batch") {
      result.batch = true;
    } else if (args[i] === "--help" || args[i] === "-h") {
      result.help = true;
    }
  }

  return result;
}

/**
 * Show help message
 */
function showHelp() {
  console.log(`
${colors.bold}Starburst Blog Importer${colors.reset}

Import blog posts from Starburst to your personal site.

${colors.bold}Usage:${colors.reset}
  bun run scripts/import-starburst.ts                    Interactive mode
  bun run scripts/import-starburst.ts --url <url>        Import specific post
  bun run scripts/import-starburst.ts --batch            Import all new posts

${colors.bold}Options:${colors.reset}
  --url <url>    Import a specific Starburst blog post URL
  --batch        Import all new posts (still prompts for confirmation)
  --help, -h     Show this help message

${colors.bold}Examples:${colors.reset}
  bun run scripts/import-starburst.ts --url "https://www.starburst.io/blog/post-slug/"
`);
}

/**
 * Import a single post by URL
 */
async function importSinglePost(url: string): Promise<boolean> {
  const slug = getSlugFromUrl(url);
  const canonicalUrl = getCanonicalUrl(url);

  log.step(`Importing: ${url}`);

  // Check if already exists
  if (await postExists(slug)) {
    log.warn(`Post already exists: ${slug}`);
    return false;
  }

  try {
    // Fetch content
    log.info("Fetching content...");
    const content = await fetchPostContent(url);

    // Show what we found
    console.log(`\n  ${colors.bold}Title:${colors.reset} ${content.title}`);
    console.log(`  ${colors.bold}Date:${colors.reset} ${content.pubDate}`);
    console.log(
      `  ${colors.bold}Authors:${colors.reset} ${content.authors.map((a) => a.name).join(", ") || "Monica Miller"}`
    );
    console.log(
      `  ${colors.bold}Categories:${colors.reset} ${content.categories.join(", ") || "None detected"}`
    );

    // Check for warnings
    const catWarnings = getCategoryWarnings(content.categories);
    const authorWarnings = getAuthorWarnings(content.authors);
    const allWarnings = [...catWarnings, ...authorWarnings];

    if (allWarnings.length > 0) {
      console.log(`\n  ${colors.yellow}Warnings:${colors.reset}`);
      allWarnings.forEach((w) => console.log(`    • ${w}`));
    }

    // Convert to markdown
    log.info("Converting to Markdown...");
    const markdown = htmlToMarkdown(content.htmlContent);
    const lineCount = markdown.split("\n").length;
    log.success(`Converted (${lineCount} lines)`);

    // Generate frontmatter
    const frontmatter = generateFrontmatter(content, canonicalUrl);

    // Write the file
    log.info("Writing file...");
    const result = await writePost(slug, frontmatter, markdown);

    if (result.success) {
      log.success(`Created ${result.path}`);
      console.log(`\n  ${colors.dim}Next steps:${colors.reset}`);
      console.log(`    1. Review the generated file`);
      console.log(`    2. Test with: bun run dev`);
      console.log(`    3. Change draft: false when ready\n`);
      return true;
    } else {
      result.errors.forEach((e) => log.error(e));
      return false;
    }
  } catch (error) {
    log.error(`Failed to import: ${error instanceof Error ? error.message : String(error)}`);
    return false;
  }
}

/**
 * Interactive mode - list posts and let user select
 */
async function interactiveMode() {
  console.log(`\n${colors.bold}Starburst Blog Importer${colors.reset}\n`);

  // Fetch RSS feed
  log.info("Fetching Starburst RSS feed...");
  const allPosts = await fetchRssFeed();
  log.success(`Found ${allPosts.length} total posts`);

  // Filter to blog posts only
  const blogPosts = filterBlogPosts(allPosts);
  log.info(`Filtered to ${blogPosts.length} blog posts`);

  // Get existing posts
  const existing = await getExistingPosts();
  log.info(`Already imported: ${existing.size} posts`);

  // Filter out already imported
  const notImported = blogPosts.filter((p) => !isAlreadyImported(p, existing));
  log.info(`Not yet imported: ${notImported.length} posts`);

  if (notImported.length === 0) {
    log.success("All posts are already imported!");
    return;
  }

  // Filter to only Monica's posts (fetches HTML, uses cache)
  log.info("Checking authors (fetching HTML, cached)...");
  const newPosts = await filterByMonicaWithHtml(notImported, log.step);
  log.success(`Found ${newPosts.length} posts by Monica`);

  if (newPosts.length === 0) {
    log.success("No new posts by Monica to import!");
    return;
  }

  // Display new posts
  console.log(`\n${colors.bold}New posts available (${newPosts.length}):${colors.reset}\n`);

  newPosts.slice(0, 20).forEach((post, idx) => {
    const date = post.pubDate.toISOString().split("T")[0];
    console.log(`  ${colors.cyan}${idx + 1}.${colors.reset} ${post.title}`);
    console.log(`     ${colors.dim}${date} | ${post.creator}${colors.reset}`);
    console.log(`     ${colors.dim}${post.link}${colors.reset}\n`);
  });

  if (newPosts.length > 20) {
    console.log(`  ${colors.dim}... and ${newPosts.length - 20} more${colors.reset}\n`);
  }

  // Prompt for selection
  console.log(
    `\n${colors.bold}Enter post numbers to import (comma-separated), 'all', or 'q' to quit:${colors.reset}`
  );
  process.stdout.write("> ");

  for await (const line of console) {
    const input = line.trim().toLowerCase();

    if (input === "q" || input === "quit" || input === "exit") {
      console.log("Goodbye!");
      break;
    }

    let postsToImport: RssPost[] = [];

    if (input === "all") {
      postsToImport = newPosts;
    } else {
      // Parse comma-separated numbers
      const numbers = input
        .split(",")
        .map((s) => parseInt(s.trim(), 10))
        .filter((n) => !isNaN(n) && n > 0 && n <= newPosts.length);

      postsToImport = numbers.map((n) => newPosts[n - 1]);
    }

    if (postsToImport.length === 0) {
      log.warn("No valid posts selected");
      process.stdout.write("> ");
      continue;
    }

    console.log(`\nImporting ${postsToImport.length} post(s)...\n`);

    let successCount = 0;
    for (const post of postsToImport) {
      const success = await importSinglePost(post.link);
      if (success) successCount++;
    }

    console.log(
      `\n${colors.bold}Import complete!${colors.reset} ${successCount}/${postsToImport.length} posts imported.\n`
    );
    break;
  }
}

/**
 * Main entry point
 */
async function main() {
  const args = parseArgs();

  if (args.help) {
    showHelp();
    return;
  }

  if (args.url) {
    await importSinglePost(args.url);
    return;
  }

  // Default to interactive mode
  await interactiveMode();
}

// Run
main().catch((error) => {
  log.error(`Fatal error: ${error instanceof Error ? error.message : String(error)}`);
  process.exit(1);
});
