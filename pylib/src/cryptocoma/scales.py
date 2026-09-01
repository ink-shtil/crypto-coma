"""Physical scale hints: map a log10 magnitude to something a human can feel.

Bilingual (ru/en). For magnitudes within reach of physical quantities we phrase a
comparison to the nearest reference. For the levels that blow past all physics (b…z and
the crypto coma) we instead pick a *varied* line from a pool — each riffs on another large
number or abstract computation, so the a…z table reads playfully instead of repeating one
sentence 25 times. The pool is indexed by the level's position on the ladder, so each
level gets its own distinct line.
"""

from __future__ import annotations

from dataclasses import dataclass

from .model import Tower

#: Above this log10, a quantity dwarfs every physical reference we track.
BEYOND_PHYSICAL_LOG10 = 190.0


@dataclass(frozen=True)
class Reference:
    log10: float
    name_en: str
    name_ru: str


#: Curated, order-of-magnitude reference points (log10 of the quantity), sorted.
REFERENCES: list[Reference] = [
    Reference(0, "one", "единица"),
    Reference(2, "a hundred", "сотня"),
    Reference(11, "stars in the Milky Way (~10^11)", "звёзды в Млечном Пути (~10^11)"),
    Reference(17.6, "the age of the universe in seconds (~4×10^17)", "возраст Вселенной в секундах (~4×10^17)"),
    Reference(19, "grains of sand on Earth (~10^19)", "песчинки на Земле (~10^19)"),
    Reference(23.8, "Avogadro's number (~6×10^23)", "число Авогадро (~6×10^23)"),
    Reference(24, "stars in the observable universe (~10^24)", "звёзды в наблюдаемой Вселенной (~10^24)"),
    Reference(36, "an undecillion (10^36) — anchor inside base a", "ундециллион (10^36) — опора внутри базы a"),
    Reference(50, "atoms making up the Earth (~10^50)", "атомы, составляющие Землю (~10^50)"),
    Reference(67.8, "orderings of a 52-card deck (52! ≈ 10^68)", "перестановки колоды из 52 карт (52! ≈ 10^68)"),
    Reference(80, "atoms in the observable universe (~10^80)", "атомы в наблюдаемой Вселенной (~10^80)"),
    Reference(89, "photons in the observable universe (~10^89)", "фотоны в наблюдаемой Вселенной (~10^89)"),
    Reference(100, "a googol (10^100)", "гугол (10^100)"),
    Reference(120, "the Shannon number — chess complexity (~10^120)", "число Шеннона — сложность шахмат (~10^120)"),
    Reference(185, "Planck volumes in the observable universe (~10^185)", "планковские объёмы во Вселенной (~10^185)"),
]

#: Varied "beyond physics" lines, one per ladder position (b=0, c=1, …, z=24, crypto coma=25).
#: Each riffs on another large number or abstract computation. Kept honest in spirit.
BEYOND_POOL: list[dict[str, str]] = [
    {
        "en": "Overtakes a googol and every physically meaningful count.",
        "ru": "Обгоняет гугол и вообще любое физически осмысленное число.",
    },
    {
        "en": "Past a googolplex — its exponent alone is astronomical.",
        "ru": "Уже больше гуголплекса — один только показатель степени астрономичен.",
    },
    {
        "en": "Its number of digits has more digits than the universe has atoms.",
        "ru": "У числа его цифр — больше цифр, чем атомов во Вселенной.",
    },
    {
        "en": "Take the logarithm three times over — still beyond all physics.",
        "ru": "Возьмите логарифм трижды подряд — всё ещё за пределами всей физики.",
    },
    {
        "en": "Raise a googolplex to a googolplex; you are not even close.",
        "ru": "Возведите гуголплекс в гуголплекс — вы даже не рядом.",
    },
    {
        "en": "More than Shannon's chess games raised to the positions of Go.",
        "ru": "Больше шахматных партий Шеннона в степени числа позиций го.",
    },
    {
        "en": "A busy-beaver machine would halt before printing the first exponent.",
        "ru": "«Трудолюбивый бобёр» остановится раньше, чем напечатает первый показатель.",
    },
    {
        "en": "Write Avogadro's number in every Planck volume of the cosmos — not close.",
        "ru": "Впишите число Авогадро в каждый планковский объём космоса — всё равно мало.",
    },
    {
        "en": "Every digit a universe, every universe's atoms digits — still short.",
        "ru": "Каждая цифра — вселенная, атомы каждой вселенной — цифры; всё равно мало.",
    },
    {
        "en": "The number of its digits is itself beyond counting.",
        "ru": "Само число его цифр уже за пределами всякого счёта.",
    },
    {
        "en": "Deep in tetration: self-powers stacked past every named number.",
        "ru": "В глубине тетрации: самовозведения выше любого именованного числа.",
    },
    {
        "en": "The Ackermann function would treat this as an early, warm-up input.",
        "ru": "Функция Аккермана сочла бы это одним из первых, разминочных значений.",
    },
    {
        "en": "Beyond Skewes's number, once called 'the largest in mathematics'.",
        "ru": "Больше числа Скьюза — когда-то «крупнейшего числа в математике».",
    },
    {
        "en": "Name a new number every Planck time since the Big Bang — never reach it.",
        "ru": "Называйте новое число каждый планковский миг от Большого взрыва — не дойдёте.",
    },
    {
        "en": "A googolplexian is a rounding error down at its base.",
        "ru": "Гуголплексиан — лишь погрешность округления у его основания.",
    },
    {
        "en": "Its logarithm needs its own logarithm, which needs its own…",
        "ru": "Его логарифму нужен свой логарифм, а тому — ещё свой…",
    },
    {
        "en": "Taller than any tower of tens you could build atom by atom.",
        "ru": "Выше любой башни из десяток, что можно сложить атом за атомом.",
    },
    {
        "en": "The exponent of the exponent of the exponent is already unphysical.",
        "ru": "Показатель показателя показателя уже нефизичен.",
    },
    {
        "en": "Past every 'illion' and every number humans have ever named.",
        "ru": "Дальше всех «-иллионов» и всех чисел, что люди когда-либо называли.",
    },
    {
        "en": "You'd exhaust factorials of factorials before catching up.",
        "ru": "Исчерпаете факториалы факториалов — и всё ещё не догоните.",
    },
    {
        "en": "Twenty rounds of 'raise to itself', and you have barely arrived.",
        "ru": "Двадцать раз «возведи в себя» — и вы едва добрались сюда.",
    },
    {
        "en": "The power tower is now so tall the tens blur into a single line.",
        "ru": "Башня степеней уже так высока, что десятки сливаются в одну линию.",
    },
    {
        "en": "And yet — a humbling truth — infinitely short of Graham's number.",
        "ru": "И всё же — отрезвляющая правда — бесконечно далеко от числа Грэма.",
    },
    {
        "en": "Infinitely short of TREE(3), which dwarfs Graham's number.",
        "ru": "Бесконечно далеко от TREE(3), рядом с которым число Грэма ничтожно.",
    },
    {
        "en": "The last letter — the alphabet ran out before the number did.",
        "ru": "Последняя буква — алфавит кончился раньше, чем число.",
    },
    {
        "en": "The summit — yet still a finite number you could, in principle, write.",
        "ru": "Вершина — и всё же конечное число, которое в принципе можно записать.",
    },
]


@dataclass(frozen=True)
class ScaleHint:
    beyond_physical: bool
    nearest: Reference | None
    phrasing: dict[str, str]  # {"ru": ..., "en": ...}


def _beyond_hint(pos: int) -> ScaleHint:
    entry = BEYOND_POOL[min(max(pos, 0), len(BEYOND_POOL) - 1)]
    return ScaleHint(beyond_physical=True, nearest=None, phrasing=dict(entry))


def _nearest_hint(log10_value: float) -> ScaleHint:
    nearest = min(REFERENCES, key=lambda r: abs(r.log10 - log10_value))
    delta = log10_value - nearest.log10
    if abs(delta) < 0.5:
        rel = {"en": "about the same as", "ru": "примерно как"}
    elif delta > 0:
        rel = {"en": f"~10^{delta:.1f}× more than", "ru": f"~10^{delta:.1f}× больше, чем"}
    else:
        d = abs(delta)
        rel = {"en": f"~10^{d:.1f}× less than", "ru": f"~10^{d:.1f}× меньше, чем"}
    return ScaleHint(
        beyond_physical=False,
        nearest=nearest,
        phrasing={
            "en": f"{rel['en']} {nearest.name_en}",
            "ru": f"{rel['ru']} {nearest.name_ru}",
        },
    )


def describe(magnitude: float | Tower) -> ScaleHint:
    """Describe a magnitude (a float log10, or a :class:`Tower`) against physical scales.

    Within physical reach → a comparison to the nearest reference. Beyond it → a varied
    line from :data:`BEYOND_POOL`, chosen by ladder position (a Tower's height), so each
    level reads differently.
    """
    if isinstance(magnitude, Tower):
        if magnitude.height >= 1 or magnitude.top > BEYOND_PHYSICAL_LOG10:
            pos = 0 if magnitude.height == 0 else magnitude.height
            return _beyond_hint(pos)
        return _nearest_hint(magnitude.top)
    value = float(magnitude)
    if value > BEYOND_PHYSICAL_LOG10:
        return _beyond_hint(0)
    return _nearest_hint(value)
