# Approved study guide design contract

Approved by the owner for merge on 2026-10-30, based on PR #13, UI commit `4af382c058140634ad1ba40776e040eee8eea2d9`.

Read this with [AI_SITE_RULES.md](../AI_SITE_RULES.md) and [IVYBRIDGE_WEBSITE_PLAYBOOK.md](../IVYBRIDGE_WEBSITE_PLAYBOOK.md). This records the approved guide layout, not permission to restyle unrelated pages. Later explicit owner instructions take precedence.

## Exact scope and routes

- Only **美國留學指南 (`why-us.html`)** and **留學探索中心 (`insights.html`)** merge into **留學指南 (`study-guide.html`)**. English counterparts live under `/en/`.
- **美國留學須知 (`us-masters-guide.html`) stays an independent primary-menu page.** Preserve the existing content, layout, CSS includes, scripts and behavior in both languages; do not rewrite it as part of guide/explorer work. Synchronizing shared navigation is permitted when requested.
- `study-basics.html` holds the former study/life article. `why-us.html` and `insights.html` remain legacy redirects to the unified guide, retaining query strings and supported fragments. Never redirect the independent master's guide to the hub.
- Chinese primary navigation: **美國留學須知 → 服務一覽 → 留學指南 → 成功案例牆 → 關於我們**. Contact stays a separate CTA; the logo links home. Keep the merged guide immediately before cases in English and mobile navigation too.

## Approved top-to-bottom order

1. Existing full-width navy banner, outside the sidebar/content grid: **美國碩士，從規劃到申請。** and a short introduction. Keep the existing eyebrow, spacing and type hierarchy.
2. Program-fit overview (`#program-fit`) immediately beneath the banner. Headline: **不只看排名，更要看碩士項目是否適合你。**
3. Four equal overview cards: **研究與課程深度 / 實習與職涯機會 / 跨領域與學程彈性 / 國際生與生活支援**. Two columns on desktop, one on mobile. Muted-gold category labels, navy headings, concise slate descriptions and a single contextual text link per card. The card body is not a link. These are dimensions of program fit, not service packages or pricing tiers.
4. Four planning chapters: **認識碩士 → 選校與職涯 → 費用預算 → 申請準備**.
5. Published deeper-reading links.
6. Applicant stories CTA, followed by consultation. Do not add a separate competing booking form to the guide.

Keep idiomatic equivalent English content and the same order, links and interaction model.

## Visual invariants

- Navy `#112E4A`, white/off-white, slate text and restrained gold `#C5A880` / `#D7B77D`. No new palette, colored card categories, neon, heavy shadows or unsolicited redesign.
- Keep the banner full width and above the shared sidebar shell. Do not squeeze it into a content column, replace it with a white hero or hide the sidebar.
- Retain the sidebar category structure. The hub has five short entries: **選校四個面向 → 認識碩士 → 選校與職涯 → 費用預算 → 申請準備**. Sticky on desktop; collapsed native details on smaller screens; active state and visible keyboard focus.
- Overview heading: existing responsive 26–35 px scale; card headings around 20 px; body around 16–17 px with comfortable line-height. Reuse the current CSS, not arbitrary font overrides. Protect Chinese glyph coverage when changing copy.
- Contained, equal-width cards with light 1 px borders, roughly 12 px corners and 20 px desktop gaps. Use readable mobile spacing; no page-wide horizontal overflow.
- Existing spacing, header/footer, logos and typography outside this guide are not part of this design change.

## Shared implementation and stable anchors

| Responsibility | File |
| --- | --- |
| Chinese / English guide markup | `public/study-guide.html`, `public/en/study-guide.html` |
| Guide-specific styles | `public/assets/study-guide.css` |
| Shared sidebar and active chapter state | `public/assets/site-structure.js` |
| Tool expansion, legacy hashes and career field/region behavior | `public/assets/study-guide.js` |
| Language page/query/fragment preservation | `public/assets/language.js` |
| School lookup / sourced dataset | `public/assets/school-explorer.js`, `public/assets/admissions-data.js` |
| Legacy redirects | `vercel.json`, `public/assets/guide-redirect.js` |

- Shared chapter IDs: `program-fit`, `guide-start`, `guide-schools`, `guide-budget`, `guide-application`.
- Tool IDs: `school-tool`, `career-tool`, `budget-tool`, `timeline-tool`, `departure-tool`. Preserve supporting legacy IDs or migrate them explicitly.
- Tools are native accessible details, closed on a fresh visit. Opening one tool closes other top-level tools. A direct hash or language switch must reveal the corresponding tool and scroll to a valid target.
- Only tool summaries/buttons and actual links trigger actions. Do not make whole overview cards navigate. Do not add an extra top-level tab bar or another sidebar implementation.
- Preserve 50 curated schools, STEM/Business choices, source/program/year/null states, budget assumptions, career employer examples and existing timelines. Do not manufacture missing data or new eligibility claims.
- Language switching preserves queries and supported sections/tool state. Existing `?plan=...` and service hashes remain intact elsewhere.

## Required checks for future changes

- Review latest main and the designated active branch before editing; avoid unrelated changes. Start with the smallest change that fulfills the request. Ask about actual conflicts, not routine implementation choices already authorized.
- Check all checked-in HTML routes in both languages for navigation consistency, broken local URLs/fragments and duplicate IDs. Do not hard-code an outdated route count.
- Test overview contextual links, mobile navigation/Escape, sidebar, new and legacy hashes, keyboard tool expansion, one-open-tool behavior, school/source/null states, budget and timeline controls, language/query preservation and unchanged form semantics.
- Check 375, 768 and 1440 px layouts; inspect screenshots for typography, hierarchy, overflow and banner/sidebar preservation. Static checks alone do not establish visual quality.
- Any independent master's guide change must be explicitly requested. For a merge of the other two pages, compare the independent page outside shared navigation against the approved base.
- Use a feature branch and PR. Merge only after explicit owner approval; a styling approval does not remove noindex, verify outcomes or enable form transport. Report Preview/Production status and any live verification limitation accurately.

## Paired reading backgrounds (owner-requested refinement)

On `study-guide.html` and `us-masters-guide.html`, in both languages, alternate the existing reading sections **two at a time**: two white sections, then two soft off-white sections (`#F4F7FA`), repeating. Use a quiet 64 px vertical fade at pair boundaries, not a separate accent color for every section. Overview counts as a reading section; nested tools/cards do not. Keep banners, chapter sidebars and closing CTAs outside these background groups. `assets/reading-bands.css` owns this scoped treatment; it must not change text, heading scale, content order or interactive behavior. The shorter existing English master's guide has only one reading section, so it remains the first white group; do not invent or split content just to force more colored bands.
