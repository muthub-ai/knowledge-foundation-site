"""Build steps around Quartz. scripts/build.sh runs them in order:

  python -m kfsite fetch --out .build/release                       download the latest knowledge release (or KF_RELEASE)
  python -m kfsite stage --bundle .build/release/wiki --out .build/quartz/content
  (npx quartz build --output public)
  python -m kfsite post --bundle .build/release/wiki --graph .build/release/graph.json --public public
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

from .bundle import Bundle, load_config


def main(argv: list[str] | None = None) -> int:
    ap = argparse.ArgumentParser(prog="kfsite")
    sub = ap.add_subparsers(dest="cmd", required=True)
    f = sub.add_parser("fetch")
    f.add_argument("--out", type=Path, default=Path(".build/release"))
    s = sub.add_parser("stage")
    s.add_argument("--bundle", type=Path, required=True)
    s.add_argument("--out", type=Path, required=True)
    p = sub.add_parser("post")
    p.add_argument("--bundle", type=Path, required=True)
    p.add_argument("--graph", type=Path, required=True)
    p.add_argument("--public", type=Path, default=Path("public"))
    args = ap.parse_args(argv)

    if args.cmd == "fetch":
        from scripts.fetch_release import fetch

        fetch(args.out)
        return 0
    cfg = load_config(args.bundle)
    if args.cmd == "stage":
        from .stage import stage

        print(stage(args.bundle, args.out, cfg))
        return 0
    from .post import BuildError, check_output, finish

    bundle = Bundle(args.bundle, cfg)
    try:
        print(finish(bundle, args.graph, args.public))
    except BuildError as e:
        print(f"build failed: {e}", file=sys.stderr)
        return 1
    problems = check_output(args.public, bundle)
    for prob in problems:
        print(prob, file=sys.stderr)
    return 1 if problems else 0


if __name__ == "__main__":
    sys.exit(main())
