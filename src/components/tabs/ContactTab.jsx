import { Kicker, TabTitle } from '../headings.jsx'
import { SOCIAL_ICONS, PinIcon, MailIcon } from '../icons.jsx'
import { PROFILE } from '../../data/profile.js'

const ROWS = [
  { Icon: PinIcon, text: PROFILE.location },
  { Icon: MailIcon, text: PROFILE.email },
]

/** Contact tab inside the card: info rows + WORK TOGETHER + socials. */
export default function ContactTab() {
  return (
    <div>
      <Kicker cmd="contact.sh" />
      <TabTitle>Contact</TabTitle>

      <div>
        {ROWS.map(({ Icon, text }) => (
          <div key={text} className="flex items-center py-4 border-b border-slate-100">
            <span className="w-16 shrink-0 flex justify-center text-slate-700 border-r border-slate-200">
              <Icon className="w-7 h-7" />
            </span>
            <span className="pl-5 text-slate-600 break-all">{text}</span>
          </div>
        ))}
      </div>

      <a
        href={`mailto:${PROFILE.email}?subject=${encodeURIComponent("Let's work together")}`}
        className="block text-center mt-8 py-4 rounded-lg font-semibold tracking-widest uppercase text-white bg-gradient-to-r from-teal-500 to-sky-600 shadow-lg hover:opacity-95 transition-opacity"
      >
        Work Together
      </a>

      <div className="mt-8 flex justify-center gap-4">
        {PROFILE.socials.map(({ label, href, icon }) => {
          const Icon = SOCIAL_ICONS[icon]
          return (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:text-teal-600 hover:bg-teal-50 transition-colors"
            >
              <Icon />
            </a>
          )
        })}
      </div>
    </div>
  )
}
