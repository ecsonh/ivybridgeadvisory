# Unified study guide — review notes

Branch: `feat/unified-study-guide`. Base: `59abd3cc139e7ecc7ab2c70f718d23ae2c5c1f32`.

## Scope

- One top-level **留學指南 / Study Guide** entry immediately before Success Stories. Only the former `why-us.html` guide and `insights.html` explorer are combined. **美國留學須知 / Master's Guide (`us-masters-guide.html`) remains a separate primary navigation item.**
- New `study-guide.html` and `/en/study-guide.html`: four chapters — understand master's study; programs and careers; budget and costs; application preparation.
- First screen: consistent navy banner, one headline and one short introduction. Shared chapter navigation handles the four stages; it collapses on mobile.
- Tools are native accessible disclosures, closed by default. Opening a tool closes other tool panels. Detailed program lookup, career examples, budget calculations and timeline behavior are preserved. Query strings, legacy links and current tool/section survive language switching.
- The original content, layout and behavior of both `us-masters-guide.html` language versions are restored from the PR base; only their shared menu is synchronized. Study/life detail from the two merged pages remains at `study-basics.html`.
- Old `why-us.html` / `insights.html` URLs redirect to the hub in both languages. Vercel uses permanent redirects; local/static files also have a client redirect and a visible fallback link. Existing query strings and fragments are retained. The hub opens a requested tool for deep links.
- Existing school list and sourced admissions data are untouched. No new outcome, salary or immigration eligibility claims. Contact/custom forms remain local preparation/downloads.
- Success Stories then Consultation are the final actions. Prices and service deliverables are untouched.

## File map

- `public/study-guide.html`, `public/en/study-guide.html`: chapter content and preserved tools.
- `public/study-basics.html`, `public/en/study-basics.html`: preserved long-form study/life article.
- `public/assets/study-guide.css`, `study-guide.js`: hub layout, single-open tools, legacy hash handling and bilingual career explorer.
- `public/assets/site-structure.js`: same shared sidebar, limited to the hub's four stages.
- `public/assets/language.js`: shared new chapter/tool IDs and updated in-page language targets.
- `public/assets/guide-redirect.js`, `vercel.json`, four legacy HTML files: redirects with local fallback.
- Other HTML files: header simplification and migrated references to the new hub.
- `public/us-masters-guide.html`, `public/en/us-masters-guide.html`: original pages preserved; shared navigation changes only.
- Bundled Chinese font: expanded for the new copy, retaining existing glyphs and license.

## Review focus

1. Does the four-stage order feel natural?
2. Is the first screen calm enough, including the chapter sidebar on desktop?
3. Do collapsed tools make the page easier to scan?
4. Does the final handoff to stories and consultation feel appropriate?

No merge to main or production release is included in this branch.

## Validation performed before push

- Static checks across all 28 HTML routes: internal files and fragments resolve; no duplicate IDs; all site Chinese text is covered by the bundled font. JavaScript syntax and Git whitespace checks pass.
- Chromium UI checks in both languages: four chapters, one shared sidebar, tools initially closed, keyboard opening, one tool open at a time, 50 university options, source/year display, missing-rate handling, Business/MBA caveat, career role/employer/region updates, budget changes and timeline opening.
- Legacy local-page redirects, deep-link expansion and language switching preserve the tool or chapter. Vercel's HTTP redirects are configured but need verification against Preview.
- Responsive UI checks at 375, 768 and 1440 px; all 24 non-redirect content pages also checked for header order and mobile overflow. Screenshot review of desktop/mobile entry and expanded school tool.
- Regression checks: service plan/query language preservation, local consultation downloads, case-detail navigation and mobile menu/Escape.
- No receiving/email/calendar integrations were added. Server-side submission cannot be tested because it remains intentionally unconfigured.
