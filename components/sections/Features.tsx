'use client'

import { motion } from 'framer-motion'
import {
  Calculator,
  UserCircle,
  TrendingUp,
  Shield,
  Link as LinkIcon,
  Workflow,
} from 'lucide-react'

const features = [
  {
    icon: Calculator,
    title: 'Intelligente Rentenlücken-Berechnung',
    description: 'Automatische Analyse deutscher Rentensysteme, Visualisierung von Versorgungslücken und individuelle Szenarien-Berechnung.',
    color: 'text-primary',
  },
  {
    icon: UserCircle,
    title: 'DISC-Persönlichkeitstypen',
    description: 'Kundengerechte Beratungsansätze, automatische Kommunikationsempfehlungen und persönlichkeitsbasierte Reports.',
    color: 'text-secondary',
  },
  {
    icon: TrendingUp,
    title: 'Depot-Analyse-Tool',
    description: 'Portfolio-Analyse auf einen Blick, Performance-Tracking und Asset-Allocation-Visualisierung.',
    color: 'text-primary',
  },
  {
    icon: Shield,
    title: 'Vollständiger Versicherungs-Check',
    description: 'Systematische Bedarfsanalyse, Deckungslücken-Identifikation und Produktvergleich.',
    color: 'text-secondary',
  },
  {
    icon: LinkIcon,
    title: 'CRM-Integration',
    description: 'Nahtlose Close CRM Anbindung, Calendly-Integration für Terminbuchung und zentrale Kundenverwaltung.',
    color: 'text-primary',
  },
  {
    icon: Workflow,
    title: 'Automatisierte Workflows',
    description: 'Make.com Integration, E-Mail-Automatisierung und Follow-up-Prozesse.',
    color: 'text-secondary',
  },
]

export default function Features() {
  return (
    <section className="section-padding bg-dark-secondary relative overflow-hidden">
      <div className="wave-bg" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Eine Plattform. Alle Tools.{' '}
            <span className="gradient-text">Null Kompromisse.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-xl p-8 card-hover"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-primary/20 mb-4 ${feature.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

