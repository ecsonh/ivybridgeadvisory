
    // CASE STUDIES DATA
    const CASE_DETAILS = {
      1: {
        title: "Carnegie Mellon University (CMU)",
        degree: "Master of Science in Computer Science (MSCS)",
        school: "國立台灣大學 機械工程學系",
        gpa: "GPA 3.65 / TOEFL 108 / GRE 328 (Q170)",
        award: "$15,000 美金入學獎學金",
        highlight: "台大機械跨考頂級電資 CMU CS",
        painPoint: "學生雖有出色的機械控制與數理底子，但非 CS 本科，缺乏大廠軟體實習與大型 Distributed System 專案，先前自行撰寫之 SOP 難以擺脫硬體工程思維。",
        strategy: "1. 顧問梳理出其機械控制代碼與自駕車演算法之深層關聯，提煉為「物理與計算智能交匯」的獨特個人敘事；2. 協助參與開源社群專案並重組 GitHub 作品集；3. 邀請 CMU 校友導師模擬技術面試，打消招生委員對跨領域編碼能力的疑慮。",
        quote: "「IvyBridge 顧問完全不是流水線代辦，他們比我自己還懂我的研究亮點，讓我從原本不敢想的 CMU，一舉拿下錄取與獎學金！」"
      },
      2: {
        title: "Columbia University (常春藤哥倫比亞大學)",
        degree: "MS in Electrical Engineering",
        school: "輔仁大學 電機工程系",
        gpa: "GPA 2.97 ➔ WES 認證後 3.24 / TOEFL 102 / GRE Waiver",
        award: "常春藤名校正式無條件錄取",
        highlight: "低 GPA (<3.0) 逆襲常春藤盟校",
        painPoint: "大學前兩年因社團投入過多導致 GPA 跌破 3.0，曾被三家傳統代辦宣判「絕無可能進入全美前 30 名校」，信心受重創。",
        strategy: "1. 依各校規範呈現完整成績與後期學習表現；成績認證不保證提高 GPA；2. 協助挖掘其在封裝測試廠的大四專案，將實務專利產出包裝為關鍵科研優勢；3. SOP 採用「成長型思維 (Growth Mindset)」架構，坦率闡述轉折並以亮眼專業表現覆蓋過去劣勢。",
        quote: "「當別家代辦叫我只能去百名外的 Pathway 時，IvyBridge 幫我做出了最震撼的翻盤方案，走進哥大校園那一刻真的熱淚盈眶。」"
      },
      3: {
        title: "MIT Sloan School of Management",
        degree: "Master of Business Analytics (MBAn)",
        school: "UC San Diego (美本在美學生)",
        gpa: "GPA 3.82 / GRE 332 / 免托福",
        award: "$25,000 Dean's Fellowship 獎學金",
        highlight: "全球錄取率僅 4% 頂尖商學院",
        painPoint: "在美本科生語言流利，但面對 MIT 這種頂級神仙打架項目，缺乏足夠引人注目的個人商業影響力定位 (Executive Presence)。",
        strategy: "1. 全面重構商業短文 (Short Essays)，將金融科技量化實習與社會公益數據分析結合；2. 針對 MIT 嚴格的 Video Statement 進行 6 次一對一演練，雕琢自信從容的眼神與語速節奏；3. 推薦人選定為資深量化基金主管與系主任，構建互補視角。",
        quote: "「美本申請更需要懂美國頂級商學院文化的專家，IvyBridge 顧問的細緻度與專業高度完全刷新我的認知！」"
      },
      4: {
        title: "UT Austin (McCombs 商學院)",
        degree: "MS in Information Technology & Management",
        school: "國立政治大學 企業管理學系",
        gpa: "GPA 3.51 / GMAT 710 / TOEFL 105",
        award: "STEM 36 個月 OPT 德州科技樞紐首選",
        highlight: "文商企管成功轉入高就業率 Tech IT",
        painPoint: "大學純商管背景，缺乏寫程式與數據庫背景，擔心申請不到高就業率 STEM 項目，回國後投報率不足。",
        strategy: "1. 提早 10 個月規劃取得 Python 與 SQL 認證先修課；2. 鎖定奧斯汀科技重鎮（Tesla、Dell、Apple）與 McCombs 強大的校企合作特色；3. 文書突顯商業溝通與技術銜接能力（Product/Tech Manager 潛力）。",
        quote: "「從一開始擔心自己沒有 Coding 經驗，到現在順利拿到 UT Austin，感謝 IvyBridge 每一步清晰穩健的引導！」"
      },
      5: {
        title: "New York University (紐約大學)",
        degree: "MA in Media, Culture, and Communication",
        school: "國立台灣師範大學 英語學系",
        gpa: "GPA 3.70 / TOEFL 112 / GRE 325",
        award: "Department Merit Scholarship 獎學金",
        highlight: "頂級傳播社科 Writing Sample 精修",
        painPoint: "社科人文申請極其看重 15~20 頁的學術寫作範例 (Writing Sample) 與批判性理論素養，傳統代辦完全無法處理高難度英美哲學與傳播理論文章。",
        strategy: "1. 由同專業常春藤博士顧問與外師共同指導其大學學術論文架構重整；2. 精準引入數位媒介批判理論，深化文獻回顧；3. 面試前針對當前國際媒體現象進行高強度思維攻防。",
        quote: "「坊間代辦看都不敢看我的 Writing Sample，只有 IvyBridge 團隊能跟我深度探討理論並給出實質學術建議，太專業了！」"
      },
      6: {
        title: "University of Southern California (USC)",
        degree: "MS in Data Informatics (Viterbi 工學院)",
        school: "University of Washington (美本)",
        gpa: "GPA 3.08 / GRE 322 / 免托福",
        award: "USC 全美頂尖工學院正取",
        highlight: "美本低 GPA 破局直錄加州名校",
        painPoint: "在西雅圖就讀大學部時因適應不良導致總體 GPA 僅 3.08，面臨在美身分即將到期、找工作碰壁的巨大心理壓力。",
        strategy: "1. 迅速盤點其在校外志工活動建立的非營利資料庫，量化為有溫度的實戰數據成果；2. 選校策略避開純理論 CS，轉攻跨領域應用數據項目；3. 顧問每週兩次通話陪伴排解焦慮，確保各項文件在第一輪送件前達到極致。",
        quote: "「當我快要對留美放棄希望時，IvyBridge 顧問拉了我一把，不僅拿到了 USC，更重新找回對自己的信心。」"
      }
    };

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
        costOutputTwd.textContent = `折合新台幣約：NT$ ${twdMin} 萬 ~ ${twdMax} 萬元／年（含學費與基本食宿保險）`;
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
        link.href=url; link.download='IvyBridge-諮詢資料.json'; link.click();
        setTimeout(()=>URL.revokeObjectURL(url),1000);
        document.getElementById('form-status').textContent='已產生下載檔案，請確認瀏覽器下載結果。資料尚未傳送，也尚未成立預約。';
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
