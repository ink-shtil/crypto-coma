---
id: doc-001
title: Humanizer review protocol (crypto-coma web app)
type: guide
created_date: '2026-09-07 14:27'
---
## Goal

Review all user-facing web-app copy for AI-writing tells and fix them, per the
`humanizer-zh` skill at `.agents/skills/humanizer-zh/SKILL.md` (guide is in Chinese,
but its method — Wikipedia "Signs of AI writing" — is language-agnostic). Each task
below covers ONE language across all sections.

## What "humanize" means here

Detect and fix: inflated significance ("testament to", "marks a turning point"),
promotional adjectives, trailing -ing pseudo-analysis, vague attribution ("experts
believe"), rule-of-three padding, negative parallelism ("not just X but Y"), AI
vocabulary (moreover/furthermore/delve/tapestry/landscape/showcases), synonym
churn, false ranges, filler phrases, emoji, bold overuse, inline-heading lists,
sycophancy, chatbot traces, knowledge-cutoff disclaimers, generic upbeat endings.

## CRITICAL — do NOT do these (they would damage the content)

- **Do NOT strip em-dashes.** In Russian the em-dash (тире) is required grammar
  ("a — первый шаг"); in the English/literary register it is deliberate style. The
  RU/EN source already passed review; keep that voice.
- **Do NOT flatten deliberate rhetoric.** Triples like "vast, real, and invisible"
  and the provocation-endings ("Now laugh at the two boys again…") are intentional.
- **Do NOT touch math, symbols, numbers, sources/citations, `${...}` template
  expressions, JSON keys, or the term "crypto coma"/`ℂ⇈`.**
- Preserve meaning and register; match the RU/EN source, which is the ground truth.

## Baseline

RU and EN source prose was reviewed and is clean — treat them as the reference
voice. The 13 translated languages are the actual work; `ka` and `hy` are
machine-drafted (they carry a "needs native review" banner in `Base.astro`).

## Where each language's copy lives (file map)

- `site/src/i18n/ui.ts` — short nav/labels (all langs)
- `site/src/data/content.ts` — home: manifest, legend, formula intro/outro, compact, part blurbs (all langs)
- `site/src/pages/[lang]/article.astro` — paper dict: abstract, formalism, magnitude, diff, work, exist, cardinality, questions[], disclaimer (all langs)
- `site/src/data/meditations.ts` — meditations/thought-experiments source arrays (ru/en) + `medOverrides` (zh, ja, ko, hi, ar, he, ka, hy) + epigraphs (all langs). Note: de/fr/it/es/pt meditations fall back to EN (nothing to review there).
- `site/src/data/reference-numbers.json`, `site/src/data/named-numbers.json` — reference `name`/`domain`/`note`/`use` prose (all langs)
- `site/src/pages/[lang]/reference.astro`, `archive.astro`, `collaborate.astro` — per-page dicts (all langs)

## QA gate (run before marking any task Done)

```
cd site && npm run check:i18n
cd site && npx astro check
cd site && npm run build
```

Fix and re-run until green. If a language's deep prose becomes native-quality,
consider removing it from `reviewNeeded` in `site/src/layouts/Base.astro`.
