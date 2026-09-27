/**
 * Full-width page section below the card: mono kicker + title + optional subtitle.
 * `id` doubles as the smooth-scroll anchor for the top bar links.
 */
export default function Section({ id, cmd, title, subtitle, children }) {
  return (
    <section id={id} className="scroll-mt-24 mt-20">
      <p className="font-term text-sm text-glow mb-2">
        <span className="text-muted">$</span> ./{cmd}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">{title}</h2>
      {subtitle && <p className="text-muted mt-3 leading-7">{subtitle}</p>}
      <div className="mt-8">{children}</div>
    </section>
  )
}
