import { NextRequest, NextResponse } from 'next/server';
import Airtable from 'airtable';

// Configure Airtable
const AIRTABLE_PERSONAL_ACCESS_TOKEN = 'pat2PRiR4iEbEhRFV.db7d359a97f7936f437475830c170980279e9e49b87be938e7a8eed0c3a0e2b9';

const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID || 'app1cZoJ2TlJFYjTr';
const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME || 'Email Capture';

const base = new Airtable({
  apiKey: AIRTABLE_PERSONAL_ACCESS_TOKEN,
}).base(AIRTABLE_BASE_ID);

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Create record in Airtable
    const record = await base(AIRTABLE_TABLE_NAME).create([
      {
        fields: {
          Email: email
        }
      }
    ]);

    return NextResponse.json({
      success: true,
      message: 'Email submitted successfully',
      recordId: record[0].id
    });

  } catch (error) {
    console.error('Error submitting to Airtable:', error);
    
    return NextResponse.json(
      { error: 'Failed to submit email. Please try again.' },
      { status: 500 }
    );
  }
}