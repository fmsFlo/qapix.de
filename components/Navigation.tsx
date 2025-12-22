'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import QapixLogo from '@/components/QapixLogo'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-strong shadow-lg shadow-primary/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="group">
            <QapixLogo size="medium" variant="full" />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="https://app.qapix.de"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm"
            >
              Zum Login
            </a>
            <a
              href="mailto:kontakt@financemadesimple.de?subject=Qapix%20Demo%20Anfrage"
              className="btn-primary text-sm"
            >
              Zusammenarbeit anfragen
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <a
              href="https://app.qapix.de"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm px-4 py-2"
            >
              Login
            </a>
            <a
              href="mailto:kontakt@financemadesimple.de?subject=Qapix%20Demo%20Anfrage"
              className="btn-primary text-sm px-4 py-2"
            >
              Anfragen
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

