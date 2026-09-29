/**
 * ─────────────────────────────────────────────────────────────────────────
 *  PORTFOLIO CONTENT — single source of truth
 * ─────────────────────────────────────────────────────────────────────────
 *  Dhiren is the portfolio owner. Project, client, and career details below
 *  are demo content intended to be replaced with Dhiren's real information.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const person = {
  name: "Dhiren",
  initials: "D",
  role: "Design engineer",
  /* Demo location */
  location: "Kathmandu, Nepal",
  timezone: "Asia/Kathmandu",
  availability: "Available for select projects",
  email: "hello@dhiren.dev",
  intro:
    "I design and build thoughtful digital experiences where product design and engineering meet. I care about clear interfaces, useful systems, and the details that make software feel considered rather than assembled.",
  /* Demo portfolio edition */
  edition: "Portfolio — 2026 edition",
  cvUrl: "#",
} as const;

export const socials = [
  { label: "GitHub", handle: "@dhiren", href: "https://github.com" },
  { label: "LinkedIn", handle: "linkedin.com/in/dhiren", href: "https://linkedin.com" },
  { label: "Are.na", handle: "are.na/dhiren", href: "https://www.are.na" },
  { label: "Email", handle: "hello@dhiren.dev", href: "mailto:hello@dhiren.dev" },
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
    title: "Northstar",
    year: "2026",
    role: "Lead design engineer",
    client: "Demo fintech company",
    summary:
      "A financial operations platform redesigned around clarity, making dense reporting workflows easier to understand and faster to navigate.",
    detail:
      "This demo project explores how complex financial information can be presented without overwhelming the people who use it every day. The interface combines a structured data system with clear hierarchy, contextual actions, and expandable detail views.",
    contributions: [
      "Product design",
      "Design system",
      "Front-end architecture",
      "Data visualisation",
    ],
    stack: ["TypeScript", "React", "D3", "Postgres"],
    link: { label: "Case study", href: "#" },
    cover: { bg: "#2e3a2f", fg: "#f4f1e9", label: "NS" },
  },
  {
    index: "02",
    title: "Fieldnotes",
    year: "2025",
    role: "Product designer & developer",
    client: "Demo research organisation",
    summary:
      "An offline-first field journal designed for researchers working in places where connectivity cannot be relied upon.",
    detail:
      "The demo product focuses on making offline work feel predictable. Changes are stored locally, synchronisation is transparent, and conflicts are presented as readable differences rather than technical errors.",
    contributions: [
      "Research",
      "UX & UI",
      "Offline sync model",
      "Web application",
    ],
    stack: ["TypeScript", "React", "CRDTs", "Mapbox"],
    cover: { bg: "#9c3d24", fg: "#f4f1e9", label: "Fn" },
  },
  {
    index: "03",
    title: "Mono",
    year: "2025",
    role: "Design & front-end",
    client: "Demo type foundry",
    summary:
      "A digital type specimen that turns variable fonts into an interactive playground rather than a static catalogue.",
    detail:
      "The demo experience puts typography at the centre of the interface. Users can explore weights, widths, and optical sizes while previewing the typeface in realistic editorial and product contexts.",
    contributions: [
      "Art direction",
      "Specimen design",
      "Interaction design",
      "Variable-font tooling",
    ],
    stack: ["Next.js", "OpenType.js", "Canvas"],
    link: { label: "Visit site", href: "#" },
    cover: { bg: "#1d1a15", fg: "#f4f1e9", label: "Aa" },
  },
  {
    index: "04",
    title: "Meridian",
    year: "2024",
    role: "Design engineer",
    client: "Demo hospitality group",
    summary:
      "A considered booking experience designed to make hotel reservations feel more like a conversation than a checkout form.",
    detail:
      "This demo project explores a quieter approach to booking. The experience guides users through dates, rooms, guest details, and payment while keeping pricing and important information visible throughout the journey.",
    contributions: [
      "Booking flow",
      "UX design",
      "Visual direction",
      "Front-end development",
    ],
    stack: ["Next.js", "Stripe", "Sanity"],
    cover: { bg: "#3a4a52", fg: "#f4f1e9", label: "Me" },
  },
  {
    index: "05",
    title: "Paper Trail",
    year: "2023",
    role: "Founding designer",
    client: "Demo independent magazine",
    summary:
      "An editorial publishing system that brings the constraints and rhythm of print into a modern web workflow.",
    detail:
      "The demo CMS uses a structured editorial grid so writers and editors can work directly within the visual language of the publication. Content blocks, typography, and layout rules are treated as part of the publishing system.",
    contributions: [
      "Editorial system design",
      "Grid engine",
      "CMS implementation",
      "Design system",
    ],
    stack: ["TypeScript", "Node", "ProseMirror"],
    cover: { bg: "#6b5a3e", fg: "#f4f1e9", label: "PT" },
  },
  {
    index: "06",
    title: "Small Hours",
    year: "2022",
    role: "Side project — ongoing",
    client: "Self-initiated demo project",
    summary:
      "A minimal music player for focused work sessions, deliberately reducing the interface to the album, time, and playback.",
    detail:
      "Small Hours is a demo exploration of restraint in product design. Instead of recommendations and endless browsing, the interface focuses on a single listening experience with artwork, playback controls, and a simple progress line.",
    contributions: [
      "Product concept",
      "UX & UI",
      "Visual design",
      "Front-end development",
    ],
    stack: ["React", "Web Audio", "Last.fm API"],
    link: { label: "Open player", href: "#" },
    cover: { bg: "#22201c", fg: "#d0704a", label: "sh" },
  },
];

export const capabilities = [
  {
    index: "01",
    title: "Design",
    body:
      "Interface design focused on hierarchy, typography, interaction, and systems that remain useful beyond a single screen or marketing page.",
  },
  {
    index: "02",
    title: "Engineering",
    body:
      "Production React and TypeScript with accessibility, performance, responsive behaviour, and maintainable architecture treated as part of the design.",
  },
  {
    index: "03",
    title: "Direction",
    body:
      "Turning ambiguous product ideas into clear experiences, aligning design and engineering, and helping small teams move from an early concept to something shipped.",
  },
] as const;

export const about = {
  facts: [
    ["Based", "Kathmandu, Nepal"],
    ["Focus", "Design & engineering"],
    ["Experience", "Demo portfolio data"],
    ["Working", "Independent / collaborative"],
    ["Tools", "Figma, TypeScript, React"],
    ["Currently", "Building thoughtful digital products"],
  ] as [string, string][],
  paragraphs: [
    "I'm Dhiren, a design engineer interested in the space between product design and software. I enjoy taking complicated ideas and turning them into interfaces that feel simple, deliberate, and easy to use.",
    "My work sits across design systems, interaction design, front-end engineering, and product thinking. I like being involved early enough to shape the problem and close enough to the implementation to make sure the details survive.",
    "Outside of project work, I spend time exploring typography, interfaces, creative tools, and small experiments that make me better at the craft. The projects shown here are demo examples and can be replaced with Dhiren's real work.",
  ],
} as const;

export const writing = [
  {
    date: "Jun 2026",
    title: "Notes on building across design and code",
    excerpt:
      "A collection of ideas about working between product design and front-end engineering.",
    href: "#",
  },
  {
    date: "Feb 2026",
    title: "Designing for the details",
    excerpt:
      "Why the smallest interaction decisions often have the biggest effect on how a product feels.",
    href: "#",
  },
  {
    date: "Sep 2025",
    title: "A practical approach to design systems",
    excerpt:
      "Thoughts on building systems that support product teams without slowing them down.",
    href: "#",
  },
  {
    date: "Mar 2025",
    title: "What code changes about design",
    excerpt:
      "How understanding implementation can change the way interfaces are designed.",
    href: "#",
  },
] as const;

export const colophon = {
  type: "Set in Newsreader & IBM Plex Mono",
  built: "Built with Next.js — no trackers, no cookies",
  copyright: `© 2026 ${person.name}. All rights reserved.`,
} as const;
