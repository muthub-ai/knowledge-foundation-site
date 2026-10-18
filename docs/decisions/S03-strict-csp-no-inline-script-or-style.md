# S03: Strict Content-Security-Policy on the explorer

Status: accepted, October 17, 2026

## Context

The explorer renders user-visible data from `graph.json` (titles, summaries, evidence quotes). A permissive policy
would make any injection in that data executable.

## Decision

The explorer pages are served with `default-src 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com`
and no inline scripts or styles. Dynamic colours are applied through data attributes and CSS custom properties; all
text is escaped; only same-site paths and `https:` URLs become links.

## Consequences

`tests/serve.py` sends the same headers, so a violation fails the browser tests. Quartz pages keep Quartz's own policy;
the one-line dark-default script is the only addition to them.
