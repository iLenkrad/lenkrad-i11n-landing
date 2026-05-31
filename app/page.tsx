'use client'

import { LanguageProvider } from '@/components/language-provider'
import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { SolutionsSection } from '@/components/solutions-section'
import { FeaturesSection } from '@/components/features-section'
import { ScreenshotsSection } from '@/components/screenshots-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { FEATURE_FLAGS } from '@/lib/feature-flags'

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <SolutionsSection />
          <FeaturesSection />
          {FEATURE_FLAGS.screenshots ? <ScreenshotsSection /> : null}
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
