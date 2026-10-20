/* IvyBridge master's admissions explorer. Data lives in admissions-data.js. */
(() => {
 'use strict';
 const root=document.getElementById('ib-school-explorer');
 const db=window.IVYBRIDGE_ADMISSIONS_DATA?.schools;
 if(!root || !db)return;
 const en=document.documentElement.lang==='en';
 const tr=(zh,eng)=>en?eng:zh;
 const school=root.querySelector('#ib-school-choice'),field=root.querySelector('#ib-field-choice');
 const metric=root.querySelector('#ib-school-metric'),sub=root.querySelector('#ib-school-subtitle');
 const source=root.querySelector('#ib-school-source'),note=root.querySelector('#ib-school-note');
 const compare=root.querySelector('#ib-school-compare');
 const count=root.querySelector('#ib-school-count');
 const names=Object.keys(db).sort((a,b)=>a.localeCompare(b,'en'));
 school.replaceChildren();
 for(const name of names){const o=document.createElement('option');o.value=name;o.textContent=name;school.appendChild(o)}
 if(count)count.textContent=tr('收錄 50 所美國大學（精選清單，非官方排名）','50 curated U.S. universities (not an official ranking)');
 school.value='Stanford University';
 function render(){
   const item=db[school.value];
   if(!item)return;
   const row=item[field.value];
   if(row&&typeof row.rate==='number'&&row.source){
     metric.textContent=new Intl.NumberFormat(en?'en-US':'zh-TW',{maximumFractionDigits:2}).format(row.rate)+'%';
     sub.textContent=row.program+' · '+row.year+' · '+(row.quality==='secondary'?tr('第三方資料','Third-party source'):row.quality==='official-calculated'?tr('校方數據計算','Calculated from university figures'):tr('校方數據','University source'));
     source.hidden=false;
     source.href=row.source;
     source.textContent=(row.quality==='secondary'?tr('第三方研究資料 ↗','Third-party study ↗'):tr('校方資料 ↗','Official university source ↗'));
     const caveat=(field.value==='business'?tr('本數字代表此校特定 MBA 項目，不是所有商科碩士（MSBA、MFin 等）的錄取率。','This rate refers to the specified MBA program, not all business master’s degrees such as MSBA or MFin.'):tr('本數字只代表列出的碩士項目，並非整校 STEM 錄取率。','This rate describes the named master’s program, not university-wide STEM admissions.'));
     note.textContent=caveat+' '+(row.note||'');
   }else{
     metric.textContent=tr('尚無可信數據','No verified rate');
     sub.textContent=tr('此校此領域尚未找到可核實的碩士項目錄取率。','No verifiable master’s program acceptance rate is currently recorded for this institution and field.');
     source.hidden=true;
     note.textContent=(item.stemNote&&field.value==='stem')?item.stemNote:tr('可在 GitHub 的 public/assets/admissions-data.js 補充 Program、年份、來源及錄取率。','Program-level figures can be added in public/assets/admissions-data.js with year and source.');
   }
   compare.hidden=true;
 }
 school.addEventListener('change',render);
 field.addEventListener('change',render);
 render();
})();