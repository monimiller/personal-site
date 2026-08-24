#!/usr/bin/env bash
# beforeShellExecution hook: ask for confirmation before production deploys and
# destructive git operations. Everything else is allowed. Fails open (exit 0 /
# allow) so a hook problem never blocks normal work.
set -uo pipefail

input="$(cat)"
command="$(printf '%s' "$input" | jq -r '.command // empty' 2>/dev/null)"

allow() {
    printf '{"permission":"allow"}\n'
    exit 0
}

ask() {
    # $1 = user_message, $2 = agent_message
    jq -n --arg u "$1" --arg a "$2" \
        '{permission:"ask", user_message:$u, agent_message:$a}'
    exit 0
}

[ -n "$command" ] || allow

# Production deploy to Cloudflare (wrangler deploy, or `* run deploy`).
if printf '%s' "$command" | grep -Eq '(wrangler[[:space:]]+deploy|run[[:space:]]+deploy)'; then
    ask "Confirm production deploy" \
        "This deploys the site to production (monimiller.com). Confirm this is intended before continuing."
fi

# Force push — AGENTS.md says not to force-push unless explicitly instructed.
if printf '%s' "$command" | grep -Eq 'git[[:space:]]+push([[:space:]].*)?[[:space:]](--force|--force-with-lease|-f)([[:space:]]|$)'; then
    ask "Confirm force push" \
        "AGENTS.md says not to force-push unless explicitly instructed. Confirm before proceeding."
fi

# Destructive git operations that can discard work.
if printf '%s' "$command" | grep -Eq 'git[[:space:]]+reset[[:space:]]+--hard'; then
    ask "Confirm hard reset" \
        "git reset --hard discards uncommitted changes. Confirm before proceeding."
fi
if printf '%s' "$command" | grep -Eq 'git[[:space:]]+clean[[:space:]]+-[A-Za-z]*f'; then
    ask "Confirm git clean" \
        "git clean can permanently delete untracked files. Confirm before proceeding."
fi

allow
