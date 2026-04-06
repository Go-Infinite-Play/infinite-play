"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { staggerContainer, staggerItem, buttonHover } from "@/lib/animations"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-0">
        <h1 className="font-heading text-[2rem] md:text-[3rem] font-bold leading-[1.1] text-foreground mb-6">
          Claude Implementation Consulting
        </h1>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.p
            variants={staggerItem}
            className="text-base md:text-lg text-muted-foreground leading-[1.6] max-w-2xl"
          >
            Helping teams get real value from Claude — not just a demo.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <motion.div
              variants={buttonHover}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                className="bg-primary text-primary-foreground px-8 py-4 text-base font-semibold"
                onClick={() => scrollToSection("#contact")}
              >
                Book a Discovery Call
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </motion.div>

            <motion.div
              variants={buttonHover}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                variant="outline"
                className="px-8 py-4 text-base font-semibold"
                onClick={() => scrollToSection("#process")}
              >
                See How It Works
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
