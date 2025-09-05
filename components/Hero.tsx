"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import { textReveal, staggerContainer, staggerItem, buttonHover, floatingOrb } from "@/lib/animations";
import { heroRotatingWords } from "@/lib/constants";

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Rotate words every 1.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % heroRotatingWords.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation variants for rotating words
  const wordAnimation = {
    initial: {
      opacity: 0,
      y: 15,
      scale: 0.95,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
    exit: {
      opacity: 0,
      y: -15,
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-darker-bg via-dark-bg to-darker-bg">
      {/* Animated background orbs */}
      <div className="absolute inset-0">
        <motion.div
          variants={floatingOrb}
          animate="animate"
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingOrb}
          animate="animate"
          style={{ animationDelay: "2s" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingOrb}
          animate="animate"
          style={{ animationDelay: "4s" }}
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-success-green/5 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Logo */}
          <motion.div variants={staggerItem} className="mb-8">
            <div className="relative w-24 h-24 mx-auto mb-6">
              <Image
                src="/infinite-play-logo.png"
                alt="Infinite Play Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.div variants={staggerItem} className="space-y-4">
            <motion.h1
              variants={textReveal}
              className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading text-light-text leading-tight"
            >
              Your AI
              <br />
              <span className="text-primary inline-block relative">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={heroRotatingWords[currentWordIndex]}
                    variants={wordAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="inline-block"
                  >
                    {heroRotatingWords[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <br />
              Partner
            </motion.h1>
          </motion.div>

          {/* Subheadline */}
          <motion.div variants={staggerItem} className="max-w-3xl mx-auto">
            <motion.p
              variants={textReveal}
              className="text-xl md:text-2xl text-muted-text leading-relaxed"
            >
              We help small to mid-market companies discover, implement, and scale 
              AI solutions that drive real business impact.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={staggerItem}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-8"
          >
            <motion.button
              variants={buttonHover}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              onClick={() => scrollToSection("#contact")}
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2 min-w-[240px] justify-center"
            >
              Start Your AI Journey
              <ArrowRight 
                size={20} 
                className="group-hover:translate-x-1 transition-transform duration-300" 
              />
            </motion.button>

            <motion.button
              variants={buttonHover}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              onClick={() => scrollToSection("#how-we-work")}
              className="group border-2 border-muted-text hover:border-light-text text-light-text hover:text-light-text px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2 min-w-[240px] justify-center"
            >
              <Play 
                size={20} 
                className="group-hover:scale-110 transition-transform duration-300" 
              />
              Learn Our Process
            </motion.button>
          </motion.div>

          {/* Trust indicator */}
          <motion.div variants={staggerItem} className="pt-16">
            <motion.p
              variants={textReveal}
              className="text-muted-text text-sm uppercase tracking-wide font-medium"
            >
              Helping forward-thinking companies embrace AI-first operations
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-text rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-muted-text rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}