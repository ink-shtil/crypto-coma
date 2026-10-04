// Long-form localized home content (the narrative core) + the "parts" blurbs. Typed data
// so pages stay declarative. EN is the fallback: a locale missing here resolves to `en`
// via `homeContent(lang)` / `partBlurbsFor(lang)`.
import { defaultLang, type Lang } from "../i18n/ui";

export interface HomeContent {
  manifest: string[];
  legend: string[];
  formulaIntro: string;
  formulaOutro: string;
  compact: string;
}

const home: Partial<Record<Lang, HomeContent>> = {
  en: {
    manifest: [
      "Almost everyone has tried, as a child, to name the biggest number — and the game nearly always ended at “infinity plus one.” This is the story of two children who, looking at the stars one evening, took another road.",
    ],
    legend: [
      "One summer evening two boys sat on a bench, looked at the stars, and argued about how many atoms fit in the Universe.",
      "Had they been born among the Pirahã of the Amazon, the argument would have ended quickly. Pirahã, many linguists believe, has no numbers at all — only “a little,” “a bit more,” and “more still.” At best, the boys would have discovered a sort of “four” that night. But they grew up where big numbers have names.",
      "And they named bigger and bigger numbers — a million, a billion, a trillion — until they reached an undecillion (10³⁶). Even that felt too small.",
      "So they did what real mathematicians do: they gave the big number a name. Let a be the first step. Then each next number is the previous one raised to itself — all the way up to the summit, the crypto coma.",
    ],
    formulaIntro:
      "The series is set by a starting value a and one simple rule: the next level is the previous one raised to the power of itself.",
    formulaOutro:
      "There are twenty-six levels, one per letter. The crypto coma is the self-power of the last level, z. Funny thing: the answer to the boys’ original question — about 10⁸⁰ atoms — fits between the undecillion and the very first step, a. They overshot their own question before setting foot on the ladder.",
    compact:
      "In short: write x★ = xˣ (a star means “raise the number to itself”). Then the crypto coma is ((10³⁶)^(10³⁶))★²⁶ — twenty-six stars, one per letter of the alphabet.",
  },
  ru: {
    manifest: [
      "Каждый в детстве хоть раз пытался назвать самое большое число — и почти всегда игра кончалась на «бесконечность плюс один». Эта история — о двух детях, которые однажды, глядя на звёзды, пошли другим путём.",
    ],
    legend: [
      "Летним вечером двое мальчиков сидели на лавочке, смотрели на звёзды и спорили, сколько атомов поместится во Вселенной.",
      "Родись они в племени пираха на Амазонке, спор кончился бы быстро. В языке пираха, как считают многие лингвисты, чисел нет вовсе — есть только «немного», «побольше» и «ещё побольше». В лучшем случае мальчики открыли бы в тот вечер условную четвёрку. Но они росли там, где у больших чисел есть имена.",
      "И они называли числа всё больше и больше — миллион, миллиард, триллион, — пока не дошли до ундециллиона (10³⁶). Но и этого им показалось мало.",
      "Тогда они поступили как настоящие математики: дали большому числу имя. Пусть a — первый шаг. А дальше каждое следующее число есть предыдущее, возведённое в самого себя, — до самой вершины, крипто комы.",
    ],
    formulaIntro:
      "Ряд задаётся начальным значением a и простым правилом: следующий уровень — это предыдущий в степени самого себя.",
    formulaOutro:
      "Всего уровней — двадцать шесть, по числу букв. Крипто кома — это самовозведение последнего уровня z. Забавно: ответ на исходный вопрос мальчиков — около 10⁸⁰ атомов — уместился между ундециллионом и самой первой ступенькой a. Они проскочили собственный вопрос, ещё не ступив на лестницу.",
    compact:
      "Короче: обозначим x★ = xˣ (звёздочка значит «возвести число в себя»). Тогда крипто кома — это ((10³⁶)^(10³⁶))★²⁶: двадцать шесть звёздочек, по одной на каждую букву алфавита.",
  },
  de: {
    manifest: [
      "Fast jeder hat als Kind einmal versucht, die größte Zahl zu nennen – und fast immer endete das Spiel bei „unendlich plus eins“. Dies ist die Geschichte zweier Kinder, die eines Abends beim Blick in die Sterne einen anderen Weg gingen.",
    ],
    legend: [
      "An einem Sommerabend saßen zwei Jungen auf einer Bank, blickten zu den Sternen und stritten darüber, wie viele Atome ins Universum passen.",
      "Wären sie bei den Pirahã am Amazonas geboren, wäre der Streit schnell vorbei gewesen. Das Pirahã kennt, wie viele Linguisten meinen, überhaupt keine Zahlen – nur „wenig“, „etwas mehr“ und „noch mehr“. Bestenfalls hätten die Jungen an diesem Abend so etwas wie eine „Vier“ entdeckt. Aber sie wuchsen dort auf, wo große Zahlen Namen haben.",
      "Und sie nannten immer größere Zahlen – eine Million, eine Milliarde, eine Billion –, bis sie bei der Undezillion (10³⁶) ankamen. Selbst das war ihnen zu wenig.",
      "Also taten sie, was echte Mathematiker tun: Sie gaben der großen Zahl einen Namen. Sei a der erste Schritt. Jede folgende Zahl ist die vorige, in sich selbst potenziert – bis hinauf zum Gipfel, der Crypto Coma.",
    ],
    formulaIntro:
      "Die Reihe ist durch einen Startwert a und eine einfache Regel bestimmt: Die nächste Stufe ist die vorige, potenziert mit sich selbst.",
    formulaOutro:
      "Es gibt sechsundzwanzig Stufen, eine je Buchstabe. Die Crypto Coma ist die Selbstpotenz der letzten Stufe, z. Lustig dabei: Die Antwort auf die ursprüngliche Frage der Jungen – etwa 10⁸⁰ Atome – liegt zwischen der Undezillion und der allerersten Stufe a. Sie waren über ihre eigene Frage hinausgeschossen, bevor sie die Leiter überhaupt betreten hatten.",
    compact:
      "Kurz gesagt: Schreibe x★ = xˣ (ein Stern heißt „die Zahl in sich selbst potenzieren“). Dann ist die Crypto Coma ((10³⁶)^(10³⁶))★²⁶ — sechsundzwanzig Sterne, einer je Buchstabe.",
  },
  fr: {
    manifest: [
      "Presque tout le monde a essayé, enfant, de nommer le plus grand nombre — et le jeu finissait presque toujours sur « l’infini plus un ». Voici l’histoire de deux enfants qui, un soir, en regardant les étoiles, prirent un autre chemin.",
    ],
    legend: [
      "Un soir d’été, deux garçons assis sur un banc regardaient les étoiles et se disputaient sur le nombre d’atomes que contient l’Univers.",
      "S’ils étaient nés chez les Pirahãs d’Amazonie, la dispute aurait vite tourné court. Le pirahã, selon de nombreux linguistes, ne connaît aucun nombre — seulement « un peu », « un peu plus » et « encore plus ». Au mieux, les garçons auraient découvert ce soir-là une sorte de « quatre ». Mais ils avaient grandi là où les grands nombres ont des noms.",
      "Et ils nommaient des nombres toujours plus grands — un million, un milliard, un billion — jusqu’à parvenir à un undécillion (10³⁶). Même cela leur parut trop peu.",
      "Alors ils firent ce que font les vrais mathématiciens : ils donnèrent un nom au grand nombre. Soit a le premier pas. Chaque nombre suivant est le précédent élevé à lui-même — jusqu’au sommet, la crypto coma.",
    ],
    formulaIntro:
      "La suite est définie par une valeur de départ a et une règle simple : le niveau suivant est le précédent élevé à sa propre puissance.",
    formulaOutro:
      "Il y a vingt-six niveaux, un par lettre. La crypto coma est la puissance du dernier niveau, z, par lui-même. Chose amusante : la réponse à la question de départ des garçons — environ 10⁸⁰ atomes — se loge entre l’undécillion et le tout premier échelon, a. Ils avaient dépassé leur propre question avant même de poser le pied sur l’échelle.",
    compact:
      "En bref : posons x★ = xˣ (une étoile signifie « élever le nombre à lui-même »). Alors la crypto coma vaut ((10³⁶)^(10³⁶))★²⁶ — vingt-six étoiles, une par lettre.",
  },
  it: {
    manifest: [
      "Quasi tutti, da bambini, hanno provato almeno una volta a dire il numero più grande — e il gioco finiva quasi sempre con « infinito più uno ». Questa è la storia di due bambini che una sera, guardando le stelle, presero un’altra strada.",
    ],
    legend: [
      "Una sera d’estate due ragazzi sedevano su una panchina, guardavano le stelle e discutevano su quanti atomi entrino nell’Universo.",
      "Se fossero nati tra i Pirahã dell’Amazzonia, la discussione sarebbe finita presto. Nella lingua pirahã, secondo molti linguisti, i numeri non esistono affatto — ci sono solo « poco », « un po’ di più » e « ancora di più ». Nel migliore dei casi, quella sera i ragazzi avrebbero scoperto una specie di « quattro ». Ma erano cresciuti dove i grandi numeri hanno un nome.",
      "E nominavano numeri sempre più grandi — un milione, un miliardo, un bilione — finché arrivarono a un undecilione (10³⁶). Ma anche quello sembrava troppo poco.",
      "Allora fecero ciò che fanno i veri matematici: diedero un nome al grande numero. Sia a il primo passo. Ogni numero successivo è il precedente elevato a se stesso — fino alla vetta, la crypto coma.",
    ],
    formulaIntro:
      "La serie è definita da un valore iniziale a e da una semplice regola: il livello successivo è il precedente elevato a se stesso.",
    formulaOutro:
      "Ci sono ventisei livelli, uno per lettera. La crypto coma è l’autopotenza dell’ultimo livello, z. Curioso: la risposta alla domanda iniziale dei ragazzi — circa 10⁸⁰ atomi — sta tra l’undecilione e il primissimo gradino, a. Avevano superato la loro stessa domanda prima ancora di mettere piede sulla scala.",
    compact:
      "In breve: scriviamo x★ = xˣ (una stella significa « elevare il numero a se stesso »). Allora la crypto coma è ((10³⁶)^(10³⁶))★²⁶ — ventisei stelle, una per lettera.",
  },
  es: {
    manifest: [
      "Casi todos, de niños, intentamos alguna vez decir el número más grande — y el juego casi siempre acababa en « infinito más uno ». Esta es la historia de dos niños que, una tarde, mirando las estrellas, tomaron otro camino.",
    ],
    legend: [
      "Una tarde de verano, dos niños sentados en un banco miraban las estrellas y discutían cuántos átomos caben en el Universo.",
      "Si hubieran nacido entre los pirahã del Amazonas, la discusión habría terminado pronto. El pirahã, según creen muchos lingüistas, no tiene números en absoluto — solo « poco », « un poco más » y « todavía más ». En el mejor de los casos, aquella tarde los niños habrían descubierto una especie de « cuatro ». Pero crecieron donde los números grandes tienen nombre.",
      "Y nombraban números cada vez mayores — un millón, mil millones, un billón — hasta llegar a un undecillón (10³⁶). Ni siquiera eso les pareció suficiente.",
      "Así que hicieron lo que hacen los verdaderos matemáticos: le dieron un nombre al gran número. Sea a el primer paso. Cada número siguiente es el anterior elevado a sí mismo — hasta la cima, la crypto coma.",
    ],
    formulaIntro:
      "La serie se define por un valor inicial a y una regla simple: el siguiente nivel es el anterior elevado a sí mismo.",
    formulaOutro:
      "Hay veintiséis niveles, uno por letra. La crypto coma es la autopotencia del último nivel, z. Lo curioso: la respuesta a la pregunta inicial de los niños — unos 10⁸⁰ átomos — cabe entre el undecillón y el primerísimo peldaño, a. Dejaron atrás su propia pregunta antes de pisar siquiera la escalera.",
    compact:
      "En resumen: escribimos x★ = xˣ (una estrella significa « elevar el número a sí mismo »). Entonces la crypto coma es ((10³⁶)^(10³⁶))★²⁶ — veintiséis estrellas, una por letra.",
  },
  pt: {
    manifest: [
      "Quase toda a gente tentou, em criança, dizer o maior número — e o jogo acabava quase sempre em « infinito mais um ». Esta é a história de duas crianças que, numa noite, a olhar as estrelas, seguiram por outro caminho.",
    ],
    legend: [
      "Numa noite de verão, dois meninos sentados num banco olhavam as estrelas e discutiam quantos átomos cabem no Universo.",
      "Se tivessem nascido entre os Pirahã da Amazónia, a discussão teria acabado depressa. Na língua pirahã, segundo muitos linguistas, não há números de todo — só « pouco », « um pouco mais » e « ainda mais ». Na melhor das hipóteses, os meninos teriam descoberto nessa noite uma espécie de « quatro ». Mas cresceram num sítio onde os números grandes têm nome.",
      "E nomeavam números cada vez maiores — um milhão, mil milhões, um bilião — até chegarem a um undecilião (10³⁶). Nem isso lhes pareceu bastante.",
      "Então fizeram o que fazem os verdadeiros matemáticos: deram um nome ao grande número. Seja a o primeiro passo. Cada número seguinte é o anterior elevado a si mesmo — até ao cume, a crypto coma.",
    ],
    formulaIntro:
      "A série é definida por um valor inicial a e uma regra simples: o nível seguinte é o anterior elevado a si próprio.",
    formulaOutro:
      "Há vinte e seis níveis, um por letra. A crypto coma é a autopotência do último nível, z. O curioso é que a resposta à pergunta inicial dos meninos — cerca de 10⁸⁰ átomos — cabe entre o undecilião e o primeiríssimo degrau, a. Ultrapassaram a sua própria pergunta antes de pôr o pé na escada.",
    compact:
      "Em resumo: escrevemos x★ = xˣ (uma estrela significa « elevar o número a si próprio »). Então a crypto coma é ((10³⁶)^(10³⁶))★²⁶ — vinte e seis estrelas, uma por letra.",
  },
  zh: {
    manifest: [
      "小时候，几乎每个人都试过说出最大的数——而这个游戏几乎总是停在“无穷大加一”。这是两个孩子的故事：一个夜晚，他们望着星星，走上了另一条路。",
    ],
    legend: [
      "一个夏夜，两个男孩坐在长椅上，望着星星，争论宇宙里能装下多少个原子。",
      "假如他们生在亚马孙的皮拉罕部落，这场争论很快就会结束。许多语言学家认为，皮拉罕语里根本没有数——只有“一点儿”“多一点儿”和“再多一点儿”。那天晚上，男孩们最多也就发现一个大概的“四”。可他们长大的地方，大数都有名字。",
      "他们报出的数越来越大——百万、十亿、万亿——一直数到 10³⁶（undecillion）。可就连这个，他们也嫌太小。",
      "于是他们做了真正的数学家会做的事：给这个大数起个名字。设 a 为第一步，此后每个数都是前一个数自身的幂——一路攀上顶峰，即“crypto coma”。",
    ],
    formulaIntro: "这个数列由起始值 a 和一条简单规则决定：下一层是上一层自身的幂。",
    formulaOutro:
      "共有二十六层，每个字母一层。crypto coma 就是最后一层 z 的自身之幂。有意思的是：男孩们最初那个问题的答案——大约 10⁸⁰ 个原子——就落在 undecillion 和最低的第一级 a 之间。他们还没踏上梯子，就已经越过了自己的问题。",
    compact:
      "简而言之：记 x★ = xˣ（一颗星表示“把这个数自乘为幂”）。那么 crypto coma 就是 ((10³⁶)^(10³⁶))★²⁶——二十六颗星，每个字母一颗。",
  },
  ja: {
    manifest: [
      "子どもの頃、誰もが一度は「いちばん大きな数」を言おうとしたことがあるはずだ——そして遊びはたいてい「無限たす一」で終わった。これは、ある晩星を見上げながら、別の道を選んだ二人の子どもの物語である。",
    ],
    legend: [
      "ある夏の夕べ、二人の少年がベンチに座り、星を眺めながら、宇宙にいくつの原子が収まるかを言い争っていた。",
      "もし二人がアマゾンのピダハンの村に生まれていたら、言い争いはすぐに終わっただろう。多くの言語学者によれば、ピダハン語にはそもそも数がない——あるのは「少し」「もう少し」「もっと」だけだ。その晩、少年たちが見つけられたのは、せいぜい「四」のようなものだったろう。けれど二人が育ったのは、大きな数に名前がある場所だった。",
      "二人はより大きな数を次々と挙げた——百万、十億、一兆——そしてついに 10³⁶（アンデシリオン）に達した。それでもまだ小さく思えた。",
      "そこで彼らは本物の数学者がすることをした——その大きな数に名前を与えたのだ。a を最初の一歩とする。以後、次の数は前の数を自分自身で累乗したもの——頂の「クリプト・コーマ」まで。",
    ],
    formulaIntro:
      "この数列は、初期値 a と一つの単純な規則で定まる：次の段は、前の段を自分自身で累乗したものである。",
    formulaOutro:
      "段は二十六、文字ごとに一つ。クリプト・コーマは最後の段 z の自己累乗である。面白いことに、少年たちの最初の問いの答え——およそ 10⁸⁰ 個の原子——は、アンデシリオンと最初の段 a のあいだに収まってしまう。二人は梯子に足をかける前に、自分たちの問いを飛び越えていたのだ。",
    compact:
      "手短に言えば：x★ = xˣ と書く（星印は「その数を自分自身で累乗する」の意）。すると、クリプト・コーマは ((10³⁶)^(10³⁶))★²⁶——星が二十六個、各文字に一つずつ。",
  },
  ko: {
    manifest: [
      "누구나 어릴 때 한 번쯤은 가장 큰 수를 말해 보려 했다—그리고 놀이는 거의 언제나 ‘무한 더하기 일’에서 끝났다. 이것은 어느 저녁 별을 바라보다 다른 길을 택한 두 아이의 이야기다.",
    ],
    legend: [
      "어느 여름 저녁, 두 소년이 벤치에 앉아 별을 바라보며 우주에 원자가 몇 개나 들어갈지를 두고 다투었다.",
      "만약 그들이 아마존의 피다한 부족에서 태어났다면, 다툼은 금방 끝났을 것이다. 많은 언어학자들에 따르면 피다한어에는 수가 아예 없다—‘조금’, ‘좀 더’, ‘더 많이’가 있을 뿐이다. 잘해야 소년들은 그날 저녁 ‘넷’ 비슷한 것을 발견했을 것이다. 하지만 그들은 큰 수에도 이름이 있는 곳에서 자랐다.",
      "그들은 점점 더 큰 수를 불렀다—백만, 십억, 일조—그리고 마침내 10³⁶(언데실리언)에 이르렀다. 그래도 여전히 너무 작게 느껴졌다.",
      "그래서 그들은 진짜 수학자가 하는 일을 했다—그 큰 수에 이름을 붙인 것이다. a를 첫걸음이라 하자. 이후 각 수는 앞의 수를 자기 자신으로 거듭제곱한 것—정상인 크립토 코마에 이르기까지.",
    ],
    formulaIntro:
      "이 수열은 시작값 a와 하나의 단순한 규칙으로 정해진다: 다음 단계는 이전 단계를 자기 자신으로 거듭제곱한 것이다.",
    formulaOutro:
      "스물여섯 단계, 글자마다 하나씩이다. 크립토 코마는 마지막 단계 z의 자기 거듭제곱이다. 재미있게도, 소년들이 처음 던진 물음의 답—원자 약 10⁸⁰개—은 언데실리언과 맨 첫 단계 a 사이에 들어간다. 그들은 사다리에 발을 올리기도 전에 자기들의 물음을 훌쩍 넘어선 것이다.",
    compact:
      "요컨대: x★ = xˣ로 쓴다(별표는 ‘그 수를 자기 자신으로 거듭제곱한다’는 뜻). 그러면 크립토 코마는 ((10³⁶)^(10³⁶))★²⁶—별 스물여섯 개, 각 글자마다 하나씩.",
  },
  hi: {
    manifest: [
      "बचपन में लगभग हर किसी ने कभी न कभी सबसे बड़ी संख्या बताने की कोशिश की है — और खेल लगभग हमेशा “अनंत जमा एक” पर ख़त्म हुआ। यह उन दो बच्चों की कहानी है जिन्होंने एक शाम तारों को देखते हुए दूसरा रास्ता चुना।",
    ],
    legend: [
      "गर्मियों की एक शाम दो लड़के एक बेंच पर बैठे, तारों को देखते हुए बहस कर रहे थे कि ब्रह्मांड में कितने परमाणु समा सकते हैं।",
      "अगर वे अमेज़न के पिराहा क़बीले में पैदा हुए होते, तो बहस जल्दी ख़त्म हो जाती। कई भाषाविदों का मानना है कि पिराहा भाषा में संख्याएँ हैं ही नहीं — बस “थोड़ा”, “कुछ ज़्यादा” और “और ज़्यादा”। ज़्यादा से ज़्यादा, लड़के उस शाम किसी तरह का “चार” खोज पाते। पर वे वहाँ बड़े हुए जहाँ बड़ी संख्याओं के नाम होते हैं।",
      "और वे बड़ी से बड़ी संख्याएँ बताते गए — मिलियन, बिलियन, ट्रिलियन — और अनडेसिलियन (10³⁶) तक पहुँचे। पर उन्हें वह भी छोटी लगी।",
      "तब उन्होंने वही किया जो असली गणितज्ञ करते हैं: उस बड़ी संख्या को एक नाम दिया। मान लो a पहला क़दम है। इसके बाद हर अगली संख्या पिछली संख्या को स्वयं की घात पर उठाकर बनती है — ठेठ शिखर तक, यानी crypto coma।",
    ],
    formulaIntro:
      "यह श्रेणी एक आरंभिक मान a और एक सरल नियम से तय होती है: अगला स्तर पिछले स्तर को स्वयं की घात पर उठाकर बनता है।",
    formulaOutro:
      "छब्बीस स्तर हैं, हर अक्षर के लिए एक। crypto coma अंतिम स्तर z की स्वयं-घात है। मज़े की बात: लड़कों के मूल सवाल का जवाब — लगभग 10⁸⁰ परमाणु — अनडेसिलियन और सबसे पहले पायदान a के बीच ही समा जाता है। सीढ़ी पर पैर रखने से पहले ही वे अपने सवाल से आगे निकल गए।",
    compact:
      "संक्षेप में: लिखिए x★ = xˣ (एक तारा यानी “संख्या को स्वयं की घात पर उठाना”)। तब crypto coma है ((10³⁶)^(10³⁶))★²⁶ — छब्बीस तारे, हर अक्षर के लिए एक।",
  },
  ar: {
    manifest: [
      "في طفولته حاول كلّ واحدٍ منّا تقريبًا، ولو مرةً، أن يسمّي أكبر عدد — وكانت اللعبة تنتهي غالبًا عند «اللانهاية زائد واحد». هذه حكاية طفلين سلكا، ذات مساءٍ وهما يتأمّلان النجوم، طريقًا آخر.",
    ],
    legend: [
      "في مساء صيفيّ، جلس صبيّان على مقعد، يتأمّلان النجوم ويتجادلان: كم ذرّةً يتّسع لها الكون؟",
      "لو وُلدا في قبيلة البيراها في الأمازون، لانتهى الجدال سريعًا. ففي لغة البيراها، كما يرى كثيرٌ من اللغويين، لا أعداد على الإطلاق — بل «قليل» و«أكثر قليلًا» و«أكثر بعد». وفي أحسن الأحوال كان الصبيّان سيكتشفان في ذلك المساء ما يشبه «الأربعة». لكنّهما نشآ حيث للأعداد الكبيرة أسماء.",
      "وأخذا يذكران أعدادًا أكبر فأكبر — مليون، مليار، تريليون — حتى بلغا «الأنديسيليون» (10³⁶). لكنّ هذا أيضًا بدا لهما قليلًا.",
      "ففعلا ما يفعله الرياضيّون حقًّا: أعطيا العدد الكبير اسمًا. ليكن a الخطوة الأولى، ثم كلّ عددٍ تالٍ هو سابقه مرفوعًا إلى نفسه — صعودًا حتى القمّة: «الكريبتو كوما».",
    ],
    formulaIntro:
      "تتحدّد المتتالية بقيمةٍ ابتدائية a وقاعدةٍ بسيطة: كلّ مستوًى هو المستوى السابق مرفوعًا إلى نفسه.",
    formulaOutro:
      "هناك ستّةٌ وعشرون مستوًى، لكلّ حرفٍ مستوى. و«الكريبتو كوما» هي المستوى الأخير z مرفوعًا إلى نفسه. والطريف أنّ جواب سؤال الصبيّين الأصلي — نحو 10⁸⁰ ذرّة — يقع بين الأنديسيليون وأوّل درجةٍ في السُّلّم، a. لقد تجاوزا سؤالهما قبل أن تطأ أقدامهما السُّلّم.",
    compact:
      "باختصار: نكتب x★ = xˣ (النجمة تعني «رفع العدد إلى نفسه»). عندئذٍ تكون الكريبتو كوما ((10³⁶)^(10³⁶))★²⁶ — ستّةٌ وعشرون نجمة، واحدةٌ لكلّ حرف.",
  },
  he: {
    manifest: [
      "כמעט כל אחד ניסה בילדותו, לפחות פעם אחת, לנקוב במספר הגדול ביותר — והמשחק כמעט תמיד נגמר ב« אינסוף ועוד אחד ». זהו סיפורם של שני ילדים שערב אחד, בהביטם אל הכוכבים, הלכו בדרך אחרת.",
    ],
    legend: [
      "בערב קיץ ישבו שני נערים על ספסל, הביטו בכוכבים והתווכחו כמה אטומים נכנסים ליקום.",
      "אילו נולדו בשבט הפיראהה שבאמזונס, הוויכוח היה נגמר מהר. בשפת הפיראהה, כפי שסבורים בלשנים רבים, אין מספרים כלל — יש רק « קצת », « קצת יותר » ו« עוד יותר ». במקרה הטוב היו הנערים מגלים באותו ערב מעין « ארבע ». אבל הם גדלו במקום שבו למספרים גדולים יש שמות.",
      "והם נקבו במספרים גדולים והולכים — מיליון, מיליארד, טריליון — עד שהגיעו לאונדֶצילְיוֹן (10³⁶). אבל גם זה נראה להם מעט מדי.",
      "אז עשו מה שעושים מתמטיקאים אמיתיים: נתנו למספר הגדול שם. יהי a הצעד הראשון. וכל מספר הבא הוא הקודם מועלה בחזקת עצמו — עד לפסגה, הקריפטו קומה.",
    ],
    formulaIntro:
      "הסדרה נקבעת על־ידי ערך התחלתי a וכלל פשוט: הרמה הבאה היא הקודמת מועלית בחזקת עצמה.",
    formulaOutro:
      "יש עשרים ושש רמות, אחת לכל אות. הקריפטו קומה היא החזקה העצמית של הרמה האחרונה, z. והנה דבר משעשע: התשובה לשאלה המקורית של הנערים — כ-10⁸⁰ אטומים — נכנסת בין האונדֶצילְיוֹן לבין המדרגה הראשונה ממש, a. הם דילגו מעל השאלה של עצמם עוד לפני שעלו על הסולם.",
    compact:
      "בקצרה: נכתוב x★ = xˣ (כוכב פירושו « להעלות את המספר בחזקת עצמו »). אז הקריפטו קומה היא ((10³⁶)^(10³⁶))★²⁶ — עשרים ושישה כוכבים, אחד לכל אות.",
  },
  ka: {
    manifest: [
      "ბავშვობაში თითქმის ყველას უცდია ერთხელ მაინც ყველაზე დიდი რიცხვის დასახელება — და თამაში თითქმის ყოველთვის „უსასრულობა პლუს ერთზე“ მთავრდებოდა. ეს არის ორი ბავშვის ამბავი, რომლებიც ერთ საღამოს, ვარსკვლავებს რომ უყურებდნენ, სხვა გზას დაადგნენ.",
    ],
    legend: [
      "ზაფხულის ერთ საღამოს ორი ბიჭი სკამზე იჯდა, ვარსკვლავებს უყურებდა და კამათობდა, რამდენი ატომი ეტევა სამყაროში.",
      "ამაზონის პირაჰას ტომში რომ დაბადებულიყვნენ, კამათი სწრაფად დასრულდებოდა. პირაჰას ენაში, როგორც ბევრი ლინგვისტი ფიქრობს, რიცხვები საერთოდ არ არის — არის მხოლოდ „ცოტა“, „ცოტა მეტი“ და „კიდევ უფრო მეტი“. საუკეთესო შემთხვევაში ბიჭები იმ საღამოს პირობით „ოთხს“ აღმოაჩენდნენ. მაგრამ ისინი იქ გაიზარდნენ, სადაც დიდ რიცხვებს სახელები აქვთ.",
      "და ისინი სულ უფრო დიდ რიცხვებს ასახელებდნენ — მილიონი, მილიარდი, ტრილიონი, — სანამ უნდეცილიონს (10³⁶) არ მიაღწიეს. მაგრამ ესეც ცოტად ეჩვენათ.",
      "მაშინ მათ ის გააკეთეს, რასაც ნამდვილი მათემატიკოსები აკეთებენ: დიდ რიცხვს სახელი დაარქვეს. ვთქვათ, a პირველი ნაბიჯია. შემდეგ ყოველი მომდევნო რიცხვი წინა რიცხვის თავის თავზე ახარისხებაა — მწვერვალამდე, კრიპტო კომამდე.",
    ],
    formulaIntro:
      "მწკრივი განისაზღვრება საწყისი მნიშვნელობით a და ერთი მარტივი წესით: შემდეგი დონე წინა დონის თავის თავზე ახარისხებაა.",
    formulaOutro:
      "ოცდაექვსი დონეა, თითო ასოზე. კრიპტო კომა ბოლო დონის, z-ის, თვითახარისხებაა. სასაცილოა: ბიჭების თავდაპირველ კითხვაზე პასუხი — დაახლოებით 10⁸⁰ ატომი — უნდეცილიონსა და სულ პირველ საფეხურს, a-ს, შორის ეტევა. მათ საკუთარ კითხვას გადაახტნენ, ჯერ კიბეზე ფეხიც რომ არ დაედგათ.",
    compact:
      "მოკლედ: დავწეროთ x★ = xˣ (ვარსკვლავი ნიშნავს « რიცხვის თავის თავზე ახარისხებას »). მაშინ კრიპტო კომა არის ((10³⁶)^(10³⁶))★²⁶ — ოცდაექვსი ვარსკვლავი, თითო ასოზე.",
  },
  hy: {
    manifest: [
      "Մանկության տարիներին գրեթե բոլորը գոնե մեկ անգամ փորձել են անվանել ամենամեծ թիվը, — և խաղը համարյա միշտ ավարտվում էր «անվերջություն գումարած մեկով»։ Սա երկու երեխայի պատմությունն է, որոնք մի երեկո, նայելով աստղերին, այլ ճանապարհով գնացին։",
    ],
    legend: [
      "Ամառային մի երեկո երկու տղա նստած էին նստարանին, նայում էին աստղերին ու վիճում, թե քանի ատոմ կտեղավորվի Տիեզերքում։",
      "Եթե նրանք ծնված լինեին Ամազոնի պիրահա ցեղում, վեճը արագ կավարտվեր։ Պիրահաների լեզվում, ինչպես կարծում են շատ լեզվաբաններ, թվեր ընդհանրապես չկան, կան միայն «քիչ», «մի քիչ ավելի» և «էլ ավելի»։ Լավագույն դեպքում տղաներն այդ երեկո կբացահայտեին պայմանական «չորսը»։ Բայց նրանք մեծացել էին այնտեղ, որտեղ մեծ թվերն անուններ ունեն։",
      "Եվ նրանք անվանում էին ավելի ու ավելի մեծ թվեր՝ միլիոն, միլիարդ, տրիլիոն, — մինչև հասան ունդեցիլիոնի (10³⁶)։ Բայց դա էլ նրանց քիչ թվաց։",
      "Այդ ժամանակ նրանք արեցին այն, ինչ անում են իսկական մաթեմատիկոսները. մեծ թվին անուն տվեցին։ Թող a-ն լինի առաջին քայլը։ Այնուհետև յուրաքանչյուր հաջորդ թիվ նախորդի՝ ինքն իր վրա բարձրացրած աստիճանն է՝ մինչև գագաթը՝ կրիպտո կոման։",
    ],
    formulaIntro:
      "Շարքը որոշվում է a սկզբնական արժեքով և մեկ պարզ կանոնով. հաջորդ մակարդակը նախորդի՝ ինքն իր վրա բարձրացրած աստիճանն է։",
    formulaOutro:
      "Կա քսանվեց մակարդակ՝ մեկը յուրաքանչյուր տառի համար։ Կրիպտո կոման վերջին՝ z մակարդակի ինքնաստիճանն է։ Զվարճալի է. տղաների սկզբնական հարցի պատասխանը՝ մոտ 10⁸⁰ ատոմ, տեղավորվում է ունդեցիլիոնի և ամենաառաջին աստիճանի՝ a-ի միջև։ Նրանք անցան սեփական հարցի կողքով՝ դեռ սանդուղքին ոտք չդրած։",
    compact:
      "Համառոտ. գրենք x★ = xˣ (աստղը նշանակում է « թիվը բարձրացնել ինքն իր վրա »)։ Այդ դեպքում կրիպտո կոման ((10³⁶)^(10³⁶))★²⁶ է՝ քսանվեց աստղ, մեկը յուրաքանչյուր տառի համար։",
  },
};

const partBlurbs: Partial<Record<Lang, string[]>> = {
  en: [
    "The same story as a scientific paper — and questions left open.",
    "Real large numbers, their names, and our a…z ladder.",
    "Short thoughts in the margin — none ends in an answer.",
    "Local snapshots of pages about large numbers.",
  ],
  ru: [
    "Та же история как научная статья — и вопросы без ответов.",
    "Реальные большие числа, их имена и наша лестница a…z.",
    "Короткие мысли на полях — ни одна не кончается ответом.",
    "Локальные снимки страниц о больших числах.",
  ],
  de: [
    "Dieselbe Geschichte als wissenschaftlicher Aufsatz — mit offenen Fragen.",
    "Echte große Zahlen, ihre Namen und unsere Leiter a…z.",
    "Kurze Gedanken am Rand — keiner endet mit einer Antwort.",
    "Lokale Kopien von Seiten über große Zahlen.",
  ],
  fr: [
    "La même histoire sous forme d’article scientifique — et des questions sans réponse.",
    "De vrais grands nombres, leurs noms et notre échelle a…z.",
    "De courtes pensées en marge — aucune ne finit par une réponse.",
    "Copies locales de pages sur les grands nombres.",
  ],
  it: [
    "La stessa storia come articolo scientifico — e domande senza risposta.",
    "Veri grandi numeri, i loro nomi e la nostra scala a…z.",
    "Brevi pensieri a margine — nessuno finisce con una risposta.",
    "Copie locali di pagine sui grandi numeri.",
  ],
  es: [
    "La misma historia como artículo científico — y preguntas sin respuesta.",
    "Números grandes reales, sus nombres y nuestra escalera a…z.",
    "Pensamientos breves al margen — ninguno termina en respuesta.",
    "Copias locales de páginas sobre números grandes.",
  ],
  pt: [
    "A mesma história como artigo científico — e perguntas em aberto.",
    "Números grandes reais, os seus nomes e a nossa escada a…z.",
    "Pensamentos breves à margem — nenhum acaba numa resposta.",
    "Cópias locais de páginas sobre números grandes.",
  ],
  zh: [
    "同一个故事，写成科学论文——并留下没有答案的问题。",
    "真实的大数、它们的名字，以及我们的 a…z 阶梯。",
    "边缘处的短思——没有一则以答案收尾。",
    "关于大数的网页的本地存档。",
  ],
  ja: [
    "同じ物語を科学論文として——そして未解決の問い。",
    "実在する大きな数、その名前、そして私たちの a…z の梯子。",
    "余白の短い思索——どれも答えで終わらない。",
    "大きな数についてのページのローカル保存。",
  ],
  ko: [
    "과학 논문으로 쓴 같은 이야기 — 그리고 답 없는 물음들.",
    "실재하는 큰 수들, 그 이름들, 그리고 우리의 a…z 사다리.",
    "여백의 짧은 생각들 — 어느 것도 답으로 끝나지 않는다.",
    "큰 수에 관한 페이지의 로컬 스냅숏.",
  ],
  hi: [
    "वही कहानी एक वैज्ञानिक पर्चे के रूप में — और अनुत्तरित प्रश्न।",
    "असली बड़ी संख्याएँ, उनके नाम, और हमारी a…z सीढ़ी।",
    "हाशिये पर छोटे विचार — कोई भी उत्तर पर समाप्त नहीं होता।",
    "बड़ी संख्याओं वाले पन्नों की स्थानीय प्रतियाँ।",
  ],
  ar: [
    "الحكاية نفسها في هيئة بحثٍ علمي — وأسئلةٌ بلا جواب.",
    "أعدادٌ كبيرةٌ حقيقية، وأسماؤها، وسُلّمنا a…z.",
    "خواطر قصيرة على الهامش — لا ينتهي أيٌّ منها بجواب.",
    "نسخٌ محلّية لصفحاتٍ عن الأعداد الكبيرة.",
  ],
  he: [
    "אותו סיפור כמאמר מדעי — ושאלות שנותרו פתוחות.",
    "מספרים גדולים אמיתיים, שמותיהם, וסולם ה־a…z שלנו.",
    "מחשבות קצרות בשוליים — אף אחת אינה מסתיימת בתשובה.",
    "עותקים מקומיים של דפים על מספרים גדולים.",
  ],
  ka: [
    "იგივე ამბავი, როგორც სამეცნიერო სტატია — და პასუხგაუცემელი კითხვები.",
    "ნამდვილი დიდი რიცხვები, მათი სახელები და ჩვენი a…z კიბე.",
    "მოკლე ფიქრები აშიაზე — არცერთი არ მთავრდება პასუხით.",
    "დიდ რიცხვებზე გვერდების ლოკალური ასლები.",
  ],
  hy: [
    "Նույն պատմությունը՝ որպես գիտական հոդված, և անպատասխան հարցեր։",
    "Իրական մեծ թվեր, դրանց անունները և մեր a…z սանդուղքը։",
    "Կարճ մտքեր լուսանցքում՝ ոչ մեկը չի ավարտվում պատասխանով։",
    "Մեծ թվերի մասին էջերի տեղային պատճեններ։",
  ],
};

export const homeContent = (lang: Lang): HomeContent => home[lang] ?? home[defaultLang]!;
export const partBlurbsFor = (lang: Lang): string[] => partBlurbs[lang] ?? partBlurbs[defaultLang]!;
