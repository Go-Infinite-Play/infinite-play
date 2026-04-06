"use client"

import { motion } from "framer-motion"
import { Building2, Users, Briefcase, ArrowRight } from "lucide-react"
import { sectionFadeIn, staggerContainer, staggerItem, buttonHover } from "@/lib/animations"
import { audienceSegments, audienceSectionIntro } from "@/lib/constants"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const iconMap = {
  Building2: Building2,
  Users: Users,
  Briefcase: Briefcase,
}

export default function ProblemSection() {
  return (
    <motion.section
      variants={sectionFadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      id="audience"
      className="py-8 md:py-16 bg-background"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-0">
        <h2 className="font-heading text-[1.25rem] md:text-[1.5rem] font-semibold leading-[1.3] text-foreground mb-3 text-center">
          {audienceSectionIntro.heading}
        </h2>
        <p className="text-base text-muted-foreground leading-[1.6] text-center mb-8 md:mb-12">
          {audienceSectionIntro.subheading}
        </p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {audienceSegments.map((segment) => {
            const IconComponent = iconMap[segment.icon as keyof typeof iconMap]

            return (
              <motion.div key={segment.id} variants={staggerItem} className="flex">
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="font-heading text-lg font-semibold text-foreground">
                      {segment.label}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col gap-3">
                    <p className="text-base text-foreground leading-[1.6]">
                      {segment.problem}
                    </p>
                    <p className="text-base text-muted-foreground leading-[1.6]">
                      {segment.painPoint}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <motion.a
                      href={segment.ctaHref}
                      variants={buttonHover}
                      whileHover="hover"
                      className="text-primary font-medium hover:underline inline-flex items-center gap-1.5"
                    >
                      {segment.cta}
                      <ArrowRight className="w-4 h-4" />
                    </motion.a>
                  </CardFooter>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </motion.section>
  )
}
