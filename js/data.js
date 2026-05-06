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
    date: "2025-10-01",
    featured: true,
    excerpt_en: "The FWO SBO project COMPASS+ has officially started its 4-year research programme. The interdisciplinary consortium of UA, UGent, KU Leuven and Artevelde University of Applied Sciences held its inaugural committee meeting.",
    excerpt_nl: "Het FWO SBO project COMPASS+ is officieel gestart met zijn 4-jarig onderzoeksprogramma. Het interdisciplinair consortium van UA, UGent, KU Leuven en Arteveldehogeschool hield zijn eerste stuurgroepvergadering.",
    link: ""
  },
  {
    id: "klankbord-1",
    title_en: "First advisory committee meeting — Project introduction and alignment",
    title_nl: "Eerste klankbordgroepvergadering — Kennismaking en afstemming van het project",
    category_en: "Advisory Committee",
    category_nl: "Klankbordgroep",
    date: "2026-01-27",
    featured: false,
    excerpt_en: "The first advisory committee meeting focused on introducing the COMPASS+ project, outlining its objectives and research lines, and engaging with advisory members to reflect on the project direction and priorities at the start of the collaboration.",
    excerpt_nl: "De eerste klankbordgroepvergadering stond in het teken van kennismaking, de voorstelling van het COMPASS+ project en de toelichting van de doelstellingen en onderzoekslijnen. Samen met de klankbordgroepleden werd gereflecteerd over de richting en prioriteiten van het project bij de opstart van de samenwerking.",
    link: ""
  },
  {
    id: "EFYE-2026",
    title_en: "COMPASS+ accepted for presentation at EFYE 2026 — Szeged",
    title_nl: "COMPASS+ aanvaard voor presentatie op EFYE 2026 — Szeged",
    category_en: "Conference",
    category_nl: "Conferentie",
    date: "2026-04-10",
    featured: false,
    excerpt_en: "A COMPASS+ contribution on study choice and feedback engagement has been accepted for presentation at the European First Year Experience (EFYE) Conference 2026 in Szeged.",
    excerpt_nl: "Een COMPASS+ bijdrage over studiekeuze en feedbackgebruik werd aanvaard voor presentatie op de European First Year Experience (EFYE) Conference 2026 in Szeged.",
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
