import { NextRequest, NextResponse } from "next/server"
import Airtable from "airtable"
import { contactFormSchema } from "@/lib/schemas"

const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID || "app1cZoJ2TlJFYjTr"
const AIRTABLE_CONTACT_TABLE =
  process.env.AIRTABLE_CONTACT_TABLE || "Contact Submissions"

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
