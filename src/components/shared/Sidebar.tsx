'use client'

import { SOCIAL_LINKS } from '@/src/contants';

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-8 pl-8">
      {/* Vertical Line */}
      <div className="w-px h-20 bg-gradient-to-b from-transparent via-primary to-transparent" />

      {/* Social Icons */}
      <div className="flex flex-col gap-6">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-tertiary hover:text-primary transition-colors duration-300"
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>

      {/* Bottom Line */}
      <div className="w-px h-20 bg-gradient-to-b from-transparent via-primary to-transparent" />
    </aside>
  )
}
