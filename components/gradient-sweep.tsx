'use client'

interface GradientSweepProps {
  children: React.ReactNode
}

export function GradientSweep({ children }: GradientSweepProps) {
  return (
    <>
      <span className="gradient-sweep-text">
        {children}
      </span>
      <style>{`
        @keyframes gradientSweep {
          0% {
            background-position: -1000px 0;
            -webkit-text-fill-color: transparent;
          }
          100% {
            background-position: 1000px 0;
            -webkit-text-fill-color: rgb(245, 245, 244);
          }
        }

        .gradient-sweep-text {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgb(198, 124, 78) 20%,
            rgb(198, 124, 78) 80%,
            transparent 100%
          );
          background-size: 1000px 100%;
          background-position: -1000px 0;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientSweep 2s ease-in-out forwards;
          animation-delay: 0.3s;
          color: rgb(245, 245, 244);
        }
      `}</style>
    </>
  )
}
