---
id: TASK-005
title: Scale & units hint module
status: Done
assignee: []
created_date: '2026-08-30 10:44'
updated_date: '2026-08-30 10:55'
labels:
  - pylib
dependencies:
  - TASK-004
ordinal: 5000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Map a magnitude to human/physical reference points so readers can feel the scale: atoms in the observable universe (~10^80), Planck volumes in the universe, seconds since the Big Bang, etc. Given a log10 magnitude, return the nearest known reference plus a human-readable phrasing.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Given a log10 magnitude, returns the nearest physical reference and a human phrasing
- [ ] #2 A curated table of reference quantities with sources is included
- [ ] #3 Unit tested
<!-- AC:END -->

## Definition of Done
<!-- DOD:BEGIN -->
- [ ] #1 the site project is consitent
<!-- DOD:END -->
