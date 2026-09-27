/** Bottom tab bar of the profile card. */
export default function TabBar({ tabs, active, onChange }) {
  return (
    <nav
      className={`grid border-t border-slate-200 ${tabs.length === 3 ? 'grid-cols-3' : 'grid-cols-4'}`}
      aria-label="Sections"
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          aria-current={tab.id === active ? 'page' : undefined}
          className={`py-4 text-xs md:text-sm font-semibold tracking-wider uppercase transition-colors border-b-4 ${
            tab.id === active
              ? 'text-slate-900 border-teal-500 bg-slate-50'
              : 'text-slate-400 border-transparent hover:text-slate-600'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  )
}
