'use client'

import { useTranslations } from 'next-intl'
import { Card, CardContent } from '@/components/ui/card'
import { motion, useReducedMotion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const testimonials = ['1', '2', '3']

export function Testimonials() {
  const t = useTranslations('tandem.testimonials')
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? undefined : 'initial'}
          whileInView={prefersReducedMotion ? undefined : 'animate'}
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16"
          >
            {t('title')}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((key) => (
              <motion.div key={key} variants={fadeInUp}>
                <Card className="h-full backdrop-blur-sm bg-card/80 border-border/50 hover:border-primary/50 transition-all duration-300">
                  <CardContent className="pt-6">
                    <Quote className="h-8 w-8 text-primary/40 mb-4" />
                    <p className="text-foreground mb-4 italic">
                      {t(`items.${key}.text`)}
                    </p>
                    <p className="text-sm text-muted-foreground font-medium">
                      — {t(`items.${key}.author`)}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
