(() => {
 'use strict';
 const wall=document.getElementById('admissions-wall');
 document.querySelectorAll('[data-wall]').forEach(button=>button.addEventListener('click',()=>{
  if(!wall)return;
  wall.scrollBy({left:Number(button.dataset.wall)*310,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
 }));
 const state={field:'all',bg:'all'};
 const stories=[...document.querySelectorAll('.ib-story')];
 function update(){
  stories.forEach(card=>{card.hidden= !((state.field==='all'||state.field===card.dataset.field)&&(state.bg==='all'||state.bg===card.dataset.bg))});
  const n=stories.filter(card=>!card.hidden).length;
  const status=document.getElementById('story-status');if(status)status.textContent=n?`${n} illustrative scenario${n===1?'':'s'}`:'No matching scenarios. Try another filter.';
 }
 document.querySelectorAll('.ib-story-filter').forEach(button=>button.addEventListener('click',()=>{
  state[button.dataset.type]=button.dataset.value;
  document.querySelectorAll('.ib-story-filter').forEach(btn=>btn.setAttribute('aria-pressed',String(state[btn.dataset.type]===btn.dataset.value)));
  update();
 }));
 if(stories.length)update();
})();


/* Shared bilingual in-page chapter navigation (all site pages). */
(function(){
 'use strict';
 function init(){
  const en=document.documentElement.lang==='en';
  let main=document.querySelector('main');
  if(!main){
   const footer=document.querySelector('body > footer');
   const header=document.querySelector('body > header');
   if(!footer||!header)return;
   main=document.createElement('main');main.id='main-content';
   let node=header.nextSibling;
   while(node&&node!==footer){
    const next=node.nextSibling;
    if(node.nodeType===1 && !['SCRIPT','STYLE'].includes(node.tagName))main.appendChild(node);
    node=next;
   }
   footer.parentNode.insertBefore(main,footer);
  }
  // Pages such as the original Master's Guide already provide their own accessible chapter TOC.
  // Never inject a second sidebar or wrap its existing two-column reading layout.
  if(main.querySelector('.guide-toc,.ib-page-sidebar'))return;
  const all=[...main.querySelectorAll('h1,h2')].filter(el=>el.textContent.trim().length>3 && !el.closest('.ib-page-sidebar,.ib-explorer-grid,.ib-bottom-cta'));
  const isGuideHub=main.hasAttribute('data-guide-hub');
  const headings=isGuideHub?[...main.querySelectorAll('[data-guide-chapter]')]:all.filter(el=>el.tagName==='H2').slice(0,9);
  if(!headings.length)return;
  const ids=new Set([...document.querySelectorAll('[id]')].map(n=>n.id));
  function slug(s){return s.toLowerCase().replace(/[^a-z0-9\u4e00-\u9fff]+/g,'-').replace(/^-|-$/g,'').slice(0,60)||'chapter'}
  for(const el of headings){if(el.id)continue;let id='ib-section-'+slug(el.textContent.trim()),seq=2;while(ids.has(id))id='ib-section-'+slug(el.textContent.trim())+'-'+seq++;el.id=id;ids.add(id)}
  // Keep full-width hero/banner OUTSIDE the two-column reading layout.
  // This matches the established U.S. master's guide: banner first, TOC beside content.
  const hero=[...main.children].find(el=>el.matches?.('.ib-why-hero,.ib-explorer-hero,.ib-service-hero,.ib-site-banner,.guide-hero,.hero-gradient,.ib-standalone-hero'));
  if(hero && hero===main.firstElementChild){
   main.parentNode.insertBefore(hero,main);
   hero.classList.add('ib-banner-outside-grid');
  }
  const shell=document.createElement('div');shell.className='ib-page-shell';
  main.parentNode.insertBefore(shell,main);
  const aside=document.createElement('aside');aside.className='ib-page-sidebar';aside.setAttribute('aria-label',en?'On this page':'本頁目錄');
  const details=document.createElement('details');details.className='ib-toc-details';details.open=true;
  const summary=document.createElement('summary');summary.textContent=en?'On this page':'本頁目錄';details.appendChild(summary);
  const nav=document.createElement('nav');nav.className='ib-toc-links';
  for(const el of headings){const link=document.createElement('a');link.href='#'+encodeURIComponent(el.id);link.textContent=(isGuideHub?el.querySelector('h2').textContent:el.textContent).trim().replace(/\s+/g,' ').slice(0,36);nav.appendChild(link)}
  details.appendChild(nav);aside.appendChild(details);shell.append(aside,main);
  const links=[...nav.querySelectorAll('a')];
  function active(id){for(const a of links)a.setAttribute('aria-current',String(decodeURIComponent(a.hash.slice(1))===id))}
  if(window.IntersectionObserver){
   const observer=new IntersectionObserver(entries=>{const visible=entries.filter(x=>x.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top);if(visible[0])active(visible[0].target.id)},{rootMargin:'-16% 0px -65% 0px',threshold:0});
   headings.forEach(el=>observer.observe(el));
  }
  nav.addEventListener('click',event=>{const a=event.target.closest('a[href^="#"]');if(a){active(decodeURIComponent(a.hash.slice(1)));if(matchMedia('(max-width: 1100px)').matches)details.open=false;}});
  if(location.hash)active(decodeURIComponent(location.hash.slice(1)));else active(headings[0].id);
  if(window.matchMedia){const media=matchMedia('(max-width: 1100px)');const update=()=>{details.open=!media.matches};update();media.addEventListener?.('change',update)}
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
