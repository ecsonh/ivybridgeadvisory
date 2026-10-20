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
- NYU Stern Full-time MBA 2025 (23.6%, P&Q table): https://poetsandquants.com/2026/08/02/acceptance-rates-yield-apps-at-the-top-100-u-s-mba-programs-for-2026/2/
- Other university-specific 2025 MBA figures: https://poetsandquants.com/2026/08/02/acceptance-rates-yield-apps-at-the-top-100-u-s-mba-programs-for-2026/2/
- MIT graduate-wide 2025 data (not STEM master's specific, must NOT display as such): https://facts.mit.edu/graduate-student-admission/

## Edit and validation
- Follow [IVYBRIDGE_WEBSITE_PLAYBOOK.md](IVYBRIDGE_WEBSITE_PLAYBOOK.md) for visual/brand and merge guardrails.
- Verify that any rate sourced from a third party matches the correct admissions cycle and exact graduate program. NYU Stern's 2025 MBA acceptance rate is **23.6%** in the cited P&Q table; an earlier draft incorrectly listed 32%, which was corrected.

## Pending school/field records
The authoritative list is in `public/assets/admissions-data.js`: search for `"stem": null` or `"business": null`.
This is intentional; many graduate programs do not publish rates.
Prioritize STEM-specific **residential** master's programs and non-MBA business master's (MSBA, MS Finance) to improve fit to IvyBridge's clients. For every manual addition, cite the year, exact program, and source.

## Research completion status (2026-10-20)

- Universities in selector: **50**.
- Schools with a documented STEM master's program rate: **3**. Missing STEM records: **47**.
- Schools with a documented Business MBA rate: **41**. Missing business records: **9**. These MBA results must **not** be misrepresented as MSBA or finance master's rates.

### STEM records still missing (null)

- Brown University
- California Institute of Technology
- Carnegie Mellon University
- Case Western Reserve University
- Columbia University
- Cornell University
- Dartmouth College
- Duke University
- Emory University
- Georgetown University
- Georgia Institute of Technology
- Harvard University
- Johns Hopkins University
- Massachusetts Institute of Technology
- New York University
- Northwestern University
- Princeton University
- Purdue University
- Rice University
- Tufts University
- University of California, Berkeley
- University of California, Davis
- University of California, Irvine
- University of California, San Diego
- University of California, Santa Barbara
- University of Chicago
- University of Florida
- University of Illinois Urbana-Champaign
- University of Maryland, College Park
- University of Michigan, Ann Arbor
- University of Minnesota, Twin Cities
- University of North Carolina at Chapel Hill
- University of Notre Dame
- University of Pennsylvania
- University of Pittsburgh
- University of Rochester
- University of Southern California
- University of Texas at Austin
- University of Virginia
- University of Wisconsin–Madison
- Vanderbilt University
- Wake Forest University
- Washington University in St. Louis
- Yale University
- Boston University
- Northeastern University
- Texas A&M University

### Business records still missing (null)

- Brown University
- California Institute of Technology
- Johns Hopkins University
- Princeton University
- Purdue University
- Tufts University
- University of California, Santa Barbara
- University of Illinois Urbana-Champaign
- Wake Forest University

**To add manually:** edit `public/assets/admissions-data.js` and replace the specific `null` field with a sourced rate object, keeping the other field and the rest of the file unchanged. The selector updates automatically when the script is deployed.
