import { useState } from 'react'

const LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'About Me', href: '#about' },
  // { label: 'Portfolio', href: '#work' }, // hidden for now — re-enable with the portfolio section
  { label: 'My skills', href: '#skills' },
  { label: 'Photography', href: '#photography' },
  { label: 'Contact Me', href: '#contact' },
]

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

/** Fixed dark top navigation bar with smooth-scroll section links. */
export default function TopBar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-ink/90 backdrop-blur border-b border-line">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-script text-3xl text-white hover:text-glow transition-colors leading-none"
        >
          Jiten_Dhimmar
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted hover:text-glow transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-muted hover:text-glow transition-colors p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <MenuIcon />
        </button>
      </div>

      {open && (
        <nav
          className="md:hidden border-t border-line px-4 py-3 flex flex-col gap-1 bg-ink"
          aria-label="Primary mobile"
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2.5 text-sm text-muted hover:text-glow transition-colors border-b border-line/50 last:border-0"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
