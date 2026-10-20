# IvyBridge Advisory · Success Stories + About Us Redesign Specification
**Status:** Owner-approved design direction / implementation plan only  
**Date:** 2026-10-20  
**Base:** `main` at `18f66d9b17d7e1f0b9e6f67a8885c0fe2a8cc070`  
**Implementation:** not yet performed. Do not merge this spec branch into `main` without explicit approval.

> Read `AGENTS.md`, `AI_SITE_RULES.md`, `IVYBRIDGE_WEBSITE_PLAYBOOK.md` before editing code. The current approved direction is **Success Stories = selected stories + case-study directory**, **About Us = founder story + advisor profiles + Why IvyBridge**. Preserve the site's existing nav, white/navy/muted-gold palette, Chinese/English counterparts, and one left-side chapter TOC per page.

## 0. Audit snapshot and constraints

| Existing asset | Finding | Preserve / correct |
|---|---|---|
| `public/cases.html` | Six highly specific result cards, GPA/scholarship/degree details; current title says genuine/proven success | Preserve useful filtering UX, **do not assert outcomes unless owner verifies evidence & authorization** |
| `public/assets/app.js` | Existing case card filters and modal case-details behavior | Preserve working behaviors, replace hardcoded unverified results with approved data/schema; test every filter and modal |
| `public/en/cases.html` | Smaller, less detailed placeholder page than Chinese version | Build bilingual structural parity and equivalent disclosure |
| `public/about.html` | Mission statement + abstract front/back dual-team architecture, unsupported-sounding staffing promises | Replace main narrative with people, verifiable qualifications and explainable service workflow; no invented advisors |
| `public/en/about.html` | Much shorter content | Match Chinese section hierarchy and functional behavior |
| `public/assets/site-structure.js`, `language.js` | Shared chapter sidebar + language switch | Reuse. Never inject a second TOC or break `?plan=` / hash preservation |
| `public/assets/fixes.css` | Shared cumulative styles | Scope new component classes; remove obsolete page-specific rules only after verifying all routes |

**Important:** Existing `1:5` advisor ratio, 24-hour replies, alumni networks, scholarships, admission results or team size are **not approved factual claims** without owner evidence. Do not repurpose them as proof points. No stock portraits passed off as actual IvyBridge people. If information is missing, use obvious editorial placeholders / "資料準備中" and hide outcome sections from public publication.

## 1. Global design system: must stay consistent

- High-trust premium admissions consultancy, not flashy SaaS dashboard. Navy `#112E4A`, clean white, off-white `#F4F7FA`, warm gold `#C5A880` used sparingly.
- Main nav and footer identical to rest of site, site-wide two-language switch, coherent typography and accessible spacing. Retain approved full-width hero/banner followed by reading area with **one left sticky chapter TOC**, not a sidebar placed beside the hero.
- Headlines in an editorial serif; body sans serif; moderate font sizes; controlled whitespace; fine border rules; no overlapping decorations or dense three-column biographies.
- Desktop content: at most two major editorial columns (portrait + story); case directory grid can be 2 or 3 columns depending on density. Tablet/mobiles stack; TOC collapses or becomes compact navigation, no horizontal overflow.
- Keep layouts lightweight: static HTML, shared CSS/JS only; no large UI dependencies, animations or image libraries. All new images must be owner-supplied/licensed and optimized, lazy-loaded below fold, with alt text and explicit aspect ratios.
- CTA contract: one clear primary `contact.html` assessment call-to-action per major page section. No false "booking confirmed" promises; contact form still downloads locally until integrated.

## 2. Success Stories: selected editorial stories + searchable/browsable directory

**Route:** `public/cases.html` and `public/en/cases.html`. Keep existing URLs and nav label `成功案例牆 / Success Stories`.

### Section 1: Full-width editorial banner
- Eyebrow `SUCCESS STORIES`.
- H1 **「每一份錄取背後，都有不同的申請策略。」** / **"Every applicant's path deserves a strategy of its own."**
- Subhead: real background, challenge and decision-making rather than school name/GPA headline.
- Status disclosure close to intro: **"案例僅於完成成果查證及當事人授權後公開。未驗證內容僅作申請情境示範。"** / equivalent English.
- Anchor: `#cases-overview`.

### Section 2: Featured stories (max 2)
- Large staggered two-column editorial layout: contextual image **only if approved**; alongside a story header, applicant background, core challenge, IvyBridge approach, result **only if verified**, "閱讀完整案例" link.
- If there are no consented case files yet, render **two clearly labeled illustrative strategy scenarios**, *without invented admits, GPAs, scholarships, quotes, company placements, or photos*. Treat as examples, not track record.
- Use data statuses `verified`, `illustrative`, `draft`; only `verified` may display real outcomes, and only with signed public-use permission.
- Anchor `#featured-stories`.

### Section 3: Browseable case-study directory
- Keep current filters where meaningful, simplified: academic field (STEM/Business/Humanities), background (U.S. bachelor's/Taiwan bachelor's/career change), no fake GPA-based promises.
- Cards: clear subject label, degree/program title, 1-sentence challenge, 1-sentence strategy and badge `真實案例` or `策略示範`. **Do not** show a mini-resume table of every GPA/TOEFL/GRE/scholarship before click.
- Clicking an existing card opens the accessible detail modal; close via Escape/close button/overlay as appropriate; focus returns to trigger. Same interactions on English version.
- Detailed story order: **背景 → 挑戰 → 策略 → 交付流程 → 成果（only verified）→ 給類似申請者的建議**.
- Empty-filter state and keyboard-friendly controls required.
- Anchor `#case-directory`.

### Section 4: Method over marketing
- Short three-step section: `理解背景 → 定位優勢 → 制定方案`. Link to Services; do not add new packages.
- Anchor `#our-approach`.

### Section 5: CTA
- H2 **「你的背景，也值得被仔細分析。」** CTA to `contact.html`. Do not promise admission outcomes.
- Anchor `#case-consultation`.

**Data model proposal**: separate content from DOM/JS into `public/assets/case-studies-data.js` (or JSON loaded from same origin). Example fields `id, localeText{zh,en}, field, backgroundType, status, challenge, strategy, result?, evidenceReference?, consentConfirmed, image?`. Never populate `result` for illustrative cases. Avoid duplicating datasets by language.

## 3. About Us: founder story + advisor profiles + Why IvyBridge

**Routes:** `public/about.html` and `public/en/about.html`. Keep path, standard header/footer and language switch.

### Section 1: Full-width intro banner
- Eyebrow `ABOUT IVYBRIDGE`.
- H1 **「真正了解美國升學道路的顧問團隊」** / **"People who understand the path to U.S. graduate study."**
- 1–2 sentence positioning: experienced, personal, transparent, program-specific master's support. No unsourced rankings or ratios.
- Anchor `#about-overview`.

### Section 2: Founder story — main visual focal point
- Editorial 45/55 portrait/text split; reserved portrait slot labeled **創辦人照片待提供** (do not use generative/stock portrait for a claimed real founder).
- Fields to fill from owner: full/public name, actual university+degree(s), graduation year (optional), U.S. study background, location, relevant admissions/mentoring experience, why IvyBridge was founded.
- Short first-person mission quote **only once owner approves exact quote**. Avoid saying founder has admissions committee experience or Ivy League degree without proof.
- Optional verified education logotypes only with legitimate usage.
- Anchor `#founder-story`.

### Section 3: Meet the advisors
- 2–4 simple flexible profile cards; fields: approved headshot, name, title, verified institution/degree, subject expertise, years of relevant service (only if verified), languages, location/time zone, advisory role.
- Cards **hidden or marked `團隊資訊更新中` until real profiles supplied**; do not invent people or universities.
- Distinguish actual named advisors, external collaborators and future recruiting positions; never label a role as staffed without evidence.
- Anchor `#advisor-team`.

### Section 4: Why IvyBridge
Four evidence-based differentiators in clean 2x2 lines/cards, maximum:
1. `個人化申請策略` — start with student goals, not generic ranking lists.
2. `透明方案與責任分工` — plan inclusions and applicant tasks documented.
3. `跨領域與職涯視角` — school/curriculum/region suitability, without job guarantees.
4. `持續溝通與進度管理` — explain the real process; no unapproved response-time SLA.
Avoid superlatives and statistics unless verified.
- Anchor `#why-ivybridge`.

### Section 5: How we work
4-step timeline that matches Services: initial assessment → strategy/program shortlist → essay/application planning → review/interview/submission prep. Match package responsibilities: Essential student self-submits; Comprehensive & Elite advisor-assisted applications, with student verification.
- Anchor `#our-process`.

### Section 6: Where we work & who we serve
Short text, not a fake office or map: serving U.S.-based international undergraduates and Taiwan-based applicants via remote consultations; cities or office addresses **only when owner verifies actual presence**. Optional time zone labels can be added when real team provided.
- Anchor `#locations`.

### Section 7: Contact CTA
`認識你的專屬申請策略` → `contact.html` (the form may currently be download-only; avoid claiming it sends).
- Anchor `#about-consultation`.

## 4. Content delivery: inputs required from owner before publishing results or identities

| Data required | Field(s) | Fallback without data |
|---|---|---|
| Founder identity and credentials | Name, authentic photo, degree, school, experience, consent | Clearly marked empty founder layout / non-factual mission paragraph |
| Advisor roster | Name, portrait, verified degree(s), expertise, role, location, approval | Do not show fabricated mentor cards; labeled reserved section |
| Outcome stories | Student consent, school/program, verifiable admission record, honest initial background, case narrative | Illustrative strategy cases only; absolutely no invented acceptance stats |
| Metrics | Numerator/denominator, cohort time window, methodology | Hide statistic or label unmistakably unverified in private preview |
| Office/location | Real service locations/contact channels | Remote consultations only, no fabricated physical branches |

**Do not collect student private records in public repository.** Store only approved anonymized public-safe narratives and references to evidence kept privately.

## 5. Proposed file changes during implementation (not performed yet)

1. `public/cases.html`, `public/en/cases.html` — layout and accessible real/illustrative case displays.
2. `public/about.html`, `public/en/about.html` — bilingual founder/team/advantages design.
3. `public/assets/case-studies-data.js` (new) — approved status-controlled content dataset; consider moving related case code out of `app.js` *only if safely tested*.
4. `public/assets/fixes.css` or `public/assets/editorial-pages.css` (new only if substantial nonduplicated styles justify a separate asset). Avoid CSS collisions.
5. `public/assets/site-structure.js` / `language.js` — edit **only if** necessary for bilingual anchors or double-sidebar issues.
6. `IVYBRIDGE_WEBSITE_PLAYBOOK.md` / `AI_SITE_RULES.md` — update only if new approved standards are established.
7. Optional `public/assets/people/` owner-provided optimized images; never copy paid/uncleared portraits.

## 6. Acceptance criteria: must pass before implementation PR review

- One consistent hero/banner above a single left TOC on each of four modified pages; no duplicate category menus. Mobile TOC collapsed.
- Both locales present equivalent section order/content and switch languages while preserving valid target sections.
- Legacy URLs, global navigation, existing case-filter semantics, contact CTA and other pages unaffected.
- Case filters, card links, details modal, close behavior, focus, keyboard and no-results state tested.
- No invented outcomes, advisor photos, university degrees, response promises, result counts or admissions guarantees.
- Comparison with `main` identifies only intentional changes. Tests: all 10 zh + 10 en pages' links/anchors, responsive widths 375/768/1440, no console error, no broken photos.
- Real Vercel Preview interaction tests are required and must be described honestly; GitHub deployment success alone is **not** E2E QA.
- Implementation is on a feature branch and available as a PR. **Never merge to `main` without owner approval.**

## 7. Build stages

- **Stage 1**: approve this spec and request/confirm any authentic founder/advisor information.
- **Stage 2**: implement shared editorial components, case dataset and bilingual page templates on this branch or a new derived feature branch.
- **Stage 3**: static checks, responsive visual and interaction checks, preview validation, then owner review.
- **Stage 4**: revisions on the PR; merge only after explicit approval.

**Success condition:** A premium editorial case-study experience and a credible human-centered About page, with transparent sourcing and all existing site interactions preserved.
