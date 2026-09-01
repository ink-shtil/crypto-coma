// i18n completeness check for EVERY locale (not just non-Latin ones).
//
// Two signals, computed on each page's <main> content (chrome is ignored):
//  1. English fallback — the page's text is ~identical to the English page (works for
//     Latin-script locales like de/fr, where a script test cannot tell translation from
//     fallback). Measured by Jaccard word-overlap vs the EN page.
//  2. Low script share — for non-Latin locales, too few letters are in the locale's script.
//
// A page failing either signal is an "unfinished transcription".
// Usage:  npm run build && npm run check:i18n   (exit 1 if any page is unfinished)
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join, dirname, resolve, relative } from "node:path";
import { fileURLToPath } from "node:url";

const DIST = resolve(dirname(fileURLToPath(import.meta.url)), "../dist");
const DEFAULT = "en";
const SCRIPT_THRESHOLD = 0.3; // ≥30% of letters in the locale's script (non-Latin only)
const FALLBACK_THRESHOLD = 0.85; // ≥85% word-overlap with EN ⇒ untranslated fallback
const MIN_LETTERS = 25;

const SCRIPTS = {
  ru: /[Ѐ-ӿ]/g,
  zh: /[㐀-䶿一-鿿豈-﫿]/g,
  ja: /[぀-ヿ㐀-䶿一-鿿]/g,
  ko: /[가-힣ᄀ-ᇿ㄰-㆏]/g,
  hi: /[ऀ-ॿ]/g,
  ar: /[؀-ۿݐ-ݿﭐ-﷿ﹰ-﻿]/g,
  he: /[֐-׿ﬀ-ﭏ]/g,
  ka: /[Ⴀ-ჿ]/g,
  hy: /[԰-֏ﬔ-ﬗ]/g,
};
const LATIN = /[A-Za-zÀ-ɏ]/g;

function mainText(html) {
  const m = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  const body = m ? m[1] : html;
  return body
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z]+;|&#\d+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const tokens = (s) => new Set(s.toLowerCase().split(/[^\p{L}\p{N}]+/u).filter((w) => w.length > 1));

function jaccard(a, b) {
  if (!a.size && !b.size) return 1;
  let inter = 0;
  for (const w of a) if (b.has(w)) inter++;
  return inter / (a.size + b.size - inter);
}

function localePages(loc) {
  const base = join(DIST, loc);
  const out = new Map();
  if (!existsSync(base)) return out;
  const walk = (d) => {
    for (const n of readdirSync(d)) {
      const p = join(d, n);
      if (statSync(p).isDirectory()) walk(p);
      else if (n.endsWith(".html")) out.set(relative(base, p), readFileSync(p, "utf-8"));
    }
  };
  walk(base);
  return out;
}

if (!existsSync(DIST)) {
  console.error(`[check-i18n] ${DIST} not found — run \`npm run build\` first.`);
  process.exit(2);
}

const enPages = localePages(DEFAULT);
const enText = new Map([...enPages].map(([k, html]) => [k, mainText(html)]));
const enTokens = new Map([...enText].map(([k, t]) => [k, tokens(t)]));

// A locale directory is one with a home page (index.html) at its root — this excludes
// build/asset dirs like _astro, cache and img.
const locales = readdirSync(DIST)
  .filter(
    (n) =>
      n !== DEFAULT &&
      statSync(join(DIST, n)).isDirectory() &&
      existsSync(join(DIST, n, "index.html")),
  )
  .sort();

let flaggedTotal = 0;
console.log(
  `i18n completeness — flag if ≥${Math.round(FALLBACK_THRESHOLD * 100)}% word-overlap with EN` +
    `, or (non-Latin) <${Math.round(SCRIPT_THRESHOLD * 100)}% of letters in-script\n`,
);

for (const loc of locales) {
  const pages = localePages(loc);
  const scriptRe = SCRIPTS[loc];
  const flagged = [];
  let checked = 0;

  for (const [rel, html] of pages) {
    const text = mainText(html);
    const latin = (text.match(LATIN) || []).length;
    const script = scriptRe ? (text.match(scriptRe) || []).length : 0;
    if (latin + script < MIN_LETTERS) continue;
    checked++;

    // The reference page is an unavoidably Latin-heavy data table (10^N values, a…z,
    // notations, English citations). Judge it only by the English-fallback signal — it is
    // "done" once its prose/data is no longer the English page, regardless of script share.
    const dataPage = rel.startsWith("reference/");

    const en = enTokens.get(rel);
    const sim = en ? jaccard(tokens(text), en) : 0;
    if (sim >= FALLBACK_THRESHOLD) {
      flagged.push({ rel, why: `EN fallback ${Math.round(sim * 100)}%` });
    } else if (!dataPage && scriptRe && script / (script + latin) < SCRIPT_THRESHOLD) {
      flagged.push({ rel, why: `${Math.round((100 * script) / (script + latin))}% ${loc}` });
    }
  }

  flaggedTotal += flagged.length;
  const mark = flagged.length === 0 ? "✓" : "✗";
  console.log(`${mark} ${loc}: ${checked - flagged.length}/${checked} localized`);
  for (const f of flagged) console.log(`    unfinished: ${loc}/${f.rel}  (${f.why})`);
}

if (flaggedTotal > 0) {
  console.log(`\nFAIL: ${flaggedTotal} page(s) look like unfinished transcriptions.`);
  process.exit(1);
}
console.log("\nPASS: every locale is fully translated.");
