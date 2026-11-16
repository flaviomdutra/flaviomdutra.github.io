# Personal portfolio and journal

An Astro site prepared for GitHub Pages. All personal details and project
descriptions are placeholders: replace them with your own before publishing.

## Development

Requires Node.js 22.23.4 or later. Run `npm ci`, then `npm run dev`. Run
`npm run build` to create the static site.

Edit the home page in `src/pages/index.astro`, the shared navigation in
`src/layouts/Layout.astro`, and the journal in `src/pages/blog/`. Blog listings,
the three recent articles on each home page, article tags, and the RSS feed are
generated from Markdown frontmatter.

To publish a blog post, add matching Markdown files to `src/pages/blog/` and
`src/pages/en/blog/`. Include `listingTitle`, `summary`, `category`, `pubDate`,
and `tags` in each file's frontmatter. The filename becomes the URL slug. The
blog pages, home highlights, and RSS feed update automatically during the build.
Add your email address if desired and replace the example project descriptions
with your real projects.

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
when adding a page or blog post. The switch assumes that a matching route exists
in the other language.
