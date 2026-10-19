"""Regenerate bilingual plan markup from data/plans.json (Python standard library only)."""
from pathlib import Path
from html import escape as e
import json,re
ROOT=Path(__file__).resolve().parents[1]
PLANS=json.loads((ROOT/'data/plans.json').read_text())
def render(lang,details=False):
 en=lang=='en';t=lambda z,a:a if en else z
 title=t('三種申請方案，清楚的服務範圍','Three plans. Clearly defined support.') if details else t('依照你的目標，選擇適合的申請支持','Choose the support that fits your goals')
 cards=''
 for p in PLANS:
  d=p[lang];id=p['id'];cls='ib-detail' if details else 'ib-plan';attrs=f' id="{id}" tabindex="-1"' if details else ''
  price=f'<p class="ib-detail-price">US${p["price"]:,}</p><p class="ib-extra">'+t(f'每加申 1 個項目：US${p["extra"]:,}',f'Each additional program: US${p["extra"]:,}')+'</p>' if details else ''
  items=''.join('<li>'+e(x)+'</li>' for x in d['items'])
  href=f'contact.html?plan={id}' if details else f'services.html#{id}'
  cards+=f'<article class="{cls}" data-plan="{id}"{attrs}><h3>{e(d["name"])}</h3>{price}<ul>{items}</ul><a class="ib-plan-link" href="{href}">'+t('預約方案諮詢 →' if details else '了解方案詳情 →','Discuss this plan →' if details else 'View plan details →')+'</a></article>'
 lead=t('專注碩士申請，依照你需要的參與程度與申請範圍選擇。','Master’s admissions support, tailored to how much help you need and where you want to apply.')
 out=f'<section class="ib-plans" id="{ "plan-details" if details else "plans" }"><div class="ib-plans-inner"><h{1 if details else 2}>{title}</h{1 if details else 2}><p class="ib-lead">{lead}</p><div class="ib-detail-grid" >{cards}</div>'
 if details:
  out+='<div class="ib-boundary"><h2>'+t('服務分工與費用說明','Responsibilities and fees')+'</h2><ul>'
  notes=[t('方案一由學生自行操作網申及送件；方案二、三由顧問協助填寫全部資料並協調送件，減少學生操作負擔。','In Essential, applicants manage forms and submission. In Comprehensive and Elite, advisors complete application information and coordinate submission to minimize administrative work.'),t('學生仍須提供真實完整資料、確認最終內容；本人聲明、驗證、付款及面試等須由本人完成的步驟，依各校與機關規定辦理。','Applicants provide accurate information and approve final materials. Personal attestations, verification, payment and interviews follow the institution’s requirements and may require the applicant’s own action.'),t('所有價格以美元計；加申按「項目」計算，同校不同項目分別計數。學校申請費、簽證規費、考試、翻譯等第三方費用另計。','All fees are in USD. Each program counts separately, including different programs at the same university. School application fees, visa fees, tests, translations and other third-party charges are excluded.'),t('簽證填表與材料協助包含於方案三；簽證決定由相關機關作成。文書以學生真實經歷為基礎，具體範圍、時程與修改安排於合約確認，不保證錄取。','Visa form and document assistance is included in Elite; decisions rest with the relevant authorities. Essays reflect the applicant’s own experience. Scope, timelines and revision arrangements are confirmed in the agreement; admission is not guaranteed.')]
  out+=''.join('<li>'+x+'</li>' for x in notes)+'</ul></div>'
 out+='<aside class="ib-custom-callout"><h'+('2' if details else '3')+'>'+t('只需要部分協助？','Need support with just part of your application?')+'</h'+('2' if details else '3')+'><p>'+t('選擇文書、選校、面試或純諮詢，告訴我們你的需求，再確認專屬服務範圍與報價。','Choose essays, program research, interviews or consultation only. Tell us what you need for an individualized scope and quote.')+'</p><a class="ib-plan-link" href="custom-services.html">'+t('我想要客製化服務 →','Build a custom service request →')+'</a></aside></div></section>'
 if details:
  out+='<section class="ib-plans ib-detail-section" id="service-paths"><div class="ib-plans-inner"><h2>'+t('三種服務路徑','Three ways to work with us')+'</h2><ol class="ib-paths"><li><a href="#plan-details">'+t('全案申請：比較上述三個方案','Admissions packages: compare the three plans above')+'</a></li><li><a href="custom-services.html?mode=modular">'+t('模組化單項：選校、文書、面試、網申或簽證材料','Modular support: program research, essays, interviews, forms or visa documents')+'</a></li><li><a href="custom-services.html?mode=consultation">'+t('純諮詢：先釐清方向，不綁定全案服務','Consultation only: clarify your direction without a full package')+'</a></li></ol></div></section>'
 return out
for p in (ROOT/'public').rglob('*.html'):
 s=p.read_text();lang='en' if p.parent.name=='en' else 'zh'
 for kind,detail in [('summary',False),('services',True)]:
  start=f'<!-- PLANS:{kind}:start -->';end=f'<!-- PLANS:{kind}:end -->'
  if start in s:s=re.sub(re.escape(start)+'.*?'+re.escape(end),lambda m:start+render(lang,detail)+end,s,flags=re.S)
 p.write_text(s)
