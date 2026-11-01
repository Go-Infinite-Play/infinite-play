"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { contactInfo } from "@/lib/constants";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        isScrolled
          ? "bg-background/85 backdrop-blur border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-10 h-16">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label="Infinite Play home"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-primary" aria-hidden />
          <span className="font-medium text-[15px] tracking-tight text-foreground">
            Infinite Play
          </span>
        </Link>

        <a
          href={contactInfo.mailto}
          className="text-[15px] font-medium text-foreground underline decoration-foreground/30 underline-offset-[6px] hover:decoration-primary transition-colors"
        >
          Email me
        </a>
      </div>
    </motion.nav>
  );
}
