import { useCallback, useEffect, useState } from 'react'
import { FALLBACK_FACTS } from '../data/fallbackFacts.js'

const TODAY_URL = 'https://uselessfacts.jsph.pl/api/v2/facts/today?language=en'
const RANDOM_URL = 'https://uselessfacts.jsph.pl/api/v2/facts/random?language=en'
const DATE_KEY = 'funfact-date'
const FACT_KEY = 'funfact-data'

function todayStamp() {
  return new Date().toISOString().slice(0, 10)
}

/** Deterministic fallback: rotates through the curated list by day. */
function fallbackFact() {
  const day = Math.floor(Date.now() / 86400000)
  return {
    text: FALLBACK_FACTS[day % FALLBACK_FACTS.length],
    source: 'the vault',
    url: null,
    fallback: true,
  }
}

async function fetchFact(url) {
  const res = await fetch(url, { headers: { Accept: 'application/json' } })
  if (!res.ok) throw new Error(`fact api: ${res.status}`)
  const data = await res.json()
  if (!data || typeof data.text !== 'string') throw new Error('fact api: bad payload')
  return {
    text: data.text,
    source: data.source || 'Useless Facts',
    url: data.permalink || data.source_url || 'https://uselessfacts.jsph.pl',
    fallback: false,
  }
}

/**
 * Today's fun fact, cached in localStorage keyed by date so it stays
 * stable all day. Falls back to the curated list when offline.
 * `surpriseMe` fetches a fresh random fact on demand.
 */
export function useFunFact() {
  const [fact, setFact] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    const stamp = todayStamp()

    try {
      const cached = localStorage.getItem(FACT_KEY)
      if (localStorage.getItem(DATE_KEY) === stamp && cached) {
        setFact(JSON.parse(cached))
        setLoading(false)
        return
      }
    } catch {
      /* storage unavailable — fetch anyway */
    }

    fetchFact(TODAY_URL)
      .then((f) => {
        if (cancelled) return
        setFact(f)
        try {
          localStorage.setItem(DATE_KEY, stamp)
          localStorage.setItem(FACT_KEY, JSON.stringify(f))
        } catch {
          /* ignore */
        }
      })
      .catch(() => {
        if (!cancelled) setFact(fallbackFact())
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [])

  const surpriseMe = useCallback(async () => {
    setLoading(true)
    try {
      setFact(await fetchFact(RANDOM_URL))
    } catch {
      setFact(fallbackFact())
    } finally {
      setLoading(false)
    }
  }, [])

  return { fact, loading, surpriseMe }
}
