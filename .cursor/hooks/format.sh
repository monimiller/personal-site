#!/usr/bin/env bash
# afterFileEdit hook: auto-format agent-edited files with the project's Prettier.
# Observational only — always exits 0 so it can never block the agent.
set -uo pipefail

input="$(cat)"

project_dir="${CURSOR_PROJECT_DIR:-$PWD}"
prettier_bin="$project_dir/node_modules/.bin/prettier"

# No-op if Prettier isn't installed yet (e.g. before `bun install`).
[ -x "$prettier_bin" ] || exit 0

file_path="$(printf '%s' "$input" | jq -r '.file_path // empty' 2>/dev/null)"
[ -n "$file_path" ] || exit 0
[ -f "$file_path" ] || exit 0

# --ignore-unknown skips file types Prettier can't parse; Prettier still honors
# .prettierrc and .prettierignore automatically.
(cd "$project_dir" && "$prettier_bin" --write --ignore-unknown "$file_path" >/dev/null 2>&1) || true

exit 0
