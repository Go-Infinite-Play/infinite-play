"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ctaContent } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function CTA() {
  return (
    <section id="contact" className="py-20 md:py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="rounded-3xl bg-foreground text-background p-10 md:p-16"
        >
          <motion.span
            variants={staggerItem}
            className="text-xs font-mono uppercase tracking-[0.18em] text-primary"
          >
            {ctaContent.eyebrow}
          </motion.span>
          <motion.h2
            variants={staggerItem}
            className="mt-3 font-heading text-3xl md:text-5xl font-bold tracking-tight max-w-3xl"
          >
            {ctaContent.headline}
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="mt-5 max-w-2xl text-base md:text-lg text-background/70 leading-relaxed"
          >
            {ctaContent.body}
          </motion.p>
          <motion.div
            variants={staggerItem}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <a
              href={ctaContent.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              {ctaContent.cta}
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href={`mailto:${ctaContent.emailFallback}`}
              className="text-sm text-background/70 hover:text-background transition-colors"
            >
              or email {ctaContent.emailFallback}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
