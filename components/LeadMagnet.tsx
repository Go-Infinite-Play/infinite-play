"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  FileText,
} from "lucide-react";
import {
  fadeIn,
  staggerContainer,
  staggerItem,
  buttonHover,
} from "@/lib/animations";

export default function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit email");
      }

      await response.json();

      setStatus("success");
      setMessage("Check your email for the checklist!");
      setEmail("");

      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );

      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
    }
  };

  const checklist = [
    "Workspace setup and team permissions",
    "Prompt template library to start with",
    "Integration patterns for common tools",
    "First-month pitfalls and how to avoid them",
  ];

  return (
    <motion.section
      id="lead-magnet"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="py-16 md:py-24 bg-background"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-0">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="lg:grid lg:grid-cols-2 lg:gap-16 items-start"
        >
          {/* Left column - value prop */}
          <motion.div variants={staggerItem} className="mb-10 lg:mb-0">
            <span className="text-xs uppercase tracking-wider text-primary font-semibold">
              Free Resource
            </span>
            <h2 className="font-heading text-[1.25rem] md:text-[1.5rem] font-semibold mt-3 mb-4">
              The Claude Setup Checklist
            </h2>
            <p className="text-muted-foreground text-base leading-[1.6] mb-6">
              A practical, step-by-step guide to setting up Claude for your
              team. Covers workspace configuration, prompt templates, integration
              patterns, and the mistakes I see teams make in their first month.
            </p>
            <ul className="space-y-3">
              {checklist.map((item, index) => (
                <motion.li
                  key={index}
                  variants={staggerItem}
                  className="flex items-start gap-3 text-muted-foreground text-base leading-[1.6]"
                >
                  <FileText className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right column - form */}
          <motion.div
            variants={staggerItem}
            className="bg-muted rounded-xl p-6 md:p-8"
          >
            <h3 className="text-lg font-medium mb-1">Get the checklist</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Enter your email and I&apos;ll send it right over.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your work email"
                  disabled={status === "loading"}
                  className="block w-full pl-12 pr-4 py-4 border border-border rounded-lg bg-background/50 backdrop-blur-sm text-base text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 min-h-[44px]"
                  required
                />
              </div>

              <motion.button
                variants={buttonHover}
                initial="rest"
                whileHover={status !== "loading" ? "hover" : "rest"}
                whileTap={status !== "loading" ? "tap" : "rest"}
                type="submit"
                disabled={status === "loading"}
                className="group w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-4 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Me the Checklist
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform duration-200"
                    />
                  </>
                )}
              </motion.button>

              {/* Status messages */}
              {message && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`flex items-center gap-2 text-sm p-3 rounded-lg ${
                    status === "success"
                      ? "bg-success-green/10 text-success-green border border-success-green/20"
                      : "bg-destructive/10 text-destructive border border-destructive/20"
                  }`}
                >
                  {status === "success" ? (
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  )}
                  {message}
                </motion.div>
              )}

              {/* Privacy note */}
              {!message && (
                <p className="text-xs text-muted-foreground text-center">
                  No spam, ever. Unsubscribe anytime.
                </p>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
