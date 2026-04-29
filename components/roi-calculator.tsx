'use client'

import { useState, useMemo } from "react"
import { GlassCard } from "@/components/glass-card"
import { motion } from "framer-motion"
import { TrendingUp, ArrowRight, Zap } from "lucide-react"
import { Slider } from "@/components/ui/slider"

export function ROICalculator() {
  const [revenue, setRevenue] = useState(50000)
  const [listSize, setListSize] = useState(10000)

  const projectedLift = useMemo(() => {
    // Basic logic: Higher list size and revenue typically see 15-30% lift from advanced automation
    const liftPercentage = 0.22 // 22% average
    return revenue * liftPercentage
  }, [revenue])

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Revenue Architect
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-foreground mb-6">
            Calculate Your Untapped Potential
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See the projected monthly revenue lift your brand could achieve through data-driven automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <GlassCard className="p-8 flex flex-col gap-10">
            <div className="space-y-6">
              <div className="flex justify-between items-center text-sm">
                <label className="font-medium text-foreground">Current Monthly Revenue</label>
                <span className="text-primary font-bold">€{revenue.toLocaleString()}</span>
              </div>
              <Slider
                value={[revenue]}
                max={500000}
                step={5000}
                onValueChange={(val) => setRevenue(val[0])}
                className="py-4"
              />
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-center text-sm">
                <label className="font-medium text-foreground">Email List Size</label>
                <span className="text-primary font-bold">{listSize.toLocaleString()}</span>
              </div>
              <Slider
                value={[listSize]}
                max={200000}
                step={1000}
                onValueChange={(val) => setListSize(val[0])}
                className="py-4"
              />
            </div>
            
            <p className="mt-auto text-xs text-muted-foreground leading-relaxed">
              *Estimates are based on average performance metrics from similar D2C projects.
            </p>
          </GlassCard>

          <GlassCard className="p-8 bg-primary/5 border-primary/20 flex flex-col justify-center items-center text-center relative overflow-hidden">
            <Zap className="absolute -top-6 -right-6 w-32 h-32 text-primary/5 rotate-12" />
            
            <p className="text-sm uppercase tracking-widest text-primary font-bold mb-2">Estimated Monthly Lift</p>
            <motion.div 
              key={projectedLift}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4"
            >
              +€{Math.round(projectedLift).toLocaleString()}
            </motion.div>
            
            <div className="flex items-center gap-2 text-primary font-medium mb-8">
              <TrendingUp className="w-5 h-5" />
              <span>~22% Revenue Increase</span>
            </div>

            <a 
              href="#contact" 
              className="group w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
            >
              Claim Your Free Audit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
