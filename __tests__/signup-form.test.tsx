import { render, screen } from '@testing-library/react'
import { NextIntlClientProvider } from 'next-intl'
import { SignupForm } from '@/components/signup-form'

// Mock translations
const messages = {
  tandem: {
    signup: {
      title: 'Ready to join Tandem?',
      subtitle: 'Sign up for the waitlist',
      placeholder: 'your@email.com',
      cta: 'Join the waitlist',
      success: 'Thank you!',
      error: 'An error occurred',
      loading: 'Signing up...',
      invalid: 'Invalid email',
    },
  },
}

describe('SignupForm', () => {
  it('renders the form with all elements', () => {
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <SignupForm />
      </NextIntlClientProvider>
    )

    expect(screen.getByText('Ready to join Tandem?')).toBeInTheDocument()
    expect(screen.getByText('Sign up for the waitlist')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('your@email.com')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /join the waitlist/i })
    ).toBeInTheDocument()
  })

  it('has proper accessibility attributes', () => {
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <SignupForm />
      </NextIntlClientProvider>
    )

    const input = screen.getByPlaceholderText('your@email.com')
    expect(input).toHaveAttribute('type', 'email')
    expect(input).toHaveAttribute('aria-label', 'Email address')
  })
})
