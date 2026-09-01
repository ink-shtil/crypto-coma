// Copies the canonical datasets into the site before dev/build so the site never hardcodes
// numbers. Single source of truth: ../docs/data/*.json (levels.json is produced by
// `cryptocoma table`; reference-numbers.json is hand-authored).
import { copyFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const files = ["levels.json", "reference-numbers.json", "named-numbers.json"];
const destDir = resolve(here, "../src/data");
mkdirSync(destDir, { recursive: true });

for (const name of files) {
  const src = resolve(here, "../../docs/data", name);
  if (!existsSync(src)) {
    console.error(`[sync-data] ${src} not found. Run \`python -m cryptocoma table\` first.`);
    process.exit(1);
  }
  copyFileSync(src, resolve(destDir, name));
  console.log(`[sync-data] ${name} -> src/data/${name}`);
}
