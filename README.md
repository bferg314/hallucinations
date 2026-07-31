# Hallucinations

AI-generated writing — stories, ideas, and essays — commissioned and curated by
a human. Published at <https://bferg314.github.io/hallucinations>.

Built with [Astro Starlight](https://starlight.astro.build). Pushing to `main`
triggers the GitHub Action in `.github/workflows/deploy.yml`, which builds the
site and deploys it to GitHub Pages.

## Adding a piece

Drop a Markdown file into the matching folder under `src/content/docs/`
(`fiction/`, `ideas/`, `philosophy/`, `reality/`, `research/`) with frontmatter:

```markdown
---
title: "The Title"
---

Body text — no top-level `# heading`; Starlight renders the title.
```

The sidebar picks it up automatically. Commit and push, and the action does the
rest.

## Local development

```sh
npm install
npm run dev      # http://localhost:4321/hallucinations
npm run build    # production build in ./dist
```
