'use client'

import { useLanguage } from '@/components/language-provider'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Users, 
  ShieldCheck, 
  BellRing, 
  Bot, 
  BarChart3, 
  LayoutDashboard, 
  Globe, 
  Lock, 
  MessageSquare, 
  Truck, 
  ShoppingCart, 
  MapPin, 
  Layers,
  Briefcase,
  UserCircle
} from 'lucide-react'

export function FeaturesSection() {
  const { t } = useLanguage()

  const adminFeatures = [
    { icon: LayoutDashboard, label: t.platformFeatures.admin.multiLevelAdmin },
    { icon: Briefcase, label: t.platformFeatures.admin.wholesaleCRM },
    { icon: Layers, label: t.platformFeatures.admin.resellerDashboards },
    { icon: BarChart3, label: t.platformFeatures.admin.analyticalDashboards },
    { icon: MapPin, label: t.platformFeatures.admin.geoLimiting },
    { icon: ShoppingCart, label: t.platformFeatures.admin.packagePurchases },
  ]

  const endUserFeatures = [
    { icon: UserCircle, label: t.platformFeatures.endUser.subAccounts },
    { icon: ShieldCheck, label: t.platformFeatures.endUser.accessControl },
    { icon: BellRing, label: t.platformFeatures.endUser.pushNotifications },
    { icon: Bot, label: t.platformFeatures.endUser.messengerBots },
    { icon: Truck, label: t.platformFeatures.endUser.fleetReports },
  ]

  const systemFeatures = [
    { icon: MessageSquare, label: t.platformFeatures.system.aiSupport },
    { icon: Lock, label: t.platformFeatures.system.airGapped },
    { icon: Globe, label: t.platformFeatures.system.i18n },
  ]

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.nav.features}
          </h2>
        </div>

        <div className="space-y-16">
          {/* Admin & Sales */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-primary border-l-4 border-primary pl-4">
              {t.platformFeatures.admin.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {adminFeatures.map((feature, index) => (
                <Card key={index} className="bg-card border-border hover:shadow-md transition-all">
                  <CardHeader className="flex flex-row items-center space-x-4 py-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-base font-medium">{feature.label}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* End User Features */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-primary border-l-4 border-primary pl-4">
              {t.platformFeatures.endUser.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {endUserFeatures.map((feature, index) => (
                <Card key={index} className="bg-card border-border hover:shadow-md transition-all">
                  <CardHeader className="flex flex-row items-center space-x-4 py-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-base font-medium">{feature.label}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* System & Security */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-primary border-l-4 border-primary pl-4">
              {t.platformFeatures.system.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {systemFeatures.map((feature, index) => (
                <Card key={index} className="bg-card border-border hover:shadow-md transition-all">
                  <CardHeader className="flex flex-row items-center space-x-4 py-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-base font-medium">{feature.label}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
