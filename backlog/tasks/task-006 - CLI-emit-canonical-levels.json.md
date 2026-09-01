---
id: TASK-006
title: CLI + emit canonical levels.json
status: Done
assignee: []
created_date: '2026-08-30 10:45'
updated_date: '2026-08-30 10:55'
labels:
  - pylib
dependencies:
  - TASK-004
  - TASK-005
ordinal: 6000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Add a CLI that prints the a..z scale table and writes the canonical shared dataset to docs/data/levels.json. This JSON is the ONE source of numbers consumed by both the LaTeX paper and the Astro site, guaranteeing they never drift.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 python -m cryptocoma table prints a readable table
- [ ] #2 It writes docs/data/levels.json with a stable, documented schema
- [ ] #3 CLI + JSON output are unit tested
<!-- AC:END -->

## Definition of Done
<!-- DOD:BEGIN -->
- [ ] #1 the site project is consitent
<!-- DOD:END -->
