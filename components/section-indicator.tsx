'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
]

export function SectionIndicator() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col gap-6"
      style={{
        background: 'rgba(30, 27, 26, 0.4)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '9999px',
        padding: '1.5rem 1rem',
      }}
    >
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => {
            const element = document.getElementById(section.id)
            element?.scrollIntoView({ behavior: 'smooth' })
          }}
          title={section.label}
          className={cn(
            'w-3 h-3 rounded-full transition-all duration-300',
            activeSection === section.id
              ? 'bg-primary w-8 h-3 scale-125'
              : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
          )}
        />
      ))}
    </div>
  )
}
