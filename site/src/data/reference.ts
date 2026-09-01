// Typed accessor for the hand-authored reference dataset (real large numbers + other
// sequences tending to infinity). Copied in by scripts/sync-data.mjs.
import raw from "./reference-numbers.json";
import namedRaw from "./named-numbers.json";
import type { Lang } from "../i18n/ui";

interface Bilingual {
  ru: string;
  en: string;
}

export interface RefNumber {
  id: string;
  value_str: string;
  log10: number | null;
  name: Bilingual;
  domain: Bilingual;
  source: string;
}

export interface RefSequence {
  id: string;
  name: Bilingual;
  note: Bilingual;
  source: string;
}

interface ReferenceData {
  meta: { title: string; note: string; hand_authored: boolean };
  numbers: RefNumber[];
  sequences: RefSequence[];
}

export const referenceData = raw as ReferenceData;

/** Real numbers sorted by magnitude; entries beyond floating point (log10 null) go last. */
export const refNumbers: RefNumber[] = [...referenceData.numbers].sort((a, b) => {
  if (a.log10 === null) return 1;
  if (b.log10 === null) return -1;
  return a.log10 - b.log10;
});

export const refSequences: RefSequence[] = referenceData.sequences;

export interface NamedNumber {
  exp: number;
  value_str: string;
  name: Bilingual;
  use: Bilingual;
}

export const namedNumbers: NamedNumber[] = (namedRaw as { numbers: NamedNumber[] }).numbers;

export const tr = (b: Bilingual, lang: Lang): string => b[lang] ?? b.en;
