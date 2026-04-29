'use client'

import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink, CheckCircle2, Zap, TrendingUp } from "lucide-react"
import Image from "next/image"

interface ProjectSidePanelProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    description: string
    image: string
    url?: string
    metric?: string
    category: string
    details?: {
      challenge: string
      solution: string
      results: string[]
    }
  } | null
}

export function ProjectSidePanel({ isOpen, onClose, project }: ProjectSidePanelProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-md z-[110]"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-2xl bg-card border-l border-white/10 z-[120] shadow-2xl overflow-y-auto"
          >
            <div className="sticky top-0 p-6 flex justify-between items-center bg-card/80 backdrop-blur-md border-b border-white/5 z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">{project.category}</span>
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/5 transition-colors text-muted-foreground hover:text-foreground"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-8 md:p-12">
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-12 shadow-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top"
                />
                {project.metric && (
                  <div className="absolute top-6 left-6 bg-primary px-4 py-2 rounded-xl text-primary-foreground font-bold flex items-center gap-2 shadow-xl">
                    <TrendingUp className="w-5 h-5" />
                    {project.metric}
                  </div>
                )}
              </div>

              <h2 className="font-serif text-4xl font-bold text-foreground mb-8 text-balance">
                {project.title}
              </h2>

              <div className="space-y-12">
                <section>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                    <Zap className="w-4 h-4" /> The Challenge
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.details?.challenge || "Scaling email operations while maintaining brand voice and high deliverability in a competitive D2C market."}
                  </p>
                </section>

                <section>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">The Solution</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.details?.solution || "Implementation of advanced Klaviyo flows, predictive analytics for restock alerts, and a modular email design system."}
                  </p>
                </section>

                <section>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Key Outcomes</h3>
                  <div className="grid gap-4">
                    {(project.details?.results || [
                      "Implemented automated lifecycle flows reducing manual work by 70%",
                      "Increased segment-based revenue attribution from 12% to 34%",
                      "Achieved average open rates of 45% across transactional emails"
                    ]).map((result, idx) => (
                      <div key={idx} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                        <span className="text-foreground font-medium">{result}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-5 rounded-2xl font-bold text-lg w-full hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 mt-8"
                  >
                    View Live Website
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
