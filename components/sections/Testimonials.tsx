'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote: 'Qapix hat meine Arbeitsweise komplett revolutioniert. Was früher Stunden gedauert hat, mache ich jetzt in Minuten.',
    author: 'Michael Schmidt',
    role: 'Finanzberater, München',
    rating: 5,
  },
  {
    quote: 'Die automatisierten Berechnungen sind ein Game-Changer. Meine Kunden sind begeistert von der Professionalität.',
    author: 'Sarah Weber',
    role: 'Selbstständige Beraterin, Berlin',
    rating: 5,
  },
  {
    quote: 'Endlich eine Plattform, die alles kann. Die Integration mit Close CRM funktioniert perfekt.',
    author: 'Thomas Müller',
    role: 'Senior Berater, Hamburg',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Was Finanzberater über Qapix sagen
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-strong rounded-xl p-8 text-white"
            >
              <Quote className="w-8 h-8 text-primary mb-4 opacity-50" />
              <p className="text-lg mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <div>
                <div className="font-semibold text-white">{testimonial.author}</div>
                <div className="text-sm text-white/70">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

