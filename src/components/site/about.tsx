import { about, person } from "@/data/portfolio";
import { SectionRule } from "./work-index";

/**
 * About — a typographic "portrait" instead of a stock headshot, a facts
 * column set like a publication record, and prose with actual paragraphs.
 */
export function About() {
  return (
    <section id="about" aria-label="About" className="mx-auto max-w-6xl px-6 pb-20 md:pb-28 scroll-mt-16">
      <SectionRule title="About" note={`${person.role}, ${person.location}`} />

      <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-10">
        {/* Portrait stand-in: a flat plate with initials — honest, no stock photo */}
        <figure className="md:col-span-4 lg:col-span-3">
          <div className="aspect-[3/4] bg-surface border border-hairline flex flex-col justify-between p-5">
            <span className="label text-ink-faint">Fig. 1</span>
            <span className="font-serif text-[7rem] leading-[0.85] tracking-[-0.04em] text-foreground">
              {person.initials}
            </span>
            <span className="label text-ink-faint">The author, declining a headshot</span>
          </div>
          <figcaption className="label text-ink-faint mt-2">Lisbon, 2026</figcaption>
        </figure>

        <div className="md:col-span-7 lg:col-span-6 flex flex-col gap-5">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="leading-relaxed text-foreground/90">
              {p}
            </p>
          ))}
        </div>

        {/* Facts column — mono, like a publication record */}
        <div className="md:col-span-8 md:col-start-9 lg:col-span-3 lg:col-start-10 md:border-l md:border-hairline md:pl-8">
          <dl className="flex flex-col gap-3.5">
            {about.facts.map(([term, value]) => (
              <div key={term}>
                <dt className="label text-ink-faint mb-0.5">{term}</dt>
                <dd className="label text-foreground leading-relaxed">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
