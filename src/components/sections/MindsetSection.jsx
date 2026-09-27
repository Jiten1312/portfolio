import Section from './Section.jsx'
import { MINDSET } from '../../data/about.js'

export default function MindsetSection() {
  return (
    <Section id="mindset" cmd="mindset.sh" title="Engineering Mindset">
      <div className="space-y-3">
        {MINDSET.map((m) => (
          <div
            key={m.title}
            className="rounded-lg border border-line bg-panel p-4 flex gap-4"
          >
            <span className="text-2xl">{m.icon}</span>
            <div>
              <p className="font-semibold text-white">{m.title}</p>
              <p className="text-muted text-sm mt-1 leading-6">{m.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
