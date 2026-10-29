
    // Case content lives in case-studies-data.js; legacy detail hooks remain inert for compatibility.
    const CASE_DETAILS = {};

    // DOM READY
    document.addEventListener('DOMContentLoaded', () => {
      
      // 1. MOBILE MENU TOGGLE
      const mobileBtn = document.getElementById('mobile-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden'); mobileBtn.setAttribute('aria-expanded', String(!mobileMenu.classList.contains('hidden')));
        });
        document.querySelectorAll('.mobile-nav-link').forEach(link => {
          link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
          });
        });
      }

      // 2. SERVICE TABS SWITCH
      const tabBtnFull = document.getElementById('tab-btn-full');
      const tabBtnSingle = document.getElementById('tab-btn-single');
      const tabContentFull = document.getElementById('tab-content-full');
      const tabContentSingle = document.getElementById('tab-content-single');

      if (tabBtnFull && tabBtnSingle && tabContentFull && tabContentSingle) {
        tabBtnFull.addEventListener('click', () => {
          tabBtnFull.classList.add('text-ivy-800', 'border-ivy-800', 'font-bold');
          tabBtnFull.classList.remove('text-slate-500', 'border-transparent');
          tabBtnSingle.classList.remove('text-ivy-800', 'border-ivy-800', 'font-bold');
          tabBtnSingle.classList.add('text-slate-500', 'border-transparent');
          
          tabContentFull.classList.remove('hidden');
          tabContentSingle.classList.add('hidden');
        });

        tabBtnSingle.addEventListener('click', () => {
          tabBtnSingle.classList.add('text-ivy-800', 'border-ivy-800', 'font-bold');
          tabBtnSingle.classList.remove('text-slate-500', 'border-transparent');
          tabBtnFull.classList.remove('text-ivy-800', 'border-ivy-800', 'font-bold');
          tabBtnFull.classList.add('text-slate-500', 'border-transparent');
          
          tabContentSingle.classList.remove('hidden');
          tabContentFull.classList.add('hidden');
        });
      }

      // 3. CASE STUDIES DUAL FILTER
      let activeField = 'all';
      let activeBg = 'all';

      const fieldBtns = document.querySelectorAll('.filter-field-btn');
      const bgBtns = document.querySelectorAll('.filter-bg-btn');
      const caseCards = document.querySelectorAll('.case-card');

      function applyCaseFilter() {
        caseCards.forEach(card => {
          const cardField = card.getAttribute('data-field');
          const cardBg = card.getAttribute('data-bg');

          const matchField = (activeField === 'all' || cardField === activeField);
          const matchBg = (activeBg === 'all' || (cardBg && cardBg.includes(activeBg)));

          if (matchField && matchBg) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        });
      }

      fieldBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          fieldBtns.forEach(b => {
            b.classList.remove('bg-ivy-800', 'text-white');
            b.classList.add('bg-white', 'text-slate-700');
          });
          btn.classList.add('bg-ivy-800', 'text-white');
          btn.classList.remove('bg-white', 'text-slate-700');
          activeField = btn.getAttribute('data-field');
          applyCaseFilter();
        });
      });

      bgBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          bgBtns.forEach(b => {
            b.classList.remove('bg-slate-800', 'text-white');
            b.classList.add('bg-white', 'text-slate-700');
          });
          btn.classList.add('bg-slate-800', 'text-white');
          btn.classList.remove('bg-white', 'text-slate-700');
          activeBg = btn.getAttribute('data-bg');
          applyCaseFilter();
        });
      });

      // 4. CASE MODAL OPEN & CLOSE
      const caseModal = document.getElementById('case-modal');
      const modalContent = document.getElementById('modal-content');
      const closeModalBtn = document.getElementById('close-modal-btn');
      const modalCloseAction = document.getElementById('modal-close-action');
      const modalEvalBtn = document.getElementById('modal-eval-btn');

      function openModal(id) {
        const data = CASE_DETAILS[id];
        if (!data || !caseModal || !modalContent) return;

        modalContent.innerHTML = `
          <div class="space-y-4">
            <div class="inline-block px-2.5 py-1 bg-gold-50 text-gold-700 border border-gold-200 rounded text-xs font-semibold">
              ${data.highlight}
            </div>
            <h3 class="text-xl font-bold text-ivy-900 font-serif">${data.title}</h3>
            <p class="text-sm font-semibold text-slate-700">${data.degree}</p>
            
            <div class="p-4 bg-slate-50 rounded-lg border border-slate-200 text-xs space-y-1.5 text-slate-700">
              <p><strong>原就讀背景：</strong> ${data.school}</p>
              <p><strong>標化檢定：</strong> ${data.gpa}</p>
              <p><strong>獎學金成果：</strong> <span class="text-gold-700 font-bold">${data.award}</span></p>
            </div>

            <div class="text-xs space-y-3 text-slate-600 leading-relaxed pt-2">
              <div>
                <h4 class="font-bold text-rose-800 mb-1 flex items-center gap-1.5">
                  <span>●</span> 學生原始痛點與盲點：
                </h4>
                <p class="pl-3 border-l-2 border-rose-200">${data.painPoint}</p>
              </div>

              <div>
                <h4 class="font-bold text-ivy-800 mb-1 flex items-center gap-1.5">
                  <span>●</span> IvyBridge 定製破局策略：
                </h4>
                <p class="pl-3 border-l-2 border-ivy-300">${data.strategy}</p>
              </div>

              <div class="bg-gold-50/60 p-3 rounded border border-gold-200/80 italic text-slate-700">
                ${data.quote}
              </div>
            </div>
          </div>
        `;
        caseModal.classList.remove('hidden');
      }

      function closeModal() {
        if (caseModal) caseModal.classList.add('hidden');
      }

      caseCards.forEach(card => {
        card.addEventListener('click', () => {
          const id = card.getAttribute('data-id');
          openModal(id);
        });
      });

      if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
      if (modalCloseAction) modalCloseAction.addEventListener('click', closeModal);
      if (modalEvalBtn) modalEvalBtn.addEventListener('click', closeModal);

      // 5. TIMELINE ACCORDION TOGGLE
      const timelineToggles = document.querySelectorAll('.timeline-toggle');
      timelineToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
          const body = toggle.nextElementSibling;
          const icon = toggle.querySelector('.toggle-icon');
          if (body) {
            body.classList.toggle('hidden');
            if (icon) {
              icon.textContent = body.classList.contains('hidden') ? '+' : '−';
            }
          }
        });
      });

      // 6. TUITION & COST CALCULATOR
      const costRegion = document.getElementById('cost-region');
      const costType = document.getElementById('cost-type');
      const costMajor = document.getElementById('cost-major');
      const costOutputUsd = document.getElementById('cost-output-usd');
      const costOutputTwd = document.getElementById('cost-output-twd');

      function calculateCost() {
        if (!costRegion || !costType || !costMajor || !costOutputUsd || !costOutputTwd) return;
        
        let tuitionMin = 35000;
        let tuitionMax = 55000;
        let livingMin = 20000;
        let livingMax = 28000;

        // Type
        if (costType.value === 'public') {
          tuitionMin = 28000;
          tuitionMax = 48000;
        } else {
          tuitionMin = 45000;
          tuitionMax = 65000;
        }

        // Major
        if (costMajor.value === 'mba') {
          tuitionMin += 18000;
          tuitionMax += 22000;
        } else if (costMajor.value === 'stem') {
          tuitionMin += 5000;
          tuitionMax += 8000;
        }

        // Region
        if (costRegion.value === 'east') {
          livingMin = 26000;
          livingMax = 36000;
        } else if (costRegion.value === 'west') {
          livingMin = 24000;
          livingMax = 34000;
        } else {
          livingMin = 18000;
          livingMax = 26000;
        }

        const totalMin = tuitionMin + livingMin;
        const totalMax = tuitionMax + livingMax;

        const rate = 32.0; // USD to TWD
        const twdMin = Math.round((totalMin * rate) / 10000);
        const twdMax = Math.round((totalMax * rate) / 10000);

        costOutputUsd.textContent = `$${totalMin.toLocaleString()} ~ $${totalMax.toLocaleString()} USD`;
        costOutputTwd.textContent = document.documentElement.lang === "en" ? `Approximately NT$ ${(twdMin*10000).toLocaleString()}–${(twdMax*10000).toLocaleString()} per year (tuition and basic living / insurance).` : `折合新台幣約：NT$ ${twdMin} 萬 ~ ${twdMax} 萬元／年（含學費與基本食宿保險）`;
      }

      if (costRegion && costType && costMajor) {
        costRegion.addEventListener('change', calculateCost);
        costType.addEventListener('change', calculateCost);
        costMajor.addEventListener('change', calculateCost);
        calculateCost();
      }

      const form = document.getElementById('consult-form');
      if(form) form.addEventListener('submit', e => {
        e.preventDefault();
        if(!form.reportValidity()) return;
        const data = Object.fromEntries(new FormData(form));
        const blob = new Blob([JSON.stringify(data, null, 2)], {type:'application/json'});
        const url = URL.createObjectURL(blob); const link = document.createElement('a');
        link.href=url; link.download=document.documentElement.lang === 'en'?'IvyBridge-consultation.json':'IvyBridge-諮詢資料.json'; link.click();
        setTimeout(()=>URL.revokeObjectURL(url),1000);
        document.getElementById('form-status').textContent=document.documentElement.lang === 'en'?'Download prepared. Check your browser downloads. Nothing has been sent and no booking has been made.':'已產生下載檔案，請確認瀏覽器下載結果。資料尚未傳送，也尚未成立預約。';
      });
      // 8. GENERAL NOTICE MODAL (LINE / PRIVACY / CALENDLY)
      const noticeModal = document.getElementById('general-notice-modal');
      const noticeTitle = document.getElementById('notice-modal-title');
      const noticeBody = document.getElementById('notice-modal-body');
      const closeNoticeBtn = document.getElementById('close-notice-modal');

      function showNotice(title, htmlContent) {
        if (!noticeModal || !noticeTitle || !noticeBody) return;
        noticeTitle.textContent = title;
        noticeBody.innerHTML = htmlContent;
        noticeModal.classList.remove('hidden');
      }

      if (closeNoticeBtn) {
        closeNoticeBtn.addEventListener('click', () => {
          noticeModal.classList.add('hidden');
        });
      }

      // Trigger buttons
      const topLineBtn = document.getElementById('top-line-btn');
      const openLineBtn = document.getElementById('open-line-modal-btn');
      const mobileLineBtn = document.getElementById('mobile-line-btn');
      const copyLineBtn = document.getElementById('copy-line-btn');
      const openCalNotice = document.getElementById('open-calendar-notice');
      const privacyLink = document.getElementById('privacy-link');

      const lineNoticeHtml = '<p>官方 LINE 帳號與加入好友連結尚待確認，目前不提供加入或複製功能。</p>';
      if (topLineBtn) topLineBtn.addEventListener('click', () => showNotice('LINE 官方即時諮詢', lineNoticeHtml));
      if (openLineBtn) openLineBtn.addEventListener('click', () => showNotice('LINE 官方即時諮詢', lineNoticeHtml));
      if (mobileLineBtn) mobileLineBtn.addEventListener('click', () => showNotice('LINE 官方即時諮詢', lineNoticeHtml));

      if (openCalNotice) {
        openCalNotice.addEventListener('click', () => {
          showNotice('Calendly 線上預約系統', `
            <p>線上預約尚未開放；Calendly 正式連結待品牌方提供。</p>
            <p>目前問卷只供下載，不會寄信或安排預約。</p>
          `);
        });
      }

      if (privacyLink) {
        privacyLink.addEventListener('click', () => {
          showNotice('隱私權政策與責任規範', `
            <p><strong>1. 資料隱私承諾：</strong>學員所填寫之在校成績、科系與聯絡資訊，僅用於 IvyBridge 留學申請評估與溝通，絕不作為第三方商業用途。</p>
            <p><strong>2. 零佣金獨立性：</strong>IvyBridge 保證絕不接受任何學校之佣金回扣，所有選校建議均完全立足於學員的最大生涯與錄取利益。</p>
            <p><strong>3. 帳號自主權：</strong>全案服務過程中，所有申請帳號密碼完全由學員自主控管，保障 100% 透明。</p>
          `);
        });
      }

    });
  
document.addEventListener('DOMContentLoaded',()=>{
  // Dialog focus, Escape, backdrop, focus trap and restoration.
  let previousFocus=null;
  document.querySelectorAll('[role="dialog"]').forEach(dialog=>{
    const observer=new MutationObserver(()=>{
      if(!dialog.classList.contains('hidden')){
        previousFocus=document.activeElement;
        document.body.style.overflow='hidden';
        dialog.querySelector('button,a[href],input')?.focus();
      }else{
        document.body.style.overflow='';
        previousFocus?.focus();
      }
    });
    observer.observe(dialog,{attributes:true,attributeFilter:['class']});
    dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.classList.add('hidden')});
    dialog.addEventListener('keydown',e=>{
      if(e.key==='Escape'){dialog.classList.add('hidden');return}
      if(e.key!=='Tab')return;
      const nodes=[...dialog.querySelectorAll('button,a[href],input,select,textarea,[tabindex="0"]')].filter(x=>!x.disabled&&x.getClientRects().length);
      const first=nodes[0],last=nodes.at(-1);
      if(e.shiftKey&&document.activeElement===first){e.preventDefault();last?.focus()}
      else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus()}
    });
  });
  document.querySelectorAll('.case-card').forEach(card=>card.addEventListener('keydown',e=>{
    if(e.key==='Enter'||e.key===' '){e.preventDefault();card.click()}
  }));
  const cards=[...document.querySelectorAll('.case-card')];
  if(cards.length){
    const status=document.createElement('p');status.setAttribute('role','status');status.className='page-toc';cards[0].parentElement.after(status);
    const update=()=>{const n=cards.filter(c=>!c.classList.contains('hidden')).length;status.textContent=n?`符合條件：${n} 筆示意案例`:'目前沒有符合條件的案例，請調整篩選。'};
    document.querySelectorAll('.filter-field-btn,.filter-bg-btn').forEach(btn=>btn.addEventListener('click',update));update();
  }
  document.querySelectorAll('.timeline-toggle').forEach(btn=>{
    btn.setAttribute('aria-expanded',String(!btn.nextElementSibling.classList.contains('hidden')));
    btn.addEventListener('click',()=>btn.setAttribute('aria-expanded',String(!btn.nextElementSibling.classList.contains('hidden'))));
  });
  const menu=document.getElementById('mobile-menu'),btn=document.getElementById('mobile-menu-btn');
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu&&!menu.classList.contains('hidden')){menu.classList.add('hidden');btn.setAttribute('aria-expanded','false');btn.focus()}});
});

document.addEventListener('DOMContentLoaded',()=>{
 const tabs=[document.getElementById('tab-btn-full'),document.getElementById('tab-btn-single')].filter(Boolean);
 if(tabs.length===2){
  tabs[0].parentElement.setAttribute('role','tablist');tabs[0].parentElement.setAttribute('aria-label','服務方案');
  const sync=()=>tabs.forEach((t,i)=>{const panel=document.getElementById(i?'tab-content-single':'tab-content-full');const active=!panel.classList.contains('hidden');t.setAttribute('role','tab');t.setAttribute('aria-controls',panel.id);t.setAttribute('aria-selected',String(active));t.tabIndex=active?0:-1;panel.setAttribute('role','tabpanel');panel.setAttribute('aria-labelledby',t.id)});
  tabs.forEach((t,i)=>{t.addEventListener('click',sync);t.addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight','Home','End'].includes(e.key)){e.preventDefault();const next=e.key==='Home'?0:e.key==='End'?1:1-i;tabs[next].click();tabs[next].focus()}})});sync();
 }
 for(const selector of ['.filter-field-btn','.filter-bg-btn']){
  const buttons=[...document.querySelectorAll(selector)];
  const sync=()=>buttons.forEach(b=>b.setAttribute('aria-pressed',String(b.classList.contains('text-white'))));buttons.forEach(b=>b.addEventListener('click',sync));sync();
 }
 const menu=document.getElementById('mobile-menu'),trigger=document.getElementById('mobile-menu-btn');
 document.querySelectorAll('.mobile-nav-link').forEach(a=>a.addEventListener('click',()=>trigger?.setAttribute('aria-expanded','false')));
 const media=matchMedia('(min-width:1280px)');media.addEventListener('change',()=>{if(media.matches&&menu){menu.classList.add('hidden');trigger?.setAttribute('aria-expanded','false')}});
});
