"use client"

import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import { sectionFadeIn, staggerContainer, staggerItem } from "@/lib/animations"
import CalendlyButton from "@/components/CalendlyButton"
import ContactForm from "@/components/ContactForm"
import { contactInfo } from "@/lib/constants"

export default function CTA() {
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
            <CalendlyButton />
          </motion.div>

          <motion.div variants={staggerItem} className="pt-2">
            <p className="text-sm text-muted-foreground mb-2">Or reach out directly:</p>
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <Mail size={16} />
              {contactInfo.email}
            </a>
          </motion.div>

          <motion.div variants={staggerItem} className="pt-8">
            <h3 className="text-base font-medium text-foreground mb-4">
              Or send a message:
            </h3>
            <ContactForm />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
