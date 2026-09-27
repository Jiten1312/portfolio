import { PROFILE } from '../data/profile.js'

function PromptLine({ command }) {
  return (
    <p>
      <span className="text-glow">jiten@dev</span>
      <span className="text-muted">:</span>
      <span className="text-accent">~</span>
      <span className="text-muted">$</span> <span className="text-white">{command}</span>
    </p>
  )
}

/**
 * Terminal window rendered as components (no image).
 * Content comes from PROFILE.terminalLines in src/data/profile.js.
 */
export default function Terminal() {
  return (
    <div className="rounded-lg border border-line bg-panel shadow-2xl overflow-hidden text-left">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-line">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-term text-xs text-muted">jiten@dev: ~</span>
      </div>
      <div className="p-5 font-term text-sm md:text-base leading-8">
        {PROFILE.terminalLines.map((line) => (
          <div key={line.command} className="mt-2 first:mt-0">
            <PromptLine command={line.command} />
            <p className="text-muted">{line.output}</p>
          </div>
        ))}
        <p className="mt-2">
          <span className="text-glow">jiten@dev</span>
          <span className="text-muted">:</span>
          <span className="text-accent">~</span>
          <span className="text-muted">$</span>{' '}
          <span className="animate-pulse text-glow">▍</span>
        </p>
      </div>
    </div>
  )
}
