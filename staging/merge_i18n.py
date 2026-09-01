#!/usr/bin/env python3
"""Merge worker-produced translations (staging/i18n/{lang}.json) into the site sources.

Merges:
 1. reference-numbers.json        — name/domain (numbers), name/note (sequences)
 2. named-numbers.json            — name/use
 3. meditations.ts epigraphs      — text/who for all 15 locales (regenerates array)
 4. meditations.ts medOverrides   — inserts ka/hy blocks
 5. pages/[lang]/article.astro    — inserts ka/hy dict blocks
"""
import json, re, sys, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "site" / "src"
STAGE = ROOT / "staging" / "i18n"
ALL_LOCALES = ["de", "fr", "it", "es", "pt", "zh", "ja", "ko", "hi", "ar", "he", "ka", "hy"]
FULL = ALL_LOCALES  # all locales we translate (en/ru already present)

def load_stage(lang: str) -> dict:
    p = STAGE / f"{lang}.json"
    with open(p, encoding="utf-8") as f:
        return json.load(f)

def js_str(s: str) -> str:
    return json.dumps(s, ensure_ascii=False)

def check(ok: bool, msg: str):
    if not ok:
        print("ERR:", msg); sys.exit(1)

def main():
    stages = {}
    for lang in ALL_LOCALES:
        stages[lang] = load_stage(lang)

    # ---------------- 1. reference-numbers.json ----------------
    ref_path = SRC / "data" / "reference-numbers.json"
    ref = json.loads(ref_path.read_text(encoding="utf-8"))
    for lang, st in stages.items():
        r = st.get("reference") or st.get("ref")
        for n in ref["numbers"]:
            e = r["numbers"].get(n["id"])
            check(e and e.get("name") and e.get("domain"), f"{lang} numbers.{n['id']} missing")
            n["name"][lang] = e["name"]; n["domain"][lang] = e["domain"]
        for s in ref["sequences"]:
            e = r["sequences"].get(s["id"])
            check(e and e.get("name") and e.get("note"), f"{lang} sequences.{s['id']} missing")
            s["name"][lang] = e["name"]; s["note"][lang] = e["note"]
    ref_path.write_text(json.dumps(ref, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print("reference-numbers.json merged:", len(ALL_LOCALES), "locales x", len(ref["numbers"]), "+", len(ref["sequences"]))

    # ---------------- 2. named-numbers.json ----------------
    named_path = SRC / "data" / "named-numbers.json"
    named = json.loads(named_path.read_text(encoding="utf-8"))
    for lang, st in stages.items():
        nd = st["named"]
        for n in named["numbers"]:
            e = nd.get(str(n["exp"])) or nd.get(n["exp"])
            check(e and e.get("name") and e.get("use"), f"{lang} named exp={n['exp']} missing")
            n["name"][lang] = e["name"]; n["use"][lang] = e["use"]
    named_path.write_text(json.dumps(named, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print("named-numbers.json merged:", len(ALL_LOCALES), "locales x", len(named["numbers"]))

    # ---------------- 3. meditations.ts epigraphs ----------------
    med_path = SRC / "data" / "meditations.ts"
    med = med_path.read_text(encoding="utf-8")

    # interface retype
    if "Record<Lang, string>" not in med:
        old_iface = re.search(
            r"export interface Epigraph \{\n  id: string;\n  text: Bi;\n  who: Bi;\n\}",
            med)
        check(old_iface, "Epigraph interface not found")
        med = med[:old_iface.start()] + (
            "export interface Epigraph {\n  id: string;\n  text: Record<Lang, string>;\n  who: Record<Lang, string>;\n}"
        ) + med[old_iface.end():]

    m = re.search(r"export const epigraphs: Epigraph\[\] = \[(.*?)\n\];\n", med, re.S)
    check(m, "epigraphs array not found")
    body = m.group(1)
    # parse existing epigraphs: { id, text{ru,en}, who{ru,en} }
    pat = re.compile(
        r'id: "([^"]+)"[\s\S]*?text: \{\s*ru: (".*?"),\s*en: (".*?"),?\s*\}\s*,\s*who: \{\s*ru: (".*?"),\s*en: (".*?"),?\s*\}\s*,?',
        re.S)
    existing = {eid: (ru_t, en_t, ru_w, en_w)
                for eid, ru_t, en_t, ru_w, en_w in pat.findall(body)}
    check(len(existing) == 6, f"parsed {len(existing)} epigraphs, expected 6")
    ep_lines = ["export const epigraphs: Epigraph[] = ["]
    for eid, (ru_t, en_t, ru_w, en_w) in existing.items():
        ep_lines.append("  {")
        ep_lines.append(f'    id: {js_str(eid)},')
        ep_lines.append("    text: {")
        ep_lines.append(f"      ru: {ru_t},")
        ep_lines.append(f"      en: {en_t},")
        for lang in ALL_LOCALES:
            e = stages[lang]["epigraphs"][eid]
            check(e and e.get("text") and e.get("who"), f"{lang} epigraph {eid} missing")
            ep_lines.append(f"      {lang}: {js_str(e['text'])},"
                            if lang.isalpha() else f'      {js_str(lang)}: {js_str(e["text"])},')
        ep_lines.append("    },")
        ep_lines.append("    who: {")
        ep_lines.append(f"      ru: {ru_w},")
        ep_lines.append(f"      en: {en_w},")
        for lang in ALL_LOCALES:
            ep_lines.append(f"      {lang}: {js_str(stages[lang]['epigraphs'][eid]['who'])},"
                            if lang.isalpha() else f'      {js_str(lang)}: {js_str(stages[lang]["epigraphs"][eid]["who"])},')
        ep_lines.append("    },")
        ep_lines.append("  },")
    ep_lines.append("];")
    med = med[:m.start()] + "\n".join(ep_lines) + med[m.end():]
    print("epigraphs regenerated for 15 locales x 6")

    # ---------------- 4. meditations.ts medOverrides (ka/hy) ----------------
    for lang in ["ka", "hy"]:
        st = stages[lang].get("meditations")
        check(st, f"{lang} meditations payload missing")
        entries = st["entries"]
        check(len(entries) == 13, f"{lang} meditations entries={len(entries)}, expected 13")
        blk = [f"  {lang}: {{"]
        blk.append(f"    intro: {js_str(st['intro'])},")
        blk.append(f"    teHead: {js_str(st['teHead'])},")
        blk.append(f"    teIntro: {js_str(st['teIntro'])},")
        blk.append("    entries: {")
        for eid, e in entries.items():
            check(e and e.get("title") and e.get("body") and e.get("question"), f"{lang} entry {eid} incomplete")
            key = js_str(eid) if not eid.isidentifier() else eid
            blk.append(f"      {key}: {{")
            blk.append(f"        title: {js_str(e['title'])},")
            blk.append(f"        body: {js_str(e['body'])},")
            blk.append(f"        question: {js_str(e['question'])},")
            blk.append("      },")
        blk.append("    },")
        blk.append("  },")
        insert = "\n" + "\n".join(blk)
        # insert before the closing "};" of medOverrides
        mm = re.search(r"(export const medOverrides: Partial<Record<Lang, MedOverride>> = \{)([\s\S]*?)\n\};", med)
        check(mm, f"medOverrides container not found for {lang}")
        body_over = mm.group(2)
        # place right after the last language block (i.e. at end of body)
        new_body = body_over + insert.rstrip(",\n") + ",\n"
        med = med[:mm.start(1)] + mm.group(1) + new_body + "};" + med[mm.end():]
    try:
        f"x{len(med)}"
    finally:
        pass
    med_path.write_text(med, encoding="utf-8")
    print("medOverrides ka/hy inserted")

    # ---------------- 5. article.astro (ka/hy) ----------------
    art_path = SRC / "pages" / "[lang]" / "article.astro"
    art = art_path.read_text(encoding="utf-8")
    for lang in ["ka", "hy"]:
        st = stages[lang].get("article")
        check(st, f"{lang} article payload missing")
        q = st["questions"]; check(isinstance(q, list) and len(q) == 7, f"{lang} article questions != 7")
        blk = [f"  {lang}: {{"]
        plain_keys = ["title", "abstractH", "abstract", "formalismH", "starNote", "magnitudeH",
                      "diffH", "diff", "workH", "work", "existH", "exist", "cardinalityH",
                      "cardinality", "questionsH", "disclaimerH", "disclaimer"]
        for k in plain_keys:
            if k == "abstractH" and not st.get("abstractH"):
                continue
            blk.append(f"    {k}: {js_str(st[k])},")
        # template-literal keys (contain ${...} interpolation)
        for k in ["formalism", "magnitude"]:
            v = st[k]
            check("`" not in v and "\\" not in v, f"{lang} article {k} has backtick/backslash")
            blk.append(f"    {k}: `{v}`,")
        blk.append("    questions: [")
        for qs in q:
            blk.append(f"      {js_str(qs)},")
        blk.append("    ],")
        blk.append("  },")
        insert = "\n" + "\n".join(blk)
        mm = re.search(r"\n\} as const;", art)
        check(mm, f"article.astro closing not found for {lang}")
        art = art[:mm.start()] + insert + art[mm.start():]
    art_path.write_text(art, encoding="utf-8")
    print("article.astro ka/hy inserted")

    print("\nDONE.")

if __name__ == "__main__":
    main()