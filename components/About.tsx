"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, Users, Target } from "lucide-react";
import Image from "next/image";
import { credentials } from "@/lib/constants";
import { staggerContainer, staggerItem, fadeInUp, slideInFromLeft, slideInFromRight } from "@/lib/animations";

export default function About() {
  const credentialIcons = [Award, Briefcase, Users, Target];

  return (
    <section id="about" className="py-24 bg-card-bg/30">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-7xl mx-auto px-4"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            variants={staggerItem}
            className="text-4xl md:text-5xl font-bold font-heading text-light-text mb-6"
          >
            Meet Your AI
            <br />
            <span className="text-primary">Transformation Guide</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Founder Image - Much Smaller */}
          <motion.div
            variants={slideInFromLeft}
            className="relative lg:sticky lg:top-24"
          >
            <div className="w-64 h-80 mx-auto rounded-2xl relative overflow-hidden border border-border-divider group">
              {/* Orange gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-primary/40"></div>
              
              {/* Founder photo */}
              <div className="relative w-full h-full">
                <Image
                  src="/founder-photo.jpg"
                  alt="Jeremy Olken, Founder of Infinite Play"
                  fill
                  className="object-cover scale-110 group-hover:scale-105 transition-transform duration-700 ease-out"
                  style={{
                    objectPosition: 'center 25%'
                  }}
                />
                {/* Subtle overlay for better text contrast if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Decorative elements */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-xl"
            />
            
            <motion.div
              animate={{
                y: [0, 15, 0],
                x: [0, -5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-success-green/5 rounded-full blur-2xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            variants={slideInFromRight}
            className="space-y-8"
          >
            <motion.div variants={staggerItem} className="space-y-6">
              {/* Name and Title */}
              <div className="mb-8">
                <h3 className="text-3xl md:text-4xl font-bold font-heading text-light-text mb-2">
                  Jeremy Olken
                </h3>
                <p className="text-xl text-primary font-semibold">
                  Founder & AI Transformation Strategist
                </p>
              </div>

              <div className="space-y-6 text-muted-text leading-relaxed">
                <p>
                  With over a decade of experience bringing innovative products and campaigns to life for world-class brands, I&apos;ve witnessed firsthand how emerging technologies reshape industries. After leading innovation teams at global agencies and scaling multiple startups, I founded Infinite Play to help companies navigate the AI revolution.
                </p>

                <p>
                  My approach combines strategic thinking with hands-on implementation. I&apos;ve led digital transformations, implemented operational frameworks like EOS, and helped organizations reimagine how they work. Now, I&apos;m focused on one mission: making AI accessible and actionable for growing companies.
                </p>

                <p className="text-light-text font-medium">
                  I believe every company can become AI-powered&mdash;they just need the right partner to show them how.
                </p>
              </div>
            </motion.div>

            {/* Credentials */}
            <motion.div variants={staggerItem} className="pt-8">
              <h3 className="text-lg font-semibold text-light-text mb-6 uppercase tracking-wide">
                Credentials & Expertise
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {credentials.map((credential, index) => {
                  const IconComponent = credentialIcons[index % credentialIcons.length];
                  
                  return (
                    <motion.div
                      key={credential}
                      variants={fadeInUp}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 p-4 bg-card-bg/50 border border-border-divider rounded-lg"
                    >
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-muted-text font-medium">
                        {credential}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Call to action */}
            <motion.div variants={staggerItem} className="pt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Let&apos;s Work Together
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
}