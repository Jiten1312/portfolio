import Section from './Section.jsx'
import { skillIconsUrl } from '../../data/about.js'

export default function SkillsSection() {
  return (
    <Section id="skills" cmd="skills.sh" title="Skills">
      <img
        src={skillIconsUrl(8, 'dark')}
        alt="Python, Java, Spring, Django, FastAPI, Redhat, Azure, Kubernetes, Docker, Terraform, GitHub Actions, PostgreSQL, MongoDB, MySQL, SQLite, Git"
        className="max-w-full"
        loading="lazy"
      />
    </Section>
  )
}
