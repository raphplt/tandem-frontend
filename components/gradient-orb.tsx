'use client'

import { motion } from 'framer-motion'

interface GradientOrbProps {
  className?: string
  delay?: number
}

export function GradientOrb({ className = '', delay = 0 }: GradientOrbProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: [0.4, 0.6, 0.4],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
      className={`absolute rounded-full blur-3xl ${className}`}
      style={{
        background:
          'radial-gradient(circle, rgb(var(--primary-gradient-from)) 0%, rgb(var(--primary-gradient-to)) 100%)',
      }}
    />
  )
}
