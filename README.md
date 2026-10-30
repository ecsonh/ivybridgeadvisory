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

There is no CMS or database in this version. New articles can be added as HTML pages and linked from the further-reading section of study-guide.html. An editorial CMS or static content generator can be introduced separately.

## Vercel Web Analytics

All Chinese and English HTML pages include the standard static HTML queue and deferred `/_vercel/insights/script.js` script. No npm or framework build is required. Enable Web Analytics for this project in the Vercel dashboard before deployment. After deployment, visit a page without a content blocker and check the Analytics dashboard. This change adds page-view analytics only; it does not add custom form events or record form fields.

## Service plans and custom requests

- Edit `data/plans.json` for the authoritative USD prices, additional-program fees and bilingual deliverables. Run `python3 scripts/render-plans.py`, review the resulting HTML changes, then commit both data and generated markup. Homepage summaries intentionally omit prices. Service pages include prices and responsibilities. The generated markers preserve the surrounding layout.
- `custom-services.html` and `en/custom-services.html` let visitors select services, describe their needs and prepare, copy or download a plain-text summary. There is no network submission, automatic email or booking confirmation. No draft is persisted in local storage. Contact details are optional.
- Package links preselect the matching service in the consultation questionnaire. Package 1 is applicant-operated; packages 2/3 include form preparation and submission coordination, subject to the applicant's required personal confirmations. Package 3 includes visa form/document assistance.
- New requests use `assets/service-requests.js`; category previews and English scenario filters use `assets/site-structure.js`.

## Content architecture and remaining launch dependencies

Home, the independent Master’s Guide, Services, unified Study Guide, Cases, About and Contact remain addressable pages; custom services is a secondary service route. Why USA and Insights are legacy redirects to the unified guide. Homepages feature a manually scrollable case-category preview, not a live results feed. Existing Chinese cases and the new English scenarios remain explicitly illustrative.

Before enabling real inquiries, provide a verified receiving email or approved form endpoint, official LINE/WeChat details and booking link. A live admissions feed needs verified results and publication consent. Founder/team biographies and any staffing or outcome claims require brand verification. No verified contact destination or factual client results have been invented. The broader English site still uses separate HTML page shells; only the service-plan content is generated from a shared bilingual source in this update.

## Approved unified study guide

`study-guide.html` and `/en/study-guide.html` combine the old guide and explorer into four short chapters with on-demand tools. `study-basics.html` retains longer study/life reading. `us-masters-guide.html` remains an independent primary-menu page with its original content and layout; it is NOT part of the merge. Old guide/explorer paths redirect to the hub; query strings and supported fragments remain usable. See [review notes](docs/UNIFIED_STUDY_GUIDE_REVIEW.md).

## Future design changes

Read [AGENTS.md](AGENTS.md), [AI_SITE_RULES.md](AI_SITE_RULES.md), [IVYBRIDGE_WEBSITE_PLAYBOOK.md](IVYBRIDGE_WEBSITE_PLAYBOOK.md) and the [approved guide design contract](docs/STUDY_GUIDE_DESIGN_CONTRACT.md) before editing. Preserve the navy banner, shared sidebar, restrained palette, readable responsive layout and independent Master’s Guide. Work on a feature branch and obtain owner approval before merging; do not treat deployment as permission to remove launch disclosures or enable forms.
