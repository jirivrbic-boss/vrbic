import type { Locale } from "@/store/localeStore";

type Dict = Record<string, string>;

const cs: Dict = {
  "meta.title": "Jiří Vrba — macOS Portfolio",
  "meta.description":
    "Interaktivní portfolio Jiřího Vrby ve stylu macOS. Full-stack vývojář & esport event organizer.",

  "app.about": "O mně",
  "app.experience": "Zkušenosti",
  "app.skills": "Dovednosti",
  "app.projects": "Projekty",
  "app.contact": "Kontakt",
  "app.safari": "Safari",
  "app.discord": "Discord",

  "topbar.file": "Soubor",
  "topbar.edit": "Úpravy",
  "topbar.view": "Zobrazení",
  "topbar.window": "Okno",
  "topbar.help": "Nápověda",
  "topbar.finder": "Finder",
  "topbar.portfolio": "Jiří Vrba · Portfolio OS",
  "topbar.logout": "Odhlásit se",
  "topbar.lang": "EN",
  "topbar.langTitle": "Switch to English",

  "window.close": "Zavřít",
  "window.minimize": "Minimalizovat",
  "window.maximize": "Maximalizovat",

  "lock.password": "Heslo",
  "lock.unlock": "Odemknout",
  "lock.hintMobile": "Klepni na šipku pro přihlášení",
  "lock.hintDesktop": "Stiskni Enter nebo šipku pro přihlášení",

  "desktop.openHint": "klik otevře",

  "about.title": "Full-stack Web Developer & Esport Event Organizer",
  "about.bio":
    "Programátor a vývojář webových aplikací pro digitální studio Wloom s obrovskou vášní pro esport. Při psaní kódu a vývoji softwaru aktivně a naplno využívám AI nástroje, díky čemuž pracuji mnohem rychleji a efektivněji. Kromě vývoje buduji herní komunitu a zajišťuji chod velkých turnajů pod hlavičkou EsportArena a Elite Arena Karlovy Vary.",
  "about.education": "Vzdělání & certifikace",
  "about.edu1": "Čerstvý absolvent střední školy",
  "about.edu2": "Cambridge English B2 certifikát",
  "about.edu3": "Němčina na úrovni A2",
  "about.interests": "Zájmy",
  "about.i1t": "Counter-Strike 2",
  "about.i1d": "Kompetitivní hraní",
  "about.i2t": "Karate",
  "about.i2d": "Bojová umění",
  "about.i3t": "Škoda Octavia 1",
  "about.i3d": "1.9 TDI — renovace",
  "about.i4t": "Cestování",
  "about.i4d": "Interrail dobrodružství",

  "exp.noticeTitle": "Enrichment Center Notice",
  "exp.noticeBody":
    "Testovací komory reprezentují kariérní zkušenosti subjektu. Cake bude udělen po úspěšném dokončení všech komor.",
  "exp.selectChamber": "Please Select a Test Chamber",
  "exp.proficiencies": "Subject Proficiencies",
  "exp.progressReport": "Test Subject Progress Report",

  "skills.cat.dev": "Vývoj",
  "skills.cat.infra": "Infrastruktura",
  "skills.cat.mgmt": "Management",
  "skills.cat.design": "Design & Video",
  "skills.cat.lang": "Jazyky",
  "skills.servers": "Správa serverů",
  "skills.domains": "Domény",
  "skills.gameStructures": "Tvorba herních struktur",
  "skills.liveEvents": "Produkce live eventů",
  "skills.en": "Angličtina (Cambridge B2)",
  "skills.de": "Němčina (A2)",
  "skills.cs": "Čeština (Rodilý mluvčí)",

  "projects.hint": "Klikni na uzel pro detail a odkaz",
  "projects.close": "Zavřít",
  "projects.view": "View_Project",
  "projects.closeBtn": "Close",

  "contact.title": "Kontakt",
  "contact.subtitle": "Ozvi se — rád se spojím",
  "contact.phone": "Telefon",
  "contact.email": "E-mail",
  "contact.copyPhone": "Kopírovat telefon",
  "contact.copyEmail": "Kopírovat e-mail",
  "contact.copied": "Zkopírováno",
  "contact.call": "Zavolat",
  "contact.write": "Napsat e-mail",
  "contact.note": "Nejrychleji mě zastihneš na e-mailu nebo telefonu.",

  "discord.copy": "Zkopírovat",
  "discord.copied": "Zkopírováno do schránky",
  "discord.hint": "Zkopíruj si moje uživatelské jméno a přidej mě na Discordu.",
  "discord.paste": "Stačí Ctrl/Cmd + V do Discordu",
  "discord.alt": "Profilovka Discord",
  "discord.prompt": "Zkopíruj Discord nick:",

  "safari.back": "Zpět",
  "safari.forward": "Vpřed",
  "safari.reload": "Obnovit",
  "safari.share": "Sdílet",
  "safari.newTab": "Nový tab",
  "safari.openExternal": "Otevřít mimo Safari",
  "safari.blocked":
    "Tato stránka neumožňuje přímé vložení do Safari okna. Otevři ji tlačítkem níže — Safari zůstane součástí plochy.",
  "safari.openHost": "Otevřít",
  "safari.copyUrl": "Kopírovat URL",
  "safari.discordUser": "Discord uživatel",
  "safari.copyNick": "Kopírovat nick",
  "safari.copied": "Zkopírováno!",
};

const en: Dict = {
  "meta.title": "Jiří Vrba — macOS Portfolio",
  "meta.description":
    "Interactive macOS-style portfolio of Jiří Vrba. Full-stack developer & esport event organizer.",

  "app.about": "About Me",
  "app.experience": "Experience",
  "app.skills": "Skills",
  "app.projects": "Projects",
  "app.contact": "Contact",
  "app.safari": "Safari",
  "app.discord": "Discord",

  "topbar.file": "File",
  "topbar.edit": "Edit",
  "topbar.view": "View",
  "topbar.window": "Window",
  "topbar.help": "Help",
  "topbar.finder": "Finder",
  "topbar.portfolio": "Jiří Vrba · Portfolio OS",
  "topbar.logout": "Log Out",
  "topbar.lang": "CS",
  "topbar.langTitle": "Přepnout do češtiny",

  "window.close": "Close",
  "window.minimize": "Minimize",
  "window.maximize": "Maximize",

  "lock.password": "Password",
  "lock.unlock": "Unlock",
  "lock.hintMobile": "Tap the arrow to sign in",
  "lock.hintDesktop": "Press Enter or the arrow to sign in",

  "desktop.openHint": "click to open",

  "about.title": "Full-stack Web Developer & Esport Event Organizer",
  "about.bio":
    "Software engineer and web application developer for the digital studio Wloom, with a huge passion for esports. When writing code and building software I actively use AI tools, which helps me work much faster and more efficiently. Beyond development, I build gaming communities and run major tournaments under EsportArena and Elite Arena Karlovy Vary.",
  "about.education": "Education & certifications",
  "about.edu1": "Recent secondary school graduate",
  "about.edu2": "Cambridge English B2 certificate",
  "about.edu3": "German at A2 level",
  "about.interests": "Interests",
  "about.i1t": "Counter-Strike 2",
  "about.i1d": "Competitive play",
  "about.i2t": "Karate",
  "about.i2d": "Martial arts",
  "about.i3t": "Škoda Octavia 1",
  "about.i3d": "1.9 TDI — restoration",
  "about.i4t": "Travel",
  "about.i4d": "Interrail adventures",

  "exp.noticeTitle": "Enrichment Center Notice",
  "exp.noticeBody":
    "Test chambers represent the subject's career experience. Cake will be awarded upon successful completion of all chambers.",
  "exp.selectChamber": "Please Select a Test Chamber",
  "exp.proficiencies": "Subject Proficiencies",
  "exp.progressReport": "Test Subject Progress Report",

  "skills.cat.dev": "Development",
  "skills.cat.infra": "Infrastructure",
  "skills.cat.mgmt": "Management",
  "skills.cat.design": "Design & Video",
  "skills.cat.lang": "Languages",
  "skills.servers": "Server administration",
  "skills.domains": "Domains",
  "skills.gameStructures": "Game structure design",
  "skills.liveEvents": "Live event production",
  "skills.en": "English (Cambridge B2)",
  "skills.de": "German (A2)",
  "skills.cs": "Czech (Native)",

  "projects.hint": "Click a node for details and the link",
  "projects.close": "Close",
  "projects.view": "View_Project",
  "projects.closeBtn": "Close",

  "contact.title": "Contact",
  "contact.subtitle": "Get in touch — happy to connect",
  "contact.phone": "Phone",
  "contact.email": "Email",
  "contact.copyPhone": "Copy phone",
  "contact.copyEmail": "Copy email",
  "contact.copied": "Copied",
  "contact.call": "Call",
  "contact.write": "Send email",
  "contact.note": "The fastest way to reach me is email or phone.",

  "discord.copy": "Copy",
  "discord.copied": "Copied to clipboard",
  "discord.hint": "Copy my username and add me on Discord.",
  "discord.paste": "Just paste with Ctrl/Cmd + V in Discord",
  "discord.alt": "Discord avatar",
  "discord.prompt": "Copy Discord nick:",

  "safari.back": "Back",
  "safari.forward": "Forward",
  "safari.reload": "Reload",
  "safari.share": "Share",
  "safari.newTab": "New tab",
  "safari.openExternal": "Open outside Safari",
  "safari.blocked":
    "This page cannot be embedded inside the Safari window. Open it with the button below — Safari stays part of the desktop.",
  "safari.openHost": "Open",
  "safari.copyUrl": "Copy URL",
  "safari.discordUser": "Discord user",
  "safari.copyNick": "Copy nick",
  "safari.copied": "Copied!",
};

const dictionaries: Record<Locale, Dict> = { cs, en };

export function translate(locale: Locale, key: string): string {
  return dictionaries[locale][key] ?? dictionaries.cs[key] ?? key;
}

export function useTranslations() {
  // imported dynamically by components via store
  return { cs, en };
}
