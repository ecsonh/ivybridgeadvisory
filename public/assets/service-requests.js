/* Shared request behavior for both languages. No data is sent or stored. */
(() => {
 'use strict';
 const en=document.documentElement.lang==='en';
 const t=(zh,eng)=>en?eng:zh;
 const plan=new URLSearchParams(location.search).get('plan');
 const select=document.getElementById('form-service-type');
 if(select&&['essential','comprehensive','elite','custom'].includes(plan))select.value=plan;
 const form=document.getElementById('custom-request');
 if(!form)return;
 const mode=new URLSearchParams(location.search).get('mode');
 if(mode==='consultation')form.querySelector('[value="consultation"]').checked=true;
 const status=document.getElementById('custom-status'),output=document.getElementById('custom-summary');
 function prepare(){
  if(!form.reportValidity())return null;
  const selected=[...form.querySelectorAll('[name="services"]:checked')];
  if(!selected.length){status.textContent=t('請至少選擇一項服務。','Please choose at least one service.');form.querySelector('[name="services"]').focus();return null;}
  const labels={countries:t('國家／地區','Countries / regions'),programs:t('項目數','Programs'),entry:t('入學學期','Intake'),deadline:t('最早截止日','Earliest deadline'),notes:t('背景與需求','Background and needs'),name:t('姓名','Name'),email:'Email'};
  const data=new FormData(form);
  const text=['IvyBridge — '+t('客製化服務需求','Custom service request'),t('需要的服務：','Requested services: ')+selected.map(el=>el.parentElement.textContent.trim()).join(' / '),...Object.entries(labels).map(([key,label])=>label+': '+(data.get(key)||t('未填寫','Not provided')))].join('\n\n');
  output.textContent=text;status.textContent=t('需求已整理，尚未傳送。可複製或下載後，透過正式聯絡管道提供給我們。','Request prepared; nothing has been sent. Copy or download it for sharing through a verified contact channel.');return text;
 }
 form.addEventListener('submit',e=>{e.preventDefault();prepare()});
 document.getElementById('custom-copy').addEventListener('click',async()=>{const text=prepare();if(!text)return;try{await navigator.clipboard.writeText(text);status.textContent=t('已複製需求，尚未傳送。','Request copied; nothing has been sent.')}catch{status.textContent=t('無法自動複製，請選取下方摘要手動複製。','Automatic copying is unavailable. Select and copy the summary below.')}});
 document.getElementById('custom-download').addEventListener('click',()=>{const text=prepare();if(!text)return;const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='IvyBridge-custom-request.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);status.textContent=t('已產生下載檔案，尚未傳送。','Download prepared; nothing has been sent.')});
})();
