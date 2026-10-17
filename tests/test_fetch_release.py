"""fetch_release downloads the release assets and unpacks the bundle; the network is replaced by local bytes."""

import io
import json
import sys
import tarfile
import tempfile
import unittest
from pathlib import Path
from unittest import mock

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from scripts import fetch_release  # noqa: E402


def tgz() -> bytes:
    buf = io.BytesIO()
    with tarfile.open(fileobj=buf, mode="w:gz") as tar:
        for name, text in (("wiki/governed-ai/x.md", "---\ntitle: X\n---\nBody\n"), ("wiki.config.yaml", "name: Knowledge Foundation\n")):
            data = text.encode()
            info = tarfile.TarInfo(name)
            info.size = len(data)
            tar.addfile(info, io.BytesIO(data))
    return buf.getvalue()


class FetchRelease(unittest.TestCase):
    def test_latest_release_is_unpacked(self):
        responses = {
            "https://api.github.com/repos/muthub-ai/knowledge-foundation/releases/latest": json.dumps(
                {"tag_name": "kf-2026.10.20-7", "assets": [{"name": "bundle.tgz", "browser_download_url": "u/bundle"}, {"name": "graph.json", "browser_download_url": "u/graph"}]}).encode(),
            "u/bundle": tgz(),
            "u/graph": b'{"nodes": [], "edges": []}',
        }
        with tempfile.TemporaryDirectory() as d, mock.patch.object(fetch_release, "_get", side_effect=lambda url: responses[url]):
            out = fetch_release.fetch(Path(d) / ".release")
            self.assertTrue((out / "wiki" / "governed-ai" / "x.md").exists())
            self.assertTrue((out / "wiki.config.yaml").exists())
            self.assertEqual(json.loads((out / "graph.json").read_text()), {"nodes": [], "edges": []})

    def test_pinned_release_uses_the_tag(self):
        seen = []

        def get(url):
            seen.append(url)
            raise RuntimeError("stop")

        with tempfile.TemporaryDirectory() as d, mock.patch.object(fetch_release, "_get", side_effect=get), mock.patch.dict("os.environ", {"KF_RELEASE": "kf-2026.10.20-7"}):
            with self.assertRaises(RuntimeError):
                fetch_release.fetch(Path(d) / ".release")
        self.assertTrue(seen[0].endswith("/releases/tags/kf-2026.10.20-7"))


if __name__ == "__main__":
    unittest.main()
