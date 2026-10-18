# IvyBridge Advisory

Static multi-page website. Hosting configuration: Vercel, output directory `public`, no framework and no build command.

## Edit

- Pages: `public/*.html`
- Shared styles: `public/assets/fixes.css`
- Shared behavior: `public/assets/app.js`
- Fonts and licenses: `public/assets/`

Run locally with `python3 -m http.server 3000 --directory public`.

## Deployment

Import this repository into Vercel. Select Other for the framework, leave the build command empty, and set Output Directory to `public`. Connect the repository for automatic deployments. Use pull requests for preview deployments and merge to the configured production branch for production.

Intended primary domain: `www.ivybridgeadvisory.org`. Add both the www and apex domains in Vercel, then use the exact project-specific DNS values Vercel supplies in GoDaddy. Do not replace unrelated email or verification records.

## Publication status

Site content is still a preview: noindex remains enabled, sample cases and brand claims require verification, and the contact form downloads data locally rather than submitting it. LINE and booking integrations require real account details. Do not remove these notices before completing the production review.

## Blog

There is no CMS or database in this version. New articles can be added as HTML pages and linked from insights.html. An editorial CMS or static content generator can be introduced separately.
