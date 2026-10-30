/* Expand only the requested tool and keep shared/legacy deep links usable. */
(() => {
 'use strict';
 const hub=document.querySelector('[data-guide-hub]');if(!hub)return;
 const en=document.documentElement.lang==='en';
 const aliases={
  'study-intro':'guide-start','study-benefits':'program-fit','program-choices':'guide-start','study-next-step':'guide-next',
  'budget-explorer':'budget-tool','cost-planner':'budget-tool','topic-1':'budget-tool',
  'application-planning':'timeline-tool','application-timeline':'timeline-tool','topic-0':'timeline-tool',
  'career-resources':'career-tool','career-explorer':'career-tool'
 };
 function revealHash(){
  let id;try{id=decodeURIComponent(location.hash.slice(1))}catch{return}
  if(!id)return;
  const target=document.getElementById(aliases[id]||id);if(!target)return;
  const tool=target.matches('details')?target:target.closest('details.guide-tool');
  if(tool)tool.open=true;
  // Inner timeline panels use the established button/aria-expanded behavior.
  if(target.classList.contains('timeline-body')&&target.classList.contains('hidden')){
   target.previousElementSibling?.click();
  }
  requestAnimationFrame(()=>target.scrollIntoView({block:'start',behavior:'auto'}));
 }
 hub.querySelectorAll('details.guide-tool').forEach(tool=>tool.addEventListener('toggle',()=>{
  if(!tool.open){
   if(location.hash==='#'+tool.id){history.replaceState(null,'',location.pathname+location.search);window.dispatchEvent(new Event('ivybridge:sectionchange'));}
   return;
  }
  // Keep the equivalent expanded tool when changing language, without scrolling.
  history.replaceState(null,'',location.pathname+location.search+'#'+tool.id);
  window.dispatchEvent(new Event('ivybridge:sectionchange'));
  hub.querySelectorAll('details.guide-tool').forEach(other=>{if(other!==tool)other.open=false});
 }));
 window.addEventListener('hashchange',revealHash);revealHash();
 const major=document.getElementById('ib-major'),region=document.getElementById('ib-region');
 if(major&&region){
  const employers={cs:['Google','Microsoft','Amazon','IBM'],data:['Microsoft','Amazon','Databricks','NVIDIA'],business:['JPMorgan Chase','Goldman Sachs','Morgan Stanley','Deloitte'],engineering:['Tesla','Boeing','Siemens','GE Aerospace'],health:['UnitedHealth Group','CVS Health','Mayo Clinic','Kaiser Permanente']};
  const roles={cs:['軟體開發人員','Software developers'],data:['資料科學家','Data scientists'],business:['財務分析師','Financial analysts'],engineering:['機械工程師','Mechanical engineers'],health:['醫療與健康服務經理','Medical and health services managers']};
  function sync(){
   document.getElementById('ib-career-role').textContent=roles[major.value][en?1:0];
   const list=document.getElementById('ib-company-examples');list.replaceChildren();
   for(const name of employers[major.value]){const li=document.createElement('li');li.textContent=name;list.appendChild(li)}
   const place=region.selectedOptions[0].textContent;
   document.getElementById('ib-career-note').textContent=en?`Use BLS to research occupational medians and percentiles for ${place}. Figures are not starting-salary or employment guarantees.`:`請至 BLS 查詢${place}的職業薪資中位數及分位數；薪資不等於新鮮人起薪，也不保證就業。`;
  }
  major.addEventListener('change',sync);region.addEventListener('change',sync);sync();
 }
})();
