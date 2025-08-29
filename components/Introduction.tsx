"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { stats } from "@/lib/constants";
import { staggerContainer, staggerItem, counterAnimation } from "@/lib/animations";

function Counter({ value, duration = 2 }: { value: string, suffix: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      
      // Extract number from value string
      const numericValue = parseFloat(value.replace(/[^\d.]/g, ''));
      if (isNaN(numericValue)) return;

      let startTime: number | null = null;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        const currentCount = Math.floor(progress * numericValue);
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isInView, hasAnimated, value, duration]);

  const displayValue = value.includes('+') ? `${count}+` : 
                      value.includes('<') ? `<${count}` : 
                      count.toString();

  return <span ref={ref}>{displayValue}</span>;
}

export default function Introduction() {
  return (
    <section className="py-24 bg-background">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto px-4"
      >
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h2
            variants={staggerItem}
            className="text-4xl md:text-6xl font-bold font-heading text-foreground leading-tight mb-8"
          >
            AI isn&apos;t just about technology.
            <br />
            <span className="text-primary">It&apos;s about transformation.</span>
          </motion.h2>
          
          <motion.p
            variants={staggerItem}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
          >
            Most companies know AI can help them, but they don&apos;t know where to start. 
            That&apos;s where we come in. We bridge the gap between AI&apos;s potential and practical 
            implementation, ensuring your team is equipped, your processes are optimized, 
            and your investment delivers measurable results.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="text-center p-6 rounded-lg bg-card/50 border border-border/50"
            >
              <motion.div
                initial={counterAnimation.initial}
                whileInView={counterAnimation.animate}
                transition={{ ...counterAnimation.transition, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.5 }}
                className="mb-4"
              >
                <div className="text-4xl md:text-5xl font-bold font-heading text-primary mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                  {stat.suffix}
                </div>
                <p className="text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}