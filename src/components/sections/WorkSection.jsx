import Section from './Section.jsx'
import { PROJECTS } from '../../data/projects.js'

export default function WorkSection() {
  return (
    <Section id="work" cmd="work.sh" title="Selected Work">
      <div className="space-y-4">
        {PROJECTS.map((p) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className="block rounded-lg border border-line bg-panel p-5 hover:border-glow/60 transition-colors"
          >
            <p className="font-term text-sm text-glow break-all">📦 {p.name}</p>
            <p className="mt-2 text-muted leading-7">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded bg-ink border border-line text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </Section>
  )
}
