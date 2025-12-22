'use client'

import { ReactNode } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface TiltWrapperProps {
  children: ReactNode
  options?: {
    max?: number
    scale?: number
    speed?: number
  }
  className?: string
}

export default function TiltWrapper({ children, options, className }: TiltWrapperProps) {
  const max = options?.max || 15
  const scale = options?.scale || 1
  const speed = options?.speed || 1000

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 700 }
  const xSpring = useSpring(x, springConfig)
  const ySpring = useSpring(y, springConfig)

  const rotateX = useTransform(ySpring, [-0.5, 0.5], [max, -max])
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [-max, max])
  const scaleValue = useTransform(xSpring, [-0.5, 0.5], [1, scale])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      className={className || ''}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        scale: scaleValue,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  )
}

