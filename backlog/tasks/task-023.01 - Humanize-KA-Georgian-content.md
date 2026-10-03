---
id: TASK-023.01
title: Humanize KA (Georgian) content
status: To Do
assignee: []
created_date: '2026-09-07 14:28'
labels: []
dependencies: []
documentation:
  - doc-001 - Humanizer-review-protocol-crypto-coma-web-app.md
parent_task_id: TASK-023
priority: high
ordinal: 100
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Native-quality humanizer pass for Georgian (ka) across the whole site. ka is machine-drafted (carries the "needs native review" banner). Follow doc-001. If prose reaches native quality, remove "ka" from reviewNeeded in site/src/layouts/Base.astro and translate/verify its banner string is no longer needed.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 ui.ts ka labels reviewed
- [ ] #2 content.ts ka home strings (manifest/legend/formula/compact/part blurbs) reviewed
- [ ] #3 article.astro ka dict (abstract…disclaimer + questions[]) reviewed
- [ ] #4 meditations.ts ka medOverrides + ka epigraph text/attribution reviewed
- [ ] #5 reference-numbers.json + named-numbers.json ka prose reviewed
- [ ] #6 reference.astro / archive.astro / collaborate.astro ka dicts reviewed
- [ ] #7 ka removed from reviewNeeded in Base.astro if now native-quality
<!-- AC:END -->

## Definition of Done
<!-- DOD:BEGIN -->
- [ ] #1 Ran QA gate: npm run check:i18n passes
- [ ] #2 Ran QA gate: npx astro check passes
- [ ] #3 Ran QA gate: npm run build succeeds
- [ ] #4 No math/symbols/numbers/sources/citations or the term crypto coma / ℂ⇈ were altered
- [ ] #5 Meaning and register preserved against the RU/EN source
<!-- DOD:END -->
