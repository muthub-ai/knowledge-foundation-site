"""Download a knowledge-foundation release (the latest, or the tag in KF_RELEASE) into a folder.

The knowledge repository is public, so no token is needed; GITHUB_TOKEN is used when present to avoid rate limits.
"""

from __future__ import annotations

import json
import os
import shutil
import tarfile
import urllib.request
from pathlib import Path

REPO = os.environ.get("KF_REPO", "muthub-ai/knowledge-foundation")


def _get(url: str) -> bytes:
    req = urllib.request.Request(url, headers={"Accept": "application/vnd.github+json", "User-Agent": "knowledge-foundation-site"})
    if os.environ.get("GITHUB_TOKEN"):
        req.add_header("Authorization", f"Bearer {os.environ['GITHUB_TOKEN']}")
    with urllib.request.urlopen(req, timeout=60) as r:  # noqa: S310 (fixed https host)
        return r.read()


def fetch(dest: Path) -> Path:
    tag = os.environ.get("KF_RELEASE")
    api = f"https://api.github.com/repos/{REPO}/releases/" + (f"tags/{tag}" if tag else "latest")
    release = json.loads(_get(api))
    assets = {a["name"]: a["browser_download_url"] for a in release["assets"]}
    if dest.exists():
        shutil.rmtree(dest)
    dest.mkdir(parents=True)
    for name in ("bundle.tgz", "graph.json"):
        (dest / name).write_bytes(_get(assets[name]))
    with tarfile.open(dest / "bundle.tgz") as tar:
        tar.extractall(dest, filter="data")
    print(f"release {release['tag_name']} -> {dest}")
    return dest


if __name__ == "__main__":
    fetch(Path(".release"))
