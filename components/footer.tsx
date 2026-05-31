'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/components/language-provider'
import { Linkedin } from 'lucide-react'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="py-8 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-secondary-foreground">
            <Image 
              src="/logo.svg" 
              alt="Lenkrad Logo" 
              width={120} 
              height={30} 
              className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
          </Link>

          {/* LinkedIn */}
          <Link 
            href="https://www.linkedin.com/company/lenkradgps/" 
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
