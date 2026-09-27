import Terminal from './Terminal.jsx'
import { SOCIAL_ICONS } from './icons.jsx'
import { useTypewriter } from '../hooks/useTypewriter.js'
import { PROFILE } from '../data/profile.js'

export default function Hero() {
  const typed = useTypewriter(PROFILE.typingPhrases)

  return (
    <section className="pt-28 md:pt-32 pb-12 px-5">
      <div className="max-w-3xl mx-auto">
        <Terminal />

        <div className="mt-12 text-center">
          <img
            src={PROFILE.avatar}
            alt={PROFILE.name}
            className="w-32 h-32 md:w-36 md:h-36 rounded-full mx-auto border-2 border-glow/60 object-cover"
          />
          <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-white">
            Hi! I am <span className="text-glow">{PROFILE.name}</span>
          </h1>
          <p className="mt-4 font-term text-xl md:text-2xl text-accent h-8">
            {typed}
            <span className="animate-pulse text-glow">▍</span>
          </p>
          <p className="mt-3 text-lg text-muted">{PROFILE.greeting}</p>
          <p className="mt-4 text-muted">
            📍 {PROFILE.location} &nbsp;•&nbsp; 🎓 {PROFILE.degree}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {PROFILE.socials.map(({ label, href, icon }) => {
              const Icon = SOCIAL_ICONS[icon]
              return (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  className="flex items-center gap-2 font-term text-sm px-4 py-2 rounded border border-line bg-panel text-muted hover:text-glow hover:border-glow/60 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
