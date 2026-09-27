import { useState } from 'react'
import ContactForm from './tabs/ContactForm.jsx'

/**
 * Contact Me section below the card — centered like the reference.
 * The form stays hidden behind a "+" button until the visitor opens it.
 */
export default function ContactSection() {
  const [open, setOpen] = useState(false)

  return (
    <section id="contact" className="scroll-mt-24 mt-20 text-center">
      <p className="font-term text-sm text-glow mb-2">
        <span className="text-muted">$</span> ./say-hello.sh
      </p>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Contact Me</h2>
      <p className="text-muted mt-3 leading-7">Click on the '+' button to contact me.</p>

      <div className="mt-8 flex justify-center">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? 'Hide contact form' : 'Show contact form'}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-500 to-sky-600 text-white shadow-lg hover:opacity-95 transition-opacity flex items-center justify-center"
        >
          <span
            className={`text-4xl font-light leading-none transition-transform duration-300 ${
              open ? 'rotate-45' : ''
            }`}
          >
            +
          </span>
        </button>
      </div>

      {open && (
        <div className="text-left mt-8">
          <ContactForm />
        </div>
      )}
    </section>
  )
}
