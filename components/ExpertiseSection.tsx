"use client"

import { motion } from "framer-motion"
import {
  MessageSquare,
  Users,
  Building2,
  Terminal,
  Code,
  Plug,
} from "lucide-react"
import { claudeProducts } from "@/lib/constants"
import { sectionFadeIn, staggerContainer, staggerItem } from "@/lib/animations"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const iconMap = {
  MessageSquare: MessageSquare,
  Users: Users,
  Building2: Building2,
  Terminal: Terminal,
  Code: Code,
  Plug: Plug,
}

const categoryLabels: Record<string, string> = {
  individual: "Individual",
  team: "Team",
  developer: "Developer",
}

export default function ExpertiseSection() {
  return (
    <motion.section
      id="expertise"
      variants={sectionFadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="py-8 md:py-16 bg-background"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-0">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-heading text-[1.25rem] md:text-[1.5rem] font-semibold leading-[1.3] text-foreground mb-4">
            Deep Claude Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I don&apos;t just consult about AI. I work with the full Claude product line every day — and I&apos;ll set your team up on exactly the right tools.
          </p>
        </div>

        {/* Product Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {claudeProducts.map((product) => {
            const IconComponent = iconMap[product.icon as keyof typeof iconMap]

            return (
              <motion.div key={product.id} variants={staggerItem}>
                <Card className="h-full">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <CardTitle className="text-lg font-semibold font-heading">
                          {product.name}
                        </CardTitle>
                        <Badge variant="secondary">
                          {categoryLabels[product.category]}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {product.description}
                    </p>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-1">
                        How I help:
                      </p>
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {product.howJeremyHelps}
                      </p>
                    </div>
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
