import type { Locale } from "@/store/localeStore";

export interface ExperienceItem {
  id: number;
  role: string;
  org: string;
  location: string;
  period: string;
  description: string;
  tech: string[];
  portal: "blue" | "orange";
  link?: { label: string; url: string };
}

export interface ProjectItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  url: string;
  tech: string[];
  color: string;
  glow: string;
}

const experienceCs: ExperienceItem[] = [
  {
    id: 1,
    role: "Webový vývojář",
    org: "Wloom",
    location: "Digitální studio",
    period: "Současnost",
    description:
      "Full-stack programování, tvorba webových aplikací, řešení technických logů a integrace. Vývoj a nasazení klientských řešení s důrazem na rychlost, spolehlivost a moderní DX.",
    tech: ["Next.js", "Vercel", "Firebase"],
    portal: "blue",
  },
  {
    id: 2,
    role: "Main Tournament Organizer",
    org: "EsportArena",
    location: "Studentské turnaje",
    period: "Aktivní",
    description:
      "Zastřešení celé organizace studentských turnajů, komunikace s hráči, technické zajištění a správa Faceit platformy. Koordinace formátů, pravidel a průběhu celých eventů.",
    tech: ["Faceit", "Event management", "Komunikace"],
    portal: "blue",
  },
  {
    id: 3,
    role: "Organizátor LAN turnajů",
    org: "Elite Arena Karlovy Vary",
    location: "Karlovy Vary",
    period: "Aktivní",
    description:
      "Příprava, produkce a administrace živých offline herních eventů. Od logistiky přes produkci až po zajištění hladkého průběhu LAN turnajů na místě.",
    tech: ["LAN produkce", "Live eventy", "Administrace"],
    portal: "orange",
  },
  {
    id: 4,
    role: "Organizátor CS:GO turnajů",
    org: "Star League",
    location: "Česká republika",
    period: "2020 – 2022",
    description:
      "Organizace a produkce CS:GO turnajů pod hlavičkou Star League. Zajištění průběhu soutěží, komunikace s týmy a tvorba video obsahu kolem turnajové scény.",
    tech: ["CS:GO", "Turnaje", "Produkce"],
    portal: "blue",
    link: {
      label: "YouTube · Star League",
      url: "https://www.youtube.com/@starleague8132",
    },
  },
  {
    id: 5,
    role: "Organizátor CS:GO turnajů",
    org: "Enelite Cup",
    location: "Česká republika",
    period: "2022 – 2023",
    description:
      "Organizace CS:GO turnajů Enelite Cup — příprava formátu, komunikace s hráči a týmy a správa komunity kolem eventu.",
    tech: ["CS:GO", "Komunita", "Eventy"],
    portal: "orange",
    link: {
      label: "Instagram · Enelite Cup",
      url: "https://instagram.com/entelite.cup",
    },
  },
  {
    id: 6,
    role: "Grafický designer",
    org: "Herní týmy v ČR",
    location: "Česká republika",
    period: "2020 – současnost",
    description:
      "Grafický design pro herní týmy v České republice — vizuální identity, bannery, thumbnaily, motion grafika a video editing. Práce napříč Adobe Creative Suite a Sony Vegas.",
    tech: [
      "Photoshop",
      "Premiere",
      "After Effects",
      "Lightroom",
      "Media Encoder",
      "Sony Vegas 17",
    ],
    portal: "blue",
  },
  {
    id: 7,
    role: "Hráč / kapitán školního týmu",
    org: "Studentský turnaj CS2",
    location: "Česká republika",
    period: "1. – 3. ročník",
    description:
      "Dotáhl školní tým ve hře Counter-Strike 2 ve studentském turnaji: 1. ročník — 1. místo, 2. ročník — 2. místo, 3. ročník — 16. místo ze 100 škol.",
    tech: ["CS2", "Týmová hra", "1. místo", "2. místo"],
    portal: "orange",
  },
];

const experienceEn: ExperienceItem[] = [
  {
    id: 1,
    role: "Web Developer",
    org: "Wloom",
    location: "Digital studio",
    period: "Present",
    description:
      "Full-stack programming, building web applications, resolving technical logs and integrations. Shipping client solutions with a focus on speed, reliability and modern DX.",
    tech: ["Next.js", "Vercel", "Firebase"],
    portal: "blue",
  },
  {
    id: 2,
    role: "Main Tournament Organizer",
    org: "EsportArena",
    location: "Student tournaments",
    period: "Active",
    description:
      "Overseeing the full organization of student tournaments, player communication, technical setup and Faceit platform administration. Coordinating formats, rules and entire event flows.",
    tech: ["Faceit", "Event management", "Communication"],
    portal: "blue",
  },
  {
    id: 3,
    role: "LAN Tournament Organizer",
    org: "Elite Arena Karlovy Vary",
    location: "Karlovy Vary",
    period: "Active",
    description:
      "Preparation, production and administration of live offline gaming events — from logistics and production to a smooth on-site LAN tournament experience.",
    tech: ["LAN production", "Live events", "Administration"],
    portal: "orange",
  },
  {
    id: 4,
    role: "CS:GO Tournament Organizer",
    org: "Star League",
    location: "Czech Republic",
    period: "2020 – 2022",
    description:
      "Organizing and producing CS:GO tournaments under Star League. Running competitions, communicating with teams and creating video content around the tournament scene.",
    tech: ["CS:GO", "Tournaments", "Production"],
    portal: "blue",
    link: {
      label: "YouTube · Star League",
      url: "https://www.youtube.com/@starleague8132",
    },
  },
  {
    id: 5,
    role: "CS:GO Tournament Organizer",
    org: "Enelite Cup",
    location: "Czech Republic",
    period: "2022 – 2023",
    description:
      "Organizing Enelite Cup CS:GO tournaments — format design, player and team communication, and community management around the event.",
    tech: ["CS:GO", "Community", "Events"],
    portal: "orange",
    link: {
      label: "Instagram · Enelite Cup",
      url: "https://instagram.com/entelite.cup",
    },
  },
  {
    id: 6,
    role: "Graphic Designer",
    org: "Gaming teams in CZ",
    location: "Czech Republic",
    period: "2020 – present",
    description:
      "Graphic design for gaming teams in the Czech Republic — visual identities, banners, thumbnails, motion graphics and video editing across Adobe Creative Suite and Sony Vegas.",
    tech: [
      "Photoshop",
      "Premiere",
      "After Effects",
      "Lightroom",
      "Media Encoder",
      "Sony Vegas 17",
    ],
    portal: "blue",
  },
  {
    id: 7,
    role: "Player / school team captain",
    org: "Student CS2 tournament",
    location: "Czech Republic",
    period: "Seasons 1 – 3",
    description:
      "Led the school Counter-Strike 2 team in the student tournament: season 1 — 1st place, season 2 — 2nd place, season 3 — 16th place out of 100 schools.",
    tech: ["CS2", "Team play", "1st place", "2nd place"],
    portal: "orange",
  },
];

const projectsCs: ProjectItem[] = [
  {
    id: "bulldogo",
    name: "Bulldogo.cz",
    subtitle: "Platforma pro inzerci služeb",
    description:
      "Webová aplikace propojující zákazníky s poskytovateli služeb. Inzertní platforma s moderním UI a důrazem na přehledné propojení nabídky a poptávky.",
    url: "https://bulldogo.cz",
    tech: ["Next.js", "React", "Vercel"],
    color: "#f97316",
    glow: "rgba(249,115,22,0.55)",
  },
  {
    id: "elite-arena",
    name: "Elite Arena Turnaje",
    subtitle: "turnaj.elite-arena.cz",
    description:
      "Landing a registrační systém pro LAN turnaje CS2 i EA Sports FC v Elite Game Arena Karlovy Vary. Kalendář turnajů, přihlášky a prezentace herního setupu.",
    url: "https://turnaj.elite-arena.cz",
    tech: ["Next.js", "Event System", "CS2"],
    color: "#22d3ee",
    glow: "rgba(34,211,238,0.55)",
  },
  {
    id: "pension-sunset",
    name: "Pension Sunset",
    subtitle: "pensionsunset.com · Mezirolí",
    description:
      "Prezentační web penzionu u Karlových Varů — pokoje, wellness, okolí a rezervace. Klidný design laděný k atmosféře Feng Shui ubytování.",
    url: "https://pensionsunset.com",
    tech: ["Next.js", "Booking", "Vercel"],
    color: "#fbbf24",
    glow: "rgba(251,191,36,0.55)",
  },
  {
    id: "podlahy",
    name: "Podlahy Cheb",
    subtitle: "podlahycheb.cz",
    description:
      "Produktový katalog a firemní prezentace prodejce podlah. Přehledný výběr sortimentu s důrazem na elegantní produktové stránky.",
    url: "https://podlahycheb.cz",
    tech: ["Next.js", "Katalog", "Tailwind"],
    color: "#a78bfa",
    glow: "rgba(167,139,250,0.55)",
  },
  {
    id: "ejdry",
    name: "Ejdry.cz",
    subtitle: "Firemní prezentace",
    description:
      "Profesionální firemní web s čistou strukturou a moderním vizuálem. Prezentace služeb a kontaktů pro B2B i koncové zákazníky.",
    url: "https://ejdry.cz",
    tech: ["Next.js", "SEO", "Vercel"],
    color: "#34d399",
    glow: "rgba(52,211,153,0.55)",
  },
  {
    id: "extroworld",
    name: "Extroworld",
    subtitle: "extroworld.com · Streetwear",
    description:
      "Kreativní e-commerce prezentace streetwear značky Extroworld — dropy, shop a budování komunity kolem unikátního a kontroverzního stylu.",
    url: "https://extroworld.com",
    tech: ["Next.js", "E-commerce", "Design"],
    color: "#fb7185",
    glow: "rgba(251,113,133,0.55)",
  },
  {
    id: "raj-mazlicku",
    name: "Ráj mazlíčků",
    subtitle: "Chovatelské potřeby · Karlovarsko",
    description:
      "Kompletní web rodinné firmy — pobočky, AkvaTera trhy, věrnostní program Smečka, fotogalerie, aktuality, FAQ a kontakt. Nasazeno na Vercel.",
    url: "https://rajmazlicku.vercel.app",
    tech: ["Next.js", "Firebase", "Vercel"],
    color: "#4ade80",
    glow: "rgba(74,222,128,0.55)",
  },
  {
    id: "uctarna",
    name: "Účtárna",
    subtitle: "uctarna.fun · Prodejní systém",
    description:
      "Moderní profesionální prodejní / účetní systém s důrazem na přehlednost a rychlou orientaci. Interní firemní nástroj pro každodenní provoz.",
    url: "https://www.uctarna.fun",
    tech: ["Next.js", "Firebase", "Full-stack"],
    color: "#38bdf8",
    glow: "rgba(56,189,248,0.55)",
  },
  {
    id: "wloom",
    name: "Wloom Studio",
    subtitle: "wloom-seven.vercel.app",
    description:
      "Prezentační web digitálního studia Wloom — služby, portfolio projektů a kontakt. Vizuální identita „S námi rozkvetete online“.",
    url: "https://wloom-seven.vercel.app",
    tech: ["Next.js", "3D / Motion", "Vercel"],
    color: "#e879f9",
    glow: "rgba(232,121,249,0.55)",
  },
  {
    id: "esportarena",
    name: "EsportArena TSV",
    subtitle: "Studentský turnaj · Sezóna 4",
    description:
      "Web studentského esport turnaje EsportArena TSV — sezónní prezentace, informace o turnaji a registrace pro hráče.",
    url: "https://esportarena-tsv.vercel.app",
    tech: ["Next.js", "Esport", "Vercel"],
    color: "#818cf8",
    glow: "rgba(129,140,248,0.55)",
  },
  {
    id: "selsky-dvur",
    name: "Selský dvůr",
    subtitle: "Penzion & restaurace · Nový Drahov",
    description:
      "Vícejazyčný web rodinného penzionu s restaurací v Krušných horách — ubytování, kuchyně, svatby a akce, výlety, galerie a rezervace.",
    url: "https://selskydvur-three.vercel.app/cs",
    tech: ["Next.js", "i18n", "Vercel"],
    color: "#c4a574",
    glow: "rgba(196,165,116,0.55)",
  },
  {
    id: "lpg",
    name: "LPG stanice",
    subtitle: "Kadaň & Karlovy Vary",
    description:
      "Prezentační web LPG čerpacích stanic v Kadani a Karlových Varech — pobočky, kontakty a informace o provozu.",
    url: "https://lpg-plum.vercel.app",
    tech: ["Next.js", "Landing", "Vercel"],
    color: "#60a5fa",
    glow: "rgba(96,165,250,0.55)",
  },
  {
    id: "dotaznik-tsv",
    name: "Dotazník TSV",
    subtitle: "EsportArena · 3. sezóna",
    description:
      "Interaktivní dotazník pro hráče a diváky 3. sezóny ESPORTARENA_TSV — sběr zpětné vazby a příprava na další ročník.",
    url: "https://dotaznik-tsv.vercel.app",
    tech: ["Next.js", "Forms", "Vercel"],
    color: "#f472b6",
    glow: "rgba(244,114,182,0.55)",
  },
];

const projectsEn: ProjectItem[] = [
  {
    id: "bulldogo",
    name: "Bulldogo.cz",
    subtitle: "Service listing platform",
    description:
      "A web app connecting customers with service providers. A modern listing platform focused on clear matching of supply and demand.",
    url: "https://bulldogo.cz",
    tech: ["Next.js", "React", "Vercel"],
    color: "#f97316",
    glow: "rgba(249,115,22,0.55)",
  },
  {
    id: "elite-arena",
    name: "Elite Arena Tournaments",
    subtitle: "turnaj.elite-arena.cz",
    description:
      "Landing and registration system for CS2 and EA Sports FC LAN tournaments at Elite Game Arena Karlovy Vary. Tournament calendar, sign-ups and setup presentation.",
    url: "https://turnaj.elite-arena.cz",
    tech: ["Next.js", "Event System", "CS2"],
    color: "#22d3ee",
    glow: "rgba(34,211,238,0.55)",
  },
  {
    id: "pension-sunset",
    name: "Pension Sunset",
    subtitle: "pensionsunset.com · Mezirolí",
    description:
      "Presentation website for a guesthouse near Karlovy Vary — rooms, wellness, surroundings and booking. Calm design matching Feng Shui hospitality.",
    url: "https://pensionsunset.com",
    tech: ["Next.js", "Booking", "Vercel"],
    color: "#fbbf24",
    glow: "rgba(251,191,36,0.55)",
  },
  {
    id: "podlahy",
    name: "Podlahy Cheb",
    subtitle: "podlahycheb.cz",
    description:
      "Product catalog and company website for a flooring retailer. Clear product browsing with elegant product pages.",
    url: "https://podlahycheb.cz",
    tech: ["Next.js", "Catalog", "Tailwind"],
    color: "#a78bfa",
    glow: "rgba(167,139,250,0.55)",
  },
  {
    id: "ejdry",
    name: "Ejdry.cz",
    subtitle: "Company website",
    description:
      "Professional company website with a clean structure and modern visuals. Services and contacts for B2B and end customers.",
    url: "https://ejdry.cz",
    tech: ["Next.js", "SEO", "Vercel"],
    color: "#34d399",
    glow: "rgba(52,211,153,0.55)",
  },
  {
    id: "extroworld",
    name: "Extroworld",
    subtitle: "extroworld.com · Streetwear",
    description:
      "Creative e-commerce presentation for the Extroworld streetwear brand — drops, shop and community around a unique, controversial style.",
    url: "https://extroworld.com",
    tech: ["Next.js", "E-commerce", "Design"],
    color: "#fb7185",
    glow: "rgba(251,113,133,0.55)",
  },
  {
    id: "raj-mazlicku",
    name: "Ráj mazlíčků",
    subtitle: "Pet supplies · Karlovy Vary region",
    description:
      "Complete website for a family business — branches, AkvaTera markets, Smečka loyalty program, gallery, news, FAQ and contact. Deployed on Vercel.",
    url: "https://rajmazlicku.vercel.app",
    tech: ["Next.js", "Firebase", "Vercel"],
    color: "#4ade80",
    glow: "rgba(74,222,128,0.55)",
  },
  {
    id: "uctarna",
    name: "Účtárna",
    subtitle: "uctarna.fun · POS system",
    description:
      "Modern professional sales / accounting system focused on clarity and quick orientation. An internal business tool for everyday operations.",
    url: "https://www.uctarna.fun",
    tech: ["Next.js", "Firebase", "Full-stack"],
    color: "#38bdf8",
    glow: "rgba(56,189,248,0.55)",
  },
  {
    id: "wloom",
    name: "Wloom Studio",
    subtitle: "wloom-seven.vercel.app",
    description:
      "Presentation website for digital studio Wloom — services, project portfolio and contact. Visual identity “Bloom online with us”.",
    url: "https://wloom-seven.vercel.app",
    tech: ["Next.js", "3D / Motion", "Vercel"],
    color: "#e879f9",
    glow: "rgba(232,121,249,0.55)",
  },
  {
    id: "esportarena",
    name: "EsportArena TSV",
    subtitle: "Student tournament · Season 4",
    description:
      "Website for the EsportArena TSV student esport tournament — season presentation, tournament info and player registration.",
    url: "https://esportarena-tsv.vercel.app",
    tech: ["Next.js", "Esport", "Vercel"],
    color: "#818cf8",
    glow: "rgba(129,140,248,0.55)",
  },
  {
    id: "selsky-dvur",
    name: "Selský dvůr",
    subtitle: "Guesthouse & restaurant · Nový Drahov",
    description:
      "Multilingual website for a family guesthouse with restaurant in the Ore Mountains — lodging, cuisine, weddings & events, trips, gallery and booking.",
    url: "https://selskydvur-three.vercel.app/cs",
    tech: ["Next.js", "i18n", "Vercel"],
    color: "#c4a574",
    glow: "rgba(196,165,116,0.55)",
  },
  {
    id: "lpg",
    name: "LPG Stations",
    subtitle: "Kadaň & Karlovy Vary",
    description:
      "Presentation website for LPG filling stations in Kadaň and Karlovy Vary — locations, contacts and operational information.",
    url: "https://lpg-plum.vercel.app",
    tech: ["Next.js", "Landing", "Vercel"],
    color: "#60a5fa",
    glow: "rgba(96,165,250,0.55)",
  },
  {
    id: "dotaznik-tsv",
    name: "TSV Survey",
    subtitle: "EsportArena · Season 3",
    description:
      "Interactive survey for players and viewers of ESPORTARENA_TSV season 3 — collecting feedback and preparing for the next season.",
    url: "https://dotaznik-tsv.vercel.app",
    tech: ["Next.js", "Forms", "Vercel"],
    color: "#f472b6",
    glow: "rgba(244,114,182,0.55)",
  },
];

export function getExperience(locale: Locale): ExperienceItem[] {
  return locale === "en" ? experienceEn : experienceCs;
}

export function getProjects(locale: Locale): ProjectItem[] {
  return locale === "en" ? projectsEn : projectsCs;
}
