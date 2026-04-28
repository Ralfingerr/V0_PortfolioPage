"use client"

import { useState } from "react"
import { GlassCard } from "@/components/glass-card"
import { BookCallButton } from "@/components/book-call-button"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Linkedin, Mail, Send, CheckCircle } from "lucide-react"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setIsSubmitted(true)
        form.reset()
      }
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - CTA and Info */}
          <div className="flex flex-col justify-center">
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
              Let&apos;s Work Together
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Ready to Transform Your E-commerce?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Book a free strategy call to discuss how AI and automation can unlock new growth for your brand. No obligations, just actionable insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <BookCallButton size="lg" className="px-8" />
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@ralfhillebrand.com"
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <GlassCard className="p-8">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground">
                  I&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="bg-background/50 border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || !formspreeId}
                  className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>

                {!formspreeId && (
                  <p className="text-muted-foreground text-xs text-center">
                    Form submission requires NEXT_PUBLIC_FORMSPREE_ID
                  </p>
                )}
              </form>
            )}
          </GlassCard>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Ralf Hillebrand. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}
