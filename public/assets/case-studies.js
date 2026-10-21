/* IvyBridge shared story renderer: one dataset for featured, directory and detail pages. */
(() => {
  'use strict';
  const stories = Array.isArray(window.IVYBRIDGE_STORIES) ? window.IVYBRIDGE_STORIES : [];
  const en = document.documentElement.lang.startsWith('en'), lang = en ? 'en' : 'zh';
  const t = (zh, english) => en ? english : zh;
  const create = (tag, cls, value) => {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (value !== undefined) node.textContent = value;
    return node;
  };
  const linkTo = story => 'case.html?id=' + encodeURIComponent(story.id);
  const verified = story => story.status === 'verified' && story.consentConfirmed === true
    && Array.isArray(story.admittedPrograms) && story.admittedPrograms.length > 0;
  const resultsLabel = story => verified(story)
    ? story.admittedPrograms.map(p => p.school + (p.program ? ' · ' + p.program : '')).join(' / ')
    : t('錄取學校：待提供真實資料', 'Admitted universities: awaiting verified data');
  function storyCard(story, {compact=false} = {}) {
    const entry = story[lang], article = create('article', 'ib-story-card');
    const header=create('div', 'ib-story-card-head');
    header.append(create('span','ib-story-impact-tag',entry.tag),
      create('span','ib-story-index',story.id.replaceAll('-',' / ').toUpperCase()));
    const disclosure = create('span','ib-story-verified',verified(story)
      ? t('已核實案例','Verified result')
      : t('策略情境示範 · 非真實錄取','Illustrative strategy · Not an admission result'));
    const title=create('h3','',entry.title);
    const background=create('p','ib-story-background',entry.background);
    const challenge=create('p','ib-story-challenge',entry.challenge);
    const strategyBox=create('div','ib-story-strategy');
    strategyBox.append(create('span','ib-story-caption',t('規劃突破點','Strategic approach')),
      create('p','',entry.strategy));
    const results=create('div','ib-story-results');
    results.append(create('span','ib-story-caption',t('錄取結果','Admissions outcome')),
      create('p','',resultsLabel(story)));
    const link=create('a','ib-story-read',t('查看完整分析 ↗','Read full analysis ↗'));
    link.href=linkTo(story);link.setAttribute('aria-label',t('查看案例策略：','Read scenario: ')+entry.title);
    article.append(header,disclosure,title,background,challenge);
    if (!compact) article.append(strategyBox);
    article.append(results,link);
    return article;
  }
  document.querySelectorAll('[data-featured-cases]').forEach(node => {
    node.replaceChildren(...stories.slice(0,2).map(s=>storyCard(s,{compact:true})));
  });
  const browser=document.getElementById('ib-story-browser');
  if (browser) {
    const list=browser.querySelector('[data-story-list]'),status=browser.querySelector('[data-story-status]');
    let field='all',challenge='all';
    function render() {
      const matches=stories.filter(s=>(field==='all'||s.field===field)&&(challenge==='all'||s.bg===challenge));
      list.replaceChildren(...matches.map(s=>storyCard(s)));
      if (!matches.length) list.appendChild(create('p','ib-story-empty',t('此分類尚無案例，請嘗試其他條件。','No scenarios match your filters.')));
      if (status) status.textContent=t('顯示 ','Showing ')+matches.length+t(' 個案例情境（未宣稱真實錄取）。',' illustrative scenarios (no admission outcomes implied).');
    }
    browser.querySelectorAll('button[data-filter]').forEach(button => button.addEventListener('click',()=>{
      if(button.dataset.filter==='field')field=button.dataset.value;
      else challenge=button.dataset.value;
      browser.querySelectorAll('button[data-filter="'+button.dataset.filter+'"]').forEach(item =>
        item.setAttribute('aria-pressed',String(item===button)));
      render();
    }));
    render();
  }
  const detail=document.querySelector('[data-story-detail]');
  if (detail) {
    const id=new URLSearchParams(location.search).get('id');
    const story=stories.find(s=>s.id===id);
    detail.replaceChildren();
    if (!story) {
      detail.append(create('h2','',t('找不到此案例','Scenario not found')));
      const back=create('a','ib-story-read',t('返回案例庫 →','Back to directory →'));
      back.href='all-cases.html';detail.append(back);
    } else {
      const entry=story[lang];
      document.title=entry.title+' | IvyBridge';
      detail.append(create('span','ib-story-impact-tag',entry.tag),
        create('p','ib-story-verified',verified(story)?t('已核實案例','Verified result'):t('申請策略情境示範，非真實錄取結果','Illustrative strategy, not a real admission outcome')),
        create('h1','',entry.title));
      for (const [heading,value] of [
        [t('原始背景','Background'),entry.background],
        [t('申請挑戰','Challenge'),entry.challenge],
        [t('IvyBridge 策略思路','Strategic approach'),entry.strategy]]) {
        const sect=create('section','ib-detail-chapter');
        sect.append(create('h2','',heading),create('p','',value));detail.append(sect);
      }
      const steps=create('section','ib-detail-chapter');steps.append(create('h2','',t('建議準備步驟','Recommended steps')));
      const ol=create('ol','ib-editorial-list');
      entry.steps.forEach(step=>ol.appendChild(create('li','',step)));steps.append(ol);detail.append(steps);
      const results=create('section','ib-detail-chapter');
      results.append(create('h2','',t('錄取結果與學校','Admission results & universities')),
        create('p','',resultsLabel(story)));detail.append(results);
      const note=create('p','ib-editorial-note',entry.advice);detail.append(note);
      const back=create('a','ib-story-read',t('← 返回完整案例庫','← Back to all scenarios'));
      back.href='all-cases.html';detail.append(back);
    }
  }
})();