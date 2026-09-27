import { useState } from 'react'
import TopBar from './components/TopBar.jsx'
import Hero from './components/Hero.jsx'
import CardHeader from './components/CardHeader.jsx'
import TabBar from './components/TabBar.jsx'
import AboutTab from './components/tabs/AboutTab.jsx'
import ExperienceTab from './components/tabs/ExperienceTab.jsx'
import ContactTab from './components/tabs/ContactTab.jsx'
import MindsetSection from './components/sections/MindsetSection.jsx'
import SkillsSection from './components/sections/SkillsSection.jsx'
// import WorkSection from './components/sections/WorkSection.jsx' // hidden for now — re-enable when the portfolio section returns
import PhotographySection from './components/sections/PhotographySection.jsx'
import FunFactSection from './components/sections/FunFactSection.jsx'
import ContactSection from './components/ContactSection.jsx'

const TABS = [
  { id: 'about', label: 'About', Component: AboutTab },
  { id: 'experience', label: 'Experience', Component: ExperienceTab },
  { id: 'contact', label: 'Contact', Component: ContactTab },
]

export default function App() {
  const [activeTab, setActiveTab] = useState('about')
  const ActiveTab = TABS.find((t) => t.id === activeTab).Component

  return (
    <div id="top" className="min-h-screen bg-ink text-white antialiased">
      <TopBar />
      <Hero />

      <main className="px-4 pb-16">
        <section id="about" className="scroll-mt-24">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
            <CardHeader />
            <div className="card-scroll px-6 md:px-10 py-8 h-[62vh] min-h-[440px] max-h-[600px] overflow-y-auto text-slate-800">
              <ActiveTab />
            </div>
            <TabBar tabs={TABS} active={activeTab} onChange={setActiveTab} />
          </div>
        </section>

        <div className="max-w-2xl mx-auto">
          <MindsetSection />
          <SkillsSection />
          {/* <WorkSection /> hidden for now — re-enable when the portfolio section returns */}
          <PhotographySection />
          <FunFactSection />
          <ContactSection />
        </div>

        <p className="text-center font-term text-xs text-muted mt-16">© 2026 Jiten Dhimmar</p>
      </main>
    </div>
  )
}
