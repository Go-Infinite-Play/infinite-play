"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { aboutContent, contactInfo } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";
import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <SectionLabel>{aboutContent.label}</SectionLabel>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start"
        >
          <motion.div
            variants={staggerItem}
            className="md:col-span-5 relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted"
          >
            <Image
              src="/founder-photo.jpg"
              alt="Jeremy Olken in Denver"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover object-[58%_center]"
            />
          </motion.div>

          <div className="md:col-span-7">
            <motion.h2
              variants={staggerItem}
              className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-medium leading-[1] tracking-[-0.04em] text-foreground"
            >
              {aboutContent.headline}
            </motion.h2>
            {aboutContent.paragraphs.map((paragraph) => (
              <motion.p
                key={paragraph}
                variants={staggerItem}
                className="mt-6 max-w-xl text-xl md:text-2xl text-foreground/80 leading-snug tracking-[-0.01em]"
              >
                {paragraph}
              </motion.p>
            ))}
            <motion.p variants={staggerItem} className="mt-8 text-sm text-muted-foreground">
              Based in {contactInfo.location}. Working with clients anywhere.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
