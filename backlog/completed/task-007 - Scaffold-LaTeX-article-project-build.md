---
id: TASK-007
title: Scaffold LaTeX article project + build
status: Done
assignee: []
created_date: '2026-08-30 10:45'
updated_date: '2026-09-02 09:27'
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
- [x] #1 latexmk paper/main.tex builds a PDF from the skeleton
- [x] #2 Document is styled to look like an academic paper (title, authors, abstract, sections, bib)
<!-- AC:END -->

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
Source complete and statically validated: main.tex + main-en.tex compile-ready — all 9 \input section targets and both bib files present, numbers generated from docs/data/levels.json via gen_data.py (runs clean). Academic styling in place (article class, RU+EN abstracts, epigraph, 8 sections, booktabs/longtable tables, plain bibliography). PDF build is delegated to CI: .github/workflows/ci.yml `paper` job uses xu-cheng/latex-action (TeX Live scheme-full, Cyrillic+TikZ) to build both main.pdf and main-en.pdf; CI task (task-021) is Done/green. Not built locally — no TeX toolchain on this machine. To build locally: install MacTeX/TeX Live, then `python3 paper/gen_data.py && latexmk -pdf paper/main.tex`.
<!-- SECTION:NOTES:END -->

## Definition of Done
<!-- DOD:BEGIN -->
- [x] #1 the site project is consitent
<!-- DOD:END -->
