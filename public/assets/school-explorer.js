/* Curated school explorer. No undergraduate or estimated graduate rates masquerade as master's figures. */
(() => {
  'use strict';
  const root = document.getElementById('ib-school-explorer');
  if (!root) return;
  const en = document.documentElement.lang === 'en';
  const t = (zh, english) => en ? english : zh;
  const universities = ["Brown University","California Institute of Technology","Carnegie Mellon University","Case Western Reserve University","Columbia University","Cornell University","Dartmouth College","Duke University","Emory University","Georgetown University","Georgia Institute of Technology","Harvard University","Johns Hopkins University","Massachusetts Institute of Technology","New York University","Northwestern University","Princeton University","Purdue University","Rice University","Stanford University","Tufts University","University of California, Berkeley","University of California, Davis","University of California, Irvine","University of California, Los Angeles","University of California, San Diego","University of California, Santa Barbara","University of Chicago","University of Florida","University of Illinois Urbana-Champaign","University of Maryland, College Park","University of Michigan, Ann Arbor","University of Minnesota, Twin Cities","University of North Carolina at Chapel Hill","University of Notre Dame","University of Pennsylvania","University of Pittsburgh","University of Rochester","University of Southern California","University of Texas at Austin","University of Virginia","University of Washington","University of Wisconsin–Madison","Vanderbilt University","Wake Forest University","Washington University in St. Louis","Yale University","Boston University","Northeastern University","Texas A&M University"];
  const school = root.querySelector('#ib-school-choice');
  const field = root.querySelector('#ib-field-choice');
  const metric = root.querySelector('#ib-school-metric');
  const subtitle = root.querySelector('#ib-school-subtitle');
  const source = root.querySelector('#ib-school-source');
  const note = root.querySelector('#ib-school-note');
  const compare = root.querySelector('#ib-school-compare');
  const schoolSearch = root.querySelector('#ib-school-search');
  const selectionHint = root.querySelector('#ib-school-count');
  let searchText = '';

  // Only audited, institution-published master's PROGRAM figures belong here.
  // Stanford's MS&E program publishes 2025 external graduate applicants admitted (excludes coterminal applicants).
  const verified = {
    'Stanford University': {
      stem: { rate: '7.75%', label: 'MS in Management Science & Engineering (MS&E)', year: '2025', source: 'https://msande.stanford.edu/academics-admissions/graduate/admission/ms-admission-statistics', explanation: t('校方報告：2025 年外部碩士申請者錄取比率（不含 Stanford 本校 coterminal 本科生）。此數字不是 Stanford 全校 STEM 碩士錄取率。','University-reported 2025 admission rate for MS&E external master’s applicants (excludes Stanford coterminal applicants). It is not a Stanford-wide STEM master’s rate.') }
    }
  };

  // Graduate school-wide statistics must not be displayed as a program or field-specific acceptance rate.
  const contextual = {
    'Massachusetts Institute of Technology': {
      text: t('MIT 另公開 2025 年「全校研究所」錄取率約 9%，包含多種學位與領域，不可視為 STEM／商科碩士錄取率。','MIT separately reports a roughly 9% 2025 graduate-wide admission rate across degree types and fields; it is NOT a STEM/business master’s acceptance rate.'),
      source: 'https://facts.mit.edu/graduate-student-admission/'
    }
  };
  const originalNames = [...universities].sort((a,b) => a.localeCompare(b,'en'));
  function buildOptions() {
    const current = school.value;
    const matches = originalNames.filter(name => name.toLowerCase().includes(searchText.toLowerCase()));
    school.replaceChildren();
    for (const name of matches) {
      const option = document.createElement('option');
      option.value = name;
      option.textContent = name;
      school.appendChild(option);
    }
    if (matches.includes(current)) school.value = current;
    selectionHint.textContent = t('符合條件：','Matches: ') + matches.length + ' / 50';
    school.disabled = matches.length === 0;
    if (!matches.length) {
      metric.textContent = '—';
      subtitle.textContent = t('沒有符合的學校，請調整搜尋關鍵字。','No matching schools. Try another search.');
      source.hidden = true;
      note.textContent = '';
    } else update();
  }
  function update() {
    if (!school.value) return;
    const current = verified[school.value]?.[field.value];
    metric.textContent = current ? current.rate : t('未公開／待核實','Not published / unverified');
    subtitle.textContent = current
      ? current.label + ' · ' + current.year
      : t('尚無此校在所選領域、可核對的碩士 Program 錄取率。請查看該校 Program 官方招生資料。','No audited master’s program-level rate is available for this school and field. Check the specific program’s official admissions page.');
    source.hidden = !current;
    if (current) {
      source.href = current.source;
      source.textContent = t('校方原始數據與定義 ↗','Official program data and definitions ↗');
    }
    const extra = contextual[school.value];
    note.textContent = (current ? current.explanation : '') + (extra ? (current ? ' ' : '') + extra.text : '');
    compare.hidden = !extra;
    if (extra) compare.href = extra.source;
  }
  schoolSearch.addEventListener('input', () => { searchText = schoolSearch.value.trim(); buildOptions(); });
  school.addEventListener('change', update);
  field.addEventListener('change', update);
  buildOptions();
})();
