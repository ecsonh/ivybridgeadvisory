/* Customer inquiry form: send to the private API, redirect only after confirmed acceptance. */
(()=>{
 'use strict';
 const form=document.getElementById('consult-form');
 if(!form)return;
 const en=document.documentElement.lang==='en';
 const t=(zh,english)=>en?english:zh;
 const status=document.getElementById('form-status');
 const submit=form.querySelector('[type="submit"]');
 const label=submit?.querySelector('[data-submit-label]')||submit;
 const defaultLabel=label?.textContent;
 let sending=false;
 let submissionId;
 const honeypot=document.createElement('div');
 honeypot.className='ib-form-honeypot';
 honeypot.setAttribute('aria-hidden','true');
 const trap=document.createElement('input');
 trap.type='text';trap.name='company_website';trap.tabIndex=-1;trap.autocomplete='off';
 honeypot.append(trap);
 form.append(honeypot);
 form.addEventListener('submit',async (event)=>{
  event.preventDefault();
  if(sending||!form.reportValidity())return;
  const values=Object.fromEntries(new FormData(form));
  values.language=en?'en':'zh';
  if(!submissionId)submissionId=globalThis.crypto?.randomUUID?.()||undefined;
  if(submissionId)values.submissionId=submissionId;
  sending=true;
  form.setAttribute('aria-busy','true');
  if(submit)submit.disabled=true;
  if(label)label.textContent=t('正在安全送出…','Sending securely…');
  if(status)status.textContent=t('正在送出您的諮詢資料，請勿關閉頁面。','Submitting your inquiry. Please keep this page open.');
  try{
    const response=await fetch('/api/inquiry',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      credentials:'same-origin',
      body:JSON.stringify(values)
    });
    const result=await response.json().catch(()=>({}));
    if(!response.ok||result.ok!==true)throw Error('delivery_failed');
    location.assign(en?'inquiry-sent.html':'inquiry-sent.html');
  }catch{
    if(status)status.textContent=t('很抱歉，資料尚未成功送出。請檢查網路連線後重試，或透過 LINE／Email 聯絡我們。您填寫的內容仍保留在此頁。','Sorry, the inquiry was not sent. Please retry or contact us through LINE/email. Your entered information is preserved.');
    sending=false;
    form.removeAttribute('aria-busy');
    if(submit)submit.disabled=false;
    if(label)label.textContent=defaultLabel;
    status?.focus();
  }
 });
})();
