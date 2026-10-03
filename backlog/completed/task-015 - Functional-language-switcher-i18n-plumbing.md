---
id: TASK-015
title: Functional language switcher + i18n plumbing
status: Done
assignee: []
created_date: '2026-08-30 10:45'
updated_date: '2026-08-30 11:05'
labels:
  - web
  - i18n
dependencies:
  - TASK-010
ordinal: 15000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Make the language switcher functional: switching RU/EN preserves the current route, and all UI chrome strings are localized (no hardcoded UI text).
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Switching language keeps the user on the equivalent page
- [ ] #2 No hardcoded UI strings remain; all go through i18n
<!-- AC:END -->

## Definition of Done
<!-- DOD:BEGIN -->
- [ ] #1 the site project is consitent
<!-- DOD:END -->
