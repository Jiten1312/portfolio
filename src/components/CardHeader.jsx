function Cover() {
  return (
    <div className="relative h-24 md:h-28 overflow-hidden bg-[#0a0f14]">
      <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-teal-500/25 blur-3xl" />
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-sky-600/25 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 w-56 h-56 rounded-full bg-teal-400/15 blur-3xl" />
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center font-term text-white/[0.06] text-5xl select-none"
      >
        {'{ }'}
      </div>
    </div>
  )
}

/**
 * Card header: slim dark terminal-style cover.
 * Avatar, name and title already live in the hero above — nothing repeated here.
 * Identical on every tab so the card keeps a fixed size.
 */
export default function CardHeader() {
  return <Cover />
}
