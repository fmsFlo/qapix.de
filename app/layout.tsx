import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Qapix - Die All-in-One Plattform für moderne Finanzberater',
  description: 'Automatisiere deine Beratungsprozesse, begeistere Kunden und skaliere dein Business - alles in einem System. Intelligente Rentenlücken-Berechnung, DISC-Persönlichkeitstypen, Depot-Analyse und mehr.',
  keywords: 'Finanzberatung, Rentenlücken-Berechnung, DISC-Analyse, Depot-Analyse, CRM, Finanzberater Software',
  authors: [{ name: 'Qapix by Finance Made Simple' }],
  openGraph: {
    title: 'Qapix - Die All-in-One Plattform für moderne Finanzberater',
    description: 'Automatisiere deine Beratungsprozesse, begeistere Kunden und skaliere dein Business.',
    type: 'website',
    locale: 'de_DE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qapix - Die All-in-One Plattform für moderne Finanzberater',
    description: 'Automatisiere deine Beratungsprozesse, begeistere Kunden und skaliere dein Business.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}

