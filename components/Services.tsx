"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Zap,
  Code,
  RefreshCw,
} from "lucide-react";
import { services } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";
import CalendlyButton from "@/components/CalendlyButton";

const serviceIconMap = {
  GraduationCap: GraduationCap,
  Zap: Zap,
  Code: Code,
  RefreshCw: RefreshCw,
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-muted">
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
            className="font-heading text-[1.25rem] md:text-[1.5rem] font-semibold text-foreground mb-4"
          >
            What I Offer
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Clear scope, honest pricing, real outcomes.
          </motion.p>
        </div>

        {/* Service Tier Grid */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {services.map((service) => {
            const IconComponent =
              serviceIconMap[service.icon as keyof typeof serviceIconMap];

            return (
              <motion.div
                key={service.title}
                variants={staggerItem}
                className="group"
              >
                <div className="bg-card border border-border rounded-xl p-8 h-full hover:border-primary/50 transition-colors duration-300 flex flex-col">
                  {/* Icon + Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold font-heading text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground italic">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-base text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverable */}
                  <p className="text-sm text-muted-foreground mb-2">
                    <span className="font-semibold text-foreground">
                      You get:
                    </span>{" "}
                    {service.deliverable}
                  </p>

                  {/* Audience */}
                  <p className="text-sm text-muted-foreground mb-6">
                    <span className="font-semibold text-foreground">
                      Best for:
                    </span>{" "}
                    {service.audience}
                  </p>

                  {/* Price + Duration */}
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <span className="text-xs text-muted-foreground block">
                        Starting from
                      </span>
                      <span className="text-lg font-semibold text-foreground">
                        {service.startingFrom}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                      {service.duration}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to action */}
        <motion.div variants={staggerItem} className="text-center mt-16 space-y-4">
          <p className="text-muted-foreground text-base">
            Not sure which service fits?
          </p>
          <CalendlyButton />
        </motion.div>
      </motion.div>
    </section>
  );
}
