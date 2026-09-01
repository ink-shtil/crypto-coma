# cryptocoma

Computes the log-scale magnitudes of the **Crypto Coma** power tower defined in
[`docs/formal-model.md`](../docs/formal-model.md):

```
a = 10^36 ,  L(n+1) = L(n)^L(n) ,  crypto coma = z^z
```

The level values are unrepresentable, so the library works with **magnitudes**
`M(n) = log10(L(n))`, held as an iterated-log power tower when they overflow a float.

## Install

```bash
pip install -e ./pylib          # from the repo root
pip install -e "./pylib[dev]"   # with pytest/ruff/black
```

## Use

```bash
python -m cryptocoma table                 # print the a…z table, write docs/data/levels.json
python -m cryptocoma table --no-write      # print only
python -m cryptocoma table --out /tmp/x.json
```

```python
from cryptocoma import magnitudes, crypto_coma_magnitude, describe

m = magnitudes(26)                 # M(1)…M(26) as Towers
print(m[1].value_str())            # 10^(3.6e+37)  -> the value of level b
print(crypto_coma_magnitude().height)   # ~25  (base-10 tower height of z^z)
print(describe(36.0).phrasing)     # scale hint vs an undecillion
```

## Test / lint

```bash
cd pylib
pytest
ruff check .
black --check .
```

`docs/data/levels.json` is the canonical dataset consumed by the paper and the website —
regenerate it with `python -m cryptocoma table` whenever the model changes.
