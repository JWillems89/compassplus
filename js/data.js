// ═══════════════════════════════════════════════════════
// COMPASS+ · Site Data
// In production this data is managed via the /admin CMS.
// To add content: go to /admin, log in, and edit via the UI.
// ═══════════════════════════════════════════════════════

window.COMPASS = {};

// ── NEWS ──────────────────────────────────────────────
COMPASS.news = [
  {
    id: "project-launch",
    title_en: "COMPASS+ project officially launches",
    title_nl: "COMPASS+ project officieel van start",
    category_en: "Project Launch",
    category_nl: "Projectstart",
    date: "2025-01-15",
    featured: true,
    excerpt_en: "The FWO SBO project COMPASS+ has officially started its 4-year research programme. The interdisciplinary consortium of UA, UGent, KU Leuven and Artevelde University of Applied Sciences held its inaugural advisory committee meeting, bringing together 16 partner organisations.",
    excerpt_nl: "Het FWO SBO project COMPASS+ is officieel gestart met zijn 4-jarig onderzoeksprogramma. Het interdisciplinair consortium van UA, UGent, KU Leuven en Arteveldehogeschool hield zijn eerste klankbordgroepvergadering, waarbij 16 partnerorganisaties samenkwamen.",
    link: ""
  },
  {
    id: "klankbord-2",
    title_en: "Advisory committee meeting #2 — Research Line 1 preliminary findings",
    title_nl: "Klankbordgroepvergadering #2 — Eerste bevindingen Onderzoekslijn 1",
    category_en: "Advisory Committee",
    category_nl: "Klankbordgroep",
    date: "2026-01-27",
    featured: false,
    excerpt_en: "The second advisory committee meeting presented preliminary findings from Research Line 1 on individual antecedents of feedback engagement using Columbus web tracking data from 30,000+ students.",
    excerpt_nl: "De tweede klankbordgroepvergadering presenteerde eerste bevindingen uit Onderzoekslijn 1 over individuele antecedenten van feedbackgebruik via Columbus webtracking-data van 30.000+ leerlingen.",
    link: ""
  },
  {
    id: "demulder-2023",
    title_en: "Demulder et al. (2023) — Transitions in exploration profiles of students opting for higher education",
    title_nl: "Demulder et al. (2023) — Transities in exploratieprofiele van leerlingen die opteren voor HO",
    category_en: "Publication",
    category_nl: "Publicatie",
    date: "2023-12-01",
    featured: false,
    excerpt_en: "Published in Frontiers in Psychology — this study identified three exploration profiles and found that many final-year secondary school students shift between profiles from fall to spring semester.",
    excerpt_nl: "Gepubliceerd in Frontiers in Psychology — deze studie identificeerde drie exploratieprofiele en stelde vast dat veel leerlingen in het laatste jaar SO van profiel wisselen.",
    link: "https://doi.org/10.3389/fpsyg.2023.1085718"
  },
  {
    id: "roadmap-launch",
    title_en: "Columbus 'Roadmap' module launched for pilot schools",
    title_nl: "Columbus 'Roadmap'-module gelanceerd voor pilootscholen",
    category_en: "Tool Update",
    category_nl: "Tool Update",
    date: "2026-03-01",
    featured: false,
    excerpt_en: "The new Roadmap module in Columbus — developed in collaboration with COMPASS+ researchers — is now available to a first cohort of pilot schools across Flanders.",
    excerpt_nl: "De nieuwe Roadmap-module in Columbus — ontwikkeld in samenwerking met COMPASS+ onderzoekers — is nu beschikbaar voor een eerste cohort pilootscholen in Vlaanderen.",
    link: ""
  },
  {
    id: "earli-2026",
    title_en: "COMPASS+ accepted for presentation at EARLI 2026 — Ghent",
    title_nl: "COMPASS+ aanvaard voor presentatie op EARLI 2026 — Gent",
    category_en: "Conference",
    category_nl: "Conferentie",
    date: "2026-04-10",
    featured: false,
    excerpt_en: "A COMPASS+ paper on feedback engagement profiles has been accepted for presentation at the European Association for Research on Learning and Instruction biennial conference in Ghent (August 2026).",
    excerpt_nl: "Een COMPASS+ paper over feedbackgebruiksprofielen is aanvaard voor presentatie op de tweejaarlijkse EARLI-conferentie in Gent (augustus 2026).",
    link: ""
  }
];

// ── EVENTS ────────────────────────────────────────────
COMPASS.events = [
  {
    id: "klankbord-2",
    title_en: "Klankbordgroep Meeting #2 — Research Line 1 Findings",
    title_nl: "Klankbordgroepvergadering #2 — Bevindingen Onderzoekslijn 1",
    type_en: "Advisory Committee",
    type_nl: "Klankbordgroep",
    date: "2026-01-27",
    location_en: "University of Antwerp",
    location_nl: "Universiteit Antwerpen",
    time: "09:30–13:00",
    description_en: "Second advisory committee meeting presenting preliminary findings from Research Line 1.",
    description_nl: "Tweede klankbordgroepvergadering met eerste bevindingen uit Onderzoekslijn 1."
  },
  {
    id: "webinar-schools",
    title_en: "Columbus for Schools: New Feedback Features — Webinar",
    title_nl: "Columbus voor Scholen: Nieuwe Feedbackmogelijkheden — Webinar",
    type_en: "Webinar",
    type_nl: "Webinar",
    date: "2026-03-15",
    location_en: "Online",
    location_nl: "Online",
    time: "15:00–16:30",
    description_en: "Free webinar for teachers and school counselors on new Columbus feedback features. Free registration.",
    description_nl: "Gratis webinar voor leerkrachten en begeleiders over nieuwe Columbus-feedbackmogelijkheden. Gratis inschrijving."
  },
  {
    id: "lab-study-2",
    title_en: "RL2 Lab Study 2 — Self-regulation cohort (data collection)",
    title_nl: "OL2 Labstudie 2 — Zelfregulatie cohort (dataverzameling)",
    type_en: "Lab Study",
    type_nl: "Labstudie",
    date: "2026-05-12",
    location_en: "Antwerp Social Lab",
    location_nl: "Antwerp Social Lab",
    time: "",
    description_en: "Data collection for the second eye-tracking lab study examining self-regulation as moderator of nudge effectiveness.",
    description_nl: "Dataverzameling voor de tweede eye-tracking labstudie over zelfregulatie als moderator van nudge-effectiviteit."
  },
  {
    id: "earli-2026",
    title_en: "EARLI 2026 — COMPASS+ Paper Presentation",
    title_nl: "EARLI 2026 — COMPASS+ Paperpresentatie",
    type_en: "Conference",
    type_nl: "Conferentie",
    date: "2026-08-28",
    location_en: "Ghent, Belgium",
    location_nl: "Gent, België",
    time: "",
    description_en: "Presentation of COMPASS+ research findings at the European Association for Research on Learning and Instruction biennial conference.",
    description_nl: "Presentatie van COMPASS+ onderzoeksbevindingen op de tweejaarlijkse EARLI-conferentie."
  },
  {
    id: "klankbord-3",
    title_en: "Klankbordgroep Meeting #3 — Mid-project review",
    title_nl: "Klankbordgroepvergadering #3 — Tussentijdse evaluatie",
    type_en: "Advisory Committee",
    type_nl: "Klankbordgroep",
    date: "2027-01-20",
    location_en: "KU Leuven",
    location_nl: "KU Leuven",
    time: "09:30–13:00",
    description_en: "Mid-project advisory committee meeting reviewing progress across all three research lines.",
    description_nl: "Tussentijdse klankbordgroepvergadering met overzicht van voortgang over de drie onderzoekslijnen."
  }
];

// ── TEAM ──────────────────────────────────────────────
COMPASS.team = [
  {
    id: "vincent-donche",
    name: "Prof. Vincent Donche",
    initials: "VD",
    role_en: "Principal Investigator",
    role_nl: "Promotor / Hoofdonderzoeker",
    institution: "University of Antwerp",
    department: "Research Group Edubron",
    research_lines: ["PI", "RL2 Lead", "Coordination"],
    orcid: "0000-0002-9405-3896",
    order: 1
  },
  {
    id: "Stijn-Schelfhout",
    name: "Prof. Stijn Schelfhout",
    initials: "SC",
    role_en: "Supervisor",
    role_nl: "Promotor",
    institution: "Ghent University",
    department: "Dept. of Experimental Psychology",
    research_lines: ["RL1 Lead", "RL2"],
    orcid: "",
    order: 2
  },
  {
    id: "karine-verschueren",
    name: "Prof. Karine Verschueren",
    initials: "KV",
    role_en: "Supervisor",
    role_nl: "promotor",
    institution: "KU Leuven",
    department: "School Psychology & Dev. in Context",
    research_lines: ["RL1", "RL3 Lead"],
    orcid: "",
    order: 3
  },
  {
    id: "veerle-vanoverberghe",
    name: "Veerle Vanoverberghe",
    initials: "VV",
    role_en: "Valorization Lead",
    role_nl: "Valorisatieleider",
    institution: "Artevelde University of Applied Sciences",
    department: "Education & Career Guidance",
    research_lines: ["Valorization"],
    orcid: "",
    order: 4
  }
];

// ── SETTINGS ──────────────────────────────────────────
COMPASS.settings = {
  title_en: "COMPASS+",
  title_nl: "COMPASS+",
  tagline_en: "Empowering the Study Choice Process for Higher Education",
  tagline_nl: "Studiekeuzeprocessen voor Hoger Onderwijs Versterken",
  contact_email: "vincent.donche@uantwerpen.be",
  columbus_url: "https://columbus.onderwijskiezer.be",
  show_banner: true,
  banner_en: "FWO SBO Project S002426N · 2025–2028 · University of Antwerp",
  banner_nl: "FWO SBO Project S002426N · 2025–2028 · Universiteit Antwerpen"
};
