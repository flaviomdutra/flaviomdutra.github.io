# Personal portfolio and journal

An Astro site prepared for GitHub Pages. All personal details and project
descriptions are placeholders: replace them with your own before publishing.

## Development

Requires Node.js 22.23.4 or later. Run `npm ci`, then `npm run dev`. Run
`npm run build` to create the static site.

Edit the home page in `src/pages/index.astro`, the shared navigation in
`src/layouts/Layout.astro`, and the journal in `src/pages/blog/`. Update the RSS
entries in `src/pages/rss.xml.js` when publishing articles. Add your email
address if desired and replace the example project descriptions with your real
projects.

## GitHub Pages

Create a GitHub repository named `flaviomdutra.github.io` under the
`flaviomdutra` account and push to its `main` branch. In repository settings,
select **Pages → Build and deployment → GitHub Actions**. The workflow builds
and deploys automatically; it supports both user sites and project repositories.
For a custom domain, update `SITE_URL` in the workflow and configure the domain
in GitHub Pages.

## Languages

Portuguese is the default language; English pages live under `/en/`. The
language switch links equivalent pages, so add matching routes in both languages
when adding a page or blog post, and update both blog listings. The switch
assumes that a matching route exists in the other language.
