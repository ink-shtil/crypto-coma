# Deployment

**Host: GitHub Pages** (project site) → **https://ink-shtil.github.io/crypto-coma/**

The site auto-deploys from `main` via the `deploy` job in `.github/workflows/ci.yml`
(`actions/upload-pages-artifact` + `actions/deploy-pages`). Pull requests build but do not
deploy.

### One-time repo setting (manual)

In GitHub: **Settings → Pages → Build and deployment → Source: "GitHub Actions"**. Until this
is set, the `deploy` job runs but publishing fails. This is the only step that cannot be
automated from the repo.

### The base path `/crypto-coma/`

A project site is served under a sub-path, so `astro.config.mjs` sets `base: "/crypto-coma/"`
(and `site: "https://ink-shtil.github.io"`). All internal links go through `withBase()` /
`path()` in `site/src/i18n/utils.ts`; assets via `Figure.astro` and the archive's `/cache/`
links are wrapped the same way. The root redirect target in `astro.config.mjs` includes the
base explicitly (Astro does not prefix `base` onto redirect *values*). The Pages artifact
deploy does not run Jekyll, so `dist/_astro/` (underscore-prefixed) is served fine — no
`.nojekyll` needed.

> **Custom domain later?** Set `base` back to `"/"` in `astro.config.mjs`, add a
> `site/public/CNAME` file with the domain, point DNS at GitHub Pages — the `deploy` job is
> unchanged.

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
