# Pages Guidelines

## Routing

Astro file-based routing:
- `index.astro` → `/`
- `about.astro` → `/about`
- `[page].astro` → dynamic routes
- `blog/[...slug].astro` → catch-all for blog posts

## Page Structure

Each page typically:
1. Imports `BaseLayout` from `@layouts/BaseLayout.astro`
2. Imports components from `@components/`
3. Imports data from `@config/`
4. Wraps content in `<BaseLayout title="" description="">`

```astro
---
import BaseLayout from "@layouts/BaseLayout.astro";
import SomeComponent from "@components/SomeComponent.astro";
import someData from "@config/someData.json";
---

<BaseLayout title="Page Title" description="Meta description">
    <SomeComponent />
</BaseLayout>
```

## Key Pages

| Page | Purpose |
|------|---------|
| `index.astro` | Homepage with hero, gallery, CTA |
| `about.astro` | Bio, fast facts, personal info |
| `speaking.astro` | Speaking engagements, talks |
| `contact.astro` | Contact form |
| `blog/index.astro` | Blog listing |
| `blog/[...slug].astro` | Individual blog posts |

## Content Tone

Monica's personal site - pages should feel warm and conversational:
- Use "I" and "my" freely
- Casual greetings welcome ("Hi, I'm Monica!")
- Playful section headers OK (e.g., "Fast Facts", "The Journey")

## Styling

- Uses Tailwind CSS utility classes
- Common patterns: `container`, `mx-auto`, `pt-36 md:pt-44`
- Typography: `h1`, `h2`, `description` classes defined globally
- Primary color: `text-primary-600`, `bg-primary-*`
