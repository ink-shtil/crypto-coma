import { locales } from "./utils";

/** getStaticPaths for every `[lang]` route — one page per locale. */
export function langStaticPaths() {
  return locales.map((lang) => ({ params: { lang } }));
}
