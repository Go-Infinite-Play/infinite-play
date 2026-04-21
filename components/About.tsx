"use client";

import { motion } from "framer-motion";
import { aboutContent, contactInfo } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-border bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="md:col-span-5"
        >
          <motion.span
            variants={staggerItem}
            className="text-xs font-mono uppercase tracking-[0.18em] text-primary"
          >
            {aboutContent.eyebrow}
          </motion.span>
          <motion.h2
            variants={staggerItem}
            className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground"
          >
            {aboutContent.headline}
          </motion.h2>
          <motion.ul variants={staggerItem} className="mt-8 flex flex-wrap gap-2">
            {aboutContent.capabilities.map((cap) => (
              <li
                key={cap}
                className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground"
              >
                {cap}
              </li>
            ))}
          </motion.ul>
          <motion.p variants={staggerItem} className="mt-8 text-sm text-muted-foreground">
            Based in {contactInfo.location}. Working globally.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="md:col-span-7 space-y-5 text-[17px] text-foreground/90 leading-relaxed"
        >
          <motion.p variants={staggerItem}>
            {aboutContent.firmParagraph}
          </motion.p>
          <motion.p variants={staggerItem}>
            {aboutContent.jeremyParagraph}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
