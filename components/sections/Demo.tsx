'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import TiltWrapper from '@/components/TiltWrapper'

export default function Demo() {
  return (
    <section className="section-padding bg-dark relative overflow-hidden">
      <div className="wave-bg" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Qapix in Aktion
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Erlebe die Plattform in einem kurzen Überblick
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <TiltWrapper options={{ max: 8, scale: 1, speed: 1000 }}>
            <div className="relative glass-strong rounded-2xl overflow-hidden shadow-2xl">
              {/* Video Placeholder */}
              <div className="relative aspect-video bg-gradient-to-br from-dark-secondary to-dark">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center shadow-lg shadow-primary/50"
                  >
                    <Play className="w-10 h-10 text-white ml-1" fill="white" />
                  </motion.button>
                </div>
                {/* Dashboard Preview Overlay */}
                <div className="absolute inset-0 opacity-20">
                  <div className="grid grid-cols-3 gap-4 p-8 h-full">
                    <div className="glass rounded-lg p-4">
                      <div className="h-full bg-primary/20 rounded" />
                    </div>
                    <div className="glass rounded-lg p-4">
                      <div className="h-full bg-secondary/20 rounded" />
                    </div>
                    <div className="glass rounded-lg p-4">
                      <div className="h-full bg-primary/20 rounded" />
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </TiltWrapper>
          </motion.div>
      </div>
    </section>
  )
}

