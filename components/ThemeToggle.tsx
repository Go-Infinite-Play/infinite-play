"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { motion } from "framer-motion"
import { buttonHover } from "@/lib/animations"

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return <div className="w-9 h-9" />

  return (
    <motion.button
      variants={buttonHover}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-muted-foreground hover:text-foreground transition-colors p-2"
      aria-label="Toggle dark mode"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </motion.button>
  )
}
