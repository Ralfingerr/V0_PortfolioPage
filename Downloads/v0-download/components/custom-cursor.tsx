'use client'

import { useEffect, useState } from 'react'

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <>
      {/* Hide default cursor */}
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Custom cursor dot */}
      <div
        className="pointer-events-none fixed transition-opacity duration-300"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 1 : 0,
          zIndex: 9999,
        }}
      >
        {/* Gold dot */}
        <div
          className="rounded-full"
          style={{
            width: '12px',
            height: '12px',
            background: 'radial-gradient(circle, rgba(198, 124, 78, 1) 0%, rgba(198, 124, 78, 0.6) 70%)',
            boxShadow: '0 0 8px rgba(198, 124, 78, 0.6)',
            filter: 'drop-shadow(0 0 4px rgba(198, 124, 78, 0.4))',
          }}
        />
      </div>
    </>
  )
}
