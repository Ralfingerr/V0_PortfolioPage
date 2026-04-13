"use client"

import { useState, useEffect } from "react"
import { BookCallButton } from "@/components/book-call-button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Detect active section
      const sections = navLinks.map(link => link.href.substring(1))
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "glass py-4" 
          : "bg-transparent py-6"
      )}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between max-w-6xl">
        <a 
          href="#" 
          className="font-serif text-xl font-semibold text-foreground hover:text-primary transition-colors"
        >
          Ralf Hillebrand
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1)
            const isActive = activeSection === sectionId
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "text-sm font-medium transition-all relative",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
                {isActive && (
                  <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/50 to-primary rounded-full" />
                )}
              </button>
            )
          })}
          <BookCallButton variant="outline" size="sm" />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass mt-2 mx-4 rounded-xl p-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-muted-foreground hover:text-foreground transition-colors text-left py-2"
              >
                {link.label}
              </button>
            ))}
            <BookCallButton variant="default" size="default" className="mt-2" />
          </div>
        </div>
      )}
    </header>
  )
}
