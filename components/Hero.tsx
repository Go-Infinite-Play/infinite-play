"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { heroContent, contactInfo } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";
import AvailabilityBadge from "./AvailabilityBadge";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-32">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-5 md:px-10"
      >
        <motion.div variants={staggerItem} className="mb-8 md:mb-10">
          <AvailabilityBadge />
        </motion.div>

        <motion.h1
          variants={staggerItem}
          className="max-w-[14ch] text-[clamp(2.75rem,8.5vw,8rem)] font-medium leading-[0.95] tracking-[-0.045em] text-foreground text-balance"
        >
          {heroContent.headlineLead}{" "}
          <span className="text-primary">{heroContent.headlineAccent}</span>
        </motion.h1>

        <motion.div
          variants={staggerItem}
          className="mt-10 md:mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <p className="max-w-md text-lg md:text-xl text-muted-foreground leading-relaxed">
            {heroContent.subhead}
          </p>
          <a
            href={contactInfo.mailto}
            className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-foreground text-background pl-8 pr-6 py-5 text-lg font-medium hover:bg-primary transition-colors"
          >
            {heroContent.cta}
            <ArrowUpRight
              size={22}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
