# improve-react audit notes (`b49a9a5`)

## Stack

| Fact                           | Value                                                            |
| ------------------------------ | ---------------------------------------------------------------- |
| Framework                      | Astro 4 + Tailwind                                               |
| React                          | Declared 18.2 + `@astrojs/react` — **no islands**                |
| Compiler / RSC / Query / Redux | None                                                             |
| Client JS                      | Vanilla (AOS/anime, Swiper on examples only, Cal.com on contact) |

## React Doctor summary

Score **48 Critical**, 20 diagnostics (1 error / 19 warnings). Categories seen: Maintainability 14, Performance 5, Security 1. **Bugs 0, Accessibility 0** on this tree (no React JSX).

Full dump: agent artifact `react-doctor-summary.txt` from the audit run.

## Rejected / deferred scanner hits

| Diagnostic                                                                     | Verdict                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------ |
| `unused-file` Admonition.astro                                                 | False positive — AutoImport string path    |
| `js-set-map-lookups` blogUtils arePostsRelated                                 | Dead function — fixed by plan 004 deletion |
| `no-spread-accumulator-in-reduce` countItems                                   | Needs evidence — ~25 posts at build        |
| `js-combine-iterations` / `async-await-in-loop` / Set lookups in `scripts/lib` | Offline CLI — low leverage                 |
| `socket/low-supply-chain-score` swiper                                         | Only `/examples/*`                         |

## Missed opportunities (scanner did not frame as React defects)

1. Drop the entire unused React integration (plan 001) — scanner treats config import as usage.
2. Gate or drop `/examples` demo routes if they are not meant to be public.
3. Keep FAQ/`Seo` `set:html` as trusted static/config HTML; revisit if answers become user-generated.
4. No React error/Suspense boundaries to add until real islands exist.
