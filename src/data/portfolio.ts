/**
 * ─────────────────────────────────────────────────────────────────────────
 *  PORTFOLIO CONTENT — single source of truth
 * ─────────────────────────────────────────────────────────────────────────
 *  The uploaded Portfolio.zip did not reach the server, so this file ships
 *  with a realistic placeholder persona. Replace every value below with the
 *  real content and the entire site updates — no component changes needed.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const person = {
  name: "Ellis Marlow",
  initials: "EM",
  role: "Design engineer",
  /* Appears in the header metadata row and the footer clock */
  location: "Lisbon, Portugal",
  timezone: "Europe/Lisbon",
  availability: "Booking Q1 2027",
  email: "hello@ellismarlow.com",
  intro:
    "I design and build interfaces for companies that care about the details. Twelve years across studios and in-house teams taught me one thing: the difference between good and memorable lives in the last ten percent — the metrics, the type, the timing, the empty states nobody plans for.",
  /* Short mono line under the headline, like an edition statement on a book */
  edition: "Portfolio — Eleventh annual revision",
  cvUrl: "#",
} as const;

export const socials = [
  { label: "GitHub", handle: "@ellismarlow", href: "https://github.com" },
  { label: "Read.cv", handle: "read.cv/ellis", href: "https://read.cv" },
  { label: "Are.na", handle: "are.na/ellis-m", href: "https://www.are.na" },
  { label: "Email", handle: "hello@ellismarlow.com", href: "mailto:hello@ellismarlow.com" },
] as const;

export type Project = {
  index: string;
  title: string;
  year: string;
  role: string;
  client: string;
  summary: string;
  /* Shown when the row is expanded */
  detail: string;
  contributions: string[];
  stack: string[];
  link?: { label: string; href: string };
  /* Flat print-poster cover colors (no gradients — solid fields) */
  cover: { bg: string; fg: string; label: string };
};

export const projects: Project[] = [
  {
    index: "01",
    title: "Ledgerline",
    year: "2026",
    role: "Lead design engineer",
    client: "Fintech, Series B",
    summary:
      "Rebuilt the reporting suite of a back-office accounting tool from a wall of tables into a layered, scannable document that accountants actually read.",
    detail:
      "Accountants live in this tool six hours a day, so the brief was stamina, not delight. We set a tabular rhythm with a single hairline grid, moved every number into a tabular-lining face, and replaced the old drill-down modals with an inline expansion model. Support tickets about “where did this number come from” fell by roughly a third in the first quarter after release.",
    contributions: ["Interaction design", "Design system", "Front-end architecture", "Data visualisation"],
    stack: ["TypeScript", "React", "D3", "Postgres"],
    link: { label: "Case study", href: "#" },
    cover: { bg: "#2e3a2f", fg: "#f4f1e9", label: "LL" },
  },
  {
    index: "02",
    title: "Fieldnotes",
    year: "2025",
    role: "Product designer & developer",
    client: "Independent — with Dr. A. Reyes",
    summary:
      "An offline-first field journal for ecologists working where there is no signal, with a sync model designed around unreliable satellite uplinks.",
    detail:
      "The hard problem wasn't the UI — it was honesty. When sync fails halfway through a merge, the app has to say so in plain language instead of a spinner. We designed a changelog-first sync interface where every conflict is a readable diff, and tested it on three expeditions before shipping.",
    contributions: ["Research", "UX & UI", "Offline sync model", "iOS & web build"],
    stack: ["Swift", "React", "CRDTs", "Mapbox"],
    cover: { bg: "#9c3d24", fg: "#f4f1e9", label: "Fn" },
  },
  {
    index: "03",
    title: "Autotype",
    year: "2025",
    role: "Design & front-end",
    client: "Type foundry, Berlin",
    summary:
      "A specimen playground for a variable-font family — drag a glyph, feel the axes, and read the licence terms without ever opening a PDF.",
    detail:
      "Foundry sites usually bury the product under atmosphere. We inverted that: the fonts are the interface. Each specimen page is set entirely in the font it sells, with axes exposed as plain, honest sliders and a quotation builder that typesets real collateral — tickets, posters, receipts — at real sizes.",
    contributions: ["Art direction", "Specimen design", "Variable-font tooling"],
    stack: ["Next.js", "OpenType.js", "Canvas"],
    link: { label: "Visit site", href: "#" },
    cover: { bg: "#1d1a15", fg: "#f4f1e9", label: "Aa" },
  },
  {
    index: "04",
    title: "Meridian",
    year: "2024",
    role: "Design engineer",
    client: "Boutique hotel group, Lisbon",
    summary:
      "A booking flow for eleven independent hotels that reads like a well-set confirmation letter, not an airline checkout.",
    detail:
      "Direct bookings were losing to OTAs on trust, not price. We rewrote the flow as a four-step letter — dates, room, names, payment — set in the hotel's own serif, with photographs at editorial aspect ratios and a rate breakdown that shows its arithmetic. Conversion rose 22%; the owners noticed guests arriving calmer.",
    contributions: ["Booking flow", "Photography direction", "Front-end"],
    stack: ["SvelteKit", "Stripe", "Sanity"],
    cover: { bg: "#3a4a52", fg: "#f4f1e9", label: "Me" },
  },
  {
    index: "05",
    title: "Paper Trail",
    year: "2023",
    role: "Founding designer",
    client: "Quarterly magazine",
    summary:
      "An editorial CMS where the layout constraints are the magazine's own grid, so a print issue and its web edition can be laid out in one pass.",
    detail:
      "The editors wanted to stop treating the website as a dump for print leftovers. We built a block system faithful to their twelve-column grid, with live InDesign-style previews and a typographic stylesheet locked to the magazine's style guide. Two issues have shipped through it so far; the third is in layout now.",
    contributions: ["Editorial system design", "Grid engine", "CMS implementation"],
    stack: ["TypeScript", "Node", "ProseMirror"],
    cover: { bg: "#6b5a3e", fg: "#f4f1e9", label: "PT" },
  },
  {
    index: "06",
    title: "Small Hours",
    year: "2022",
    role: "Side project — ongoing",
    client: "Self-initiated",
    summary:
      "A night-mode music player for late work sessions: one album at a time, artwork at true aspect ratio, and nothing else on the screen.",
    detail:
      "Built over two winters because every player I owned wanted to recommend things. Small Hours shows one album, the time, and a progress line. It has around four thousand users who found it by word of mouth, which remains the metric I am quietly proudest of.",
    contributions: ["Everything", "On purpose"],
    stack: ["React", "Web Audio", "Last.fm API"],
    link: { label: "Open player", href: "#" },
    cover: { bg: "#22201c", fg: "#d0704a", label: "sh" },
  },
];

export const capabilities = [
  {
    index: "01",
    title: "Design",
    body: "Interface design with a typographic conscience — systems that hold up beyond the landing page, states for the boring cases, and density tuned for people who use the product daily rather than demo it once.",
  },
  {
    index: "02",
    title: "Engineering",
    body: "Production React and TypeScript, accessibility as a baseline rather than a retrofit, and performance treated as a design property. I ship the things I design, which keeps the estimates honest.",
  },
  {
    index: "03",
    title: "Direction",
    body: "Small teams, long engagements. I've led design across four products from first sketch to deprecation, and I'm comfortable being the person who writes the awkward document that unblocks everyone.",
  },
] as const;

export const about = {
  facts: [
    ["Based", "Lisbon, Portugal"],
    ["Since", "2014 in practice"],
    ["Previously", "Studio Dumbar, Framer, freelance"],
    ["Working", "Independent, with a small circle of clients"],
    ["Tools", "Figma for thinking, code for deciding"],
    ["Reading", "“The Elements of Typographic Style”, again"],
  ] as [string, string][],
  paragraphs: [
    "I came to interfaces through print. My first job was typesetting catalogue pages for a stationery maker, and the habits never left: measure twice, let the content set the rhythm, and never decorate what you can structure. When the studio moved its catalogue online in 2014 I followed it there and never went back.",
    "Since then I've worked inside a branding studio, a developer-tools company, and my own freelance practice — which is where I've stayed since 2020. The constant across all of it is a preference for small teams, long engagements, and shipped work over polished decks.",
    "Outside client work I maintain Small Hours, teach a yearly workshop on typesetting for screens, and keep a slow-running newsletter about the unglamorous parts of the craft — estimation, handover, and what to do when the deadline moves.",
  ],
} as const;

export const writing = [
  { date: "Jun 2026", title: "Notes on shipping solo", excerpt: "What four years of independent work changed about how I estimate, scope, and say no.", href: "#" },
  { date: "Feb 2026", title: "The case for boring databases", excerpt: "Postgres has carried every project I've shipped since 2018. A love letter with receipts.", href: "#" },
  { date: "Sep 2025", title: "Setting type for interfaces", excerpt: "Twelve rules I apply to every product I design, distilled from a decade of getting it wrong.", href: "#" },
  { date: "Mar 2025", title: "What print taught me about the web", excerpt: "Grids, widows, and the discipline of a fixed canvas — and where the analogy rightly breaks.", href: "#" },
] as const;

export const colophon = {
  type: "Set in Newsreader & IBM Plex Mono",
  built: "Built with Next.js — no trackers, no cookies",
  copyright: `© 2026 ${person.name}. All rights reserved.`,
} as const;
