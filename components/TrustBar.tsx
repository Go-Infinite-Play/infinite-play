"use client"

import { motion } from "framer-motion"
import { sectionFadeIn, staggerContainer, staggerItem } from "@/lib/animations"
import { trustBarItems } from "@/lib/constants"

export default function TrustBar() {
  return (
    <motion.section
      variants={sectionFadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="py-6 md:py-8 bg-muted"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-0">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16"
        >
          {trustBarItems.map((item) => (
            <motion.div
              key={item.label}
              variants={staggerItem}
              className="text-center"
            >
              <div className="font-heading text-[1.5rem] font-bold text-foreground">
                {item.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
