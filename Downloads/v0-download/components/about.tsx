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
            Email Marketing Consultant for D2C Brands
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Profile Photo */}
          <div className="flex justify-center md:justify-start">
            <div 
              className="rounded-2xl overflow-hidden w-80 h-96 flex-shrink-0"
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
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2">
            <p className="text-foreground text-xl font-medium leading-relaxed mb-6">
              I&apos;m Ralf Hillebrand – Email Marketing Consultant for D2C Brands.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I help small and mid-sized e-commerce brands build a marketing system that works in two steps: get the right people to notice you – then turn them into customers.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Most brands treat content and email as two separate things. They&apos;re not. One feeds the other. Here&apos;s how I think about it:
            </p>

            <div className="flex flex-col gap-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Content creates attention</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">Social media posts, blog articles, and newsletters that attract the right audience – people who are already interested in what you sell. No paid ads needed, no chasing algorithms. Just consistent, relevant content that builds trust over time.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Email marketing converts that attention into revenue</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">Once someone&apos;s on your list, that&apos;s where the real work begins. I build email flows and campaigns that guide your customers from first purchase to loyal fan – with copy that feels personal, not like a broadcast.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">AI and automation connect the dots</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">I use smart systems in the background to make both sides work harder – so you can show up consistently without burning out, and follow up with customers at exactly the right moment.</p>
                </div>
              </div>
            </div>

            <div 
              className="rounded-xl p-6"
              style={{
                background: 'rgba(30, 27, 26, 0.6)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <h4 className="font-semibold text-foreground mb-4">What you get working with me:</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  A content strategy that attracts and builds your audience
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  Email flows and campaigns that convert and retain
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  Copy that sounds like you – not like a template
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  A system that runs, so you don&apos;t have to do everything manually
                </li>
              </ul>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}
