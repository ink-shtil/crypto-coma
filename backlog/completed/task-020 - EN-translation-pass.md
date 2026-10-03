---
id: TASK-020
title: EN translation pass
status: Done
assignee: []
created_date: '2026-08-30 10:46'
updated_date: '2026-09-01 07:59'
labels:
  - i18n
  - content
dependencies:
  - TASK-012
  - TASK-013
  - TASK-019
  - TASK-017
  - TASK-008
ordinal: 20000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Translate all site content (home/manifest, parody article page, reference section, collaboration invite) and the paper abstract into English. Fill the /en locale so core pages have no untranslated fallbacks.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 All /en core pages are fully populated
- [x] #2 No untranslated fallbacks remain on the home, article, and reference pages
- [x] #3 Paper abstract has an EN version
<!-- AC:END -->

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
Verified: all /en core pages fully populated; no untranslated fallbacks on home/article/reference (only intentional language-switcher label 'Русский'); paper abstract has EN version. Also completed the 13-language locale pass (de/fr/it/es/pt/zh/ja/ko/hi/ar/he/ka/hy): reference + named number data, article dict (ka/hy), meditations overrides (ka/hy), epigraphs (all 13) via 13 parallel translation workers merged into docs/data + site src. check-i18n: PASS 15/15 locales x 6 pages.
<!-- SECTION:NOTES:END -->

## Definition of Done
<!-- DOD:BEGIN -->
- [x] #1 the site project is consitent
<!-- DOD:END -->
