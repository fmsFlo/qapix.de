import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login - Qapix',
  description: 'Melde dich bei deinem Qapix Account an.',
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark px-6">
      <div className="max-w-md w-full glass-strong rounded-2xl p-8">
        <h1 className="font-heading text-3xl font-bold mb-6 text-center">
          Willkommen zurück
        </h1>
        <p className="text-text-secondary text-center mb-8">
          Melde dich bei deinem Qapix Account an
        </p>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              E-Mail
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
              placeholder="deine@email.de"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Passwort
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white"
              placeholder="••••••••"
            />
          </div>
          <button type="submit" className="btn-primary w-full">
            Anmelden
          </button>
        </form>
      </div>
    </div>
  )
}

