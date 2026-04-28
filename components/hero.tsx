import { BookCallButton } from "@/components/book-call-button"
<<<<<<< HEAD
import { Typewriter } from "@/components/typewriter"
=======
import { GradientSweep } from "@/components/gradient-sweep"
>>>>>>> 1337abdd1407078c225f6278b612a686a0f63a9c

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <p className="text-primary font-medium tracking-wide uppercase text-sm mb-6 animate-fade-in">
<<<<<<< HEAD
          E-commerce AI &amp; Automation Architect
        </p>
        
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6 text-balance">
          <Typewriter 
            text="Scale your E-Commerce Business with AI-Powered Marketing" 
            speed={40}
            delay={200}
          />
=======
          E-Mail Marketing, Automation and Content powered with AI
        </p>
        
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6 text-balance">
          <GradientSweep>
            Scale your E-Commerce Business with AI-Powered Marketing
          </GradientSweep>
>>>>>>> 1337abdd1407078c225f6278b612a686a0f63a9c
        </h1>
        
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          I help e-commerce brands eliminate manual tasks, scale operations, and unlock new revenue streams through intelligent automation systems.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <BookCallButton size="lg" className="px-8 py-6 text-base" />
          <a 
            href="#work" 
            className="text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  )
}
