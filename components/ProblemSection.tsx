"use client"

import { motion } from "framer-motion"
import { HelpCircle, Archive, TrendingDown } from "lucide-react"
import { sectionFadeIn, staggerContainer, staggerItem } from "@/lib/animations"
import { problemPoints } from "@/lib/constants"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const iconMap = {
  HelpCircle: HelpCircle,
  Archive: Archive,
  TrendingDown: TrendingDown,
}

export default function ProblemSection() {
  return (
    <motion.section
      variants={sectionFadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="py-8 md:py-16 bg-background"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-0">
        <h2 className="font-heading text-[1.25rem] md:text-[1.5rem] font-semibold leading-[1.3] text-foreground mb-8 md:mb-12 text-center">
          Sound Familiar?
        </h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {problemPoints.map((point) => {
            const IconComponent = iconMap[point.icon as keyof typeof iconMap]

            return (
              <motion.div key={point.title} variants={staggerItem}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="font-heading text-lg font-semibold text-foreground">
                      {point.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base text-muted-foreground leading-[1.6]">
                      {point.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </motion.section>
  )
}
