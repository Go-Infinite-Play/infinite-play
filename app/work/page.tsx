import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import CaseStudy from "@/components/CaseStudy";
import { caseStudies, workIntro, siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Work | ${siteConfig.name}`,
  description:
    "Recent engagements across AI audits, custom systems, education platforms, and founder builds.",
  alternates: { canonical: `${siteConfig.url}/work` },
};

export default function WorkPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-36 md:pt-44 pb-12 md:pb-20">
        <section className="max-w-6xl mx-auto px-6">
          <span className="text-xs font-mono uppercase tracking-[0.18em] text-primary">
            {workIntro.eyebrow}
          </span>
          <h1 className="mt-3 font-heading text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            {workIntro.headline}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {workIntro.subhead}
          </p>
        </section>
        <section className="max-w-6xl mx-auto px-6 mt-16 md:mt-20">
          {caseStudies.map((study) => (
            <CaseStudy key={study.slug} data={study} />
          ))}
        </section>
      </main>
      <CTA />
      <Footer />
    </div>
  );
}
