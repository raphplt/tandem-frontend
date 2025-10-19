import { z } from 'zod'

const emailSchema = z.object({
  email: z.string().email(),
})

describe('Email Validation', () => {
  it('should validate correct email addresses', () => {
    const validEmails = [
      'test@example.com',
      'user+tag@domain.co.uk',
      'name.surname@company.org',
    ]

    validEmails.forEach((email) => {
      const result = emailSchema.safeParse({ email })
      expect(result.success).toBe(true)
    })
  })

  it('should reject invalid email addresses', () => {
    const invalidEmails = [
      'notanemail',
      '@example.com',
      'user@',
      'user @example.com',
      '',
    ]

    invalidEmails.forEach((email) => {
      const result = emailSchema.safeParse({ email })
      expect(result.success).toBe(false)
    })
  })

  it('should reject non-string values', () => {
    const invalidValues = [
      { email: 123 },
      { email: null },
      { email: undefined },
      { email: {} },
    ]

    invalidValues.forEach((value) => {
      const result = emailSchema.safeParse(value)
      expect(result.success).toBe(false)
    })
  })
})
