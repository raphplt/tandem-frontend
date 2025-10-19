'use client'

import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { GradientOrb } from './gradient-orb'
import { motion, useReducedMotion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { MessageCircle, Sparkles, Timer } from 'lucide-react'

export function Hero() {
  const t = useTranslations('tandem.hero')
  const prefersReducedMotion = useReducedMotion()

  const scrollToSignup = () => {
    const element = document.getElementById('signup')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const conversationCards = [
    { icon: MessageCircle, text: 'Salut ! Comment ça va ?', delay: 0.2 },
    { icon: Sparkles, text: 'Super bien, et toi ?', delay: 0.4 },
    { icon: Timer, text: '23h restantes', delay: 0.6 },
  ]

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Gradient Orbs */}
      {!prefersReducedMotion && (
        <>
          <GradientOrb className="w-96 h-96 -top-48 -left-48" delay={0} />
          <GradientOrb className="w-96 h-96 -bottom-48 -right-48" delay={2} />
        </>
      )}

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[rgb(var(--primary-gradient-from))] to-[rgb(var(--primary-gradient-to))]">
              {t('title')}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            {t('subtitle')}
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Button
              size="lg"
              onClick={scrollToSignup}
              className="bg-gradient-to-r from-[rgb(var(--primary-gradient-from))] to-[rgb(var(--primary-gradient-to))] text-white hover:opacity-90 transition-opacity text-lg px-8 py-6 h-auto"
            >
              {t('cta')}
            </Button>
          </motion.div>

          {/* Animated Conversation Cards */}
          <motion.div
            variants={staggerContainer}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
          >
            {conversationCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: card.delay,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
              >
                <Card className="p-6 backdrop-blur-sm bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <card.icon className="h-8 w-8 mb-3 text-primary mx-auto" />
                  <p className="text-sm text-muted-foreground">{card.text}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
