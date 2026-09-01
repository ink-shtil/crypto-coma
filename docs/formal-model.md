# The Crypto Coma — Formal Model & Notation

> **This document is the single source of truth for the project.**
> The Python library (`pylib`) computes exactly what is defined here; the LaTeX paper
> (`paper`) and the website (`site`) present it. If a number or symbol appears anywhere
> in the project, its definition lives here.

Status: **v1** (the open questions at the end are intentionally parked, not forgotten).

---

## 1. Levels `a … z`

There are exactly **26 levels**, one per Latin letter. Level `a` is level 1, level `z`
is level 26. We write `L(n)` for the value of the `n`-th level, `1 ≤ n ≤ 26`, so
`L(1) = a` and `L(26) = z`.

### 1.1 Starting value

$$a = L(1) = \text{undecillion} = 10^{36}.$$

**Rationale (from the legend).** The two boys count upward until they reach an
*undecillion* and it is still not enough; `a` is the first *new* step they invent beyond
it. We anchor `a` at the short-scale undecillion, `10^{36}`, so the ladder starts from a
number that already has a real name.

> This is the one free parameter of the model. It is fixed to `10^36` by decision. See
> Open Question O1 for alternatives — changing it changes every downstream number, so it
> must only be changed here.

### 1.2 The recurrence

Each level is the self-power of the previous one:

$$L(n+1) = L(n)^{\,L(n)}, \qquad L(1) = 10^{36}.$$

This is (offset) **tetration**: the values form a base-that-grows power tower, which is
why the magnitudes explode past anything physically meaningful within a few steps.

---

## 2. Crypto Coma

The **crypto coma** is the self-power of the last level `z`:

$$\boxed{\ \text{crypto coma} = z^{\,z} = L(26)^{\,L(26)}\ }$$

Equivalently it is "the value that would be `L(27)`" under the same recurrence — but it is
not a lettered level; it is the *named culmination* of the ladder. It is the object the
whole project is named after.

### 2.1 Compact notation (canonical short form)

The whole ladder is **one operation iterated**: self-exponentiation. Define the
**self-power operator** `★`:

$$x^{\star} = x^{x} \qquad\text{(one star = "raise the number to itself")}.$$

Writing `★ᵏ` for `k` applications, the ladder and its summit collapse to:

$$a = 10^{36},\quad L(n) = \bigl(10^{36}\bigr)^{\star\,(n-1)},\quad
  \boxed{\ \text{crypto coma} = \bigl(10^{36}\bigr)^{\star\,26}\ }$$

That is: **10³⁶, self-powered 26 times — one star per letter of the alphabet.** So
`a` has 0 stars, `b` has 1, …, `z` has 25, and the crypto coma `= z★` has 26.

One-line description: *"the crypto coma is 10³⁶ raised to itself, over and over, 26 times."*

---

## 3. Working in log-scale (why `pylib` never stores the numbers)

Even `b = a^a = (10^{36})^{10^{36}} = 10^{\,36 \cdot 10^{36}} = 10^{\,3.6 \times 10^{37}}`
has an *exponent* with ~38 digits. By level `c` the exponent's exponent is already
astronomical. No computer can store `L(n)` for `n ≥ 2` directly, so the library works
entirely with **base-10 magnitudes** and, when those overflow, **iterated logarithms**.

Define the magnitude

$$M(n) = \log_{10} L(n).$$

Taking `log10` of the recurrence `L(n+1) = L(n)^{L(n)}` gives the exact rule the library
implements:

$$M(n+1) = L(n) \cdot \log_{10} L(n) = 10^{M(n)} \cdot M(n).$$

So, in a compact recurrence on the magnitude alone:

$$\boxed{\ M(n+1) = M(n)\cdot 10^{\,M(n)}, \qquad M(1) = 36.\ }$$

First few magnitudes (these are the reference values `pylib` must reproduce):

| level | value            | magnitude `M(n) = log10(L(n))`                        |
|-------|------------------|-------------------------------------------------------|
| `a` (1) | `10^36`        | `M(1) = 36`                                           |
| `b` (2) | `a^a`          | `M(2) = 36 · 10^36 = 3.6 × 10^37`                     |
| `c` (3) | `b^b`          | `M(3) = M(2) · 10^{M(2)} ≈ 10^{(3.6 × 10^37)}`        |
| `d` (4) | `c^c`          | `M(4) ≈ 10^{10^{(3.6 × 10^37)}}` (tower of height ~4) |

By `M(3)` the magnitude itself no longer fits in a float; from there `pylib` represents
`M(n)` by its **iterated log** (a `(height, top)` power-tower form). The crypto coma's
magnitude, `M(27) = M(26)·10^{M(26)}`, is a base-10 tower of height ~27 — this is the
number the library reports as a tower, never as digits.

---

## 4. Notation & the symbol

### 4.1 The crypto-coma symbol

The symbol is a **blackboard-bold `C`** ("Crypto Coma") overstruck with a **double upward
arrow** `⇈` — the arrow denoting the ascending power tower (and echoing Knuth's
up-arrow tetration):

- **Plain-text / web fallback:** `ℂ⇈` (U+2102 + U+21C8), or `ℂ↑↑` where combining is unavailable.
- **LaTeX macro** (defined once in `paper/`, mirrored on the site):

  ```latex
  \newcommand{\ccoma}{\mathbb{C}\mkern-1.5mu{\uparrow\uparrow}}
  ```

- **Dedicated glyph:** a hand-drawn SVG in the childlike-but-academic style is produced
  later (see `paper` figures / a shared web asset) and is the canonical printed mark;
  `ℂ⇈` is the typographic stand-in used inline.

### 4.2 Level notation

- `L(n)` — the `n`-th level value; `a = L(1) … z = L(26)`.
- `M(n) = log10(L(n))` — the magnitude (what the library computes).
- `ℂ⇈ = z^z = L(26)^{L(26)}` — the crypto coma.

---

## 5. The "cardinality / мощность" framing (the joke, stated plainly)

The paper will describe the crypto coma as a **"power" (мощность / cardinality)** and
"estimate" it with the machinery of cardinal arithmetic. This is the central pun:
Russian *мощность* means both **cardinality** and **power/might**. The crypto coma is, in
truth, an ordinary **finite natural number** — enormous, but finite. Dressing a finite
number in the vocabulary of infinite cardinals is exactly the affectionate joke: the
naive "biggest number" dream borrowing the robes of set theory.

The project keeps this honest: the irony is on the surface (the tone) while the math
underneath (tetration, log-scale magnitudes) is correct.

---

## 6. Why the naive idea actually matters (arguments to flatter it)

These are the "serious" arguments the paper uses to defend the childhood idea. They are
genuinely true, which is what makes the homage work:

1. **Naming the unnameable is real mathematics.** Googol, googolplex, Graham's number,
   TREE(3) — mathematics routinely gives compact names/symbols to finite magnitudes no
   one can write out. Inventing a symbol for a huge number is a mathematician's reflex.
2. **The children reinvented tetration.** The recurrence `L^L` is (offset) tetration; the
   ladder `a…z` is a fast-growing hierarchy — the same idea behind Ackermann's function,
   Knuth up-arrows, and the fast-growing hierarchy used in proof theory.
3. **Named ladders are cognitive scaffolding.** A labeled staircase `a…z` gives intuition
   about scale that a single monstrous numeral cannot.
4. **It is the gateway.** The "what's the biggest number?" game on a park bench is, for
   many people, the first real taste of mathematics. Honoring it is the point.

---

## 7. Homage to the number line (from the mind map)

The paper pays homage to the number line itself: counting `1 … 10`, the later arrival of
`−1` (negative numbers), and the convenience of the alphabet for labeling the levels.
These are decorative asides in the paper, not part of the computation, and are recorded
here only so the content tasks know they belong to the concept.

---

## 8. Open questions (parked, not forgotten)

- **O1 — value of `a`.** Fixed to `10^36` (undecillion). Alternatives considered:
  (a) `a` = a *symbolic* undecillion carried as a name rather than `10^36`; (b) starting
  one step higher (duodecillion, `10^39`). Kept at `10^36` for a clean, well-known base.
  Any change happens **only** in §1.1.
- **O2 — author's terms "порядок b" / "уровень d".** Interpreted as: **"level X"** = the
  letter's position in `a…z` (adopted above as `L(n)`); **"order"** most likely refers to
  the *tower height* of the magnitude. We adopt "level" formally and treat "order" as an
  informal synonym for tower height until the author confirms. Not load-bearing for any
  computation.
- **O3 — is the crypto coma `L(27)`?** Numerically `z^z` equals what `L(27)` would be, but
  we treat it as the *named culmination*, not a 27th lettered level (there is no letter
  after `z`). Presentation follows §2.
