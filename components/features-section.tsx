'use client'

import { useLanguage } from '@/components/language-provider'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Bell, Car, Gauge, Move, Zap, History, MapPinned, CheckCircle, Shield, FileText, Navigation } from 'lucide-react'

export function FeaturesSection() {
  const { t } = useLanguage()

  const alertFeatures = [
    { icon: Car, label: t.alerts.engineOnOff },
    { icon: Gauge, label: t.alerts.speeding },
    { icon: Move, label: t.alerts.movement },
    { icon: Zap, label: t.alerts.powerCut },
  ]

  const locationFeatures = [
    { label: t.locationHistory.distance },
    { label: t.locationHistory.stops },
    { label: t.locationHistory.speed },
  ]

  const geofenceFeatures = [
    { label: t.geofencing.entryExit },
    { label: t.geofencing.reports },
    { label: t.geofencing.unlimited },
  ]

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Alerts Card */}
          <Card className="bg-card border-border hover:shadow-xl transition-all">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Bell className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl text-foreground">{t.alerts.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{t.alerts.description}</p>
              <ul className="space-y-3">
                {alertFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm text-foreground">
                    <feature.icon className="h-4 w-4 text-primary flex-shrink-0" />
                    {feature.label}
                  </li>
                ))}
                <li className="text-sm text-muted-foreground italic">{t.alerts.andMore}</li>
              </ul>
            </CardContent>
          </Card>

          {/* Location History Card */}
          <Card className="bg-card border-border hover:shadow-xl transition-all">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <History className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl text-foreground">{t.locationHistory.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{t.locationHistory.description}</p>
              <ul className="space-y-3">
                {locationFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    {feature.label}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Geofencing Card */}
          <Card className="bg-card border-border hover:shadow-xl transition-all">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <MapPinned className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl text-foreground">{t.geofencing.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{t.geofencing.description}</p>
              <ul className="space-y-3">
                {geofenceFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    {feature.label}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Security Card */}
          <Card className="bg-card border-border hover:shadow-xl transition-all">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl text-foreground">{t.security.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm leading-relaxed">{t.security.description}</p>
            </CardContent>
          </Card>

          {/* Reports Card */}
          <Card className="bg-card border-border hover:shadow-xl transition-all">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl text-foreground">{t.reports.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm leading-relaxed">{t.reports.description}</p>
            </CardContent>
          </Card>

          {/* Navigation Card */}
          <Card className="bg-card border-border hover:shadow-xl transition-all">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Navigation className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl text-foreground">{t.navigation.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm leading-relaxed">{t.navigation.description}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
