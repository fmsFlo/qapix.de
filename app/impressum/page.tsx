import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum - Qapix',
  description: 'Impressum von Qapix',
}

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-dark py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-heading text-4xl font-bold mb-8">Impressum</h1>
        <div className="glass-strong rounded-xl p-8 space-y-6 text-text-secondary">
          <div>
            <h2 className="font-heading text-xl font-semibold text-white mb-2">
              Angaben gemäß § 5 TMG
            </h2>
            <p>Finance Made Simple</p>
            <p>Musterstraße 123</p>
            <p>12345 Musterstadt</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold text-white mb-2">
              Kontakt
            </h2>
            <p>E-Mail: kontakt@financemadesimple.de</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold text-white mb-2">
              Verantwortlich für den Inhalt
            </h2>
            <p>Finance Made Simple</p>
          </div>
        </div>
      </div>
    </div>
  )
}

