---
id: TASK-004
title: Log-scale power-tower computation
status: Done
assignee: []
created_date: '2026-08-30 10:44'
updated_date: '2026-08-30 10:55'
labels:
  - pylib
dependencies:
  - TASK-002
  - TASK-003
ordinal: 4000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
z^z is astronomically unrepresentable, so compute LOG10 MAGNITUDES / iterated logs of each level rather than the numbers themselves (use mpmath or Decimal). Provide functions to get the log10 magnitude of levels 1..N following the recurrence from the formal-model spec.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Functions return the log10 magnitude for levels 1..N
- [ ] #2 Computed a, b, c match the values fixed in docs/formal-model.md
- [ ] #3 Unit tests cover the recurrence and edge cases
<!-- AC:END -->

## Definition of Done
<!-- DOD:BEGIN -->
- [ ] #1 the site project is consitent
<!-- DOD:END -->
