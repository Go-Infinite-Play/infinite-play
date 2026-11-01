"use client";

import { motion } from "framer-motion";
import { contactContent, contactInfo } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function Contact() {
  return (
    <section id="contact" className="bg-foreground text-background">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-7xl mx-auto px-5 md:px-10 py-24 md:py-40"
      >
        <motion.h2
          variants={staggerItem}
          className="max-w-[16ch] text-[clamp(2.5rem,6.5vw,6rem)] font-medium leading-[0.98] tracking-[-0.045em]"
        >
          {contactContent.headline}
        </motion.h2>
        <motion.p
          variants={staggerItem}
          className="mt-6 md:mt-8 max-w-md text-lg md:text-xl text-background/60 leading-relaxed"
        >
          {contactContent.body}
        </motion.p>
        <motion.a
          variants={staggerItem}
          href={contactInfo.mailto}
          className="mt-12 md:mt-20 inline-block break-all text-[clamp(1.75rem,6vw,5.5rem)] font-medium leading-none tracking-[-0.04em] text-primary underline decoration-2 md:decoration-4 underline-offset-[0.18em] hover:text-background transition-colors"
        >
          {contactInfo.email}
        </motion.a>
      </motion.div>
    </section>
  );
}
