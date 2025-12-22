'use client'

import { motion } from 'framer-motion'
import { ArrowRight, LogIn } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="section-padding bg-dark relative overflow-hidden">
      <div className="wave-bg" />
      <div className="absolute inset-0 bg-gradient-dark opacity-50" />
      
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => {
          const randomX = Math.random() * 100
          const randomY = Math.random() * 100
          const randomDuration = Math.random() * 3 + 2
          const randomDelay = Math.random() * 2
          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary rounded-full"
              initial={{
                x: `${randomX}%`,
                y: `${randomY}%`,
              }}
              animate={{
                y: [`${randomY}%`, `${(randomY + 30) % 100}%`],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: randomDuration,
                repeat: Infinity,
                delay: randomDelay,
              }}
            />
          )
        })}
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Bereit für die Zukunft der{' '}
            <span className="gradient-text">Finanzberatung?</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
            Starte jetzt mit Qapix und modernisiere deine Beratungsprozesse
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
          </div>
        </motion.div>
      </div>
    </section>
  )
}

