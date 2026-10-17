import { test, expect, Page } from "@playwright/test";
import * as fs from "fs";
import * as path from "path";

// The Quartz pages. Needs a real `bash scripts/build.sh` build (CI sets KF_QUARTZ=1); skipped against the stand-in.
test.skip(!process.env.KF_QUARTZ, "needs a real Quartz build (KF_QUARTZ=1)");

const graph = JSON.parse(fs.readFileSync(path.resolve("public/graph.json"), "utf8"));
const notes = graph.nodes.filter((n: any) => n.type !== "Source" && n.type !== "Theme");
const themes = graph.nodes.filter((n: any) => n.type === "Theme");

// No sideways scrolling. Waits up to 5 s for the layout to settle (fonts, Quartz's scripts); on failure it names the
// html/body widths and any element sticking out past the right edge, including through ::before/::after.
async function noHorizontalScroll(page: Page) {
  await page.waitForLoadState("networkidle").catch(() => {});
  const measure = () => page.evaluate(() => {
    // vw is the visible width. Where Chromium draws a classic scrollbar (CI's phone profile does on long pages; real
    // phones overlay it), the root's scroll range also spans the scrollbar's gutter, so the page itself is measured
    // against the full window width and every element against the visible width.
    const vw = document.documentElement.clientWidth;
    const pageOver = document.documentElement.scrollWidth - Math.max(vw, window.innerWidth);
    // An element sticks out if its box does, or if its overflowing content (children, ::before/::after) does: measured
    // from where the element starts, not from 0, so a small element near the right edge with a wide pseudo is caught.
    const reach = (el: Element) => {
      const r = el.getBoundingClientRect();
      const s = getComputedStyle(el);
      return Math.max(r.right, s.overflowX === "visible" ? r.left + (el as HTMLElement).scrollWidth : 0);
    };
    const pseudo = (el: Element) => ["::before", "::after"]
      .filter((p) => { const c = getComputedStyle(el, p).content; return c && c !== "none" && c !== "normal"; })
      .map((p) => `${p}{${getComputedStyle(el, p).position} w=${getComputedStyle(el, p).width}}`).join("");
    const name = (el: Element) => `${el.tagName.toLowerCase()}${el.id ? "#" + el.id : ""}${[...el.classList].map((c) => "." + c).join("")}`;
    const culprits = [...document.querySelectorAll("body *")]
      .filter((el) => reach(el) > vw + 1)
      .slice(-8)
      .map((el) => `${name(el)} right=${Math.round(el.getBoundingClientRect().right)} reach=${Math.round(reach(el))} ${pseudo(el)}`);
    const box = (el: Element) => {
      const s = getComputedStyle(el); const r = el.getBoundingClientRect();
      return `x=${Math.round(r.left)}..${Math.round(r.right)} w=${s.width} m=${s.marginLeft}/${s.marginRight} p=${s.paddingLeft}/${s.paddingRight} pos=${s.position} tf=${s.transform} ox=${s.overflowX} ${pseudo(el)}`;
    };
    const outside = [...document.documentElement.children].filter((el) => el !== document.head && el !== document.body).map(name).join(",");
    const env = `inner=${window.innerWidth} vv=${Math.round(window.visualViewport?.width ?? 0)}x${window.visualViewport?.scale ?? 1} se=${document.scrollingElement?.tagName} sw=${document.scrollingElement?.scrollWidth} outside-body=[${outside}]`;
    const over = Math.max(pageOver, culprits.length ? Math.round(Math.max(...[...document.querySelectorAll("body *")].map(reach)) - vw) : 0);
    return { over, detail: `viewport ${vw}, ${env}, html ${document.documentElement.scrollWidth} {${box(document.documentElement)}}, body ${document.body.scrollWidth} {${box(document.body)}}; ${culprits.join("; ") || "no element inside body reaches past the edge"}` };
  });
  let r = await measure();
  for (let i = 0; i < 10 && r.over > 1; i++) {
    await page.waitForTimeout(500);
    r = await measure();
  }
  expect(r.over, `wider than the screen by ${r.over}px: ${r.detail}`).toBeLessThanOrEqual(1);
}

test("home page: title, themes and a same-site link to the graph", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Knowledge Foundation/);
  await expect(page).not.toHaveTitle(/^Untitled|Knowledge Foundation · Knowledge Foundation/);
  await expect(page.locator("article")).toContainText("Themes");
  await expect(page.locator("article")).not.toContainText(/^\s*title:/m);
  await expect(page.locator('article a[href$="/graph/"]').first()).toBeVisible();
  await noHorizontalScroll(page);
});

test("a note page shows the provenance callout, sources and JSON-LD", async ({ page }) => {
  const n = notes[0];
  await page.goto(n.url);
  // Frontmatter is parsed, not printed: the note's own title, and no raw YAML in the article.
  await expect(page).toHaveTitle(new RegExp("^" + n.label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  await expect(page.locator("article")).not.toContainText(/^\s*(title|type|okf_version):/m);
  // Footnote references resolve (a dangling one renders as a lone "[").
  await expect(page.locator("article")).not.toContainText(/\[\^|[.\w]\[(\s|$)/);
  await expect(page.locator("article .callout").first()).toContainText(/Reviewed by Muthu|Not yet reviewed|Machine-confirmed/);
  await expect(page.locator("article")).toContainText("Sources");
  const ld = JSON.parse((await page.locator('script[data-kf="jsonld"]').textContent())!);
  expect([].concat(ld)[0]["@type"]).toBe("Article");
  await noHorizontalScroll(page);
  const graphLink = page.locator('article a[href^="/graph/?node="]').first();
  await expect(graphLink).toHaveAttribute("href", "/graph/?node=" + encodeURIComponent(n.id));
  await graphLink.click();
  await expect(page.locator("#g-panel h2")).toHaveText(n.label);
});

test("theme pages list their notes", async ({ page }) => {
  for (const t of themes) {
    await page.goto(t.url + "/");
    const members = notes.filter((n: any) => n.id.startsWith(t.url.slice(1) + "/"));
    expect(members.length).toBeGreaterThan(0);
    await expect(page.locator(`a[href*="${members[0].url.split("/").pop()}"]`).first()).toBeVisible();
  }
});

test("internal links on the home page and ten notes all resolve", async ({ page, request }) => {
  const seen = new Set<string>();
  for (const url of ["/", ...notes.slice(0, 10).map((n: any) => n.url)]) {
    await page.goto(url);
    const hrefs = await page.locator("a[href]").evaluateAll((as) => as.map((a) => (a as HTMLAnchorElement).href));
    for (const h of hrefs) {
      const u = new URL(h);
      if (u.origin !== new URL(page.url()).origin || seen.has(u.pathname)) continue;
      seen.add(u.pathname);
      expect((await request.get(u.pathname)).status(), `${u.pathname} (linked from ${url})`).toBe(200);
    }
  }
  expect(seen.size).toBeGreaterThan(20);
});

test("machine-readable files", async ({ request }) => {
  for (const f of ["/llms.txt", "/robots.txt", "/sitemap.xml", "/graph.json", notes[0].url + ".md"]) {
    expect((await request.get(f)).status(), f).toBe(200);
  }
});

test("dark mode carries over from a note to the graph explorer", async ({ page }) => {
  await page.goto(notes[0].url);
  await page.evaluate(() => localStorage.setItem("theme", "dark"));
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("saved-theme", "dark");
  await page.goto("/graph/");
  await expect(page.locator("html")).toHaveAttribute("saved-theme", "dark");
});
