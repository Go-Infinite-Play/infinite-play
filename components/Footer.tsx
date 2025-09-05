"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, ArrowUp } from "lucide-react";
import Image from "next/image";
import { footerLinks, contactInfo, siteConfig } from "@/lib/constants";
import { staggerContainer, staggerItem, buttonHover } from "@/lib/animations";
import EmailForm from "./EmailForm";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-darker-bg border-t border-border-divider">
      {/* Main footer content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-7xl mx-auto px-4 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Company info */}
          <motion.div variants={staggerItem} className="">
            <div className="mb-6">
              <motion.div
                variants={buttonHover}
                initial="rest"
                whileHover="hover"
                className="flex items-center gap-3 mb-4 group"
              >
                <div className="relative w-8 h-8 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src="/infinite-play-logo.png"
                    alt="Infinite Play Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold font-heading text-light-text">
                  Infinite Play
                </h3>
              </motion.div>
              <p className="text-muted-text leading-relaxed mb-6">
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
                className="flex items-center gap-3 text-muted-text hover:text-light-text transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">{contactInfo.email}</span>
              </motion.a>

              <motion.div
                variants={buttonHover}
                initial="rest"
                whileHover="hover"
                className="flex items-center gap-3 text-muted-text"
              >
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{contactInfo.location}</span>
              </motion.div>

              <motion.a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                variants={buttonHover}
                initial="rest"
                whileHover="hover"
                className="flex items-center gap-3 text-muted-text hover:text-light-text transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-sm">LinkedIn Profile</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Company links */}
          <motion.div variants={staggerItem}>
            <h4 className="text-lg font-semibold text-light-text mb-6 font-heading">
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
                    className="text-muted-text hover:text-light-text transition-colors text-sm text-left"
                  >
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Newsletter signup */}
        <motion.div 
          variants={staggerItem}
          className="mt-16 pt-8 border-t border-border-divider"
        >
          <div className="max-w-2xl">
            <h4 className="text-xl font-semibold text-light-text mb-4 font-heading">
              Stay Updated on AI Trends
            </h4>
            <p className="text-muted-text mb-6 leading-relaxed">
              Get insights, case studies, and practical AI implementation tips delivered to your inbox monthly.
            </p>
            
            <div className="max-w-lg">
              <EmailForm 
                placeholder="Your email address"
                buttonText="Get in Touch"
                subText=""
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom bar */}
      <div className="border-t border-border-divider">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 py-6"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <motion.p variants={staggerItem} className="text-muted-text text-sm">
              © 2024 Infinite Play. {siteConfig.tagline}
            </motion.p>

            {/* Back to top button */}
            <motion.button
              variants={buttonHover}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-muted-text hover:text-light-text transition-colors text-sm"
            >
              <span>Back to top</span>
              <ArrowUp 
                size={16} 
                className="group-hover:-translate-y-1 transition-transform duration-200" 
              />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        animate={{
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-8 right-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none"
      />
    </footer>
  );
}