"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react"
import {
  contactFormSchema,
  ContactFormData,
  serviceOptions,
} from "@/lib/schemas"
import { buttonHover } from "@/lib/animations"

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle")
  const [submitMessage, setSubmitMessage] = useState("")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("loading")
    setSubmitMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(
          errorData.error || "Failed to send message. Please try again."
        )
      }

      setSubmitStatus("success")
      setSubmitMessage("Thanks! I'll get back to you within 24 hours.")
      reset()

      setTimeout(() => {
        setSubmitStatus("idle")
        setSubmitMessage("")
      }, 5000)
    } catch (error) {
      setSubmitStatus("error")
      setSubmitMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      )

      setTimeout(() => {
        setSubmitStatus("idle")
        setSubmitMessage("")
      }, 5000)
    }
  }

  const inputClasses =
    "block w-full py-3 px-4 border border-border rounded-lg bg-background/50 backdrop-blur-sm text-base text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 min-h-[44px]"

  return (
    <div className="w-full max-w-lg mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            disabled={submitStatus === "loading"}
            className={inputClasses}
            {...register("name")}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-destructive">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@company.com"
            disabled={submitStatus === "loading"}
            className={inputClasses}
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-destructive">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Company */}
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            Company (optional)
          </label>
          <input
            id="company"
            type="text"
            placeholder="Your company"
            disabled={submitStatus === "loading"}
            className={inputClasses}
            {...register("company")}
          />
        </div>

        {/* Service Interest */}
        <div>
          <label
            htmlFor="serviceInterest"
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            What are you interested in?
          </label>
          <select
            id="serviceInterest"
            disabled={submitStatus === "loading"}
            className={inputClasses}
            defaultValue=""
            {...register("serviceInterest")}
          >
            <option value="" disabled>
              Select a service...
            </option>
            {serviceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.serviceInterest && (
            <p className="mt-1 text-sm text-destructive">
              {errors.serviceInterest.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Tell me about your team and what you're looking to accomplish..."
            disabled={submitStatus === "loading"}
            className={`${inputClasses} resize-none`}
            {...register("message")}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-destructive">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit button */}
        <motion.button
          variants={buttonHover}
          initial="rest"
          whileHover={submitStatus !== "loading" ? "hover" : "rest"}
          whileTap={submitStatus !== "loading" ? "tap" : "rest"}
          type="submit"
          disabled={submitStatus === "loading"}
          className="group w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-h-[44px]"
        >
          {submitStatus === "loading" ? (
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
              Send Message
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </>
          )}
        </motion.button>

        {/* Status messages */}
        {submitMessage && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-center gap-2 text-sm p-3 rounded-lg ${
              submitStatus === "success"
                ? "bg-success-green/10 text-success-green border border-success-green/20"
                : "bg-destructive/10 text-destructive border border-destructive/20"
            }`}
          >
            {submitStatus === "success" ? (
              <CheckCircle className="w-4 h-4 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
            )}
            {submitMessage}
          </motion.div>
        )}
      </form>
    </div>
  )
}
