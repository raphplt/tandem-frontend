import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { FeatureCards } from '@/components/feature-cards'
import { Steps } from '@/components/steps'
import { Testimonials } from '@/components/testimonials'
import { SignupForm } from '@/components/signup-form'
import { FAQ } from '@/components/faq'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <FeatureCards />
        <Steps />
        <Testimonials />
        <SignupForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
