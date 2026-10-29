# 004 — Remove unused `arePostsRelated` export

| Field            | Value                                                                                                                                     |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Status           | TODO                                                                                                                                      |
| Priority         | LOW                                                                                                                                       |
| Category         | Maintainability (also clears a dead Performance diagnostic)                                                                               |
| Commit           | `b49a9a5`                                                                                                                                 |
| Rule             | `deslop/unused-export` (canonical: `react-doctor/unused-export`); also clears `react-doctor/js-set-map-lookups` on the same dead function |
| Scanner evidence | `src/js/blogUtils.ts:100` unused export `arePostsRelated`; `src/js/blogUtils.ts:117` `array.includes()` inside `.some()`                  |
| Canonical fix    | https://www.react.doctor/prompts/rules/react-doctor/unused-export.md — Remove the declaration when it is obsolete.                        |

## Validation

- `arePostsRelated` is exported from `src/js/blogUtils.ts` and **never imported** elsewhere.
- The `js-set-map-lookups` hit is inside this unused function, so deleting the function removes both diagnostics without a Set micro-optimization.

Outcome: **Confirmed failure** (unused export). The Set finding is **Rejected as leverage** on its own (dead code); fix via deletion.

## Current code

`src/js/blogUtils.ts` lines 93–121:

```ts
// --------------------------------------------------------
/**
 * * returns true if the posts are related to each other
 * @param postOne: CollectionEntry<"blog">
 * @param postTwo: CollectionEntry<"blog">
 * note: this currently compares by tags and categories
 */
export function arePostsRelated(
  postOne: CollectionEntry<"blog">,
  postTwo: CollectionEntry<"blog">,
): boolean {
  // if titles are the same, then they are the same post. return false
  if (postOne.slug === postTwo.slug) return false;

  const postOneCategories = postOne.data.categories.map((category) =>
    slugify(category),
  );

  const postTwoCategories = postTwo.data.categories.map((category) =>
    slugify(category),
  );

  // if any categories match, return true
  const categoriesMatch = postOneCategories.some((category) =>
    postTwoCategories.includes(category),
  );

  return categoriesMatch;
}
```

## Target

Delete the entire `arePostsRelated` function and its preceding comment banner (the `// --------------------------------------------------------` block through the closing `}`), leaving `formatPosts` immediately followed by `countItems`.

Do **not** rewrite `countItems` / `sortByValue` / `getAllPosts` in this plan.

After edit, `slugify` must still be imported because `countItems` uses it.

## Steps (ordered)

1. Confirm no importers:
   ```bash
   rg -n "arePostsRelated" --glob '!node_modules/**'
   ```
   Expect only `src/js/blogUtils.ts`.
2. Delete the function block described in Target.
3. Ensure `import { slugify } from "@js/textUtils";` remains.
4. Run verification.

## Out of scope

- Changing `countItems` spread-accumulator (`no-spread-accumulator-in-reduce`) — Observation only at audit (tiny N at build time)
- Adding related-posts UI
- Scripts under `scripts/lib/`

## Verification

```bash
npm run build
npx react-doctor@latest --json --json-out /tmp/rd-after-004.json
# Expect unused-export arePostsRelated gone
# Expect js-set-map-lookups on blogUtils.ts:117 gone
rg -n "arePostsRelated" src
# Expect: no matches
```

Behavioral: `/blog`, `/blog/<slug>`, `/categories/<category>`, CategoryCloud still list/count categories correctly.
