#!/usr/bin/env bash
# Full build of wiki.muthub.org into public/: the knowledge release -> Quartz content -> Quartz 5 -> finishing steps.
#
#   bash scripts/build.sh                                   latest release of muthub-ai/knowledge-foundation (Vercel)
#   KF_BUNDLE=../knowledge-foundation/wiki KF_GRAPH=../knowledge-foundation/dist/graph.json bash scripts/build.sh
#
# Quartz is checked out at the commit in quartz.ref (its default config + scripts/make_quartz_config.py's changes), so
# an upgrade is: bump quartz.ref, re-run make_quartz_config.py, build, test.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
WORK="$ROOT/.build"
REF="$(tr -d '[:space:]' < "$ROOT/quartz.ref")"
mkdir -p "$WORK"
cd "$ROOT"

# The graph explorer, rebuilt from the npm packages locked in package-lock.json (explorer/dist/explorer.js is committed
# for machines without npm; this keeps what ships identical to what CI tested). Without a lockfile yet, npm install
# writes one, and CI hands it back to be committed.
if [ -f package-lock.json ]; then npm ci --no-audit --no-fund --loglevel=error; else npm install --no-audit --no-fund --loglevel=error; fi
npm run --silent build:explorer

if [ -z "${KF_BUNDLE:-}" ] && [ -n "${KF_BRANCH:-}" ]; then
  # Preview builds of an unmerged change: the knowledge repository's branch KF_BRANCH, with its graph built here as the
  # site CI does (releases exist only for the knowledge repository's main). Production never sets KF_BRANCH.
  rm -rf "$WORK/kf"
  git clone --quiet --depth 1 -b "$KF_BRANCH" "https://github.com/${KF_REPO:-muthub-ai/knowledge-foundation}" "$WORK/kf"
  bash "$ROOT/scripts/pip_install.sh" -r "$WORK/kf/requirements.txt"
  (cd "$WORK/kf" && PYTHONPATH=tools python3 -m kb graph --out dist)
  KF_BUNDLE="$WORK/kf/wiki"
  KF_GRAPH="$WORK/kf/dist/graph.json"
  echo "knowledge branch $KF_BRANCH ($(git -C "$WORK/kf" rev-parse --short HEAD))"
fi
if [ -z "${KF_BUNDLE:-}" ]; then
  python3 -m kfsite fetch --out "$WORK/release"
  KF_BUNDLE="$WORK/release/wiki"
  KF_GRAPH="$WORK/release/graph.json"
fi
: "${KF_GRAPH:?set KF_GRAPH with KF_BUNDLE}"

if [ ! -d "$WORK/quartz/.git" ]; then
  rm -rf "$WORK/quartz"  # a build cache can restore the folder without its .git; git clone refuses a non-empty folder
  git clone --quiet --filter=blob:none https://github.com/jackyzha0/quartz.git "$WORK/quartz"
fi
git -C "$WORK/quartz" fetch --quiet origin "$REF" 2>/dev/null || git -C "$WORK/quartz" fetch --quiet origin
git -C "$WORK/quartz" checkout --quiet --force "$REF"

python3 -m kfsite stage --bundle "$KF_BUNDLE" --out "$WORK/quartz/content"
cp "$ROOT/quartz.config.yaml" "$WORK/quartz/quartz.config.yaml"
cp "$ROOT/quartz/custom.scss" "$WORK/quartz/quartz/styles/custom.scss"

(
  cd "$WORK/quartz"
  npm ci --no-audit --no-fund --loglevel=error
  npx quartz plugin install            # the same steps as Quartz's own CI; the default plugins come with npm ci
  npx quartz build --output "$ROOT/public"
)

python3 -m kfsite post --bundle "$KF_BUNDLE" --graph "$KF_GRAPH" --public "$ROOT/public"
echo "built $ROOT/public"
