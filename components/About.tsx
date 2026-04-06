"use client"

import { motion } from "framer-motion"
import { sectionFadeIn, staggerContainer, staggerItem } from "@/lib/animations"
import { Badge } from "@/components/ui/badge"

export default function About() {
  return (
    <motion.section
      id="about"
      variants={sectionFadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="py-8 md:py-16 bg-background"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-0">
        <h2 className="font-heading text-[1.25rem] md:text-[1.5rem] font-semibold leading-[1.3] text-foreground mb-8 md:mb-12 text-center">
          About Jeremy
        </h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12"
        >
          {/* Placeholder photo */}
          <motion.div variants={staggerItem} className="flex-shrink-0">
            <div className="w-48 h-48 bg-muted rounded-2xl flex items-center justify-center border border-border">
              <span className="text-muted-foreground text-sm font-medium">Photo</span>
            </div>
          </motion.div>

          {/* Bio content */}
          <motion.div variants={staggerItem} className="space-y-6">
            <p className="text-base text-muted-foreground leading-[1.6]">
              Claude implementation consultant based in Denver, CO. I help teams stop experimenting with AI and start getting real results.
            </p>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Claude Expert</Badge>
              <Badge variant="secondary">Workflow Design</Badge>
              <Badge variant="secondary">Team Training</Badge>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
