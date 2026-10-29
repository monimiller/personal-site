# React improvement plans

Audit commit: `b49a9a5` (main at audit time).  
Scanner: React Doctor 0.9.12 — score **48 Critical** with **20** diagnostics, but **zero** `.tsx`/`.jsx` files and **zero** Astro `client:` islands. This is an Astro site with a dormant React integration.

## Recommended order

| Order | Plan                                                                         | Depends on                               | Status |
| ----- | ---------------------------------------------------------------------------- | ---------------------------------------- | ------ |
| 1     | [001-remove-unused-react-stack.md](001-remove-unused-react-stack.md)         | —                                        | TODO   |
| 2     | [002-remove-unused-npm-deps.md](002-remove-unused-npm-deps.md)               | Prefer after 001 (shared lockfile churn) | TODO   |
| 3     | [003-prune-unused-theme-files.md](003-prune-unused-theme-files.md)           | —                                        | TODO   |
| 4     | [004-remove-unused-arePostsRelated.md](004-remove-unused-arePostsRelated.md) | —                                        | TODO   |

## Do not execute without re-check

- `Admonition.astro` — scanner `unused-file` is a **false positive** (string-registered via `astro-auto-import` in `astro.config.mjs` and used in MDX).
- `scripts/lib/*` perf findings — offline import CLI; tiny leverage vs user sessions.
- `countItems` spread-accumulator — ~25 posts / few categories at build time; needs a measured win before changing.
- `swiper` Socket score — only loaded on `/examples/*` demo pages, not production routes.

## How to run a plan

Hand any plan file to an agent (or `improve-react execute <plan>`). Plans are self-contained; do not invent fixes beyond the Target section.
