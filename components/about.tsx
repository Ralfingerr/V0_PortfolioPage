'use client'

import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            About Me
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6 text-balance">
            Turning E-commerce Chaos Into Profitable Systems
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Profile Photo */}
          <div className="flex justify-center md:justify-start">
            <div 
              className="rounded-2xl overflow-hidden w-64 h-64 flex-shrink-0"
              style={{
                background: 'rgba(30, 27, 26, 0.6)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '1px',
              }}
            >
              <Image
                src="/images/profile.jpg"
                alt="Ralf Hillebrand"
                width={256}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I&apos;m Ralf Hillebrand, an E-commerce AI & Automation Architect with a proven track record of scaling brands through intelligent automation systems.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Over the past years, I&apos;ve helped 50+ e-commerce brands eliminate manual workflows, reduce operational costs by up to 70%, and generate over €2.5M in additional revenue through AI-powered marketing automation and customer intelligence systems.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              I specialize in building end-to-end automation solutions that connect your email marketing, SMS campaigns, customer data, and AI tools into a seamless revenue-generating engine.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Strategic Thinking</h4>
                  <p className="text-muted-foreground text-sm">I don&apos;t just automate—I architect systems that align with your business goals</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Data-Driven Results</h4>
                  <p className="text-muted-foreground text-sm">Every automation I build is measured, optimized, and proven to impact your bottom line</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Long-Term Partnership</h4>
                  <p className="text-muted-foreground text-sm">I partner with brands for scale, not quick fixes. Your success is my success</p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}
