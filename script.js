const officials=[{slug:"william",rank:"President",name:"William",title:"President William",division:"Executive Government",status:"In Office",photo:"william.png"},{slug:"ben",rank:"General of the Army",name:"Ben",title:"General Ben",division:"Treekian Army",status:"Active Service",photo:"ben.png"},{slug:"nico-cage",rank:"Air Marshal",name:"Nico Cage",title:"Air Marshal Nico Cage",division:"Treekian Air Force",status:"Active Service",photo:"nico-cage.png"},{slug:"braedyn",rank:"Chairman",name:"Braedyn",title:"Chairman Braedyn",division:"Committee of State Security",status:"Active",photo:"braedyn.png"},{slug:"matthew",rank:"Head of Publicity",name:"Matthew",title:"Matthew",division:"Ministry of Publicity",status:"Active",photo:"matthew.png"},{slug:"christian",rank:"General of Foreign Affairs",name:"Christian",title:"General Christian",division:"Ministry of Foreign Affairs",status:"Active",photo:"christian.png"},{slug:"noah",rank:"Director",name:"Noah",title:"Director Noah",division:"National Nuclear Programme",status:"Active",photo:"noah.png"}];
const placeholderData='data:image/svg+xml;charset=UTF-8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500"><rect width="400" height="500" fill="#eeeeee"/><circle cx="200" cy="155" r="78" fill="#9b9b9b"/><path d="M75 420c20-90 78-142 125-142s105 52 125 142" fill="#9b9b9b"/><rect x="24" y="24" width="352" height="452" fill="none" stroke="#790000" stroke-width="16"/><text x="200" y="466" text-anchor="middle" font-family="Arial" font-size="30" font-weight="700" fill="#790000">NO PHOTO</text></svg>');
const uiRu={siteTitle:'Правительство Нового Трикианского Союза Социалистических Республик',portalTitle:'Официальный правительственный портал',menu:'Меню',navHome:'Главная',navGovernment:'Правительство',navOfficials:'Должностные лица',navDefence:'Оборона',navEconomy:'Экономика',navCulture:'Культура',navConstitution:'Конституция',navPortal:'Портал сотрудников',cssName:'Комитет государственной безопасности',seal:'Печать одобрения'};
const textRu={"Official Website":"Официальный сайт","New Treekian Union of the Socialist Republics":"Новый Трикианский Союз Социалистических Республик","Government information, national services, defence records and public documents.":"Правительственная информация, государственные услуги, оборонные записи и публичные документы.","Welcome":"Добро пожаловать","Government Services":"Государственные службы","National Overview":"Национальный обзор","Government":"Правительство","High-Ranked Officials":"Высокопоставленные должностные лица","Defence":"Оборона","Economy":"Экономика","Culture":"Культура","Constitution":"Конституция","Officials":"Должностные лица","Official Register":"Официальный реестр","Senior Leadership":"Высшее руководство","Rank":"Звание","Name":"Имя","Division":"Подразделение","Status":"Статус","President":"Президент","Army":"Армия","Air Force":"Военно-воздушные силы","Navy":"Военно-морской флот","Committee of State Security":"Комитет государственной безопасности","Ministry of Publicity":"Министерство публичной информации","Ministry of Foreign Affairs":"Министерство иностранных дел","National Nuclear Programme":"Национальная ядерная программа","Currency":"Валюта","Population":"Население","Official Languages":"Официальные языки","Staff Portal":"Портал сотрудников","Restricted Access":"Ограниченный доступ","Staff Login":"Вход для сотрудников","Enter Portal":"Войти в портал","Seal of Approval":"Печать одобрения"};
function section(t,h){return '<section><h2>'+t+'</h2>'+h+'</section>'}function card(t,x,href){return '<a href="'+href+'" class="card"><h3>'+t+'</h3><p>'+x+'</p><span class="mini-link">View page</span></a>'}function plainCard(t,x){return '<div class="card"><h3>'+t+'</h3><p>'+x+'</p></div>'}function cardSection(t,c){return section(t,'<div class="cards">'+c.join('')+'</div>')}function tableSection(t,r){return section(t,'<div class="table-wrap"><table>'+r.map(a=>'<tr><th>'+a[0]+'</th><td>'+a[1]+'</td></tr>').join('')+'</table></div>')}function officialsSection(){return section('Senior Leadership','<div class="official-grid">'+officials.map(o=>'<a class="official-card" href="official-'+o.slug+'.html"><img class="official-photo" src="'+o.photo+'" alt="'+o.title+'" onerror="usePlaceholder(this)"><div><h3>'+o.title+'</h3><p><strong>Rank:</strong> '+o.rank+'</p><p><strong>Name:</strong> '+o.name+'</p><p><strong>Division:</strong> '+o.division+'</p></div></a>').join('')+'</div>')}function profileSection(o){return section('Official Profile','<div class="profile-layout"><img class="profile-photo" src="'+o.photo+'" alt="'+o.title+'" onerror="usePlaceholder(this)"><div class="profile-panel"><h3>'+o.title+'</h3><table><tr><th>Rank</th><td>'+o.rank+'</td></tr><tr><th>Name</th><td>'+o.name+'</td></tr><tr><th>Division</th><td>'+o.division+'</td></tr><tr><th>Status</th><td>'+o.status+'</td></tr></table><div class="profile-actions"><a class="button secondary" href="officials.html">Back to Officials</a></div></div></div>')}
function branchPage(title,sub,overview,rows,inv){return{nav:'defence',kicker:'Ministry of Defence',title:title,subtitle:sub,sections:[section('Overview','<p>'+overview+'</p>'),tableSection('Command',rows),section('Mission','<p>To defend the New Treekian Union of the Socialist Republics through professional service, readiness, and national protection.</p>'),tableSection('Inventory',inv),cardSection('Core Values',[plainCard('Readiness','Prepared to respond whenever required.'),plainCard('Discipline','Professional standards in all operations.'),plainCard('Service','Service to the nation above self.'),plainCard('Unity','Working together for national defence.')])]}}
const pageData={home:{nav:'home',kicker:'Official Website',title:'New Treekian Union of the Socialist Republics',subtitle:'Government information, national services, defence records and public documents.',sections:[section('Welcome','<p>Welcome to the official Government Portal of the New Treekian Union of the Socialist Republics. This website provides official information regarding the Government, Armed Forces, ministries, national policies, economy, culture, and constitutional framework of Treekia.</p>'),cardSection('Government Services',[card('Government','View the President, ministries and government structure.','government.html'),card('High-Ranked Officials','View senior officials, ranks, divisions and official portraits.','officials.html'),card('Defence','Information regarding the Treekian Armed Forces.','defence.html'),card('Economy','National currency, population and statistics.','economy.html'),card('Culture','Official languages, national symbols and traditions.','culture.html'),card('Constitution','Read the constitutional documents of Treekia.','constitution.html')]),tableSection('National Overview',[['Official Name','New Treekian Union of the Socialist Republics'],['Common Name','Treekia'],['President','William'],['Population','14'],['Currency','Treek (₸)'],['ISO Code','TRK'],['Official Languages','Russian, English'],['Driving Side','Left'],['Time Zone','TST (UTC+12) / TDT (UTC+13)']])]},government:{nav:'government',kicker:'Executive Leadership',title:'Government',subtitle:'Executive leadership and national administration.',sections:[section('Government Overview','<p>The Government of the New Treekian Union of the Socialist Republics is headed by the President and supported by ministries, the Armed Forces, and the Committee of State Security.</p>'),cardSection('Executive Leadership',[card('President','President William<br><br>Head of State','president.html'),card('Ministries','Government departments responsible for national administration.','ministries.html'),card('Committee of State Security','Internal security and intelligence.','css.html'),card('High-Ranked Officials','Official register of senior state personnel.','officials.html')]),tableSection('Government Officials',[['President','William'],['General of the Army','Ben'],['Air Marshal','Nico Cage'],['General of the Navy','Vacant'],['Head of Publicity','Matthew'],['General of Foreign Affairs','Christian'],['Head of Nuclear Programme','Noah'],['Chairman of the Committee of State Security','Braedyn']])]},officials:{nav:'officials',kicker:'Official Register',title:'High-Ranked Officials',subtitle:'Rank, name, division and official portrait records.',sections:[section('Official Register','<p>This page lists senior officials of the New Treekian Union of the Socialist Republics. Each portrait looks for a file named after the official, such as <strong>william.png</strong>. If the file is missing, a placeholder portrait appears automatically.</p>'),officialsSection()]},defence:{nav:'defence',kicker:'Ministry of Defence',title:'Treekian Armed Forces',subtitle:'Defending the New Treekian Union of the Socialist Republics.',sections:[section('Overview','<p>The Treekian Armed Forces are responsible for the defence of the New Treekian Union of the Socialist Republics. The Armed Forces consist of the Army, Air Force and Navy, operating under the authority of the President as Commander-in-Chief.</p>'),cardSection('Military Branches',[card('Army','General Ben','army.html'),card('Air Force','Air Marshal Nico Cage','airforce.html'),card('Navy','Position Vacant','navy.html')]),tableSection('Command Structure',[['Commander-in-Chief','President William'],['General of the Army','Ben'],['Air Marshal','Nico Cage'],['General of the Navy','Vacant']])]},army:branchPage('Treekian Army','Strength • Readiness • Discipline','The Treekian Army is the land warfare branch of the Treekian Armed Forces. It is responsible for ground defence, armoured operations, national security support, and military readiness.',[['Rank','General of the Army'],['Name','Ben'],['Division','Army'],['Status','Active Service']],[['T-55 Main Battle Tank','In Service'],['BTR-80 Armoured Personnel Carrier','In Service'],['BMP-1 Infantry Fighting Vehicle','In Service'],['T-60 Light Tank','On Order']]),airforce:branchPage('Treekian Air Force','Air Superiority • Readiness • Precision','The Treekian Air Force protects national airspace, supports military operations, conducts aerial reconnaissance and provides strategic air capability.',[['Rank','Air Marshal'],['Name','Nico Cage'],['Division','Air Force'],['Status','Active Service']],[['Paper Aircraft','Operational'],['MiG-15 Photograph','Display Asset']]),navy:branchPage('Treekian Navy','Service • Vigilance • Maritime Security','The Treekian Navy is the maritime branch of the Treekian Armed Forces. It supports national maritime interests, coastal security and future naval development.',[['Rank','General of the Navy'],['Name','Vacant'],['Division','Navy'],['Status','Active Service']],[['Paper Boat','Operational']]),economy:{nav:'economy',kicker:'Currency • Trade • National Statistics',title:'Treekian Economy',subtitle:'National planning and public administration.',sections:[section('Overview','<p>The Treekian economy is centrally structured under government oversight. It operates using the national currency, the Treek (₸), and is managed through coordinated national planning and administration.</p>'),tableSection('Key Indicators',[['Population','14'],['Currency','Treek (₸)'],['ISO Code','TRK'],['Economic Model','Socialist Planned Economy'],['Trade Status','Internal / Micronational'],['Primary Industries','Administration, Defence, Public Services']])]},culture:{nav:'culture',kicker:'Identity • Language • National Symbols',title:'Treekian Culture',subtitle:'Unity, tradition and national character.',sections:[section('Overview','<p>The culture of the New Treekian Union of the Socialist Republics is shaped by its national identity, shared traditions, and symbolic institutions. It reflects unity, simplicity, and collective national pride.</p>'),cardSection('National Identity',[plainCard('Official Languages','Russian, English'),plainCard('National Animal','Yellow-crested Warbler'),plainCard('National Dish',"My mate's dad's pizza"),plainCard('National Sport','Football')])]},constitution:{nav:'constitution',kicker:'Law • Structure • National Principles',title:'Constitution of Treekia',subtitle:'Foundational law of the republics.',sections:[section('Preamble','<p>We, the people of the New Treekian Union of the Socialist Republics, establish justice, ensure national stability, provide for the common defence, and secure liberty and order.</p>'),section('Article I — The State','<p>The New Treekian Union of the Socialist Republics is a sovereign socialist state governed under a centralized system of administration.</p>'),section('Article II — The President','<p>The President is the Head of State and Commander-in-Chief of the Armed Forces.</p>'),section('Article III — Government Structure','<p>The Government shall consist of ministries, armed forces, and administrative bodies.</p>'),section('Article IV — Armed Forces','<p>The Treekian Armed Forces are responsible for the defence of the nation.</p>'),section('Article V — State Security','<p>The Committee of State Security is responsible for internal security, intelligence, and sovereignty protection.</p>')]},css:{nav:'government',kicker:'Security • Intelligence • National Protection',title:'Committee of State Security',subtitle:'Safeguarding national stability and sovereignty.',sections:[section('Overview','<p>The Committee of State Security is the national security and intelligence organisation of the New Treekian Union of the Socialist Republics.</p>'),tableSection('Leadership',[['Chairman','Braedyn'],['Branch','State Security'],['Reports To','President William'],['Status','Active']])]},ministries:{nav:'government',kicker:'Departments of Government',title:'Government Ministries',subtitle:'Administrative departments of the Treekian Government.',sections:[section('Overview','<p>The ministries of the New Treekian Union of the Socialist Republics are responsible for national administration and implementation of government policy.</p>'),cardSection('Government Departments',[plainCard('Ministry of Foreign Affairs','Minister: General Christian<br><br>Responsible for diplomatic relations, international communications and foreign policy.'),plainCard('Ministry of Publicity','Minister: Matthew<br><br>Responsible for official government communications and public information.'),plainCard('National Nuclear Programme','Director: Noah<br><br>Responsible for research and administration of the national nuclear programme.'),plainCard('Committee of State Security','Chairman: Braedyn<br><br>Responsible for internal security, intelligence and national protection.')]),tableSection('Current Leadership',[['Foreign Affairs','General Christian'],['Ministry of Publicity','General Matthew'],['National Nuclear Programme','Noah'],['Committee of State Security','Chairman Braedyn']])]},president:{nav:'government',kicker:'Leadership • Service • Unity',title:'Office of the President',subtitle:'Head of State and national executive office.',sections:[section('President William','<p>President William serves as the Head of State of the New Treekian Union of the Socialist Republics and is responsible for overall leadership of the Government and Armed Forces.</p>')]},login:{nav:'login',kicker:'Restricted Access',title:'Staff Portal',subtitle:'Authorised government personnel only.',sections:[section('Staff Login','<div class="portal-panel"><form class="login-form" id="login-form"><label for="staff-id">Staff ID</label><input id="staff-id" type="text" placeholder="TRK-0001"><label for="password">Password</label><input id="password" type="password" placeholder="Password"><button class="button" type="submit">Enter Portal</button><p class="login-message" id="login-message"></p></form></div>')]},portal:{nav:'login',kicker:'Internal Records',title:'Government Staff Portal',subtitle:'Demonstration portal for official departments.',sections:[cardSection('Internal Services',[plainCard('Personnel Register','View official department records.'),plainCard('Security Notices','Review CSS notices and access reminders.'),plainCard('Ministry Reports','Browse administrative updates.'),plainCard('Defence Records','Access branch summaries and readiness notes.')])]}};
officials.forEach(o=>pageData['official-'+o.slug]={nav:'officials',kicker:o.division,title:o.title,subtitle:'Official personnel profile.',sections:[profileSection(o)]});
function usePlaceholder(img){
    img.onerror=null;
    img.src=placeholderData;
}

Object.assign(textRu, {
    "View page":"Открыть страницу",
    "Government information, national services, defence records and public documents.":"Правительственная информация, государственные услуги, оборонные записи и публичные документы.",
    "Welcome to the official Government Portal of the New Treekian Union of the Socialist Republics. This website provides official information regarding the Government, Armed Forces, ministries, national policies, economy, culture, and constitutional framework of Treekia.":"Добро пожаловать на официальный правительственный портал Нового Трикианского Союза Социалистических Республик. На этом сайте размещена официальная информация о правительстве, вооружённых силах, министерствах, национальной политике, экономике, культуре и конституционной системе Трикии.",
    "View the President, ministries and government structure.":"Просмотр президента, министерств и структуры правительства.",
    "View senior officials, ranks, divisions and official portraits.":"Просмотр старших должностных лиц, званий, подразделений и официальных портретов.",
    "Information regarding the Treekian Armed Forces.":"Информация о Трикианских вооружённых силах.",
    "National currency, population and statistics.":"Национальная валюта, население и статистика.",
    "Official languages, national symbols and traditions.":"Официальные языки, национальные символы и традиции.",
    "Read the constitutional documents of Treekia.":"Читать конституционные документы Трикии.",
    "Official Name":"Официальное название",
    "Common Name":"Краткое название",
    "Treekia":"Трикия",
    "William":"Уильям",
    "Ben":"Бен",
    "Nico Cage":"Нико Кейдж",
    "Braedyn":"Брейдин",
    "Matthew":"Мэтью",
    "Christian":"Кристиан",
    "Noah":"Ноа",
    "Vacant":"Вакантно",
    "Treek (₸)":"Трик (₸)",
    "ISO Code":"Код ISO",
    "Russian, English":"Русский, английский",
    "Driving Side":"Сторона движения",
    "Left":"Левая",
    "Time Zone":"Часовой пояс",
    "Executive Leadership":"Исполнительное руководство",
    "Executive leadership and national administration.":"Исполнительное руководство и национальная администрация.",
    "Government Overview":"Обзор правительства",
    "The Government of the New Treekian Union of the Socialist Republics is headed by the President and supported by ministries, the Armed Forces, and the Committee of State Security.":"Правительство Нового Трикианского Союза Социалистических Республик возглавляется президентом и поддерживается министерствами, вооружёнными силами и Комитетом государственной безопасности.",
    "President William":"Президент Уильям",
    "Head of State":"Глава государства",
    "Ministries":"Министерства",
    "Government departments responsible for national administration.":"Государственные ведомства, отвечающие за национальное управление.",
    "Internal security and intelligence.":"Внутренняя безопасность и разведка.",
    "Official register of senior state personnel.":"Официальный реестр высших государственных служащих.",
    "Government Officials":"Должностные лица правительства",
    "General of the Army":"Генерал армии",
    "Air Marshal":"Маршал авиации",
    "General of the Navy":"Генерал флота",
    "Head of Publicity":"Руководитель публичной информации",
    "General of Foreign Affairs":"Генерал иностранных дел",
    "Head of Nuclear Programme":"Руководитель ядерной программы",
    "Chairman of the Committee of State Security":"Председатель Комитета государственной безопасности",
    "Rank, name, division and official portrait records.":"Записи о звании, имени, подразделении и официальном портрете.",
    "This page lists senior officials of the New Treekian Union of the Socialist Republics. Each portrait looks for a file named after the official, such as":"На этой странице перечислены старшие должностные лица Нового Трикианского Союза Социалистических Республик. Каждый портрет ищет файл, названный по имени должностного лица, например",
    "If the file is missing, a placeholder portrait appears automatically.":"Если файл отсутствует, автоматически отображается портрет-заглушка.",
    "Official Profile":"Официальный профиль",
    "Official personnel profile.":"Официальная карточка служащего.",
    "Back to Officials":"Назад к должностным лицам",
    "Executive Government":"Исполнительное правительство",
    "Treekian Army":"Трикианская армия",
    "Treekian Air Force":"Трикианские ВВС",
    "Treekian Navy":"Трикианский флот",
    "Active Service":"Действующая служба",
    "Active":"Активен",
    "In Office":"В должности",
    "Chairman":"Председатель",
    "Director":"Директор",
    "Ministry of Defence":"Министерство обороны",
    "Treekian Armed Forces":"Трикианские вооружённые силы",
    "Defending the New Treekian Union of the Socialist Republics.":"Защита Нового Трикианского Союза Социалистических Республик.",
    "Overview":"Обзор",
    "Military Branches":"Военные рода войск",
    "Command Structure":"Структура командования",
    "Commander-in-Chief":"Главнокомандующий",
    "Command":"Командование",
    "Mission":"Миссия",
    "Inventory":"Инвентарь",
    "Core Values":"Основные ценности",
    "Strength • Readiness • Discipline":"Сила • Готовность • Дисциплина",
    "Air Superiority • Readiness • Precision":"Превосходство в воздухе • Готовность • Точность",
    "Service • Vigilance • Maritime Security":"Служба • Бдительность • Морская безопасность",
    "Readiness":"Готовность",
    "Discipline":"Дисциплина",
    "Service":"Служба",
    "Unity":"Единство",
    "Prepared to respond whenever required.":"Готовность реагировать при необходимости.",
    "Professional standards in all operations.":"Профессиональные стандарты во всех операциях.",
    "Service to the nation above self.":"Служение нации выше личных интересов.",
    "Working together for national defence.":"Совместная работа ради национальной обороны.",
    "Currency • Trade • National Statistics":"Валюта • Торговля • Национальная статистика",
    "Treekian Economy":"Трикианская экономика",
    "National planning and public administration.":"Национальное планирование и государственное управление.",
    "Key Indicators":"Ключевые показатели",
    "Economic Model":"Экономическая модель",
    "Socialist Planned Economy":"Социалистическая плановая экономика",
    "Trade Status":"Торговый статус",
    "Internal / Micronational":"Внутренний / микронациональный",
    "Primary Industries":"Основные отрасли",
    "Administration, Defence, Public Services":"Администрация, оборона, государственные службы",
    "Identity • Language • National Symbols":"Идентичность • Язык • Национальные символы",
    "Treekian Culture":"Трикианская культура",
    "Unity, tradition and national character.":"Единство, традиции и национальный характер.",
    "National Identity":"Национальная идентичность",
    "National Animal":"Национальное животное",
    "Yellow-crested Warbler":"Желтохохлая камышовка",
    "National Dish":"Национальное блюдо",
    "My mate's dad's pizza":"Пицца от папы моего друга",
    "National Sport":"Национальный спорт",
    "Football":"Футбол",
    "Law • Structure • National Principles":"Закон • Структура • Национальные принципы",
    "Constitution of Treekia":"Конституция Трикии",
    "Foundational law of the republics.":"Основной закон республик.",
    "Preamble":"Преамбула",
    "Article I — The State":"Статья I — Государство",
    "Article II — The President":"Статья II — Президент",
    "Article III — Government Structure":"Статья III — Структура правительства",
    "Article IV — Armed Forces":"Статья IV — Вооружённые силы",
    "Article V — State Security":"Статья V — Государственная безопасность",
    "Security • Intelligence • National Protection":"Безопасность • Разведка • Национальная защита",
    "Safeguarding national stability and sovereignty.":"Защита национальной стабильности и суверенитета.",
    "Leadership":"Руководство",
    "Branch":"Ветвь",
    "State Security":"Государственная безопасность",
    "Reports To":"Подчиняется",
    "Departments of Government":"Правительственные ведомства",
    "Government Ministries":"Правительственные министерства",
    "Administrative departments of the Treekian Government.":"Административные ведомства Трикианского правительства.",
    "Government Departments":"Государственные ведомства",
    "Minister: General Christian":"Министр: генерал Кристиан",
    "Minister: Matthew":"Министр: Мэтью",
    "Director: Noah":"Директор: Ноа",
    "Chairman: Braedyn":"Председатель: Брейдин",
    "Current Leadership":"Текущее руководство",
    "Foreign Affairs":"Иностранные дела",
    "General Matthew":"Генерал Мэтью",
    "Chairman Braedyn":"Председатель Брейдин",
    "Leadership • Service • Unity":"Руководство • Служба • Единство",
    "Office of the President":"Офис президента",
    "Head of State and national executive office.":"Глава государства и национальный исполнительный офис.",
    "Restricted Access":"Ограниченный доступ",
    "Authorised government personnel only.":"Только для уполномоченных государственных сотрудников.",
    "Staff ID":"Идентификатор сотрудника",
    "Password":"Пароль",
    "Portal access is locked in this public website demo.":"Доступ к порталу заблокирован в этой публичной демонстрации сайта.",
    "Internal Records":"Внутренние записи",
    "Government Staff Portal":"Портал государственных сотрудников",
    "Internal Services":"Внутренние службы",
    "Personnel Register":"Реестр персонала",
    "Security Notices":"Уведомления безопасности",
    "Ministry Reports":"Отчёты министерств",
    "Defence Records":"Оборонные записи"
});

const originalTextNodes=new WeakMap();
function cleanNames(text){
    const oldName='Ma'+'nu';
    return text
        .replace(new RegExp('\\bGeneral\\s+'+oldName+'(?:\\s+the\\s+Great)?\\b','g'),'General Matthew')
        .replace(new RegExp('\\b'+oldName+'(?:\\s+the\\s+Great)?\\b','g'),'Matthew')
        .replace(/\bMatthew\s+the\s+Great\b/g,'Matthew')
        .replace(/\bGeneral\s+Matthew\s+the\s+Great\b/g,'General Matthew')
        .replace(/\bTruth Speaking\b/g,'Ministry of Publicity')
        .replace(/\bCommander\b(?!-in-Chief)/g,'Braedyn');
}
function translateText(text){
    let out=cleanNames(text);
    if((localStorage.getItem('treekia-language')||'en')!=='ru') return out;
    Object.keys(textRu).sort((a,b)=>b.length-a.length).forEach(key=>{
        out=out.split(key).join(textRu[key]);
    });
    return out;
}
function translateTree(){
    const roots=[document.querySelector('main'),document.querySelector('#page-kicker'),document.querySelector('#page-title'),document.querySelector('#page-subtitle')].filter(Boolean);
    roots.forEach(root=>{
        const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
        const nodes=[];
        while(walker.nextNode()) nodes.push(walker.currentNode);
        nodes.forEach(node=>{
            if(!node.textContent.trim()) return;
            if(!originalTextNodes.has(node)) originalTextNodes.set(node,node.textContent);
            node.textContent=translateText(originalTextNodes.get(node));
        });
    });
}
function applyLanguage(lang){
    document.documentElement.lang=lang==='ru'?'ru':'en';
    localStorage.setItem('treekia-language',lang);
    document.querySelectorAll('[data-i18n]').forEach(el=>{
        if(!el.dataset.en) el.dataset.en=cleanNames(el.textContent);
        el.textContent=lang==='ru'?(uiRu[el.dataset.i18n]||el.dataset.en):cleanNames(el.dataset.en);
    });
    const button=document.querySelector('#language-toggle');
    if(button) button.textContent=lang==='ru'?'English':'Русский';
    translateTree();
}
function renderPage(){
    const key=document.body.dataset.page||'home',p=pageData[key]||pageData.home;
    document.querySelector('#main-nav [data-nav="'+p.nav+'"]')?.classList.add('active');
    document.querySelector('#page-kicker').textContent=p.kicker;
    document.querySelector('#page-title').textContent=p.title;
    document.querySelector('#page-subtitle').textContent=p.subtitle;
    document.querySelector('#content').innerHTML=cleanNames(p.sections.join(''));
}
function setupAnimation(){
    const obs=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')}),{threshold:.15});
    document.querySelectorAll('section').forEach(section=>{section.classList.add('hidden');obs.observe(section)});
}
function setupPortal(){
    const form=document.querySelector('#login-form'),message=document.querySelector('#login-message');
    if(form&&message) form.addEventListener('submit',event=>{event.preventDefault();message.textContent=translateText('Portal access is locked in this public website demo.')});
}
function setupMenu(){
    const button=document.querySelector('.mobile-menu'),nav=document.querySelector('#main-nav');
    if(button&&nav) button.addEventListener('click',()=>{const isOpen=nav.classList.toggle('open');button.setAttribute('aria-expanded',String(isOpen))});
}
document.addEventListener('DOMContentLoaded',()=>{
    renderPage();
    setupMenu();
    setupPortal();
    setupAnimation();
    const button=document.querySelector('#language-toggle');
    if(button) button.addEventListener('click',()=>applyLanguage((localStorage.getItem('treekia-language')||'en')==='ru'?'en':'ru'));
    applyLanguage(localStorage.getItem('treekia-language')||'en');
});
console.log('Government Portal Loaded Successfully');
