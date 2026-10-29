# IvyBridge Advisory — Website Source of Truth (AI SITE RULES)
Last reviewed: 2026-10-20. **Read this entire document before modifying the website.**

## 1. Scope, review and deployment
- The repository's `main` is production. **Never push to main or merge a pull request without the owner's explicit approval.**
- Start from the latest `main` (or explicitly designated active PR branch), create/reuse a feature branch, inspect existing files and preserve functionality. Use a pull request and Vercel Preview for owner approval.
- Do not replace pages wholesale to solve a small issue. Preserve checked-in data, assets, SEO, scripts, animations and accessibility.
- Check Git status/history and compare branch diffs; changes must be reversible. Avoid force-push.
- After changes: check all 10 Chinese + 10 English HTML routes and internal anchors, navigation, page-specific buttons, form validation, language state, mobile, and preview deployment. Distinguish static analysis from actual browser testing. Never claim live end-to-end tests without running them.
- Avoid adding new dependencies or frameworks for basic interactions.

## 2. Brand, visual system, tone
- Brand name **IvyBridge Advisory** / IvyBridge 領航留學. Positioning: premium, transparent, personalized U.S. master's admissions consulting; not a visa law firm, guaranteed-admission agency or STEM-only service.
- Primary audience: international/Asian U.S. undergraduates; secondary: Taiwan-based applicants. All majors permitted. Career-driven and Top 30 admissions are specialties, not the entire brand.
- Visual identity: navy #112E4A (or site's existing navy tokens), off-white/white, slate gray, restrained muted gold #C5A880/#D7B77D. No saturated multi-colored cards, neon gradients, excessive shadows or generic AI-template look.
- Elegant hierarchy, smaller readable headings, generous but controlled whitespace, clear conversion CTAs. Responsive grids must stack gracefully. Maintain consistent nav, footer and side table-of-contents.
- Use concise Traditional Chinese for zh pages, natural professional English on /en pages. Do not invent social proof, adviser qualifications or performance metrics.

## 3. Non-negotiable product terms (approved)
Website homepage highlights plans **without displaying package prices**. Details and USD prices belong to Services.
- Essential 基礎申請指導: **US$2,500**; 3 master's program applications/essay support; +US$500 for each additional U.S. program; background review, school-selection suggestions, 1 mock interview. Student completes and submits application forms.
- Comprehensive 全程申請顧問: **US$4,800**; 5 master's program applications/essay support; +US$700 for each additional U.S. program; background review, school selection, 1 mock interview, advisor assistance preparing and filling forms.
- Elite 尊榮菁英全案: **US$9,800**; up to **12 U.S. master's programs**; each U.S. program beyond 12 is **+US$1,000**. Applications outside the U.S. are **quoted separately** and do not consume the U.S. quota. Background and school review, essays, 3 mock interviews, form completion support, and general visa application form/document preparation guidance.
- One program means one discrete degree/program application; two at the same university count separately.
- Applicants supply accurate data, review and authorize content, and personally complete legally required attestations, payments and identity verification. No illegal visa representation and no guarantee of admit, visa or employment.
- Scope of essay revision rounds, adviser response times, refund terms and delivery deadlines is contractual; do not invent.
- Modular/custom services offered separately with quote request, not a fourth fully-priced plan.
- If any existing page uses contradictory wording, flag and align after approval; avoid unrequested pricing changes.

## 4. Navigation, architecture and interaction

**Owner-approved update (2026-10-29):** the unified `/study-guide.html` (and `/en/study-guide.html`) supersedes separate top-level guide/explorer entries. Use **留學指南 / Study Guide** immediately before Success Stories. The four-stage order and optional tools below replace the older Explorer ordering. Keep `/us-masters-guide.html` as deeper reading and `/study-basics.html` for study/life detail; legacy `/why-us.html` and `/insights.html` redirect to the hub, preserving queries and supported hashes.
- Chinese routes: /index.html, /ivybridge.html (legacy alias), /services.html, /why-us.html, /cases.html, /insights.html, /about.html, /contact.html, /custom-services.html, /us-masters-guide.html. English analogues under /en/.
- Navigation term: **留學指南 / Study Guide** for study-guide.html. Do not restore the old guide/explorer items as separate primary navigation entries.
- Preserve `?plan=essential|comprehensive|elite|custom` when switching language; `services.html#essential|comprehensive|elite` must land on the matching plan. Keep valid fragment/anchor translation in `public/assets/language.js`.
- Shared section navigation is implemented in `public/assets/site-structure.js`; do not duplicate 20 different TOC implementations. Ensure it does not cover CTAs or cause layout overflow. Accessible keyboard interactions and aria-current on active section are required.
- On mobile, the TOC must collapse or become horizontally scrollable. Respect reduced-motion setting.
- Do not replace functional interaction with decorative fake buttons or claim forms send data when they only download locally.
- **The consultation and custom forms are currently local-only preparation/downloads**. A verified receiving integration, contact address, availability, privacy terms and explicit owner consent are required to enable sending.
- Preview pages use noindex: don't remove until the owner approves public launch.

## 5. Unified Study Guide: page sequence
- Four concise chapters: **認識碩士 → 選校與職涯 → 費用預算 → 申請準備** (Understand study → Programs & careers → Budget → Preparation).
- Consistent banner before the shared chapter navigation; one short introduction, no immediately expanded calculators or data tables.
- School and career tools live under chapter 2, budget under chapter 3, timeline and post-offer/departure preparation under chapter 4. Close tools by default and preserve accessible deep links.
- Keep the original 50-school selector, STEM/Business distinction, source/year/null display, career employer examples and calculator assumptions. Never invent data.
- Longer introduction and study/life explanations are linked as deeper reading, not duplicated in full on the hub. Only published reading resources are clickable.
- End with Success Stories then Consultation. No second competing chapter navigation.

## 6. Rates, sources and truthfulness
- `public/assets/admissions-data.js` is the only published source for graduate program rates. Each non-null rate must include **school, field, exact program, year, percentage, source URL, quality** and relevant caveats. See `ADMISSIONS_DATA_GUIDE.md`.
- Never substitute undergraduate, PhD, university-wide graduate, enrollment yield, or enrolled students / applicants for program admission rates. MBA only means that MBA program, NOT MSBA/Finance.
- Third-party figures must say **third-party report** and clearly identify year/program. Prefer primary university sources.
- Unknown data is `null`; UI displays unavailable, not “0%” or fabricated “approximately N%”. Allow later manual edits.
- IvyBridge “85%” is a **user-provided, unverified draft figure** pending sample size, period, outcome definition and supporting records. It may appear only with a prominent “unverified / 待核實” label, NEVER as confirmed performance or a side-by-side apples-to-apples comparison with school rates. Remove public numeric claim if verification is not provided before formal release.
- Success stories, testimonials, Ivy League mentor affiliations and acceptance-rate claims require evidence, release/permission and editorial review. Keep illustrative stories explicitly marked. No invented 24-hour callback guarantees.

## 7. Content / legal / quality
- OPT/CPT/STEM OPT and visas are eligibility-dependent; link to USCIS/Study in the States and state that a DSO/qualified professional should review individual situations. Avoid claims of guaranteed 36-month eligibility, permanent work rights or guaranteed returns.
- School pricing and salary tools are estimates with assumptions, year and sources; do not imply live market rates when static. No unconditional ROI guarantees.
- Articles not yet published should not look clickable. Replace unsupported statistical claims with sourced/factual language.
- For every new content block, add equivalent content in both languages; verify heading structure, color contrast, mobile, accessibility, page links, data origin and privacy implications.

## 8. Final QA checklist (must be reported honestly)
- [ ] No unintended diff; no unapproved changes to the price matrix or school lists
- [ ] Bilingual navigation and all internal links / hash anchors verified
- [ ] Form preselection and local-only disclosure correct
- [ ] School dropdown loads exactly 50 and switches STEM/Business data, source/year, null behavior
- [ ] Career job/company examples update by major; no obsolete company dropdown
- [ ] TOC links work on each page and remain usable on mobile
- [ ] Build/static syntax checks pass; browser E2E tested when available
- [ ] Vercel preview deployed; owner reviewed; merge only after explicit approval

**Owner approval always overrides assistant assumptions; when unclear, ask rather than silently inventing policy.**
