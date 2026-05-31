'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'
import { MapPin, Linkedin } from 'lucide-react'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="py-8 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 text-secondary-foreground">
            <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-secondary-foreground">
              <MapPin className="h-4 w-4" />
            </div>
            <span className="text-xl font-bold tracking-wide">LENKRAD</span>
          </div>

          {/* LinkedIn */}
          <Link 
            href="https://linkedin.com/company/lenkrad" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span className="text-sm font-medium">{t.footer.linkedin}</span>
          </Link>

          {/* Copyright */}
          <p className="text-secondary-foreground/70 text-sm text-center">
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
