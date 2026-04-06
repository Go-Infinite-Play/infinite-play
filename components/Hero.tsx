"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { staggerContainer, staggerItem, buttonHover } from "@/lib/animations"
import { Button } from "@/components/ui/button"
import { heroContent } from "@/lib/constants"

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={staggerItem}
              className="font-heading text-[2rem] md:text-[3rem] font-bold leading-[1.1] text-foreground mb-6"
            >
              {heroContent.headline}
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="text-base md:text-lg text-muted-foreground leading-[1.6] max-w-xl mb-8"
            >
              {heroContent.subhead}
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
                  {heroContent.primaryCta}
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
                  onClick={() => scrollToSection(heroContent.secondaryCtaHref)}
                >
                  {heroContent.secondaryCta}
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <Image
              src="/founder-photo.jpg"
              alt="Jeremy Olken"
              width={500}
              height={500}
              className="rounded-2xl shadow-lg"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
