"use client";

import { motion } from "framer-motion";
import { Search, Target, Rocket, CheckCircle } from "lucide-react";
import { processSteps } from "@/lib/constants";
import { staggerContainer, staggerItem, cardHover, progressLine } from "@/lib/animations";

const iconMap = {
  Search: Search,
  Target: Target,
  Rocket: Rocket,
};

export default function Process() {
  return (
    <section id="how-we-work" className="py-24 bg-card-bg/30">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-4"
      >
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            variants={staggerItem}
            className="text-4xl md:text-6xl font-bold font-heading text-light-text leading-tight mb-6"
          >
            Your AI
            <br />
            <span className="text-primary">Transformation Journey</span>
          </motion.h2>
          
          <motion.p
            variants={staggerItem}
            className="text-xl md:text-2xl text-muted-text max-w-3xl mx-auto leading-relaxed"
          >
            A proven three-step process to take you from AI-curious to AI-powered
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-0.5 bg-border-divider">
            <motion.div
              variants={progressLine}
              className="h-full bg-primary origin-left"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {processSteps.map((step, index) => {
              const IconComponent = iconMap[step.icon as keyof typeof iconMap];
              
              return (
                <motion.div
                  key={step.number}
                  variants={cardHover}
                  initial="rest"
                  whileHover="hover"
                  className="relative"
                >
                  <div className="bg-card-bg border border-border-divider rounded-2xl p-8 h-full">
                    {/* Step number and icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-4xl font-bold font-heading text-primary">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold font-heading text-light-text">
                        {step.title}
                      </h3>
                      
                      <h4 className="text-lg font-semibold text-primary">
                        {step.subtitle}
                      </h4>
                      
                      <p className="text-muted-text leading-relaxed">
                        {step.description}
                      </p>
                      
                      {/* Deliverables */}
                      <div className="pt-4">
                        <h5 className="text-sm font-semibold text-light-text uppercase tracking-wide mb-3">
                          Deliverables
                        </h5>
                        <ul className="space-y-2">
                          {step.deliverables.map((deliverable, deliverableIndex) => (
                            <li 
                              key={deliverableIndex}
                              className="flex items-start space-x-2 text-sm text-muted-text"
                            >
                              <CheckCircle className="w-4 h-4 text-success-green flex-shrink-0 mt-0.5" />
                              <span>{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Process connection indicator for mobile */}
                    {index < processSteps.length - 1 && (
                      <div className="lg:hidden flex justify-center mt-8">
                        <div className="w-px h-8 bg-border-divider"></div>
                      </div>
                    )}
                  </div>

                  {/* Desktop connection dots */}
                  <div className="hidden lg:block absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                    <motion.div
                      initial={{ scale: 0, backgroundColor: "var(--border-divider)" }}
                      whileInView={{ 
                        scale: 1, 
                        backgroundColor: "var(--primary-orange)",
                        transition: { delay: index * 0.3, duration: 0.5 }
                      }}
                      viewport={{ once: true }}
                      className="w-4 h-4 rounded-full border-4 border-card-bg"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          variants={staggerItem}
          className="text-center mt-20"
        >
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
            Start Your Transformation
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}