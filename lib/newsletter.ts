type NewsletterProvider = 'resend' | 'loops' | 'beehiiv'

interface SubscribeParams {
  email: string
}

interface SubscribeResult {
  ok: boolean
  error?: string
}

async function subscribeResend(email: string): Promise<SubscribeResult> {
  try {
    const apiKey = process.env.RESEND_API_KEY
    const audienceId = process.env.RESEND_AUDIENCE_ID

    if (!apiKey) {
      throw new Error('RESEND_API_KEY not configured')
    }

    const response = await fetch(
      `https://api.resend.com/audiences/${audienceId}/contacts`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          email,
          unsubscribed: false,
        }),
      }
    )

    if (!response.ok) {
      const error = await response.text()
      console.error('Resend error:', error)
      return { ok: false, error: 'Failed to subscribe' }
    }

    return { ok: true }
  } catch (error) {
    console.error('Resend subscribe error:', error)
    return { ok: false, error: 'Internal error' }
  }
}

async function subscribeLoops(email: string): Promise<SubscribeResult> {
  try {
    const apiKey = process.env.LOOPS_API_KEY

    if (!apiKey) {
      throw new Error('LOOPS_API_KEY not configured')
    }

    const response = await fetch(
      'https://app.loops.so/api/v1/contacts/create',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          email,
        }),
      }
    )

    if (!response.ok) {
      const error = await response.text()
      console.error('Loops error:', error)
      return { ok: false, error: 'Failed to subscribe' }
    }

    return { ok: true }
  } catch (error) {
    console.error('Loops subscribe error:', error)
    return { ok: false, error: 'Internal error' }
  }
}

async function subscribeBeehiiv(email: string): Promise<SubscribeResult> {
  try {
    const apiKey = process.env.BEEHIIV_API_KEY
    const publicationId = process.env.BEEHIIV_PUBLICATION_ID

    if (!apiKey || !publicationId) {
      throw new Error(
        'BEEHIIV_API_KEY or BEEHIIV_PUBLICATION_ID not configured'
      )
    }

    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          email,
          reactivate_existing: false,
          send_welcome_email: true,
        }),
      }
    )

    if (!response.ok) {
      const error = await response.text()
      console.error('Beehiiv error:', error)
      return { ok: false, error: 'Failed to subscribe' }
    }

    return { ok: true }
  } catch (error) {
    console.error('Beehiiv subscribe error:', error)
    return { ok: false, error: 'Internal error' }
  }
}

export async function subscribeToNewsletter({
  email,
}: SubscribeParams): Promise<SubscribeResult> {
  const provider = (process.env.NEWSLETTER_PROVIDER ||
    'resend') as NewsletterProvider

  switch (provider) {
    case 'resend':
      return subscribeResend(email)
    case 'loops':
      return subscribeLoops(email)
    case 'beehiiv':
      return subscribeBeehiiv(email)
    default:
      return { ok: false, error: 'Invalid provider' }
  }
}
