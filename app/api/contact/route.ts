import { NextRequest, NextResponse } from "next/server"
import Airtable from "airtable"
import { Resend } from "resend"
import { contactFormSchema } from "@/lib/schemas"

const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID || "app1cZoJ2TlJFYjTr"
const AIRTABLE_CONTACT_TABLE =
  process.env.AIRTABLE_CONTACT_TABLE || "Contact Submissions"

// Switch to your verified domain email when ready (e.g., "jeremy@infiniteplay.ai")
const RESEND_FROM = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"

function getResend() {
  return new Resend(process.env.RESEND_API_KEY)
}

function getAirtableBase() {
  const token = process.env.AIRTABLE_PERSONAL_ACCESS_TOKEN
  if (!token) {
    throw new Error(
      "AIRTABLE_PERSONAL_ACCESS_TOKEN environment variable is required"
    )
  }
  return new Airtable({ apiKey: token }).base(AIRTABLE_BASE_ID)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const result = contactFormSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      )
    }

    const { name, email, company, serviceInterest, message } = result.data

    const base = getAirtableBase()

    await base(AIRTABLE_CONTACT_TABLE).create([
      {
        fields: {
          Name: name,
          Email: email,
          Company: company || "",
          "Service Interest": serviceInterest,
          Message: message,
        },
      },
    ])

    // Send notification email to Jeremy (non-blocking -- Airtable save is the critical path)
    try {
      await getResend().emails.send({
        from: `Infinite Play Leads <${RESEND_FROM}>`,
        to: "jeremy@infiniteplay.ai",
        subject: `New contact form: ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">New Contact Form Submission</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Name</td><td style="padding: 8px 0;">${name}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Company</td><td style="padding: 8px 0;">${company || "Not provided"}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Service Interest</td><td style="padding: 8px 0;">${serviceInterest}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Message</td><td style="padding: 8px 0;">${message}</td></tr>
            </table>
            <p style="color: #999; font-size: 12px; margin-top: 24px;">Sent from infiniteplay.ai contact form</p>
          </div>
        `,
      })
    } catch (emailError) {
      console.error("Failed to send notification email:", emailError)
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    })
  } catch (error) {
    console.error("Error submitting contact form:", error)

    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    )
  }
}
