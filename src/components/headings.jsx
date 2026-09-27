/** Mono `$ ./<cmd>` kicker used above tab headings. */
export function Kicker({ cmd }) {
  return (
    <p className="font-term text-sm text-teal-600 mb-2">
      <span className="text-slate-400">$</span> ./{cmd}
    </p>
  )
}

/** Uppercase section title inside the card. */
export function TabTitle({ children }) {
  return <h2 className="text-xl font-bold tracking-wide text-slate-800 uppercase mb-6">{children}</h2>
}
