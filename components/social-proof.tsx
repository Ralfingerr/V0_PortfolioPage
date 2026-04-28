import { GlassCard } from "@/components/glass-card"
import { AnimatedCounter } from "@/components/animated-counter"
import { Zap, TrendingUp, Users } from "lucide-react"

const stats = [
  {
    icon: Zap,
    value: 150,
    suffix: "+",
    label: "Automations Delivered",
  },
  {
    icon: TrendingUp,
    value: 2.5,
    prefix: "€",
    suffix: "M+",
    label: "Revenue Generated",
    decimals: 1,
  },
  {
    icon: Users,
    value: 50,
    suffix: "+",
    label: "Brands Transformed",
  },
]

export function SocialProof() {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <GlassCard key={stat.label} className="p-8 text-center" hover>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-4xl font-serif font-semibold text-foreground mb-2">
                <AnimatedCounter
                  end={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
