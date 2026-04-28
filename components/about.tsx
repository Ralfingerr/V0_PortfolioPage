'use client'

import Image from "next/image"
import { Trophy, Clock, ShieldCheck, Mail, Target, ArrowRight } from "lucide-react"

export function About() {
  const highlights = [
    { icon: <Trophy className="h-5 w-5" />, label: "50+ Brands Helped" },
    { icon: <Clock className="h-5 w-5" />, label: "8 Years Experience" },
    { icon: <ShieldCheck className="h-5 w-5" />, label: "Certified Expert" },
  ]

  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            About Me
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6 text-balance">
            Email Marketing & Automation for D2C Brands
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Profile Photo Area */}
          <div className="flex flex-col gap-8">
            <div 
              className="rounded-2xl overflow-hidden w-full aspect-[4/5] flex-shrink-0 relative group"
              style={{
                background: 'rgba(30, 27, 26, 0.6)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '1px',
              }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ralf_Profile-JqeusRMYfXP6HDW7xDDDh56iv8ody4.png"
                alt="Ralf Hillebrand"
                width={320}
                height={384}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </div>

            {/* Experience Highlights */}
            <div className="grid grid-cols-1 gap-4">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl glass-hover"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2">
            <div className="space-y-6 mb-12">
              <p className="text-foreground text-xl font-medium leading-relaxed">
                I&apos;m Ralf Hillebrand – Architecting Revenue-Generating Systems for E-commerce.
              </p>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                I help mid-sized e-commerce brands build marketing systems that work in two steps: attracting the right audience through intelligent content – then converting them into loyal customers through automated marketing flows.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                Most brands treat email and content as separate silos. I bridge that gap using AI and automation to ensure your message reaches the right person at exactly the right moment, without the manual burnout.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              <div className="p-6 rounded-xl glass-hover group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Content Strategy</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Attract high-intent visitors through social content and newsletters that build authority without the ad spend.
                </p>
              </div>

              <div className="p-6 rounded-xl glass-hover group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Retention Flows</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Convert first-time buyers into lifetime fans with automated email sequences that feel deeply personal.
                </p>
              </div>
            </div>

            <div 
              className="rounded-xl p-8 glass"
            >
              <h4 className="font-semibold text-white mb-6 flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-primary" />
                The Partnership Value
              </h4>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-muted-foreground text-sm">
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>Content strategies that attract and build your audience</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>Email flows that double average customer lifetime value</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>Brand copy that sounds human, not like a template</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>Systems that run 24/7 so you can focus on scale</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
