# Agent Instructions

This project uses **bd** (beads) for issue tracking. Run `bd onboard` to get started.

## Quick Reference

```bash
bd ready              # Find available work
bd show <id>          # View issue details
bd update <id> --status in_progress  # Claim work
bd close <id>         # Complete work
bd sync               # Sync with git
```

## Landing the Plane (Session Completion)

**When ending a work session**, you MUST complete ALL steps below. Work is NOT complete until `git push` succeeds.

**MANDATORY WORKFLOW:**

1. **File issues for remaining work** - Create issues for anything that needs follow-up
2. **Run quality gates** (if code changed) - Tests, linters, builds
3. **Update issue status** - Close finished work, update in-progress items
4. **PUSH TO REMOTE** - This is MANDATORY:
   ```bash
   git pull --rebase
   bd sync
   git push
   git status  # MUST show "up to date with origin"
   ```
5. **Clean up** - Clear stashes, prune remote branches
6. **Verify** - All changes committed AND pushed
7. **Hand off** - Provide context for next session

**CRITICAL RULES:**
- Work is NOT complete until `git push` succeeds
- NEVER stop before pushing - that leaves work stranded locally
- NEVER say "ready to push when you are" - YOU must push
- If push fails, resolve and retry until it succeeds

## Cursor Cloud specific instructions

This is an Astro static site (Monica Miller's personal site/blog) deployed via Cloudflare Wrangler.

- **Package manager is Bun** (see `bun.lock` and `readme.md`), not npm, even though a `package-lock.json` and the devcontainer exist. Bun is installed at `~/.bun/bin`; if `bun` is not on your `PATH`, either use the full path `~/.bun/bin/bun` or run `export PATH="$HOME/.bun/bin:$PATH"`. Dependencies are refreshed automatically on VM startup via the update script (`bun install`).
- **Dev server:** `bun run dev` serves at `http://127.0.0.1:4321` (the `dev` script pins `--host 127.0.0.1`). Changes hot-reload.
- **Build:** `bun run build` outputs the static site to `./dist/`. `bun run preview` serves the build via `wrangler dev`.
- **No automated test suite exists.** `bun run astro check` currently reports pre-existing type errors/warnings (not wired into CI, not a blocking gate). `bun run format` runs Prettier; some `.astro` files are currently unformatted in the repo.
- **Draft blog posts** (e.g. posts with `draft: true` frontmatter) are only visible in the dev server, not in production builds.

