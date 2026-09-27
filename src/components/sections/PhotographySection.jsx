import { useRef } from 'react'
import Section from './Section.jsx'
import { usePhotos } from '../../hooks/usePhotos.js'

function ChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  )
}

/**
 * Photography carousel driven by public/photos/photos.json.
 * Horizontal scroll with exactly 3 photos visible at a time (9:16 tiles),
 * plus < > buttons that scroll one page per click.
 * Add/remove photos by editing the JSON — no code changes needed.
 */
export default function PhotographySection() {
  const { photos, status } = usePhotos()
  const trackRef = useRef(null)

  const scrollPage = (dir) => {
    const el = trackRef.current
    if (el) el.scrollBy({ left: dir * el.clientWidth, behavior: 'smooth' })
  }

  return (
    <Section
      id="photography"
      cmd="photos.sh"
      title="Photography"
      subtitle="I like clicking photos — especially landmarks."
    >
      {status === 'loading' ? (
        <p className="text-muted text-sm">Loading photos…</p>
      ) : photos.length === 0 ? (
        <p className="text-muted text-sm">📷 Photos coming soon.</p>
      ) : (
        <div className="relative">
          <div
            ref={trackRef}
            className="photo-scroll overflow-x-auto rounded-lg border border-line snap-x"
          >
            <div className="flex gap-3 p-1">
              {photos.map((p) => (
                <figure
                  key={p.src}
                  className="relative group shrink-0 basis-[calc((100%-1.5rem)/3)] snap-start aspect-[9/16] overflow-hidden rounded bg-panel"
                >
                  <img
                    src={p.src}
                    alt={p.alt || p.caption}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 px-2 py-1.5 text-[11px] text-white text-center bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    {p.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => scrollPage(-1)}
            aria-label="Scroll photos left"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur flex items-center justify-center transition-colors"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            onClick={() => scrollPage(1)}
            aria-label="Scroll photos right"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur flex items-center justify-center transition-colors"
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </Section>
  )
}
