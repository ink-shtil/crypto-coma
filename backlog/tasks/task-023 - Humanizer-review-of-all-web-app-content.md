---
id: TASK-023
title: Humanizer review of all web app content
status: To Do
assignee: []
created_date: '2026-09-07 14:27'
labels:
  - humanizer
  - content
  - i18n
dependencies: []
documentation:
  - doc-001 - Humanizer-review-protocol-crypto-coma-web-app.md
  - .agents/skills/humanizer-zh/SKILL.md
ordinal: 1000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Run the humanizer-zh skill's method (Wikipedia "Signs of AI writing") over every user-facing string in the Astro site (`site/`), one subtask per language. Goal: remove AI-writing tells while preserving the deliberate literary voice of the RU/EN source. Full rules, the do-NOT list (em-dashes, math, citations), and the per-language file map are in doc-001. This parent tracks the whole sweep; each subtask delivers one language.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Every language subtask is completed
- [ ] #2 Each language's copy is free of AI-writing tells listed in doc-001, with the source voice and all math/citations intact
- [ ] #3 site build + i18n check + astro check are green across the whole site
- [ ] #4 reviewNeeded in Base.astro is updated for any language whose deep prose reached native quality
<!-- AC:END -->

## Definition of Done
<!-- DOD:BEGIN -->
- [ ] #1 Ran QA gate: npm run check:i18n passes
- [ ] #2 Ran QA gate: npx astro check passes
- [ ] #3 Ran QA gate: npm run build succeeds
- [ ] #4 No math/symbols/numbers/sources/citations or the term crypto coma / ℂ⇈ were altered
- [ ] #5 Meaning and register preserved against the RU/EN source
<!-- DOD:END -->
