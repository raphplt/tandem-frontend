'use client'

import { useTranslations } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion, useReducedMotion } from 'framer-motion'
import { Rocket, MessageSquare, CheckCircle2 } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const steps = [
  { key: 'l1', icon: Rocket },
  { key: 'l2', icon: MessageSquare },
  { key: 'l3', icon: CheckCircle2 },
]

export function Steps() {
  const t = useTranslations('tandem.steps')
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="how" className="py-24">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-20 left-[16.666%] right-[16.666%] h-0.5 bg-gradient-to-r from-[rgb(var(--primary-gradient-from))] to-[rgb(var(--primary-gradient-to))] opacity-20" />

            {steps.map((step, index) => (
              <motion.div
                key={step.key}
                variants={fadeInUp}
                className="relative"
              >
                <Card className="text-center backdrop-blur-sm bg-card/80 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-r from-[rgb(var(--primary-gradient-from))] to-[rgb(var(--primary-gradient-to))] flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">
                      {t(`${step.key}.title`)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {t(`${step.key}.description`)}
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
