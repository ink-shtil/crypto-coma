
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
