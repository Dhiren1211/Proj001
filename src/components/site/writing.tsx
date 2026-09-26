import { writing } from "@/data/portfolio";
import { SectionRule } from "./work-index";

/**
 * Writing — dated list with hairline separators, like a bibliography.
 */
export function Writing() {
  return (
    <section id="writing" aria-label="Writing" className="mx-auto max-w-6xl px-6 pb-20 md:pb-28 scroll-mt-16">
      <SectionRule title="Occasional writing" note="Infrequent, but considered" />
      <div className="mt-2">
        {writing.map((post) => (
          <a
            key={post.title}
            href={post.href}
            className="group grid grid-cols-[5.5rem_1fr_auto] md:grid-cols-[7rem_1fr_auto] gap-x-6 items-baseline py-5 border-b border-hairline hover:bg-surface/60 transition-colors"
          >
            <time className="label text-ink-faint tabular-nums">{post.date}</time>
            <span>
              <span className="font-serif text-xl md:text-2xl tracking-[-0.01em] group-hover:text-accent transition-colors block">
                {post.title}
              </span>
              <span className="text-ink-soft text-base leading-relaxed block mt-1 max-w-[64ch]">
                {post.excerpt}
              </span>
            </span>
            <span aria-hidden="true" className="font-serif text-lg text-ink-faint group-hover:text-accent group-hover:translate-x-1 transition-all">
              →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
