
<!-- BACKLOG.MD MCP GUIDELINES START -->

<CRITICAL_INSTRUCTION>

## BACKLOG WORKFLOW INSTRUCTIONS

This project uses Backlog.md MCP for all task and project management activities.

**CRITICAL GUIDANCE**

- If your client supports MCP resources, read `backlog://workflow/overview` to understand when and how to use Backlog for this project.
- If your client only supports tools or the above request fails, call `backlog.get_backlog_instructions()` to load the tool-oriented overview. Use the `instruction` selector when you need `task-creation`, `task-execution`, or `task-finalization`.

- **First time working here?** Read the overview resource IMMEDIATELY to learn the workflow
- **Already familiar?** You should have the overview cached ("## Backlog.md Overview (MCP)")
- **When to read it**: BEFORE creating tasks, or when you're unsure whether to track work

These guides cover:
- Decision framework for when to create tasks
- Search-first workflow to avoid duplicates
- Links to detailed guides for task creation, execution, and finalization
- MCP tools reference

You MUST read the overview resource to understand the complete workflow. The information is NOT summarized here.

</CRITICAL_INSTRUCTION>

<!-- BACKLOG.MD MCP GUIDELINES END -->

## QA gate — run checks before finishing any task

Before reporting a task as done, run every check that applies to what you changed.
If any check fails, fix the problem and re-run it until it passes. Never claim a task
is finished while a check is failing or was skipped.

### Site (`site/`)

```bash
cd site && npm run check:i18n   # i18n structure: keys, locales, translations
cd site && npx astro check       # type-checks .astro and .ts files
cd site && npm run build         # full production build
```

### Lockfile must use the public npm registry

The local machine resolves npm through a private corporate Nexus
(`nexus.yc.alfaleasing.ru`) that remote CI cannot reach. Any `npm install` /
`npm update` run locally writes those Nexus URLs into `site/package-lock.json`,
and CI then fails with `ENOTFOUND nexus.yc.alfaleasing.ru`.

After touching dependencies (or whenever `site/package-lock.json` changed), run:

```bash
grep -c nexus site/package-lock.json   # must print 0
# if not, rewrite the URLs to the public registry (integrity hashes stay valid):
sed -i '' 's#https://nexus.yc.alfaleasing.ru/repository/npm.org-proxy/#https://registry.npmjs.org/#g' site/package-lock.json
```

Never commit a lockfile that contains a Nexus URL. Do not add an `.npmrc` that
points the registry away from Nexus: locally npm still needs Nexus, and it
swaps `registry.npmjs.org` for the configured registry on its own.

### Python library (`pylib/`)

```bash
cd pylib && ruff check .
cd pylib && python -m pytest -q
```

### Paper (`paper/`)

```bash
cd paper && latexmk -pdf main.tex   # only if you touched the paper
```

### Minimal gate for trivial edits (docs, copy, i18n strings)

Even for small edits, at minimum run the relevant structure check
(`npm run check:i18n` after touching `site/src/i18n/*`) and confirm the edited
files are syntactically valid (e.g. TypeScript parses, no stray characters
like double commas).
