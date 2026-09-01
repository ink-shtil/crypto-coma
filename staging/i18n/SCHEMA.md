# i18n translation task — one output file per language

You are one of several parallel translators. **Your only job:** translate a set of
content into **one target language** and write exactly one JSON file:

    staging/i18n/<LANG>.json

Do **not** modify any other file in the repository. Only create your output file.

## Target languages already present (do NOT retranslate)

`ru` (source of truth), `en` (second reference). For the article page, dicts already exist
for: ru, en, zh, ja, ko, hi, ar, de, fr, it, es, pt, he. For meditations page, overrides
already exist for: zh, ja, ko, de, fr, it, es, pt, hi, ar, he. Read those existing blocks
as style samples for tone and register.

## Source files (read-only)

- `site/src/data/reference-numbers.json` — 13 numbers + 7 sequences, fields `name` and
  `domain`/`note` are `{ru, en}` bilingual objects. Numbers also have `value_str`
  (math notation — copy as-is, never translate).
- `site/src/data/named-numbers.json` — 26 named numbers, keyed by `exp`
  (0…63, 100, 303), fields `name` and `use` are `{ru, en}`. `value_str` stays as-is.
- `site/src/data/meditations.ts` — sections `export const epigraphs` (6 items, id → `text`
  + `who`, both `{ru, en}`), `export const meditations` (10 entries) and
  `export const thoughtExperiments` (3 entries), each with `id`, `title`, `body`,
  `question`. Also `medationsIntro`, `thoughtExperimentsIntro` (see exact keys below).
- `site/src/pages/[lang]/article.astro` — the `dict` object with `en:` block and `ru:`
  block (and translated blocks for other languages as style samples).

## Tone

The site is a playful-but-formal mystification about very large numbers: a children's
dream dressed as an academic paper. Keep the tone: witty, slightly ironic, precise.
Translate from **ru** (primary source) and cross-check meaning against **en**. If ru and
en disagree, prefer ru (it is the source of the writing) but keep en's readability.

## Hard rules

- Keep all math/formulas/symbols untouched: `10^36`, `52!`, `≈`, `ℂ⇈`, `x★ = xˣ`,
  `(10³⁶)★²⁶`, `10^(3.6×10³⁷)`, `TREE(3)`, `f_α`, `ℵ₀`, `ε₀`, `g₆₄`, `L(n+1) = L(n)^L(n)`,
  `M(n) = log10 L(n)`, `a`, `b`, `d`, `p`, `z`, `crypto coma` (proper noun — keep in
  Latin script unless the language normally transliterates foreign names; check how the
  existing translation of your language handles "crypto coma" in `ui.ts` / `article.astro`
  and follow it).
- Keep `id`, `exp`, `value_str` fields identical.
- Names of people (Kronecker, Cantor, Hilbert, Gauss, Newton, Borges, Bremermann,
  Landauer) keep in the original script.
- The `note`/`source` fields of reference data are English citations — keep as-is.
- The `meta` of each JSON is already EN/ru — leave alone.

## Output schema

Write `staging/i18n/<LANG>.json` with this exact shape (`LANG` = your target locale code):

```json
{
  "lang": "<LANG>",
  "reference": {
    "numbers": { "<id>": { "name": "...", "domain": "..." }, ... },
    "sequences": { "<id>": { "name": "...", "note": "..." }, ... }
  },
  "named": { "<exp>": { "name": "...", "use": "..." }, ... },
  "epigraphs": { "<id>": { "text": "...", "who": "..." }, ... }
}
```

Cover ALL ids:
- numbers: undecillion, avogadro, deck52, eddington, photons, googol, shannon,
  go-positions, planck-volumes, aes256, skewes, graham, tree3
- sequences: naturals, tetration, ackermann, busy-beaver, fast-growing-hierarchy,
  cardinals, ordinals
- named exp keys: 0, 1, 2, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48,
  51, 54, 57, 60, 63, 100, 303
- epigraphs: kronecker, cantor, boys, hilbert, gauss, newton

## Extra scope ONLY for languages `ka` and `hy`

If your language is `ka` or `hy` you must ALSO produce the article page dict and the
meditations page overrides. Add these two keys to your JSON:

```json
{
  "article": {
    "title": "...", "abstractH": "...", "abstract": "...", "formalismH": "...",
    "formalism": "...", "starNote": "...", "magnitudeH": "...", "magnitude": "...",
    "diffH": "...", "diff": "...", "workH": "...", "work": "...", "existH": "...",
    "exist": "...", "cardinalityH": "...", "cardinality": "...", "questionsH": "...",
    "questions": ["...", "...", "...", "...", "...", "...", "..."],
    "disclaimerH": "...", "disclaimer": "..."
  },
  "meditations": {
    "intro": "...", "teHead": "...", "teIntro": "...",
    "entries": {
      "democracy": {"title":"...","body":"...","question":"..."},
      "name-instead": {"title":"...","body":"...","question":"..."},
      "nameless": {"title":"...","body":"...","question":"..."},
      "physically-transcendent": {"title":"...","body":"...","question":"..."},
      "enough": {"title":"...","body":"...","question":"..."},
      "no-top": {"title":"...","body":"...","question":"..."},
      "child-frontier": {"title":"...","body":"...","question":"..."},
      "ruler-of-infinities": {"title":"...","body":"...","question":"..."},
      "discovered-or-invented": {"title":"...","body":"...","question":"..."},
      "silence": {"title":"...","body":"...","question":"..."},
      "scribe": {"title":"...","body":"...","question":"..."},
      "babel": {"title":"...","body":"...","question":"..."},
      "seer": {"title":"...","body":"...","question":"..."}
    }
  }
}
```

Notes for the article dict:
- `formalism` and `magnitude` are template strings that embed `${meta.levels}`,
  `${meta.start_value_log10}`, `${b.value_str}`, `${cryptoComa.tower_height}` — copy
  those placeholders verbatim.
- `questions` is an array of exactly 7 strings; `disclaimer` is one long paragraph;
  `abstract` is the paper abstract.

## Finishing

1. Read the source files listed above.
2. Write `staging/i18n/<LANG>.json` with valid JSON (UTF-8). **Validate it** by running
   `python3 -m json.tool staging/i18n/<LANG>.json > /dev/null` — fix until it validates.
3. Report done with a one-line summary (strings translated, JSON valid).

Do not touch git, do not run builds, do not modify anything else.