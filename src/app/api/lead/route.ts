import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, phone, zip, serviceType } = body;

    // Validate required fields
    if (!name || !email || !zip || !serviceType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate ZIP code (Orlando: 32xxx, South Florida: 33xxx)
    if (!zip.startsWith('32') && !zip.startsWith('33')) {
      return NextResponse.json(
        { error: 'We currently only serve Orlando and South Florida' },
        { status: 400 }
      );
    }

    // Log the lead (in production, send to CRM, email, etc.)
    console.log('New lead received:', {
      name,
      email,
      phone,
      zip,
      serviceType,
      serviceArea: zip.startsWith('32') ? 'Orlando' : 'South Florida',
      timestamp: new Date().toISOString(),
    });

    // TODO: Integrate with your CRM/email service here
    // Examples:
    // - SendGrid: Send email notification
    // - HubSpot: Create contact
    // - Zapier webhook: Trigger automation
    // - Supabase/Firebase: Store in database

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! We will contact you within 24 hours.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
