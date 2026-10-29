# 003 — Prune confirmed unused theme files

| Field         | Value                                                                                                                                                                                           |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Status        | TODO                                                                                                                                                                                            |
| Priority      | MEDIUM                                                                                                                                                                                          |
| Category      | Maintainability                                                                                                                                                                                 |
| Commit        | `b49a9a5`                                                                                                                                                                                       |
| Rule          | `deslop/unused-file` (canonical: `react-doctor/unused-file`)                                                                                                                                    |
| Canonical fix | https://www.react.doctor/prompts/rules/react-doctor/unused-file.md — Delete the file when it is obsolete. If the application still needs it, import or register it from the correct entry path. |

## Confirmed delete list (re-verified at audit)

These have **no** importers under `src/pages`, `src/layouts`, or other live components:

| Path                                              | Notes                                          |
| ------------------------------------------------- | ---------------------------------------------- |
| `src/components/ContactForm/ContactForm.astro`    | Contact page uses Cal.com embed, not this form |
| `src/components/Cta/CtaCardCenter2.astro`         | Live pages use `CtaCardCenter.astro` only      |
| `src/components/Footer/FooterLink.astro`          | No importers                                   |
| `src/components/Profile/Profile.astro`            | Only consumer of `teamData`                    |
| `src/components/TalkCard/TalkCardIcon.astro`      | Theme leftover                                 |
| `src/components/TalkCard/TalkCardSideImage.astro` | Only imported by TalkSideImage                 |
| `src/components/Talks/TalkSideImage.astro`        | No page imports                                |
| `src/config/talkData.json.ts`                     | Only imported by TalkSideImage                 |
| `src/config/teamData.json.ts`                     | Only imported by Profile                       |

## Reject — do NOT delete

| Path                                         | Why                                                                                                                                                                                                      |
| -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/components/Admonition/Admonition.astro` | Registered as a **string** in `astro.config.mjs` `AutoImport({ imports: ["@components/Admonition/Admonition.astro"] })` and used in `src/content/otherPages/elements/index.mdx`. Scanner false positive. |

## Target

Delete each file in the confirmed list. Remove empty directories left behind (`ContactForm/`, `TalkCard/`, `Talks/`, `Profile/` if empty). Do **not** delete `Cta/` (still has live `CtaCardCenter.astro` etc.). Do **not** delete `Footer/` (other footer files remain).

If `src/config/AGENTS.md` documents `talkData` / `teamData` as key files, update that table to remove those rows only (keep other guidelines).

## Steps (ordered)

1. For each path in the confirmed list, re-run:
   ```bash
   rg -n "ContactForm|CtaCardCenter2|FooterLink|Profile\.astro|TalkCardIcon|TalkCardSideImage|TalkSideImage|talkData|teamData" src --glob '!**/ContactForm/**' --glob '!**/Cta/CtaCardCenter2.astro' --glob '!**/Footer/FooterLink.astro' --glob '!**/Profile/**' --glob '!**/TalkCard/**' --glob '!**/Talks/**' --glob '!**/talkData.json.ts' --glob '!**/teamData.json.ts'
   ```
   Abort a delete if a new importer appears.
2. Delete the nine confirmed files (order: consumers first is fine — TalkSideImage before TalkCard\* and talkData; Profile before teamData).
3. Remove empty directories.
4. If `src/config/AGENTS.md` lists talk/team data, drop those two rows.
5. Run verification.

## Out of scope

- Deleting `/examples` demo pages (`TestimonialsSwiper` lives there and is intentionally reachable)
- Deleting `Admonition.astro`
- Refactoring live CTA / Footer / speaking components
- Content or copy changes

## Verification

```bash
npm run build
npx react-doctor@latest --json --json-out /tmp/rd-after-003.json
# Expect unused-file diagnostics for the deleted paths to be gone
# Expect Admonition unused-file may still appear — leave it; do not suppress
```

Behavioral:

- `/`, `/about`, `/blog`, `/speaking`, `/contact` still build and render.
- Elements/demo MDX still shows Admonition variants.
