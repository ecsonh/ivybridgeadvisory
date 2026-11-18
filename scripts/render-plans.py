"""Refresh bilingual plan cards from data/plans.json without overwriting custom page sections.

Only replaces each card grid inside existing PLANS markers. The hand-curated
comparison table, legal notes and surrounding layout are intentionally preserved.
"""
from pathlib import Path
from html import escape
import json
import re

ROOT = Path(__file__).resolve().parents[1]
PLANS = json.loads((ROOT / "data/plans.json").read_text(encoding="utf-8"))


def cards(lang: str, details: bool) -> str:
    en = lang == "en"
    result = []
    for plan in PLANS:
        pid = plan["id"]
        title = escape(plan[lang]["name"])
        cls = "ib-detail" if details else "ib-plan"
        if pid == "elite" and details:
            cls += " ib-elite-feature"
        attrs = f' id="{pid}" tabindex="-1"' if details else ""
        badge = ""
        promise = ""
        if pid == "elite" and details:
            badge = '<span class="ib-elite-tag">' + ("PREFERRED · TOP 30 GUARANTEE" if en else "首選方案 · Top30 錄取保障") + "</span>"
            promise = ('<div class="ib-elite-promise"><span class="ib-elite-promise-label">'
                       + ("TOP 30 ADMISSION COMMITMENT" if en else "Top30 錄取承諾")
                       + "</span><strong>"
                       + ("Top 30 admission guarantee — if not admitted, US$4,000 back!" if en else "保障學生錄取方案，若未能錄取，退 US$4,000！")
                       + "</strong><small>"
                       + ("Applies when no master's offer is received from any agreed Top 30 U.S. university. See written agreement." if en else "未獲任何雙方約定的美國 Top30 大學碩士錄取時適用；詳見書面合約。")
                       + "</small></div>")
        price = ""
        if details:
            extra = (f"Additional U.S. program beyond {plan['programs']}: US${plan['extra']:,}"
                     if pid == "elite" and en else
                     f"超過 {plan['programs']} 個美國項目，每加 1 個 US${plan['extra']:,}"
                     if pid == "elite" else
                     f"Each additional program: US${plan['extra']:,}"
                     if en else f"每加申 1 個項目：US${plan['extra']:,}")
            price = f'<p class="ib-detail-price">US${plan["price"]:,}</p><p class="ib-extra">{extra}</p>'
        items = "".join("<li>" + escape(x) + "</li>" for x in plan[lang]["items"])
        href = ("contact.html?plan=" if details else "services.html#") + pid
        label = ("Ask about Top 30 Guarantee →" if en else "諮詢 Top30 保證方案 →") if pid == "elite" and details else ("Discuss this plan →" if en else "預約方案諮詢 →") if details else ("View plan details →" if en else "了解方案詳情 →")
        result.append(f'<article class="{cls}" data-plan="{pid}"{attrs}>{badge}<h3>{title}</h3>{price}<ul>{items}</ul>{promise}<a class="ib-plan-link" href="{href}">{label}</a></article>')
    return "".join(result)


for page in (ROOT / "public").rglob("*.html"):
    content = page.read_text(encoding="utf-8")
    lang = "en" if page.parent.name == "en" else "zh"
    before = content
    for kind, details in (("summary", False), ("services", True)):
        start, end = f"<!-- PLANS:{kind}:start -->", f"<!-- PLANS:{kind}:end -->"
        a, b = content.find(start), content.find(end)
        if a == -1 or b == -1 or b <= a:
            continue
        section = content[a:b]
        pattern = re.compile(r'(<div class="ib-detail-grid"[^>]*>).*?(</div>)', re.S)
        section, count = pattern.subn(lambda m: m.group(1) + cards(lang, details) + m.group(2), section, count=1)
        if count != 1:
            raise ValueError(f"Could not locate the plan grid in {page}")
        content = content[:a] + section + content[b:]
    if content != before:
        page.write_text(content, encoding="utf-8")
