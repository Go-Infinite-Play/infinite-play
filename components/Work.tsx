"use client";

import { motion } from "framer-motion";
import { workItems } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";
import SectionLabel from "./SectionLabel";

export default function Work() {
  return (
    <section id="work" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <SectionLabel>Some things I&apos;ve built</SectionLabel>

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] gap-4 md:gap-x-5 lg:gap-y-0"
        >
          {workItems.map((item) => {
            const status = "status" in item ? item.status : undefined;
            const isLive = status === "In production";
            return (
              <motion.li
                key={item.name}
                variants={staggerItem}
                className="flex flex-col lg:grid lg:grid-rows-subgrid lg:row-span-3 rounded-2xl border border-border bg-card p-6 md:p-8"
              >
                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="font-medium text-primary">{item.tag}</span>
                  {status && (
                    <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                      <span
                        aria-hidden
                        className={`h-1.5 w-1.5 rounded-full ${
                          isLive ? "bg-emerald-500" : "bg-muted-foreground/50"
                        }`}
                      />
                      {status}
                    </span>
                  )}
                </div>

                <div className="mt-8 md:mt-12">
                  <h3 className="text-2xl md:text-3xl font-medium tracking-[-0.03em] leading-[1.1] text-foreground">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-[15px] text-muted-foreground leading-snug">
                    {item.who}
                  </p>
                </div>

                <p className="mt-6 pt-6 self-start border-t border-border text-[17px] text-foreground/80 leading-relaxed">
                  {item.body}
                </p>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
