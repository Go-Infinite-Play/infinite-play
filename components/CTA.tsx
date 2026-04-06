"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { sectionFadeIn, staggerContainer, staggerItem, buttonHover } from "@/lib/animations"
import { Button } from "@/components/ui/button"

export default function CTA() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.section
      id="contact"
      variants={sectionFadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="py-8 md:py-16 bg-muted"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-0 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-6"
        >
          <motion.h2
            variants={staggerItem}
            className="font-heading text-[1.25rem] md:text-[1.5rem] font-semibold leading-[1.3] text-foreground"
          >
            Ready to Get Started?
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="text-base text-muted-foreground leading-[1.6] max-w-2xl mx-auto"
          >
            Book a free discovery call to discuss how Claude can transform your team&apos;s workflow.
          </motion.p>

          <motion.div variants={staggerItem}>
            <motion.div
              variants={buttonHover}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className="inline-block"
            >
              <Button
                className="bg-primary text-primary-foreground px-8 py-4 text-base font-semibold"
                onClick={() => scrollToSection("#contact")}
              >
                Book a Discovery Call
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
