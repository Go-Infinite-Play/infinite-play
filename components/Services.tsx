"use client";

import { motion } from "framer-motion";
import { 
  BarChart3, 
  Workflow, 
  Code, 
  Puzzle, 
  Users, 
  Shield,
  CheckCircle,
  Target,
  ArrowRight,
  TrendingUp
} from "lucide-react";
import { services, valueProps } from "@/lib/constants";
import { staggerContainer, staggerItem, cardHover } from "@/lib/animations";

const serviceIconMap = {
  BarChart3: BarChart3,
  Workflow: Workflow,
  Code: Code,
  Puzzle: Puzzle,
  Users: Users,
  Shield: Shield,
};

const valueIconMap = {
  CheckCircle: CheckCircle,
  Target: Target,
  ArrowRight: ArrowRight,
  TrendingUp: TrendingUp,
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-7xl mx-auto px-4"
      >
        {/* Services Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <motion.h2
              variants={staggerItem}
              className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6"
            >
              Comprehensive <span className="text-primary">AI Services</span>
            </motion.h2>
            
            <motion.p
              variants={staggerItem}
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              From assessment to implementation, we provide end-to-end AI solutions 
              tailored to your business needs.
            </motion.p>
          </div>

          {/* Services Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => {
              const IconComponent = serviceIconMap[service.icon as keyof typeof serviceIconMap];
              
              return (
                <motion.div
                  key={service.title}
                  variants={cardHover}
                  initial="rest"
                  whileHover="hover"
                  className="group"
                >
                  <motion.div
                    variants={staggerItem}
                    className="bg-card/50 border border-border/50 rounded-xl p-8 h-full hover:border-primary/50 transition-colors duration-300"
                  >
                    <div className="mb-6">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                        <IconComponent className="w-7 h-7 text-primary" />
                      </div>
                      
                      <h3 className="text-xl font-bold font-heading text-foreground mb-3">
                        {service.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Why Choose Us Section */}
        <motion.div
          variants={staggerContainer}
          className="text-center"
        >
          <motion.h2
            variants={staggerItem}
            className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-16"
          >
            Why Companies Choose <span className="text-primary">Infinite Play</span>
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {valueProps.map((prop) => {
              const IconComponent = valueIconMap[prop.icon as keyof typeof valueIconMap];
              
              return (
                <motion.div
                  key={prop.title}
                  variants={staggerItem}
                  className="group text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="bg-card/30 border border-border/30 rounded-xl p-6 h-full hover:border-primary/30 transition-colors duration-300"
                  >
                    <div className="mb-6">
                      <motion.div
                        animate={{ 
                          rotate: [0, 360],
                        }}
                        transition={{ 
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300"
                      >
                        <IconComponent className="w-6 h-6 text-primary" />
                      </motion.div>
                      
                      <h3 className="text-lg font-bold font-heading text-foreground mb-3">
                        {prop.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {prop.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Call to action */}
          <motion.div variants={staggerItem} className="mt-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center gap-2 mx-auto"
            >
              Explore Our Services
              <ArrowRight 
                size={20} 
                className="group-hover:translate-x-1 transition-transform duration-300" 
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}