# 001 — Remove unused React stack

| Field         | Value                                                                                                                                                                                                      |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Status        | TODO                                                                                                                                                                                                       |
| Priority      | HIGH                                                                                                                                                                                                       |
| Category      | Maintainability & architecture                                                                                                                                                                             |
| Commit        | `b49a9a5`                                                                                                                                                                                                  |
| Rule          | Beyond scan (related: `react-doctor/unused-dependency` / deslop unused packages). Scanner keeps `@astrojs/react` because `astro.config.mjs` imports it; peers `react` / `react-dom` stay as a side effect. |
| Canonical fix | https://www.react.doctor/prompts/rules/react-doctor/unused-dependency.md — remove confirmed unused production dependencies with the repo package manager, update lockfile, rebuild.                        |
| Leverage      | Every page currently pays for a React integration that ships **no** islands. Removing it cuts install/supply-chain surface and config noise.                                                               |

## Why this is real

Repo-wide search finds:

- **0** files matching `*.tsx` / `*.jsx`
- **0** Astro `client:` directives under `src/`
- **0** `from "react"` / `from "react-dom"` imports in application source

React exists only as dependencies + config wiring.

## Current code

`astro.config.mjs`:

```js
import react from "@astrojs/react";
// ...
integrations: [
    AutoImport({ /* ... */ }),
    mdx(),
    react(),
    tailwind(),
    // ...
],
```

`package.json` dependencies (excerpt):

```json
"@astrojs/react": "^3.0.10",
"@types/react": "^18.2.61",
"@types/react-dom": "^18.2.19",
"react": "^18.2.0",
"react-dom": "^18.2.0",
```

`tsconfig.json`:

```json
"jsx": "react-jsx",
"jsxImportSource": "react"
```

## Target

1. Remove the React integration from Astro config.
2. Remove React-related packages from `package.json` / lockfile.
3. Drop React JSX compiler options from `tsconfig.json` (Astro does not need them without React islands).

### Exact `astro.config.mjs` shape after

```js
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import AutoImport from "astro-auto-import";
import pagefind from "astro-pagefind";
import playformCompress from "@playform/compress";

export default defineConfig({
  site: "https://monimiller.com",
  markdown: {
    shikiConfig: {
      theme: "rose-pine-dawn",
      wrap: true,
    },
  },
  prefetch: true,
  integrations: [
    AutoImport({
      imports: ["@components/Admonition/Admonition.astro"],
    }),
    mdx(),
    tailwind(),
    sitemap(),
    pagefind(),
    playformCompress(),
  ],
  build: {
    format: "file",
  },
});
```

### Exact package removals

Using npm (repo has `package-lock.json`):

```bash
npm uninstall @astrojs/react react react-dom @types/react @types/react-dom
```

### Exact `tsconfig.json` change

Remove these two keys from `compilerOptions` only:

- `"jsx": "react-jsx"`
- `"jsxImportSource": "react"`

Leave `extends`, `paths`, and other options untouched.

## Steps (ordered)

1. Confirm again with `rg -n "from ['\"]react|client:|@astrojs/react" --glob '!node_modules/**' --glob '!package-lock.json' --glob '!bun.lock'`. Expect only `package.json` / `astro.config.mjs` / `tsconfig.json` hits.
2. Edit `astro.config.mjs` to the Target shape (delete `import react` and `react()`).
3. Run `npm uninstall @astrojs/react react react-dom @types/react @types/react-dom`.
4. Edit `tsconfig.json` to drop the two JSX keys.
5. Run verification below.
6. Do not touch Tailwind, MDX, AutoImport, pagefind, or content.

## Out of scope

- Deleting Astro components, blog content, or `scripts/`
- Adding new UI frameworks (Vue/Svelte/Preact)
- Changing `readme.md` marketing copy that mentions React (optional follow-up only)
- Plans 002–004

## Verification

Mechanical:

```bash
npm run build
npx react-doctor@latest --json --json-out /tmp/rd-after-001.json
# Expect: reactDetected false OR no React integration diagnostics; build succeeds
rg -n "from ['\"]react|@astrojs/react" --glob '!node_modules/**' --glob '!package-lock.json' --glob '!bun.lock'
# Expect: no matches
```

Behavioral:

- Homepage `/`, `/blog`, `/about`, `/speaking`, `/contact` still render (Astro-only).
- MDX admonitions on `src/content/otherPages/elements/index.mdx` still resolve via AutoImport.
