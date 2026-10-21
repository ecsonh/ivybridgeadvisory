# IvyBridge Case Library — Updating Real Student Outcomes

**Source of truth:** `public/assets/case-studies-data.js` (shared by `cases.html`, `all-cases.html` and `case.html?id=...` in both Chinese and English).

## Current release-safe state
Six challenge-led records are illustrative scenarios ONLY:
`low-gpa`, `no-internship`, `low-test`, `no-work`, `career-switch`, `ordinary-school`.
They **do not contain actual admissions, students, GPA values, TOEFL scores or university offers**. UI displays the explicit 'awaiting verified data' placeholder.

## Replacing a scenario with a verified student case
1. Obtain permission to publish the applicant's anonymized story and result. Store private evidence outside GitHub, not in the public repository.
2. Validate each admitted university **and exact master's program** against evidence, and confirm the intake/year where available.
3. Edit the matching record in `public/assets/case-studies-data.js`. Keep a stable unique `id` because the detail URL uses it.
4. Set `status: "verified"` and `consentConfirmed: true` **only after** both evidence and permission are documented. Add `admittedPrograms: [{school:"...",program:"..."}]`. Otherwise leave the array empty and status `illustrative`.
5. Fill truthful bilingual `zh` and `en` values for `tag,title,background,challenge,strategy,steps,advice`. Avoid promising future applicants the same result.
6. Confirm the card, library page and `case.html?id=<id>` all show the same verified result and translated text. Check filters, URLs and mobile layouts.

## Design constraints
- The top page uses six featured cards (2 highlighted + 6 browsable) and links to the full directory.
- Challenge tags: low GPA, no internship, weaker English score, no professional work history, changing fields, less-known undergraduate institution.
- Use navy/white/off-white with muted gold tags. Avoid aggressive multicolor gradients or unverifiable admission-rate badges.
- **HOW WE THINK stays intact.** Do not alter the four-step philosophy without owner permission.
- Shared banner design is in `public/assets/fixes.css`, class `ib-site-banner`.
- Rendering logic belongs in `public/assets/case-studies.js`. Avoid hardcoding distinct results in multiple HTML pages.
- English and Traditional Chinese pages must remain structurally matched. Do not merge to `main` without explicit owner approval.

## Checks before owner review
Confirm one H1 and one hero per route, 12 routes per language (including two case-library routes), valid links and in-page anchors, language switching retaining case ID, no duplicated sidebars, and functional card/detail/filter flows. Vercel Ready does not replace real browser QA.
