import { person } from "@/data/portfolio";
import { LocalTime } from "./local-time";
import { ThemeToggle } from "./theme-toggle";

const nav = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-background border-b border-hairline">
      <div className="mx-auto max-w-6xl px-6 flex items-baseline justify-between gap-6 h-12">
        {/* Wordmark — plain text, the way a letterhead works */}
        <a href="#top" className="label text-foreground link-accent shrink-0" aria-label="Back to top">
          {person.name} <span className="text-ink-faint">— {person.role}</span>
        </a>

        <nav aria-label="Main" className="hidden md:flex items-baseline gap-6">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="label rule-link text-ink-soft hover:text-foreground transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-baseline gap-5 shrink-0">
          <span className="label text-ink-faint hidden sm:inline tabular-nums">
            {person.location.split(",")[0]} — <LocalTime timezone={person.timezone} />
          </span>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
