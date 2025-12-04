import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AnnouncementBar from '@/components/layout/AnnouncementBar'
import StickyBookingButton from '@/components/ui/StickyBookingButton'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  preload: true,
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  title: {
    default: 'Dermabar Med Spa | Toronto Aesthetic Treatments & Skincare',
    template: '%s | Dermabar Med Spa',
  },
  description: 'Premier medical aesthetic clinic in Toronto offering Botox, dermal fillers, laser treatments, and professional skincare. Expert injectors, advanced technology, luxury experience.',
  keywords: ['med spa toronto', 'botox toronto', 'dermal fillers', 'laser hair removal', 'hydrafacial', 'medical aesthetics', 'dermabar'],
  authors: [{ name: 'Dermabar Med Spa' }],
  creator: 'Dermabar Med Spa',
  publisher: 'Dermabar Med Spa',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dermabar.ca'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://dermabar.ca',
    siteName: 'Dermabar Med Spa',
    title: 'Dermabar Med Spa | Toronto Aesthetic Treatments & Skincare',
    description: 'Premier medical aesthetic clinic in Toronto offering expert injectables, laser treatments, and professional skincare.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dermabar Med Spa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dermabar Med Spa | Toronto Aesthetic Treatments',
    description: 'Premier medical aesthetic clinic in Toronto',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification when available
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="min-h-screen flex flex-col">
        <AnnouncementBar />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <StickyBookingButton />
      </body>
    </html>
  )
}

