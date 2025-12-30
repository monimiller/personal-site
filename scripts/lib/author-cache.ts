// Cache for author lookup - avoids re-fetching posts we've already checked
/// <reference types="bun-types" />

import { existsSync } from "node:fs";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";

interface CacheEntry {
  url: string;
  checkedAt: string;
  hasMonica: boolean;
  authors: string[]; // author slugs
}

interface AuthorCache {
  version: 1;
  entries: Record<string, CacheEntry>;
}

const CACHE_PATH = "scripts/cache/author-cache.json";

/**
 * Load the cache from disk
 */
export async function loadCache(): Promise<AuthorCache> {
  try {
    if (existsSync(CACHE_PATH)) {
      const content = await readFile(CACHE_PATH, "utf-8");
      return JSON.parse(content);
    }
  } catch {
    // Cache corrupted or doesn't exist
  }
  return { version: 1, entries: {} };
}

/**
 * Save the cache to disk
 */
export async function saveCache(cache: AuthorCache): Promise<void> {
  const dir = dirname(CACHE_PATH);
  await mkdir(dir, { recursive: true });
  await writeFile(CACHE_PATH, JSON.stringify(cache, null, 2));
}

/**
 * Check if a URL is in the cache
 */
export function getCachedEntry(cache: AuthorCache, url: string): CacheEntry | undefined {
  // Normalize URL
  const normalized = normalizeUrl(url);
  return cache.entries[normalized];
}

/**
 * Add or update a cache entry
 */
export function setCacheEntry(
  cache: AuthorCache,
  url: string,
  hasMonica: boolean,
  authors: string[]
): void {
  const normalized = normalizeUrl(url);
  cache.entries[normalized] = {
    url: normalized,
    checkedAt: new Date().toISOString(),
    hasMonica,
    authors,
  };
}

/**
 * Normalize URL for consistent cache keys
 */
function normalizeUrl(url: string): string {
  return url
    .replace("live-starburst.pantheonsite.io", "www.starburst.io")
    .replace(/\/$/, "");
}

/**
 * Check if we should re-check a cached entry (e.g., if it's old)
 */
export function shouldRecheck(entry: CacheEntry, maxAgeDays = 30): boolean {
  const checkedAt = new Date(entry.checkedAt);
  const ageMs = Date.now() - checkedAt.getTime();
  const ageDays = ageMs / (1000 * 60 * 60 * 24);
  return ageDays > maxAgeDays;
}
