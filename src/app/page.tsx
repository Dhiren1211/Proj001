import { SiteHeader } from "@/components/site/site-header";
import { Hero } from "@/components/site/hero";
import { WorkIndex } from "@/components/site/work-index";
import { Capabilities } from "@/components/site/capabilities";
import { About } from "@/components/site/about";
import { Writing } from "@/components/site/writing";
import { SiteFooter } from "@/components/site/site-footer";

export default function Home() {
  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-2 focus:left-2 focus:bg-background focus:px-3 focus:py-2 focus:border focus:border-hairline"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="top" className="flex-1">
        <Hero />
        <WorkIndex />
        <Capabilities />
        <About />
        <Writing />
      </main>
      <SiteFooter />
    </>
  );
}
