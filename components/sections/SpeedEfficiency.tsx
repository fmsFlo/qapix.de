'use client'

import { motion } from 'framer-motion'
import { Zap, Clock, MousePointerClick } from 'lucide-react'

const stats = [
  {
    icon: Zap,
    value: '80%',
    label: 'Zeitersparnis',
    color: 'text-primary',
  },
  {
    icon: Clock,
    value: '5 Min',
    label: 'statt 2 Stunden',
    color: 'text-secondary',
  },
  {
    icon: MousePointerClick,
    value: '1 Klick',
    label: 'statt 50',
    color: 'text-primary',
  },
]

export default function SpeedEfficiency() {
  return (
    <section className="section-padding bg-dark relative overflow-hidden">
      <div className="wave-bg" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              10x schneller als Excel.{' '}
              <span className="gradient-text">100x professioneller.</span>
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Qapix automatisiert komplexe Berechnungen und Prozesse, die früher Stunden gedauert haben. Jetzt in Minuten erledigt.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass rounded-lg p-4 text-center"
                  >
                    <div className={`inline-flex p-2 rounded-lg bg-gradient-primary/20 mb-2 ${stat.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className={`text-2xl font-bold mb-1 ${stat.color}`}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-text-secondary">
                      {stat.label}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right: Animated UI Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative space-y-4">
              {/* Card 1 */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="glass rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <div className="flex-1 h-2 bg-white/10 rounded-full" />
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-primary/30 rounded w-3/4" />
                  <div className="h-3 bg-secondary/30 rounded w-1/2" />
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
                className="glass rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-secondary" />
                  <div className="flex-1 h-2 bg-white/10 rounded-full" />
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-secondary/30 rounded w-2/3" />
                  <div className="h-3 bg-primary/30 rounded w-1/2" />
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
                className="glass rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <div className="flex-1 h-2 bg-white/10 rounded-full" />
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-primary/30 rounded w-4/5" />
                  <div className="h-3 bg-secondary/30 rounded w-3/5" />
                </div>
              </motion.div>
            </div>

            {/* Color Trails Effect */}
            <div className="absolute inset-0 -z-10 opacity-20">
              <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

