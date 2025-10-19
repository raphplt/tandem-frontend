import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'tandem.meta' })

  return {
    title: t('title'),
    description: t('description'),
    keywords: [
      'dating',
      'tandem',
      'app',
      'conversation',
      'match',
      'rencontre',
      'authentic',
    ],
    authors: [{ name: 'Tandem' }],
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
    >
      {children}
      <Toaster position="top-center" richColors />
    </ThemeProvider>
  )
}
