// Shared types for the import script

export interface RssPost {
  title: string;
  link: string;
  pubDate: Date;
  creator: string;
  categories: string[];
  guid: string;
  description: string;
}

export interface AuthorInfo {
  name: string;
  slug: string;
  title?: string;
  company?: string;
  imageUrl?: string;
}

export interface ExtractedContent {
  title: string;
  description: string;
  pubDate: string;
  authors: AuthorInfo[];
  categories: string[];
  heroImageUrl?: string;
  htmlContent: string;
}

export interface FrontmatterData {
  title: string;
  description: string;
  pubDate: string;
  authors: string[];
  categories: string[];
  heroImage: string;
  draft: boolean;
  canonicalUrl: string;
}

export interface ImportResult {
  success: boolean;
  slug: string;
  path: string;
  warnings: string[];
  errors: string[];
}
