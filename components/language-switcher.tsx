'use client'

import { useLanguage } from '@/components/language-provider'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Globe } from 'lucide-react'

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2 text-inherit hover:bg-secondary/20">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{locale === 'tr' ? 'TR' : 'EN'}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => setLocale('tr')}
          className={locale === 'tr' ? 'bg-accent' : ''}
        >
          🇹🇷 {t.language.tr}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLocale('en')}
          className={locale === 'en' ? 'bg-accent' : ''}
        >
          🇬🇧 {t.language.en}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
