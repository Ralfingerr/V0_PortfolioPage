import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { SocialProof } from "@/components/social-proof"
import { BentoGrid } from "@/components/bento-grid"
import { Testimonials } from "@/components/testimonials"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { FloatingElements } from "@/components/floating-elements"
import { CustomCursor } from "@/components/custom-cursor"
import { SectionIndicator } from "@/components/section-indicator"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <CustomCursor />
      <SectionIndicator />
      <FloatingElements />
      <Navigation />
      <Hero />
      <About />
      <SocialProof />
      <BentoGrid />
      <Testimonials />
      <ContactSection />
      <Footer />
    </main>
  )
}
