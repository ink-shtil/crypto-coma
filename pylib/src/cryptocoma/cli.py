"""Command line interface: print the a…z table and emit the canonical levels.json.

``docs/data/levels.json`` is the one dataset the paper and the website read, so this CLI
is the only place project numbers are produced.
"""

from __future__ import annotations

import argparse
import json
from pathlib import Path

from . import model
from .scales import describe

SYMBOL = "ℂ⇈"  # crypto-coma symbol (see docs/formal-model.md §4)


def _find_repo_root(start: Path) -> Path:
    """Walk up from *start* to the repo root (marked by ``docs/`` + ``backlog/``)."""
    for parent in [start, *start.parents]:
        if (parent / "docs").is_dir() and (parent / "backlog").is_dir():
            return parent
    return start


def default_out() -> Path:
    return _find_repo_root(Path.cwd()) / "docs" / "data" / "levels.json"


def build_dataset() -> dict:
    """Assemble the full levels dataset (levels a…z plus the crypto coma)."""
    mags = model.magnitudes(model.LEVELS)
    levels = []
    for k, m in enumerate(mags):
        n = k + 1
        hint = describe(m)
        levels.append(
            {
                "n": n,
                "letter": model.letter(n),
                "stars": n - 1,  # self-powers of a: a=0, b=1, …, z=25  →  (10^36)★(n-1)
                "value_str": m.value_str(),
                "log10_str": m.log10_str(),
                "magnitude": m.as_dict(),
                "scale_hint": hint.phrasing,  # {"ru": ..., "en": ...}
                "beyond_physical": hint.beyond_physical,
            }
        )
    cc = model.crypto_coma_magnitude()
    crypto_coma = {
        "name": "crypto coma",
        "symbol": SYMBOL,
        "definition": "z ^ z = L(26) ^ L(26)",
        "star_notation": f"(10^{int(model.START_LOG10)})*{model.LEVELS}",  # (10^36)★26
        "value_str": cc.value_str(),
        "log10_str": cc.log10_str(),
        "magnitude": cc.as_dict(),
        "tower_height": cc.height,
        "scale_hint": describe(cc).phrasing,
    }
    return {
        "meta": {
            "start_value_log10": model.START_LOG10,
            "levels": model.LEVELS,
            "recurrence": "L(n+1) = L(n) ^ L(n)",
            "symbol": SYMBOL,
            "source": "docs/formal-model.md",
            "note": (
                "Magnitudes are log10(L(n)); a magnitude is an iterated-log tower "
                "(height, top) meaning 10 stacked `height` times over `top`."
            ),
        },
        "levels": levels,
        "crypto_coma": crypto_coma,
    }


def _print_table(data: dict) -> None:
    print(f"Crypto Coma — levels a…z  (start a = 10^{int(model.START_LOG10)})\n")
    header = f"{'lvl':>3}  {'letter':<6}  {'value L(n)':<22}  scale"
    print(header)
    print("-" * len(header))
    for lv in data["levels"]:
        print(f"{lv['n']:>3}  {lv['letter']:<6}  {lv['value_str']:<22}  {lv['scale_hint']['en']}")
    cc = data["crypto_coma"]
    print("-" * len(header))
    print(f"     {cc['symbol']}  crypto coma = {cc['definition']}")
    print(f"        value  {cc['value_str']}")
    print(f"        a base-10 power tower of height ≈ {cc['tower_height']}")


def cmd_table(args: argparse.Namespace) -> int:
    data = build_dataset()
    _print_table(data)
    if not args.no_write:
        out = Path(args.out) if args.out else default_out()
        out.parent.mkdir(parents=True, exist_ok=True)
        out.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        print(f"\nwrote {out}")
    return 0


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(prog="cryptocoma", description=__doc__)
    sub = parser.add_subparsers(dest="command", required=True)

    p_table = sub.add_parser("table", help="print the a…z table and write levels.json")
    p_table.add_argument("--out", help="output path (default: <repo>/docs/data/levels.json)")
    p_table.add_argument("--no-write", action="store_true", help="print only, do not write levels.json")
    p_table.set_defaults(func=cmd_table)

    args = parser.parse_args(argv)
    return args.func(args)


if __name__ == "__main__":  # pragma: no cover
    raise SystemExit(main())
