"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import EmailForm from "./EmailForm";
import { staggerContainer, staggerItem, floatingOrb } from "@/lib/animations";

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-br from-darker-bg via-dark-bg to-darker-bg overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          variants={floatingOrb}
          animate="animate"
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingOrb}
          animate="animate"
          style={{ animationDelay: "3s" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-success-green/5 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingOrb}
          animate="animate"
          style={{ animationDelay: "6s" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-2xl"
        />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(251, 91, 61, 0.1) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(251, 91, 61, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative z-10 max-w-4xl mx-auto px-4 text-center"
      >
        {/* Floating icon */}
        <motion.div
          variants={staggerItem}
          className="mb-8"
        >
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Sparkles className="w-8 h-8 text-primary" />
          </motion.div>
        </motion.div>

        {/* Headlines */}
        <motion.div variants={staggerItem} className="mb-8">
          <motion.h2
            className="text-4xl md:text-6xl font-bold font-heading text-light-text leading-tight mb-6"
          >
            Ready to Transform
            <br />
            Your Business with <span className="text-primary">AI?</span>
          </motion.h2>
          
          <motion.p
            className="text-xl md:text-2xl text-muted-text leading-relaxed max-w-3xl mx-auto"
          >
            Let&apos;s discuss how AI can solve your specific challenges and unlock new opportunities.
          </motion.p>
        </motion.div>

        {/* Email form */}
        <motion.div variants={staggerItem} className="mb-8">
          <EmailForm />
        </motion.div>

        {/* Alternative contact methods */}
        <motion.div variants={staggerItem} className="space-y-6">
          <div className="flex items-center justify-center space-x-4 text-muted-text">
            <div className="h-px bg-border-divider flex-1"></div>
            <span className="text-sm font-medium">Or</span>
            <div className="h-px bg-border-divider flex-1"></div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <motion.a
              href="mailto:jeremy@infiniteplay.ai"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 text-muted-text hover:text-light-text transition-colors font-medium"
            >
              <span>jeremy@infiniteplay.ai</span>
              <ArrowRight 
                size={16} 
                className="group-hover:translate-x-1 transition-transform duration-200" 
              />
            </motion.a>

            <div className="hidden sm:block w-px h-6 bg-border-divider"></div>

            <motion.a
              href="#" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 text-muted-text hover:text-light-text transition-colors font-medium"
            >
              <span>Schedule a Call</span>
              <ArrowRight 
                size={16} 
                className="group-hover:translate-x-1 transition-transform duration-200" 
              />
            </motion.a>
          </div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div variants={staggerItem} className="mt-16 pt-8 border-t border-border-divider">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-sm text-muted-text">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success-green rounded-full"></div>
              <span>Free initial consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success-green rounded-full"></div>
              <span>Custom AI strategy</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success-green rounded-full"></div>
              <span>No obligation assessment</span>
            </div>
          </div>
        </motion.div>

        {/* Social proof */}
        <motion.div variants={staggerItem} className="mt-12">
          <p className="text-sm text-muted-text">
            Join 50+ companies already transforming their operations with AI
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}