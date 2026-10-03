---
id: TASK-010
title: Scaffold Astro site + i18n + base design
status: Done
assignee: []
created_date: '2026-08-30 10:45'
updated_date: '2026-08-30 11:05'
labels:
  - web
dependencies:
  - TASK-001
ordinal: 10000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Scaffold the Astro website in site/ with i18n routing: /ru (default) and /en. Add a shared base layout, nav, footer, and a language-switcher stub. Architecture must make adding more locales trivial later.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 npm run dev and npm run build both work
- [ ] #2 /ru and /en locale routes render with a shared layout
- [ ] #3 Adding a new locale requires only config + content, no structural rewrite
<!-- AC:END -->

## Definition of Done
<!-- DOD:BEGIN -->
- [ ] #1 the site project is consitent
<!-- DOD:END -->
