'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'

export function Footer() {
  const t = useTranslations('tandem.footer')

  return (
    <footer className="border-t border-border/40 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-1">
            <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-[rgb(var(--primary-gradient-from))] to-[rgb(var(--primary-gradient-to))]">
              Tandem
            </span>
            <span className="text-sm text-muted-foreground">
              © 2025 {t('rights')}
            </span>
          </div>

          <div className="flex items-center space-x-6 text-sm">
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('privacy')}
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('terms')}
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('contact')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
