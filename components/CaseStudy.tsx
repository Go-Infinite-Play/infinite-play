"use client";

import { motion } from "framer-motion";
import type { CaseStudy as CaseStudyData } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function CaseStudy({ data }: { data: CaseStudyData }) {
  return (
    <motion.article
      id={data.slug}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="scroll-mt-28 border-t border-border py-16 md:py-20 first:border-t-0"
    >
      <motion.span
        variants={staggerItem}
        className="text-xs font-mono uppercase tracking-[0.18em] text-primary"
      >
        {data.kind}
      </motion.span>
      <motion.p
        variants={staggerItem}
        className="mt-2 text-sm font-mono uppercase tracking-[0.14em] text-muted-foreground"
      >
        {data.company}
      </motion.p>
      <motion.h2
        variants={staggerItem}
        className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground max-w-3xl"
      >
        {data.headline}
      </motion.h2>

      {data.metric && (
        <motion.div
          variants={staggerItem}
          className="mt-6 inline-flex items-baseline gap-3 rounded-2xl bg-accent px-5 py-3"
        >
          <span className="font-heading text-3xl md:text-4xl font-bold text-accent-foreground">
            {data.metric}
          </span>
          {data.metricLabel && (
            <span className="text-sm text-accent-foreground/80">
              {data.metricLabel}
            </span>
          )}
        </motion.div>
      )}

      <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        <motion.div variants={staggerItem} className="md:col-span-4">
          <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            The problem
          </h3>
          <p className="mt-3 text-[16px] leading-relaxed text-foreground/90">
            {data.problem}
          </p>
        </motion.div>
        <motion.div variants={staggerItem} className="md:col-span-4">
          <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            What we did
          </h3>
          <p className="mt-3 text-[16px] leading-relaxed text-foreground/90">
            {data.approach}
          </p>
        </motion.div>
        <motion.div variants={staggerItem} className="md:col-span-4">
          <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            What we built
          </h3>
          <p className="mt-3 text-[16px] leading-relaxed text-foreground/90">
            {data.built}
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={staggerItem}
        className="mt-10 rounded-2xl border border-border bg-card p-6 md:p-8"
      >
        <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.14em] text-primary">
          Outcome
        </h3>
        <p className="mt-3 text-[17px] leading-relaxed text-foreground">
          {data.outcome}
        </p>
      </motion.div>
    </motion.article>
  );
}
