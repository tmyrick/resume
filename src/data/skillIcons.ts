import type { SimpleIcon } from 'simple-icons'
import deviconArgocd from 'devicon/icons/argocd/argocd-original.svg?url'
import deviconAws from 'devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg?url'
import {
  siClaude,
  siDatadog,
  siDocker,
  siElasticsearch,
  siGithub,
  siGithubactions,
  siGoogleads,
  siGraphql,
  siJavascript,
  siMongodb,
  siMysql,
  siNewrelic,
  siNodedotjs,
  siPostgresql,
  siPython,
  siReact,
  siRetool,
  siRollbar,
  siRuby,
  siRubyonrails,
  siSnowflake,
  siSplunk,
  siTypescript,
} from 'simple-icons'

/**
 * - `brand`: each icon uses its official hex from Simple Icons.
 * - `mono`: icons use `currentColor`; set `--resume-skill-icon-color` in `index.css`.
 *   (Raster `<img>` assets keep their embedded colors.)
 */
export type SkillIconColorMode = 'brand' | 'mono'

export const SKILL_ICON_COLOR_MODE: SkillIconColorMode = 'brand'

/** Custom SVGs in `/public` (served from site root). */
const PUBLIC_SVG_BY_LABEL: Record<string, string> = {
  dbt: '/dbt.svg',
  Dagster: '/dagster.svg',
  LaunchDarkly: '/launchdarkly.svg',
}

/**
 * [Devicon](https://devicon.dev/) — AWS, Argo CD.
 */
const DEVICON_BY_LABEL: Record<string, string> = {
  AWS: deviconAws,
  'Argo CD': deviconArgocd,
}

export type SkillGraphic =
  | { kind: 'simple-icons'; icon: SimpleIcon }
  | { kind: 'image'; src: string; wide?: boolean }

const byLabelSimple: Record<string, SimpleIcon> = {
  Ruby: siRuby,
  Python: siPython,
  JavaScript: siJavascript,
  TypeScript: siTypescript,
  'Node.js': siNodedotjs,
  'Ruby on Rails': siRubyonrails,
  React: siReact,
  GraphQL: siGraphql,
  SQL: siMysql,
  PostgreSQL: siPostgresql,
  MongoDB: siMongodb,
  Elasticsearch: siElasticsearch,
  Snowflake: siSnowflake,
  Docker: siDocker,
  GitHub: siGithub,
  'GitHub Actions': siGithubactions,
  Datadog: siDatadog,
  'New Relic': siNewrelic,
  Rollbar: siRollbar,
  Splunk: siSplunk,
  Retool: siRetool,
  'PPC advertising': siGoogleads,
  Claude: siClaude,
}

/** `<img>` skills that should render as white (CSS filter on the asset). */
export const SKILL_LOGO_WHITE_IMG = new Set<string>(['LaunchDarkly'])

export function skillGraphic(label: string): SkillGraphic | undefined {
  const pub = PUBLIC_SVG_BY_LABEL[label]
  if (pub) return { kind: 'image', src: pub }

  const devSrc = DEVICON_BY_LABEL[label]
  if (devSrc) {
    return {
      kind: 'image',
      src: devSrc,
      wide: label === 'AWS',
    }
  }

  const icon = byLabelSimple[label]
  if (icon) return { kind: 'simple-icons', icon }
  return undefined
}

/** Simple Icons paths forced to white (mono mode still uses `currentColor`). */
const SIMPLE_ICON_FILL_WHITE = new Set<string>(['GitHub', 'Splunk'])

export function skillIconFill(label: string, icon: SimpleIcon): string {
  if (SKILL_ICON_COLOR_MODE === 'mono') return 'currentColor'
  if (SIMPLE_ICON_FILL_WHITE.has(label)) return '#ffffff'
  return `#${icon.hex}`
}
