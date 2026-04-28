import { BookCallButton } from "@/components/book-call-button"
import { Typewriter } from "@/components/typewriter"
import { GradientSweep } from "@/components/gradient-sweep"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <p className="text-primary font-medium tracking-wide uppercase text-sm mb-6 animate-fade-in">
          E-Mail Marketing, Automation and Content powered by AI
        </p>
        
        <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-semibold text-foreground leading-tight mb-8 text-balance">
          <GradientSweep>
            <Typewriter 
              text="Scale your E-Commerce Business with AI-Powered Marketing" 
              speed={40}
              delay={200}
            />
          </GradientSweep>
        </h1>
        
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed text-pretty">
          I help e-commerce brands eliminate manual tasks, scale operations, and unlock hidden revenue through intelligent automation systems.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <BookCallButton variant="premium" size="lg" className="px-10 h-16 text-lg" />
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-xs text-muted-foreground mb-1 font-medium">Can&apos;t decide yet?</span>
            <a 
              href="#work" 
              className="group flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors font-medium border-b border-white/10 hover:border-primary/40 pb-1"
            >
              See my portfolio first
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
