import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { SocialProof } from "@/components/social-proof"
import { BentoGrid } from "@/components/bento-grid"
import { Testimonials } from "@/components/testimonials"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { FloatingElements } from "@/components/floating-elements"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
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
