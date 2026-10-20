# Repository instructions for AI coding agents
Read **[AI_SITE_RULES.md](AI_SITE_RULES.md)**, **[IVYBRIDGE_WEBSITE_PLAYBOOK.md](IVYBRIDGE_WEBSITE_PLAYBOOK.md)**, and **[ADMISSIONS_DATA_GUIDE.md](ADMISSIONS_DATA_GUIDE.md)** before editing any page, source file or school data. These files are the owner-approved style, content, product, data and safety contracts.

## Required workflow
- Inspect existing site / latest main and active PR before modifying. Do not overwrite functional layouts, data, forms or translations.
- Work on a feature branch. Open/update a pull request and obtain Vercel Preview and user review; **NEVER merge or push directly to main without explicit user approval.**
- Keep Chinese and English pages consistent and preserve working links, section anchors, service plan query parameters, responsive layout and accessibility.
- Honor exact US$2,500 / US$4,800 / US$9,800 package terms; never show price on the homepage. Elite includes at most 12 U.S. programs, +$1,000 each beyond 12; non-U.S. programs priced separately.
- Do not fabricate results, testimonials, immigration advice, employment, salary or student acceptance statistics. IvyBridge 85% is UNVERIFIED until documented; label prominently or omit.
- Graduate admission dataset: `public/assets/admissions-data.js`. Update only with sourced program, year, percentage and data quality. Missing rate = null.
- Existing contact forms only prepare/download data; do not pretend they submit or book.
- Run static link/anchor, JavaScript, and UI interaction checks; report what was and was NOT actually tested.

Treat `AI_SITE_RULES.md` as authoritative for business facts and `IVYBRIDGE_WEBSITE_PLAYBOOK.md` for implementation, design and editorial patterns. Ask the owner when standards conflict.
