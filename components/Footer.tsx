import Link from 'next/link'
import QapixLogo from '@/components/QapixLogo'

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo + Tagline */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 inline-block">
              <QapixLogo size="small" variant="full" />
            </Link>
            <p className="text-text-secondary text-sm max-w-md">
              Die All-in-One Plattform für moderne Finanzberater. Automatisiere deine Prozesse und skaliere dein Business.
            </p>
          </div>

          {/* Produkt */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Produkt</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-text-secondary hover:text-primary text-sm transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-text-secondary hover:text-primary text-sm transition-colors">
                  Preise
                </Link>
              </li>
              <li>
                <Link href="#" className="text-text-secondary hover:text-primary text-sm transition-colors">
                  Integrationen
                </Link>
              </li>
            </ul>
          </div>

          {/* Unternehmen */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Unternehmen</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-text-secondary hover:text-primary text-sm transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="#" className="text-text-secondary hover:text-primary text-sm transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="#" className="text-text-secondary hover:text-primary text-sm transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/impressum" className="text-text-secondary hover:text-primary text-sm transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-text-secondary hover:text-primary text-sm transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="#" className="text-text-secondary hover:text-primary text-sm transition-colors">
                  AGB
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-sm">
            © 2024 Qapix by Finance Made Simple. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-text-secondary hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-text-secondary hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

