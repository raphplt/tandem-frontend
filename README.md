# Tandem Landing Page 🚀

A modern, production-ready landing page for Tandem - the dating app that prioritizes quality conversations. Built with Next.js 15, TypeScript, TailwindCSS v4, and shadcn/ui.

## ✨ Features

- 🌍 **Internationalization**: Full i18n support (FR/EN) with next-intl
- 🎨 **Modern Design**: Ultra-modern UI with gradient effects and glassmorphism
- 🌓 **Dark/Light Mode**: Seamless theme switching with next-themes
- 🎭 **Animations**: Subtle, performant animations with Framer Motion
- 📱 **Responsive**: Mobile-first design, looks great on all devices
- ♿ **Accessible**: WCAG AA compliant with proper ARIA labels
- 🚀 **Performance**: Optimized for Core Web Vitals
- 📧 **Newsletter**: Integrated email subscription (Resend/Loops/Beehiiv)
- 🧪 **Tested**: Unit tests with Jest and React Testing Library
- 📊 **SEO Optimized**: Dynamic OG images, sitemap, and robots.txt

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: TailwindCSS v4
- **UI Components**: shadcn/ui (Radix primitives)
- **Animations**: Framer Motion
- **Internationalization**: next-intl
- **Forms**: react-hook-form + zod
- **Newsletter**: Resend/Loops/Beehiiv (configurable)
- **Testing**: Jest + React Testing Library
- **Code Quality**: ESLint + Prettier

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tandem-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file:
```env
# Locale configuration
NEXT_PUBLIC_DEFAULT_LOCALE=fr

# Newsletter provider: "resend", "loops", or "beehiiv"
NEWSLETTER_PROVIDER=resend

# Resend (if using Resend)
RESEND_API_KEY=your_resend_api_key_here
RESEND_AUDIENCE_ID=your_audience_id_here

# Loops (if using Loops)
LOOPS_API_KEY=your_loops_api_key_here

# Beehiiv (if using Beehiiv)
BEEHIIV_API_KEY=your_beehiiv_api_key_here
BEEHIIV_PUBLICATION_ID=your_publication_id_here
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## 🧩 Project Structure

```
tandem-frontend/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx          # Locale-specific layout
│   │   └── page.tsx            # Landing page
│   ├── api/
│   │   └── subscribe/
│   │       └── route.ts        # Newsletter API endpoint
│   ├── layout.tsx              # Root layout
│   ├── globals.css             # Global styles
│   ├── opengraph-image.tsx     # Dynamic OG image
│   ├── robots.ts               # Robots.txt
│   └── sitemap.ts              # Sitemap
├── components/
│   ├── ui/                     # shadcn/ui components
│   ├── hero.tsx                # Hero section
│   ├── feature-cards.tsx       # Features section
│   ├── steps.tsx               # How it works section
│   ├── testimonials.tsx        # Testimonials
│   ├── signup-form.tsx         # Newsletter form
│   ├── faq.tsx                 # FAQ section
│   ├── navbar.tsx              # Navigation
│   ├── footer.tsx              # Footer
│   ├── theme-toggle.tsx        # Dark/light mode toggle
│   ├── language-switcher.tsx   # Language selector
│   ├── gradient-orb.tsx        # Animated gradient orb
│   └── theme-provider.tsx      # Theme provider
├── i18n/
│   ├── routing.ts              # i18n routing config
│   └── request.ts              # i18n request config
├── lib/
│   ├── animations.ts           # Framer Motion variants
│   ├── newsletter.ts           # Newsletter service
│   └── utils.ts                # Utility functions
├── messages/
│   ├── fr.json                 # French translations
│   └── en.json                 # English translations
├── __tests__/
│   ├── validation.test.ts      # Validation tests
│   └── signup-form.test.tsx    # Component tests
└── middleware.ts               # i18n middleware
```

## 🎨 Design System

### Color Palette

- **Background (Light)**: `#F7F7F8`
- **Background (Dark)**: `#0B0B0C`
- **Primary Gradient**: `#6E7AF0` → `#9B6EF0`
- **Muted**: `#9EA3AF`

### Typography

- **Font Family**: system-ui, Inter
- **Headings**: 2.5rem - 4rem (responsive)
- **Body**: 1rem - 1.25rem

## 🚀 Scripts

```bash
# Development
npm run dev              # Start dev server with Turbopack

# Production
npm run build            # Build for production
npm start                # Start production server

# Code Quality
npm run lint             # Run ESLint
npm run lint:fix         # Fix ESLint errors
npm run type-check       # TypeScript type checking
npm run format           # Format with Prettier

# Testing
npm test                 # Run tests in watch mode
npm run test:ci          # Run tests in CI mode
```

## 🌐 Internationalization

The app supports French (default) and English. To add more languages:

1. Add the locale to `i18n/routing.ts`:
```ts
export const routing = defineRouting({
  locales: ['fr', 'en', 'de'], // Add 'de'
  defaultLocale: 'fr',
})
```

2. Create a new translation file in `messages/de.json`

3. The app will automatically support the new locale

## 📧 Newsletter Configuration

The app supports three newsletter providers out of the box:

### Resend
```env
NEWSLETTER_PROVIDER=resend
RESEND_API_KEY=re_xxx
RESEND_AUDIENCE_ID=xxx
```

### Loops
```env
NEWSLETTER_PROVIDER=loops
LOOPS_API_KEY=xxx
```

### Beehiiv
```env
NEWSLETTER_PROVIDER=beehiiv
BEEHIIV_API_KEY=xxx
BEEHIIV_PUBLICATION_ID=xxx
```

## 🎭 Animations

All animations respect the `prefers-reduced-motion` user preference. Animations are disabled automatically for users who prefer reduced motion.

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators
- Color contrast ratios meet WCAG AA standards
- Screen reader friendly

## 🔒 Security & Privacy

- Rate limiting on newsletter subscription (3 requests per minute per IP)
- Server-side email validation
- No tracking without user consent
- GDPR-ready structure

## 📊 Performance

- **Image Optimization**: Next.js Image component with AVIF/WebP
- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: Components loaded on demand
- **CSS**: TailwindCSS v4 with JIT compilation
- **Fonts**: System fonts for instant loading

Target Lighthouse scores:
- Performance: ≥ 90
- Accessibility: ≥ 90
- Best Practices: ≥ 90
- SEO: ≥ 90

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables
4. Deploy

The app is optimized for Vercel's Edge Runtime where applicable.

### Other Platforms

The app can be deployed on any platform that supports Next.js 15:
- Netlify
- AWS Amplify
- Digital Ocean App Platform
- Railway
- Render

## 🧪 Testing

Run tests:
```bash
npm test
```

Tests include:
- Email validation schema
- Form component rendering
- Accessibility attributes

## 📝 License

MIT License - See LICENSE file for details

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Contact

For questions or support, reach out to: [contact@tandem.app](mailto:contact@tandem.app)

---

Built with ❤️ by the Tandem team
