'use client'

import { motion } from 'framer-motion'
import { FileSpreadsheet, FolderTree, Zap } from 'lucide-react'

const problems = [
  {
    icon: FileSpreadsheet,
    title: 'Excel-Chaos bei Rentenberechnungen',
    description: 'Manuelle Berechnungen, fehleranfällig, zeitraubend. Stundenlange Arbeit für eine einzige Analyse.',
    color: 'text-primary',
  },
  {
    icon: FolderTree,
    title: 'Keine Übersicht über Kundenportfolios',
    description: 'Daten verstreut über E-Mails, Ordner, Notizen. Keine zentrale Sicht auf deine Kunden.',
    color: 'text-secondary',
  },
  {
    icon: Zap,
    title: 'Ineffiziente Prozesse',
    description: 'Doppelarbeit, keine Automatisierung, fehlende Integration. Zeit, die du besser nutzen könntest.',
    color: 'text-primary',
  },
]

export default function ProblemSolution() {
  return (
    <section className="section-padding bg-dark relative overflow-hidden">
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
            Finanzberatung wie vor 20 Jahren?{' '}
            <span className="gradient-text">Nicht mit Qapix.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="glass rounded-xl p-8 card-hover"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-primary/20 mb-4 ${problem.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3 text-white">
                  {problem.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

