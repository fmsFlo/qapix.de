import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutz - Qapix',
  description: 'Datenschutzerklärung von Qapix',
}

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-dark py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-heading text-4xl font-bold mb-8">Datenschutzerklärung</h1>
        <div className="glass-strong rounded-xl p-8 space-y-6 text-text-secondary">
          <div>
            <h2 className="font-heading text-xl font-semibold text-white mb-2">
              1. Datenschutz auf einen Blick
            </h2>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold text-white mb-2">
              2. Verantwortliche Stelle
            </h2>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="mt-2">
              Finance Made Simple<br />
              Musterstraße 123<br />
              12345 Musterstadt<br />
              E-Mail: kontakt@financemadesimple.de
            </p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold text-white mb-2">
              3. Datenerfassung auf dieser Website
            </h2>
            <p>
              Wir erheben und verarbeiten personenbezogene Daten nur im erforderlichen Umfang
              und in Übereinstimmung mit der DSGVO.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

