"use client";

import { motion } from "framer-motion";
import { services, multiModelNote } from "@/lib/constants";
import { staggerContainer, staggerItem, cardHover } from "@/lib/animations";

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-2xl mb-14"
        >
          <motion.span
            variants={staggerItem}
            className="text-xs font-mono uppercase tracking-[0.18em] text-primary"
          >
            What we do
          </motion.span>
          <motion.h2
            variants={staggerItem}
            className="mt-3 font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground"
          >
            Three ways we work with teams.
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            Pick the one that fits where you are. Or just start a conversation and we&apos;ll sort the shape together.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {services.map((service) => (
            <motion.article
              key={service.id}
              variants={staggerItem}
              whileHover="hover"
              initial="rest"
              animate="rest"
              className="relative rounded-2xl border border-border bg-card p-7 md:p-8 flex flex-col"
            >
              <motion.div variants={cardHover} className="flex flex-col h-full">
                <span className="text-xs font-mono text-muted-foreground">
                  {service.number}
                </span>
                <h3 className="mt-3 font-heading text-xl font-semibold tracking-tight text-foreground">
                  {service.title}
                </h3>
                <p className="mt-1 text-sm text-primary font-medium">
                  {service.outcome}
                </p>
                <p className="mt-4 text-[15px] text-muted-foreground leading-relaxed">
                  {service.body}
                </p>
                <ul className="mt-5 space-y-2">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="text-sm text-foreground flex items-start gap-2"
                    >
                      <span
                        className="mt-[7px] inline-block h-1 w-1 rounded-full bg-primary shrink-0"
                        aria-hidden
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>

        <p className="mt-10 text-sm text-muted-foreground max-w-2xl">
          {multiModelNote}
        </p>
      </div>
    </section>
  );
}
