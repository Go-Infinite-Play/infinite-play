"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { workflowExamples } from "@/lib/constants"
import { sectionFadeIn, staggerContainer, staggerItem } from "@/lib/animations"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function WorkflowShowcase() {
  return (
    <motion.section
      id="workflows"
      variants={sectionFadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="py-8 md:py-16 bg-muted"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-0">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-heading text-[1.25rem] md:text-[1.5rem] font-semibold leading-[1.3] text-foreground mb-4">
            Real Workflows, Real Results
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Not hypothetical. These are the kinds of workflows I build with clients every week.
          </p>
        </div>

        {/* Workflow Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {workflowExamples.map((example) => (
            <motion.div key={example.id} variants={staggerItem}>
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold font-heading">
                    {example.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground italic">
                    {example.context}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4 flex-1">
                  {/* Before */}
                  <p className="text-muted-foreground line-through text-sm">
                    {example.before}
                  </p>

                  {/* Arrow Divider */}
                  <div className="flex justify-center">
                    <ArrowDown className="w-4 h-4 text-muted-foreground" />
                  </div>

                  {/* After */}
                  <p className="text-foreground font-medium text-sm">
                    {example.after}
                  </p>
                </CardContent>
                <CardFooter className="flex items-center justify-between gap-4">
                  <Badge variant="secondary">{example.timeSaved}</Badge>
                  <span className="text-xs text-muted-foreground">
                    {example.claudeProduct}
                  </span>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
