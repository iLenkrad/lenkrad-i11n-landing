'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/components/language-provider'
import { LanguageSwitcher } from '@/components/language-switcher'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { FEATURE_FLAGS } from '@/lib/feature-flags'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#solutions', label: t.nav.solutions },
    { href: '#features', label: t.nav.features },
    ...(FEATURE_FLAGS.screenshots ? [{ href: '#screenshots', label: t.nav.screenshots }] : []),
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 h-24 items-center">
          {/* Logo - Column 1 */}
          <div className="flex justify-start">
            <Link href="/" className="flex items-center gap-2 text-primary-foreground">
              <Image 
                src="/logo.svg" 
                alt="Lenkrad Logo" 
                width={240} 
                height={64} 
                className="h-16 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation - Column 2 */}
          <nav className="hidden md:flex items-center justify-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-base font-medium whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Side - Column 3 */}
          <div className="flex items-center justify-end gap-4">
            <div className="text-primary-foreground">
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 bg-primary text-primary-foreground border-none">
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-lg font-medium py-2"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
