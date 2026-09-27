import { Kicker, TabTitle } from '../headings.jsx'
import { ROLES } from '../../data/experience.js'

export default function ExperienceTab() {
  return (
    <div>
      <Kicker cmd="experience.sh" />
      <TabTitle>Work Experience</TabTitle>
      <div className="space-y-8">
        {ROLES.map((r) => (
          <div key={r.title} className="flex gap-4">
            <span className="w-12 shrink-0 text-slate-400 font-medium">{r.year}</span>
            <div className="relative pl-6 border-l-2 border-sky-200">
              <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-sky-500" />
              <h3 className="font-semibold text-slate-800 leading-7">{r.title}</h3>
              <p className="text-slate-500 mt-1 leading-7">{r.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
