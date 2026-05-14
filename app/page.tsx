'use client'

import { useRouter } from 'next/navigation'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import SocialProof from '@/components/SocialProof'
import ValueProps from '@/components/ValueProps'
import HowItWorks from '@/components/HowItWorks'
import TabbedShowcase from '@/components/TabbedShowcase'
import DemoCallout from '@/components/DemoCallout'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function HomePage() {
  const router = useRouter()
  const goToEarlyAccess = () => router.push('/early-access')

  return (
    <>
      <Nav onCtaClick={goToEarlyAccess} />
      <main className="bg-ink-900">
        <Hero onCtaClick={goToEarlyAccess} />
        <SocialProof count={80} />
        <ValueProps />
        <HowItWorks />
        <TabbedShowcase />
        <DemoCallout />
        <Pricing onCtaClick={goToEarlyAccess} />
        <FAQ />
        <FinalCTA onCtaClick={goToEarlyAccess} />
      </main>
      <Footer />
    </>
  )
}
