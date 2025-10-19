import { NextRequest, NextResponse } from 'next/server'
import { subscribeToNewsletter } from '@/lib/newsletter'
import { z } from 'zod'

const emailSchema = z.object({
  email: z.string().email(),
})

// Simple in-memory rate limiting for development
const rateLimitMap = new Map<string, number[]>()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const MAX_REQUESTS = 3

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const requests = rateLimitMap.get(ip) || []
  const recentRequests = requests.filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW
  )

  if (recentRequests.length >= MAX_REQUESTS) {
    return false
  }

  recentRequests.push(now)
  rateLimitMap.set(ip, recentRequests)
  return true
}

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown'

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { ok: false, error: 'Rate limit exceeded' },
        { status: 429 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const validation = emailSchema.safeParse(body)

    if (!validation.success) {
      return NextResponse.json(
        { ok: false, error: 'Invalid email' },
        { status: 400 }
      )
    }

    const { email } = validation.data

    // Subscribe to newsletter
    const result = await subscribeToNewsletter({ email })

    if (result.ok) {
      return NextResponse.json({ ok: true }, { status: 200 })
    } else {
      return NextResponse.json(
        { ok: false, error: result.error },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Subscribe API error:', error)
    return NextResponse.json(
      { ok: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
