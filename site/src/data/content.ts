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
      "People often reach for “powerful, tending-to-infinity” sets. This is the story of two children who once did exactly that, looking at the stars.",
    ],
    legend: [
      "One summer evening two boys sat on a bench, looked at the stars, and argued about how many atoms fit in the Universe.",
      "They named bigger and bigger numbers and reached an undecillion (10³⁶). It still felt too small.",
      "So they did what real mathematicians do: they gave the big number a name. Let a be the first step. Then each next number is the previous one raised to itself — all the way up to the summit, the crypto coma.",
    ],
    formulaIntro:
      "The series is set by a starting value a and one simple rule: the next level is the previous one raised to the power of itself.",
    formulaOutro:
      "There are twenty-six levels, one per letter. The crypto coma is the self-power of the last level, z.",
    compact:
      "In short: write x★ = xˣ (a star means “raise the number to itself”). Then the crypto coma is (10³⁶)★²⁶ — twenty-six stars, one per letter of the alphabet.",
  },
  ru: {
    manifest: [
      "Люди часто прибегают к «мощным, восходящим к бесконечности» множествам. Эта история — о том, как двое детей однажды сделали то же самое, глядя на звёзды.",
    ],
    legend: [
      "Летним вечером двое мальчиков сидели на лавочке, смотрели на звёзды и спорили, сколько атомов поместится во Вселенной.",
      "Они называли всё большие числа и дошли до ундециллиона (10³⁶). Им показалось мало.",
      "Тогда они поступили как настоящие математики: дали большому числу имя. Пусть a — первый шаг. А дальше каждое следующее число есть предыдущее, возведённое в самого себя, — до самой вершины, крипто комы.",
    ],
    formulaIntro:
      "Ряд задаётся начальным значением a и простым правилом: следующий уровень — это предыдущий в степени самого себя.",
    formulaOutro:
      "Всего уровней — двадцать шесть, по числу букв. Крипто кома — это самовозведение последнего уровня z.",
    compact:
      "Короче: обозначим x★ = xˣ (звёздочка значит «возвести число в себя»). Тогда крипто кома — это (10³⁶)★²⁶: двадцать шесть звёздочек, по одной на каждую букву алфавита.",
  },
  de: {
    manifest: [
      "Menschen greifen oft nach „mächtigen, ins Unendliche strebenden“ Mengen. Dies ist die Geschichte zweier Kinder, die genau das taten, als sie zu den Sternen blickten.",
    ],
    legend: [
      "An einem Sommerabend saßen zwei Jungen auf einer Bank, blickten zu den Sternen und stritten darüber, wie viele Atome ins Universum passen.",
      "Sie nannten immer größere Zahlen und gelangten zur Undezillion (10³⁶). Es war ihnen noch immer zu wenig.",
      "Also taten sie, was echte Mathematiker tun: Sie gaben der großen Zahl einen Namen. Sei a der erste Schritt. Jede folgende Zahl ist die vorige, in sich selbst potenziert – bis hinauf zum Gipfel, der Crypto Coma.",
    ],
    formulaIntro:
      "Die Reihe ist durch einen Startwert a und eine einfache Regel bestimmt: Die nächste Stufe ist die vorige, potenziert mit sich selbst.",
    formulaOutro:
      "Es gibt sechsundzwanzig Stufen, eine je Buchstabe. Die Crypto Coma ist die Selbstpotenz der letzten Stufe, z.",
    compact:
      "Kurz gesagt: Schreibe x★ = xˣ (ein Stern heißt „die Zahl in sich selbst potenzieren“). Dann ist die Crypto Coma (10³⁶)★²⁶ — sechsundzwanzig Sterne, einer je Buchstabe.",
  },
  fr: {
    manifest: [
      "Les gens font souvent appel à des ensembles « puissants, tendant vers l’infini ». Voici l’histoire de deux enfants qui, un soir, firent exactement cela en regardant les étoiles.",
    ],
    legend: [
      "Un soir d’été, deux garçons assis sur un banc regardaient les étoiles et se disputaient sur le nombre d’atomes que contient l’Univers.",
      "Ils nommaient des nombres toujours plus grands et parvinrent à un undécillion (10³⁶). C’était encore trop peu.",
      "Alors ils firent ce que font les vrais mathématiciens : ils donnèrent un nom au grand nombre. Soit a le premier pas. Chaque nombre suivant est le précédent élevé à lui-même — jusqu’au sommet, la crypto coma.",
    ],
    formulaIntro:
      "La suite est définie par une valeur de départ a et une règle simple : le niveau suivant est le précédent élevé à sa propre puissance.",
    formulaOutro:
      "Il y a vingt-six niveaux, un par lettre. La crypto coma est la puissance du dernier niveau, z, par lui-même.",
    compact:
      "En bref : posons x★ = xˣ (une étoile signifie « élever le nombre à lui-même »). Alors la crypto coma vaut (10³⁶)★²⁶ — vingt-six étoiles, une par lettre.",
  },
  it: {
    manifest: [
      "Spesso ricorriamo a insiemi « potenti, tendenti all’infinito ». Questa è la storia di due bambini che fecero proprio questo, guardando le stelle.",
    ],
    legend: [
      "Una sera d’estate due ragazzi sedevano su una panchina, guardavano le stelle e discutevano su quanti atomi entrino nell’Universo.",
      "Nominavano numeri sempre più grandi e arrivarono a un undecilione (10³⁶). Sembrava ancora troppo poco.",
      "Allora fecero ciò che fanno i veri matematici: diedero un nome al grande numero. Sia a il primo passo. Ogni numero successivo è il precedente elevato a se stesso — fino alla vetta, la crypto coma.",
    ],
    formulaIntro:
      "La serie è definita da un valore iniziale a e da una semplice regola: il livello successivo è il precedente elevato a se stesso.",
    formulaOutro:
      "Ci sono ventisei livelli, uno per lettera. La crypto coma è l’autopotenza dell’ultimo livello, z.",
    compact:
      "In breve: scriviamo x★ = xˣ (una stella significa « elevare il numero a se stesso »). Allora la crypto coma è (10³⁶)★²⁶ — ventisei stelle, una per lettera.",
  },
  es: {
    manifest: [
      "A menudo recurrimos a conjuntos « poderosos, que tienden al infinito ». Esta es la historia de dos niños que hicieron exactamente eso, mirando las estrellas.",
    ],
    legend: [
      "Una tarde de verano, dos niños sentados en un banco miraban las estrellas y discutían cuántos átomos caben en el Universo.",
      "Nombraban números cada vez mayores y llegaron a un undecillón (10³⁶). Aún les parecía poco.",
      "Así que hicieron lo que hacen los verdaderos matemáticos: le dieron un nombre al gran número. Sea a el primer paso. Cada número siguiente es el anterior elevado a sí mismo — hasta la cima, la crypto coma.",
    ],
    formulaIntro:
      "La serie se define por un valor inicial a y una regla simple: el siguiente nivel es el anterior elevado a sí mismo.",
    formulaOutro:
      "Hay veintiséis niveles, uno por letra. La crypto coma es la autopotencia del último nivel, z.",
    compact:
      "En resumen: escribimos x★ = xˣ (una estrella significa « elevar el número a sí mismo »). Entonces la crypto coma es (10³⁶)★²⁶ — veintiséis estrellas, una por letra.",
  },
  pt: {
    manifest: [
      "Muitas vezes recorremos a conjuntos « poderosos, que tendem ao infinito ». Esta é a história de duas crianças que fizeram exatamente isso, a olhar as estrelas.",
    ],
    legend: [
      "Numa noite de verão, dois meninos sentados num banco olhavam as estrelas e discutiam quantos átomos cabem no Universo.",
      "Nomeavam números cada vez maiores e chegaram a um undecilião (10³⁶). Ainda parecia pouco.",
      "Então fizeram o que fazem os verdadeiros matemáticos: deram um nome ao grande número. Seja a o primeiro passo. Cada número seguinte é o anterior elevado a si mesmo — até ao cume, a crypto coma.",
    ],
    formulaIntro:
      "A série é definida por um valor inicial a e uma regra simples: o nível seguinte é o anterior elevado a si próprio.",
    formulaOutro:
      "Há vinte e seis níveis, um por letra. A crypto coma é a autopotência do último nível, z.",
    compact:
      "Em resumo: escrevemos x★ = xˣ (uma estrela significa « elevar o número a si próprio »). Então a crypto coma é (10³⁶)★²⁶ — vinte e seis estrelas, uma por letra.",
  },
  zh: {
    manifest: [
      "人们常常求助于“强大而趋向无穷”的集合。这是两个孩子仰望星空时，做过同样事情的故事。",
    ],
    legend: [
      "一个夏夜，两个男孩坐在长椅上，望着星星，争论宇宙里能装下多少个原子。",
      "他们报出越来越大的数，一直数到 10³⁶（undecillion），却仍嫌太小。",
      "于是他们做了真正的数学家会做的事：给这个大数起个名字。设 a 为第一步，此后每个数都是前一个数自身的幂——一路攀上顶峰，即“crypto coma”。",
    ],
    formulaIntro: "这个数列由起始值 a 和一条简单规则决定：下一层是上一层自身的幂。",
    formulaOutro: "共有二十六层，每个字母一层。crypto coma 就是最后一层 z 的自身之幂。",
    compact:
      "简而言之：记 x★ = xˣ（一颗星表示“把这个数自乘为幂”）。那么 crypto coma 就是 (10³⁶)★²⁶——二十六颗星，每个字母一颗。",
  },
  ja: {
    manifest: [
      "人はしばしば「強大で、無限へと向かう」集合に手を伸ばす。これは、星を見上げながらまさにそれを行った二人の子どもの物語である。",
    ],
    legend: [
      "ある夏の夕べ、二人の少年がベンチに座り、星を眺めながら、宇宙にいくつの原子が収まるかを言い争っていた。",
      "彼らはより大きな数を次々と挙げ、ついに 10³⁶（アンデシリオン）に達した。それでもまだ小さく思えた。",
      "そこで彼らは本物の数学者がすることをした——その大きな数に名前を与えたのだ。a を最初の一歩とする。以後、次の数は前の数を自分自身で累乗したもの——頂の「クリプト・コーマ」まで。",
    ],
    formulaIntro:
      "この数列は、初期値 a と一つの単純な規則で定まる：次の段は、前の段を自分自身で累乗したものである。",
    formulaOutro: "段は二十六、文字ごとに一つ。クリプト・コーマは最後の段 z の自己累乗である。",
    compact:
      "手短に言えば：x★ = xˣ と書く（星印は「その数を自分自身で累乗する」の意）。すると、クリプト・コーマは (10³⁶)★²⁶——星が二十六個、各文字に一つずつ。",
  },
  ko: {
    manifest: [
      "사람들은 흔히 ‘강력하고 무한을 향해 뻗어가는’ 집합에 기댄다. 이것은 별을 바라보며 바로 그 일을 했던 두 아이의 이야기다.",
    ],
    legend: [
      "어느 여름 저녁, 두 소년이 벤치에 앉아 별을 바라보며 우주에 원자가 몇 개나 들어갈지를 두고 다투었다.",
      "그들은 점점 더 큰 수를 불렀고 마침내 10³⁶(언데실리언)에 이르렀다. 그래도 여전히 너무 작게 느껴졌다.",
      "그래서 그들은 진짜 수학자가 하는 일을 했다—그 큰 수에 이름을 붙인 것이다. a를 첫걸음이라 하자. 이후 각 수는 앞의 수를 자기 자신으로 거듭제곱한 것—정상인 크립토 코마에 이르기까지.",
    ],
    formulaIntro:
      "이 수열은 시작값 a와 하나의 단순한 규칙으로 정해진다: 다음 단계는 이전 단계를 자기 자신으로 거듭제곱한 것이다.",
    formulaOutro: "스물여섯 단계, 글자마다 하나씩이다. 크립토 코마는 마지막 단계 z의 자기 거듭제곱이다.",
    compact:
      "요컨대: x★ = xˣ로 쓴다(별표는 ‘그 수를 자기 자신으로 거듭제곱한다’는 뜻). 그러면 크립토 코마는 (10³⁶)★²⁶—별 스물여섯 개, 각 글자마다 하나씩.",
  },
  hi: {
    manifest: [
      "लोग अक्सर “शक्तिशाली, अनंत की ओर बढ़ते” समुच्चयों का सहारा लेते हैं। यह दो बच्चों की कहानी है जिन्होंने तारों को देखते हुए ठीक यही किया।",
    ],
    legend: [
      "गर्मियों की एक शाम दो लड़के एक बेंच पर बैठे, तारों को देखते हुए बहस कर रहे थे कि ब्रह्मांड में कितने परमाणु समा सकते हैं।",
      "वे बड़ी से बड़ी संख्याएँ बताते गए और अनडेसिलियन (10³⁶) तक पहुँचे। फिर भी वह बहुत छोटी लगी।",
      "तब उन्होंने वही किया जो असली गणितज्ञ करते हैं: उस बड़ी संख्या को एक नाम दिया। मान लो a पहला क़दम है। इसके बाद हर अगली संख्या पिछली संख्या को स्वयं की घात पर उठाकर बनती है — ठेठ शिखर तक, यानी crypto coma।",
    ],
    formulaIntro:
      "यह श्रेणी एक आरंभिक मान a और एक सरल नियम से तय होती है: अगला स्तर पिछले स्तर को स्वयं की घात पर उठाकर बनता है।",
    formulaOutro:
      "छब्बीस स्तर हैं, हर अक्षर के लिए एक। crypto coma अंतिम स्तर z की स्वयं-घात है।",
    compact:
      "संक्षेप में: लिखिए x★ = xˣ (एक तारा यानी “संख्या को स्वयं की घात पर उठाना”)। तब crypto coma है (10³⁶)★²⁶ — छब्बीस तारे, हर अक्षर के लिए एक।",
  },
  ar: {
    manifest: [
      "كثيرًا ما نلجأ إلى مجموعاتٍ «جبّارةٍ تنزع نحو اللانهاية». هذه حكاية طفلين فعلا ذلك تمامًا وهما يتأمّلان النجوم.",
    ],
    legend: [
      "في مساء صيفيّ، جلس صبيّان على مقعد، يتأمّلان النجوم ويتجادلان: كم ذرّةً يتّسع لها الكون؟",
      "أخذا يذكران أعدادًا أكبر فأكبر حتى بلغا «الأنديسيليون» (10³⁶)، ومع ذلك بدا العدد صغيرًا.",
      "ففعلا ما يفعله الرياضيّون حقًّا: أعطيا العدد الكبير اسمًا. ليكن a الخطوة الأولى، ثم كلّ عددٍ تالٍ هو سابقه مرفوعًا إلى نفسه — صعودًا حتى القمّة: «الكريبتو كوما».",
    ],
    formulaIntro:
      "تتحدّد المتتالية بقيمةٍ ابتدائية a وقاعدةٍ بسيطة: كلّ مستوًى هو المستوى السابق مرفوعًا إلى نفسه.",
    formulaOutro:
      "هناك ستّةٌ وعشرون مستوًى، لكلّ حرفٍ مستوى. و«الكريبتو كوما» هي المستوى الأخير z مرفوعًا إلى نفسه.",
    compact:
      "باختصار: نكتب x★ = xˣ (النجمة تعني «رفع العدد إلى نفسه»). عندئذٍ تكون الكريبتو كوما (10³⁶)★²⁶ — ستّةٌ وعشرون نجمة، واحدةٌ لكلّ حرف.",
  },
  he: {
    manifest: [
      "בני אדם נזקקים לא־אחת לקבוצות « רבות־עוצמה, השואפות אל האינסוף ». זהו סיפורם של שני ילדים שעשו בדיוק זאת, בהביטם אל הכוכבים.",
    ],
    legend: [
      "בערב קיץ ישבו שני נערים על ספסל, הביטו בכוכבים והתווכחו כמה אטומים נכנסים ליקום.",
      "הם נקבו במספרים גדולים והולכים והגיעו לאונדֶצילְיוֹן (10³⁶). ועדיין נראה קטן מדי.",
      "אז עשו מה שעושים מתמטיקאים אמיתיים: נתנו למספר הגדול שם. יהי a הצעד הראשון. וכל מספר הבא הוא הקודם מועלה בחזקת עצמו — עד לפסגה, הקריפטו קומה.",
    ],
    formulaIntro:
      "הסדרה נקבעת על־ידי ערך התחלתי a וכלל פשוט: הרמה הבאה היא הקודמת מועלית בחזקת עצמה.",
    formulaOutro:
      "יש עשרים ושש רמות, אחת לכל אות. הקריפטו קומה היא החזקה העצמית של הרמה האחרונה, z.",
    compact:
      "בקצרה: נכתוב x★ = xˣ (כוכב פירושו « להעלות את המספר בחזקת עצמו »). אז הקריפטו קומה היא (10³⁶)★²⁶ — עשרים ושישה כוכבים, אחד לכל אות.",
  },
  ka: {
    manifest: [
      "ადამიანები ხშირად მიმართავენ « ძლიერ, უსასრულობისკენ მიმავალ » სიმრავლეებს. ეს არის ორი ბავშვის ამბავი, ვინც ზუსტად ეს გააკეთა, ვარსკვლავებს რომ უყურებდნენ.",
    ],
    legend: [
      "ზაფხულის ერთ საღამოს ორი ბიჭი სკამზე იჯდა, ვარსკვლავებს უყურებდა და კამათობდა, რამდენი ატომი ეტევა სამყაროში.",
      "ისინი უფრო და უფრო დიდ რიცხვებს ასახელებდნენ და მიაღწიეს უნდეცილიონს (10³⁶). მაინც ცოტად ეჩვენებოდათ.",
      "მაშინ მათ ის გააკეთეს, რასაც ნამდვილი მათემატიკოსები აკეთებენ: დიდ რიცხვს სახელი დაარქვეს. ვთქვათ, a პირველი ნაბიჯია. შემდეგ ყოველი მომდევნო რიცხვი წინა რიცხვის თავის თავზე ახარისხებაა — მწვერვალამდე, კრიპტო კომამდე.",
    ],
    formulaIntro:
      "მწკრივი განისაზღვრება საწყისი მნიშვნელობით a და ერთი მარტივი წესით: შემდეგი დონე წინა დონის თავის თავზე ახარისხებაა.",
    formulaOutro:
      "ოცდაექვსი დონეა, თითო ასოზე. კრიპტო კომა ბოლო დონის, z-ის, თვითახარისხებაა.",
    compact:
      "მოკლედ: დავწეროთ x★ = xˣ (ვარსკვლავი ნიშნავს « რიცხვის თავის თავზე ახარისხებას »). მაშინ კრიპტო კომა არის (10³⁶)★²⁶ — ოცდაექვსი ვარსკვლავი, თითო ასოზე.",
  },
  hy: {
    manifest: [
      "Մարդիկ հաճախ դիմում են « հզոր, դեպի անվերջություն ձգտող » բազմությունների։ Սա երկու երեխայի պատմությունն է, ովքեր հենց դա արեցին՝ նայելով աստղերին։",
    ],
    legend: [
      "Ամառային մի երեկո երկու տղա նստած էին նստարանին, նայում էին աստղերին ու վիճում, թե քանի ատոմ կտեղավորվի Տիեզերքում։",
      "Նրանք ավելի ու ավելի մեծ թվեր էին անվանում և հասան ունդեցիլիոնի (10³⁶)։ Դա դեռ շատ փոքր թվաց։",
      "Այդ ժամանակ նրանք արեցին այն, ինչ անում են իսկական մաթեմատիկոսները. մեծ թվին անուն տվեցին։ Թող a-ն լինի առաջին քայլը։ Այնուհետև յուրաքանչյուր հաջորդ թիվ նախորդի՝ ինքն իր վրա բարձրացրած աստիճանն է՝ մինչև գագաթը՝ կրիպտո կոման։",
    ],
    formulaIntro:
      "Շարքը որոշվում է a սկզբնական արժեքով և մեկ պարզ կանոնով. հաջորդ մակարդակը նախորդի՝ ինքն իր վրա բարձրացրած աստիճանն է։",
    formulaOutro:
      "Կա քսանվեց մակարդակ՝ մեկը յուրաքանչյուր տառի համար։ Կրիպտո կոման վերջին՝ z մակարդակի ինքնաստիճանն է։",
    compact:
      "Համառոտ. գրենք x★ = xˣ (աստղը նշանակում է « թիվը բարձրացնել ինքն իր վրա »)։ Այդ դեպքում կրիպտո կոման (10³⁶)★²⁶ է՝ քսանվեց աստղ, մեկը յուրաքանչյուր տառի համար։",
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
