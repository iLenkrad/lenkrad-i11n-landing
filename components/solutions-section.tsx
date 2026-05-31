'use client'

import { useLanguage } from '@/components/language-provider'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Tag, 
  Cloud, 
  Server, 
  Code, 
  Layers,
  Palette
} from 'lucide-react'

export function SolutionsSection() {
  const { t } = useLanguage()

  const solutions = [
    {
      icon: Tag,
      title: t.solutions.whiteLabel.title,
      description: t.solutions.whiteLabel.description,
    },
    {
      icon: Cloud,
      title: t.solutions.deployment.title,
      description: t.solutions.deployment.description,
    },
    {
      icon: Server,
      title: t.solutions.scale.title,
      description: t.solutions.scale.description,
    },
    {
      icon: Code,
      title: t.solutions.api.title,
      description: t.solutions.api.description,
    },
    {
      icon: Layers,
      title: t.solutions.protocols.title,
      description: t.solutions.protocols.description,
    },
    {
      icon: Palette,
      title: t.solutions.customization.title,
      description: t.solutions.customization.description,
    },
  ]

  return (
    <section id="solutions" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.solutions.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            {t.solutions.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:shadow-xl hover:border-primary/20 transition-all group"
            >
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <solution.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
