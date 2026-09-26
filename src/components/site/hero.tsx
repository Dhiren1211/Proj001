import { person } from "@/data/portfolio";

export function Hero() {
  return (
    <section aria-label="Introduction" className="mx-auto max-w-6xl px-6 pt-14 md:pt-24 pb-16 md:pb-24">
      {/* Edition line — like the imprint page of a book */}
      <div className="label text-ink-faint flex flex-wrap justify-between gap-x-8 gap-y-1 pb-10 md:pb-16">
        <span>{person.edition}</span>
        <span>38.7223° N, 9.1393° W</span>
      </div>

      <h1 className="font-serif text-[clamp(2.75rem,7vw,5.25rem)] leading-[1.02] tracking-[-0.02em] max-w-[16ch]">
        I design and build interfaces for people who{" "}
        <em className="italic text-accent">read</em> them every day.
      </h1>

      {/* Asymmetric two-column continuation — 7/4 split with deliberate gutter */}
      <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-10">
        <div className="md:col-span-7 lg:col-span-7">
          <p className="text-lg md:text-xl leading-relaxed max-w-[58ch] text-foreground/90">
            {person.intro}
          </p>
          <a
            href="#work"
            className="label mt-8 inline-flex items-baseline gap-2 text-ink-soft hover:text-accent transition-colors"
          >
            Selected work, 2022–2026 <span aria-hidden="true" className="font-serif not-italic text-sm">↓</span>
          </a>
        </div>

        {/* Status rail — mono, like a colophon */}
        <div className="md:col-span-4 md:col-start-9 lg:col-start-9 md:border-l md:border-hairline md:pl-8 flex flex-col gap-5">
          <div>
            <p className="label text-ink-faint mb-1">Status</p>
            <p className="label text-foreground inline-flex items-center gap-2">
              <span aria-hidden="true" className="inline-block w-1.5 h-1.5 bg-accent" />
              {person.availability}
            </p>
          </div>
          <div>
            <p className="label text-ink-faint mb-1">Practice</p>
            <p className="label text-foreground">Independent, {person.location}</p>
          </div>
          <div>
            <p className="label text-ink-faint mb-1">Direct</p>
            <a href={`mailto:${person.email}`} className="label rule-link text-foreground link-accent">
              {person.email}
            </a>
          </div>
          <div>
            <p className="label text-ink-faint mb-1">Curriculum</p>
            <a href={person.cvUrl} className="label rule-link text-foreground link-accent">
              Download CV — PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
