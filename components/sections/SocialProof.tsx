'use client'

import { motion } from 'framer-motion'
import { Clock, Shield, Users } from 'lucide-react'

const stats = [
  {
    icon: Clock,
    value: '80%',
    label: 'Zeitersparnis bei Rentenberechnungen',
    color: 'text-primary',
  },
  {
    icon: Shield,
    value: '100%',
    label: 'DSGVO-konform',
    color: 'text-secondary',
  },
  {
    icon: Users,
    value: '∞',
    label: 'Unbegrenzte Kunden',
    color: 'text-primary',
  },
]

export default function SocialProof() {
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
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Schluss mit Excel-Chaos und Datensilos
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Finanzberater vertrauen auf Qapix für ihre digitale Transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-xl p-6 card-hover text-center"
              >
                <div className={`inline-flex p-4 rounded-full bg-gradient-primary/20 mb-4 ${stat.color}`}>
                  <Icon className="w-8 h-8" />
                </div>
                <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-text-secondary text-sm">
                  {stat.label}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

