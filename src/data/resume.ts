export type ContactLink = {
  label: string
  display: string
  href: string
}

export type RoleEntry = {
  title: string
  dates: string
  /** Short context when LinkedIn had no role bullets */
  note?: string
  highlights?: string[]
  /** Long lists fold behind <details> */
  collapsible?: boolean
  /** compact rows are grouped and de-emphasized (e.g. prior Dutchie titles) */
  emphasis?: 'featured' | 'compact'
}

export type CompanyEntry = {
  company: string
  location: string
  tenureSummary: string
  roles: RoleEntry[]
}

export type ResumeData = {
  name: string
  targetTitle: string
  location: string
  contact: ContactLink[]
  summary: string[]
  skillGroups: { name: string; items: string[] }[]
  languages: string[]
  education: { school: string; degree: string; year: string }[]
  experience: CompanyEntry[]
}

export const resume: ResumeData = {
  name: 'Travis Myrick',
  /** Targeting Senior II IC roles */
  targetTitle: 'Senior Software Engineer II',
  location: 'Bend, Oregon, United States',
  contact: [
    {
      label: 'Email',
      display: 'myricktc@gmail.com',
      href: 'mailto:myricktc@gmail.com',
    },
    {
      label: 'LinkedIn',
      display: 'linkedin.com/in/travis-myrick',
      href: 'https://www.linkedin.com/in/travis-myrick',
    },
  ],
  summary: [
    'Senior software engineer. Strong footing in API-oriented design (REST), structured UI architecture (MVC), and improving system performance.',
    'Career foundation includes five years in technical support, one year in account management, and seven years (and counting) in software development—experience that shows up in clear communication, pragmatic prioritization, and reliable delivery.',
  ],
  skillGroups: [
    {
      name: 'Languages & runtimes',
      items: ['Ruby', 'Python', 'JavaScript', 'TypeScript', 'Node.js'],
    },
    {
      name: 'Frameworks & API layer',
      items: ['Ruby on Rails', 'React', 'GraphQL'],
    },
    {
      name: 'Data stores & warehousing',
      items: ['SQL', 'PostgreSQL', 'Elasticsearch', 'Snowflake'],
    },
    {
      name: 'Analytics & orchestration',
      items: ['dbt', 'Dagster'],
    },
    {
      name: 'Cloud, Git & delivery',
      items: ['AWS', 'Docker', 'Argo CD', 'GitHub', 'GitHub Actions'],
    },
    {
      name: 'Observability',
      items: ['Datadog', 'New Relic', 'Rollbar', 'Splunk'],
    },
    {
      name: 'What I know well',
      items: ['eCommerce', 'pointOfSalePos', 'ppcAdvertising'],
    },
    {
      name: 'What I like',
      items: [
        'backendDevelopment',
        'efficientDatabaseDesign',
        'systemPerformance',
      ],
    },
    {
      name: 'Preferred setup',
      items: ['macOs', 'gSuite', 'zoom'],
    },
  ],
  languages: ['English — Native or bilingual', 'Spanish — Elementary'],
  education: [
    {
      school: 'Portland State University',
      degree: 'Bachelor of Arts (BA), Philosophy',
      year: '2011',
    },
  ],
  experience: [
    {
      company: 'Dutchie',
      location: 'Bend, Oregon, United States',
      tenureSummary: '6 years 6 months',
      roles: [
        {
          title: 'Senior Software Engineer II',
          dates: 'Sep 2023 – Present',
          emphasis: 'featured',
          note:
            'Product engineering across the stack; Ruby on Rails, TypeScript, React, GraphQL, PostgreSQL, MongoDB' + '\n' + 'happy to share scope, systems, and impact in conversation.',
        },
        {
          title: 'Senior Software Engineer I',
          dates: 'Feb 2022 – Sep 2023',
          emphasis: 'compact',
        },
        {
          title: 'Software Engineer II',
          dates: 'Nov 2020 – Feb 2022',
          emphasis: 'compact',
        },
        {
          title: 'Software Engineer I',
          dates: 'Nov 2019 – Nov 2020',
          emphasis: 'compact',
        },
      ],
    },
    {
      company: 'Global Strategies International',
      location: 'Bend, Oregon',
      tenureSummary: '',
      roles: [
        {
          title: 'Analytics Manager',
          dates: 'Mar 2019 – Nov 2019',
          highlights: [
            'Front-end work on proprietary apps; Voice SEO process and delivery.',
            'Corporate website build and maintenance.',
          ],
        },
      ],
    },
    {
      company: 'ZANOMA - Amazon Experts',
      location: 'Bend, Oregon',
      tenureSummary: '',
      roles: [
        {
          title: 'Brand Manager',
          dates: 'Oct 2017 – Nov 2018',
          highlights: [
            'Client-facing Amazon brand management: SEO, PPC, catalog, inventory, positioning.',
          ],
        },
      ],
    },
    {
      company: 'GetG5',
      location: 'Bend, Oregon',
      tenureSummary: '4 years 11 months',
      roles: [
        {
          title: 'Jr. Support Engineer (Tier 4)',
          dates: 'Aug 2016 – Aug 2017',
          highlights: [
            'Liaison between Support and Product/Eng: fixes, smoke tests, code review, Scrum, KPI tooling.',
          ],
        },
        {
          title: 'Earlier — application & technical support',
          dates: 'Oct 2012 – Aug 2016',
          collapsible: true,
          highlights: [
            'Tier 3–2: SME coverage, bug triage and fixes (sites, proprietary apps, Rails/JS), enhancement vetting, docs, training, platform feature input, code-review QA.',
            'Tier 1: CMS HTML/CSS updates, KB, DNS, permissions, cross-team coordination with AMs and SEO.',
          ],
        },
      ],
    },
  ],
}
