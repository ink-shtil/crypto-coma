---
id: TASK-024
title: >-
  Очеловечить текст сайта и статьи (пираха, улыбка великана, калибровка
  лестницы)
status: In Progress
assignee: []
created_date: '2026-10-03 12:35'
updated_date: '2026-10-03 12:40'
labels: []
dependencies: []
type: docs
ordinal: 2500
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Вплести идеи из .intent/idea01.md и idea02.md точечными вставками: пираха в легенде, ирония про 10^80, медитация «Улыбка великана», вопрос о калибровке лестницы (группы a и f), оживление формулировок. Сначала RU/EN, ревью тона, затем 13 остальных локалей.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 RU/EN тексты внесены в сайт и статью
- [ ] #2 Тон одобрен пользователем
- [ ] #3 Новые строки переведены на 13 остальных локалей
- [ ] #4 QA-гейт пройден (astro check, build, check:i18n, latexmk)
<!-- AC:END -->

## Definition of Done
<!-- DOD:BEGIN -->
- [ ] #1 Ran QA gate: npm run check:i18n passes
- [ ] #2 Ran QA gate: npx astro check passes
- [ ] #3 Ran QA gate: npm run build succeeds
- [ ] #4 No math/symbols/numbers/sources/citations or the term crypto coma / ℂ⇈ were altered
- [ ] #5 Meaning and register preserved against the RU/EN source
<!-- DOD:END -->

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
RU/EN внесены (site: content.ts, article.astro, meditations.ts; paper: 01/03/03b/03c/04 RU+EN, references.bib +4). astro check / build / check:i18n — OK. PDF локально не собрать: latexmk нет, tectonic не качает bundle — проверка в CI. Аннотацию paper/main*.tex не трогал: её нарочито академичный тон — часть шутки. Ждём ревью тона перед переводом на 13 локалей.
<!-- SECTION:NOTES:END -->
