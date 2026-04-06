import { NextRequest, NextResponse } from "next/server"
import Airtable from "airtable"
import { Resend } from "resend"
import { leadMagnetSchema } from "@/lib/schemas"

const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID || "app1cZoJ2TlJFYjTr"
const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME || "Email Capture"

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

    const result = leadMagnetSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      )
    }

    const { email } = result.data

    const base = getAirtableBase()

    // Save to Airtable
    await base(AIRTABLE_TABLE_NAME).create([
      {
        fields: {
          Email: email,
          Source: "Lead Magnet",
        },
      },
    ])

    // Send confirmation email to the lead
    await getResend().emails.send({
      from: `Jeremy at Infinite Play <${RESEND_FROM}>`,
      to: email,
      subject: "Your Claude Setup Checklist",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #333;">
          <h1 style="font-size: 24px; font-weight: 600; margin-bottom: 16px;">Thanks for downloading the Claude Setup Checklist!</h1>
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
            Here's what you'll find inside: a step-by-step guide to setting up Claude for your team,
            covering workspace configuration, prompt templates, and integration patterns.
          </p>
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
            I'll also send you occasional Claude tips -- practical stuff I learn from helping teams
            adopt Claude every day.
          </p>
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 8px;">
            -- Jeremy Olken, Infinite Play
          </p>
          <p style="font-size: 12px; color: #999; margin-top: 32px;">
            You're receiving this because you requested the Claude Setup Checklist from infiniteplay.ai.
          </p>
        </div>
      `,
    })

    // Send notification email to Jeremy
    await getResend().emails.send({
      from: `Infinite Play Leads <${RESEND_FROM}>`,
      to: "jeremy@infiniteplay.ai",
      subject: "New lead magnet download",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #333;">New Lead Magnet Download</h2>
          <p style="font-size: 16px;"><strong>Email:</strong> ${email}</p>
          <p style="font-size: 14px; color: #666;"><strong>Time:</strong> ${new Date().toISOString()}</p>
          <p style="font-size: 14px; color: #666;"><strong>Source:</strong> Claude Setup Checklist</p>
        </div>
      `,
    })

    return NextResponse.json({
      success: true,
      message: "Check your email for the checklist!",
    })
  } catch (error) {
    console.error("Error processing lead magnet request:", error)

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}
