"""Build public/ with the Quartz stand-in (tests/fake_quartz.py), for running the explorer browser tests where npm is
unavailable:  python tests/build_preview.py --bundle ../knowledge-foundation/wiki --graph ../knowledge-foundation/dist/graph.json"""

import argparse
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path[:0] = [str(ROOT), str(ROOT / "tests")]
import fake_quartz  # noqa: E402

from kfsite.bundle import Bundle, load_config  # noqa: E402
from kfsite.post import finish  # noqa: E402
from kfsite.stage import stage  # noqa: E402

ap = argparse.ArgumentParser()
ap.add_argument("--bundle", type=Path, required=True)
ap.add_argument("--graph", type=Path, required=True)
ap.add_argument("--content", type=Path, default=ROOT / ".build" / "preview-content")
ap.add_argument("--public", type=Path, default=ROOT / "public")
a = ap.parse_args()
cfg = load_config(a.bundle)
stage(a.bundle, a.content, cfg)
fake_quartz.render(a.content, a.public)
print(finish(Bundle(a.bundle, cfg), a.graph, a.public))
