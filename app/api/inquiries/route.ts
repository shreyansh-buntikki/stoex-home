import { NextRequest, NextResponse } from 'next/server';

interface InquiryData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: InquiryData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.phone) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Please fill in all required fields (Name, Email, and Phone)' 
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Please enter a valid email address' 
        },
        { status: 400 }
      );
    }

    // Log the inquiry (in a real implementation, you would save this to a database)
    console.log('========================================');
    console.log('📩 [API] New inquiry received');
    console.log('📩 [API] Name:', body.name);
    console.log('📩 [API] Email:', body.email);
    console.log('📩 [API] Phone:', body.phone);
    console.log('📩 [API] Company:', body.company || 'Not provided');
    console.log('📩 [API] Message:', body.message || 'Not provided');
    console.log('📩 [API] Timestamp:', new Date().toISOString());
    console.log('========================================');

    // In a real implementation, you would:
    // 1. Save the inquiry to a database
    // 2. Send notifications to relevant team members
    // 3. Possibly trigger email notifications (using a proper email service)
    
    // For now, we'll just log it and return success
    return NextResponse.json({
      success: true,
      message: 'Inquiry submitted successfully! We\'ll get back to you soon.'
    });

  } catch (error) {
    console.error('Error processing inquiry:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'An unexpected error occurred. Please try again later.' 
      },
      { status: 500 }
    );
  }
}
