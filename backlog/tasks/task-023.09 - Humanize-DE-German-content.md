---
id: TASK-023.09
title: Humanize DE (German) content
status: To Do
assignee: []
created_date: '2026-09-07 14:28'
labels: []
dependencies: []
documentation:
  - doc-001 - Humanizer-review-protocol-crypto-coma-web-app.md
parent_task_id: TASK-023
priority: medium
ordinal: 900
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Humanizer pass for German (de) across the whole site. Follow doc-001. Note: de meditations fall back to EN (no medOverrides) — only the de epigraph strings need review in meditations.ts.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 ui.ts de labels reviewed
- [ ] #2 content.ts de home strings reviewed
- [ ] #3 article.astro de dict (abstract…disclaimer + questions[]) reviewed
- [ ] #4 meditations.ts de epigraph text/attribution reviewed (meditations fall back to EN)
- [ ] #5 reference-numbers.json + named-numbers.json de prose reviewed
- [ ] #6 reference.astro / archive.astro / collaborate.astro de dicts reviewed
<!-- AC:END -->

## Definition of Done
<!-- DOD:BEGIN -->
- [ ] #1 Ran QA gate: npm run check:i18n passes
- [ ] #2 Ran QA gate: npx astro check passes
- [ ] #3 Ran QA gate: npm run build succeeds
- [ ] #4 No math/symbols/numbers/sources/citations or the term crypto coma / ℂ⇈ were altered
- [ ] #5 Meaning and register preserved against the RU/EN source
<!-- DOD:END -->
