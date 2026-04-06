"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { navigationItems } from "@/lib/constants"
import { drawerAnimation, buttonHover } from "@/lib/animations"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-sm border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-xl font-bold font-heading text-foreground group-hover:text-primary transition-colors">
              Infinite Play
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <motion.button
                key={item.href}
                variants={buttonHover}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm"
              >
                {item.label}
              </motion.button>
            ))}

            <motion.div
              variants={buttonHover}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                className="bg-primary text-primary-foreground"
                onClick={() => scrollToSection("#contact")}
              >
                Book a Call
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            variants={buttonHover}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-foreground/20 z-40 md:hidden"
            />

            {/* Drawer */}
            <motion.div
              variants={drawerAnimation}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 w-80 bg-background border-l border-border z-50 md:hidden"
            >
              <div className="p-6 pt-20">
                <div className="flex flex-col space-y-6">
                  {navigationItems.map((item) => (
                    <motion.button
                      key={item.href}
                      variants={buttonHover}
                      initial="rest"
                      whileHover="hover"
                      whileTap="tap"
                      onClick={() => scrollToSection(item.href)}
                      className="text-left text-lg text-muted-foreground hover:text-foreground transition-colors font-medium"
                    >
                      {item.label}
                    </motion.button>
                  ))}

                  <Button
                    className="bg-primary text-primary-foreground mt-4"
                    onClick={() => scrollToSection("#contact")}
                  >
                    Book a Call
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
