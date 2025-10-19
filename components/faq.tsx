'use client'

import { useTranslations } from 'next-intl'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { motion, useReducedMotion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

const questions = ['q1', 'q2', 'q3', 'q4', 'q5']

export function FAQ() {
  const t = useTranslations('tandem.faq')
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
            {t('title')}
          </h2>

          <Accordion type="single" collapsible className="w-full">
            {questions.map((q, index) => (
              <motion.div
                key={q}
                initial={
                  prefersReducedMotion ? undefined : { opacity: 0, y: 10 }
                }
                whileInView={
                  prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
                }
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <AccordionItem value={q} className="border-border/50">
                  <AccordionTrigger className="text-left hover:text-primary transition-colors">
                    {t(`${q}.question`)}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {t(`${q}.answer`)}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
