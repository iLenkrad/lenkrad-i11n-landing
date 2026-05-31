export type Locale = 'tr' | 'en'

export const translations = {
  tr: {
    // Navigation
    nav: {
      features: 'Özellikler',
      solutions: 'Çözümler',
      screenshots: 'Ekran Görüntüleri',
      contact: 'İletişim',
    },
    // Hero Section
    hero: {
      title: 'White Label GPS Takip ve IoT Platformu',
      subtitle: 'Kendi markanız altında, özelleştirilebilir kullanıcı arayüzü ile bulut veya şirket içi (on-premises) dağıtım seçenekleri sunan, savaşta test edilmiş ölçeklenebilir çözüm.',
      contactUs: 'Bizimle İletişime Geçin',
      learnMore: 'Daha Fazla Bilgi',
    },
    // Solutions Section
    solutions: {
      title: 'Neden Lenkrad?',
      subtitle: 'Her ölçekte işletme için esnek, güçlü ve güvenilir GPS takip altyapısı',
      whiteLabel: {
        title: 'White Label Çözüm',
        description: 'Kendi markanız, logonuz ve özelleştirilmiş kullanıcı arayüzü ile tam teşekküllü bir takip platformu sunun. Müşterileriniz sadece sizin markanızı görür.',
      },
      deployment: {
        title: 'Esnek Dağıtım',
        description: 'Bulut tabanlı veya şirket içi (on-premises) dağıtım seçenekleri ile verilerinizin kontrolü sizde. İhtiyaçlarınıza göre hibrit çözümler de mümkün.',
      },
      scale: {
        title: 'Savaşta Test Edilmiş Ölçek',
        description: 'Her küme başına yüz binlerce cihazı destekleyen, üretim ortamında kanıtlanmış altyapı. Yüksek kullanılabilirlik ve güvenilirlik garantisi.',
      },
      api: {
        title: 'Kapsamlı API',
        description: 'RESTful API ve webhook desteği ile mevcut sistemlerinize kolayca entegre edin. Detaylı dokümantasyon ve SDK desteği.',
      },
      protocols: {
        title: 'Çoklu Protokol Desteği',
        description: 'Piyasadaki birçok cihaz protokolünü destekliyoruz. İhtiyaç duyulan yeni protokoller hızla implemente edilebilir.',
      },
      customization: {
        title: 'Tam Özelleştirme',
        description: 'Raporlar, uyarılar, gösterge paneli ve tüm kullanıcı deneyimi ihtiyaçlarınıza göre özelleştirilebilir.',
      },
    },
    // Features Section (keeping existing but updating context)
    alerts: {
      title: 'Uyarılar',
      description: 'Herhangi bir uyarıyı etkinleştirerek, bir olay meydana geldiğinde bildirim, SMS, telefon araması veya Telegram botu aracılığıyla haberdar olabilirsiniz.',
      engineOnOff: 'Motor Açma/Kapatma Uyarısı',
      speeding: 'Hız Aşımı Uyarısı',
      movement: 'Hareket Uyarısı',
      powerCut: 'Güç Kesintisi Uyarısı',
      andMore: 've daha fazlası...',
    },
    locationHistory: {
      title: 'Konum Geçmişi',
      description: 'Son bir gün veya özel bir zaman aralığında aracın konum geçmişini istediğiniz hızda animasyon olarak görüntüleyebilirsiniz.',
      distance: 'Kat edilen mesafeyi görüntüle',
      stops: 'Durak noktalarını ve süresini görüntüle',
      speed: 'Hareket hızını görüntüle',
    },
    geofencing: {
      title: 'Coğrafi Sınır Belirleme',
      description: 'Harita üzerinde istediğiniz coğrafi sınırı çizerek, takip cihazı bu alana girdiğinde veya çıktığında bildirim alabilirsiniz.',
      entryExit: 'Giriş veya çıkış bildirimi al',
      reports: 'Bölgelerden yazdırılabilir rapor al',
      unlimited: 'Sınırsız bölge oluşturma',
    },
    security: {
      title: 'Güvenlik',
      description: 'Parmak izi ile giriş, iki aşamalı doğrulama ve aktif oturum yönetimi gibi kurumsal düzeyde güvenlik özellikleri.',
    },
    reports: {
      title: 'Raporlar',
      description: 'Durak, hız, filo, motor açma/kapatma raporları gibi çeşitli detaylı ve filtrelenebilir raporlara erişim.',
    },
    navigation: {
      title: 'Araca Navigasyon',
      description: 'Google Maps, Waze ve diğer harita uygulamaları ile entegre navigasyon desteği.',
    },
    // Screenshots Section
    screenshots: {
      title: 'Platform Ekran Görüntüleri',
    },
    // Contact Section
    contact: {
      title: 'Bizimle İletişime Geçin',
      description: 'White label GPS takip platformumuz hakkında daha fazla bilgi almak, demo talep etmek veya iş birliği fırsatlarını görüşmek için bizimle iletişime geçin.',
      email: 'E-posta',
      emailAddress: 'b2b@lenkrad.com.tr',
      linkedin: 'LinkedIn',
      linkedinHandle: 'Lenkrad',
      cta: 'E-posta Gönder',
    },
    // Footer
    footer: {
      rights: 'Tüm hakları saklıdır. Lenkrad - White Label GPS Takip ve IoT Platformu.',
      linkedin: 'LinkedIn',
    },
    // Language
    language: {
      tr: 'Türkçe',
      en: 'English',
    },
  },
  en: {
    // Navigation
    nav: {
      features: 'Features',
      solutions: 'Solutions',
      screenshots: 'Screenshots',
      contact: 'Contact',
    },
    // Hero Section
    hero: {
      title: 'White Label GPS Tracking & IoT Platform',
      subtitle: 'Battle-tested, scalable solution with cloud or on-premises deployment options, customizable UI, all under your own brand.',
      contactUs: 'Contact Us',
      learnMore: 'Learn More',
    },
    // Solutions Section
    solutions: {
      title: 'Why Lenkrad?',
      subtitle: 'Flexible, powerful, and reliable GPS tracking infrastructure for businesses of all sizes',
      whiteLabel: {
        title: 'White Label Solution',
        description: 'Offer a full-featured tracking platform with your own brand, logo, and customized user interface. Your customers only see your brand.',
      },
      deployment: {
        title: 'Flexible Deployment',
        description: 'Cloud-based or on-premises deployment options keep you in control of your data. Hybrid solutions are also available based on your needs.',
      },
      scale: {
        title: 'Battle-Tested Scale',
        description: 'Production-proven infrastructure supporting hundreds of thousands of devices per cluster. High availability and reliability guaranteed.',
      },
      api: {
        title: 'Comprehensive API',
        description: 'Easily integrate with your existing systems through RESTful API and webhook support. Detailed documentation and SDK support included.',
      },
      protocols: {
        title: 'Multi-Protocol Support',
        description: 'We support many device protocols on the market. New protocols can be quickly implemented as needed.',
      },
      customization: {
        title: 'Full Customization',
        description: 'Reports, alerts, dashboard, and the entire user experience can be customized according to your needs.',
      },
    },
    // Features Section
    alerts: {
      title: 'Alerts',
      description: 'By activating any alert, you can be notified via notification, SMS, phone call, or Telegram bot when an event occurs.',
      engineOnOff: 'Engine On/Off Alert',
      speeding: 'Speeding Alert',
      movement: 'Movement Alert',
      powerCut: 'Power Cut Alert',
      andMore: 'and more...',
    },
    locationHistory: {
      title: 'Location History',
      description: 'View the vehicle location history from the past day or a custom time range as an animation at your desired speed.',
      distance: 'View distance traveled',
      stops: 'View stop points and duration',
      speed: 'View movement speed',
    },
    geofencing: {
      title: 'Geofencing',
      description: 'Draw your desired geographic boundary on the map and receive notifications when the tracker enters or exits that area.',
      entryExit: 'Get entry or exit notifications',
      reports: 'Get printable reports from zones',
      unlimited: 'Create unlimited zones',
    },
    security: {
      title: 'Security',
      description: 'Enterprise-grade security features including fingerprint login, two-factor authentication, and active session management.',
    },
    reports: {
      title: 'Reports',
      description: 'Access to various detailed and filterable reports such as stop, speed, fleet, and engine on/off reports.',
    },
    navigation: {
      title: 'Navigate to Vehicle',
      description: 'Integrated navigation support with Google Maps, Waze, and other map applications.',
    },
    // Screenshots Section
    screenshots: {
      title: 'Platform Screenshots',
    },
    // Contact Section
    contact: {
      title: 'Contact Us',
      description: 'Get in touch to learn more about our white label GPS tracking platform, request a demo, or discuss partnership opportunities.',
      email: 'Email',
      emailAddress: 'b2b@lenkrad.com.tr',
      linkedin: 'LinkedIn',
      linkedinHandle: 'Lenkrad',
      cta: 'Send Email',
    },
    // Footer
    footer: {
      rights: 'All rights reserved. Lenkrad - White Label GPS Tracking & IoT Platform.',
      linkedin: 'LinkedIn',
    },
    // Language
    language: {
      tr: 'Türkçe',
      en: 'English',
    },
  },
} as const

export function getTranslation(locale: Locale) {
  return translations[locale]
}
