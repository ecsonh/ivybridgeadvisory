/* Bilingual IvyBridge case explorer. Data and presentation separated. */
(() => {
 'use strict';
 const root=document.getElementById('ib-story-browser');if(!root)return;
 const en=document.documentElement.lang.startsWith('en'),lang=en?'en':'zh';
 const stories=window.IVYBRIDGE_STORIES||[];
 const list=root.querySelector('[data-story-list]'),status=root.querySelector('[data-story-status]'),modal=document.getElementById('ib-story-dialog');
 const content=modal?.querySelector('[data-dialog-content]');
 let field='all',bg='all',previousFocus=null;
 const el=(tag,cls,text)=>{const node=document.createElement(tag);if(cls)node.className=cls;if(text!==undefined)node.textContent=text;return node;};
 const label=(zh,eng)=>en?eng:zh;
 const clear=n=>n.replaceChildren();
 const badge=()=>label('策略示範 · 非真實錄取成果','Illustrative scenario · Not an admission result');
 function render(){
   const filtered=stories.filter(s=>(field==='all'||s.field===field)&&(bg==='all'||s.bg===bg));
   clear(list);
   status.textContent=label('顯示 '+filtered.length+' 個策略情境（非真實錄取案例）','Showing '+filtered.length+' illustrative scenarios (not admission results)');
   if(!filtered.length){list.appendChild(el('p','ib-story-empty',label('這個分類目前沒有案例，請選擇其他分類。','No scenarios match these filters. Try another selection.')));return;}
   filtered.forEach(s=>{
     const t=s[lang];const article=el('article','ib-editorial-story');
     article.append(el('span','ib-story-badge',badge()),el('p','ib-story-meta',t.background),el('h3','',t.title),el('p','',t.challenge));
     const btn=el('button','ib-story-open',label('閱讀策略分析 →','Read strategy analysis →'));btn.type='button';btn.addEventListener('click',()=>show(s,btn));article.appendChild(btn);list.appendChild(article);
   });
 }
 function show(s,trigger){
   if(!modal||!content)return;previousFocus=trigger;clear(content);
   const t=s[lang];content.append(el('span','ib-story-badge',badge()),el('h2','',t.title));
   for(const [heading,value] of [[label('背景','Background'),t.background],[label('挑戰','Challenge'),t.challenge],[label('策略','Approach'),t.strategy]]){
     const sec=el('section');sec.append(el('h3','',heading),el('p','',value));content.appendChild(sec);
   }
   const sec=el('section');sec.appendChild(el('h3','',label('規劃步驟','Planning steps')));
   const ul=el('ul');t.steps.forEach(step=>ul.appendChild(el('li','',step)));sec.appendChild(ul);content.appendChild(sec);
   const last=el('section');last.append(el('h3','',label('給類似申請者的建議','For applicants with similar goals')),el('p','',t.advice));content.appendChild(last);
   modal.hidden=false;document.body.classList.add('ib-modal-active');modal.querySelector('[data-dialog-close]')?.focus();
 }
 function close(){if(!modal)return;modal.hidden=true;document.body.classList.remove('ib-modal-active');previousFocus?.focus();}
 root.querySelectorAll('button[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{
   const type=btn.dataset.filter;if(type==='field')field=btn.dataset.value;else bg=btn.dataset.value;
   root.querySelectorAll('button[data-filter="'+type+'"]').forEach(b=>b.setAttribute('aria-pressed',String(b===btn)));
   render();
 }));
 modal?.querySelectorAll('[data-dialog-close]').forEach(btn=>btn.addEventListener('click',close));
 modal?.addEventListener('click',event=>{if(event.target===modal)close();});
 document.addEventListener('keydown',e=>{if(modal?.hidden===false){if(e.key==='Escape')close();else if(e.key==='Tab'){const nodes=[...modal.querySelectorAll('button:not([disabled]),a[href]')];if(nodes.length){const first=nodes[0],last=nodes[nodes.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}}}});
 render();
})();