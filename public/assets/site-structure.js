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
