"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, CheckCircle, AlertCircle } from "lucide-react";
import { buttonHover } from "@/lib/animations";

interface EmailFormProps {
  placeholder?: string;
  buttonText?: string;
  subText?: string;
}

export default function EmailForm({ 
  placeholder = "Your work email", 
  buttonText = "Get in Touch",
  subText = "Get a free AI opportunity assessment for your company"
}: EmailFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
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
      const response = await fetch('/api/submit-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit email');
      }

      await response.json();
      
      setStatus("success");
      setMessage("🎉 Boom! Your email just landed in our inbox faster than ChatGPT can say 'I'm sorry, I can't help with that.' We'll be in touch within 24 hours!");
      setEmail("");
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
      
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-muted-foreground" />
            </div>
            
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              disabled={status === "loading"}
              className="block w-full pl-12 pr-4 py-4 border border-border rounded-lg bg-background/50 backdrop-blur-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
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
            className="group bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-4 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
          >
            {status === "loading" ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                />
                Sending...
              </>
            ) : (
              <>
                {buttonText}
                <ArrowRight 
                  size={18} 
                  className="group-hover:translate-x-1 transition-transform duration-200" 
                />
              </>
            )}
          </motion.button>
        </div>

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

        {/* Subtext */}
        {subText && !message && (
          <p className="text-sm text-muted-foreground text-center">
            {subText}
          </p>
        )}
      </form>
    </div>
  );
}