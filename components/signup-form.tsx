'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion, useReducedMotion } from 'framer-motion'
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { toast } from 'sonner'
import { fadeInUp } from '@/lib/animations'

const emailSchema = z.object({
  email: z.string().email(),
})

type EmailFormData = z.infer<typeof emailSchema>

export function SignupForm() {
  const t = useTranslations('tandem.signup')
  const prefersReducedMotion = useReducedMotion()
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
  })

  const onSubmit = async (data: EmailFormData) => {
    setStatus('loading')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.ok) {
        setStatus('success')
        toast.success(t('success'), {
          icon: <CheckCircle2 className="h-5 w-5" />,
        })
        reset()
        setTimeout(() => setStatus('idle'), 3000)
      } else {
        setStatus('error')
        toast.error(t('error'), {
          icon: <AlertCircle className="h-5 w-5" />,
        })
        setTimeout(() => setStatus('idle'), 3000)
      }
    } catch (error) {
      setStatus('error')
      toast.error(t('error'), {
        icon: <AlertCircle className="h-5 w-5" />,
      })
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  return (
    <section id="signup" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? undefined : 'initial'}
          whileInView={prefersReducedMotion ? undefined : 'animate'}
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-2xl mx-auto"
        >
          <Card className="backdrop-blur-sm bg-card/80 border-border/50 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl sm:text-4xl font-bold mb-2">
                {t('title')}
              </CardTitle>
              <p className="text-muted-foreground">{t('subtitle')}</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Input
                    {...register('email')}
                    type="email"
                    placeholder={t('placeholder')}
                    disabled={status === 'loading'}
                    className="h-12 text-base"
                    aria-label="Email address"
                    aria-invalid={errors.email ? 'true' : 'false'}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive mt-2">
                      {t('invalid')}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={status === 'loading' || status === 'success'}
                  className="w-full h-12 bg-gradient-to-r from-[rgb(var(--primary-gradient-from))] to-[rgb(var(--primary-gradient-to))] text-white hover:opacity-90 transition-opacity"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      {t('loading')}
                    </>
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle2 className="mr-2 h-5 w-5" />
                      {t('success')}
                    </>
                  ) : (
                    t('cta')
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
