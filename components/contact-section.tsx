'use client'

import { useLanguage } from '@/components/language-provider'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Linkedin, ArrowRight } from 'lucide-react'

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.contact.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            {t.contact.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Email Card */}
          <Card className="bg-card border-border hover:shadow-xl transition-all group">
            <CardHeader className="pb-4">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Mail className="h-7 w-7 text-primary" />
              </div>
              <CardTitle className="text-xl text-foreground">{t.contact.email}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground font-medium text-lg">
                {t.contact.emailAddress}
              </p>
              <Button 
                className="w-full bg-primary hover:bg-primary/90"
                asChild
              >
                <a href={`mailto:${t.contact.emailAddress}`}>
                  {t.contact.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* LinkedIn Card */}
          <Card className="bg-card border-border hover:shadow-xl transition-all group">
            <CardHeader className="pb-4">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Linkedin className="h-7 w-7 text-primary" />
              </div>
              <CardTitle className="text-xl text-foreground">{t.contact.linkedin}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground font-medium text-lg">
                {t.contact.linkedinHandle}
              </p>
              <Button 
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a href="https://www.linkedin.com/company/lenkradgps/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
