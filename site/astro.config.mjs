// @ts-check
import { defineConfig } from "astro/config";

// Hosted on GitHub Pages as a project site: https://ink-shtil.github.io/crypto-coma/.
// `base` puts every route under /crypto-coma/; internal links go through withBase()/path()
// in src/i18n/utils.ts so they stay correct. For a custom domain, set base to "/".
const base = "/crypto-coma/";

// EN is the default locale; RU is the source of the writing but the site lands in English.
// Both are prefixed (/ru, /en) and the bare root redirects to /en. Adding a locale later =
// add it here + fill src/i18n/ui.ts.
export default defineConfig({
  site: "https://ink-shtil.github.io",
  base,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ru", "de", "fr", "it", "es", "pt", "zh", "ja", "ko", "hi", "ar", "he", "ka", "hy"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
  // Astro prefixes `base` to the redirect route (the key) but not the target (the value),
  // so the target must include `base` to land on /crypto-coma/en/.
  redirects: {
    "/": `${base}en/`,
  },
});
