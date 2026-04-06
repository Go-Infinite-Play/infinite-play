"use client";

import { motion } from "framer-motion";
import { MessageSquare, Map, Rocket, CheckCircle } from "lucide-react";
import { processSteps } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";

const iconMap = {
  MessageSquare: MessageSquare,
  Map: Map,
  Rocket: Rocket,
  CheckCircle: CheckCircle,
};

export default function Process() {
  return (
    <section id="how-we-work" className="py-24 bg-background">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-0"
      >
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            variants={staggerItem}
            className="font-heading text-[1.25rem] md:text-[1.5rem] font-semibold text-foreground mb-4"
          >
            How We Work Together
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            A straightforward path from first conversation to real results.
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Horizontal connector line for desktop */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px border-t-2 border-dashed border-border" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent =
                iconMap[step.icon as keyof typeof iconMap];

              return (
                <motion.div
                  key={step.number}
                  variants={staggerItem}
                  className="relative text-center"
                >
                  {/* Step number badge */}
                  <div className="relative z-10 mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-background">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                      Step {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold font-heading text-foreground mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  {/* Mobile connector */}
                  {index < processSteps.length - 1 && (
                    <div className="md:hidden flex justify-center mt-6">
                      <div className="w-px h-8 border-l-2 border-dashed border-border" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Call to action */}
        <motion.div variants={staggerItem} className="text-center mt-20">
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
            Book a Free Discovery Call
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
