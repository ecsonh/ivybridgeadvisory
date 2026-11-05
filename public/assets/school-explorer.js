/* Shared bilingual explorer. Estimates are never presented as observed program rates. */
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
 const compare=root.querySelector('#ib-school-compare'),count=root.querySelector('#ib-school-count');
 const names=Object.keys(db).sort((a,b)=>a.localeCompare(b,'en'));
 school.replaceChildren();
 for(const name of names){const o=document.createElement('option');o.value=name;o.textContent=name;school.appendChild(o)}
 if(count)count.textContent=tr(`收錄 ${names.length} 所美國大學（精選清單，非官方排名）`,`${names.length} curated U.S. universities (not an official ranking)`);
 school.value=names.includes('Stanford University')?'Stanford University':names[0];
 function render(){
   const row=db[school.value]?.[field.value];
   // Clear the previous record's URL even when the next record has no source.
   source.hidden=true;source.removeAttribute('href');source.textContent='';
   compare.hidden=true;
   const valid=row && typeof row.rate==='number' && Number.isFinite(row.rate) && row.rate>=0 && row.rate<=100;
   const estimated=row?.quality==='estimate';
   const reported=row?.quality==='owner-reported';
   const sourced=valid && ['official','official-calculated','secondary'].includes(row.quality) && /^https:\/\//.test(row.source||'');
   root.dataset.dataQuality=estimated?'estimate':reported?'owner-reported':sourced?row.quality:'unavailable';
   if(valid && (estimated || reported || sourced)){
     metric.textContent=(estimated?'≈ ':'')+new Intl.NumberFormat(en?'en-US':'zh-TW',{maximumFractionDigits:2}).format(row.rate)+'%';
     const status=estimated?tr('非官方估計・未經核實','Unofficial estimate · unverified'):reported?tr('提供數值・尚未核實','Supplied figure · unverified'):row.quality==='secondary'?tr('第三方資料','Third-party report'):row.quality==='official-calculated'?tr('校方數據計算','Calculated from university figures'):tr('校方數據','University source');
     sub.textContent=status+' · '+row.program+' · '+(row.year||tr('招生年份未提供','Admissions year unspecified'));
     if(sourced){
       source.hidden=false;source.href=row.source;
       source.textContent=row.quality==='secondary'?tr('查看第三方資料 ↗','View third-party source ↗'):tr('查看校方資料 ↗','View university source ↗');
     }
     if(estimated){
       note.textContent=tr('委託方提供的粗略規劃估計，沒有可核實的招生統計或明確年份；不是學校公布的實際錄取率、學程平均或個人錄取機率，也不保證該校設有對應學程。','Owner-supplied rough planning estimate with no verifiable admissions statistics or cohort year. Not a university-published rate, measured program average, personal admission probability or confirmation of a corresponding degree.');
     }else if(reported){
       note.textContent=tr('提供的參考數值尚未核實來源與招生年份，不應視為已確認的錄取率。','The supplied reference figure has no verified source or cohort year and must not be treated as a confirmed acceptance rate.');
     }else{
       const caveat=field.value==='business'?tr('僅代表列出的 MBA 學程，不適用所有商科碩士（MSBA／MFin 等）。','Applies only to the named MBA program, not all business master’s degrees such as MSBA or MFin.'):tr('僅代表列出的個別碩士學程，不是整校或整個領域的平均錄取率。','Applies only to the named master’s program, not a university-wide or field-wide average.');
       const historical=field.value==='business' && !row.year?tr('資料頁未註明招生年度；網頁更新日期不等於招生年份，歷史數據也不代表目前仍開放招生。','The profile does not state the admission cohort. A page update date is not an admissions year, and historical data does not establish current program availability.') : '';
       note.textContent=caveat+' '+(historical || (en?row.note:row.noteZh||row.note)||'');
     }
   }else{
     metric.textContent=tr('N/A・無可比較資料','N/A · No comparable data');
     sub.textContent=tr('目前未提供此校此領域可比較的錄取率；不代表 0%。','No comparable rate is supplied for this institution and field; this does not mean 0%.');
     note.textContent=tr('請以個別學程官方招生要求為準。無法確認可比較的學程或沒有公開數據時，不推算錄取率。','Check the individual program’s official admission requirements. No rate is inferred when a comparable program or published figure cannot be confirmed.');
   }
 }
 school.addEventListener('change',render);field.addEventListener('change',render);render();
})();
