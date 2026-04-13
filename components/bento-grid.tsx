import { GlassCard } from "@/components/glass-card"
import { BookCallButton } from "@/components/book-call-button"
import { Play, ArrowUpRight } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "AI-Powered Email Automation",
    description: "Automated email sequences that increased customer retention by 45% for a D2C fashion brand.",
    image: "/images/project-1.jpg",
    large: true,
    hasVideo: true,
  },
  {
    id: 2,
    title: "Inventory Forecasting System",
    description: "ML-based demand prediction reducing overstock by 30%.",
    image: "/images/project-2.jpg",
    large: false,
  },
  {
    id: 3,
    title: "Customer Support Bot",
    description: "AI chatbot handling 70% of support tickets automatically.",
    image: "/images/project-3.jpg",
    large: false,
  },
]

export function BentoGrid() {
  return (
    <section id="work" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Selected Work
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
            Automation That Drives Results
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large Featured Card */}
          <GlassCard 
            className="md:col-span-2 lg:col-span-2 overflow-hidden group" 
            hover
          >
            <div className="relative aspect-video bg-muted">
              <Image
                src={projects[0].image}
                alt={projects[0].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {projects[0].hasVideo && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                    <Play className="w-6 h-6 text-primary-foreground ml-1" />
                  </div>
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {projects[0].title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {projects[0].description}
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-primary flex-shrink-0" />
              </div>
            </div>
          </GlassCard>

          {/* Smaller Cards */}
          {projects.slice(1).map((project) => (
            <GlassCard key={project.id} className="overflow-hidden group" hover>
              <div className="relative aspect-[4/3] bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
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

        {/* CTA After Bento Grid */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to automate your e-commerce operations?
          </p>
          <BookCallButton size="lg" className="px-8" />
        </div>
      </div>
    </section>
  )
}
