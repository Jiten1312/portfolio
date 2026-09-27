import Section from './Section.jsx'
import { useFunFact } from '../../hooks/useFunFact.js'

function RefreshIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 4v6h6M20 20v-6h-6M20 9a8 8 0 00-14.3-3M4 15a8 8 0 0014.3 3"
      />
    </svg>
  )
}

/**
 * Fun Fact of the Day — fetched from the Useless Facts API, cached per day,
 * with a curated fallback when offline. Source is always credited.
 */
export default function FunFactSection() {
  const { fact, loading, surpriseMe } = useFunFact()

  return (
    <Section
      id="funfact"
      cmd="fun-fact.sh"
      title="Fun Fact of the Day"
      subtitle="A little trivia, fetched fresh every day."
    >
      <div className="rounded-lg border border-line bg-panel p-5 font-term text-sm">
        <p className="text-muted">
          <span className="text-glow">$</span> curl facts.api/today
        </p>

        <div className="mt-4 min-h-[72px]">
          {loading && !fact ? (
            <p className="text-muted animate-pulse">fetching fact…</p>
          ) : fact ? (
            <p className="text-white leading-7">
              <span className="text-glow">&gt;</span> {fact.text}
            </p>
          ) : null}
        </div>

        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-xs text-muted">
            {fact?.url ? (
              <>
                via{' '}
                <a
                  href={fact.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-glow hover:underline"
                >
                  {fact.source} ↗
                </a>
              </>
            ) : (
              'from the vault'
            )}
          </p>
          <button
            type="button"
            onClick={surpriseMe}
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-md border border-line px-3 py-1.5 text-xs text-muted hover:text-glow hover:border-glow/50 transition-colors disabled:opacity-50"
          >
            <RefreshIcon />
            {loading ? 'fetching…' : 'Surprise me'}
          </button>
        </div>
      </div>
    </Section>
  )
}
