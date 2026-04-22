'use client'

import { GlassCard } from "@/components/glass-card"
import { BookCallButton } from "@/components/book-call-button"
import { ArrowUpRight, Award, ExternalLink } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const clientProjects = [
  {
    id: 1,
    title: "Biotheke",
    description: "Organic meat e-commerce store with email marketing automation and customer retention flows.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-bio-theke-de-2026-03-20-14_25_42.png-wXgmtroSThY1LVzO6WUDSOiFGnhELj.jpeg",
    url: "https://bio-theke.de",
  },
  {
    id: 2,
    title: "maleup",
    description: "Men's skincare brand with AI-powered content and email sequences driving 40%+ repeat purchases.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-maleup-de-products-instant-repair-2026-03-11-21_15_11.png-pl05vIQdN6fBUvJ2shInM4YWTBCgI1.jpeg",
    url: "https://maleup.de",
  },
  {
    id: 3,
    title: "Buffalo Jerky",
    description: "Sustainable protein snacks with automated marketing campaigns and Black Friday email strategies.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-buffalo-jerky.de.png-Mnpqh5rMywzBNzr5RVJdXMuaArRaSD.jpeg",
    url: "https://buffalo-jerky.de",
  },
]

const certificates = [
  {
    id: 1,
    title: "HubSpot E-Mail Marketing",
    issuer: "HubSpot Academy",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e-mail_marketing_certificate-cawMJhNNd2PzSYRhTLvSyVANtFlYBR.jpg",
  },
  {
    id: 2,
    title: "Content Marketing",
    issuer: "HubSpot Academy",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hubspot_content_marketing_certificate-I4CVmxZ5QeFAVO1QWIHpPjg9VgmSLP.jpg",
  },
  {
    id: 3,
    title: "Advanced Email Marketing",
    issuer: "Simplilearn SkillUp",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/advanced_email_marketing_certificate-mfK7DniRzo2HjsSTKKK1Edihqp4oG5.jpg",
  },
  {
    id: 4,
    title: "Mailchimp Email Campaigns",
    issuer: "Coursera",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/advanced_email_marketing_certificate_mailchimp-XHI1eii9UG0mTTTpAilegep5lFmvfi.jpg",
  },
  {
    id: 5,
    title: "Klaviyo Product Certificate",
    issuer: "Klaviyo Academy",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/klavyio_certificate-nAxf7lBBmUD5DAOhoA5EFfQI0SLsa3.png",
  },
]

export function BentoGrid() {
  const [selectedCertificate, setSelectedCertificate] = useState<number | null>(null)

  return (
    <section id="work" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Client Projects Section */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Selected Work
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
            E-Commerce Success Stories
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {clientProjects.map((project) => (
            <GlassCard key={project.id} className="overflow-hidden group" hover>
              <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <div className="flex items-center gap-2 text-foreground font-medium">
                    <span>Visit Site</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </a>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {project.description}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-primary flex-shrink-0" />
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Results Highlight */}
        <GlassCard className="p-8 mb-16" hover>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-primary font-medium tracking-wide uppercase text-sm mb-2">
                Black Friday Campaign Results
              </p>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Email Marketing That Delivers
              </h3>
              <p className="text-muted-foreground mb-4">
                A single Black Friday email campaign generating over 40,000 EUR in total revenue with 16,796 EUR directly attributed to email marketing - a 774% increase compared to the previous period.
              </p>
              <div className="flex gap-8">
                <div>
                  <p className="font-serif text-3xl font-semibold text-primary">40.042 EUR</p>
                  <p className="text-muted-foreground text-sm">Total Revenue</p>
                </div>
                <div>
                  <p className="font-serif text-3xl font-semibold text-primary">+774%</p>
                  <p className="text-muted-foreground text-sm">YoY Growth</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-muted">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BlackFriday_EmailKampagne-76TfVtJ9SJRzujz2HlQE4R1H3uatyM.jpeg"
                alt="Black Friday Email Campaign Results"
                fill
                className="object-contain bg-white p-4"
              />
            </div>
          </div>
        </GlassCard>

        {/* Client Reviews from Malt */}
        <GlassCard className="p-8 mb-16" hover>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted order-2 md:order-1">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ralf_hillebrand_reviews_malt-QubHWa5dpkwiSQ0efxl6QXqnHXJXzW.png"
                alt="Client Reviews on Malt Platform"
                fill
                className="object-contain bg-white p-4"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-primary font-medium tracking-wide uppercase text-sm mb-2">
                Verified Reviews
              </p>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                5-Star Client Feedback
              </h3>
              <p className="text-muted-foreground mb-4">
                Consistently rated 5 stars across Quality, Reliability, and Communication on Malt freelance platform. Clients appreciate fast delivery, thoughtful collaboration, and content that exceeds expectations.
              </p>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-xl">&#9733;</span>
                  ))}
                </div>
                <span className="text-muted-foreground text-sm">(5.0 Rating)</span>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Certificates Section */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            <Award className="w-4 h-4 inline-block mr-2" />
            Certifications
          </p>
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
            Industry-Recognized Credentials
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {certificates.map((cert) => (
            <GlassCard 
              key={cert.id} 
              className="overflow-hidden cursor-pointer group p-2" 
              hover
              onClick={() => setSelectedCertificate(selectedCertificate === cert.id ? null : cert.id)}
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-white">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-3 text-center">
                <p className="font-medium text-foreground text-sm truncate">
                  {cert.title}
                </p>
                <p className="text-muted-foreground text-xs">
                  {cert.issuer}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Certificate Modal */}
        {selectedCertificate && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedCertificate(null)}
          >
            <div className="relative max-w-3xl w-full max-h-[90vh] overflow-auto">
              <Image
                src={certificates.find(c => c.id === selectedCertificate)?.image || ''}
                alt="Certificate"
                width={800}
                height={600}
                className="w-full h-auto rounded-xl"
              />
              <button 
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center text-foreground hover:bg-background transition-colors"
                onClick={() => setSelectedCertificate(null)}
              >
                &times;
              </button>
            </div>
          </div>
        )}

        {/* CTA After Bento Grid */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to scale your e-commerce with AI-powered marketing?
          </p>
          <BookCallButton size="lg" className="px-8" />
        </div>
      </div>
    </section>
  )
}
