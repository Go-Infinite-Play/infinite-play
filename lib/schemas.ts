import { z } from "zod"

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  serviceInterest: z.enum(
    [
      "team-workshop",
      "quick-start",
      "implementation-sprint",
      "ongoing-advisory",
      "not-sure",
    ],
    { error: "Please select a service" }
  ),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be under 2000 characters"),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export const serviceOptions = [
  { value: "team-workshop", label: "Team Workshop" },
  { value: "quick-start", label: "Claude Quick-Start" },
  { value: "implementation-sprint", label: "Implementation Sprint" },
  { value: "ongoing-advisory", label: "Ongoing Advisory" },
  { value: "not-sure", label: "Not sure yet" },
] as const
