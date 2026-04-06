"use client"

import { motion } from "framer-motion"
import { MessageSquare, Map, Rocket, CheckCircle } from "lucide-react"
import { sectionFadeIn, staggerContainer, staggerItem } from "@/lib/animations"
import { processSteps } from "@/lib/constants"
import { Badge } from "@/components/ui/badge"

const iconMap = {
  MessageSquare: MessageSquare,
  Map: Map,
  Rocket: Rocket,
  CheckCircle: CheckCircle,
}

export default function Process() {
  return (
    <motion.section
      id="process"
      variants={sectionFadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="py-8 md:py-16 bg-background"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-0">
        <h2 className="font-heading text-[1.25rem] md:text-[1.5rem] font-semibold leading-[1.3] text-foreground mb-8 md:mb-12 text-center">
          How It Works
        </h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {processSteps.map((step) => {
            const IconComponent = iconMap[step.icon as keyof typeof iconMap]

            return (
              <motion.div
                key={step.number}
                variants={staggerItem}
                className="text-center"
              >
                <Badge variant="secondary" className="mb-4 text-sm font-semibold">
                  {step.number}
                </Badge>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-base text-muted-foreground leading-[1.6]">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </motion.section>
  )
}
