import { useEffect, useState } from 'react'
import { resume } from './data/resume'
import type { RoleEntry } from './data/resume'
import type { SkillGraphic } from './data/skillIcons'
import {
  SKILL_LOGO_WHITE_IMG,
  skillGraphic,
  skillIconFill,
} from './data/skillIcons'
import './App.css'

type Theme = 'light' | 'dark'

const THEME_STORAGE_KEY = 'resume-theme'

function readInitialTheme(): Theme {
  if (typeof document !== 'undefined') {
    const fromAttr = document.documentElement.dataset.theme
    if (fromAttr === 'light' || fromAttr === 'dark') return fromAttr
  }
  return 'dark'
}

function DownloadPdfButton() {
  const handleDownload = () => {
    const detailsEls = Array.from(document.querySelectorAll('details'))
    const wasOpen = detailsEls.map((d) => d.open)
    detailsEls.forEach((d) => {
      d.open = true
    })

    const originalTitle = document.title
    document.title = 'Travis Myrick - Resume'

    const restore = () => {
      detailsEls.forEach((d, i) => {
        d.open = wasOpen[i]
      })
      document.title = originalTitle
      window.removeEventListener('afterprint', restore)
    }
    window.addEventListener('afterprint', restore)

    window.print()
  }

  return (
    <button
      type="button"
      className="resume__download"
      onClick={handleDownload}
      aria-label="Download resume as PDF"
      title="Download resume as PDF"
    >
      <span className="resume__download-prefix" aria-hidden="true">
        $
      </span>
      <span className="resume__download-cmd">save</span>
      <span className="resume__download-arg">resume.pdf</span>
    </button>
  )
}

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(readInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme)
    } catch {
      // ignore storage errors (private mode, etc.)
    }
  }, [theme])

  const next: Theme = theme === 'dark' ? 'light' : 'dark'

  return (
    <button
      type="button"
      className="resume__theme-toggle"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
    >
      <span className="resume__theme-toggle-prefix" aria-hidden="true">
        //
      </span>
      <span className="resume__theme-toggle-key" aria-hidden="true">
        theme:
      </span>
      <span className="resume__theme-toggle-value">{theme}</span>
    </button>
  )
}

function SkillLogo({
  label,
  graphic,
}: {
  label: string
  graphic: SkillGraphic | undefined
}) {
  if (!graphic) {
    return (
      <span className="resume__skill-fallback" title={label} aria-label={label}>
        {label}
      </span>
    )
  }

  if (graphic.kind === 'image') {
    const whiteImg = SKILL_LOGO_WHITE_IMG.has(label)
    return (
      <span
        className={[
          'resume__skill-logo',
          graphic.wide ? 'resume__skill-logo--wide' : '',
          whiteImg ? 'resume__skill-logo--white-img' : '',
        ]
          .filter(Boolean)
          .join(' ')}
        title={label}
        aria-label={label}
      >
        <img
          src={graphic.src}
          alt=""
          className="resume__skill-logo-img"
          loading="lazy"
          decoding="async"
          draggable={false}
        />
      </span>
    )
  }

  const { icon } = graphic
  return (
    <span className="resume__skill-logo" title={label} aria-label={label}>
      <svg
        className="resume__skill-logo-svg"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden={true}
        focusable={false}
      >
        <path fill={skillIconFill(label, icon)} d={icon.path} />
      </svg>
    </span>
  )
}

type RoleBlock =
  | { kind: 'single'; role: RoleEntry }
  | { kind: 'compact'; roles: RoleEntry[] }

function groupExperienceRoles(roles: RoleEntry[]): RoleBlock[] {
  const out: RoleBlock[] = []
  let i = 0
  while (i < roles.length) {
    const r = roles[i]
    if (r.emphasis === 'compact') {
      const batch: RoleEntry[] = []
      while (i < roles.length && roles[i].emphasis === 'compact') {
        batch.push(roles[i])
        i++
      }
      out.push({ kind: 'compact', roles: batch })
    } else {
      out.push({ kind: 'single', role: r })
      i++
    }
  }
  return out
}

function App() {
  return (
    <div className="resume">
      <div className="resume__actions">
        <DownloadPdfButton />
        <ThemeToggle />
      </div>
      <header className="resume__header">
        <div className="resume__header-main">
          <p className="resume__prompt" aria-hidden="true">
            <span className="resume__prompt-user">travis</span>
            <span className="resume__prompt-host">@resume</span>
            <span>:~$ </span>
            <span className="resume__prompt-cmd">cat resume.md</span>
          </p>
          <p className="resume__eyebrow">{resume.targetTitle}</p>
          <h1 className="resume__name">
            <span>{resume.name}</span>
            <span className="resume__caret" aria-hidden="true" />
          </h1>
          <p className="resume__location">{resume.location}</p>
        </div>
        <nav className="resume__contact" aria-label="Contact">
          <ul>
            {resume.contact.map((c) => (
              <li key={c.href}>
                <a href={c.href} aria-label={`${c.label}: ${c.display}`}>
                  {c.display}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <nav className="resume__toc" aria-label="On this page">
        <a href="#summary">Summary</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
      </nav>

      <main>
        <section id="summary" className="resume__section">
          <h2>Summary</h2>
          {resume.summary.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </section>

        <section id="skills" className="resume__section">
          <h2>Skills</h2>
          <div className="resume__skills">
            {resume.skillGroups.map((g) => (
              <div key={g.name} className="resume__skill-group">
                <h3>{g.name}</h3>
                <ul className="resume__skill-logos" role="list">
                  {g.items.map((item) => (
                    <li key={item}>
                      <SkillLogo label={item} graphic={skillGraphic(item)} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="resume__spoken">
              <h3>Spoken languages</h3>
              <ul>
                {resume.languages.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="experience" className="resume__section">
          <h2>Experience</h2>
          <ol className="resume__timeline">
            {resume.experience.map((job) => (
              <li key={job.company} className="resume__company">
                <div className="resume__company-head">
                  <h3>{job.company}</h3>
                  <p className="resume__meta">
                    {job.location}
                    {job.tenureSummary ? ` · ${job.tenureSummary}` : ''}
                  </p>
                </div>
                <ol className="resume__roles">
                  {groupExperienceRoles(job.roles).map((block, blockIdx) =>
                    block.kind === 'compact' ? (
                      <li
                        key={`compact-${blockIdx}`}
                        className="resume__role resume__role--compact-block"
                      >
                        <p className="resume__compact-heading">Earlier titles</p>
                        <ul className="resume__compact-list">
                          {block.roles.map((role) => (
                            <li key={role.title}>
                              <span className="resume__compact-title">
                                {role.title}
                              </span>
                              <span className="resume__compact-dates">
                                {role.dates}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ) : (
                      <li
                        key={`${block.role.title}-${blockIdx}`}
                        className={`resume__role resume__role--single${
                          block.role.emphasis === 'featured'
                            ? ' resume__role--featured'
                            : ''
                        }`}
                      >
                        <div className="resume__role-head">
                          <h4>{block.role.title}</h4>
                          <p className="resume__dates">{block.role.dates}</p>
                        </div>
                        {block.role.note ? (
                          <p className="resume__note">{block.role.note}</p>
                        ) : null}
                        {block.role.highlights?.length ? (
                          block.role.collapsible ? (
                            <details className="resume__details">
                              <summary>Details</summary>
                              <ul>
                                {block.role.highlights.map((h) => (
                                  <li key={h}>{h}</li>
                                ))}
                              </ul>
                            </details>
                          ) : (
                            <ul className="resume__highlights">
                              {block.role.highlights.map((h) => (
                                <li key={h}>{h}</li>
                              ))}
                            </ul>
                          )
                        ) : null}
                      </li>
                    ),
                  )}
                </ol>
              </li>
            ))}
          </ol>
        </section>

        <section id="education" className="resume__section">
          <h2>Education</h2>
          <ul className="resume__education">
            {resume.education.map((e) => (
              <li key={e.school}>
                <strong>{e.school}</strong>
                <span>
                  {e.degree} · {e.year}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="resume__footer">
        <p>
          meow!
        </p>
      </footer>
    </div>
  )
}

export default App
