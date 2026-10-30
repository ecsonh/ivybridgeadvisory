/* IvyBridge bilingual navigation: preserve plan queries and only use valid target anchors. */
(function () {
  'use strict';

  const isEnglish = location.pathname.split('/').includes('en');
  const originalFile = location.pathname.split('/').pop() || 'index.html';
  const file = originalFile === 'ivybridge.html' ? 'index.html' : originalFile;
  const query = location.search;
  let rawHash = decodeURIComponent(location.hash.slice(1));

  // Anchor ids that exist in both language versions.
  const shared = {
    'study-guide.html': ['program-fit','guide-start','guide-schools','guide-budget','guide-application','guide-next','school-tool','career-tool','budget-tool','timeline-tool','departure-tool','ib-school-explorer','career-explorer','practical-training','arrival-checklist','explorer-articles','study-benefits','program-choices','study-intro','study-next-step','budget-explorer','cost-planner','topic-1','application-planning','application-timeline','topic-0','career-resources'],
    'study-basics.html': ['study-intro','study-benefits','program-choices','practical-training','arrival-checklist','study-next-step'],
    'index.html': ['plans', 'admissions-wall'],
    'services.html': ['plan-details', 'essential', 'comprehensive', 'elite', 'service-paths', 'how-it-works', 'compare-plans', 'service-faq'],
    'contact.html': [],
    'custom-services.html': [],
    'cases.html': [],
    'why-us.html': ['study-intro', 'study-benefits', 'program-choices', 'practical-training', 'arrival-checklist', 'study-next-step'],
    'insights.html': ['ib-school-explorer', 'explorer-articles', 'budget-explorer', 'application-planning'],
    'about.html': [],
    'us-masters-guide.html': []
  };

  const enMainAnchor = ['services.html', 'custom-services.html', 'why-us.html', 'study-guide.html', 'study-basics.html'].includes(file) ? 'main-content' : 'content';

  function counterpartHash(targetEnglish) {
    if (!rawHash) return '';
    let anchor = rawHash;

    if (rawHash === 'main-content' || rawHash === 'content') {
      anchor = targetEnglish ? enMainAnchor : 'main-content';
    } else if (file === 'insights.html') {
      const toEnglish = {'topic-0': 'application-timeline', 'topic-1': 'cost-planner', 'career-explorer': 'career-resources', 'budget-explorer':'cost-planner','application-planning':'application-timeline'};
      const toChinese = {'application-timeline': 'topic-0', 'cost-planner': 'topic-1', 'career-resources': 'career-explorer', 'cost-planner':'budget-explorer','application-timeline':'application-planning'};
      anchor = targetEnglish ? (toEnglish[rawHash] || rawHash) : (toChinese[rawHash] || rawHash);
      if (!['topic-0', 'topic-1', 'application-timeline', 'cost-planner', 'ib-school-explorer', 'explorer-articles', 'budget-explorer', 'application-planning', 'career-explorer', 'career-resources'].includes(anchor)) {
        anchor = targetEnglish ? enMainAnchor : 'main-content';
      }
    } else if (file === 'study-guide.html' && /^timeline-panel-[0-3]$/.test(rawHash)) {
      anchor = targetEnglish ? 'timeline-tool' : rawHash;
    } else if (!(shared[file] || []).includes(rawHash)) {
      // The English master's guide does not have corresponding section anchors.
      anchor = targetEnglish ? enMainAnchor : 'main-content';
    }

    return anchor ? '#' + encodeURIComponent(anchor) : '';
  }

  document.documentElement.lang = isEnglish ? 'en' : 'zh-Hant';
  try { localStorage.setItem('ivybridge-language', isEnglish ? 'en' : 'zh'); } catch (_) {}

  document.querySelectorAll('.ib-lang-wrap').forEach(node => node.remove());
  const zhHref = (isEnglish ? '../' : '') + file + query + counterpartHash(false);
  const enHref = (isEnglish ? '' : 'en/') + file + query + counterpartHash(true);
  const wrap = document.createElement('div');
  wrap.className = 'ib-lang-wrap';
  const nav = document.createElement('nav');
  nav.className = 'ib-lang-switch';
  nav.setAttribute('aria-label', 'Language / 語言');
  for (const [label, href, code, selected] of [
    ['繁中', zhHref, 'zh-Hant', !isEnglish],
    ['EN', enHref, 'en', isEnglish]
  ]) {
    const a = document.createElement('a');
    a.href = href;
    a.lang = code;
    a.textContent = label;
    if (selected) a.setAttribute('aria-current', 'page');
    nav.appendChild(a);
  }
  wrap.appendChild(nav);
  document.body.appendChild(wrap);
  function refreshLanguageLinks() {
    try { rawHash = decodeURIComponent(location.hash.slice(1)); } catch (_) { rawHash = ''; }
    const links=wrap.querySelectorAll('a');
    links[0].href=(isEnglish ? '../' : '')+file+query+counterpartHash(false);
    links[1].href=(isEnglish ? '' : 'en/')+file+query+counterpartHash(true);
  }
  window.addEventListener('hashchange', refreshLanguageLinks);
  window.addEventListener('ivybridge:sectionchange', refreshLanguageLinks);

  // Keep relative HTML navigation inside /en rather than jumping to the Chinese site.
  if (isEnglish) {
    document.querySelectorAll('a[href]').forEach(a => {
      if (a.closest('.ib-lang-switch')) return;
      const href = a.getAttribute('href');
      if (!href || href.startsWith('#') || /^(?:https?:|mailto:|tel:|javascript:|\/\/)/i.test(href)) return;
      const match = href.match(/^(?:\.\.\/)?([\w-]+\.html)(.*)$/);
      if (match) a.setAttribute('href', (match[1] === 'ivybridge.html' ? 'index.html' : match[1]) + match[2]);
    });
  } else {
    document.querySelectorAll('a[href="ivybridge.html"]').forEach(a => a.setAttribute('href', 'index.html'));
  }

  function selectPlan() {
    const id = decodeURIComponent(location.hash.slice(1));
    document.querySelectorAll('.ib-detail').forEach(node => node.classList.toggle('is-selected', node.id === id));
    if (['essential', 'comprehensive', 'elite'].includes(id)) {
      const target = document.getElementById(id);
      if (target) requestAnimationFrame(() => target.scrollIntoView({block: 'center', behavior: 'auto'}));
    }
  }
  window.addEventListener('hashchange', selectPlan);
  selectPlan();
})();
