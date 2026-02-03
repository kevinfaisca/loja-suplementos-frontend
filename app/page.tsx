"use client"

import { HeroSection } from "@/components/home/HeroSection"
import { BenefitsSection } from "@/components/home/BenefitsSection"
import { FeatureProductsSection } from "@/components/home/FeatureProductsSection" 

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 text-white">
      <HeroSection />
      <BenefitsSection />
      <FeatureProductsSection />
    </main>
  )
}
