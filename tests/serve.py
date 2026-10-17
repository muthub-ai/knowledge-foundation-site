"""Static server with Vercel's cleanUrls behaviour (/a/b -> a/b.html, /a/ -> a/index.html), for the browser tests.

It also sends the response headers from vercel.json (the Content-Security-Policy on /graph/ above all), so a CSP
violation shows up in the browser tests as a console error, as it would on Vercel."""

import http.server
import json
import os
import re
import sys
from functools import partial
from pathlib import Path
from urllib.parse import urlsplit

_RULES = [(re.compile(r["source"]), r["headers"]) for r in json.loads((Path(__file__).resolve().parents[1] / "vercel.json").read_text())["headers"]]


class Handler(http.server.SimpleHTTPRequestHandler):
    extensions_map = {**http.server.SimpleHTTPRequestHandler.extensions_map, ".md": "text/markdown; charset=utf-8"}

    def translate_path(self, path):
        local = super().translate_path(path)
        if not os.path.exists(local) and os.path.exists(local + ".html"):
            return local + ".html"
        return local

    def end_headers(self):
        path = urlsplit(self.path).path
        for pattern, headers in _RULES:
            if pattern.fullmatch(path):
                for h in headers:
                    if h["key"].lower() != "content-type":  # the server already sends the right type
                        self.send_header(h["key"], h["value"])
        super().end_headers()

    def send_error(self, code, message=None, explain=None):
        page = os.path.join(self.directory, "404.html")
        if code == 404 and os.path.exists(page):
            body = open(page, "rb").read()
            self.send_response(404)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
            return
        super().send_error(code, message, explain)

    def log_message(self, *args):
        pass


if __name__ == "__main__":
    root, port = sys.argv[1], int(sys.argv[2])
    http.server.ThreadingHTTPServer(("127.0.0.1", port), partial(Handler, directory=root)).serve_forever()
