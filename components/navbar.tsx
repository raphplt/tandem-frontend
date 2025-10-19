'use client'

import { useTranslations } from 'next-intl'
import { ThemeToggle } from './theme-toggle'
import { LanguageSwitcher } from './language-switcher'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function Navbar() {
  const t = useTranslations('tandem.nav')

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[rgb(var(--primary-gradient-from))] to-[rgb(var(--primary-gradient-to))] hover:opacity-80 transition-opacity"
            >
              Tandem
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <Button
              variant="ghost"
              onClick={() => scrollToSection('features')}
              className="text-sm"
            >
              {t('features')}
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('how')}
              className="text-sm"
            >
              {t('how')}
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('faq')}
              className="text-sm"
            >
              {t('faq')}
            </Button>
            <Button
              onClick={() => scrollToSection('signup')}
              className="ml-2 bg-gradient-to-r from-[rgb(var(--primary-gradient-from))] to-[rgb(var(--primary-gradient-to))] text-white hover:opacity-90 transition-opacity"
            >
              {t('signup')}
            </Button>
          </div>

          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
