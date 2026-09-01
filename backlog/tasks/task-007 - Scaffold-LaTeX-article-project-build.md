---
id: TASK-007
title: Scaffold LaTeX article project + build
status: In Progress
assignee: []
created_date: '2026-08-30 10:45'
updated_date: '2026-08-30 10:59'
labels:
  - latex
dependencies:
  - TASK-001
ordinal: 7000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Set up paper/ as a LaTeX project styled as a serious scientific paper: main.tex with a paper-like class, a bibliography, and a latexmk build. Skeleton sections only at this stage.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 latexmk paper/main.tex builds a PDF from the skeleton
- [ ] #2 Document is styled to look like an academic paper (title, authors, abstract, sections, bib)
<!-- AC:END -->

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
Source complete and statically validated (braces/environments balanced, all \input targets present, numbers generated from docs/data/levels.json). PDF build NOT verified locally: no TeX toolchain on this machine — build verification is deferred to the CI task (task-021), which installs TeX Live. To build locally: install MacTeX/TeX Live, then 'python paper/gen_data.py && latexmk -pdf paper/main.tex'.
<!-- SECTION:NOTES:END -->

## Definition of Done
<!-- DOD:BEGIN -->
- [ ] #1 the site project is consitent
<!-- DOD:END -->
