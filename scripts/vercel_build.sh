#!/usr/bin/env bash
# Vercel's install + build in one step, so a failure is visible: Vercel's build logs are not always at hand, so on a
# failed PREVIEW build the log tail becomes the preview page (behind Vercel Authentication) and the step succeeds.
# Production fails normally and keeps the last good deployment.
set -uo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
LOG="$ROOT/.build/vercel.log"
mkdir -p "$ROOT/.build"
{
  echo "== environment: VERCEL_ENV=${VERCEL_ENV:-} ref=${VERCEL_GIT_COMMIT_REF:-} sha=${VERCEL_GIT_COMMIT_SHA:-} KF_BRANCH=${KF_BRANCH:-}"
  echo "== $(command -v python3) $(python3 --version 2>&1) | $(python3 -m pip --version 2>&1) | node $(node --version 2>&1) | $(git --version 2>&1)"
  echo "== install" && bash "$ROOT/scripts/pip_install.sh" -r "$ROOT/requirements.txt" &&
  echo "== build" && bash "$ROOT/scripts/build.sh"
} 2>&1 | tee "$LOG"
rc=${PIPESTATUS[0]}
if [ "$rc" -ne 0 ] && [ "${VERCEL_ENV:-}" != production ]; then
  rm -rf "$ROOT/public" && mkdir -p "$ROOT/public"
  { echo '<!doctype html><meta charset="utf-8"><meta name="robots" content="noindex"><title>Preview build failed</title>'
    echo "<h1>Preview build failed (exit $rc)</h1><pre>"
    tail -n 200 "$LOG" | sed -e 's/&/\&amp;/g' -e 's/</\&lt;/g' -e 's/>/\&gt;/g'
    echo '</pre>'; } > "$ROOT/public/index.html"
  echo "preview build failed (exit $rc); the log is the preview page"
  exit 0
fi
exit "$rc"
