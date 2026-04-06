"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { buttonHover } from "@/lib/animations"
import { contactInfo } from "@/lib/constants"

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void
    }
  }
}

interface CalendlyButtonProps {
  className?: string
  children?: React.ReactNode
  variant?: "primary" | "outline"
}

const assetsInjected = { current: false }

function injectCalendlyAssets() {
  if (assetsInjected.current) return
  assetsInjected.current = true

  // Inject CSS
  const link = document.createElement("link")
  link.rel = "stylesheet"
  link.href = "https://assets.calendly.com/assets/external/widget.css"
  document.head.appendChild(link)

  // Inject JS
  const script = document.createElement("script")
  script.src = "https://assets.calendly.com/assets/external/widget.js"
  script.async = true
  document.head.appendChild(script)
}

export default function CalendlyButton({
  className,
  children,
  variant = "primary",
}: CalendlyButtonProps) {
  const injectedRef = useRef(false)

  useEffect(() => {
    if (!injectedRef.current) {
      injectedRef.current = true
      injectCalendlyAssets()
    }
  }, [])

  const handleClick = () => {
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({ url: contactInfo.calendly })
    }
  }

  return (
    <motion.div
      variants={buttonHover}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      className="inline-block"
    >
      <Button
        className={
          className ??
          (variant === "primary"
            ? "bg-primary text-primary-foreground px-8 py-4 text-base font-semibold"
            : "px-8 py-4 text-base font-semibold")
        }
        variant={variant === "outline" ? "outline" : "default"}
        onClick={handleClick}
      >
        {children ?? (
          <>
            Book a Discovery Call
            <ArrowRight size={18} className="ml-2" />
          </>
        )}
      </Button>
    </motion.div>
  )
}
