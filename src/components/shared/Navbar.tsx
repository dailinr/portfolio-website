'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  const [isOpen, setIsOpen] = useState(false)

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
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-50 flex flex-col justify-center items-center gap-[6px] w-10 h-10 text-foreground hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-current rounded-full block"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-current rounded-full block"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-current rounded-full block"
          />
        </motion.button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/5 shadow-2xl flex flex-col items-center py-10 gap-8 md:hidden z-40"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, delay: i * 0.05 }}
                onClick={() => {
                  setActiveSection(link.href)
                  setIsOpen(false)
                }}
                className={`text-lg font-semibold transition-all relative group ${
                  activeSection === link.href ? 'text-primary' : 'text-foreground/80 hover:text-foreground'
                }`}
              >
                {link.label}
                {/* Indicador animado y hover */}
                <span className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-300 ${
                  activeSection === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
