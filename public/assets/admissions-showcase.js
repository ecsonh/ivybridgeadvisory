/* Admissions-first showcase. Posters are distinct from illustrative planning scenarios. */
(() => {
 'use strict';
 const data=Array.isArray(window.IVYBRIDGE_ADMISSIONS)?window.IVYBRIDGE_ADMISSIONS:[];
 const featured=data.filter(item=>item.featured!==false && !item.letterOnly);
 const en=document.documentElement.lang.toLowerCase().startsWith('en');
 const t=(zh,english)=>en?english:zh;
 const imagePrefix=en?'../':'';
 const el=(tag,className,content)=>{
   const node=document.createElement(tag);
   if(className)node.className=className;
   if(content!==undefined)node.textContent=content;
   return node;
 };
 const file=entry=>imagePrefix+entry.poster;
 const title=entry=>en?entry.school:entry.zh;
 const program=entry=>en?entry.program:entry.zhProgram;
 const caseLink=entry=>'case.html?id='+encodeURIComponent(entry.id);
 const image=(entry,clazz)=>{
   const wrap=el('div',clazz);
   if(entry.letterOnly){
     wrap.classList.add('ib-letter-in-frame');
     wrap.append(el('div','ib-letter-frame-brand','IvyBridge 領航留學'),
       el('div','ib-letter-frame-kicker','CONGRATULATIONS · 錄取榮譽榜'),
       el('h4','ib-letter-frame-university',title(entry)),
       el('p','ib-letter-frame-program',program(entry)),
       el('span','ib-letter-frame-year',entry.year));
   }
   const picture=el('img','ib-poster-img');
   picture.src=file(entry);
   picture.alt=t('錄取海報：','Admissions poster: ')+entry.school+' · '+entry.program;
   picture.loading='lazy';
   picture.decoding='async';
   picture.addEventListener('error',()=>{
     picture.hidden=true;
     wrap.classList.add('ib-poster-unavailable');
     const note=el('div','ib-poster-missing',t('錄取海報圖片待加入網站資產','Admission poster image pending upload'));
     wrap.append(note);
   },{once:true});
   wrap.append(picture);
   if(entry.letterOnly)wrap.append(el('p','ib-letter-frame-footer','IvyBridge · ADMISSIONS SHOWCASE'));
   return wrap;
 };
 const proofText=t('錄取海報素材 · IvyBridge 參與及公開授權待核實','Admission material · advisory involvement/permission pending');
 const lightbox=document.querySelector('[data-admission-lightbox]');
 let active=0,lastFocus=null;
 const show=index=>{
   if(!lightbox||!featured.length)return;
   active=(index+featured.length)%featured.length;
   const item=featured[active];
   const pic=lightbox.querySelector('[data-lightbox-image]');
   pic.src=file(item);
   pic.alt=t('完整錄取海報：','Full admission poster: ')+item.school;
   lightbox.querySelector('[data-lightbox-caption]').textContent=title(item)+' · '+program(item)+' · '+item.year;
 };
 function close(){
   if(!lightbox)return;
   lightbox.hidden=true;
   document.body.classList.remove('ib-admissions-modal-open');
   if(lastFocus&&typeof lastFocus.focus==='function')lastFocus.focus();
 }
 function open(index,clicked){
   if(!lightbox)return;
   lastFocus=clicked||document.activeElement;
   show(index);
   lightbox.hidden=false;
   document.body.classList.add('ib-admissions-modal-open');
   lightbox.querySelector('[data-lightbox-close]').focus();
 }
 if(lightbox){
   lightbox.querySelector('[data-lightbox-close]')?.addEventListener('click',close);
   lightbox.querySelector('[data-lightbox-prev]')?.addEventListener('click',()=>show(active-1));
   lightbox.querySelector('[data-lightbox-next]')?.addEventListener('click',()=>show(active+1));
   lightbox.addEventListener('click',event=>{if(event.target===lightbox)close();});
   document.addEventListener('keydown',event=>{
     if(lightbox.hidden)return;
     if(event.key==='Escape'){event.preventDefault();close();}
     if(event.key==='ArrowLeft'){event.preventDefault();show(active-1);}
     if(event.key==='ArrowRight'){event.preventDefault();show(active+1);}
     if(event.key==='Tab'){
       const buttons=[...lightbox.querySelectorAll('button')].filter(b=>!b.disabled);
       const first=buttons[0],last=buttons[buttons.length-1];
       if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
       else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
     }
   });
 }
 document.querySelectorAll('[data-featured-admissions]').forEach(container=>{
   const cards=featured.map((item,index)=>{
     const article=el('article','ib-poster-card');
     const button=el('button','ib-poster-open');
     button.type='button';
     button.setAttribute('aria-label',t('放大查看','Enlarge ')+item.school+' '+item.program);
     button.append(image(item,'ib-poster-image'));
     button.addEventListener('click',()=>open(index,button));
     const caption=el('div','ib-poster-card-caption');
     caption.append(el('span','ib-poster-year',item.year),el('h3','',title(item)),el('p','',program(item)));
     const link=el('a','ib-poster-detail-link',t('查看錄取資訊 ↗','View details ↗'));
     link.href=caseLink(item);
     caption.append(link);
     article.append(button,caption);
     return article;
   });
   container.replaceChildren(...cards);
 });
 document.querySelectorAll('[data-admission-library]').forEach(container=>{
   const section=container.closest('section')||document;
   const group=section.querySelector('[data-admission-filters]');
   const count=section.querySelector('[data-admission-count]');
   let selected='all';
   const render=()=>{
     const records=data.filter(item=>selected==='all'||item.field===selected||(Array.isArray(item.fields)&&item.fields.includes(selected)));
     const nodes=records.map(item=>{
       const link=el('a','ib-admission-list-row');
       link.href=caseLink(item);
       const icon=el('span','ib-admission-list-initial',item.school.split(' ').map(s=>s[0]).slice(0,2).join(''));
       const info=el('span','ib-admission-list-info');
       info.append(el('strong','',title(item)),el('small','',program(item)));
       link.append(icon,info,el('span','ib-admission-list-year',item.year),el('span','ib-admission-list-arrow','↗'));
       return link;
     });
     container.replaceChildren(...nodes);
     if(count)count.textContent=t('顯示 '+records.length+' 個錄取海報資料','Showing '+records.length+' admission-poster entries');
     if(!nodes.length)container.append(el('p','ib-story-empty',t('此類別尚無資料。','No entries in this category yet.')));
   };
   group?.querySelectorAll('button[data-admission-field]').forEach(btn=>{
     btn.addEventListener('click',()=>{
       selected=btn.dataset.admissionField;
       group.querySelectorAll('button').forEach(button=>button.setAttribute('aria-pressed',String(button===btn)));
       render();
     });
   });
   render();
 });
 const detail=document.querySelector('[data-admission-detail]');
 if(detail){
   const id=new URLSearchParams(location.search).get('id');
   const entry=data.find(item=>item.id===id);
   if(entry){
     const old=document.querySelector('[data-story-detail]');
     if(old)old.hidden=true;
     detail.hidden=false;
     document.title=title(entry)+' · '+program(entry)+' | IvyBridge';
     const top=el('div','ib-admission-detail-heading');
     top.append(el('span','ib-editorial-eyebrow','ADMISSION LETTER · '+entry.year),
       el('h2','',title(entry)),el('p','',program(entry)));
     const proof=el('p','ib-admissions-proof-note',proofText);
     const panel=el('div','ib-admission-detail-grid');
     const pic=image(entry,'ib-admission-detail-poster');
     const caption=el('div','ib-admission-detail-copy');
     caption.append(el('h3','',t('錄取海報與學程資訊','Admissions poster & program')),
       el('p','',t('圖片保留提供者原始排版與已遮蔽之個資，點擊下方連結可在新分頁查看原圖。','The uploaded image preserves its original design and existing privacy redactions. Open it in a new tab to inspect.')));
     const imgLink=el('a','ib-admissions-all-link',t('開啟完整錄取海報 ↗','Open full admissions poster ↗'));
     imgLink.href=file(entry);imgLink.target='_blank';imgLink.rel='noopener noreferrer';
     caption.append(imgLink,el('p','ib-admissions-proof-note',t('本頁不表示 IvyBridge 與錄取學校存在官方合作關係，也不保證相同錄取結果。','No institutional partnership or similar admissions outcome is implied.')));
     panel.append(pic,caption);
     const back=el('a','ib-admissions-back',t('← 返回所有案例','← Back to case library'));
     back.href='all-cases.html';
     detail.append(top,proof,panel,back);
   }
 }
})();
