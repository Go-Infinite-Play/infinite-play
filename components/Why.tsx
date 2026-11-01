"use client";

import { motion } from "framer-motion";
import { whyContent } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";
import SectionLabel from "./SectionLabel";

export default function Why() {
  return (
    <section id="why" className="py-20 md:py-32 border-t border-border">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-7xl mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-x-10"
      >
        <motion.div variants={staggerItem} className="md:col-span-3 md:pt-4">
          <SectionLabel>{whyContent.label}</SectionLabel>
        </motion.div>

        <div className="md:col-span-9">
          <motion.h2
            variants={staggerItem}
            className="max-w-[15ch] text-[clamp(2.5rem,6.5vw,6rem)] font-medium leading-[0.98] tracking-[-0.045em] text-foreground text-balance"
          >
            {whyContent.headlineLead}{" "}
            <span className="text-primary">{whyContent.headlineAccent}</span>
          </motion.h2>

          <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {whyContent.paragraphs.map((paragraph) => (
              <motion.p
                key={paragraph}
                variants={staggerItem}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
