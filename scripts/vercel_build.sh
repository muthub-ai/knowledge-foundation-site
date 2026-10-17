#!/usr/bin/env bash
# Vercel's install + build in one step, so a failure is visible: Vercel's build logs are not always at hand, so on a
# failed PREVIEW build the log tail becomes the preview page (behind Vercel Authentication) and the step succeeds.
# Production, and any run outside Vercel, fails normally (production keeps the last good deployment). Never promote a
# failed preview to production: its page is the log.
set -uo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
LOG="$ROOT/.build/vercel.log"
mkdir -p "$ROOT/.build"

# Python: Vercel's build image (Amazon Linux 2023) has an old system python3, often without pip, next to newer
# Pythons. Use the newest 3.11.4+ (tarfile's extraction filters) (install 3.12 with dnf if there is none) in a virtual environment, which brings its
# own pip and sidesteps the "externally managed" system install; put it first on PATH for build.sh.
PY=""
for c in python3.14 python3.13 python3.12 python3.11 python3; do
  if command -v "$c" >/dev/null 2>&1 && "$c" -c 'import sys; sys.exit(0 if sys.version_info >= (3, 11, 4) else 1)' 2>/dev/null; then
    PY="$(command -v "$c")"; break
  fi
done
if [ -z "$PY" ] && command -v dnf >/dev/null 2>&1; then
  dnf install -y -q python3.12 python3.12-pip >/dev/null 2>&1 && PY="$(command -v python3.12 || true)"
fi
VENV_NOTE="no 3.11+ python found"
if [ -n "$PY" ]; then
  if "$PY" -m venv "$ROOT/.build/venv" >/dev/null 2>&1; then
    export PATH="$ROOT/.build/venv/bin:$PATH"; VENV_NOTE="venv from $PY"
  else
    VENV_NOTE="venv failed; using $PY directly"; mkdir -p "$ROOT/.build/bin"; ln -sf "$PY" "$ROOT/.build/bin/python3"; export PATH="$ROOT/.build/bin:$PATH"
  fi
fi
{
  echo "== environment: VERCEL_ENV=${VERCEL_ENV:-} ref=${VERCEL_GIT_COMMIT_REF:-} sha=${VERCEL_GIT_COMMIT_SHA:-} KF_BRANCH=${KF_BRANCH:-}"
  echo "== python: $VENV_NOTE"
  echo "== $(command -v python3) $(python3 --version 2>&1) | $(python3 -m pip --version 2>&1) | node $(node --version 2>&1) | $(git --version 2>&1)"
  echo "== install" && bash "$ROOT/scripts/pip_install.sh" -r "$ROOT/requirements.txt" &&
  echo "== build" && bash "$ROOT/scripts/build.sh"
} 2>&1 | tee "$LOG"
rc=${PIPESTATUS[0]}
if [ "$rc" -ne 0 ] && [ "${VERCEL_ENV:-}" = preview ]; then
  rm -rf "$ROOT/public" && mkdir -p "$ROOT/public"
  { echo '<!doctype html><meta charset="utf-8"><meta name="robots" content="noindex"><title>Preview build failed</title>'
    echo "<h1>Preview build failed (exit $rc)</h1><pre>"
    tail -n 200 "$LOG" | sed -e 's/&/\&amp;/g' -e 's/</\&lt;/g' -e 's/>/\&gt;/g'
    echo '</pre>'; } > "$ROOT/public/index.html"
  echo "preview build failed (exit $rc); the log is the preview page"
  exit 0
fi
exit "$rc"
