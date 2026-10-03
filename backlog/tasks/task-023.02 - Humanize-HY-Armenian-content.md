---
id: TASK-023.02
title: Humanize HY (Armenian) content
status: To Do
assignee: []
created_date: '2026-09-07 14:28'
labels: []
dependencies: []
documentation:
  - doc-001 - Humanizer-review-protocol-crypto-coma-web-app.md
parent_task_id: TASK-023
priority: high
ordinal: 200
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Native-quality humanizer pass for Armenian (hy) across the whole site. hy is machine-drafted (carries the "needs native review" banner). Follow doc-001. If prose reaches native quality, remove "hy" from reviewNeeded in site/src/layouts/Base.astro.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 ui.ts hy labels reviewed
- [ ] #2 content.ts hy home strings reviewed
- [ ] #3 article.astro hy dict (abstract…disclaimer + questions[]) reviewed
- [ ] #4 meditations.ts hy medOverrides + hy epigraph text/attribution reviewed
- [ ] #5 reference-numbers.json + named-numbers.json hy prose reviewed
- [ ] #6 reference.astro / archive.astro / collaborate.astro hy dicts reviewed
- [ ] #7 hy removed from reviewNeeded in Base.astro if now native-quality
<!-- AC:END -->

## Definition of Done
<!-- DOD:BEGIN -->
- [ ] #1 Ran QA gate: npm run check:i18n passes
- [ ] #2 Ran QA gate: npx astro check passes
- [ ] #3 Ran QA gate: npm run build succeeds
- [ ] #4 No math/symbols/numbers/sources/citations or the term crypto coma / ℂ⇈ were altered
- [ ] #5 Meaning and register preserved against the RU/EN source
<!-- DOD:END -->
