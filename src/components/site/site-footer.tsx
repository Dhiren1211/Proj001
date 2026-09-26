"use client";

import { person, socials, colophon } from "@/data/portfolio";
import { LocalTime } from "./local-time";
import { toast } from "sonner";

export function SiteFooter() {
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(person.email);
      toast("Email copied to clipboard", {
        description: person.email,
      });
    } catch {
      toast("Could not copy — the address is right above", {
        description: person.email,
      });
    }
  };

  return (
    <footer className="mt-auto border-t border-hairline">
      {/* Contact block */}
      <section id="contact" aria-label="Contact" className="mx-auto max-w-6xl px-6 pt-16 md:pt-24 pb-16 md:pb-24 scroll-mt-16">
        <p className="label text-ink-faint mb-6">Currently booking — {person.availability}</p>
        <h2 className="font-serif text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] tracking-[-0.02em] max-w-[18ch]">
          Have something that needs <em className="italic text-accent">care</em>?
        </h2>

        <div className="mt-10 flex flex-wrap items-baseline gap-x-8 gap-y-4">
          <a
            href={`mailto:${person.email}`}
            className="label text-base md:text-lg text-foreground rule-link"
          >
            {person.email}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="label text-ink-soft hover:text-accent transition-colors cursor-pointer border border-hairline hover:border-accent px-3 py-1.5"
          >
            Copy address
          </button>
        </div>

        {/* Elsewhere — inline list, not a row of icon tiles */}
        <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-2">
          {socials.map((s) => (
            <li key={s.label} className="label">
              <span className="text-ink-faint">{s.label} </span>
              <a href={s.href} target="_blank" rel="noreferrer" className="rule-link text-foreground link-accent">
                {s.handle}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Colophon — the imprint page */}
      <div className="border-t border-hairline">
        <div className="mx-auto max-w-6xl px-6 py-5 flex flex-wrap justify-between gap-x-8 gap-y-2">
          <p className="label text-ink-faint">{colophon.type}</p>
          <p className="label text-ink-faint">{colophon.built}</p>
          <p className="label text-ink-faint tabular-nums">
            Lisbon — <LocalTime timezone={person.timezone} />
          </p>
          <p className="label text-ink-faint">{colophon.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
