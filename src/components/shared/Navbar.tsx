'use client'

interface NavLink {
  label: string
  href: string
  isActive?: boolean
}

const navLinks: NavLink[] = [
  { label: 'Experiencia', href: '#experience' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Sobre mí', href: '#about-me' },
  // { label: 'Contacto', href: '#contact' },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background">
      <nav className="px-8 py-6 flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo/Title */}
        <div className="text-xl font-bold text-foreground">
          DR
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                link.isActive
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
