import { capabilities } from "@/data/portfolio";
import { SectionRule } from "./work-index";

/**
 * A definition list, not a card grid — numbered like an index of terms.
 */
export function Capabilities() {
  return (
    <section id="services" aria-label="Services" className="mx-auto max-w-6xl px-6 pb-20 md:pb-28 scroll-mt-16">
      <SectionRule title="What I do" note="Three ways of working" />
      <dl className="mt-2">
        {capabilities.map((c) => (
          <div
            key={c.index}
            className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-2 py-7 border-b border-hairline"
          >
            <dt className="md:col-span-3 flex items-baseline gap-3">
              <span className="label text-ink-faint tabular-nums">{c.index}</span>
              <span className="font-serif text-2xl tracking-[-0.01em]">{c.title}</span>
            </dt>
            <dd className="md:col-span-8 md:col-start-5 leading-relaxed text-foreground/90 max-w-[68ch]">
              {c.body}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
