"""A small hand-made OKF bundle covering the cases the build must handle."""

from __future__ import annotations

import json
from pathlib import Path

import yaml

GEN = {"by": "llmwiki2/0.5.0", "at": "2026-10-10T10:00:00Z"}


def fm(**kw) -> str:
    return "---\n" + yaml.safe_dump(kw, sort_keys=False, allow_unicode=True) + "---\n"


def make_bundle(root: Path) -> Path:
    w = root / "wiki"
    for d in ("governed-ai", "context-engineering", "raw"):
        (w / d).mkdir(parents=True)
    (w / "log.md").write_text("# Log\n")
    (w / "governed-ai" / "index.md").write_text("# Governed AI\n\n- [Guardrails](guardrails.md)\n")
    (w / "raw" / "own.md").write_text(fm(type="Source", title="My essay", resource="https://muthub.org/writing/my-essay.md",
                                         published_at="2025-05-01", origin_kind="own-essay", license_note="mine") + "Essay text with [a link](/writing/x).\n")
    (w / "raw" / "third.md").write_text(fm(type="Source", title="Vendor post", resource="https://example.com/post",
                                           published_at="2026-01-02", origin_kind="third-party-note", license_note="cite") + "Notes.\n")
    (w / "governed-ai" / "guardrails.md").write_text(fm(
        type="Concept", title="Guardrails by design", description="Policy enforced in the platform.", kind="Concept", status="stable",
        generated=GEN, verified={"by": "human:muthu", "at": "2026-10-12T09:00:00Z"}, stale_after="2027-04-12", tags=["governed-ai"],
        sources=[{"id": "s1", "resource": "/raw/own.md"}, {"id": "s2", "resource": "/raw/third.md"}],
        canonical_essay="https://muthub.org/writing/my-essay",
    ) + "# Overview\n\nSee [the context layer](../context-engineering/context-layer.md#why), [the vendor post](../raw/third.md), "
        "[a missing note](../governed-ai/nope.md) and [an essay](https://muthub.org/writing/x.md).[^s1]\n\n"
        "| a | b |\n|---|---|\n| 1 | 2 |\n\n[^s1]: My essay, 2025.\n\n# See also\n\n- [Context layer](../context-engineering/context-layer.md) - where facts live\n")
    (w / "context-engineering" / "context-layer.md").write_text(fm(
        type="Concept", title="Context layer <script>alert(1)</script>", description="Facts & rules", kind="Pattern", status="draft",
        generated=GEN, stale_after="2027-04-10", tags=[], sources=[{"id": "s1", "resource": "/raw/third.md"}],
        relations=[{"type": "applies", "target": "/governed-ai/guardrails.md"}, {"type": "inspired_by", "target": "/governed-ai/guardrails.md"}],
    ) + "# Overview\n\nBody, linking back to [guardrails](/governed-ai/guardrails.md).\n")
    (root / "graph.json").write_text(json.dumps({"version": "1", "nodes": [
        {"id": "governed-ai/guardrails.md", "type": "Concept", "label": "Guardrails by design", "url": "/governed-ai/guardrails", "summary": "s",
         "trust": "human-reviewed", "status": "stable", "updated": "2026-10-12", "tags": [], "degree": 1, "community": 0, "x": 0, "y": 0},
        {"id": "context-engineering/context-layer.md", "type": "Pattern", "label": "Context layer", "url": "/context-engineering/context-layer",
         "summary": "s", "trust": "unverified", "status": "draft", "updated": "2026-10-10", "tags": [], "degree": 1, "community": 1, "x": 10, "y": 5}],
        "edges": [{"source": "governed-ai/guardrails.md", "target": "context-engineering/context-layer.md", "type": "links_to", "origin": "link"}]}))
    return w
