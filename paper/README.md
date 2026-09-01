# paper — the Crypto Coma parody article (RU)

A parody scientific paper *"from the children"*, styled academically. Content mirrors the
website; numbers come from the shared dataset.

## Build

Requires a TeX distribution (TeX Live / MacTeX) with Cyrillic support (`babel-russian`,
`T2A` fontenc) and TikZ.

```bash
python gen_data.py          # regenerate generated/levels.tex from ../docs/data/levels.json
latexmk -pdf main.tex       # -> build/main.pdf
latexmk -c                  # clean aux files
```

> The build is verified in CI (see the CI task), not committed — `build/` and `*.pdf`
> are gitignored.

## Layout

```
main.tex             # document + preamble + the \ccoma symbol macro
sections/            # 01-legend, 02-formalism, 03-why-it-matters, 04-disclaimer
figures via TikZ     # power-tower ladder (in 01-legend), scale table (in 03)
generated/levels.tex # AUTO-GENERATED from docs/data/levels.json (do not edit)
gen_data.py          # the generator
references.bib
```

## Single source of truth

Every number in the paper (`a = 10^36`, `b = 10^(3.6×10^37)`, tower height ≈ 25, level
count 26) is pulled from `../docs/data/levels.json` via `gen_data.py`. Never hardcode a
number here — regenerate instead.
