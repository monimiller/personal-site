import { defineCollection, reference, z } from "astro:content";

// Type-check frontmatter using a schema
const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // reference the authors collection https://docs.astro.build/en/guides/content-collections/#defining-collection-references
      authors: z.array(reference("authors")),
      // Transform string to Date object
      pubDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      updatedDate: z
        .string()
        .or(z.date())
        .optional()
        .transform((str) => (str ? new Date(str) : undefined)),
      heroImage: image().optional(), // TODO: make this required
      categories: z.array(z.string()),
      // blog posts will be excluded from build if draft is "true"
      draft: z.boolean().optional(),
      canonicalUrl: z.string().url().optional(),
    }),
});

// authors
const authorsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      avatar: image(),
      about: z.string(),
      email: z.string(),
      authorLink: z.string(), // author page link. Could be a personal website, github, twitter, whatever you want
    }),
});

// other pages
const otherPagesCollection = defineCollection({
  type: "content",
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      draft: z.boolean().optional(),
    }),
});

// Speaking
const SpeakingCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(), // TODO Remove optional
      image: image().optional(),
      link: z.string().url().optional(),
      location: z.string(),
      event: z.string().optional(),
      date: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val))
        .optional(), // TODO Remove optional
      type: z.enum(["conference", "webinar", "promo", "meetup"]).optional(),
    }),
});

export const collections = {
  blog: blogCollection,
  authors: authorsCollection,
  otherPages: otherPagesCollection,
  speaking: SpeakingCollection,
};
