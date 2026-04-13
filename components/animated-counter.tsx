"use client"

import { useEffect, useRef, useState } from "react"

interface AnimatedCounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  decimals?: number
}

export function AnimatedCounter({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  decimals = 0,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          
          const startTime = Date.now()
          const animate = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3)
            const current = easeOut * end
            
            setCount(current)
            
            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }
          
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [end, duration, hasAnimated])

  const displayValue = decimals > 0 
    ? count.toFixed(decimals) 
    : Math.round(count).toLocaleString()

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{displayValue}{suffix}
    </span>
  )
}
