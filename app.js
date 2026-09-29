const projects = [
  {
    id:"umag", no:"01", title:"UMAG 南极事务文凭", org:"Universidad de Magallanes · Diplomado de Asuntos Antárticos",
    category:"极地", priority:"P1", status:"等待开放", checkpoint:"2026-10-10", window:"预计 2027 再开放",
    next:"继续 follow-up UMAG，先确认国际学生能否从伦敦完成 semipresencial 的 80% attendance 要求。",
    prereq:"先确认 remote feasibility → 再决定是否申请；不要先默认能远程完成。",
    links:[["UMAG Continuing Education","https://educacioncontinua.umag.cl/?cat=5"]],
    timeline:[["2026 OCT","Follow-up UMAG"],["2027 JAN","再次询问 2027 cohort"],["2027 MAR","开始定期检查开放"]]
  },
  {
    id:"unsam", no:"02", title:"UNSAM 南极研究文凭", org:"Universidad Nacional de San Martín · Diplomatura en Estudios Antárticos",
    category:"极地", priority:"P1", status:"计划中", checkpoint:"2027-02-15", window:"历史节奏：4–12 月",
    next:"2027 年 2 月整理 CV、身份证明与报名资料；3 月主动联系 UNSAM，目标在开课前完成 enrollment。",
    prereq:"线上课程可与 UCL 并行；先等 2027 cohort 正式通知与海外费用。",
    links:[["UNSAM 官方页","https://unsam.edu.ar/escuelas/ehys/712/3ia/estudios-antarticos"]],
    timeline:[["2027 FEB","整理材料"],["2027 MAR","报名"],["2027 APR","预计开课"]]
  },
  {
    id:"husavik", no:"03", title:"Húsavík 鲸类研究", org:"University of Iceland · Húsavík Research Centre / Skjálfandi Bay",
    category:"海洋", priority:"P1", status:"计划中", checkpoint:"2026-11-15", window:"Internship 3–11 月；Field course 日期待 2027 更新",
    next:"2026 年 11–12 月先发 2027 internship enquiry，重点问 6 月中以后能否接收；2027 年 1 月检查 field course。",
    prereq:"若 field course 仍在 5 月底，会撞 UCL Term 3；优先考虑 6 月 11 日后的 internship。",
    links:[["Húsavík Centre","https://english.hi.is/research/regional-research-centres/husavik-centre"]],
    timeline:[["2026 NOV","发 internship enquiry"],["2027 JAN","检查 field course"],["2027 MAR","争取提前提交"],["2027 JUN","优先实习窗口"]]
  },
  {
    id:"uw", no:"04", title:"Coastal & Marine Management", org:"University Centre of the Westfjords (UW) · Ísafjörður",
    category:"申请", priority:"P1", status:"计划中", checkpoint:"2026-10-31", window:"通常 12/1 开放；2/15 priority",
    next:"先决定 2027 试投还是直接瞄准 2028；10 月确定两位 referee，11 月完成 marine-focused CV 与 statement 框架。",
    prereq:"完全线下；2027 入学与 UCL dissertation period 存在时间冲突，需先问 defer / start-date policy。",
    links:[["UW Program","https://www.uw.is/en/coastal-and-marine-management"],["UW FAQ","https://www.uw.is/en/study/masters-programs/faq"]],
    timeline:[["2026 OCT","确定 referee"],["2026 NOV","CV + Statement"],["2026 DEC","portal 预计开放"],["2027 FEB","Priority deadline"]]
  },
  {
    id:"uct", no:"05", title:"Conservation Biology MSc", org:"University of Cape Town · FitzPatrick Institute",
    category:"申请", priority:"P0", status:"需确认资格", checkpoint:"2026-10-15", window:"2028 intake；历史截止 8/31",
    next:"10–11 月先把本科 + 当前 postgraduate transcript 发给 FitzPatrick，确认是否满足 BSc Honours or equivalent。",
    prereq:"资格确认 → 补 ecology / conservation / GIS / quantitative evidence → 2027 夏积累 conservation experience → 2028 intake 申请。",
    links:[["MSc Overview","https://science.uct.ac.za/fitzpatrick/fitzpatrick/study-research-opportunities-conservation-biology-msc/conservation-biology-msc-overview"],["Applicant Details","https://science.uct.ac.za/fitzpatrick/fitzpatrick/study-research-opportunities-conservation-biology-msc/details-applicants"]],
    timeline:[["2026 OCT","确认 eligibility"],["2027 APR","准备 2028 申请"],["2027 JUN","Motivation"],["2027 JUL","References"],["2027 AUG","提前提交"]]
  },
  {
    id:"pb2", no:"06", title:"RYA Powerboat Level 2", org:"Royal Yachting Association · RIB / planing powerboat",
    category:"证书", priority:"P0", status:"待报名", checkpoint:"2026-10-20", window:"2 天；建议 2026 Oct–Nov",
    next:"在伦敦周边 / 南英格兰找 coastal + planing RIB 的 PB2，两天周末班即可；优先真正操作 RIB 的中心。",
    prereq:"PB2 → Tender Operator / Zodiac experience → Expedition Team small-boat credibility。",
    links:[["RYA PB2","https://www.rya.org.uk/course-finder/level-2-powerboat-handling/"],["RYA Tender Operator","https://www.rya.org.uk/course-finder/tender-operator-course/"]],
    timeline:[["2026 OCT","报名"],["2026 NOV","完成 PB2"],["2027","视需要补 Tender Operator"]]
  },
  {
    id:"expedition", no:"07", title:"极地探险队员 / 船司", org:"Quark · Aurora · Oceanwide · Silversea / expedition operators",
    category:"极地", priority:"P1", status:"建立履历", checkpoint:"2026-11-30", window:"2027 summer 开始集中投递",
    next:"先做 Polar Expedition CV，并逐项核对 STCW、Ship Security Awareness、Seaman’s Book、Seaman’s Medical、PB2、First Aid/CPR。",
    prereq:"PB2 + STCW/medical → 挪威鲸类帆船 → Húsavík / marine mammal evidence → 2027 正式投递。",
    links:[
      ["Travelopia / Quark","https://globalcareers.travelopia.com/"],
      ["Aurora Careers","https://www.aexpeditions.co.uk/gb/careers"],
      ["Aurora Application","https://www.aexpeditions.co.uk/gb/careers/application-form"],
      ["Oceanwide Careers","https://oceanwide-expeditions.com/page/careers"],
      ["Silversea","https://www.silversea.com/"]
    ],
    timeline:[["2026 NOV","第一版 Polar CV"],["2027 JAN","证书差距核对"],["2027 JUN","更新 field evidence"],["2027 JUL","集中投船司"]]
  },
  {
    id:"norway", no:"08", title:"挪威鲸类帆船", org:"Arctic Ocean Lodge / Alma af Frøya · Sørkjosen",
    category:"旅行", priority:"P0", status:"待确认", checkpoint:"2026-10-05", window:"2026/12/18–24",
    next:"10 月上旬重新确认 12/19 船位、取消政策与交通衔接；签证策略稳定后再买不可退机票。",
    prereq:"Norway Schengen → 船位确认 → London–Tromsø → Sørkjosen → 5 天 4 夜航程。",
    links:[["Arctic Ocean Lodge","https://www.arcticoceanlodge.com"],["Responsible Travel","https://www.responsibletravel.com/holidays/sailing-cruising"]],
    timeline:[["2026 OCT","船位 + 签证"],["2026 DEC 18","London → Tromsø"],["2026 DEC 19–23","Alma af Frøya"],["2026 DEC 24","返回 London"]]
  },
  {
    id:"oust", no:"09", title:"法国 Oust 马术", org:"Ferme Équestre de Coumariau · Galop training",
    category:"旅行", priority:"P2", status:"等待日期", checkpoint:"2027-01-05", window:"计划 2027/4/3–18",
    next:"2027 年 1 月第一周联系马场，问两周成人训练、Galop 起点、考试可能性、FFE licence 与保险要求。",
    prereq:"先确认 2027 Easter stage timetable → 再锁交通 / 住宿 → 检查申根有效期。",
    links:[["Coumariau","https://www.ferme-equestre-de-coumariau.com/"]],
    timeline:[["2027 JAN","联系马场"],["2027 FEB","锁训练与住宿"],["2027 APR 3–18","Oust"]]
  },
  {
    id:"visa", no:"10", title:"申根签 + 美签", org:"Norway Schengen first · US B1/B2 second",
    category:"签证", priority:"P0", status:"立即处理", checkpoint:"2026-10-03", window:"Norway: Oct 2026；US: Nov 2026–Jan 2027",
    next:"优先 Norway VFS：准备护照、UK status/share code、UCL student letter、3 个月流水、住宿交通、保险；美签后置。",
    prereq:"12 月挪威行程决定 Norway 是首要 Schengen；法国行程等挪威签证下来后再看有效期是否覆盖。",
    links:[["Norway in UK","https://www.norway.no/en/uk/services-info/visitors-visa-res-permit/"],["US Visitor Visa","https://travel.state.gov/content/travel/en/us-visas/tourism-visit/visitor.html"]],
    timeline:[["2026 OCT","Norway VFS"],["2026 NOV–2027 JAN","US B1/B2"],["2027 JAN–FEB","必要时法国 Schengen"]]
  },
  {
    id:"peaceboat", no:"11", title:"Peace Boat 南极航线", org:"Voyage 128 · 2027/12/07–2028/03/24",
    category:"极地", priority:"P2", status:"等待招募", checkpoint:"2027-05-01", window:"Voyage 128",
    next:"2027 年 5 月开始盯 Volunteer Communication Coordinator / Interpreter 招募；6 月前完成中英文 CV + 一页 motivation。",
    prereq:"招募开放 → 双语 CV / motivation → interpreting test → interviews → visas / medical → voyage。",
    links:[["Voyage 128","https://peaceboat.org/english/voyage/128th-global-voyage"],["Volunteer Interpreter","https://peaceboat.org/english/volunteer/interpreter"]],
    timeline:[["2027 MAY","开始监控招募"],["2027 JUN","CV + Motivation"],["2027 JUL–AUG","保持可投"],["2027 DEC 7","Voyage 128 出发"]]
  }
];

const timelineOrder = [
  ["2026 SEP–OCT",["Norway VFS + 船位","报名 PB2","UCT eligibility","UMAG follow-up"]],
  ["2026 NOV",["完成 PB2","Húsavík internship enquiry","Polar Expedition CV","开始考虑美签"]],
  ["2026 DEC",["12/18–24 挪威鲸类帆船","UW portal 预计开放"]],
  ["2027 JAN",["联系 Oust 马场","检查 Húsavík 2027","再次问 UMAG","继续 UW"]],
  ["2027 FEB",["UW priority round","UNSAM 材料","必要时法国申根"]],
  ["2027 MAR",["UNSAM 报名","Húsavík 提前递交","UMAG 监控"]],
  ["2027 APR",["4/3–18 Oust","UCT 2028 准备启动","UW final round 若需要"]],
  ["2027 MAY–JUN",["Peace Boat 128 监控","Húsavík 实习窗口","船司履历更新"]],
  ["2027 JUL–AUG",["集中投 expedition team","UCT 2028 提交","Peace Boat 保持可投"]],
  ["2027 SEP–DEC",["UCL 后时间释放","处理上船/长期项目","12/7 Peace Boat 128"]]
];

const categories = ["全部","极地","海洋","申请","证书","签证","旅行"];
let activeCategory = "全部";

function projectStatus(id, fallback){
  return localStorage.getItem("status:"+id) || fallback;
}
function notes(id){
  return localStorage.getItem("notes:"+id) || "";
}
function priorityClass(p){ return p.toLowerCase(); }

function renderMetrics(){
  const p0=projects.filter(p=>p.priority==="P0").length;
  const active=projects.filter(p=>["P0","P1"].includes(p.priority)).length;
  const waits=projects.filter(p=>/等待/.test(p.status)).length;
  document.querySelector("#metrics").innerHTML = [
    [projects.length,"TOTAL PROJECTS"],
    [p0,"P0 · IMMEDIATE"],
    [active,"P0 / P1"],
    [waits,"WAITING WINDOW"]
  ].map(([n,l])=>`<div class="metric"><strong>${n}</strong><span>${l}</span></div>`).join("");
}

function renderUrgent(){
  const rows=projects.filter(p=>["P0","P1"].includes(p.priority))
    .sort((a,b)=>a.checkpoint.localeCompare(b.checkpoint))
    .slice(0,6);
  document.querySelector("#urgentList").innerHTML=rows.map(p=>`
    <article class="urgent-item">
      <div class="urgent-top">
        <span class="priority ${priorityClass(p.priority)}">${p.priority}</span>
        <span class="card-kicker">${p.category}</span>
      </div>
      <h3>${p.title}</h3>
      <p>${p.next}</p>
      <div class="due">NEXT CHECK · ${p.checkpoint}</div>
    </article>`).join("");
}

function renderTimeline(){
  document.querySelector("#timeline").innerHTML=timelineOrder.map(([month,events])=>`
    <div class="timeline-month">${month}</div>
    <div class="timeline-events">${events.map(x=>`<span class="timeline-pill"><b>${x}</b></span>`).join("")}</div>
  `).join("");
}

function renderFilters(){
  document.querySelector("#filters").innerHTML=categories.map(c=>`
    <button class="filter-button ${c===activeCategory?"active":""}" data-filter="${c}">${c}</button>
  `).join("");
  document.querySelectorAll(".filter-button").forEach(btn=>btn.onclick=()=>{
    activeCategory=btn.dataset.filter; renderFilters(); renderProjects();
  });
}

function renderProjects(){
  const q=document.querySelector("#searchInput").value.trim().toLowerCase();
  const urgent=document.querySelector("#urgentOnly").checked;
  const list=projects.filter(p=>{
    const cat=activeCategory==="全部" || p.category===activeCategory;
    const pri=!urgent || ["P0","P1"].includes(p.priority);
    const hay=[p.title,p.org,p.next,p.prereq,p.category].join(" ").toLowerCase();
    return cat && pri && (!q || hay.includes(q));
  });
  document.querySelector("#projects").innerHTML=list.map(p=>`
    <article class="project-card" data-category="${p.category}">
      <div class="card-kicker">
        <span>${p.no} / ${p.category} · <span class="priority ${priorityClass(p.priority)}">${p.priority}</span></span>
        <select class="status-select" data-status-id="${p.id}">
          ${["立即处理","需确认资格","待报名","待确认","计划中","建立履历","等待开放","等待日期","等待招募","进行中","已完成"].map(s=>`<option ${projectStatus(p.id,p.status)===s?"selected":""}>${s}</option>`).join("")}
        </select>
      </div>
      <h3>${p.title}</h3>
      <div class="org">${p.org}</div>
      <div class="info-grid">
        <div class="info"><label>NEXT CHECK</label><span>${p.checkpoint}</span></div>
        <div class="info"><label>WINDOW</label><span>${p.window}</span></div>
      </div>
      <div class="next-action"><label>NEXT ACTION</label><p>${p.next}</p></div>
      <div class="prereq"><b>前置关系：</b>${p.prereq}</div>
      <div class="card-links">${p.links.map(([n,u])=>`<a class="card-link" href="${u}" target="_blank" rel="noreferrer">${n} ↗</a>`).join("")}</div>
      <div class="notes"><textarea data-note-id="${p.id}" placeholder="个人备注…">${notes(p.id)}</textarea></div>
    </article>`).join("");
  bindLocalControls();
}

function bindLocalControls(){
  document.querySelectorAll("[data-status-id]").forEach(el=>el.onchange=()=>localStorage.setItem("status:"+el.dataset.statusId,el.value));
  document.querySelectorAll("[data-note-id]").forEach(el=>el.oninput=()=>localStorage.setItem("notes:"+el.dataset.noteId,el.value));
}

function renderSources(){
  const seen=new Map();
  projects.forEach(p=>p.links.forEach(([n,u])=>{ if(!seen.has(u)) seen.set(u,n); }));
  document.querySelector("#sourceLinks").innerHTML=[...seen.entries()].map(([u,n])=>`
    <a class="source-link" href="${u}" target="_blank" rel="noreferrer"><span>${n}</span><span>↗</span></a>
  `).join("");
}

document.querySelector("#searchInput").addEventListener("input",renderProjects);
document.querySelector("#urgentOnly").addEventListener("change",renderProjects);
document.querySelector("#copyActions").onclick=async()=>{
  const text=projects.filter(p=>["P0","P1"].includes(p.priority)).sort((a,b)=>a.checkpoint.localeCompare(b.checkpoint))
    .map(p=>`${p.checkpoint} · ${p.title} — ${p.next}`).join("\n");
  try{
    await navigator.clipboard.writeText(text);
    const b=document.querySelector("#copyActions"); const old=b.textContent;b.textContent="已复制";setTimeout(()=>b.textContent=old,1200);
  }catch(e){ alert(text); }
};

renderMetrics();
renderUrgent();
renderTimeline();
renderFilters();
renderProjects();
renderSources();