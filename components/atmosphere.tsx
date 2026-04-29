'use client'

import { motion } from "framer-motion"

export function Atmosphere() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Amber/Gold Drift */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full"
      />

      {/* Deep Purple/Blue Drift */}
      <motion.div
        animate={{
          x: [0, -150, 100, 0],
          y: [0, 150, -100, 0],
          scale: [1, 1.1, 1.2, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-900/10 blur-[150px] rounded-full"
      />

      {/* Center Softener */}
      <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px]" />
    </div>
  )
}
