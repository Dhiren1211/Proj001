"use client";

import { useEffect, useRef, useState } from "react";
import { projects, type Project } from "@/data/portfolio";

/**
 * Work presented as a numbered index — the way a catalogue or monograph
 * lists plates — instead of a grid of identical cards. Rows expand in
 * place; a small flat preview follows the cursor on fine-pointer devices.
 */
export function WorkIndex() {
  const [openId, setOpenId] = useState<string | null>(projects[0]?.index ?? null);
  const [active, setActive] = useState<Project | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const pointerFine = useRef(false);
  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const raf = useRef(0);

  useEffect(() => {
    pointerFine.current = window.matchMedia("(pointer: fine)").matches;
    return () => cancelAnimationFrame(raf.current);
  }, []);

  // Cursor preview follows with a gentle ease — applied directly to the
  // element so mouse movement never triggers a React re-render.
  const animate = () => {
    pos.current.x += (target.current.x - pos.current.x) * 0.14;
    pos.current.y += (target.current.y - pos.current.y) * 0.14;
    const el = previewRef.current;
    if (el) el.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
    raf.current = requestAnimationFrame(animate);
  };

  const handleMove = (e: React.MouseEvent) => {
    if (!pointerFine.current) return;
    const W = 264;
    const H = 176;
    target.current.x = Math.min(e.clientX + 28, window.innerWidth - W - 16);
    target.current.y = Math.min(e.clientY + 24, window.innerHeight - H - 16);
    if (!raf.current) raf.current = requestAnimationFrame(animate);
  };

  const stopPreview = () => {
    setActive(null);
    cancelAnimationFrame(raf.current);
    raf.current = 0;
  };

  return (
    <section id="work" aria-label="Selected work" className="mx-auto max-w-6xl px-6 pb-20 md:pb-28 scroll-mt-16">
      <SectionRule title="Selected work" note="Six projects, 2022 — 2026" />

      <div className="mt-2">
        {projects.map((p) => {
          const open = openId === p.index;
          return (
            <article key={p.index} className="border-b border-hairline first:border-t-0">
              <button
                type="button"
                onClick={() => setOpenId(open ? null : p.index)}
                onMouseEnter={() => pointerFine.current && setActive(p)}
                onMouseMove={handleMove}
                onMouseLeave={stopPreview}
                aria-expanded={open}
                aria-controls={`project-${p.index}`}
                className={`group w-full text-left grid grid-cols-[2.5rem_1fr_auto] md:grid-cols-[3rem_1fr_16rem_4rem_2rem] items-baseline gap-x-4 py-5 md:py-6 transition-colors hover:bg-surface/60 cursor-pointer ${
                  open ? "bg-surface/60" : ""
                }`}
              >
                <span className="label text-ink-faint tabular-nums">{p.index}</span>
                <span
                  className={`font-serif text-2xl md:text-3xl tracking-[-0.01em] transition-all duration-200 ${
                    open ? "text-accent" : "text-foreground group-hover:translate-x-1"
                  }`}
                >
                  {p.title}
                </span>
                <span className="label text-ink-soft hidden md:block truncate pr-4">{p.role}</span>
                <span className="label text-ink-soft hidden md:block tabular-nums">{p.year}</span>
                <span
                  aria-hidden="true"
                  className={`font-serif text-xl text-center transition-transform duration-300 ${
                    open ? "rotate-45 text-accent" : "text-ink-faint"
                  }`}
                >
                  +
                </span>
              </button>

              {/* Expansion panel — grid-rows trick, no layout thrash */}
              <div
                id={`project-${p.index}`}
                role="region"
                aria-label={p.title}
                className={`grid transition-[grid-template-rows,visibility] duration-300 ease-out ${
                  open ? "grid-rows-[1fr] visible" : "grid-rows-[0fr] invisible"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-6 pb-8 pt-1 pl-0 md:pl-[4rem]">
                    <div className="md:col-span-7">
                      <p className="text-ink-faint font-serif italic mb-2 text-base">{p.client}</p>
                      <p className="leading-relaxed text-foreground/90 max-w-[62ch]">{p.detail}</p>
                      {p.link && (
                        <a
                          href={p.link.href}
                          className="label rule-link inline-block mt-5 text-accent-ink dark:text-accent"
                        >
                          {p.link.label} ↗
                        </a>
                      )}
                    </div>
                    <div className="md:col-span-4 md:col-start-9 flex flex-col gap-4 md:border-l md:border-hairline md:pl-6">
                      <div>
                        <p className="label text-ink-faint mb-1.5">Contribution</p>
                        <ul className="label text-ink-soft space-y-1">
                          {p.contributions.map((c) => (
                            <li key={c}>{c}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="label text-ink-faint mb-1.5">Stack</p>
                        <ul className="label text-ink-soft space-y-1">
                          {p.stack.map((s) => (
                            <li key={s}>{s}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Cursor preview — flat poster, not a screenshot mockup */}
      <div
        ref={previewRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 z-30 w-66 h-44 pointer-events-none hidden lg:block transition-opacity duration-200 ${
          active ? "opacity-100" : "opacity-0"
        }`}
        style={{ willChange: "transform" }}
      >
        {active && (
          <div
            className="w-full h-full flex flex-col justify-between p-4 border border-hairline"
            style={{ backgroundColor: active.cover.bg, color: active.cover.fg }}
          >
            <span className="label opacity-70">{active.index} — {active.year}</span>
            <span className="font-serif text-6xl leading-none tracking-[-0.03em]">{active.cover.label}</span>
            <span className="label">{active.title}</span>
          </div>
        )}
      </div>
    </section>
  );
}

/** Shared section opener: hairline + mono annotation row */
export function SectionRule({ title, note }: { title: string; note: string }) {
  return (
    <div className="border-t border-hairline pt-3 flex justify-between items-baseline gap-4">
      <h2 className="label text-foreground">{title}</h2>
      <p className="label text-ink-faint text-right">{note}</p>
    </div>
  );
}
