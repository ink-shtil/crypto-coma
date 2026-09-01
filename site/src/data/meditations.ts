// Meditations — short provocations on very large numbers and the crypto coma ladder.
// Bilingual (RU source). Rendered on /[lang]/meditations and mirrored (in part) in the paper.
import type { Lang } from "../i18n/ui";

interface Bi {
  ru: string;
  en: string;
}

export interface Meditation {
  id: string;
  title: Bi;
  body: Bi;
  question: Bi;
}

export const meditationsIntro: Bi = {
  ru: "Короткие размышления на полях. Ни одно не заканчивается ответом — и это не оплошность, а тема.",
  en: "Short thoughts in the margin. None of them ends in an answer — that is not an oversight, it is the subject.",
};

export const meditations: Meditation[] = [
  {
    id: "democracy",
    title: { ru: "Демократия невообразимого", en: "The democracy of the unimaginable" },
    body: {
      ru: "С человеческой точки зрения гугол, гуголплекс, уровень d, уровень p, крипто кома и даже число Грэма сливаются в одну размытую категорию: «примерно бесконечность». У интуиции есть потолок — когнитивный горизонт, — и он лежит абсурдно низко, где-то в районе нескольких тысяч. За ним все великаны на одно лицо. Разница между ними огромна, реальна и нам невидима.",
      en: "To a human, a googol, a googolplex, level d, level p, the crypto coma, even Graham's number collapse into one blurred category: “basically infinity.” Intuition has a ceiling — a cognitive horizon — and it sits absurdly low, somewhere around a few thousand. Past it, every giant looks the same. The differences between them are vast, real, and invisible to us.",
    },
    question: {
      ru: "Где проходит ваш горизонт — последнее число, которое вы способны по-настоящему почувствовать?",
      en: "Where is your horizon — the last number you can actually feel?",
    },
  },
  {
    id: "name-instead",
    title: { ru: "Имя вместо числа", en: "A name instead of the number" },
    body: {
      ru: "Крипто кому нельзя удержать — поэтому мы держим её имя: ℂ⇈, три штриха. Имя конечно, число не записать. Назвать — способ приручить то, что не унести. Но поводок — это не зверь.",
      en: "We cannot hold the crypto coma, so we hold its name: ℂ⇈, three strokes. The name is finite; the number cannot be written. Naming is how we tame what we cannot carry. But a leash is not the animal.",
    },
    question: {
      ru: "Когда вы говорите «крипто кома», что именно у вас в голове — число или слово, стоящее там, куда число не помещается?",
      en: "When you say “crypto coma,” what is in your mind — a number, or a word standing where the number will not fit?",
    },
  },
  {
    id: "nameless",
    title: { ru: "Почти все великаны безымянны", en: "Almost every giant is nameless" },
    body: {
      ru: "Коротких описаний конечное число: фраз короче заданной длины попросту не бесконечно много. А чисел — бесконечно. Значит, почти всякое число — включая почти всякое число размера d — нельзя ни назвать, ни описать, ни выделить. Крипто кома — редкий именованный великан в бесконечной толпе анонимных.",
      en: "There are only finitely many short descriptions: sentences under a given length do not go on forever. But numbers do. So almost every number — including almost every number the size of d — can never be named, described, or singled out. The crypto coma is a rare named giant in an endless crowd of anonymous ones.",
    },
    question: {
      ru: "Если число нельзя ни назвать, ни достичь, — в каком смысле оно «есть»?",
      en: "If a number can never be named or reached, in what sense is it “there”?",
    },
  },
  {
    id: "physically-transcendent",
    title: { ru: "Физически трансцендентное", en: "Physically transcendent" },
    body: {
      ru: "Компьютер, работающий до тепловой смерти Вселенной и переключающий бит каждый планковский миг, не напечатал бы цифры уровня d — даже число его цифр. У вычислений есть физический предел (Бремерман, Ландауэр). Значит, некоторые конечные числа реальны, но навсегда неосуществимы: истинны — и никогда не будут построены, сосчитаны или показаны нигде в этом космосе.",
      en: "A computer running until the heat death of the universe, flipping one bit every Planck time, could not print the digits of level d — not even the count of its digits. Computation has a physical limit (Bremermann, Landauer). So some finite numbers are real yet forever un-realizable: true, and never to be built, counted, or displayed anywhere in this cosmos.",
    },
    question: {
      ru: "Число, которое реальность не может воплотить, — это факт о математике или о нас?",
      en: "Is a number reality can never instantiate a fact about mathematics, or about us?",
    },
  },
  {
    id: "enough",
    title: { ru: "Сколько — это «мало»?", en: "How much is “not enough”?" },
    body: {
      ru: "Мальчики дошли до ундециллиона, и им стало «мало». Мало для чего? Никакая задача не требовала числа побольше; ничего не измерялось. Размер не добавлял ничего, кроме размера. Голод идти выше — не математический, а человеческий. Мы лезем, потому что следующая ступень есть.",
      en: "The boys reached an undecillion and it felt “not enough.” Not enough for what? No task needed a bigger number; nothing was being measured. Size added nothing but more size. The hunger to go higher is not mathematical — it is human. We climb because the next rung is there.",
    },
    question: {
      ru: "К чему они на самом деле тянулись, если не к величине?",
      en: "What were they actually reaching for, if not a quantity?",
    },
  },
  {
    id: "no-top",
    title: { ru: "Лестница без вершины", en: "A ladder with no top" },
    body: {
      ru: "z — последняя буква, а не последнее число. Примените ★ ещё раз — и вы прошли крипто кому; ещё раз — и она осталась далеко внизу. Назовите любой потолок, и вы только что построили пол следующей комнаты. Наибольшего числа нет — есть лишь самое большое из тех, что вы удосужились назвать.",
      en: "z is the last letter, not the last number. Apply ★ once more and you have passed the crypto coma; once more and it is far below you. Name any ceiling and you have just built the floor of the next room. There is no largest number — only the largest one you have bothered to name.",
    },
    question: {
      ru: "«Самое большое число» — это то, чего не существует, или направление, у которого нет конца?",
      en: "Is “the biggest number” a thing that does not exist, or a direction that never ends?",
    },
  },
  {
    id: "child-frontier",
    title: { ru: "Ребёнок на границе", en: "The child at the frontier" },
    body: {
      ru: "«Какое число самое большое?» звучит как вопрос из детской. Это не так. Решить, как быстро числа могут расти — TREE, последовательности Гудстейна, «трудолюбивый бобёр», — значит коснуться пределов того, что математика вообще способна доказать. Мальчики, сами того не зная, положили палец на край доказуемости. Границу числа стерегут дети.",
      en: "“What is the biggest number?” sounds like a nursery question. It is not. Deciding how fast numbers may grow — TREE, Goodstein sequences, the busy beaver — touches the limits of what mathematics can prove at all. The boys, without knowing it, put a finger on the edge of provability. The frontier of number is guarded by children.",
    },
    question: {
      ru: "Почему самый простой вопрос ведёт прямиком к самому трудному?",
      en: "Why does the simplest question lead straight to the hardest?",
    },
  },
  {
    id: "ruler-of-infinities",
    title: { ru: "Линейка из бесконечностей", en: "A ruler made of infinities" },
    body: {
      ru: "Чтобы сравнить двух конечных великанов, которых не записать, математик забирается в трансфинитное: ординалы, иерархии, размеченные бесконечностью, — и меряет ими всего лишь большое. Конечное вынуждает нас подняться в бесконечное, чтобы получить собственную меру.",
      en: "To compare two finite giants that cannot be written, a mathematician climbs into the transfinite: ordinals, hierarchies indexed by infinity — and uses them to measure the merely large. The finite forces us up into the infinite to get its own measure.",
    },
    question: {
      ru: "Почему, чтобы взвесить конечное, нам приходится брать в руки бесконечное?",
      en: "Why must we use the infinite to weigh the finite?",
    },
  },
  {
    id: "discovered-or-invented",
    title: { ru: "Открыли или придумали?", en: "Discovered or invented?" },
    body: {
      ru: "Ждала ли крипто кома в платоновском небе двух мальчиков на лавочке? Или вспыхнула в бытие в тот миг, когда её записали? Ультрафинитисты сказали бы: чисел, до которых нам не добраться, попросту нет. Мальчики весело изобрели кошмар для философии.",
      en: "Was the crypto coma waiting in some Platonic heaven for two boys on a bench? Or did it flicker into being the moment it was written down? Ultrafinitists would say the numbers we can never reach simply are not there. The boys cheerfully invented a nightmare for philosophy.",
    },
    question: {
      ru: "Существовало ли число до своего имени?",
      en: "Did the number exist before its name?",
    },
  },
  {
    id: "silence",
    title: { ru: "Тишина между d и p", en: "The silence between d and p" },
    body: {
      ru: "Между d и p лежит больше чисел, чем всего остального в этой статье, — безымянных, немыслимых, неиспользуемых. Названные числа — тонкая пыль на бесконечной прямой; лестница крипто комы навещает 26 точек и перешагивает океаны. Всё интересное, что мы вообще говорим о числах, сказано о ничтожной горстке.",
      en: "Between d and p lie more numbers than everything else in this article combined — nameless, unthinkable, unused. Named numbers are a thin dust on an endless line; the crypto coma ladder visits 26 points and steps over oceans. Everything interesting we ever say about number is said about a vanishing handful.",
    },
    question: {
      ru: "Мы говорим только о числах, которые можем назвать. Чего мы не замечаем?",
      en: "We only ever speak of the numbers we can name. What are we missing?",
    },
  },
];

// --- epigraphs (real, attributed) ---
export interface Epigraph {
  id: string;
  text: Record<Lang, string>;
  who: Record<Lang, string>;
}

export const epigraphs: Epigraph[] = [
  {
    id: "kronecker",
    text: {
      ru: "Бог создал натуральные числа, всё остальное — дело рук человеческих.",
      en: "God made the integers; all else is the work of man.",
      de: "Gott schuf die natürlichen Zahlen, alles andere ist Menschenwerk.",
      fr: "Dieu a créé les nombres entiers, tout le reste est l'œuvre de l'homme.",
      it: "Dio ha creato i numeri naturali; tutto il resto è opera dell'uomo.",
      es: "Dios creó los números naturales; todo lo demás es obra del hombre.",
      pt: "Deus criou os números inteiros; todo o resto é obra do homem.",
      zh: "上帝创造了自然数，其余一切都是人类的造物。",
      ja: "神は自然数を創った。それ以外はすべて人間の業である。",
      ko: "신은 자연수를 만들었다. 그 밖의 모든 것은 인간의 작품이다.",
      hi: "ईश्वर ने प्राकृतिक संख्याएँ बनाईं; बाक़ी सब मानव-निर्मित है।",
      ar: "خلق الله الأعدادَ الطبيعية، وكلُّ ما عداها صنعه الإنسان.",
      he: "אלוהים ברא את המספרים הטבעיים; כל השאר הוא מעשה ידי אדם.",
      ka: "ღმერთმა შექმნა ნატურალური რიცხვები, ყველაფერი დანარჩენი — ადამიანის ხელის ნაქმნარია.",
      hy: "Աստված ստեղծեց բնական թվերը, մնացած ամեն ինչ մարդու ձեռքի գործն է։",
    },
    who: {
      ru: "Леопольд Кронекер",
      en: "Leopold Kronecker",
      de: "Leopold Kronecker",
      fr: "Leopold Kronecker",
      it: "Leopold Kronecker",
      es: "Leopoldo Kronecker",
      pt: "Leopold Kronecker",
      zh: "Leopold Kronecker",
      ja: "Leopold Kronecker",
      ko: "레오폴트 크로네커",
      hi: "लियोपोल्ड क्रोनेकर",
      ar: "ليوبولد كرونيكر",
      he: "Leopold Kronecker",
      ka: "Leopold Kronecker",
      hy: "Leopold Kronecker",
    },
  },
  {
    id: "cantor",
    text: {
      ru: "Я вижу это, но не верю этому.",
      en: "I see it, but I do not believe it.",
      de: "Ich sehe es, aber ich glaube es nicht.",
      fr: "Je le vois, mais je n'y crois pas.",
      it: "Lo vedo, ma non ci credo.",
      es: "Lo veo, pero no lo creo.",
      pt: "Vejo-o, mas não acredito nele.",
      zh: "我看见了，但我不相信。",
      ja: "私はそれを見ている。だが、信じることはできない。",
      ko: "나는 그것을 보지만, 믿지 못한다.",
      hi: "मैं इसे देखता हूँ, पर इस पर विश्वास नहीं करता।",
      ar: "أرى ذلك، لكنّي لا أصدّقه.",
      he: "אני רואה זאת, אך איני מאמין לכך.",
      ka: "მე ამას ვხედავ, მაგრამ არ მჯერა.",
      hy: "Ես տեսնում եմ դա, բայց չեմ հավատում դրան։",
    },
    who: {
      ru: "Георг Кантор (о своём же результате)",
      en: "Georg Cantor (on his own result)",
      de: "Georg Cantor (über sein eigenes Ergebnis)",
      fr: "Georg Cantor (à propos de son propre résultat)",
      it: "Georg Cantor (sul suo stesso risultato)",
      es: "Georg Cantor (sobre su propio resultado)",
      pt: "Georg Cantor (sobre o seu próprio resultado)",
      zh: "Georg Cantor（关于他自己的成果）",
      ja: "Georg Cantor（自身の結果について）",
      ko: "게오르크 칸토어 (자신의 결과에 대해)",
      hi: "जॉर्ज कैंटोर (अपने ही परिणाम के बारे में)",
      ar: "غيورغ كانتور (عن نتيجته هو)",
      he: "Georg Cantor (על תוצאתו שלו)",
      ka: "Georg Cantor (თავისივე შედეგზე)",
      hy: "Georg Cantor (իր իսկ արդյունքի մասին)",
    },
  },
  {
    id: "boys",
    text: {
      ru: "Ундециллион? Мало.",
      en: "An undecillion? Not enough.",
      de: "Eine Undezillion? Zu wenig.",
      fr: "Un undécillion ? Pas assez.",
      it: "Un undecilione? Poco.",
      es: "¿Un undecillón? Poco.",
      pt: "Um undecilião? Pouco.",
      zh: "一个 undecillion？不够。",
      ja: "アンデシリオン？ 足りない。",
      ko: "언데실리언? 부족해.",
      hi: "अनडेसिलियन? कम।",
      ar: "أنديسيليون؟ لا يكفي.",
      he: "אונדציליון? לא מספיק.",
      ka: "უნდეცილიონი? ცოტაა.",
      hy: "Ունդեցիլիո՞ն. Քիչ է։",
    },
    who: {
      ru: "Двое мальчиков",
      en: "Two boys",
      de: "Zwei Jungen",
      fr: "Deux garçons",
      it: "Due ragazzi",
      es: "Dos niños",
      pt: "Dois meninos",
      zh: "两个男孩",
      ja: "二人の少年",
      ko: "두 소년",
      hi: "दो लड़के",
      ar: "صبيّان",
      he: "שני נערים",
      ka: "ორი ბიჭი",
      hy: "Երկու տղա",
    },
  },
  {
    id: "hilbert",
    text: {
      ru: "Никто не изгонит нас из рая, который создал Кантор.",
      en: "No one shall drive us from the paradise that Cantor created for us.",
      de: "Niemand wird uns aus dem Paradies vertreiben, das Cantor uns geschaffen hat.",
      fr: "Personne ne nous chassera du paradis que Cantor a créé pour nous.",
      it: "Nessuno ci caccerà dal paradiso che Cantor ha creato per noi.",
      es: "Nadie nos expulsará del paraíso que Cantor creó para nosotros.",
      pt: "Ninguém nos expulsará do paraíso que Cantor criou para nós.",
      zh: "没有人能把我们赶出康托尔为我们创造的天堂。",
      ja: "私たちは、Cantor が私たちのために創り出した楽園から、決して追い出されはしない。",
      ko: "아무도 우리를 칸토어가 마련한 낙원에서 쫓아내지 못할 것이다.",
      hi: "कोई हमें उस स्वर्ग से बाहर नहीं निकाल पाएगा, जिसे कैंटोर ने रचा।",
      ar: "لن يُخرجَنا أحدٌ من الفردوس الذي صنعه كانتور لنا.",
      he: "איש לא יגרשנו מגן העדן שברא Cantor.",
      ka: "ვერვინ გამოგვაძევებს იმ სამოთხიდან, რომელიც კანტორმა შეგვიქმნა.",
      hy: "Ոչ ոք մեզ դուրս չի վռնդի Cantor-ի ստեղծած դրախտից։",
    },
    who: {
      ru: "Давид Гильберт",
      en: "David Hilbert",
      de: "David Hilbert",
      fr: "David Hilbert",
      it: "David Hilbert",
      es: "David Hilbert",
      pt: "David Hilbert",
      zh: "David Hilbert",
      ja: "David Hilbert",
      ko: "다비드 힐베르트",
      hi: "डेविड हिल्बर्ट",
      ar: "ديفيد هيلبرت",
      he: "David Hilbert",
      ka: "David Hilbert",
      hy: "David Hilbert",
    },
  },
  {
    id: "gauss",
    text: {
      ru: "Я протестую против употребления бесконечной величины как чего-то завершённого — в математике это недопустимо.",
      en: "I protest against the use of an infinite magnitude as something completed, which is never permissible in mathematics.",
      de: "Ich protestiere gegen den Gebrauch einer unendlichen Größe als etwas Vollendetem, was in der Mathematik niemals erlaubt ist.",
      fr: "Je proteste contre l'usage d'une grandeur infinie comme quelque chose d'achevé — ce qui n'est jamais permis en mathématiques.",
      it: "Protesto contro l'uso di una grandezza infinita come di qualcosa di compiuto — in matematica ciò non è mai ammissibile.",
      es: "Protesto contra el uso de una magnitud infinita como algo ya completado, lo que nunca es permisible en matemáticas.",
      pt: "Protesto contra o uso de uma grandeza infinita como algo completo, o que nunca é permitido na matemática.",
      zh: "我反对把无穷大量当作某种已完成之物来使用——这在数学中是不允许的。",
      ja: "私は、無限の量が何か完結したものとして用いられることに抗議する——数学においてそれは決して許されない。",
      ko: "나는 무한한 크기를 완결된 어떤 것으로 쓰는 것에 항의한다—수학에서는 그것이 허용되지 않는다.",
      hi: "मैं किसी पूर्ण वस्तु के रूप में अनंत परिमाण के प्रयोग का विरोध करता हूँ — गणित में इसकी कभी अनुमति नहीं है।",
      ar: "أحتجُّ على استعمال المقدار اللانهائي بوصفه شيئًا مكتملًا — فذلك غير جائزٍ في الرياضيات.",
      he: "אני מוחה נגד השימוש בגודל אינסופי כמשהו שהושלם — דבר שאינו מותר לעולם במתמטיקה.",
      ka: "ვაპროტესტებ უსასრულო სიდიდის გამოყენებას როგორც დასრულებული რამისას — მათემატიკაში ეს დაუშვებელია.",
      hy: "Ես բողոքում եմ անվերջ մեծության գործածության դեմ՝ որպես ավարտված բանի. մաթեմատիկայում դա թույլատրելի չէ։",
    },
    who: {
      ru: "Карл Фридрих Гаусс",
      en: "Carl Friedrich Gauss",
      de: "Carl Friedrich Gauß",
      fr: "Carl Friedrich Gauss",
      it: "Carl Friedrich Gauss",
      es: "Carl Friedrich Gauss",
      pt: "Carl Friedrich Gauss",
      zh: "Carl Friedrich Gauss",
      ja: "Carl Friedrich Gauss",
      ko: "카를 프리드리히 가우스",
      hi: "कार्ल फ्रेडरिक गॉस",
      ar: "كارل فريدريش غاوس",
      he: "Carl Friedrich Gauss",
      ka: "Carl Friedrich Gauss",
      hy: "Carl Friedrich Gauss",
    },
  },
  {
    id: "newton",
    text: {
      ru: "Если я видел дальше других, то потому, что стоял на плечах гигантов.",
      en: "If I have seen further, it is by standing on the shoulders of giants.",
      de: "Wenn ich weiter gesehen habe, dann deshalb, weil ich auf den Schultern von Riesen stand.",
      fr: "Si j'ai vu plus loin, c'est en me tenant sur les épaules de géants.",
      it: "Se ho visto più lontano degli altri, è perché stavo sulle spalle di giganti.",
      es: "Si he visto más lejos que otros, es porque estaba de pie sobre hombros de gigantes.",
      pt: "Se vi mais longe, foi por estar sobre os ombros de gigantes.",
      zh: "如果说我看得更远，那是因为我站在巨人的肩膀上。",
      ja: "もし私が他の者より遠くを見たのなら、それは巨人たちの肩の上に立っていたからだ。",
      ko: "내가 다른 사람들보다 더 멀리 보았다면, 그것은 거인의 어깨 위에 서 있었기 때문이다.",
      hi: "यदि मैंने दूसरों से अधिक दूर देखा है, तो इसलिए कि मैं दानवों के कंधों पर खड़ा था।",
      ar: "إن كنتُ رأيتُ أبعدَ من غيري، فلأنّي وقفتُ على أكتاف عمالقة.",
      he: "אם ראיתי רחוק יותר מאחרים, הרי זה משום שעמדתי על כתפי ענקים.",
      ka: "თუ სხვებზზე შორს ვხედავდი, ეს იმიტომ, რომ გიგანტების მხრებზე ვიდექი.",
      hy: "Եթե ես ուրիշներից ավելի հեռուն եմ տեսել, ապա այն պատճառով, որ կանգնած էի հսկաների ուսերին։",
    },
    who: {
      ru: "Исаак Ньютон",
      en: "Isaac Newton",
      de: "Isaac Newton",
      fr: "Isaac Newton",
      it: "Isaac Newton",
      es: "Isaac Newton",
      pt: "Isaac Newton",
      zh: "Isaac Newton",
      ja: "Isaac Newton",
      ko: "아이작 뉴턴",
      hi: "आइज़क न्यूटन",
      ar: "إسحاق نيوتن",
      he: "Isaac Newton",
      ka: "Isaac Newton",
      hy: "Isaac Newton",
    },
  },
];
// --- thought experiments: concrete, vivid scenarios (same shape as meditations) ---
export const thoughtExperimentsIntro: Bi = {
  ru: "Три сцены, чтобы попробовать эти числа «на ощупь». Каждая заканчивается там, где кончается воображение.",
  en: "Three scenes to try these numbers by hand. Each ends where imagination runs out.",
};

export const thoughtExperiments: Meditation[] = [
  {
    id: "scribe",
    title: { ru: "Писец", en: "The scribe" },
    body: {
      ru: "Писец пишет по одной цифре каждый планковский миг — быстрее не меняется ничто во Вселенной. С Большого взрыва он успел бы вывести около 10⁶⁰ цифр. У уровня b их 10^(3.6×10³⁷). Он не закончил и ничтожной доли; конца b он не достигнет никогда — не говоря уже о c. А b — самый маленький из наших великанов.",
      en: "A scribe writes one digit every Planck time — nothing in the universe changes faster. Since the Big Bang he would have produced about 10⁶⁰ digits. Level b has 10^(3.6×10³⁷) of them. He has not finished a vanishing fraction; he will never reach the end of b, let alone c. And b is the smallest of our giants.",
    },
    question: {
      ru: "Если даже время не доходит до конца b, что значит сказать, что у b «столько-то» цифр?",
      en: "If even time cannot reach the end of b, what does it mean to say b “has” that many digits?",
    },
  },
  {
    id: "babel",
    title: { ru: "Вавилонская библиотека", en: "The Library of Babel" },
    body: {
      ru: "Библиотека Борхеса хранит все книги по 410 страниц — вообразимо огромная, но всё же конечная. Рядом с d она смехотворно мала. Чтобы расставить по полкам цифры d, нужна библиотека, каталог которой нельзя записать в этой Вселенной. Борхес придумал самую большую библиотеку, какую человек в силах вынести; d требует той, что вынести нельзя.",
      en: "Borges's library holds every 410-page book — imaginably vast, yet finite. Next to d it is laughably small. To shelve the digits of d you would need a library whose catalogue cannot be written in this universe. Borges imagined the largest library a person could bear; d demands one they cannot.",
    },
    question: {
      ru: "Мы сложили миф о «немыслимо многих книгах» — и он всё равно не дотянул. Что это говорит о наших мифах о бесконечном?",
      en: "We built a myth of “unimaginably many books” and it still fell short. What does that say about our myths of the infinite?",
    },
  },
  {
    id: "seer",
    title: { ru: "Тот, кто мог бы его увидеть", en: "The one who could see it" },
    body: {
      ru: "Вообразите ум, способный удержать крипто кому целиком — все цифры разом. Была бы для него крипто кома одним числом, как семёрка для нас? Или «одно число» на таком масштабе перестаёт что-либо значить? Быть может, по-настоящему увидеть число — значит сделать его маленьким.",
      en: "Imagine a mind that could hold the crypto coma whole — every digit at once. Would the crypto coma be a single number to it, the way 7 is to us? Or does “a single number” stop meaning anything at that scale? Perhaps to truly see a number is to make it small.",
    },
    question: {
      ru: "А понимание — не другое ли это слово для «уменьшить»?",
      en: "And is comprehension just another word for shrinking?",
    },
  },
];

export const tr = (b: Bi, lang: Lang): string => b[lang] ?? b.en;

// --- deep translations for the meditations page, kept as compact per-language blocks
// (entries keyed by meditation/thought-experiment id) rather than interleaved into every
// object. A locale absent here falls back to EN via the helpers below. ---
export interface MedText {
  title: string;
  body: string;
  question: string;
}
export interface MedOverride {
  intro?: string;
  teHead?: string;
  teIntro?: string;
  entries?: Record<string, MedText>;
}

export const medOverrides: Partial<Record<Lang, MedOverride>> = {
  zh: {
    intro: "写在页边的短思。没有一则以答案收尾——这不是疏忽，而正是主题。",
    teHead: "思想实验",
    teIntro: "三个场景，用来亲手掂一掂这些数。每一个都在想象力耗尽处收束。",
    entries: {
      democracy: {
        title: "不可想象者的民主",
        body: "对人而言，一个古戈尔、一个古戈尔普勒克斯、第 d 层、第 p 层、crypto coma，甚至葛立恒数，都塌缩成同一个模糊的类别：“差不多就是无穷”。直觉有一道天花板——一条认知的地平线——而它低得荒唐，大约就在几千上下。越过它，所有巨人都长得一模一样。它们之间的差别是巨大的、真实的，而我们看不见。",
        question: "你的地平线在哪里——你真正能感受到的最后一个数是多少？",
      },
      "name-instead": {
        title: "以名代数",
        body: "我们握不住 crypto coma，于是握住它的名字：ℂ⇈，三笔。名字是有限的；数却写不出来。命名，是我们驯服那些无法携带之物的方式。可缰绳并不是野兽本身。",
        question: "当你说“crypto coma”时，脑中是什么——一个数，还是一个立在数放不下之处的词？",
      },
      nameless: {
        title: "几乎所有巨人都无名",
        body: "简短的描述只有有限多个：短于某个长度的句子并非无穷无尽。但数是无穷的。于是几乎每一个数——包括几乎每一个 d 那样大小的数——都永远无法被命名、被描述、被指认。crypto coma 是无名巨人无尽人群中一个罕见的、有名字的巨人。",
        question: "若一个数永远无法被命名、无法被抵达，它在何种意义上“在那里”？",
      },
      "physically-transcendent": {
        title: "物理上超越的",
        body: "一台运行到宇宙热寂、每个普朗克时间翻转一个比特的计算机，也印不出第 d 层的数字——连它的位数都印不完。计算有物理极限（布雷默曼、兰道尔）。因此，有些有限的数是真实的，却永远无法实现：为真，却永远不会在这个宇宙的任何地方被造出、数出或显示出来。",
        question: "一个现实永远无法实现的数，是关于数学的事实，还是关于我们的事实？",
      },
      enough: {
        title: "多少才算“不够”？",
        body: "男孩们数到一个 undecillion，觉得“不够”。不够做什么？没有任何任务需要更大的数；没有任何东西在被度量。尺寸只增加了尺寸，别无其他。想要更高的渴望不是数学的——是人性的。我们往上爬，只因为下一级台阶就在那里。",
        question: "若不是为了一个数量，他们真正伸手去够的是什么？",
      },
      "no-top": {
        title: "没有顶的梯子",
        body: "z 是最后一个字母，不是最后一个数。再用一次 ★，你就越过了 crypto coma；再一次，它已远在你脚下。给任何天花板命名，你就刚刚砌好了下一个房间的地板。没有最大的数——只有你肯费心去命名的那个最大的。",
        question: "“最大的数”是一个并不存在的东西，还是一个永无尽头的方向？",
      },
      "child-frontier": {
        title: "边界上的孩子",
        body: "“最大的数是多少？”听上去像是幼儿园的问题。并不是。判定数能长多快——TREE、古德斯坦数列、忙碌海狸——触及了数学究竟能证明什么的极限。两个男孩在不知不觉间，把手指按在了可证明性的边缘。数的边疆，由孩子守卫。",
        question: "为什么最简单的问题会径直通向最难的问题？",
      },
      "ruler-of-infinities": {
        title: "用无穷造的尺",
        body: "为了比较两个写不出来的有限巨人，数学家攀入超限之境：序数、以无穷标号的层级——并用它们去度量仅仅是“大”的东西。有限逼着我们升入无穷，才能得到它自己的度量。",
        question: "为什么我们非得用无穷去称量有限？",
      },
      "discovered-or-invented": {
        title: "是发现，还是发明？",
        body: "crypto coma 是否曾在某个柏拉图式的天国里，等着长椅上的两个男孩？还是它在被写下的那一刻才闪现为存在？超有限主义者会说：我们永远无法抵达的数，根本就不存在。两个男孩兴高采烈地，为哲学发明了一场噩梦。",
        question: "这个数在它的名字之前就存在吗？",
      },
      silence: {
        title: "d 与 p 之间的沉默",
        body: "d 与 p 之间的数，比这整篇文章里其余的一切加起来还多——无名、不可思、无人使用。有名字的数不过是无尽直线上的一层薄尘；crypto coma 的梯子只造访 26 个点，却一步跨过汪洋。我们关于数所说的一切有趣之事，都只是说给那消失于无形的一小撮听的。",
        question: "我们只谈论那些能命名的数。我们错过了什么？",
      },
      scribe: {
        title: "抄写员",
        body: "一位抄写员每个普朗克时间写下一个数字——宇宙中没有什么变得更快。自大爆炸以来，他约莫写下了 10⁶⁰ 个数字。而第 b 层有 10^(3.6×10³⁷) 个。他连微不足道的一小段都没写完；他永远到不了 b 的尽头，更别说 c。而 b，是我们这些巨人里最小的一个。",
        question: "若连时间都到不了 b 的尽头，说 b “有”那么多位数，又是什么意思？",
      },
      babel: {
        title: "巴别图书馆",
        body: "博尔赫斯的图书馆藏有每一本 410 页的书——可以想象地浩大，却仍是有限的。挨着 d，它小得可笑。要把 d 的数字上架，你需要一座连目录都无法在这个宇宙里写下的图书馆。博尔赫斯想象了人所能承受的最大的图书馆；d 所要求的，是人无法承受的那一座。",
        question: "我们造了一个“多到不可想象的书”的神话，它却仍然不够。这说明了我们关于无穷的神话什么？",
      },
      seer: {
        title: "能看见它的人",
        body: "设想一个心智，能把 crypto coma 整个握住——所有数字，一瞬之间。对它而言，crypto coma 会是一个单独的数吗，就像 7 之于我们？还是说，“一个单独的数”在那种尺度上已不再有任何意义？也许，真正看见一个数，就是把它变小。",
        question: "而理解，是不是“缩小”的另一个说法？",
      },
    },
  },
  ja: {
    intro: "余白に記した短い省察。どれも答えで終わらない——それは手落ちではなく、主題そのものだ。",
    teHead: "思考実験",
    teIntro: "これらの数を手で確かめるための三つの情景。どれも想像力の尽きるところで終わる。",
    entries: {
      democracy: {
        title: "想像しえぬものの民主主義",
        body: "人にとって、グーゴル、グーゴルプレックス、第 d 段、第 p 段、crypto coma、さらにはグラハム数さえ、ひとつのぼやけた範疇へ崩れ落ちる——「まあ無限」。直観には天井がある——認知の地平線が——そしてそれは滑稽なほど低く、数千あたりに座っている。それを越えれば、どの巨人も同じ顔だ。両者の違いは、莫大で、実在し、そして私たちには見えない。",
        question: "あなたの地平線はどこにあるのか——本当に実感できる最後の数は？",
      },
      "name-instead": {
        title: "数の代わりに名を",
        body: "crypto coma を手に握れないから、私たちはその名を握る——ℂ⇈、三画。名は有限、数は書き得ない。名づけとは、運べぬものを飼い慣らす手立てだ。だが手綱は獣そのものではない。",
        question: "「crypto coma」と言うとき、心にあるのは何か——数か、それとも数の入りきらぬ場所に立つ言葉か。",
      },
      nameless: {
        title: "巨人のほとんどは無名だ",
        body: "短い記述は有限個しかない——ある長さより短い文は、無限には続かない。だが数は無限にある。ゆえにほとんどすべての数——d ほどの大きさの数のほとんどさえ——は、決して名づけられず、記述されず、指し示されえない。crypto coma は、無名の群衆の中の、稀な「名を持つ巨人」だ。",
        question: "決して名づけも到達もできぬ数は、いかなる意味で「そこにある」のか。",
      },
      "physically-transcendent": {
        title: "物理的に超越したもの",
        body: "宇宙の熱的死まで走り続け、プランク時間ごとに一ビットを反転させる計算機でも、第 d 段の数字は印字できない——その桁数さえ。計算には物理的限界がある（ブレーメルマン、ランダウアー）。ゆえに、ある有限の数は実在しながら永遠に実現不能だ——真でありながら、この宇宙のどこにも決して築かれず、数えられず、示されない。",
        question: "現実が決して具現できぬ数は、数学についての事実か、それとも私たちについての事実か。",
      },
      enough: {
        title: "「足りない」とはどれほどか",
        body: "少年たちはアンデシリオンに達し、「足りない」と感じた。何に足りないのか。より大きな数を要する仕事などなく、何も測られてはいなかった。大きさは大きさ以外の何も加えなかった。より高くという飢えは数学的ではない——人間的なのだ。私たちが昇るのは、次の段がそこにあるからにすぎない。",
        question: "量でないなら、彼らが本当に手を伸ばしていたものは何か。",
      },
      "no-top": {
        title: "頂のない梯子",
        body: "z は最後の文字であって、最後の数ではない。★ をもう一度使えば crypto coma を越え、さらに一度で、それははるか下に沈む。どんな天井に名を与えても、あなたは次の部屋の床を築いたにすぎない。最大の数などない——あるのは、あなたがわざわざ名づけた中で最大の数だけだ。",
        question: "「いちばん大きな数」とは、存在しない何かなのか、それとも果てのない方向なのか。",
      },
      "child-frontier": {
        title: "境界に立つ子ども",
        body: "「いちばん大きな数は？」は幼稚園の問いに聞こえる。そうではない。数がどれほど速く育ちうるかを定めること——TREE、グッドスタイン数列、ビジービーバー——は、そもそも数学に何が証明できるのかの限界に触れる。少年たちは知らぬまに、証明可能性の縁に指を置いた。数の辺境は、子どもが守っている。",
        question: "なぜ最も単純な問いが、まっすぐ最も難しい問いへ通じるのか。",
      },
      "ruler-of-infinities": {
        title: "無限でできた物差し",
        body: "書き得ぬ二つの有限の巨人を比べるため、数学者は超限へ登る——順序数、無限で添字づけられた階層——そしてそれで、ただ「大きい」だけのものを測る。有限は、みずからの尺度を得るために、私たちを無限へと押し上げる。",
        question: "なぜ有限を量るのに、無限を手に取らねばならないのか。",
      },
      "discovered-or-invented": {
        title: "発見か、発明か",
        body: "crypto coma は、どこかプラトンの天で、ベンチの二人の少年を待っていたのか。それとも書き記されたその瞬間に、存在へと閃いたのか。超有限主義者なら言うだろう——決して到達しえぬ数など、そもそも無い、と。少年たちは、陽気に、哲学のための悪夢を発明した。",
        question: "その数は、名の前から存在していたのか。",
      },
      silence: {
        title: "d と p のあいだの沈黙",
        body: "d と p のあいだには、この記事の他のすべてを合わせたよりも多くの数が横たわる——無名で、思考しえず、使われない。名を持つ数は、果てなき直線の上の薄い塵にすぎない。crypto coma の梯子は 26 の点を訪れ、大洋をまたぐ。数について私たちが語る面白いことのすべては、消えゆくひとつまみに向けて語られている。",
        question: "私たちは名づけうる数だけを語る。私たちは何を見落としているのか。",
      },
      scribe: {
        title: "写字生",
        body: "写字生がプランク時間ごとに一桁を書く——宇宙にこれより速く変わるものはない。ビッグバン以来、彼はおよそ 10⁶⁰ 桁を書いたはずだ。第 b 段にはそれが 10^(3.6×10³⁷) 桁ある。彼は消え入るほどの一部さえ書き終えていない。b の終わりには決して届かない——ましてや c には。そして b は、私たちの巨人のうち最も小さい。",
        question: "時間でさえ b の終わりに届かぬなら、b が「それだけの桁を持つ」とは何を意味するのか。",
      },
      babel: {
        title: "バベルの図書館",
        body: "ボルヘスの図書館は 410 ページのあらゆる本を収める——想像しうるほど広大で、しかし有限だ。d の隣では、笑ってしまうほど小さい。d の桁を棚に収めるには、その目録さえこの宇宙では書けない図書館が要る。ボルヘスは人が担いうる最大の図書館を想像した。d が要求するのは、担いえぬそれだ。",
        question: "私たちは「想像を絶するほど多くの本」の神話を築いた。それでも足りなかった。それは無限についての私たちの神話に何を告げるのか。",
      },
      seer: {
        title: "それを見うる者",
        body: "crypto coma をまるごと——すべての桁を一度に——抱ける心を想像せよ。それにとって crypto coma は、7 が私たちにとってそうであるように、ひとつの数だろうか。それとも「ひとつの数」は、その尺度ではもう何も意味しないのか。おそらく、数を真に見るとは、それを小さくすることだ。",
        question: "そして理解とは、「縮める」の別名にすぎないのではないか。",
      },
    },
  },
  ko: {
    intro: "여백에 적은 짧은 사색들. 어느 것도 답으로 끝나지 않는다—그것은 실수가 아니라 바로 주제다.",
    teHead: "사고 실험",
    teIntro: "이 수들을 손으로 가늠해 보기 위한 세 장면. 저마다 상상력이 다하는 곳에서 끝난다.",
    entries: {
      democracy: {
        title: "상상할 수 없는 것들의 민주주의",
        body: "사람에게는 구골, 구골플렉스, d단계, p단계, crypto coma, 심지어 그레이엄 수마저 하나의 흐릿한 범주로 무너져 내린다: “대충 무한”. 직관에는 천장이 있다—인지의 지평선이—그리고 그것은 우스울 만큼 낮아, 수천 어딘가에 걸려 있다. 그 너머에서는 모든 거인이 똑같아 보인다. 그들 사이의 차이는 막대하고, 실재하며, 우리에겐 보이지 않는다.",
        question: "당신의 지평선은 어디인가—당신이 정말로 실감할 수 있는 마지막 수는?",
      },
      "name-instead": {
        title: "수 대신 이름을",
        body: "우리는 crypto coma를 쥘 수 없어 그 이름을 쥔다: ℂ⇈, 세 획. 이름은 유한하고, 수는 쓸 수 없다. 이름 붙이기란 나를 수 없는 것을 길들이는 방식이다. 그러나 고삐는 짐승이 아니다.",
        question: "“crypto coma”라고 말할 때 머릿속에 있는 것은 무엇인가—수인가, 아니면 수가 들어가지 못하는 자리에 선 낱말인가?",
      },
      nameless: {
        title: "거의 모든 거인은 이름이 없다",
        body: "짧은 서술은 유한개뿐이다—어떤 길이보다 짧은 문장은 무한히 이어지지 않는다. 그러나 수는 무한하다. 그러므로 거의 모든 수는—d만 한 크기의 수 거의 전부를 포함해—결코 이름 붙여지지도, 서술되지도, 지목되지도 못한다. crypto coma는 이름 없는 무리 속의, 드문 ‘이름 가진 거인’이다.",
        question: "결코 이름 붙일 수도 다다를 수도 없는 수는 어떤 의미에서 ‘거기 있는가’?",
      },
      "physically-transcendent": {
        title: "물리적으로 초월한 것",
        body: "우주의 열죽음까지 돌아가며 플랑크 시간마다 한 비트를 뒤집는 컴퓨터로도 d단계의 자릿수는 찍어낼 수 없다—그 자릿수의 개수조차. 계산에는 물리적 한계가 있다(브레머만, 란다우어). 그러므로 어떤 유한한 수는 실재하면서도 영원히 실현 불가능하다: 참이면서도, 이 우주 어디에도 결코 지어지거나 세어지거나 표시되지 않는다.",
        question: "현실이 결코 구현할 수 없는 수는 수학에 관한 사실인가, 우리에 관한 사실인가?",
      },
      enough: {
        title: "‘부족하다’는 얼마인가?",
        body: "소년들은 언데실리언에 이르렀고 ‘부족하다’고 느꼈다. 무엇에 부족한가? 더 큰 수가 필요한 일은 없었고, 아무것도 측정되지 않았다. 크기는 크기 말고는 아무것도 더하지 않았다. 더 높이 가려는 굶주림은 수학적인 것이 아니다—인간적인 것이다. 우리가 오르는 것은 다음 계단이 거기 있기 때문일 뿐이다.",
        question: "양이 아니라면, 그들이 정말로 손 뻗던 것은 무엇인가?",
      },
      "no-top": {
        title: "꼭대기 없는 사다리",
        body: "z는 마지막 글자이지 마지막 수가 아니다. ★을 한 번 더 쓰면 crypto coma를 지나고, 한 번 더면 그것은 저 아래로 멀어진다. 어떤 천장에 이름을 붙이든, 당신은 방금 다음 방의 바닥을 깐 것이다. 가장 큰 수란 없다—오직 당신이 굳이 이름 붙인 것 중 가장 큰 수가 있을 뿐.",
        question: "‘가장 큰 수’는 존재하지 않는 무엇인가, 아니면 끝나지 않는 방향인가?",
      },
      "child-frontier": {
        title: "경계에 선 아이",
        body: "“가장 큰 수는?”은 유치원의 물음처럼 들린다. 아니다. 수가 얼마나 빨리 자랄 수 있는지를 정하는 일—TREE, 굿스타인 수열, 바쁜 비버—은 수학이 대체 무엇을 증명할 수 있는지의 한계에 닿는다. 소년들은 저도 모르게 증명 가능성의 가장자리에 손가락을 얹었다. 수의 변경은 아이들이 지킨다.",
        question: "왜 가장 단순한 물음이 곧장 가장 어려운 물음으로 이어지는가?",
      },
      "ruler-of-infinities": {
        title: "무한으로 만든 자",
        body: "쓸 수 없는 두 유한한 거인을 비교하려고 수학자는 초한으로 오른다: 순서수, 무한으로 색인된 위계—그리고 그것으로 그저 ‘큰’ 것을 잰다. 유한은 제 척도를 얻기 위해 우리를 무한으로 밀어 올린다.",
        question: "왜 유한을 재려고 무한을 손에 들어야 하는가?",
      },
      "discovered-or-invented": {
        title: "발견인가, 발명인가?",
        body: "crypto coma는 어느 플라톤적 천상에서 벤치의 두 소년을 기다리고 있었는가? 아니면 적히는 그 순간 존재로 반짝였는가? 극단적 유한주의자라면 말하리라—우리가 결코 다다를 수 없는 수는 그저 없다고. 소년들은 유쾌하게도 철학을 위한 악몽을 발명했다.",
        question: "그 수는 이름 이전에 존재했는가?",
      },
      silence: {
        title: "d와 p 사이의 침묵",
        body: "d와 p 사이에는 이 글의 나머지 전부를 합친 것보다 많은 수가 놓여 있다—이름 없고, 생각할 수 없고, 쓰이지 않는. 이름 가진 수는 끝없는 직선 위의 얇은 먼지일 뿐이다. crypto coma의 사다리는 26개 점을 방문하며 대양을 건너뛴다. 수에 관해 우리가 말하는 흥미로운 모든 것은, 사라져 가는 한 줌을 향해 말해진다.",
        question: "우리는 이름 붙일 수 있는 수만 말한다. 우리는 무엇을 놓치고 있는가?",
      },
      scribe: {
        title: "필경사",
        body: "필경사가 플랑크 시간마다 한 자리씩 쓴다—우주에서 이보다 빨리 변하는 것은 없다. 대폭발 이래 그는 약 10⁶⁰ 자리를 썼을 것이다. b단계에는 그것이 10^(3.6×10³⁷) 자리 있다. 그는 사라질 만큼 작은 일부조차 끝내지 못했다. 그는 결코 b의 끝에 이르지 못한다—c는 말할 것도 없다. 그리고 b는 우리 거인들 가운데 가장 작다.",
        question: "시간조차 b의 끝에 이르지 못한다면, b가 ‘그만큼의 자릿수를 가진다’는 말은 무슨 뜻인가?",
      },
      babel: {
        title: "바벨의 도서관",
        body: "보르헤스의 도서관은 410쪽짜리 모든 책을 담는다—상상할 만큼 광대하나, 그래도 유한하다. d 옆에서는 우스울 만큼 작다. d의 자릿수를 서가에 꽂으려면 그 목록조차 이 우주에서는 쓸 수 없는 도서관이 필요하다. 보르헤스는 사람이 감당할 수 있는 가장 큰 도서관을 상상했다. d가 요구하는 것은 감당할 수 없는 그것이다.",
        question: "우리는 ‘상상조차 안 되게 많은 책’이라는 신화를 지었으나 그것마저 모자랐다. 그것은 무한에 관한 우리의 신화에 대해 무엇을 말하는가?",
      },
      seer: {
        title: "그것을 볼 수 있는 이",
        body: "crypto coma를 통째로—모든 자리를 한꺼번에—붙들 수 있는 마음을 상상해 보라. 그에게 crypto coma는, 7이 우리에게 그러하듯, 하나의 수일까? 아니면 ‘하나의 수’가 그 규모에서는 더는 아무 뜻도 없는가? 어쩌면 수를 참으로 본다는 것은 그것을 작게 만드는 일이다.",
        question: "그리고 이해란 ‘줄이기’의 다른 이름이 아닐까?",
      },
    },
  },
  de: {
    intro: "Kurze Gedanken am Rand. Keiner endet mit einer Antwort — das ist kein Versehen, sondern das Thema.",
    teHead: "Gedankenexperimente",
    teIntro: "Drei Szenen, um diese Zahlen mit der Hand zu prüfen. Jede endet dort, wo die Vorstellungskraft aufhört.",
    entries: {
      democracy: { title: "Die Demokratie des Unvorstellbaren", body: "Für einen Menschen fallen ein Googol, ein Googolplex, Stufe d, Stufe p, die Crypto Coma, ja selbst Grahams Zahl in eine einzige verschwommene Kategorie: „so ungefähr unendlich“. Die Intuition hat eine Decke — einen kognitiven Horizont — und er liegt absurd niedrig, irgendwo bei ein paar Tausend. Dahinter sehen alle Riesen gleich aus. Die Unterschiede sind gewaltig, real und für uns unsichtbar.", question: "Wo liegt Ihr Horizont — die letzte Zahl, die Sie wirklich fühlen können?" },
      "name-instead": { title: "Ein Name statt der Zahl", body: "Wir können die Crypto Coma nicht halten, also halten wir ihren Namen: ℂ⇈, drei Striche. Der Name ist endlich; die Zahl lässt sich nicht schreiben. Benennen ist, wie wir zähmen, was wir nicht tragen können. Doch die Leine ist nicht das Tier.", question: "Was ist in Ihrem Kopf, wenn Sie „Crypto Coma“ sagen — eine Zahl oder ein Wort, das dort steht, wo die Zahl nicht hinpasst?" },
      nameless: { title: "Fast jeder Riese ist namenlos", body: "Es gibt nur endlich viele kurze Beschreibungen: Sätze unter einer bestimmten Länge gehen nicht ewig weiter. Zahlen aber schon. Also kann fast jede Zahl — auch fast jede Zahl von der Größe von d — nie benannt, beschrieben oder herausgegriffen werden. Die Crypto Coma ist ein seltener benannter Riese in einer endlosen Menge namenloser.", question: "Wenn eine Zahl nie benannt oder erreicht werden kann, in welchem Sinne ist sie „da“?" },
      "physically-transcendent": { title: "Physikalisch transzendent", body: "Ein Rechner, der bis zum Wärmetod des Universums läuft und pro Planck-Zeit ein Bit umlegt, könnte die Ziffern von Stufe d nicht drucken — nicht einmal deren Anzahl. Das Rechnen hat eine physikalische Grenze (Bremermann, Landauer). Also sind manche endlichen Zahlen real und doch für immer nicht realisierbar: wahr, aber niemals irgendwo in diesem Kosmos gebaut, gezählt oder gezeigt.", question: "Ist eine Zahl, die die Wirklichkeit nie verwirklichen kann, eine Tatsache über die Mathematik oder über uns?" },
      enough: { title: "Wie viel ist „zu wenig“?", body: "Die Jungen erreichten eine Undezillion, und es fühlte sich „zu wenig“ an. Zu wenig wofür? Keine Aufgabe brauchte eine größere Zahl; nichts wurde gemessen. Größe fügte nichts hinzu als mehr Größe. Der Hunger, höher zu gehen, ist nicht mathematisch — er ist menschlich. Wir steigen, weil die nächste Sprosse da ist.", question: "Wonach griffen sie eigentlich, wenn nicht nach einer Menge?" },
      "no-top": { title: "Eine Leiter ohne Ende", body: "z ist der letzte Buchstabe, nicht die letzte Zahl. Wenden Sie ★ noch einmal an, und Sie haben die Crypto Coma überschritten; noch einmal, und sie liegt weit unter Ihnen. Benennen Sie irgendeine Decke, und Sie haben gerade den Boden des nächsten Raums gelegt. Es gibt keine größte Zahl — nur die größte, die Sie zu benennen bereit waren.", question: "Ist „die größte Zahl“ etwas, das nicht existiert, oder eine Richtung, die nie endet?" },
      "child-frontier": { title: "Das Kind an der Grenze", body: "„Was ist die größte Zahl?“ klingt nach einer Kinderfrage. Ist es nicht. Zu bestimmen, wie schnell Zahlen wachsen dürfen — TREE, Goodstein-Folgen, der Fleißige Biber — berührt die Grenzen dessen, was die Mathematik überhaupt beweisen kann. Die Jungen legten, ohne es zu wissen, den Finger an den Rand der Beweisbarkeit. Die Grenze der Zahl bewachen Kinder.", question: "Warum führt die einfachste Frage geradewegs zur schwersten?" },
      "ruler-of-infinities": { title: "Ein Lineal aus Unendlichkeiten", body: "Um zwei endliche Riesen zu vergleichen, die sich nicht schreiben lassen, steigt der Mathematiker ins Transfinite: Ordinalzahlen, mit Unendlichkeit indizierte Hierarchien — und misst damit bloß Großes. Das Endliche zwingt uns hinauf ins Unendliche, um sein eigenes Maß zu finden.", question: "Warum müssen wir das Unendliche nehmen, um das Endliche zu wiegen?" },
      "discovered-or-invented": { title: "Entdeckt oder erfunden?", body: "Wartete die Crypto Coma in irgendeinem platonischen Himmel auf zwei Jungen auf einer Bank? Oder blitzte sie in dem Augenblick ins Dasein, als sie geschrieben wurde? Ultrafinitisten würden sagen: Zahlen, die wir nie erreichen können, gibt es schlicht nicht. Die Jungen erfanden vergnügt einen Albtraum für die Philosophie.", question: "Existierte die Zahl vor ihrem Namen?" },
      silence: { title: "Die Stille zwischen d und p", body: "Zwischen d und p liegen mehr Zahlen als alles Übrige in diesem Aufsatz zusammen — namenlos, undenkbar, ungenutzt. Benannte Zahlen sind ein dünner Staub auf einer endlosen Linie; die Leiter der Crypto Coma besucht 26 Punkte und übersteigt Ozeane. Alles Interessante, das wir je über Zahlen sagen, sagen wir über eine verschwindende Handvoll.", question: "Wir sprechen nur von den Zahlen, die wir benennen können. Was übersehen wir?" },
      scribe: { title: "Der Schreiber", body: "Ein Schreiber schreibt pro Planck-Zeit eine Ziffer — nichts im Universum ändert sich schneller. Seit dem Urknall hätte er etwa 10⁶⁰ Ziffern verfasst. Stufe b hat davon 10^(3,6×10³⁷). Er hat nicht einen verschwindenden Bruchteil vollendet; das Ende von b erreicht er nie — geschweige denn c. Und b ist der kleinste unserer Riesen.", question: "Wenn selbst die Zeit das Ende von b nicht erreicht, was heißt es dann, dass b so viele Ziffern „hat“?" },
      babel: { title: "Die Bibliothek von Babel", body: "Borges’ Bibliothek enthält jedes Buch von 410 Seiten — vorstellbar riesig und doch endlich. Neben d ist sie lächerlich klein. Um die Ziffern von d einzuordnen, bräuchte man eine Bibliothek, deren Katalog sich in diesem Universum nicht schreiben lässt. Borges erdachte die größte Bibliothek, die ein Mensch ertragen kann; d verlangt eine, die er nicht ertragen kann.", question: "Wir bauten einen Mythos von „unvorstellbar vielen Büchern“, und er reichte doch nicht. Was sagt das über unsere Mythen vom Unendlichen?" },
      seer: { title: "Der, der es sehen könnte", body: "Stellen Sie sich einen Geist vor, der die Crypto Coma ganz halten könnte — jede Ziffer auf einmal. Wäre die Crypto Coma für ihn eine einzige Zahl, so wie 7 für uns? Oder hört „eine einzige Zahl“ in diesem Maßstab auf, etwas zu bedeuten? Vielleicht heißt eine Zahl wirklich sehen, sie klein zu machen.", question: "Und ist Verstehen nur ein anderes Wort für Verkleinern?" },
    },
  },
  fr: {
    intro: "De courtes pensées en marge. Aucune ne finit par une réponse — ce n’est pas un oubli, c’est le sujet.",
    teHead: "Expériences de pensée",
    teIntro: "Trois scènes pour éprouver ces nombres à la main. Chacune s’arrête là où l’imagination s’épuise.",
    entries: {
      democracy: { title: "La démocratie de l’inconcevable", body: "Pour un humain, un googol, un googolplex, le niveau d, le niveau p, la crypto coma, et même le nombre de Graham s’effondrent en une seule catégorie floue : « à peu près l’infini ». L’intuition a un plafond — un horizon cognitif — et il est absurdement bas, quelque part vers quelques milliers. Au-delà, tous les géants se ressemblent. Leurs différences sont vastes, réelles, et invisibles pour nous.", question: "Où est votre horizon — le dernier nombre que vous pouvez vraiment ressentir ?" },
      "name-instead": { title: "Un nom au lieu du nombre", body: "Nous ne pouvons tenir la crypto coma, alors nous tenons son nom : ℂ⇈, trois traits. Le nom est fini ; le nombre ne peut s’écrire. Nommer, c’est apprivoiser ce qu’on ne peut porter. Mais la laisse n’est pas la bête.", question: "Quand vous dites « crypto coma », qu’avez-vous en tête — un nombre, ou un mot posé là où le nombre ne tient pas ?" },
      nameless: { title: "Presque tout géant est sans nom", body: "Il n’y a qu’un nombre fini de descriptions courtes : les phrases plus courtes qu’une longueur donnée ne se poursuivent pas à l’infini. Les nombres, si. Donc presque tout nombre — y compris presque tout nombre de la taille de d — ne pourra jamais être nommé, décrit, ni distingué. La crypto coma est un rare géant nommé dans une foule sans fin d’anonymes.", question: "Si un nombre ne peut jamais être nommé ni atteint, en quel sens est-il « là » ?" },
      "physically-transcendent": { title: "Physiquement transcendant", body: "Un ordinateur tournant jusqu’à la mort thermique de l’univers, retournant un bit par temps de Planck, ne pourrait imprimer les chiffres du niveau d — pas même leur nombre. Le calcul a une limite physique (Bremermann, Landauer). Ainsi certains nombres finis sont réels et pourtant à jamais irréalisables : vrais, mais jamais bâtis, comptés ni montrés nulle part dans ce cosmos.", question: "Un nombre que la réalité ne peut jamais instancier est-il un fait sur les mathématiques, ou sur nous ?" },
      enough: { title: "Combien fait « pas assez » ?", body: "Les garçons atteignirent un undécillion, et cela parut « pas assez ». Pas assez pour quoi ? Aucune tâche ne réclamait un plus grand nombre ; rien n’était mesuré. La taille n’ajoutait rien que de la taille. La faim d’aller plus haut n’est pas mathématique — elle est humaine. Nous montons parce que le prochain barreau est là.", question: "Vers quoi tendaient-ils vraiment, si ce n’est vers une quantité ?" },
      "no-top": { title: "Une échelle sans sommet", body: "z est la dernière lettre, non le dernier nombre. Appliquez ★ une fois de plus, et vous avez dépassé la crypto coma ; encore une fois, et elle est loin sous vous. Nommez n’importe quel plafond, et vous venez de poser le plancher de la salle suivante. Il n’y a pas de plus grand nombre — seulement le plus grand que vous avez pris la peine de nommer.", question: "« Le plus grand nombre » est-il une chose qui n’existe pas, ou une direction qui ne finit jamais ?" },
      "child-frontier": { title: "L’enfant à la frontière", body: "« Quel est le plus grand nombre ? » sonne comme une question de maternelle. Ce n’en est pas une. Décider à quelle vitesse les nombres peuvent croître — TREE, suites de Goodstein, le castor affairé — touche aux limites de ce que les mathématiques peuvent seulement prouver. Les garçons, sans le savoir, ont posé le doigt sur le bord de la prouvabilité. La frontière du nombre est gardée par des enfants.", question: "Pourquoi la question la plus simple mène-t-elle tout droit à la plus difficile ?" },
      "ruler-of-infinities": { title: "Une règle faite d’infinis", body: "Pour comparer deux géants finis qu’on ne peut écrire, le mathématicien grimpe dans le transfini : ordinaux, hiérarchies indexées par l’infini — et s’en sert pour mesurer le simplement grand. Le fini nous pousse dans l’infini pour obtenir sa propre mesure.", question: "Pourquoi faut-il l’infini pour peser le fini ?" },
      "discovered-or-invented": { title: "Découverte ou inventée ?", body: "La crypto coma attendait-elle dans quelque ciel platonicien deux garçons sur un banc ? Ou a-t-elle surgi à l’existence à l’instant où on l’a écrite ? Les ultrafinitistes diraient : les nombres que nous ne pouvons atteindre n’existent tout simplement pas. Les garçons ont joyeusement inventé un cauchemar pour la philosophie.", question: "Le nombre existait-il avant son nom ?" },
      silence: { title: "Le silence entre d et p", body: "Entre d et p gisent plus de nombres que tout le reste de cet article réuni — sans nom, impensables, inutilisés. Les nombres nommés sont une fine poussière sur une ligne sans fin ; l’échelle de la crypto coma visite 26 points et enjambe des océans. Tout ce que nous disons d’intéressant sur le nombre, nous le disons d’une poignée qui s’évanouit.", question: "Nous ne parlons que des nombres que nous pouvons nommer. Que manquons-nous ?" },
      scribe: { title: "Le scribe", body: "Un scribe écrit un chiffre par temps de Planck — rien dans l’univers ne change plus vite. Depuis le Big Bang, il en aurait produit environ 10⁶⁰. Le niveau b en a 10^(3,6×10³⁷). Il n’en a pas fini une fraction infime ; il n’atteindra jamais la fin de b — encore moins c. Et b est le plus petit de nos géants.", question: "Si même le temps n’atteint pas la fin de b, que veut dire que b « a » tant de chiffres ?" },
      babel: { title: "La Bibliothèque de Babel", body: "La bibliothèque de Borges contient tout livre de 410 pages — imaginablement vaste, et pourtant finie. À côté de d, elle est risiblement petite. Pour ranger les chiffres de d, il faudrait une bibliothèque dont le catalogue ne peut s’écrire dans cet univers. Borges imagina la plus grande bibliothèque qu’un humain puisse supporter ; d en exige une qu’il ne peut supporter.", question: "Nous avons bâti un mythe de « livres en nombre inimaginable », et il n’a pas suffi. Que dit cela de nos mythes de l’infini ?" },
      seer: { title: "Celui qui pourrait la voir", body: "Imaginez un esprit capable de tenir la crypto coma tout entière — chaque chiffre à la fois. Serait-elle pour lui un seul nombre, comme 7 l’est pour nous ? Ou « un seul nombre » cesse-t-il de vouloir dire quoi que ce soit à cette échelle ? Peut-être que voir vraiment un nombre, c’est le rendre petit.", question: "Et comprendre n’est-il qu’un autre mot pour rapetisser ?" },
    },
  },
  it: {
    intro: "Brevi pensieri a margine. Nessuno finisce con una risposta — non è una svista, è il tema.",
    teHead: "Esperimenti mentali",
    teIntro: "Tre scene per saggiare questi numeri con mano. Ciascuna finisce dove finisce l’immaginazione.",
    entries: {
      democracy: { title: "La democrazia dell’inimmaginabile", body: "Per un uomo, un googol, un googolplex, il livello d, il livello p, la crypto coma, perfino il numero di Graham crollano in un’unica categoria sfocata: « più o meno infinito ». L’intuizione ha un soffitto — un orizzonte cognitivo — e sta assurdamente in basso, da qualche parte intorno a poche migliaia. Oltre, tutti i giganti si somigliano. Le differenze sono immense, reali e per noi invisibili.", question: "Dov’è il tuo orizzonte — l’ultimo numero che riesci davvero a sentire?" },
      "name-instead": { title: "Un nome al posto del numero", body: "Non possiamo tenere la crypto coma, così teniamo il suo nome: ℂ⇈, tre tratti. Il nome è finito; il numero non si può scrivere. Nominare è come addomestichiamo ciò che non possiamo portare. Ma il guinzaglio non è la bestia.", question: "Quando dici « crypto coma », che cosa hai in mente — un numero, o una parola posta là dove il numero non entra?" },
      nameless: { title: "Quasi ogni gigante è senza nome", body: "Le descrizioni brevi sono soltanto finite: le frasi più corte di una data lunghezza non continuano all’infinito. I numeri sì. Perciò quasi ogni numero — compreso quasi ogni numero grande come d — non potrà mai essere nominato, descritto o additato. La crypto coma è un raro gigante con nome in una folla sterminata di anonimi.", question: "Se un numero non può mai essere nominato né raggiunto, in che senso è « lì »?" },
      "physically-transcendent": { title: "Fisicamente trascendente", body: "Un computer che gira fino alla morte termica dell’universo, ribaltando un bit a ogni tempo di Planck, non potrebbe stampare le cifre del livello d — nemmeno il loro numero. Il calcolo ha un limite fisico (Bremermann, Landauer). Perciò alcuni numeri finiti sono reali eppure per sempre irrealizzabili: veri, e mai costruiti, contati o mostrati in alcun luogo di questo cosmo.", question: "Un numero che la realtà non può mai istanziare è un fatto sulla matematica, o su di noi?" },
      enough: { title: "Quanto è « troppo poco »?", body: "I ragazzi arrivarono a un undecilione, e parve « troppo poco ». Poco per che cosa? Nessun compito richiedeva un numero più grande; nulla veniva misurato. La grandezza non aggiungeva altro che grandezza. La fame di salire non è matematica — è umana. Saliamo perché il prossimo piolo è lì.", question: "Verso che cosa tendevano davvero, se non verso una quantità?" },
      "no-top": { title: "Una scala senza cima", body: "z è l’ultima lettera, non l’ultimo numero. Applica ★ ancora una volta e hai superato la crypto coma; ancora una, ed è molto sotto di te. Dà un nome a un soffitto qualsiasi, e hai appena posato il pavimento della stanza successiva. Non esiste un numero più grande — solo il più grande che ti sei preso la briga di nominare.", question: "« Il numero più grande » è una cosa che non esiste, o una direzione che non finisce mai?" },
      "child-frontier": { title: "Il bambino alla frontiera", body: "« Qual è il numero più grande? » suona come una domanda d’asilo. Non lo è. Decidere quanto in fretta i numeri possano crescere — TREE, successioni di Goodstein, il castoro operoso — tocca i limiti di ciò che la matematica può soltanto dimostrare. I ragazzi, senza saperlo, posarono il dito sul bordo della dimostrabilità. La frontiera del numero è custodita dai bambini.", question: "Perché la domanda più semplice conduce dritta alla più difficile?" },
      "ruler-of-infinities": { title: "Un righello fatto di infiniti", body: "Per confrontare due giganti finiti che non si possono scrivere, il matematico sale nel transfinito: ordinali, gerarchie indicizzate dall’infinito — e con quelli misura ciò che è soltanto grande. Il finito ci spinge su nell’infinito per ottenere la propria misura.", question: "Perché dobbiamo prendere l’infinito per pesare il finito?" },
      "discovered-or-invented": { title: "Scoperta o inventata?", body: "La crypto coma aspettava in qualche cielo platonico due ragazzi su una panchina? O balenò all’esistenza nell’istante in cui fu scritta? Gli ultrafinitisti direbbero: i numeri che non possiamo mai raggiungere semplicemente non ci sono. I ragazzi inventarono allegramente un incubo per la filosofia.", question: "Il numero esisteva prima del suo nome?" },
      silence: { title: "Il silenzio tra d e p", body: "Tra d e p giacciono più numeri di tutto il resto di questo articolo messo insieme — senza nome, impensabili, inutilizzati. I numeri con nome sono una polvere sottile su una linea infinita; la scala della crypto coma visita 26 punti e scavalca oceani. Tutto ciò di interessante che diciamo sul numero, lo diciamo di una manciata che svanisce.", question: "Parliamo solo dei numeri che sappiamo nominare. Che cosa ci sfugge?" },
      scribe: { title: "Lo scriba", body: "Uno scriba scrive una cifra a ogni tempo di Planck — nulla nell’universo cambia più in fretta. Dal Big Bang ne avrebbe prodotte circa 10⁶⁰. Il livello b ne ha 10^(3,6×10³⁷). Non ne ha finita una frazione infinitesima; non raggiungerà mai la fine di b — men che meno c. E b è il più piccolo dei nostri giganti.", question: "Se persino il tempo non arriva alla fine di b, che significa dire che b « ha » tante cifre?" },
      babel: { title: "La Biblioteca di Babele", body: "La biblioteca di Borges contiene ogni libro di 410 pagine — immaginabilmente vasta, eppure finita. Accanto a d è ridicolmente piccola. Per collocare le cifre di d servirebbe una biblioteca il cui catalogo non si può scrivere in questo universo. Borges immaginò la più grande biblioteca che un uomo possa sopportare; d ne pretende una che non può sopportare.", question: "Abbiamo costruito un mito di « libri in numero inimmaginabile », e non è bastato. Che cosa dice questo dei nostri miti dell’infinito?" },
      seer: { title: "Colui che potrebbe vederla", body: "Immagina una mente capace di tenere la crypto coma intera — ogni cifra in una volta. Sarebbe per lei un solo numero, come 7 lo è per noi? O « un solo numero » cessa di significare qualcosa a quella scala? Forse vedere davvero un numero è renderlo piccolo.", question: "E comprendere non è che un altro nome per rimpicciolire?" },
    },
  },
  es: {
    intro: "Pensamientos breves al margen. Ninguno termina en una respuesta — no es un descuido, es el tema.",
    teHead: "Experimentos mentales",
    teIntro: "Tres escenas para tantear estos números con la mano. Cada una acaba donde se agota la imaginación.",
    entries: {
      democracy: { title: "La democracia de lo inimaginable", body: "Para un humano, un googol, un googolplex, el nivel d, el nivel p, la crypto coma, e incluso el número de Graham se desploman en una sola categoría borrosa: « más o menos infinito ». La intuición tiene un techo — un horizonte cognitivo — y está absurdamente bajo, en algún punto de los pocos miles. Más allá, todos los gigantes se parecen. Las diferencias son enormes, reales e invisibles para nosotros.", question: "¿Dónde está tu horizonte — el último número que puedes sentir de verdad?" },
      "name-instead": { title: "Un nombre en vez del número", body: "No podemos sostener la crypto coma, así que sostenemos su nombre: ℂ⇈, tres trazos. El nombre es finito; el número no se puede escribir. Nombrar es como domesticamos lo que no podemos cargar. Pero la correa no es la bestia.", question: "Cuando dices « crypto coma », ¿qué hay en tu mente — un número, o una palabra puesta donde el número no cabe?" },
      nameless: { title: "Casi todo gigante no tiene nombre", body: "Solo hay finitas descripciones cortas: las frases más breves que cierta longitud no siguen para siempre. Los números sí. Así que casi todo número — incluido casi todo número del tamaño de d — nunca podrá ser nombrado, descrito ni señalado. La crypto coma es un raro gigante con nombre en una multitud interminable de anónimos.", question: "Si un número nunca puede ser nombrado ni alcanzado, ¿en qué sentido está « ahí »?" },
      "physically-transcendent": { title: "Físicamente trascendente", body: "Una computadora que corriera hasta la muerte térmica del universo, volteando un bit por tiempo de Planck, no podría imprimir las cifras del nivel d — ni siquiera su cantidad. El cálculo tiene un límite físico (Bremermann, Landauer). Así que algunos números finitos son reales y a la vez por siempre irrealizables: verdaderos, y nunca construidos, contados ni mostrados en ningún lugar de este cosmos.", question: "Un número que la realidad nunca puede instanciar, ¿es un hecho sobre las matemáticas, o sobre nosotros?" },
      enough: { title: "¿Cuánto es « poco »?", body: "Los niños llegaron a un undecillón, y pareció « poco ». ¿Poco para qué? Ninguna tarea necesitaba un número mayor; nada se medía. El tamaño no añadía más que tamaño. El hambre de subir no es matemática — es humana. Subimos porque el siguiente peldaño está ahí.", question: "¿Hacia qué tendían en realidad, si no hacia una cantidad?" },
      "no-top": { title: "Una escalera sin cima", body: "z es la última letra, no el último número. Aplica ★ una vez más y has pasado la crypto coma; una vez más, y queda muy por debajo de ti. Ponle nombre a cualquier techo, y acabas de poner el suelo del cuarto siguiente. No hay un número más grande — solo el más grande que te molestaste en nombrar.", question: "¿Es « el número más grande » algo que no existe, o una dirección que nunca termina?" },
      "child-frontier": { title: "El niño en la frontera", body: "« ¿Cuál es el número más grande? » suena a pregunta de guardería. No lo es. Decidir cuán rápido pueden crecer los números — TREE, sucesiones de Goodstein, el castor afanoso — toca los límites de lo que las matemáticas siquiera pueden demostrar. Los niños, sin saberlo, pusieron el dedo en el borde de la demostrabilidad. La frontera del número la guardan los niños.", question: "¿Por qué la pregunta más simple lleva derecho a la más difícil?" },
      "ruler-of-infinities": { title: "Una regla hecha de infinitos", body: "Para comparar dos gigantes finitos que no se pueden escribir, el matemático sube a lo transfinito: ordinales, jerarquías indexadas por el infinito — y con ellos mide lo que es apenas grande. Lo finito nos empuja a lo infinito para obtener su propia medida.", question: "¿Por qué hemos de tomar lo infinito para pesar lo finito?" },
      "discovered-or-invented": { title: "¿Descubierta o inventada?", body: "¿Esperaba la crypto coma en algún cielo platónico a dos niños en un banco? ¿O centelleó a la existencia en el instante en que se escribió? Los ultrafinitistas dirían: los números que nunca podemos alcanzar sencillamente no existen. Los niños inventaron alegremente una pesadilla para la filosofía.", question: "¿Existía el número antes de su nombre?" },
      silence: { title: "El silencio entre d y p", body: "Entre d y p yacen más números que todo lo demás de este artículo junto — sin nombre, impensables, sin uso. Los números con nombre son un polvo fino sobre una línea sin fin; la escalera de la crypto coma visita 26 puntos y salta océanos. Todo lo interesante que decimos del número, lo decimos de un puñado que se desvanece.", question: "Solo hablamos de los números que sabemos nombrar. ¿Qué se nos escapa?" },
      scribe: { title: "El escriba", body: "Un escriba escribe una cifra por tiempo de Planck — nada en el universo cambia más rápido. Desde el Big Bang habría producido unas 10⁶⁰ cifras. El nivel b tiene 10^(3,6×10³⁷). No ha terminado ni una fracción ínfima; nunca llegará al final de b — mucho menos a c. Y b es el más pequeño de nuestros gigantes.", question: "Si ni el tiempo llega al final de b, ¿qué significa decir que b « tiene » esa cantidad de cifras?" },
      babel: { title: "La Biblioteca de Babel", body: "La biblioteca de Borges contiene todo libro de 410 páginas — imaginablemente vasta, y sin embargo finita. Junto a d es ridículamente pequeña. Para colocar las cifras de d haría falta una biblioteca cuyo catálogo no se puede escribir en este universo. Borges imaginó la mayor biblioteca que un humano puede soportar; d exige una que no puede soportar.", question: "Construimos un mito de « libros en número inimaginable », y aun así no bastó. ¿Qué dice eso de nuestros mitos del infinito?" },
      seer: { title: "El que podría verlo", body: "Imagina una mente capaz de sostener la crypto coma entera — cada cifra a la vez. ¿Sería para ella un solo número, como 7 lo es para nosotros? ¿O « un solo número » deja de significar algo a esa escala? Quizá ver de verdad un número es hacerlo pequeño.", question: "¿Y comprender no es más que otra palabra para achicar?" },
    },
  },
  pt: {
    intro: "Pensamentos breves à margem. Nenhum acaba numa resposta — não é um descuido, é o tema.",
    teHead: "Experiências de pensamento",
    teIntro: "Três cenas para apalpar estes números com a mão. Cada uma acaba onde a imaginação se esgota.",
    entries: {
      democracy: { title: "A democracia do inimaginável", body: "Para um humano, um googol, um googolplex, o nível d, o nível p, a crypto coma, e até o número de Graham desabam numa só categoria difusa: « mais ou menos infinito ». A intuição tem um teto — um horizonte cognitivo — e está absurdamente baixo, algalgures nos poucos milhares. Além dele, todos os gigantes se parecem. As diferenças são imensas, reais e para nós invisíveis.", question: "Onde está o seu horizonte — o último número que consegue mesmo sentir?" },
      "name-instead": { title: "Um nome em vez do número", body: "Não podemos segurar a crypto coma, por isso seguramos o seu nome: ℂ⇈, três traços. O nome é finito; o número não se pode escrever. Nomear é como domesticamos o que não podemos carregar. Mas a trela não é o animal.", question: "Quando diz « crypto coma », o que tem na mente — um número, ou uma palavra posta onde o número não cabe?" },
      nameless: { title: "Quase todo o gigante não tem nome", body: "Só há finitas descrições curtas: as frases mais curtas que um dado comprimento não seguem para sempre. Os números seguem. Por isso quase todo o número — incluindo quase todo o número do tamanho de d — nunca poderá ser nomeado, descrito ou apontado. A crypto coma é um raro gigante com nome numa multidão sem fim de anónimos.", question: "Se um número nunca pode ser nomeado nem alcançado, em que sentido está « ali »?" },
      "physically-transcendent": { title: "Fisicamente transcendente", body: "Um computador a correr até à morte térmica do universo, invertendo um bit por tempo de Planck, não poderia imprimir os algarismos do nível d — nem sequer a sua quantidade. O cálculo tem um limite físico (Bremermann, Landauer). Por isso alguns números finitos são reais e contudo para sempre irrealizáveis: verdadeiros, e nunca construídos, contados ou mostrados em lugar algum deste cosmos.", question: "Um número que a realidade nunca pode instanciar é um facto sobre a matemática, ou sobre nós?" },
      enough: { title: "Quanto é « pouco »?", body: "Os meninos chegaram a um undecilião, e pareceu « pouco ». Pouco para quê? Nenhuma tarefa precisava de um número maior; nada era medido. O tamanho não acrescentava senão tamanho. A fome de subir não é matemática — é humana. Subimos porque o degrau seguinte está ali.", question: "Para que estendiam de facto a mão, se não para uma quantidade?" },
      "no-top": { title: "Uma escada sem topo", body: "z é a última letra, não o último número. Aplique ★ mais uma vez e passou a crypto coma; mais uma, e ela fica muito abaixo de si. Dê nome a qualquer teto, e acabou de assentar o chão da sala seguinte. Não há número maior — só o maior que se deu ao trabalho de nomear.", question: "« O maior número » é uma coisa que não existe, ou uma direção que nunca acaba?" },
      "child-frontier": { title: "A criança na fronteira", body: "« Qual é o maior número? » soa a pergunta de infantário. Não é. Decidir quão depressa os números podem crescer — TREE, sucessões de Goodstein, o castor laborioso — toca nos limites do que a matemática sequer consegue provar. Os meninos, sem o saberem, puseram o dedo na beira da demonstrabilidade. A fronteira do número é guardada por crianças.", question: "Porque é que a pergunta mais simples leva a direito à mais difícil?" },
      "ruler-of-infinities": { title: "Uma régua feita de infinitos", body: "Para comparar dois gigantes finitos que não se podem escrever, o matemático sobe ao transfinito: ordinais, hierarquias indexadas pelo infinito — e com eles mede o que é apenas grande. O finito empurra-nos para o infinito para obter a sua própria medida.", question: "Porque temos de tomar o infinito para pesar o finito?" },
      "discovered-or-invented": { title: "Descoberta ou inventada?", body: "Estaria a crypto coma à espera nalgum céu platónico de dois meninos num banco? Ou cintilou à existência no instante em que foi escrita? Os ultrafinitistas diriam: os números que nunca podemos alcançar simplesmente não existem. Os meninos inventaram alegremente um pesadelo para a filosofia.", question: "O número existia antes do seu nome?" },
      silence: { title: "O silêncio entre d e p", body: "Entre d e p jazem mais números do que tudo o resto deste artigo junto — sem nome, impensáveis, sem uso. Os números com nome são um pó fino sobre uma linha sem fim; a escada da crypto coma visita 26 pontos e transpõe oceanos. Tudo o que de interessante dizemos sobre o número, dizemo-lo de um punhado que se desvanece.", question: "Só falamos dos números que sabemos nomear. O que nos escapa?" },
      scribe: { title: "O escriba", body: "Um escriba escreve um algarismo por tempo de Planck — nada no universo muda mais depressa. Desde o Big Bang teria produzido cerca de 10⁶⁰ algarismos. O nível b tem 10^(3,6×10³⁷). Não terminou uma fração ínfima; nunca chegará ao fim de b — quanto mais a c. E b é o menor dos nossos gigantes.", question: "Se nem o tempo chega ao fim de b, que quer dizer que b « tem » tantos algarismos?" },
      babel: { title: "A Biblioteca de Babel", body: "A biblioteca de Borges contém todo o livro de 410 páginas — imaginavelmente vasta, e contudo finita. Ao lado de d é ridiculamente pequena. Para arrumar os algarismos de d seria preciso uma biblioteca cujo catálogo não se pode escrever neste universo. Borges imaginou a maior biblioteca que um humano pode suportar; d exige uma que ele não pode suportar.", question: "Construímos um mito de « livros em número inimaginável », e ainda assim não bastou. O que diz isso dos nossos mitos do infinito?" },
      seer: { title: "Aquele que a poderia ver", body: "Imagine uma mente capaz de segurar a crypto coma inteira — cada algarismo de uma vez. Seria para ela um só número, como 7 é para nós? Ou « um só número » deixa de significar algo a essa escala? Talvez ver de verdade um número seja torná-lo pequeno.", question: "E compreender não será apenas outra palavra para encolher?" },
    },
  },
  hi: {
    intro: "हाशिये पर लिखे छोटे विचार। कोई भी उत्तर पर समाप्त नहीं होता—यह चूक नहीं, यही विषय है।",
    teHead: "विचार-प्रयोग",
    teIntro: "इन संख्याओं को हाथ से टटोलने के लिए तीन दृश्य। हर एक वहीं समाप्त होता है जहाँ कल्पना चुक जाती है।",
    entries: {
      democracy: { title: "अकल्पनीय का लोकतंत्र", body: "मनुष्य के लिए एक गूगोल, एक गूगोलप्लेक्स, स्तर d, स्तर p, crypto coma, यहाँ तक कि ग्राहम की संख्या भी एक ही धुंधली श्रेणी में ढह जाती है: “लगभग अनंत”। अंतर्ज्ञान की एक छत है—एक संज्ञानात्मक क्षितिज—और वह हास्यास्पद रूप से नीचे, कुछ हज़ार के आसपास कहीं टिकी है। उसके पार हर दानव एक जैसा दिखता है। उनके बीच का अंतर विशाल, वास्तविक, और हमारे लिए अदृश्य है।", question: "आपका क्षितिज कहाँ है—वह आख़िरी संख्या जिसे आप सचमुच महसूस कर सकें?" },
      "name-instead": { title: "संख्या के बदले एक नाम", body: "हम crypto coma को थाम नहीं सकते, इसलिए उसका नाम थामते हैं: ℂ⇈, तीन आघात। नाम परिमित है; संख्या लिखी नहीं जा सकती। नाम देना वह तरीक़ा है जिससे हम उसे साधते हैं जिसे ढो नहीं सकते। पर पट्टा जानवर नहीं है।", question: "जब आप “crypto coma” कहते हैं, तब मन में क्या है—एक संख्या, या एक शब्द जो वहाँ खड़ा है जहाँ संख्या समाती नहीं?" },
      nameless: { title: "लगभग हर दानव अनाम है", body: "छोटे वर्णन गिनती में परिमित ही हैं: किसी दी हुई लंबाई से छोटे वाक्य अनंत तक नहीं चलते। पर संख्याएँ चलती हैं। इसलिए लगभग हर संख्या—d जितनी बड़ी लगभग हर संख्या सहित—कभी नामित, वर्णित या इंगित नहीं की जा सकती। crypto coma अनाम की अनंत भीड़ में एक दुर्लभ ‘नाम वाला दानव’ है।", question: "यदि किसी संख्या को न कभी नाम दिया जा सके, न पाया जा सके, तो वह किस अर्थ में ‘वहाँ’ है?" },
      "physically-transcendent": { title: "भौतिक रूप से अतिक्रामी", body: "एक कंप्यूटर जो ब्रह्मांड की ऊष्मीय मृत्यु तक चले और हर प्लांक-काल में एक बिट पलटे, वह भी स्तर d के अंक नहीं छाप सकता—उसके अंकों की संख्या तक नहीं। गणना की एक भौतिक सीमा है (ब्रेमरमैन, लांडाउर)। इसलिए कुछ परिमित संख्याएँ वास्तविक हैं फिर भी सदा अ-साकार: सच्ची, पर इस विश्व में कहीं न बनी, न गिनी, न दिखाई गई।", question: "जिस संख्या को वास्तविकता कभी साकार न कर सके, वह गणित के बारे में तथ्य है या हमारे बारे में?" },
      enough: { title: "‘कम’ कितना होता है?", body: "लड़के एक अनडेसिलियन तक पहुँचे, और वह ‘कम’ लगा। किसके लिए कम? किसी काम को बड़ी संख्या की ज़रूरत न थी; कुछ मापा नहीं जा रहा था। आकार ने आकार के सिवा कुछ न जोड़ा। ऊपर जाने की भूख गणितीय नहीं—मानवीय है। हम चढ़ते हैं क्योंकि अगली सीढ़ी वहाँ है।", question: "यदि किसी मात्रा के लिए नहीं, तो वे सचमुच किसकी ओर हाथ बढ़ा रहे थे?" },
      "no-top": { title: "बिना शिखर की सीढ़ी", body: "z आख़िरी अक्षर है, आख़िरी संख्या नहीं। ★ एक बार और लगाइए, और आप crypto coma को पार कर गए; एक बार और, और वह आपसे बहुत नीचे रह जाती है। किसी भी छत को नाम दीजिए, और आपने अभी अगले कमरे का फ़र्श बिछा दिया। कोई सबसे बड़ी संख्या नहीं—केवल वह सबसे बड़ी जिसे आपने नाम देने की तकलीफ़ उठाई।", question: "‘सबसे बड़ी संख्या’ कोई ऐसी चीज़ है जो नहीं है, या एक दिशा जो कभी समाप्त नहीं होती?" },
      "child-frontier": { title: "सीमा पर खड़ा बच्चा", body: "“सबसे बड़ी संख्या क्या है?” किसी बालवाड़ी के सवाल जैसा लगता है। है नहीं। यह तय करना कि संख्याएँ कितनी तेज़ बढ़ सकती हैं—TREE, गुडस्टाइन अनुक्रम, व्यस्त ऊदबिलाव—इस बात की सीमाओं को छूता है कि गणित आख़िर सिद्ध क्या कर सकता है। लड़कों ने, अनजाने, सिद्ध्यता के किनारे पर उँगली रखी। संख्या की सरहद बच्चों के हवाले है।", question: "सबसे सरल सवाल सीधे सबसे कठिन तक क्यों ले जाता है?" },
      "ruler-of-infinities": { title: "अनंतों से बनी रूलर", body: "दो परिमित दानवों की तुलना के लिए, जिन्हें लिखा नहीं जा सकता, गणितज्ञ अतिपरिमित में चढ़ता है: क्रमसूचक, अनंत से अनुक्रमित पदानुक्रम—और उन्हीं से महज़ ‘बड़े’ को मापता है। परिमित हमें अपने ही माप के लिए अनंत में ऊपर धकेलता है।", question: "परिमित को तौलने के लिए हमें अनंत क्यों उठाना पड़ता है?" },
      "discovered-or-invented": { title: "खोजी गई या गढ़ी गई?", body: "क्या crypto coma किसी प्लेटोनी स्वर्ग में बेंच पर बैठे दो लड़कों की प्रतीक्षा कर रही थी? या जिस क्षण लिखी गई उसी क्षण अस्तित्व में कौंध उठी? अतिपरिमितवादी कहेंगे: जिन संख्याओं तक हम कभी नहीं पहुँच सकते, वे बस हैं ही नहीं। लड़कों ने प्रसन्न मन से दर्शन के लिए एक दुःस्वप्न गढ़ दिया।", question: "क्या वह संख्या अपने नाम से पहले अस्तित्व में थी?" },
      silence: { title: "d और p के बीच का सन्नाटा", body: "d और p के बीच इस पूरे लेख के बाक़ी सब से भी अधिक संख्याएँ पड़ी हैं—अनाम, अचिंत्य, अप्रयुक्त। नाम वाली संख्याएँ एक अनंत रेखा पर पतली धूल हैं; crypto coma की सीढ़ी 26 बिंदुओं पर रुकती है और महासागरों को लाँघ जाती है। संख्या के बारे में हम जो कुछ भी रोचक कहते हैं, वह एक ओझल होती मुट्ठी-भर के बारे में कहते हैं।", question: "हम केवल उन्हीं संख्याओं की बात करते हैं जिन्हें नाम दे सकते हैं। हम क्या चूक रहे हैं?" },
      scribe: { title: "लिपिक", body: "एक लिपिक हर प्लांक-काल में एक अंक लिखता है—ब्रह्मांड में इससे तेज़ कुछ नहीं बदलता। महाविस्फोट के बाद से उसने लगभग 10⁶⁰ अंक लिखे होते। स्तर b में वे 10^(3.6×10³⁷) हैं। उसने नगण्य-सा अंश तक पूरा नहीं किया; वह b के अंत तक कभी नहीं पहुँचेगा—c की तो बात ही छोड़िए। और b हमारे दानवों में सबसे छोटा है।", question: "यदि समय भी b के अंत तक न पहुँचे, तो यह कहना कि b के पास ‘इतने’ अंक हैं—इसका क्या अर्थ?" },
      babel: { title: "बाबेल का पुस्तकालय", body: "बोर्खेस का पुस्तकालय 410 पन्नों की हर किताब रखता है—कल्पनीय रूप से विशाल, फिर भी परिमित। d के बग़ल में वह हास्यास्पद रूप से छोटा है। d के अंकों को अलमारियों में रखने के लिए ऐसा पुस्तकालय चाहिए जिसकी सूची तक इस ब्रह्मांड में नहीं लिखी जा सकती। बोर्खेस ने वह सबसे बड़ा पुस्तकालय कल्पित किया जिसे मनुष्य सह सके; d उसकी माँग करती है जिसे वह सह नहीं सकता।", question: "हमने ‘अकल्पनीय रूप से अनगिनत किताबों’ का मिथक रचा, फिर भी वह कम पड़ा। यह अनंत के हमारे मिथकों के बारे में क्या कहता है?" },
      seer: { title: "जो इसे देख सकता", body: "ऐसे मन की कल्पना कीजिए जो crypto coma को समूचा थाम सके—हर अंक एक साथ। उसके लिए क्या crypto coma एक अकेली संख्या होगी, जैसे हमारे लिए 7? या उस पैमाने पर ‘एक अकेली संख्या’ का कोई अर्थ ही नहीं रह जाता? शायद किसी संख्या को सचमुच देखना उसे छोटा कर देना है।", question: "और समझना—क्या यह ‘छोटा करना’ का ही दूसरा नाम नहीं?" },
    },
  },
  ar: {
    intro: "خواطر قصيرة على الهامش. لا ينتهي أيٌّ منها بجواب — وليس ذلك سهوًا، بل هو الموضوع نفسه.",
    teHead: "تجارب فكرية",
    teIntro: "ثلاثة مشاهد لتلمّس هذه الأعداد باليد. ينتهي كلٌّ منها حيث ينفد الخيال.",
    entries: {
      democracy: { title: "ديمقراطية ما لا يُتصوَّر", body: "بالنسبة إلى الإنسان، ينهار الغوغل، والغوغلبلكس، والمستوى d، والمستوى p، والكريبتو كوما، بل حتى عدد غراهام، في فئةٍ واحدةٍ ضبابية: «لا نهاية تقريبًا». للحدس سقفٌ — أفقٌ إدراكي — وهو منخفضٌ إلى حدٍّ مضحك، عند بضعة آلاف في مكانٍ ما. وراءه يبدو كلّ العمالقة متشابهين. والفروق بينهم هائلةٌ وحقيقيةٌ وغير مرئيةٍ لنا.", question: "أين أفقك — آخر عددٍ يمكنك أن تحسّه حقًّا؟" },
      "name-instead": { title: "اسمٌ بدل العدد", body: "لا نستطيع الإمساك بالكريبتو كوما، فنمسك اسمها: ℂ⇈، ثلاث خطوط. الاسم منتهٍ؛ والعدد لا يُكتب. التسمية هي كيف نروّض ما لا نقدر على حمله. لكنّ المقود ليس الوحش.", question: "حين تقول «كريبتو كوما»، ماذا في ذهنك — عددٌ، أم كلمةٌ تقف حيث لا يتّسع المكان للعدد؟" },
      nameless: { title: "جُلّ العمالقة بلا اسم", body: "الأوصاف القصيرة متناهية العدد: الجمل الأقصر من طولٍ معيّن لا تمتدّ إلى ما لا نهاية. أمّا الأعداد فتمتدّ. لذا فإنّ جُلّ الأعداد — بما فيها جُلّ الأعداد بحجم d — لا يمكن أن تُسمّى أو تُوصف أو يُشار إليها أبدًا. الكريبتو كوما عملاقٌ نادرٌ ذو اسمٍ في حشدٍ لا ينتهي من المجهولين.", question: "إن كان العدد لا يُسمّى ولا يُبلَغ أبدًا، فبأيّ معنًى يكون «هناك»؟" },
      "physically-transcendent": { title: "متسامٍ فيزيائيًّا", body: "حاسوبٌ يعمل حتى الموت الحراري للكون، يقلب بِتًّا واحدًا كلّ زمن بلانك، لن يقدر على طباعة أرقام المستوى d — ولا حتى عددها. للحساب حدٌّ فيزيائي (بريمرمان، لانداور). لذا فبعض الأعداد المنتهية حقيقيةٌ ومع ذلك غير قابلةٍ للتحقّق أبدًا: صادقةٌ، ولن تُبنى أو تُعَدّ أو تُعرَض في أيّ مكانٍ من هذا الكون.", question: "العدد الذي لا يستطيع الواقع أن يجسّده أبدًا: هل هو حقيقةٌ عن الرياضيات أم عنّا؟" },
      enough: { title: "كم هو «قليل»؟", body: "بلغ الصبيّان الأنديسيليون، فبدا «قليلًا». قليلًا لأجل ماذا؟ لم تكن ثمّة مهمّةٌ تحتاج إلى عددٍ أكبر؛ لم يكن يُقاس شيء. لم يُضِف الحجم شيئًا سوى الحجم. الجوع إلى الصعود ليس رياضيًّا — بل إنسانيّ. نصعد لأنّ الدرجة التالية هناك.", question: "إلى ماذا كانا يمدّان اليد حقًّا، إن لم يكن إلى كمّية؟" },
      "no-top": { title: "سُلّمٌ بلا قمّة", body: "z هو الحرف الأخير، لا العدد الأخير. طبّق ★ مرّةً أخرى فتكون قد تجاوزت الكريبتو كوما؛ ومرّةً أخرى فتغدو بعيدةً تحتك. سمِّ أيّ سقفٍ شئت، فإنّك للتوّ رصفت أرضية الغرفة التالية. لا يوجد عددٌ أكبر — بل فقط الأكبر الذي كلّفت نفسك عناء تسميته.", question: "«أكبر عدد»: أهو شيءٌ لا وجود له، أم اتّجاهٌ لا ينتهي؟" },
      "child-frontier": { title: "الطفل عند التخوم", body: "«ما أكبر عدد؟» يبدو سؤال روضة. ليس كذلك. تحديدُ مدى سرعة نموّ الأعداد — TREE، ومتتاليات غودشتاين، والقندس الدؤوب — يلامس حدود ما تستطيع الرياضيات إثباته أصلًا. وضع الصبيّان، دون أن يدريا، إصبعهما على حافّة القابلية للبرهان. تخوم العدد يحرسها الأطفال.", question: "لماذا يقود أبسط سؤالٍ مباشرةً إلى أصعبه؟" },
      "ruler-of-infinities": { title: "مسطرةٌ من لا نهايات", body: "لمقارنة عملاقين منتهيين لا يمكن كتابتهما، يصعد الرياضيّ إلى ما وراء المنتهي: الأعداد الترتيبية، والتراتبياتُ المفهرسة باللانهاية — ويقيس بها ما هو «كبير» فحسب. المنتهي يدفعنا صعودًا إلى اللانهاية لننال مقياسه الخاصّ.", question: "لماذا علينا أن نأخذ اللانهائي لنزن المنتهي؟" },
      "discovered-or-invented": { title: "اكتشافٌ أم اختراع؟", body: "أكانت الكريبتو كوما تنتظر في سماءٍ أفلاطونية صبيّين على مقعد؟ أم ومضت إلى الوجود لحظة كُتبت؟ يقول أنصار اللانهاية الصارمة: الأعداد التي لا نبلغها أبدًا ببساطة غير موجودة. اخترع الصبيّان، بمرح، كابوسًا للفلسفة.", question: "هل كان العدد موجودًا قبل اسمه؟" },
      silence: { title: "الصمت بين d و p", body: "بين d و p تكمن أعدادٌ أكثر من كلّ ما تبقّى في هذا المقال مجتمعًا — بلا اسم، لا تُتصوَّر، لا تُستعمل. الأعداد المسمّاة غبارٌ رقيقٌ على خطٍّ لا ينتهي؛ سُلّم الكريبتو كوما يزور 26 نقطة ويتخطّى محيطات. كلّ ما نقوله من طريفٍ عن العدد نقوله عن حفنةٍ آيلةٍ إلى التلاشي.", question: "لا نتحدّث إلّا عن الأعداد التي نقدر على تسميتها. فما الذي يفوتنا؟" },
      scribe: { title: "النَّاسخ", body: "ناسخٌ يكتب رقمًا واحدًا كلّ زمن بلانك — لا شيء في الكون يتغيّر أسرع. منذ الانفجار العظيم يكون قد كتب نحو 10⁶⁰ رقم. وفي المستوى b منها 10^(3.6×10³⁷). لم يُنهِ جزءًا ضئيلًا يكاد يتلاشى؛ ولن يبلغ نهاية b أبدًا — فما بالك بـ c. و b أصغر عمالقتنا.", question: "إن كان الزمن نفسه لا يبلغ نهاية b، فماذا يعني القول إنّ لـ b «هذا العدد» من الأرقام؟" },
      babel: { title: "مكتبة بابل", body: "مكتبة بورخيس تضمّ كلّ كتابٍ من 410 صفحات — شاسعةٌ على نحوٍ يُتصوَّر، ومع ذلك منتهية. بجوار d تبدو صغيرةً إلى حدّ الضحك. لِرَصّ أرقام d على الرفوف تلزم مكتبةٌ لا يمكن كتابة فهرسها في هذا الكون. تخيّل بورخيس أكبر مكتبةٍ يحتملها إنسان؛ و d تطلب واحدةً لا يحتملها.", question: "بنينا أسطورةً عن «كتبٍ لا تُحصى تصوُّرًا»، ومع ذلك قصُرت. فماذا يقول ذلك عن أساطيرنا حول اللانهاية؟" },
      seer: { title: "من قد يراها", body: "تخيّل عقلًا يقدر على الإمساك بالكريبتو كوما كاملةً — كلّ رقمٍ دفعةً واحدة. أتكون له عددًا واحدًا، كما هو 7 لنا؟ أم يكفّ «عددٌ واحد» عن أن يعني شيئًا عند ذلك المقياس؟ لعلّ أن ترى العدد حقًّا هو أن تجعله صغيرًا.", question: "وهل الفهم إلّا اسمٌ آخر للتصغير؟" },
    },
  },
  he: {
    intro: "מחשבות קצרות בשוליים. אף אחת אינה מסתיימת בתשובה — זו אינה שגגה, זה הנושא.",
    teHead: "ניסויי מחשבה",
    teIntro: "שלוש סצנות כדי למשש את המספרים האלה ביד. כל אחת נגמרת היכן שהדמיון אוזל.",
    entries: {
      democracy: { title: "הדמוקרטיה של הבלתי-נתפס", body: "עבור אדם, גוגול, גוגולפלקס, הרמה d, הרמה p, הקריפטו קומה, ואפילו מספרו של גרהם — כולם קורסים לקטגוריה מטושטשת אחת: « בערך אינסוף ». לאינטואיציה יש תקרה — אופק קוגניטיבי — והוא נמוך עד גיחוך, אי-שם סביב כמה אלפים. מעברו כל הענקים נראים זהים. ההבדלים ביניהם עצומים, ממשיים, ובלתי-נראים לנו.", question: "היכן האופק שלך — המספר האחרון שאתה יכול באמת לחוש?" },
      "name-instead": { title: "שם במקום המספר", body: "איננו יכולים להחזיק את הקריפטו קומה, ולכן אנו מחזיקים את שמה: ℂ⇈, שלושה קווים. השם סופי; המספר אינו ניתן לכתיבה. מתן שם הוא הדרך שבה אנו מאלפים את מה שאיננו יכולים לשאת. אך הרצועה אינה החיה.", question: "כשאתה אומר « קריפטו קומה », מה בראשך — מספר, או מילה הניצבת במקום שבו המספר אינו נכנס?" },
      nameless: { title: "כמעט כל ענק חסר שם", body: "התיאורים הקצרים סופיים במספרם: משפטים קצרים מאורך נתון אינם נמשכים לאינסוף. אך המספרים כן. לכן כמעט כל מספר — כולל כמעט כל מספר בגודל d — לעולם לא ניתן יהיה לתת לו שם, לתאר אותו, או להצביע עליו. הקריפטו קומה היא ענק נדיר בעל שם בהמון אינסופי של אלמונים.", question: "אם מספר לעולם לא ניתן לשיום או להשגה, באיזה מובן הוא « שם »?" },
      "physically-transcendent": { title: "טרנסצנדנטי פיזיקלית", body: "מחשב שיפעל עד המוות התרמי של היקום, ויהפוך סיבית אחת בכל זמן פלאנק, לא יוכל להדפיס את ספרותיה של הרמה d — אף לא את מספר ספרותיה. לחישוב יש גבול פיזיקלי (ברמרמן, לנדאואר). לכן מספרים סופיים מסוימים ממשיים ובכל זאת לעד בלתי-ניתנים למימוש: אמיתיים, ולעולם לא ייבנו, ייספרו או יוצגו בשום מקום ביקום הזה.", question: "מספר שהמציאות לעולם לא תוכל לממש — האם הוא עובדה על המתמטיקה, או עלינו?" },
      enough: { title: "כמה זה « לא מספיק »?", body: "הנערים הגיעו לאונדֶצילְיוֹן, וזה הרגיש « לא מספיק ». לא מספיק למה? שום משימה לא נזקקה למספר גדול יותר; דבר לא נמדד. הגודל לא הוסיף דבר מלבד גודל. הרעב לעלות אינו מתמטי — הוא אנושי. אנו מטפסים מפני שהשלב הבא נמצא שם.", question: "אל מה הם באמת נשלחו, אם לא אל כמות?" },
      "no-top": { title: "סולם ללא פסגה", body: "z היא האות האחרונה, לא המספר האחרון. הפעל ★ עוד פעם ועברת את הקריפטו קומה; עוד פעם, והיא הרחק מתחתיך. תן שם לכל תקרה, ובדיוק הנחת את רצפת החדר הבא. אין מספר גדול ביותר — רק הגדול ביותר שטרחת לתת לו שם.", question: "האם « המספר הגדול ביותר » הוא דבר שאינו קיים, או כיוון שלעולם אינו נגמר?" },
      "child-frontier": { title: "הילד על הגבול", body: "« מהו המספר הגדול ביותר? » נשמע כשאלת גן. אין זה כך. להכריע כמה מהר מספרים יכולים לגדול — TREE, סדרות גודשטיין, הבונה החרוץ — נוגע בגבולות של מה שהמתמטיקה בכלל יכולה להוכיח. הנערים, בלי לדעת, הניחו אצבע על שפת ההוכיחוּת. גבול המספר נשמר בידי ילדים.", question: "מדוע השאלה הפשוטה ביותר מובילה היישר לקשה ביותר?" },
      "ruler-of-infinities": { title: "סרגל עשוי אינסופים", body: "כדי להשוות שני ענקים סופיים שאי-אפשר לכתוב, המתמטיקאי מטפס אל העל-סופי: סודרים, היררכיות הממופתחות באינסוף — ובהם מודד את מה שהוא רק גדול. הסופי דוחף אותנו אל האינסופי כדי לקבל את מידתו שלו.", question: "מדוע עלינו לקחת את האינסופי כדי לשקול את הסופי?" },
      "discovered-or-invented": { title: "התגלתה או הומצאה?", body: "האם הקריפטו קומה חיכתה באיזה רקיע אפלטוני לשני נערים על ספסל? או הבזיקה אל הקיום ברגע שנכתבה? האולטרה-פיניטיסטים יאמרו: מספרים שלעולם לא נשיג פשוט אינם. הנערים, בעליזות, המציאו סיוט עבור הפילוסופיה.", question: "האם המספר היה קיים לפני שמו?" },
      silence: { title: "הדממה שבין d ל-p", body: "בין d ל-p מונחים יותר מספרים מכל שאר המאמר הזה יחד — חסרי שם, בלתי-נתפסים, בלתי-בשימוש. המספרים בעלי השם הם אבק דק על קו אינסופי; סולם הקריפטו קומה מבקר ב-26 נקודות ופוסח על אוקיינוסים. כל דבר מעניין שאנו אומרים על מספר, אנו אומרים על קומץ שנמוג.", question: "אנו מדברים רק על המספרים שאנו יכולים לשיים. מה אנו מפספסים?" },
      scribe: { title: "הלבלר", body: "לבלר כותב ספרה אחת בכל זמן פלאנק — דבר ביקום אינו משתנה מהר יותר. מאז המפץ הגדול הוא היה כותב כ-10⁶⁰ ספרות. לרמה b יש מהן 10^(3.6×10³⁷). הוא לא סיים אפילו חלקיק זעום; לעולם לא יגיע לסוף b — קל וחומר c. ו-b היא הקטן שבענקינו.", question: "אם אפילו הזמן אינו מגיע לסוף b, מה פירוש לומר של-b « יש » כל-כך הרבה ספרות?" },
      babel: { title: "ספריית בבל", body: "ספרייתו של בורחס מכילה כל ספר בן 410 עמודים — עצומה כפי שניתן לדמיין, ובכל זאת סופית. לצד d היא קטנה עד גיחוך. כדי לסדר על המדף את ספרותיה של d דרושה ספרייה שאפילו את הקטלוג שלה אי-אפשר לכתוב ביקום הזה. בורחס דמיין את הספרייה הגדולה ביותר שאדם יכול לשאת; d תובעת אחת שאי-אפשר לשאת.", question: "בנינו מיתוס של « ספרים רבים לאין-שיעור », ובכל זאת הוא לא הספיק. מה זה אומר על המיתוסים שלנו על האינסוף?" },
      seer: { title: "מי שיכול היה לראותה", body: "דמיינו תודעה שיכולה להחזיק את הקריפטו קומה כולה — כל ספרה בבת אחת. האם עבורה תהיה הקריפטו קומה מספר יחיד, כפי ש-7 עבורנו? או ש« מספר יחיד » חדל מלהיות בעל משמעות בקנה-מידה כזה? אולי לראות מספר באמת פירושו להקטין אותו.", question: "והאם הבנה אינה אלא מילה נרדפת להקטנה?" },
    },
  },
  ka: {
    intro: "მოკლე ფიქრები ველებზე. არცერთი არ მთავრდება პასუხით — და ეს არ არის ხარვეზი, არამედ თემა.",
    teHead: "აზრობრივი ექსპერიმენტები",
    teIntro: "სამი სცენა ამ რიცხვების „ხელით გასინჯვისთვის“. თითოეული მთავრდება იქ, სადაც წარმოსახვა იწურება.",
    entries: {
      democracy: {
        title: "წარმოუდგენელის დემოკრატია",
        body: "ადამიანის თვალსაზრისით გუგოლი, გუგოლპლექსი, დონე d, დონე p, crypto coma და თუნდაც გრემის რიცხვი ერთ ბუნდოვან კატეგორიაში ერწყმის: „დაახლოებით უსასრულობა“. ინტუიციას ჭერი აქვს — შემეცნებითი ჰორიზონტი, — და ის აბსურდულად დაბლა დევს, სადღაც რამდენიმე ათასის მიდამოებში. მის მიღმა ყველა გიგანტი ერთნაირია. სხვაობა მათ შორის უზარმაზარია, რეალურია და ჩვენთვის უხილავი.",
        question: "სად გადის თქვენი ჰორიზონტი — უკანასკნელი რიცხვი, რომელსაც ნამდვილად გრძნობთ?",
      },
      "name-instead": {
        title: "სახელი რიცხვის ნაცვლად",
        body: "crypto coma-ს ვერ დაიჭერ — ამიტომ მის სახელს ვიჭერთ: ℂ⇈, სამი შტრიხი. სახელი სასრულია, რიცხვი ვერ იწერება. დარქმევა — გზაა, რომ მოვითვინიეროთ ის, რის გატანასაც ვერ ვახერხებთ. მაგრამ ბაგირი არ არის მხეცი.",
        question: "როცა ამბობთ „crypto coma“ — რა გაქვთ თავში: რიცხვი თუ სიტყვა, რომელიც იქ დგას, სადაც რიცხვი არ ეტევა?",
      },
      nameless: {
        title: "თითქმის ყველა გიგანტი უსახელოა",
        body: "მოკლე აღწერები სასრული რაოდენობისაა: მოცემულ სიგრძეზე მოკლე ფრაზები უბრალოდ უსასრულოდ ბევრი არ არის. ხოლო რიცხვები — უსასრულოა. ესეიგი, თითქმის ყოველი რიცხვი — მათ შორის d ზომის თითქმის ყოველი რიცხვი — არც დასახელებადია, არც აღსაწერი, არც გამოსაყოფი. crypto coma — იშვიათი დასახელებული გიგანტია ანონიმთა უსასრულო ბრბოში.",
        question: "თუ რიცხვის არც დასახელება და არც მიღწევა შეიძლება — რა აზრით „არსებობს“ ის?",
      },
      "physically-transcendent": {
        title: "ფიზიკურად ტრანსცენდენტული",
        body: "კომპიუტერი, რომელიც სამყაროს თერმულ სიკვდილამდე მუშაობს და ყოველ პლანკის მომენტში ერთ ბიტს ცვლის, ვერ დაბეჭდავდა d დონის ციფრებს — მისი ციფრების რაოდენობასაც კი ვერა. გამოთვლას ფიზიკური ზღვარი აქვს (Bremermann, Landauer). ესეიგი, ზოგი სასრული რიცხვი რეალურია, მაგრამ სამუდამოდ განუხორციელებელი: ჭეშმარიტი — და არც აშენდება, არც დაითვლება და არც გამოჩნდება ამ კოსმოსში არსად.",
        question: "რიცხვი, რომლის განხორციელებაც რეალობას არ შეუძლია, — ფაქტია მათემატიკაზე თუ ჩვენზე?",
      },
      enough: {
        title: "რამდენია „ცოტა“?",
        body: "ბიჭები უნდეცილიონამდე მივიდნენ, და მათ „ცოტა“ აღმოჩნდა. რისთვის ცოტა? არცერთი ამოცანა არ საჭიროებდა უფრო დიდ რიცხვს; არაფერი არ იზომებოდა. ზომა არაფრეს ამატებდა, გარდა ზომისა. უფრო მაღლა ასვლის შიმშილი მათემატიკური კი არა — ადამიანურია. ჩვენ ავდივართ, რადგან შემდეგი საფეხური არსებობს.",
        question: "რისკენ იწვდებოდნენ ისინი სინამდვილეში, თუ არა სიდიდისკენ?",
      },
      "no-top": {
        title: "კიბე მწვერვალის გარეშე",
        body: "z — უკანასკნელი ასოა, და არა უკანასკნელი რიცხვი. გამოიყენეთ ★ კიდევ ერთხელ — და თქვენ გაიარეთ crypto coma; კიდევ ერთხელ — და ის შორს დარჩა თქვენს ქვემოთ. დაარქვით ნებისმიერ ჭერს სახელი — და თქვენ ახლახანს ააგეთ შემდეგი ოთახის იატაკი. უდიდესი რიცხვი არ არსებობს — არსებობს მხოლოდ ყველაზე დიდი, რომელსაც სახელი შეარქვით.",
        question: "„უდიდესი რიცხვი“ — ეს არარსებული რამეა, თუ მიმართულება, რომელსაც დასასრული არ აქვს?",
      },
      "child-frontier": {
        title: "ბავშვი საზღვარზე",
        body: "„რომელი რიცხვია ყველაზე დიდი?“ ბავშვურ კითხვად ჟღერს. ეს ასე არ არის. იმის გადაწყვეტა, თუ რამდენად სწრაფად შეუძლია რიცხვებს ზრდა — TREE, გუდშტაინის მიმდევრობები, „შრომისმოყვარე თახვი“, — იმ საზღვრებს ეხება, რისი დამტკიცება მათემატიკას საერთოდ შეუძლია. ბიჭებმა, თავად რომ არ იცოდნენ, დამტკიცებადობის კიდეზე დაიდეს თითი. რიცხვის საზღვარს ბავშვები იცავენ.",
        question: "რატომ მიჰყავს უმარტივესი კითხვა პირდაპირ ურთულესთან?",
      },
      "ruler-of-infinities": {
        title: "უსასრულობებისგან დამზადებული სახაზავი",
        body: "ორი სასრული გიგანტის შესადარებლად, რომელთა ჩაწერაც შეუძლებელია, მათემატიკოსი ტრანსფინიტურში ადის: ორდინალები, უსასრულობით მონიშნული იერარქიები, — და ამით უბრალოდ დიდს ზომავს. სასრული გვაიძულებს უსასრულოში ავიდეთ, რათა საკუთარი საზომი მივიღოთ.",
        question: "რატომ გვიწევს, რომ სასრულის ასაწონად უსასრულო ავიღოთ ხელში?",
      },
      "discovered-or-invented": {
        title: "აღმოაჩინეს თუ მოიგონეს?",
        body: "ელოდებოდა თუ არა crypto coma პლატონურ სამყაროში ორ ბიჭს სკამზე? თუ ის ყოფიერებაში იმ მომენტში გაბრწყინდა, როცა ჩაწერეს? ულტრაფინიტისტები იტყოდნენ: რიცხვები, რომლებამდეც ვერ მივაღწევთ, უბრალოდ არ არსებობენ. ბიჭებმა მხიარულად მოიგონეს კოშმარი ფილოსოფიისთვის.",
        question: "არსებობდა რიცხვი თავის სახელამდე?",
      },
      silence: {
        title: "დუმილი d-სა და p-ს შორის",
        body: "d-სა და p-ს შორის უფრო მეტი რიცხვია, ვიდრე ყველაფერი დანარჩენი ამ სტატიაში ერთად — უსახელო, წარმოუდგენელი, გამოუყენებელი. დასახელებული რიცხვები — თხელი მტვერია უსასრულო წრფეზე; crypto coma-ს კიბე 26 წერტილს სტუმრობს და ოკეანეებს გადააბიჯებს. ყველაფერი საინტერესო, რასაც ჩვენ რიცხვებზე ვამბობთ, თქმულია უმნიშვნელო მუჭაზე.",
        question: "ჩვენ მხოლოდ იმ რიცხვებზე ვლაპარაკობთ, რომლებსაც სახელი შეგვიძლია შევარქვათ. რას ვერ ვამჩნევთ?",
      },
      scribe: {
        title: "გადამწერი",
        body: "გადამწერი ყოველ პლანკის მომენტში ერთ ციფრს წერს — ამაზე სწრაფად სამყაროში არაფერი იცვლება. დიდი აფეთქებიდან მას დაახლოებით 10⁶⁰ ციფრი ექნებოდა დაწერილი. b დონეზე კი 10^(3.6×10³⁷) ციფრია. მას არც უმნიშვნელო წილიც არ დაუსრულებია; b-ს ბოლომდე ვერასდროს მივა — c-ზე რომ არაფერი ვთქვათ. ხოლო b — ჩვენი გიგანტებიდან ყველაზე პატარაა.",
        question: "თუ თვით დროც კი ვერ აღწევს b-ს ბოლომდე, რას ნიშნავს იმის თქმა, რომ b-ს „ამდენი“ ციფრი აქვს?",
      },
      babel: {
        title: "ბაბილონის ბიბლიოთეკა",
        body: "Borges-ის ბიბლიოთეკა ინახავს ყველა 410-გვერდიან წიგნს — წარმოსადგენად უზარმაზარი, მაგრამ მაინც სასრული. d-ს გვერდით ის სასაცილოდ პატარაა. d-ს ციფრების თაროებზე დასალაგებლად საჭიროა ბიბლიოთეკა, რომლის კატალოგის ჩაწერაც ამ სამყაროში შეუძლებელია. Borges-მა მოიფიქრა ყველაზე დიდი ბიბლიოთეკა, რომელსაც ადამიანი იტევს; d მოითხოვს იმას, რასაც ვერ აიტანს.",
        question: "ჩვენ ავაგეთ მითი „წარმოუდგენლად ბევრ წიგნზე“ — და ის მაინც არ დაჰყოფნა. რას ამბობს ეს ჩვენს მითებზე უსასრულოს შესახებ?",
      },
      seer: {
        title: "ის, ვინც შეძლებდა მის დანახვას",
        body: "წარმოიდგინეთ გონება, რომელსაც შეუძლია crypto coma მთლიანად დაიტიოს — ყველა ციფრი ერთად. იქნებოდა მისთვის crypto coma ერთი რიცხვი, როგორც ჩვენთვის შვიდი? თუ „ერთი რიცხვი“ ასეთ მასშტაბში აზრს კარგავს? იქნებ რიცხვის ნამდვილად დანახვა — მისი დაპატარავებაა.",
        question: "და გაგება ხომ არ არის „შემცირების“ სხვა სიტყვა?",
      },
    },
  },
  hy: {
    intro: "Կարճ խոհեր՝ լուսանցքում։ Ոչ մեկը չի ավարտվում պատասխանով. դա բացթողում չէ, այլ բուն թեման։",
    teHead: "Մտքի փորձեր",
    teIntro: "Երեք տեսարան՝ այդ թվերը «ձեռքով» շոշափելու համար։ Յուրաքանչյուրը վերջանում է այնտեղ, որտեղ վերջանում է երևակայությունը։",
    entries: {
      democracy: {
        title: "Անպատկերացնելիների ժողովրդավարությունը",
        body: "Մարդու տեսանկյունից գուգոլը, գուգոլպլեքսը, d մակարդակը, p մակարդակը, crypto coma-ն ու նույնիսկ Գրեմի թիվը միաձուլվում են մեկ մշուշոտ կատեգորիայի՝ «մոտավորապես անվերջություն»։ Ինտուիցիան առաստաղ ունի՝ ճանաչողական հորիզոն, — և այն ծիծաղելիորեն ցածր է՝ մի քանի հազարի շրջակայքում։ Նրանից այն կողմ բոլոր հսկաները նույն դեմքն ունեն։ Նրանց միջև եղած տարբերությունը հսկայական է, իրական ու մեզ համար անտեսանելի։",
        question: "Որտե՞ղ է ձեր հորիզոնը՝ վերջին թիվը, որը դուք իսկապես կարողանում եք զգալ։",
      },
      "name-instead": {
        title: "Անուն՝ թվի փոխարեն",
        body: "Crypto coma-ն հնարավոր չէ պահել, ուստի պահում ենք նրա անունը՝ ℂ⇈, երեք գծիկ։ Անունը վերջավոր է. թիվը գրել հնարավոր չէ։ Անվանելը՝ այն ընտելացնելու միջոց է, ինչը չենք կարող տանել։ Բայց թոկը գազանը չէ։",
        question: "Երբ ասում եք «crypto coma», ձեր գլխում ի՞նչ է՝ թի՞վ, թե՞ այնտեղ կանգնած մի բառ, ուր թիվը չի տեղավորվում։",
      },
      nameless: {
        title: "Գրեթե բոլոր հսկաները անանուն են",
        body: "Կարճ նկարագրությունները վերջավոր քանակով են. տրված երկարությունից կարճ արտահայտություններն անվերջ չեն շարունակվում։ Իսկ թվերը՝ անվերջ են։ Ուրեմն գրեթե ամեն թիվ, այդ թվում՝ d-ի չափի գրեթե ամեն թիվը, հնարավոր չէ ոչ անվանել, ոչ նկարագրել, ոչ առանձնացնել։ Crypto coma-ն անանունների անվերջ բազմության մեջ հազվագյուտ անվանված հսկա է։",
        question: "Եթե թիվը ոչ անվանել կարելի, ոչ էլ հասնել նրան, — ո՞ր իմաստով է այն «գոյություն ունենում»։",
      },
      "physically-transcendent": {
        title: "Ֆիզիկապես տրանսցենդենտ",
        body: "Համակարգիչը, որն աշխատում է մինչև Տիեզերքի ջերմային մահը և յուրաքանչյուր պլանկյան ակնթարթում մեկ բիթ է փոխում, չէր տպի d մակարդակի թվանշանները՝ նույնիսկ նրա թվանշանների քանակը։ Հաշվարկը ֆիզիկական սահման ունի (Bremermann, Landauer)։ Ուրեմն ոմանք վերջավոր թվեր իրական են, բայց ընդմիշտ անիրականանալի. ճշմարիտ, և այնուամենայնիվ երբեք այս տիեզերքում ոչ մի տեղ չեն կառուցվելու, չեն հաշվվելու կամ չեն ցուցադրվելու։",
        question: "Թիվը, որն իրականությունն ի վիճակի չէ իրականացնելու, — փաստ է մաթեմատիկայի՞ մասին, թե՞ մեր։",
      },
      enough: {
        title: "Որքա՞նն է «քիչ»։",
        body: "Տղաները հասան ունդեցիլիոնի, և նրանց «քիչ» թվաց։ Քիչ՝ ինչի՞ համար։ Ոչ մի խնդիր ավելի մեծ թիվ չէր պահանջում. ոչինչ չէր չափվում։ Չափը չափից բացի ոչինչ չէր ավելացնում։ Ավելի բարձր գնալու քաղցը մաթեմատիկական չէ, այլ մարդկային։ Մենք բարձրանում ենք, որովհետև հաջորդ աստիճանը կա։",
        question: "Ինչի՞ն էին նրանք իրականում ձգտում, եթե ոչ մեծության։",
      },
      "no-top": {
        title: "Անգագաթ սանդուղք",
        body: "z-ն վերջին տառն է, ոչ թե վերջին թիվը։ ★-ն ևս մեկ անգամ կիրառեք, և դուք անցել եք crypto coma-ն. ևս մեկ անգամ՝ և այն հեռու է մնացել ձեր տակից։ Անվանեք ցանկացած առաստաղ, և դուք հենց նոր հատակ եք դրել հաջորդ սենյակի համար։ Ամենամեծ թիվ գոյություն չունի. կա միայն ամենամեծը նրանցից, որոնք դուք բարեհաճել եք անվանել։",
        question: "«Ամենամեծ թիվը» — դա գոյություն չունեցող բա՞ն է, թե՞ ուղղություն, որը վերջ չունի։",
      },
      "child-frontier": {
        title: "Երեխան սահմանին",
        body: "«Ո՞րն է ամենամեծ թիվը»՝ մանկապարտեզի հարց է հնչում։ Այդպես չէ։ Որոշելը, թե որքան արագ կարող են աճել թվերը՝ TREE, Գուդշտայնի հաջորդականություններ, «աշխատասեր կուղբ», — դիպչում է այն բանի սահմաններին, ինչ մաթեմատիկան ընդհանրապես ի զորու է ապացուցելու։ Տղաները, իրենք էլ չիմանալով, մատը դրեցին ապացուցելիության եզրին։ Թվերի սահմանը պահպանում են երեխաները։",
        question: "Ինչո՞ւ է ամենապարզ հարցը տանում ուղիղ դեպի ամենադժվարը։",
      },
      "ruler-of-infinities": {
        title: "Անվերջություններից կազմված քանոն",
        body: "Երկու անգրելի վերջավոր հսկաների համեմատելու համար մաթեմատիկոսը բարձրանում է տրանսֆինիտի մեջ. օրդինալներ, անվերջությամբ նշանավորված հիերարխիաներ, — և դրանցով չափում պարզապես մեծը։ Վերջավորը ստիպում է մեզ բարձրանալ անվերջը, որպեսզի ստանանք սեփական չափը։",
        question: "Ինչո՞ւ, վերջավորը կշռելու համար, մենք պետք է ձեռքը վերցնենք անվերջը։",
      },
      "discovered-or-invented": {
        title: "Հայտնաբերե՞լ ենք, թե՞ հնարել։",
        body: "Արդյոք crypto coma-ն ինչ-որ պլատոնական երկնքում սպասո՞ւմ էր նստարանին նստած երկու տղաների։ Թե՞ այն գոյության մեջ բռնկվեց այն պահին, երբ գրվեց։ Ուլտրաֆինիտիստները կասեին. թվեր, որոնց մենք երբեք չենք հասնի, պարզապես չկան։ Տղաները ուրախությամբ փիլիսոփայության համար մղձավանջ են հորինել։",
        question: "Թիվը գոյություն ունե՞ր իր անունից առաջ։",
      },
      silence: {
        title: "Լռությունը d-ի և p-ի միջև",
        body: "d-ի և p-ի միջև ավելի շատ թիվ կա, քան այս հոդվածի մնացած ամեն ինչը միասին՝ անանուն, աներևակայելի, անօգտագործելի։ Անվանված թվերը բարակ փոշի են անվերջ ուղղի վրա. crypto coma-ի սանդուղքը այցելում է 26 կետ և քայլում օվկիանոսների վրայով։ Այն ամենը հետաքրքիր, ինչ մենք ընդհանրապես ասում ենք թվերի մասին, ասվում է աննշան մի բռան մասին։",
        question: "Մենք խոսում ենք միայն նրանց մասին, ինչ կարող ենք անվանել։ Ի՞նչն է մեզանից վրիպում։",
      },
      scribe: {
        title: "Գրագիր",
        body: "Գրագիրը յուրաքանչյուր պլանկյան ակնթարթում մի թվանշան է գրում, — Տիեզերքում ոչինչ ավելի արագ չի փոխվում։ Մեծ պայթյունից ի վեր նա կհասցներ դուրս գրել մոտ 10⁶⁰ թվանշան։ b մակարդակում դրանք 10^(3.6×10³⁷) են։ Նա չավարտեց և աննշան բաժինը. b-ի ծայրին նա երբեք չի հասնի, էլ ուր մնաց c-ին։ Իսկ b-ն մեր հսկաներից ամենափոքրն է։",
        question: "Եթե անգամ ժամանակը չի հասնում b-ի ծայրին, ի՞նչ է նշանակում ասել, որ b-ն «այդքան» թվանշան ունի։",
      },
      babel: {
        title: "Բաբելոնյան գրադարան",
        body: "Borges-ի գրադարանը պահում է բոլոր 410 էջանոց գրքերը՝ պատկերացնելիորեն հսկայական, բայց միևնույն է՝ վերջավոր։ d-ի կողքին այն ծիծաղելիորեն փոքր է։ d-ի թվանշանները դարակներում տեղադրելու համար պետք է գրադարան, որի կատալոգն անգամ հնարավոր չէ գրել այս Տիեզերքում։ Borges-ը հորինեց ամենամեծ գրադարանը, որը մարդ կարող է տանել. d-ն պահանջում է այնպիսինը, որը չի կարելի տանել։",
        question: "Մենք հյուսեցինք «անպատկերացնելիորեն շատ գրքերի» առասպելը, և այն այդպես էլ չբավարարեց։ Ի՞նչ է դա ասում անվերջի մասին մեր առասպելների մասին։",
      },
      seer: {
        title: "Նա, ով կկարողանար տեսնել այն",
        body: "Պատկերացրեք միտք, որն ի վիճակի է ամբողջությամբ պահել crypto coma-ն՝ բոլոր թվանշանները միանգամից։ Արդյոք նրա համար crypto coma-ն մեկ թիվ կլիներ, ինչպես մեզ համար՝ 7-ը։ Թե՞ «մեկ թիվը» այդ մասշտաբում դադարում է որևէ բան նշանակել։ Գուցե թիվն իսկապես տեսնել նշանակում է այն փոքր դարձնել։",
        question: "Իսկ ընկալումը — տարբեր բառ չէ՞ «փոքրացնելու» համար։",
      },
    },
  },
};

export const medIntroFor = (lang: Lang): string =>
  medOverrides[lang]?.intro ?? tr(meditationsIntro, lang);
export const teIntroFor = (lang: Lang): string =>
  medOverrides[lang]?.teIntro ?? tr(thoughtExperimentsIntro, lang);
export const teHeadFor = (lang: Lang): string =>
  medOverrides[lang]?.teHead ?? (lang === "ru" ? "Мысленные эксперименты" : "Thought experiments");
export const medField = (m: Meditation, lang: Lang, key: keyof MedText): string =>
  medOverrides[lang]?.entries?.[m.id]?.[key] ?? tr(m[key], lang);
