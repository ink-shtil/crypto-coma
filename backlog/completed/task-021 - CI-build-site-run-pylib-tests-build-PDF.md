---
id: TASK-021
title: 'CI: build site, run pylib tests, build PDF'
status: Done
assignee: []
created_date: '2026-08-30 10:46'
updated_date: '2026-08-30 11:19'
labels:
  - infra
dependencies:
  - TASK-003
  - TASK-007
  - TASK-010
ordinal: 21000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Set up one CI pipeline that runs pytest for cryptocoma, builds the Astro site, and builds the LaTeX PDF. No deployment yet (hosting is deferred).
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 CI runs pytest, Astro build, and LaTeX PDF build
- [ ] #2 Pipeline is green on push
<!-- AC:END -->

## Definition of Done
<!-- DOD:BEGIN -->
- [ ] #1 the site project is consitent
<!-- DOD:END -->
