import { useState } from 'react'
import { PROFILE } from '../../data/profile.js'

const inputClass =
  'w-full rounded-lg border border-line bg-panel px-4 py-3 text-white placeholder:text-muted ' +
  'focus:outline-none focus:ring-2 focus:ring-glow/60 focus:border-glow/60 transition'

/**
 * Contact form (no backend). On submit it composes an email to PROFILE.email
 * via mailto: with the visitor's details prefilled.
 */
export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || '—'}\n\n${form.message}`,
    )
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-slate-300 mb-1">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          required
          value={form.name}
          onChange={update('name')}
          placeholder="Your name"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-slate-300 mb-1">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          required
          value={form.email}
          onChange={update('email')}
          placeholder="you@example.com"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="contact-phone" className="block text-sm font-medium text-slate-300 mb-1">
          Phone number <span className="text-muted font-normal">(optional)</span>
        </label>
        <input
          id="contact-phone"
          type="tel"
          value={form.phone}
          onChange={update('phone')}
          placeholder="+1 ..."
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-slate-300 mb-1">
          Message
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          value={form.message}
          onChange={update('message')}
          placeholder="I would love to hear from you. Start here..."
          className={`${inputClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 rounded-lg font-semibold tracking-widest uppercase text-white bg-gradient-to-r from-teal-500 to-sky-600 shadow-lg hover:opacity-95 transition-opacity"
      >
        Send Message
      </button>
      <p className="text-xs text-muted text-center">
        Submitting opens your email app with the message addressed to me.
      </p>
    </form>
  )
}
