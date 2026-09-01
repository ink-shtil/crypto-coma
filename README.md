# Crypto Coma

> A playful hoax about very large numbers, dressed up as a serious scientific paper.

**Crypto Coma** is an educational-yet-ironic project. On the surface it is an academic
study of very large numbers; underneath it is an homage to a naive childhood dream —
*"let's invent the biggest number."* Дань уважения мечтам детства — a tribute to the
dreams of childhood.

## The legend

Two boys sit on a bench one summer evening, look at the stars, and argue about how many
atoms fit in the Universe. They count bigger and bigger numbers, reach an *undecillion*,
and it is still not enough — so they invent a number `a` as the first step toward the
**crypto coma**, and continue by a recursive power tower:

```
a           — the first step
b = a ^ a
c = b ^ b
...
crypto coma = z ^ z
```

The 26 letters `a … z` are the 26 *levels*; **crypto coma** is the self-power of the
last level. The moral: people really do reach for "powerful, tending-to-infinity" sets.

## Repository layout

```
crypto-coma/
  docs/            # docs/formal-model.md (the spec) + docs/data/levels.json (shared data)
  pylib/           # `cryptocoma` Python package — computes the a…z scales
  paper/           # LaTeX parody article
  site/            # Astro website (EN default + RU)
```

## Data flow (single source of truth)

Numbers flow **one way**, so the lib, the paper, and the site can never disagree:

```
docs/formal-model.md   →   pylib (cryptocoma)   →   docs/data/levels.json   →   paper/ + site/
  (defines the math)        (computes magnitudes)     (canonical dataset)        (present it)
```

- `docs/formal-model.md` fixes the math: the starting value of `a`, the recurrence
  `L(n+1) = L(n) ^ L(n)`, the definition of crypto coma, and its symbol.
- `pylib` computes the (log-scale) magnitudes and emits `docs/data/levels.json`.
- `paper` and `site` **only read** `levels.json` — they never hardcode numbers.

## Status

Early scaffolding. Work is tracked with [Backlog.md](https://backlog.md) —
run `backlog task list` or `backlog board` to see the plan.

## Collaborate

Ideas are welcome. Write to `k_mackl@mail.ru` and `ink-shtil@mail.ru` with the subject
**crypto coma**.

## License

MIT — see [LICENSE](LICENSE).
