'use client'

import { useTranslations } from 'next-intl'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion, useReducedMotion } from 'framer-motion'
import { Target, Users, Clock, Sparkles } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const features = [
  { key: 'one', icon: Target },
  { key: 'active', icon: Users },
  { key: 'timer', icon: Clock },
  { key: 'icebreaker', icon: Sparkles },
]

export function FeatureCards() {
  const t = useTranslations('tandem.features')
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="features" className="py-24 bg-muted/30">
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
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4"
          >
            {t('title')}
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          >
            {features.map((feature) => (
              <motion.div key={feature.key} variants={fadeInUp}>
                <Card className="h-full backdrop-blur-sm bg-card/80 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">
                      {t(`items.${feature.key}.title`)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {t(`items.${feature.key}.description`)}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
