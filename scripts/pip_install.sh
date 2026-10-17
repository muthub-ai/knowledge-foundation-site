#!/usr/bin/env bash
# pip install that works on Vercel's build image as well as CI and the Mac. The image's python3 may be "externally
# managed" (PEP 668); then the packages go in with --break-system-packages (the build machine is thrown away after).
#   bash scripts/pip_install.sh -r requirements.txt
set -u
python3 -m pip install --quiet --disable-pip-version-check "$@" && exit 0
echo "pip install failed; retrying with --break-system-packages" >&2
python3 -m pip install --quiet --disable-pip-version-check --break-system-packages "$@" && exit 0
echo "retrying with --user --break-system-packages" >&2
python3 -m pip install --quiet --disable-pip-version-check --user --break-system-packages "$@"
