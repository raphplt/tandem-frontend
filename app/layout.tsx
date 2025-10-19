import { routing } from '@/i18n/routing'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import './globals.css'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale?: string }>
}) {
  const { locale } = await params
  const currentLocale = locale || routing.defaultLocale

  if (!routing.locales.includes(currentLocale as any)) {
    notFound()
  }

  const messages = await getMessages({ locale: currentLocale })

  return (
    <html lang={currentLocale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider locale={currentLocale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
