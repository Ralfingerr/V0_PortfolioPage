"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import { cn } from "@/lib/utils"

interface BookCallButtonProps {
  variant?: "default" | "outline" | "ghost" | "premium"
  size?: "default" | "sm" | "lg"
  className?: string
  text?: string
}

export function BookCallButton({ 
  variant = "default", 
  size = "default",
  className,
  text = "Book Your Revenue Audit"
}: BookCallButtonProps) {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "#"
  
  const handleClick = () => {
    if (calendlyUrl && calendlyUrl !== "#") {
      window.open(calendlyUrl, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <Button
      variant={variant === "premium" ? "default" : variant}
      size={size}
      onClick={handleClick}
      className={cn(
        "gap-2 font-medium transition-all duration-300",
        variant === "default" && "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105",
        variant === "premium" && "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 shadow-[0_0_20px_-5px_var(--color-primary)] animate-pulse hover:animate-none",
        variant === "outline" && "border-primary/50 text-primary hover:bg-primary/10 hover:border-primary",
        className
      )}
    >
      <Calendar className="h-4 w-4" />
      {text}
    </Button>
  )
}
