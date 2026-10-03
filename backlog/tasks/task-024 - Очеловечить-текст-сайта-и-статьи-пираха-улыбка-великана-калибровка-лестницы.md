---
id: TASK-024
title: >-
  Очеловечить текст сайта и статьи (пираха, улыбка великана, калибровка
  лестницы)
status: In Progress
assignee: []
created_date: '2026-10-03 12:35'
updated_date: '2026-10-03 13:08'
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

Раунд 2 (ревью тона): заголовки democracy→«Все великаны на одно лицо», name-instead→«Поводок без зверя» (+текст), ноль-симметрия, конец physically-transcendent, child-frontier, footer.disclaimer — RU/EN на сайте и в статье. ПРИ ПЕРЕВОДЕ: обновить эти же поля во всех 13 medOverrides и footer.disclaimer в ui.ts. PDF собирается: docker texlive/texlive latexmk.

Раунд 3: убрана тавтология «великан» — democracy→«За горизонтом», nameless→«Почти все числа безымянны», правки в giant-smile, ruler-of-infinities, scribe, article calibrate (RU/EN, сайт+статья). ПРИ ПЕРЕВОДЕ: обновить эти поля и в 13 локалях.

Раунд 4: медитации nameless и giant-smile объединены в одну «Почти все великаны безымянны» (id nameless; giant-smile удалён), вопрос — про красоту. ПРИ ПЕРЕВОДЕ: переписать entries.nameless (title/body/question) в 13 локалях.
<!-- SECTION:NOTES:END -->
