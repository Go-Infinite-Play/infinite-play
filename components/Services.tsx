"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";
import SectionLabel from "./SectionLabel";

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <SectionLabel>What I do</SectionLabel>

        <motion.ol
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 md:mt-14"
        >
          {services.map((service) => (
            <motion.li
              key={service.number}
              variants={staggerItem}
              className="grid grid-cols-[auto_1fr] md:grid-cols-12 gap-x-6 md:gap-x-10 border-t border-border py-10 md:py-16"
            >
              <span
                aria-hidden
                className="md:col-span-4 text-[5.5rem] md:text-[11rem] font-light leading-[0.75] tracking-[-0.06em] text-foreground"
              >
                {service.number}
              </span>
              <div className="md:col-span-8 md:pt-2">
                <h3 className="text-3xl md:text-5xl font-medium tracking-[-0.03em] leading-[1.05] text-foreground">
                  {service.title}
                </h3>
                <p className="mt-4 md:mt-6 max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {service.body}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
