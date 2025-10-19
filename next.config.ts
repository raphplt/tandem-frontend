import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./i18n/request.ts')

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    turbo: {
      resolveAlias: {
        canvas: './empty-module.ts',
      },
    },
  },
}

export default withNextIntl(nextConfig)
