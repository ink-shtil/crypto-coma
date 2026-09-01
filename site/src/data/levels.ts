// Typed accessor for the canonical dataset. The JSON is copied in by scripts/sync-data.mjs
// (predev/prebuild). Single source of truth: docs/data/levels.json.
import raw from "./levels.json";

export interface Level {
  n: number;
  letter: string;
  stars: number;
  value_str: string;
  log10_str: string;
  magnitude: { height: number; top: number };
  scale_hint: { ru: string; en: string };
  beyond_physical: boolean;
}

export interface CryptoComa {
  name: string;
  symbol: string;
  definition: string;
  star_notation: string;
  value_str: string;
  log10_str: string;
  magnitude: { height: number; top: number };
  tower_height: number;
  scale_hint: { ru: string; en: string };
}

export interface LevelsData {
  meta: {
    start_value_log10: number;
    levels: number;
    recurrence: string;
    symbol: string;
    source: string;
    note: string;
  };
  levels: Level[];
  crypto_coma: CryptoComa;
}

export const data = raw as LevelsData;
export const levels = data.levels;
export const cryptoComa = data.crypto_coma;
export const meta = data.meta;
