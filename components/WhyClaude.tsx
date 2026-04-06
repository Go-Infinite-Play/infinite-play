"use client"

import { motion } from "framer-motion"
import { Brain, Wrench, Shield, Users } from "lucide-react"
import { sectionFadeIn, staggerContainer, staggerItem } from "@/lib/animations"

const reasons = [
  {
    icon: Brain,
    title: "It thinks, not just generates",
    description:
      "Claude reasons through problems step by step. It catches nuance, asks clarifying questions, and produces work that actually holds up under scrutiny.",
  },
  {
    icon: Wrench,
    title: "It connects to your tools",
    description:
      "MCP lets Claude plug directly into Slack, Notion, your codebase, and internal systems. It stops being a chatbot and starts being infrastructure.",
  },
  {
    icon: Users,
    title: "It scales with your team",
    description:
      "From a single user to enterprise-wide deployment with SSO and admin controls. One tool that grows as you do — no rip-and-replace down the road.",
  },
  {
    icon: Shield,
    title: "It takes safety seriously",
    description:
      "Anthropic builds safety into the model, not as an afterthought. Your data handling, your compliance requirements — they thought about it before you had to ask.",
  },
]

export default function WhyClaude() {
  return (
    <motion.section
      variants={sectionFadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="py-16 md:py-24 bg-background"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-0">
        {/* Lead-in */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <motion.h2
            variants={staggerItem}
            className="font-heading text-[1.25rem] md:text-[1.5rem] font-semibold text-foreground mb-6"
          >
            Why I Bet Everything on Claude
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-muted-foreground text-base md:text-lg leading-relaxed"
          >
            I&apos;ve spent thousands of hours with every major AI tool. I chose to build
            my entire practice around Claude — not because it&apos;s the most hyped, but
            because it&apos;s the one that consistently delivers for the teams I work with.
            Here&apos;s why.
          </motion.p>
        </div>

        {/* Reason cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={staggerItem}
              className="flex items-start gap-4 p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors duration-300"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <reason.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-base font-semibold font-heading text-foreground mb-1.5">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing line */}
        <motion.p
          variants={staggerItem}
          className="text-center text-muted-foreground text-sm mt-10 max-w-2xl mx-auto"
        >
          That&apos;s the tool. The rest of this site is about what I do with it.
        </motion.p>
      </div>
    </motion.section>
  )
}
