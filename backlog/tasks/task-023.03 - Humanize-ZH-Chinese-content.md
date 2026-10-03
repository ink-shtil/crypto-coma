---
id: TASK-023.03
title: Humanize ZH (Chinese) content
status: To Do
assignee: []
created_date: '2026-09-07 14:28'
labels: []
dependencies: []
documentation:
  - doc-001 - Humanizer-review-protocol-crypto-coma-web-app.md
parent_task_id: TASK-023
priority: medium
ordinal: 300
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Humanizer pass for Chinese (zh) across the whole site. Full deep prose incl. medOverrides. Follow doc-001; the humanizer-zh skill is itself Chinese, so its examples apply most directly here.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 ui.ts zh labels reviewed
- [ ] #2 content.ts zh home strings reviewed
- [ ] #3 article.astro zh dict (abstract…disclaimer + questions[]) reviewed
- [ ] #4 meditations.ts zh medOverrides + zh epigraph text/attribution reviewed
- [ ] #5 reference-numbers.json + named-numbers.json zh prose reviewed
- [ ] #6 reference.astro / archive.astro / collaborate.astro zh dicts reviewed
<!-- AC:END -->

## Definition of Done
<!-- DOD:BEGIN -->
- [ ] #1 Ran QA gate: npm run check:i18n passes
- [ ] #2 Ran QA gate: npx astro check passes
- [ ] #3 Ran QA gate: npm run build succeeds
- [ ] #4 No math/symbols/numbers/sources/citations or the term crypto coma / ℂ⇈ were altered
- [ ] #5 Meaning and register preserved against the RU/EN source
<!-- DOD:END -->
