"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { sectionFadeIn, staggerContainer, staggerItem } from "@/lib/animations"
import { aboutBio } from "@/lib/constants"
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
          About {aboutBio.name}
        </h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12"
        >
          {/* Headshot */}
          <motion.div variants={staggerItem} className="flex-shrink-0">
            <Image
              src="/founder-photo.jpg"
              alt="Jeremy Olken"
              width={300}
              height={300}
              className="rounded-2xl"
            />
          </motion.div>

          {/* Bio content */}
          <motion.div variants={staggerItem} className="space-y-6">
            <p className="text-lg font-semibold text-foreground">
              {aboutBio.headline}
            </p>

            {aboutBio.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base text-muted-foreground leading-[1.6]"
              >
                {paragraph}
              </p>
            ))}

            <div className="flex flex-wrap gap-2 pt-2">
              {aboutBio.skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
