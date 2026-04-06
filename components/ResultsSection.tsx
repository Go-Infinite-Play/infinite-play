"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { sectionFadeIn, staggerContainer, staggerItem } from "@/lib/animations"
import { resultsItems } from "@/lib/constants"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ResultsSection() {
  return (
    <motion.section
      id="results"
      variants={sectionFadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="py-8 md:py-16 bg-muted"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-0">
        <h2 className="font-heading text-[1.25rem] md:text-[1.5rem] font-semibold leading-[1.3] text-foreground mb-8 md:mb-12 text-center">
          Real Results
        </h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {resultsItems.map((item) => (
            <motion.div key={item.metric} variants={staggerItem}>
              <Card className="h-full">
                <CardContent className="pt-6 space-y-4">
                  <p className="text-muted-foreground line-through text-sm">
                    {item.before}
                  </p>
                  <div className="flex justify-center">
                    <ArrowDown className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <p className="text-foreground font-medium">
                    {item.after}
                  </p>
                  <div className="pt-2">
                    <Badge variant="secondary">{item.metric}</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
