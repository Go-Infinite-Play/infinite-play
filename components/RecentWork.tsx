"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { caseStudyTeasers } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function RecentWork() {
  return (
    <section id="work" className="py-20 md:py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-wrap items-end justify-between gap-4 mb-12"
        >
          <div className="max-w-2xl">
            <motion.span
              variants={staggerItem}
              className="text-xs font-mono uppercase tracking-[0.18em] text-primary"
            >
              Recent work
            </motion.span>
            <motion.h2
              variants={staggerItem}
              className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground"
            >
              A few engagements we&apos;ve shipped.
            </motion.h2>
          </div>
          <motion.div variants={staggerItem}>
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              See all work
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {caseStudyTeasers.map((teaser) => (
            <motion.div key={teaser.slug} variants={staggerItem}>
              <Link
                href={`/work#${teaser.slug}`}
                className="group block rounded-2xl border border-border bg-card p-6 md:p-7 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-[0.12em] text-muted-foreground">
                    {teaser.kind}
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all"
                  />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold tracking-tight text-foreground">
                  {teaser.company}
                </h3>
                <p className="mt-1 text-[15px] font-medium text-primary">
                  {teaser.headline}
                </p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {teaser.oneLiner}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
