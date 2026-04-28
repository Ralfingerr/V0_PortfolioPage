'use client'

import { motion } from "framer-motion"

const partners = [
  "Shopify", 
  "Klaviyo", 
  "HubSpot", 
  "Mailchimp", 
  "Google Analytics", 
  "Meta Business",
  "Vercel",
  "Next.js"
]

export function TrustSignals() {
  return (
    <div className="py-12 border-y border-white/5 bg-background/50 overflow-hidden">
      <div className="container mx-auto px-6 mb-8 text-center">
        <p className="text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground/60">
          Certified Expert in Enterprise Platforms
        </p>
      </div>
      
      <div className="flex overflow-hidden">
        <motion.div 
          className="flex gap-12 md:gap-24 items-center whitespace-nowrap px-12"
          animate={{ x: [0, -1000] }}
          transition={{ 
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear"
            }
          }}
        >
          {[...partners, ...partners].map((partner, index) => (
            <span 
              key={index} 
              className="text-2xl md:text-3xl font-serif font-bold text-muted-foreground/20 hover:text-primary/40 transition-colors cursor-default"
            >
              {partner}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
