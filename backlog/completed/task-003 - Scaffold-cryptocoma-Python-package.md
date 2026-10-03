---
id: TASK-003
title: Scaffold cryptocoma Python package
status: Done
assignee: []
created_date: '2026-08-30 10:44'
updated_date: '2026-08-30 10:55'
labels:
  - pylib
dependencies:
  - TASK-001
ordinal: 3000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Create the pylib/ Python package 'cryptocoma' with modern tooling: pyproject.toml (src layout), pytest, ruff + black, and a package README. This is the base other pylib tasks build on.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 pip install -e ./pylib works
- [ ] #2 pytest runs (even if only a placeholder test) and passes
- [ ] #3 ruff and black are configured
<!-- AC:END -->

## Definition of Done
<!-- DOD:BEGIN -->
- [ ] #1 the site project is consitent
<!-- DOD:END -->
