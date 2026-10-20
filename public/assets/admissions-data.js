/* IvyBridge graduate admissions dataset: manually editable.
 * Each school has separate STEM / Business entries. Null = no verified program-level rate.
 * Update instructions: see ADMISSIONS_DATA_GUIDE.md at repository root.
 * quality: official, official-calculated, secondary; do NOT treat MBA numbers as MSBA/MS Finance.
 * Figures refer to specific programs, not a school-wide admissions probability.
 */
window.IVYBRIDGE_ADMISSIONS_DATA = {
  "lastReviewed": "2026-10-20",
  "schools": {
    "Brown University": {
      "stem": null,
      "business": null
    },
    "California Institute of Technology": {
      "stem": null,
      "business": null
    },
    "Carnegie Mellon University": {
      "stem": null,
      "business": {
        "rate": 24.3,
        "program": "Tepper Full-time MBA",
        "year": 2025,
        "source": "https://poetsandquants.com/2026/08/02/acceptance-rates-yield-apps-at-the-top-100-u-s-mba-programs-for-2026/2/",
        "quality": "secondary",
        "note": "Poets&Quants compiled program admission rate; not an MSBA/MFin admissions rate."
      }
    },
    "Case Western Reserve University": {
      "stem": null,
      "business": {
        "rate": 49.5,
        "program": "Weatherhead Full-time MBA",
        "year": 2025,
        "source": "https://poetsandquants.com/2026/08/02/acceptance-rates-yield-apps-at-the-top-100-u-s-mba-programs-for-2026/2/",
        "quality": "secondary",
        "note": "Poets&Quants compiled program admission rate; not an MSBA/MFin admissions rate."
      }
    },
    "Columbia University": {
      "stem": null,
      "business": {
        "rate": 25.7,
        "program": "Columbia Business School Full-time MBA",
        "year": 2025,
        "source": "https://poetsandquants.com/2026/08/02/acceptance-rates-yield-apps-at-the-top-100-u-s-mba-programs-for-2026/2/",
        "quality": "secondary",
        "note": "Poets&Quants compiled program admission rate; not an MSBA/MFin admissions rate."
      }
    },
    "Cornell University": {
      "stem": null,
      "business": {
        "rate": 29.3,
        "program": "Johnson Full-time MBA",
        "year": 2025,
        "source": "https://poetsandquants.com/2026/08/02/acceptance-rates-yield-apps-at-the-top-100-u-s-mba-programs-for-2026/2/",
        "quality": "secondary",
        "note": "Poets&Quants compiled program admission rate; not an MSBA/MFin admissions rate."
      }
    },
    "Dartmouth College": {
      "stem": null,
      "business": {
        "rate": 28.3,
        "program": "Tuck Full-time MBA",
        "year": 2025,
        "source": "https://poetsandquants.com/2026/08/02/acceptance-rates-yield-apps-at-the-top-100-u-s-mba-programs-for-2026/2/",
        "quality": "secondary",
        "note": "Poets&Quants compiled program admission rate; not an MSBA/MFin admissions rate."
      }
    },
    "Duke University": {
      "stem": null,
      "business": {
        "rate": 24,
        "program": "Fuqua Full-time MBA",
        "year": 2025,
        "source": "https://poetsandquants.com/2026/08/02/acceptance-rates-yield-apps-at-the-top-100-u-s-mba-programs-for-2026/2/",
        "quality": "secondary",
        "note": "Poets&Quants compiled program admission rate; not an MSBA/MFin admissions rate."
      }
    },
    "Emory University": {
      "stem": null,
      "business": {
        "rate": 33.2,
        "program": "Goizueta Full-time MBA",
        "year": 2025,
        "source": "https://poetsandquants.com/2026/08/02/acceptance-rates-yield-apps-at-the-top-100-u-s-mba-programs-for-2026/2/",
        "quality": "secondary",
        "note": "Poets&Quants compiled program admission rate; not an MSBA/MFin admissions rate."
      }
    },
    "Georgetown University": {
      "stem": null,
      "business": {
        "rate": 64.4,
        "program": "McDonough Full-time MBA",
        "year": 2025,
        "source": "https://poetsandquants.com/2026/08/02/acceptance-rates-yield-apps-at-the-top-100-u-s-mba-programs-for-2026/2/",
        "quality": "secondary",
        "note": "Poets&Quants compiled program admission rate; not an MSBA/MFin admissions rate."
      }
    },
    "Georgia Institute of Technology": {
      "stem": null,
      "business": {
        "rate": 17.8,
        "program": "Scheller Full-time MBA",
        "year": 2025,
        "source": "https://poetsandquants.com/2026/08/02/acceptance-rates-yield-apps-at-the-top-100-u-s-mba-programs-for-2026/2/",
        "quality": "secondary",
        "note": "Poets&Quants compiled program admission rate; not an MSBA/MFin admissions rate."
      }
    },
    "Harvard University": {
      "stem": null,
      "business": {
        "rate": 12,
        "program": "Harvard Business School Full-time MBA",
        "year": 2025,
        "source": "https://www.hbs.edu/about/annualreport/2025/key-metrics",
        "quality": "official",
        "note": "Official FY2025 MBA admissions percentage."
      }
    },
    "Johns Hopkins University": {
      "stem": null,
      "business": null
    },
    "Massachusetts Institute of Technology": {
      "stem": null,
      "business": {
        "rate": 18.8,
        "program": "Sloan Full-time MBA",
        "year": 2025,
        "source": "https://poetsandquants.com/2026/08/02/acceptance-rates-yield-apps-at-the-top-100-u-s-mba-programs-for-2026/2/",
        "quality": "secondary",
        "note": "Poets&Quants compiled program admission rate; not an MSBA/MFin admissions rate."
      },
      "stemNote": "MIT published a 2025 graduate-wide 9% admissions figure, including multiple degree types; not a STEM MS admission rate."
    },
    "New York University": {
      "stem": null,
      "business": {
        "rate": 32,
        "program": "Stern Full-time MBA · Class of 2027",
        "year": 2025,
        "source": "https://www.stern.nyu.edu/programs-admissions/full-time-mba/community/class-profile",
        "quality": "official",
        "note": "Official class profile: 1,309 admitted from 4,131 applications (rounded 32%)."
      }
    },
    "Northwestern University": {
      "stem": null,
      "business": {
        "rate": 28.1,
        "program": "Kellogg Full-time MBA",
        "year": 2025,
        "source": "https://poetsandquants.com/2026/08/02/acceptance-rates-yield-apps-at-the-top-100-u-s-mba-programs-for-2026/2/",
        "quality": "secondary",
        "note": "Poets&Quants compiled program admission rate; not an MSBA/MFin admissions rate."
      }
    },
    "Princeton University": {
      "stem": null,
      "business": null
    },
    "Purdue University": {
      "stem": null,
      "business": null
    },
    "Rice University": {
      "stem": null,
      "business": {
        "rate": 34.2,
        "program": "Jones Full-time MBA",
        "year": 2025,
        "source": "https://poetsandquants.com/2026/08/02/acceptance-rates-yield-apps-at-the-top-100-u-s-mba-programs-for-2026/2/",
        "quality": "secondary",
        "note": "Poets&Quants compiled program admission rate; not an MSBA/MFin admissions rate."
      }
    },
    "Stanford University": {
      "stem": {
        "rate": 7.75,
        "program": "MS Management Science & Engineering",
        "year": 2025,
        "source": "https://msande.stanford.edu/academics-admissions/graduate/admission/ms-admission-statistics",
        "quality": "official",
        "note": "Excludes Stanford coterminal undergraduate applicants."
      },
      "business": {
        "rate": 6.8,
        "program": "Stanford GSB Full-time MBA",
        "year": 2025,
        "source": "https://poetsandquants.com/2026/08/02/acceptance-rates-yield-apps-at-the-top-100-u-s-mba-programs-for-2026/2/",
        "quality": "secondary",
        "note": "Poets&Quants compiled program admission rate; not an MSBA/MFin admissions rate."
      }
    },
    "Tufts University": {
      "stem": null,
      "business": null
    },
    "University of California, Berkeley": {
      "stem": null,
      "business": {
        "rate": 21.4,
        "program": "Haas Full-time MBA",
        "year": 2025,
        "source": "https://poetsandquants.com/2026/08/02/acceptance-rates-yield-apps-at-the-top-100-u-s-mba-programs-for-2026/2/",
        "quality": "secondary",
        "note": "Poets&Quants compiled program admission rate; not an MSBA/MFin admissions rate."
      }
    },
    "University of California, Davis": {
      "stem": null,
      "business": {
        "rate": 39.5,
        "program": "UC Davis MBA Full-time MBA",
        "year": 2025,
        "source": "https://poetsandquants.com/2026/08/02/acceptance-rates-yield-apps-at-the-top-100-u-s-mba-programs-for-2026/2/",
        "quality": "secondary",
        "note": "Poets&Quants compiled program admission rate; not an MSBA/MFin admissions rate."
      }
    },
    "University of California, Irvine": {
      "stem": null,
      "business": {
        "rate": 26.4,
        "program": "Merage Full-time MBA",
        "year": 2025,
        "source": "https://poetsandquants.com/2026/08/02/acceptance-rates-yield-apps-at-the-top-100-u-s-mba-programs-for-2026/2/",
        "quality": "secondary",
        "note": "Poets&Quants compiled program admission rate; not an MSBA/MFin admissions rate."
      }
    },
    "University of California, Los Angeles": {
      "stem": {
        "rate": 4.38,
        "program": "MS Computer Science",
        "year": 2022,
        "source": "https://www.cs.ucla.edu/graduate-admission-frequently-asked-questions/",
        "quality": "official-calculated",
        "note": "140 offers / 3,200 applications for Fall 2022, computed and rounded from department-published totals."
      },
      "business": {
        "rate": 31,
        "program": "Anderson Full-time MBA",
        "year": 2025,
        "source": "https://poetsandquants.com/2026/08/02/acceptance-rates-yield-apps-at-the-top-100-u-s-mba-programs-for-2026/2/",
        "quality": "secondary",
        "note": "Poets&Quants compiled program admission rate; not an MSBA/MFin admissions rate."
      }
    },
    "University of California, San Diego": {
      "stem": null,
      "business": {
        "rate": 36.5,
        "program": "Rady Full-time MBA",
        "year": 2025,
        "source": "https://poetsandquants.com/2026/08/02/acceptance-rates-yield-apps-at-the-top-100-u-s-mba-programs-for-2026/2/",
        "quality": "secondary",
        "note": "Poets&Quants compiled program admission rate; not an MSBA/MFin admissions rate."
      }
    },
    "University of California, Santa Barbara": {
      "stem": null,
      "business": null
    },
    "University of Chicago": {
      "stem": null,
      "business": {
        "rate": 27.3,
        "program": "Booth Full-time MBA",
        "year": 2025,
        "source": "https://poetsandquants.com/2026/08/02/acceptance-rates-yield-apps-at-the-top-100-u-s-mba-programs-for-2026/2/",
        "quality": "secondary",
        "note": "Poets&Quants compiled program admission rate; not an MSBA/MFin admissions rate."
      }
    },
    "University of Florida": {
      "stem": null,
      "business": {
        "rate": 13.3,
        "program": "Hough Full-time MBA",
        "year": 2025,
        "source": "https://poetsandquants.com/2026/08/02/acceptance-rates-yield-apps-at-the-top-100-u-s-mba-programs-for-2026/2/",
        "quality": "secondary",
        "note": "Poets&Quants compiled program admission rate; not an MSBA/MFin admissions rate."
      }
    },
    "University of Illinois Urbana-Champaign": {
      "stem": null,
      "business": null
    },
    "University of Maryland, College Park": {
      "stem": null,
      "business": {
        "rate": 37.2,
        "program": "Smith Full-time MBA",
        "year": 2025,
        "source": "https://poetsandquants.com/2026/08/02/acceptance-rates-yield-apps-at-the-top-100-u-s-mba-programs-for-2026/2/",
        "quality": "secondary",
        "note": "Poets&Quants compiled program admission rate; not an MSBA/MFin admissions rate."
      }
    },
    "University of Michigan, Ann Arbor": {
      "stem": null,
      "business": {
        "rate": 30.2,
        "program": "Ross Full-time MBA",
        "year": 2025,
        "source": "https://poetsandquants.com/2026/08/02/acceptance-rates-yield-apps-at-the-top-100-u-s-mba-programs-for-2026/2/",
        "quality": "secondary",
        "note": "Poets&Quants compiled program admission rate; not an MSBA/MFin admissions rate."
      }
    },
    "University of Minnesota, Twin Cities": {
      "stem": null,
      "business": {
        "rate": 39.5,
        "program": "Carlson Full-time MBA",
        "year": 2025,
        "source": "https://poetsandquants.com/2026/08/02/acceptance-rates-yield-apps-at-the-top-100-u-s-mba-programs-for-2026/2/",
        "quality": "secondary",
        "note": "Poets&Quants compiled program admission rate; not an MSBA/MFin admissions rate."
      }
    },
    "University of North Carolina at Chapel Hill": {
      "stem": null,
      "business": {
        "rate": 37.9,
        "program": "Kenan-Flagler Full-time MBA",
        "year": 2025,
        "source": "https://poetsandquants.com/2026/08/02/acceptance-rates-yield-apps-at-the-top-100-u-s-mba-programs-for-2026/2/",
        "quality": "secondary",
        "note": "Poets&Quants compiled program admission rate; not an MSBA/MFin admissions rate."
      }
    },
    "University of Notre Dame": {
      "stem": null,
      "business": {
        "rate": 33.8,
        "program": "Mendoza Full-time MBA",
        "year": 2025,
        "source": "https://poetsandquants.com/2026/08/02/acceptance-rates-yield-apps-at-the-top-100-u-s-mba-programs-for-2026/2/",
        "quality": "secondary",
        "note": "Poets&Quants compiled program admission rate; not an MSBA/MFin admissions rate."
      }
    },
    "University of Pennsylvania": {
      "stem": null,
      "business": {
        "rate": 18.6,
        "program": "Wharton Full-time MBA",
        "year": 2025,
        "source": "https://poetsandquants.com/2026/08/02/acceptance-rates-yield-apps-at-the-top-100-u-s-mba-programs-for-2026/2/",
        "quality": "secondary",
        "note": "Poets&Quants compiled program admission rate; not an MSBA/MFin admissions rate."
      }
    },
    "University of Pittsburgh": {
      "stem": null,
      "business": {
        "rate": 49.3,
        "program": "Katz Full-time MBA",
        "year": 2025,
        "source": "https://poetsandquants.com/2026/08/02/acceptance-rates-yield-apps-at-the-top-100-u-s-mba-programs-for-2026/2/",
        "quality": "secondary",
        "note": "Poets&Quants compiled program admission rate; not an MSBA/MFin admissions rate."
      }
    },
    "University of Rochester": {
      "stem": null,
      "business": {
        "rate": 13.3,
        "program": "Simon Full-time MBA",
        "year": 2025,
        "source": "https://poetsandquants.com/2026/08/02/acceptance-rates-yield-apps-at-the-top-100-u-s-mba-programs-for-2026/2/",
        "quality": "secondary",
        "note": "Poets&Quants compiled program admission rate; not an MSBA/MFin admissions rate."
      }
    },
    "University of Southern California": {
      "stem": null,
      "business": {
        "rate": 31.4,
        "program": "Marshall Full-time MBA",
        "year": 2025,
        "source": "https://poetsandquants.com/2026/08/02/acceptance-rates-yield-apps-at-the-top-100-u-s-mba-programs-for-2026/2/",
        "quality": "secondary",
        "note": "Poets&Quants compiled program admission rate; not an MSBA/MFin admissions rate."
      }
    },
    "University of Texas at Austin": {
      "stem": null,
      "business": {
        "rate": 32.7,
        "program": "McCombs Full-time MBA",
        "year": 2025,
        "source": "https://poetsandquants.com/2026/08/02/acceptance-rates-yield-apps-at-the-top-100-u-s-mba-programs-for-2026/2/",
        "quality": "secondary",
        "note": "Poets&Quants compiled program admission rate; not an MSBA/MFin admissions rate."
      }
    },
    "University of Virginia": {
      "stem": null,
      "business": {
        "rate": 30.7,
        "program": "Darden Full-time MBA",
        "year": 2025,
        "source": "https://poetsandquants.com/2026/08/02/acceptance-rates-yield-apps-at-the-top-100-u-s-mba-programs-for-2026/2/",
        "quality": "secondary",
        "note": "Poets&Quants compiled program admission rate; not an MSBA/MFin admissions rate."
      }
    },
    "University of Washington": {
      "stem": {
        "rate": 61.47,
        "program": "MS Information Management · Residential",
        "year": 2025,
        "source": "https://ischool.uw.edu/programs/msim/statistics",
        "quality": "official",
        "note": "Residential degree option, 292 admits / 475 applicants; not the online program."
      },
      "business": {
        "rate": 33.6,
        "program": "Foster Full-time MBA",
        "year": 2025,
        "source": "https://poetsandquants.com/2026/08/02/acceptance-rates-yield-apps-at-the-top-100-u-s-mba-programs-for-2026/2/",
        "quality": "secondary",
        "note": "Poets&Quants compiled program admission rate; not an MSBA/MFin admissions rate."
      }
    },
    "University of Wisconsin–Madison": {
      "stem": null,
      "business": {
        "rate": 50.2,
        "program": "Wisconsin MBA Full-time MBA",
        "year": 2025,
        "source": "https://poetsandquants.com/2026/08/02/acceptance-rates-yield-apps-at-the-top-100-u-s-mba-programs-for-2026/2/",
        "quality": "secondary",
        "note": "Poets&Quants compiled program admission rate; not an MSBA/MFin admissions rate."
      }
    },
    "Vanderbilt University": {
      "stem": null,
      "business": {
        "rate": 36.2,
        "program": "Owen Full-time MBA",
        "year": 2025,
        "source": "https://poetsandquants.com/2026/08/02/acceptance-rates-yield-apps-at-the-top-100-u-s-mba-programs-for-2026/2/",
        "quality": "secondary",
        "note": "Poets&Quants compiled program admission rate; not an MSBA/MFin admissions rate."
      }
    },
    "Wake Forest University": {
      "stem": null,
      "business": null
    },
    "Washington University in St. Louis": {
      "stem": null,
      "business": {
        "rate": 17.8,
        "program": "Olin Full-time MBA",
        "year": 2025,
        "source": "https://poetsandquants.com/2026/08/02/acceptance-rates-yield-apps-at-the-top-100-u-s-mba-programs-for-2026/2/",
        "quality": "secondary",
        "note": "Poets&Quants compiled program admission rate; not an MSBA/MFin admissions rate."
      }
    },
    "Yale University": {
      "stem": null,
      "business": {
        "rate": 28.5,
        "program": "Yale SOM Full-time MBA",
        "year": 2025,
        "source": "https://poetsandquants.com/2026/08/02/acceptance-rates-yield-apps-at-the-top-100-u-s-mba-programs-for-2026/2/",
        "quality": "secondary",
        "note": "Poets&Quants compiled program admission rate; not an MSBA/MFin admissions rate."
      }
    },
    "Boston University": {
      "stem": null,
      "business": {
        "rate": 37.2,
        "program": "Questrom Full-time MBA",
        "year": 2025,
        "source": "https://poetsandquants.com/2026/08/02/acceptance-rates-yield-apps-at-the-top-100-u-s-mba-programs-for-2026/2/",
        "quality": "secondary",
        "note": "Poets&Quants compiled program admission rate; not an MSBA/MFin admissions rate."
      }
    },
    "Northeastern University": {
      "stem": null,
      "business": {
        "rate": 19.4,
        "program": "D’Amore-McKim Full-time MBA",
        "year": 2025,
        "source": "https://poetsandquants.com/2026/08/02/acceptance-rates-yield-apps-at-the-top-100-u-s-mba-programs-for-2026/2/",
        "quality": "secondary",
        "note": "Poets&Quants compiled program admission rate; not an MSBA/MFin admissions rate."
      }
    },
    "Texas A&M University": {
      "stem": null,
      "business": {
        "rate": 24.8,
        "program": "Mays Full-time MBA",
        "year": 2025,
        "source": "https://poetsandquants.com/2026/08/02/acceptance-rates-yield-apps-at-the-top-100-u-s-mba-programs-for-2026/2/",
        "quality": "secondary",
        "note": "Poets&Quants compiled program admission rate; not an MSBA/MFin admissions rate."
      }
    }
  }
};
