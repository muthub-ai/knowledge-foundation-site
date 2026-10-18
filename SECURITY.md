# Security

This site is static: it renders a public knowledge release and holds no credentials or personal data. The explorer is
served under a strict Content-Security-Policy (no inline scripts or styles, decision S03), all graph text is escaped,
and only same-site paths and `https:` URLs become links. A private blocklist scans the built site in CI.

**Reporting a problem:** please use GitHub's private vulnerability reporting (the **Security** tab → "Report a
vulnerability"), not a public issue.
