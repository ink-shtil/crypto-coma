# Deployment

**Host: GitHub Pages** (custom domain) → **https://cryptocoma.org**

The site auto-deploys from `main` via the `deploy` job in `.github/workflows/ci.yml`
(`actions/upload-pages-artifact` + `actions/deploy-pages`). Pull requests build but do not
deploy.

### One-time repo settings (manual)

In GitHub **Settings → Pages**:
- **Build and deployment → Source: "GitHub Actions"**. With "Deploy from a branch" GitHub
  also runs its own Jekyll "pages build and deployment", which fails on this repo.
- **Custom domain: `cryptocoma.org`**, then **Enforce HTTPS** once the certificate is issued.
  With an Actions deploy GitHub ignores CNAME files, so this setting is what binds the domain;
  `site/public/CNAME` is kept only so the built `dist/` documents it.

DNS for the apex `cryptocoma.org`: `A` records → `185.199.108.153`, `185.199.109.153`,
`185.199.110.153`, `185.199.111.153` (optionally `AAAA` → `2606:50c0:8000::153` …
`2606:50c0:8003::153`); `www` → `CNAME ink-shtil.github.io`.

### Base path

The site is served from the domain root, so `astro.config.mjs` sets `base: "/"` and
`site: "https://cryptocoma.org"`. All internal links go through `withBase()` / `path()` in
`site/src/i18n/utils.ts`; assets via `Figure.astro` and the archive's `/cache/` links are
wrapped the same way, and the root redirect target includes the base explicitly (Astro does
not prefix `base` onto redirect *values*). So moving back to the project site
(`https://ink-shtil.github.io/crypto-coma/`) is just `base = "/crypto-coma/"` plus the old
`site` URL. The Pages artifact deploy does not run Jekyll, so `dist/_astro/` is served fine —
no `.nojekyll` needed.

## Alternatives (if we ever move off Pages)

## What ships

The website is a **static Astro build**: `cd site && npm run build` → `site/dist/`
(plain HTML/CSS/JS, no server needed). CI already produces this as the `site-dist`
artifact on every push (see `.github/workflows/ci.yml`), and the paper PDF as
`crypto-coma-paper`.

Before building, the canonical data must exist: `python -m cryptocoma table` writes
`docs/data/levels.json`, which the site's `prebuild` step copies in.

| Option | Fit | How to wire in |
|---|---|---|
| **Vercel / Netlify** | Easy previews + CDN | Point the project at `site/`, build `npm run build`, publish `dist/`; served at a root domain, so set `base` back to `"/"`; add the Astro adapter only if SSR is ever needed (currently static) |
| **Self-hosted nginx** | Full control | `rsync site/dist/` to the server; serve as a static root; the `/cache/*` snapshots are plain files and need no special handling |

## Notes for whichever host

- The site is currently fully static — no serverless/SSR adapter is required.
- Locale routing is path-based (`/en/`, `/ru/`) with a root redirect to `/en/`; ensure the
  host honours the generated `/index.html` redirect (all options above do).
- The cached archive under `/cache/*.html` is static; refresh it with
  `npm run cache` (network-dependent) and commit before deploying.
