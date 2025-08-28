import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'mode', 'origin', 'destination', 'cargo', 'weightKg']
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Validate weight
    if (typeof body.weightKg !== 'number' || body.weightKg < 1) {
      return NextResponse.json(
        { error: 'Weight must be a positive number' },
        { status: 400 }
      )
    }

    // Get client IP for security
    const clientIP = request.headers.get('x-forwarded-for') || 
                    request.headers.get('x-real-ip') || 
                    'unknown'

    // Prepare email content
    const emailContent = `
New Quote Request Received

Personal Information:
- Name: ${body.name}
- Email: ${body.email}
- Phone: ${body.phone || 'Not provided'}
- Company: ${body.company || 'Not provided'}

Shipment Details:
- Transportation Mode: ${body.mode}
- Incoterms: ${body.incoterms || 'Not specified'}
- Origin: ${body.origin}
- Destination: ${body.destination}
- Cargo Description: ${body.cargo}
- Weight: ${body.weightKg} kg
- Dimensions/Volume: ${body.dimensions || 'Not provided'}
- Ready Date: ${body.readyDate || 'Not specified'}

Technical Information:
- Submission Time: ${new Date().toISOString()}
- Client IP: ${clientIP}
- User Agent: ${request.headers.get('user-agent') || 'Unknown'}

Please respond to this quote request within 2 hours during business hours.
    `.trim()

    // Send email using Resend
    if (resend && process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: 'noreply@yourdomain.com',
        to: process.env.EMAIL_TO || 'info@intelogistic.com',
        subject: `New Quote Request - ${body.name} - ${body.mode} Freight`,
        text: emailContent,
        html: emailContent.replace(/\n/g, '<br>'),
      })
    } else {
      // Fallback: log to console in development
      console.log('Quote request received (development mode):', {
        ...body,
        timestamp: new Date().toISOString(),
        clientIP,
      })
    }

    return NextResponse.json({
      ok: true,
      message: 'Quote request received'
    })

  } catch (error) {
    console.error('Error processing quote request:', error)
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
