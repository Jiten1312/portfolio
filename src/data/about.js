export const BIO =
  'Hi, I am Jiten Dhimmar. I am a software engineer with 5+ years of experience turning ideas into ' +
  'applications. I build backend systems with Spring Boot and Python (Django, FastAPI), work with big ' +
  'data (Spark, Databricks, Hadoop), and ship on Azure cloud. I like building dev tools, automating ' +
  'repetitive work, and experimenting with GenAI-assisted engineering.'

export const HIGHLIGHTS = [
  { icon: '🔭', text: 'Currently SDE2 @ TD Securities — Risk Platform' },
  { icon: '🤖', text: 'Into agent workflows & context engineering' },
  {
    icon: '💡',
    text: 'I do best in demanding situations when effort, passion, and innovation are required for success',
  },
]

export const MINDSET = [
  {
    icon: '🤖',
    title: 'AI-assisted engineering',
    text: 'How AI-assisted engineering is reshaping the way we build software.',
  },
  {
    icon: '🏗️',
    title: 'Systems that endure',
    text: 'Designing systems that scale gracefully and fail gracefully.',
  },
  {
    icon: '🛠️',
    title: 'Developer experience',
    text: 'Automate the toil, keep the craft.',
  },
]

export const SKILL_IDS = [
  'py',
  'java',
  'spring',
  'django',
  'fastapi',
  'redhat',
  'azure',
  'kubernetes',
  'docker',
  'terraform',
  'githubactions',
  'postgres',
  'mongodb',
  'mysql',
  'sqlite',
  'git',
]

export const skillIconsUrl = (perline = 8, theme = 'light') =>
  `https://skillicons.dev/icons?i=${SKILL_IDS.join(',')}&theme=${theme}&perline=${perline}`
