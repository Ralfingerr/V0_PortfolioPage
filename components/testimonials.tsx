import { GlassCard } from "@/components/glass-card"
import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    quote: "Ralf transformed our entire fulfillment process. What used to take hours now happens automatically, and our error rate dropped to nearly zero.",
    name: "Sarah Mitchell",
    role: "CEO, StyleHouse",
    image: "/images/testimonial-1.jpg",
    rating: 5,
  },
  {
    id: 2,
    quote: "The AI email sequences Ralf built for us increased our repeat customer rate by 40%. The ROI was visible within the first month.",
    name: "Marcus Chen",
    role: "Founder, TechGear Co",
    image: "/images/testimonial-2.jpg",
    rating: 5,
  },
  {
    id: 3,
    quote: "Working with Ralf was a game-changer. His automation systems freed up 20 hours per week for our team to focus on growth.",
    name: "Emma Larsson",
    role: "COO, Nordic Beauty",
    image: "/images/testimonial-3.jpg",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Client Success Stories
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
<<<<<<< HEAD
            Trusted by Leading Brands
=======
            Trusted by Successful Online Businesses
>>>>>>> 1337abdd1407078c225f6278b612a686a0f63a9c
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <GlassCard key={testimonial.id} className="p-8 flex flex-col" hover>
              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-primary fill-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground leading-relaxed mb-8 flex-1">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-muted">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
