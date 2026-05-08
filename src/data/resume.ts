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
    'Senior Backend / Full-Stack Engineer with 7+ years in software development and a prior foundation in technical support and account management. Strong in Ruby on Rails, API design, data modeling, PostgreSQL, MongoDB, Snowflake, TypeScript, React, and observability. Known for turning ambiguous business requirements into reliable backend systems and clear technical execution.',
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
      items: ['PostgreSQL', 'MongoDB', 'SQL', 'Elasticsearch', 'Snowflake'],
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
      items: ['eCommerce', 'pointOfSale', 'ppcAdvertising'],
    },
  ],
  languages: ['English - Native or bilingual', 'Spanish - Elementary'],
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
          highlights: [
            "Senior product engineer building backend and full-stack systems for Dutchie\u2019s cannabis commerce platform, with a focus on Ruby on Rails APIs, data modeling, reporting workflows, and customer-facing product surfaces.",
            'Designed and implemented REST/GraphQL API endpoints supporting Brand Portal reporting and inventory insights, including paginated resources, filtering, sorting, authorization, serialization, and Snowflake-backed analytics data.',
            'Built backend workflows that translate complex business concepts across brands, retailers, locations, POS integrations, inventory levels, sales velocity, and product availability into reliable API responses.',
            'Built and maintained third-party integrations end-to-end - partner API contracts, webhook handling, retry and idempotency strategies, and mapping external data shapes into reliable internal models the rest of the platform can depend on.',
            'Improved system observability and debugging using Datadog, structured logging, and targeted instrumentation across Rails services and data workflows.',
            'Built internal Claude Skills wired to multiple MCP servers to accelerate incident troubleshooting and automate repetitive engineering workflows - compressing multi-step investigations into single-prompt diagnostics and unlocking broader efficiency gains across the team.',
            'Partnered with product, analytics, design, and engineering stakeholders to scope ambiguous reporting features, clarify data contracts, and ship pragmatic solutions across legacy and evolving systems.',
            'Worked across PostgreSQL, MongoDB, Snowflake, Rails, React, TypeScript, and GraphQL in a large production application with high operational and data-quality demands.',
            'Mentored and unblocked teammates through code review, implementation planning, debugging, and architectural tradeoff discussions.',
          ],
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
          title: 'Earlier - application & technical support',
          dates: 'Oct 2012 – Aug 2016',
          highlights: [
            'Tier 1–3: SME coverage, bug triage and Rails/JS fixes on sites and proprietary apps, enhancement vetting, code-review QA, docs and training, CMS HTML/CSS updates, KB, DNS and permissions, cross-team coordination with AMs and SEO.',
          ],
        },
      ],
    },
  ],
}
