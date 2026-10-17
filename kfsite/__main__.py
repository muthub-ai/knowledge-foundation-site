"""python -m kfsite --bundle path/to/wiki --graph path/to/graph.json --out public

Without --bundle, downloads the latest knowledge-foundation release (or KF_RELEASE) first. See scripts/fetch_release.py.
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

from .build import Site, load_config


def main(argv: list[str] | None = None) -> int:
    ap = argparse.ArgumentParser(prog="kfsite")
    ap.add_argument("--bundle", type=Path)
    ap.add_argument("--graph", type=Path)
    ap.add_argument("--out", type=Path, default=Path("public"))
    args = ap.parse_args(argv)
    if args.bundle is None:
        from scripts.fetch_release import fetch

        release = fetch(Path(".release"))
        args.bundle, args.graph = release / "wiki", release / "graph.json"
    if args.graph is None:
        print("--graph is required with --bundle", file=sys.stderr)
        return 2
    site = Site(args.bundle, args.graph, args.out, load_config(args.bundle))
    print(site.build())
    return 0


if __name__ == "__main__":
    sys.exit(main())
