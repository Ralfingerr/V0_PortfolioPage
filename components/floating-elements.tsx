'use client'

import { useEffect, useState } from 'react'

export function FloatingElements() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const elements = [
    { id: 1, size: 60, top: '15%', left: '8%', delay: '0s', duration: '20s' },
    { id: 2, size: 80, top: '45%', left: '85%', delay: '2s', duration: '25s' },
    { id: 3, size: 40, top: '75%', left: '12%', delay: '4s', duration: '30s' },
    { id: 4, size: 100, top: '25%', left: '75%', delay: '1s', duration: '35s' },
    { id: 5, size: 50, top: '85%', left: '50%', delay: '3s', duration: '22s' },
  ]

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {elements.map((el) => (
        <div
          key={el.id}
          className="absolute rounded-full"
          style={{
            width: `${el.size}px`,
            height: `${el.size}px`,
            top: el.top,
            left: el.left,
            background: `radial-gradient(circle, rgba(198, 124, 78, 0.15) 0%, rgba(198, 124, 78, 0.05) 70%, transparent 100%)`,
            boxShadow: `0 0 ${el.size * 0.5}px rgba(198, 124, 78, 0.3)`,
            filter: 'blur(1px)',
            transform: `translateY(${scrollY * 0.3}px)`,
            animation: `float ${el.duration} ease-in-out infinite`,
            animationDelay: el.delay,
            transition: 'transform 0.1s ease-out',
          }}
        />
      ))}

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-30px) translateX(15px);
          }
          50% {
            transform: translateY(-60px) translateX(-15px);
          }
          75% {
            transform: translateY(-30px) translateX(15px);
          }
        }
      `}</style>
    </div>
  )
}
