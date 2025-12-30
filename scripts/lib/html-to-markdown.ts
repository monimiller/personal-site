// HTML to Markdown conversion using Turndown

import TurndownService from "turndown";

/**
 * Create a configured Turndown service for Starburst content
 */
function createTurndownService(): TurndownService {
  const turndown = new TurndownService({
    headingStyle: "atx",
    codeBlockStyle: "fenced",
    bulletListMarker: "-",
    emDelimiter: "*",
    strongDelimiter: "**",
  });

  // Custom rule: Handle pre/code blocks better
  turndown.addRule("codeBlocks", {
    filter: ["pre"],
    replacement: (content, node) => {
      const element = node as HTMLElement;
      const codeEl = element.querySelector("code");
      const langClass = codeEl?.className || element.className || "";
      const langMatch = langClass.match(/language-(\w+)/);
      const lang = langMatch ? langMatch[1] : "";

      // Get the actual text content
      const code = codeEl?.textContent || element.textContent || content;

      return `\n\`\`\`${lang}\n${code.trim()}\n\`\`\`\n`;
    },
  });

  // Custom rule: Remove Starburst CTAs and buttons
  turndown.addRule("removeCtaButtons", {
    filter: (node) => {
      const element = node as HTMLElement;
      if (!element.className) return false;

      const className = element.className.toString();
      return (
        className.includes("btn") ||
        className.includes("cta") ||
        className.includes("conversion")
      );
    },
    replacement: () => "",
  });

  // Custom rule: Remove "Start Free" links
  turndown.addRule("removeTrialLinks", {
    filter: (node) => {
      const element = node as HTMLElement;
      if (element.tagName !== "A") return false;

      const href = element.getAttribute("href") || "";
      const text = element.textContent || "";

      return (
        href.includes("free-trial") ||
        text.includes("Start Free") ||
        text.includes("Request Enterprise") ||
        text.includes("Book time")
      );
    },
    replacement: () => "",
  });

  // Custom rule: Handle images with remote URLs
  turndown.addRule("images", {
    filter: "img",
    replacement: (content, node) => {
      const element = node as HTMLImageElement;
      const alt = element.alt || "";
      const src = element.src || element.getAttribute("src") || "";

      // Skip tiny images (likely icons)
      const width = element.width || 0;
      if (width > 0 && width < 50) return "";

      // Skip placeholder images
      if (src.includes("placeholder") || src.includes("spacer")) return "";

      if (!src) return "";

      return `![${alt}](${src})`;
    },
  });

  // Custom rule: Handle GitHub Gist embeds
  turndown.addRule("gistLinks", {
    filter: (node) => {
      const element = node as HTMLAnchorElement;
      if (element.tagName !== "A") return false;
      const href = element.getAttribute("href") || "";
      return href.includes("gist.github.com");
    },
    replacement: (content, node) => {
      const element = node as HTMLAnchorElement;
      const href = element.getAttribute("href") || "";
      // Just keep the link, remove "view raw" etc.
      if (content.includes("view raw") || content.includes("hosted with")) {
        return "";
      }
      return `[${content}](${href})`;
    },
  });

  // Remove empty links and divs
  turndown.addRule("removeEmpty", {
    filter: (node) => {
      const element = node as HTMLElement;
      const text = element.textContent?.trim() || "";
      return text === "" && !element.querySelector("img");
    },
    replacement: () => "",
  });

  return turndown;
}

/**
 * Convert HTML content to Markdown
 */
export function htmlToMarkdown(html: string): string {
  const turndown = createTurndownService();

  let markdown = turndown.turndown(html);

  // Clean up the markdown
  markdown = cleanupMarkdown(markdown);

  return markdown;
}

/**
 * Post-process markdown to clean it up
 */
function cleanupMarkdown(md: string): string {
  return (
    md
      // Remove multiple consecutive blank lines
      .replace(/\n{3,}/g, "\n\n")
      // Remove trailing whitespace on lines
      .replace(/[ \t]+$/gm, "")
      // Remove "Schedule a call with an expert" and similar CTAs
      .replace(/### Schedule a call.*$/gm, "")
      .replace(/\[Book time\].*$/gm, "")
      // Remove orphaned "view raw" and "hosted with" links
      .replace(/\[view raw\].*$/gm, "")
      .replace(/\[.*\.md\].*hosted with.*$/gm, "")
      // Clean up extra newlines before/after code blocks
      .replace(/\n{3,}```/g, "\n\n```")
      .replace(/```\n{3,}/g, "```\n\n")
      // Trim
      .trim()
  );
}
