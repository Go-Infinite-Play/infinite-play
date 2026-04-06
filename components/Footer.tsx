"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Linkedin, ArrowUp, Calendar, MessageSquare } from "lucide-react"
import { footerLinks, contactInfo, siteConfig } from "@/lib/constants"
import { staggerContainer, staggerItem, buttonHover } from "@/lib/animations"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-foreground text-background">
      {/* Main footer content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-0 py-12 md:py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Company info */}
          <motion.div variants={staggerItem}>
            <div className="mb-6">
              <h3 className="text-2xl font-bold font-heading text-background mb-4">
                {siteConfig.name}
              </h3>
              <p className="text-background/70 leading-relaxed mb-6">
                {siteConfig.description}
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-3">
              <motion.a
                href={`mailto:${contactInfo.email}`}
                variants={buttonHover}
                initial="rest"
                whileHover="hover"
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">{contactInfo.email}</span>
              </motion.a>

              <div className="flex items-center gap-3 text-background/70">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{contactInfo.location}</span>
              </div>

              <motion.a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                variants={buttonHover}
                initial="rest"
                whileHover="hover"
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-sm">LinkedIn Profile</span>
              </motion.a>

              <motion.button
                variants={buttonHover}
                initial="rest"
                whileHover="hover"
                onClick={() => scrollToSection("#contact")}
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span className="text-sm">Book a Discovery Call</span>
              </motion.button>

              <motion.button
                variants={buttonHover}
                initial="rest"
                whileHover="hover"
                onClick={() => scrollToSection("#contact")}
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span className="text-sm">Send a message</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Company links */}
          <motion.div variants={staggerItem}>
            <h4 className="text-lg font-semibold text-background mb-6 font-heading">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <motion.button
                    variants={buttonHover}
                    initial="rest"
                    whileHover="hover"
                    onClick={() => scrollToSection(link.href)}
                    className="text-background/70 hover:text-background transition-colors text-sm text-left"
                  >
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom bar */}
      <div className="border-t border-background/20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-0 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-background/60 text-sm">
              &copy; {new Date().getFullYear()} {siteConfig.name}. {siteConfig.tagline}
            </p>

            {/* Back to top button */}
            <motion.button
              variants={buttonHover}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-background/60 hover:text-background transition-colors text-sm"
            >
              <span>Back to top</span>
              <ArrowUp
                size={16}
                className="group-hover:-translate-y-1 transition-transform duration-200"
              />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
