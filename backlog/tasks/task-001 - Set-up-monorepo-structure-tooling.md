---
id: TASK-001
title: Set up monorepo structure & tooling
status: Done
assignee: []
created_date: '2026-08-30 10:44'
updated_date: '2026-08-30 10:48'
labels:
  - foundation
dependencies: []
ordinal: 1000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Establish the monorepo skeleton for the Crypto Coma mystification project so all four deliverables (site, pylib, paper, math spec) share one repo with a clear one-way data flow: math spec -> pylib computes -> docs/data/levels.json -> consumed by paper + site.

Create top-level dirs: docs/ (formal-model spec + shared data), pylib/ (cryptocoma package), paper/ (LaTeX article), site/ (Astro RU/EN). Add a root README explaining the mystification premise and the data-flow, a .gitignore covering node + python + latex artifacts, and choose a license.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Directories docs/, pylib/, paper/, site/ exist
- [ ] #2 Root README explains the project premise and the math-spec -> pylib -> levels.json -> paper/site data flow
- [ ] #3 .gitignore covers node, python, and latex build artifacts
- [ ] #4 A license is chosen and added
<!-- AC:END -->

## Definition of Done
<!-- DOD:BEGIN -->
- [ ] #1 the site project is consitent
<!-- DOD:END -->
