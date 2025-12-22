'use client'

import { motion } from 'framer-motion'
import { Link2, Calendar, Zap, FileSpreadsheet, FileText, Briefcase } from 'lucide-react'

const integrations = [
  { name: 'Close CRM', icon: Link2, color: 'text-primary' },
  { name: 'Calendly', icon: Calendar, color: 'text-secondary' },
  { name: 'Make.com', icon: Zap, color: 'text-primary' },
  { name: 'Excel', icon: FileSpreadsheet, color: 'text-secondary' },
  { name: 'PDF Export', icon: FileText, color: 'text-primary' },
  { name: 'Google Workspace', icon: Briefcase, color: 'text-secondary' },
]

export default function Integrations() {
  return (
    <section className="section-padding bg-gradient-to-b from-dark-secondary to-[#E2E8F0]/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Qapix arbeitet mit{' '}
            <span className="gradient-text">deinen Tools zusammen</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {integrations.map((integration, index) => {
            const Icon = integration.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="glass rounded-xl p-6 text-center card-hover"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-primary/20 mb-3 ${integration.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-sm font-medium text-white">
                  {integration.name}
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <button className="btn-secondary">
            Alle Integrationen ansehen
          </button>
        </motion.div>
      </div>
    </section>
  )
}

