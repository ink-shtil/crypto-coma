---
id: TASK-016
title: External reference-page caching/archive
status: Done
assignee: []
created_date: '2026-08-30 10:45'
updated_date: '2026-08-30 11:15'
labels:
  - web
dependencies:
  - TASK-011
ordinal: 16000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Implement the idea's 'keshirovanie veb-stranic': at build time, snapshot the referenced external pages about big numbers and serve local copies so the resource is link-rot proof, with a cached-view render.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Referenced external pages are snapshotted and stored locally at build time
- [ ] #2 A cached view of a snapshot renders on the site
<!-- AC:END -->

## Definition of Done
<!-- DOD:BEGIN -->
- [ ] #1 the site project is consitent
<!-- DOD:END -->
