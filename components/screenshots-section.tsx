'use client'

import Image from 'next/image'
import { useLanguage } from '@/components/language-provider'
import { Card } from '@/components/ui/card'

const screenshots = [
  { src: '/images/screenshot-1.jpg', alt: 'Tracker Map View' },
  { src: '/images/screenshot-2.jpg', alt: 'Reports Dashboard' },
  { src: '/images/screenshot-3.jpg', alt: 'Alerts Settings' },
  { src: '/images/screenshot-4.jpg', alt: 'Geofencing' },
]

export function ScreenshotsSection() {
  const { t } = useLanguage()

  return (
    <section id="screenshots" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.screenshots.title}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {screenshots.map((screenshot, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-border bg-card hover:shadow-xl transition-all hover:scale-105"
            >
              <div className="relative aspect-[9/16]">
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
