import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { SocialProof } from "@/components/social-proof"
import { BentoGrid } from "@/components/bento-grid"
import { Testimonials } from "@/components/testimonials"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { FloatingElements } from "@/components/floating-elements"
import { SectionIndicator } from "@/components/section-indicator"

import { TrustSignals } from "@/components/trust-signals"
import { Atmosphere } from "@/components/atmosphere"
import { ROICalculator } from "@/components/roi-calculator"

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Atmosphere />
      <SectionIndicator />
      <FloatingElements />
      <Navigation />
      
      <section id="hero">
        <Hero />
      </section>

      <TrustSignals />

      <div className="section-divider" />

      <section id="about" className="bg-alternate">
        <About />
      </section>

      <div className="section-divider" />

      <section id="social-proof">
        <SocialProof />
      </section>

      <div className="section-divider" />

      <section id="work" className="bg-alternate">
        <BentoGrid />
      </section>

      <div className="section-divider" />

      <ROICalculator />

      <div className="section-divider" />

      <section id="testimonials">
        <Testimonials />
      </section>

      <div className="section-divider" />

      <section id="contact" className="bg-alternate">
        <ContactSection />
      </section>

      <Footer />
    </main>
  )
}
