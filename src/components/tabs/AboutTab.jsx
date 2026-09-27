import { Kicker, TabTitle } from '../headings.jsx'
import { SOCIAL_ICONS } from '../icons.jsx'
import { PROFILE } from '../../data/profile.js'
import { BIO, HIGHLIGHTS } from '../../data/about.js'

/** About tab inside the card: bio + highlights + socials. */
export default function AboutTab() {
  return (
    <div>
      <Kicker cmd="about.sh" />
      <TabTitle>About</TabTitle>

      <p className="text-slate-600 leading-8">{BIO}</p>

      <ul className="mt-6 space-y-3">
        {HIGHLIGHTS.map((h) => (
          <li key={h.text} className="flex items-start gap-3 text-slate-700">
            <span className="text-lg leading-7">{h.icon}</span>
            <span className="leading-7">{h.text}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex gap-4">
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
