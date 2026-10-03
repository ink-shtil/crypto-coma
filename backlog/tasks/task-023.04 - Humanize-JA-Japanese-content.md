---
id: TASK-023.04
title: Humanize JA (Japanese) content
status: To Do
assignee: []
created_date: '2026-09-07 14:28'
labels: []
dependencies: []
documentation:
  - doc-001 - Humanizer-review-protocol-crypto-coma-web-app.md
parent_task_id: TASK-023
priority: medium
ordinal: 400
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Humanizer pass for Japanese (ja) across the whole site. Full deep prose incl. medOverrides. Follow doc-001.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 ui.ts ja labels reviewed
- [ ] #2 content.ts ja home strings reviewed
- [ ] #3 article.astro ja dict (abstract…disclaimer + questions[]) reviewed
- [ ] #4 meditations.ts ja medOverrides + ja epigraph text/attribution reviewed
- [ ] #5 reference-numbers.json + named-numbers.json ja prose reviewed
- [ ] #6 reference.astro / archive.astro / collaborate.astro ja dicts reviewed
<!-- AC:END -->

## Definition of Done
<!-- DOD:BEGIN -->
- [ ] #1 Ran QA gate: npm run check:i18n passes
- [ ] #2 Ran QA gate: npx astro check passes
- [ ] #3 Ran QA gate: npm run build succeeds
- [ ] #4 No math/symbols/numbers/sources/citations or the term crypto coma / ℂ⇈ were altered
- [ ] #5 Meaning and register preserved against the RU/EN source
<!-- DOD:END -->
