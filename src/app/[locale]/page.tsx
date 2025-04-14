"use client"

import { useTranslations } from "next-intl"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ServicesSection } from "@/components/sections/services-section"
import { EventsSection } from "@/components/sections/events-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { TeamSection } from "@/components/sections/team-section"
import { ContactSection } from "@/components/sections/contact-section"
import { CTASection } from "@/components/sections/cta-section"

export default function Home() {
  const t = useTranslations()

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <EventsSection />
        <TestimonialsSection />
        <TeamSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
