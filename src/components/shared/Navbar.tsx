'use client'

import { useState, useEffect } from 'react'

interface NavLink {
  label: string
  href: string
}

const navLinks: NavLink[] = [
  { label: 'Inicio', href: '#inicio'},
  { label: 'Experiencia', href: '#experience' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Sobre mí', href: '#about' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      let current = ''
      for (const link of navLinks) {
        const id = link.href.substring(1)
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          const viewportMiddle = window.innerHeight / 2
          if (rect.top <= viewportMiddle && rect.bottom >= viewportMiddle) {
            current = link.href
            break
          }
        }
      }
      
      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background">
      <nav className="px-8 py-6 flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo/Title */}

        <a href="#" className="flex items-center gap-2 group transition-transform">


          {/* SVG manipulado directamente con un gradiente real de 2 tonos */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="url(#logo-gradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300 group-hover:-rotate-3"
          >
            <defs>
              <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F8CD68" />
                <stop offset="100%" stopColor="#E29D26" /> {/* Tono más profundo para contraste */}
              </linearGradient>
            </defs>
            <path d="m18 16 4-4-4-4" />
            <path d="m6 8-4 4 4 4" />
            <path d="m14.5 4-5 16" />
          </svg>

          {/* 2. Texto del Logotipo */}
          <div className="flex items-center">
            <h2 className="text-xl font-black tracking-tighter bg-gradient-to-r from-primary to-[#E29D26] bg-clip-text text-transparent transition-colors duration-300">
              DR
            </h2>
          </div>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActiveSection(link.href)}
              className={`text-sm font-medium transition-colors ${activeSection === link.href
                  ? 'text-primary'
                  : 'text-tertiary hover:text-foreground'
                }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          aria-label="Abrir menú"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
    </header>
  )
}
