"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { heroContent } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";
import AvailabilityBadge from "./AvailabilityBadge";

export default function Hero() {
  return (
    <section className="relative pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={staggerItem} className="mb-8">
            <AvailabilityBadge />
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold leading-[1.02] tracking-tight text-foreground"
          >
            {heroContent.headlineLead}{" "}
            <span className="text-primary">{heroContent.headlineAccent}</span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            {heroContent.subhead}
          </motion.p>

          <motion.div variants={staggerItem} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={heroContent.primaryCtaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              {heroContent.primaryCta}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
