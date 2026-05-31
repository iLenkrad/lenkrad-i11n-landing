'use client'

import Image from 'next/image'
import { useLanguage } from '@/components/language-provider'
import { Button } from '@/components/ui/button'
import { ArrowDown, ArrowRight } from 'lucide-react'

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen bg-primary overflow-hidden pt-16">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Content - Phone Image */}
          <div className="relative flex justify-center lg:justify-start order-1 lg:order-1">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <Image
                src="/images/hero-phone.png"
                alt="Lenkrad Platform Interface"
                width={600}
                height={800}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Content - Text */}
          <div className="text-center lg:text-right order-2 lg:order-2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight text-balance">
              {t.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mx-auto lg:ml-auto lg:mr-0 leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <Button
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base font-medium px-8"
                asChild
              >
                <a href="#contact">
                  {t.hero.contactUs}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground hover:text-primary text-base font-medium px-8"
                asChild
              >
                <a href="#solutions">
                  {t.hero.learnMore}
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-primary-foreground/60" />
        </div>
      </div>
    </section>
  )
}
