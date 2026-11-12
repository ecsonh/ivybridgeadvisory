/* Server-side inquiry delivery. No email credentials are exposed to the browser. */
'use strict';
const DESTINATION = 'ivybridgeadvisory@gmail.com';
const MAX_BYTES = 16384;
const FIELDS = {
  'form-name': ['姓名 / Name', 200, true],
  'form-email': ['Email', 254, true],
  'form-school': ['目前就讀／畢業學校 / University', 200, false],
  'form-major': ['主修科系 / Current major', 200, false],
  'form-entry-year': ['預計入學年份 / Intended intake', 100, true],
  'form-target-major': ['目標專業 / Target program', 200, true],
  'form-service-type': ['期望方案 / Service interest', 30, true],
  'form-test': ['TOEFL / IELTS / GRE', 200, false],
  'form-line': ['LINE / WeChat', 200, false],
  'form-phone': ['聯絡電話 / Phone', 100, false],
  'form-notes': ['申請挑戰與問題 / Questions', 4000, false]
};
const PLANS = new Set(['essential','comprehensive','elite','custom','not-sure']);
const NAME = /^[^\r\n\u0000-\u001f\u007f]{1,200}$/;
const EMAIL = /^[^\s@\r\n]+@[^\s@\r\n]+\.[^\s@\r\n]+$/;
function reply(res,status,body){
  res.setHeader('Content-Type','application/json; charset=utf-8');
  res.setHeader('Cache-Control','no-store');
  return res.status(status).json(body);
}
function normalize(input){
  const out={};
  for(const [key,[label,max,required]] of Object.entries(FIELDS)){
    const raw=input[key];
    if(raw!==undefined && typeof raw!=='string')return {error:'invalid_fields'};
    const value=(raw||'').trim();
    if(value.length>max || (required && !value))return {error:'invalid_fields'};
    out[key]=value;
  }
  if(!NAME.test(out['form-name']) || !EMAIL.test(out['form-email']) || out['form-email'].length>254 || !PLANS.has(out['form-service-type'])) return {error:'invalid_fields'};
  return {values:out};
}
module.exports = async function handler(req,res){
  if(req.method==='OPTIONS')return reply(res,405,{error:'method_not_allowed'});
  if(req.method!=='POST'){res.setHeader('Allow','POST');return reply(res,405,{error:'method_not_allowed'});}
  if(!String(req.headers['content-type']||'').toLowerCase().startsWith('application/json'))return reply(res,415,{error:'unsupported_media_type'});
  const origin=req.headers.origin;
  if(origin){
    let originHost;
    try{const parsed=new URL(origin);if(parsed.protocol!=='https:' && parsed.hostname!=='localhost')throw Error('origin');originHost=parsed.host;}catch{return reply(res,403,{error:'forbidden'});}
    if(originHost!==req.headers.host)return reply(res,403,{error:'forbidden'});
  }
  const declaredSize=Number(req.headers['content-length']||0);
  if(declaredSize>MAX_BYTES)return reply(res,413,{error:'too_large'});
  let input=req.body;
  if(typeof input==='string'){
    if(Buffer.byteLength(input,'utf8')>MAX_BYTES)return reply(res,413,{error:'too_large'});
    try{input=JSON.parse(input);}catch{return reply(res,400,{error:'invalid_json'});}
  }
  if(!input||Array.isArray(input)||typeof input!=='object')return reply(res,400,{error:'invalid_fields'});
  if(input.consent!==true)return reply(res,422,{error:'consent_required'});
  if(Buffer.byteLength(JSON.stringify(input),'utf8')>MAX_BYTES)return reply(res,413,{error:'too_large'});
  // Non-visible bot-trap field: ignore automated submissions without sending.
  if(typeof input.company_website==='string' && input.company_website.trim())return reply(res,200,{ok:true});
  const result=normalize(input);
  if(result.error)return reply(res,422,{error:result.error});
  const apiKey=process.env.RESEND_API_KEY;
  const sender=process.env.RESEND_FROM_EMAIL;
  if(!apiKey||!sender)return reply(res,503,{error:'service_unavailable'});
  const values=result.values;
  const language=input.language==='en'?'English':'繁體中文';
  const textBody=[
    'IvyBridge｜新諮詢表單 / New consultation inquiry',
    '提交時間 (UTC): '+new Date().toISOString(),
    '表單語言 / Language: '+language,
    '',
    ...Object.entries(FIELDS).map(([field,[label]])=>label+': '+(values[field]||'未提供 / Not provided')),
    '',
    '提醒：此封信來自網站表單。請勿直接信任其中的外部連結或私人資料。'
  ].join('\n');
  let provider;
  try{
    const key=typeof input.submissionId==='string' && /^[0-9a-fA-F-]{36}$/.test(input.submissionId)?input.submissionId:null;
    const headers={
      Authorization:'Bearer '+apiKey,
      'Content-Type':'application/json',
      'User-Agent':'IvyBridge-Inquiries/1.0'
    };
    if(key)headers['Idempotency-Key']='ivybridge-inquiry-'+key;
    provider=await fetch('https://api.resend.com/emails',{
      method:'POST',headers,
      body:JSON.stringify({
        from:sender,
        to:[DESTINATION],
        reply_to:[values['form-email']],
        subject:'【IvyBridge 新諮詢】'+values['form-name'].slice(0,70)+' · '+values['form-target-major'].slice(0,70),
        text:textBody
      }),
      signal:AbortSignal.timeout(9000)
    });
  }catch{return reply(res,502,{error:'delivery_failed'});}
  if(!provider.ok)return reply(res,502,{error:'delivery_failed'});
  let response;
  try{response=await provider.json();}catch{return reply(res,502,{error:'delivery_failed'});}
  if(!response||typeof response.id!=='string'||!response.id)return reply(res,502,{error:'delivery_failed'});
  return reply(res,200,{ok:true});
};
