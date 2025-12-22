'use client'

import { motion } from 'framer-motion'
import { ArrowRight, LogIn } from 'lucide-react'
import TiltWrapper from '@/components/TiltWrapper'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="wave-bg" />
      <div className="absolute inset-0 bg-gradient-dark opacity-50" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
          >
            Die All-in-One Plattform für{' '}
            <span className="gradient-text">moderne Finanzberater</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-12"
          >
            Automatisiere deine Beratungsprozesse, begeistere Kunden und skaliere dein Business - alles in einem System
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="mailto:kontakt@financemadesimple.de?subject=Qapix%20Demo%20Anfrage"
              className="btn-primary group"
            >
              Zusammenarbeit anfragen
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://app.qapix.de"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary group"
            >
              <LogIn className="w-5 h-5" />
              Zum Login
            </a>
          </motion.div>

          {/* Dashboard Mockup */}
          <motion.div
            variants={itemVariants}
            className="relative max-w-6xl mx-auto"
          >
            <TiltWrapper options={{ max: 15, scale: 1, speed: 1000 }}>
              <div className="relative glass-strong rounded-2xl p-6 shadow-2xl">
                {/* Dashboard Content */}
                <div className="relative bg-dark-secondary rounded-xl overflow-hidden">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between p-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="text-xs text-text-secondary uppercase tracking-wider">Finance Made Simple</div>
                  </div>

                  {/* Dashboard Body - Rentenlücken-Analyse */}
                  <div className="p-6 md:p-8">
                    {/* Main Content */}
                    <div className="mb-6">
                      <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
                        Rentenlücke verstehen und schließen
                      </h3>
                      <p className="text-text-secondary text-sm md:text-base">
                        deine einfache Rentenübersicht
                      </p>
                    </div>

                    {/* Quick Preview Panel */}
                    <div className="glass rounded-xl p-6 mb-6 relative">
                      <div className="text-xs text-text-secondary uppercase tracking-wider mb-3">Quick-Preview</div>
                      <h4 className="text-lg font-bold text-white mb-4">
                        Deckungsgrad deiner Zielrente
                      </h4>
                      
                      {/* Progress Bar */}
                      <div className="mb-6">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-text-secondary">aktuell</span>
                          <span className="text-lg font-bold text-primary">76,0%</span>
                        </div>
                        <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-green-500 via-primary to-secondary rounded-full"
                            style={{ width: '76%' }}
                          />
                        </div>
                      </div>

                      {/* Financial Details Grid */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-xs text-text-secondary mb-1">Bisher gedeckt</div>
                          <div className="text-xl font-bold text-white mb-1">1.644,51 €</div>
                          <div className="text-xs text-text-secondary">gesetzlich + privat</div>
                        </div>
                        <div>
                          <div className="text-xs text-text-secondary mb-1">Ziel (Netto)</div>
                          <div className="text-xl font-bold text-white mb-1">3.799,57 €</div>
                          <div className="text-xs text-text-secondary">monatliches Wunschziel</div>
                        </div>
                        <div>
                          <div className="text-xs text-text-secondary mb-1">Aktuelle Lücke</div>
                          <div className="text-xl font-bold text-red-400 mb-1">2.155,06 €</div>
                          <div className="text-xs text-text-secondary">vor neuer Sparrate</div>
                        </div>
                        <div>
                          <div className="text-xs text-text-secondary mb-1">Kapitalbedarf gesamt</div>
                          <div className="text-xl font-bold text-white mb-1">594.796,56 €</div>
                          <div className="text-xs text-text-secondary">für 23 Jahre Ruhestand</div>
                        </div>
                      </div>
                    </div>

                    {/* Before/After Comparison */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Before */}
                      <div className="glass rounded-lg p-4">
                        <div className="text-xs text-text-secondary uppercase mb-2 flex items-center gap-2">
                          <span>↑</span> Vorher
                        </div>
                        <div className="text-sm text-text-secondary mb-3">Ohne zusätzliche Vorsorge</div>
                        <div className="space-y-2 mb-4">
                          <div>
                            <div className="text-xs text-text-secondary">Gesetzliche Rente</div>
                            <div className="text-base font-semibold text-white">1.090,01 €</div>
                          </div>
                          <div>
                            <div className="text-xs text-text-secondary">Private Vorsorge</div>
                            <div className="text-base font-semibold text-white">0,00 €</div>
                          </div>
                        </div>
                        <div className="border border-red-500/50 rounded-lg p-3 bg-red-500/10">
                          <div className="text-xs text-text-secondary mb-1">Rentenlücke</div>
                          <div className="text-xl font-bold text-red-400">922,72 €</div>
                        </div>
                      </div>

                      {/* After */}
                      <div className="glass rounded-lg p-4">
                        <div className="text-xs text-text-secondary uppercase mb-2 flex items-center gap-2">
                          <span className="text-primary">↑</span> Nachher
                        </div>
                        <div className="text-sm text-text-secondary mb-3">Mit neuer Vorsorge</div>
                        <div className="space-y-2 mb-4">
                          <div>
                            <div className="text-xs text-text-secondary">Gesetzliche Rente</div>
                            <div className="text-base font-semibold text-white">1.090,01 €</div>
                          </div>
                          <div>
                            <div className="text-xs text-text-secondary">Private Vorsorge</div>
                            <div className="text-base font-semibold text-green-400 flex items-center gap-2">
                              457,12 €
                              <span className="text-xs bg-green-500/20 px-2 py-0.5 rounded">+457,12 €</span>
                            </div>
                          </div>
                        </div>
                        <div className="border border-yellow-500/50 rounded-lg p-3 bg-yellow-500/10">
                          <div className="text-xs text-text-secondary mb-1">Verbleibende Lücke</div>
                          <div className="text-xl font-bold text-yellow-400">470,94 €</div>
                        </div>
                      </div>

                      {/* Monthly Contribution */}
                      <div className="glass rounded-lg p-4">
                        <div className="text-xs text-text-secondary uppercase mb-2 flex items-center gap-2">
                          <span className="text-secondary">€</span> Monatlicher Beitrag
                        </div>
                        <div className="space-y-3 mb-4">
                          <div>
                            <div className="text-xs text-text-secondary mb-1">Aktueller Beitrag</div>
                            <div className="text-lg font-semibold text-white">200,00 €</div>
                          </div>
                          <div>
                            <div className="text-xs text-text-secondary mb-1">Neuer Beitrag</div>
                            <div className="text-lg font-semibold text-white">200,00 €</div>
                          </div>
                        </div>
                        <div className="border border-secondary/50 rounded-lg p-3 bg-secondary/10">
                          <div className="text-xs text-text-secondary mb-1">Differenz</div>
                          <div className="text-xl font-bold text-secondary">0,00 €</div>
                          <div className="text-xs text-text-secondary mt-1">Keine Änderung</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Wave Charts Background */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
                      <path
                        d="M0,300 Q300,200 600,300 T1200,300 L1200,600 L0,600 Z"
                        fill="url(#waveGradient)"
                      />
                      <defs>
                        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#00D9FF" />
                          <stop offset="100%" stopColor="#7B61FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </TiltWrapper>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

