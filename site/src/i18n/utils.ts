import { defaultLang, languages, ui, type Lang, type UIKey } from "./ui";

export const locales = Object.keys(languages) as Lang[];

/** The configured site base without a trailing slash: "/crypto-coma" when Pages-hosted, "" locally. */
const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

/** Prefix an absolute app path with the site's base, avoiding double slashes.
 *  `withBase("/en/article") -> "/crypto-coma/en/article"` (or "/en/article" when base is "/"). */
export function withBase(p = "/"): string {
  const clean = p.startsWith("/") ? p : `/${p}`;
  return `${BASE}${clean}` || "/";
}

/** The locale from a URL path like `/en/article` (falls back to the default). */
export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split("/");
  if (seg in languages) return seg as Lang;
  return defaultLang;
}

/** A translator bound to a locale; missing locale or key falls back to the default. */
export function useTranslations(lang: Lang) {
  const table = ui[lang] ?? ui[defaultLang];
  return function t(key: UIKey): string {
    return table[key] ?? ui[defaultLang][key];
  };
}

/** Prefix a path with the locale (and site base), e.g. `path("en", "/article") -> "/crypto-coma/en/article"`. */
export function path(lang: Lang, p = "/"): string {
  const clean = p.startsWith("/") ? p : `/${p}`;
  return withBase(`/${lang}${clean === "/" ? "/" : clean}`);
}

/** Swap the locale prefix on the current path, preserving the rest of the route.
 *  `url.pathname` may already include the site base, so strip it before swapping and re-apply. */
export function switchLocalePath(url: URL, to: Lang): string {
  let pathname = url.pathname;
  if (BASE && pathname.startsWith(BASE)) pathname = pathname.slice(BASE.length) || "/";
  const parts = pathname.split("/");
  if (parts[1] && (parts[1] as Lang) in languages) {
    parts[1] = to;
    const joined = parts.join("/");
    return withBase(joined === `/${to}` ? `/${to}/` : joined);
  }
  return withBase(`/${to}/`);
}
