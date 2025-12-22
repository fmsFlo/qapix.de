'use client'

import Hero from '@/components/sections/Hero'
import SocialProof from '@/components/sections/SocialProof'
import ProblemSolution from '@/components/sections/ProblemSolution'
import Features from '@/components/sections/Features'
import SpeedEfficiency from '@/components/sections/SpeedEfficiency'
import Integrations from '@/components/sections/Integrations'
import Demo from '@/components/sections/Demo'
import Testimonials from '@/components/sections/Testimonials'
import FinalCTA from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <SocialProof />
      <ProblemSolution />
      <Features />
      <SpeedEfficiency />
      <Integrations />
      <Demo />
      <Testimonials />
      <FinalCTA />
    </main>
  )
}

