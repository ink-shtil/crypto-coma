// Snapshots external reference pages about large numbers into site/public/cache/ so the
// site never depends on a live external link. Stores a labelled text extract + a link to
// the original (not a full copy), and writes a manifest the archive route renders.
//
// Run manually / in CI:  npm run cache   (network-dependent — NOT part of the normal build)
import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const sourceList = resolve(here, "../../docs/data/cached-pages.json");
const outDir = resolve(here, "../public/cache");
const manifestPath = resolve(here, "../src/data/cache-manifest.json");
const MAX_CHARS = 2400;

mkdirSync(outDir, { recursive: true });

const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");

function extractText(html) {
  const paras = [...html.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)]
    .map((m) => decode(m[1].replace(/<[^>]+>/g, "").replace(/\[\d+\]/g, "")).trim())
    .filter((t) => t.length > 40);
  let out = "";
  for (const p of paras) {
    if (out.length + p.length > MAX_CHARS) break;
    out += p + "\n\n";
  }
  return out.trim();
}

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function snapshotHtml({ title, url, capturedAt, text }) {
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)} — cached snapshot</title>
<style>body{font:16px/1.6 Georgia,serif;max-width:44rem;margin:2rem auto;padding:0 1rem;color:#1a1a2e;background:#f7f5ef}
.banner{font:0.85rem system-ui;background:#fff;border:1px solid #d8d4c8;border-radius:6px;padding:.75rem 1rem;margin-bottom:1.5rem}
a{color:#3a3a8c}</style></head>
<body>
<div class="banner"><strong>Cached snapshot</strong> captured ${capturedAt} from
<a href="${esc(url)}" rel="noopener nofollow">${esc(url)}</a>.
This is a text extract for archival/link-rot protection; see the original for the full page.</div>
<h1>${esc(title)}</h1>
${text.split("\n\n").map((p) => `<p>${esc(p)}</p>`).join("\n")}
</body></html>
`;
}

const { pages } = JSON.parse(readFileSync(sourceList, "utf-8"));
const capturedAt = new Date().toISOString().slice(0, 10);
const results = [];

for (const page of pages) {
  try {
    const res = await fetch(page.url, {
      headers: { "user-agent": "crypto-coma-archiver/0.1 (educational)" },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();
    const text = extractText(html);
    if (!text) throw new Error("no extractable text");
    writeFileSync(resolve(outDir, `${page.id}.html`), snapshotHtml({ ...page, capturedAt, text }));
    results.push({ ...page, status: "ok", capturedAt, chars: text.length });
    console.log(`[cache] ok   ${page.id} (${text.length} chars)`);
  } catch (err) {
    results.push({ ...page, status: "failed", error: String(err.message ?? err) });
    console.warn(`[cache] FAIL ${page.id}: ${err.message ?? err}`);
  }
}

writeFileSync(
  manifestPath,
  JSON.stringify({ generatedAt: capturedAt, pages: results }, null, 2) + "\n",
);
console.log(`[cache] wrote manifest (${results.filter((r) => r.status === "ok").length}/${results.length} ok)`);
