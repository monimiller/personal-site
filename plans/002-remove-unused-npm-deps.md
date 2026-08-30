# 002 — Remove unused npm dependencies (`astro-analytics`, `astro-embed`)

| Field            | Value                                                                                                                                                                                                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Status           | TODO                                                                                                                                                                                                                                                    |
| Priority         | MEDIUM                                                                                                                                                                                                                                                  |
| Category         | Maintainability                                                                                                                                                                                                                                         |
| Commit           | `b49a9a5`                                                                                                                                                                                                                                               |
| Rule             | `deslop/unused-dependency` (canonical: `react-doctor/unused-dependency`)                                                                                                                                                                                |
| Scanner evidence | `package.json:0` — Unused dependency: `astro-analytics`; Unused dependency: `astro-embed`                                                                                                                                                               |
| Canonical fix    | https://www.react.doctor/prompts/rules/react-doctor/unused-dependency.md — Remove the confirmed unused dependency with the repository's package manager. Update the lockfile, then run a full React Doctor scan, the build, and focused runtime checks. |

## Validation (already done at audit)

- No `from "astro-analytics"` / `from "astro-embed"` imports under `src/`, `scripts/`, or config.
- Analytics on the site is GoatCounter in `src/layouts/BaseHead.astro` (`data-goatcounter=...`), not `astro-analytics`.
- No embed components from `astro-embed` appear in pages or MDX.

Outcome: **Confirmed failure** for both packages.

## Current code

`package.json` dependencies include:

```json
"astro-analytics": "^2.7.0",
"astro-embed": "^0.6.2",
```

## Target

Remove both packages and refresh the lockfile. Do not replace them with other analytics/embed libs in this plan.

```bash
npm uninstall astro-analytics astro-embed
```

After uninstall, `package.json` must not list either name under `dependencies` or `devDependencies`.

## Steps (ordered)

1. Re-confirm with:
   ```bash
   rg -n "astro-analytics|astro-embed" --glob '!node_modules/**' --glob '!package-lock.json' --glob '!bun.lock'
   ```
   Expect hits only in `package.json` (and possibly this plan / README).
2. Run `npm uninstall astro-analytics astro-embed`.
3. If `bun.lock` drifts, leave it alone unless the project’s usual workflow updates both locks in the same change; prefer matching whatever `npm run build` uses (`package-lock.json` is present and authoritative for npm).
4. Run verification.

## Out of scope

- Changing GoatCounter snippet in `BaseHead.astro`
- Removing `swiper` (used by example pages)
- Plan 001 React removals (coordinate lockfile if both run in one PR)

## Verification

```bash
npm run build
npx react-doctor@latest --json --json-out /tmp/rd-after-002.json
# Confirm neither unused-dependency message mentions astro-analytics or astro-embed
rg -n '"astro-analytics"|"astro-embed"' package.json
# Expect: no matches
```

Behavioral: any page that previously built still builds; GoatCounter script tag remains in HTML head.
