# Graduate Admissions Rate Data — Manual Completion Guide

Data file to edit: **`public/assets/admissions-data.js`**
UI reader: `public/assets/school-explorer.js`
Last research pass: 2026-10-20.

## Data format
Each school has `stem` and `business` properties. A missing figure is `null`.
Valid example:

```js
"Example University": {
  "stem": { "rate": 21.5, "program": "MS Computer Science", "year": 2025,
    "source": "https://official.edu/graduate/admissions/statistics",
    "quality": "official", "note": "Full-time applicants only." },
  "business": null
}
```

- `rate` is a **number from 0 to 100** (NOT the string "21.5%").
- `program` must identify the exact master's program, e.g. MS CS, MSIM Residential or Full-time MBA.
- `year` is the admission cycle; use the source's definition of class year when necessary.
- `source` must directly substantiate admitted/applicant figures or published rate; do not paste a homepage or general undergraduate report.
- `quality`: `official` = school publishes rate; `official-calculated` = admitted/applicants from school source; `secondary` = reliable third-party sourced program rate. Add notes.
- Business MBA rates are not transferable to MSBA, MFin or other graduate degrees. STEM program rates cannot represent STEM generally. Do not add guesses to fill blanks.
- After updating a record, test both language versions of the Explorer and preserve the 50-school list.
- IvyBridge's claimed 85% must be independently validated, including numerator, denominator, period and outcome definition. It is NOT part of the school dataset.

## Research sources already used
- Stanford MS Management Science & Engineering (2025): https://msande.stanford.edu/academics-admissions/graduate/admission/ms-admission-statistics
- UCLA MS Computer Science (Fall 2022; 140/3,200): https://www.cs.ucla.edu/graduate-admission-frequently-asked-questions/
- University of Washington MSIM Residential (2025): https://ischool.uw.edu/programs/msim/statistics
- Harvard Business School MBA FY2025: https://www.hbs.edu/about/annualreport/2025/key-metrics
- NYU Stern Full-time MBA Class of 2027: https://www.stern.nyu.edu/programs-admissions/full-time-mba/community/class-profile
- Other university-specific 2025 MBA figures: https://poetsandquants.com/2026/08/02/acceptance-rates-yield-apps-at-the-top-100-u-s-mba-programs-for-2026/2/
- MIT graduate-wide 2025 data (not STEM master's specific, must NOT display as such): https://facts.mit.edu/graduate-student-admission/

## Pending school/field records
The authoritative list is in `public/assets/admissions-data.js`: search for `"stem": null` or `"business": null`.
This is intentional; many graduate programs do not publish rates.
Prioritize STEM-specific **residential** master's programs and non-MBA business master's (MSBA, MS Finance) to improve fit to IvyBridge's clients. For every manual addition, cite the year, exact program, and source.
