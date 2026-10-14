import type { CSSProperties } from 'react'
import { MagnetStraight, Timer, Trophy, CheckCircle } from '@/components/slab'
import type { Icon } from '@/components/slab'

/**
 * ServicesGrid - the Services view on one glass sheet.
 *
 * Three bands, top to bottom: your three-step method (on a dark plate so it
 * is the first thing the eye lands on), the five services as cards that carry
 * the marks of what each one is built with, and the live automation demo
 * scaled into whatever height is left. Same object language as Home and
 * Projects: the glass, the bento card, plated marks, orange for the index
 * and the accent.
 *
 * Every string below is a PLACEHOLDER. Replace it, or hand this file to your
 * AI assistant and tell it what to put in each spot.
 */

/* ---------- The method ---------- */

type Stage = {
  index: string
  label: string
  body: string
  Icon: Icon
  chips: string[]
}

const STAGES: Stage[] = [
  {
    index: '01',
    label: 'Understand',
    body: 'Clarify the audience, business goal, source material, and constraints.',
    Icon: MagnetStraight,
    chips: ['Brief', 'Audience', 'Research', 'Success criteria'],
  },
  {
    index: '02',
    label: 'Structure',
    body: 'Turn complexity into an editorial plan or an operating workflow people can follow.',
    Icon: Timer,
    chips: ['Outline', 'Ownership', 'Workflow'],
  },
  {
    index: '03',
    label: 'Deliver',
    body: 'Ship clear work, document the process, and improve it using real feedback.',
    Icon: Trophy,
    chips: ['Publish', 'Measure', 'Improve'],
  },
]

/* ---------- The services ---------- */

// Example tool marks from /public/icons. Swap for the tools you actually use.
const GHL = '/icons/gohighlevel.png'
const REACT = '/icons/ai/react.svg'
const TAILWIND = '/icons/ai/tailwindcss.svg'
const VITE = '/icons/ai/vite.svg'
const CLOUDFLARE = '/icons/ai/cloudflare.svg'
const N8N = '/icons/ai/n8n.svg'
const OPENAI = '/icons/openai.svg'
const GWS = '/icons/googleworkspace.svg'
const SLACK = '/icons/slack.svg'
const CLAUDE_CODE = '/icons/claude-code-logo.png'
const EXPO = '/icons/ai/expo.svg'
const CHROME = '/icons/ai/googlechrome.svg'

type Service = {
  index: string
  title: string
  description: string
  chip: string
  logos: string[]
  bullets: string[]
}

const SERVICES: Service[] = [
  {
    index: '01',
    title: 'Crypto Content Writing',
    description: 'Research-led long-form stories for exchanges, media teams, and Web3 brands.',
    chip: 'Editorial',
    logos: [GHL, REACT, TAILWIND],
    bullets: ['Market and regulatory research', 'Clear narrative structure', 'Reader-focused explanations'],
  },
  {
    index: '02',
    title: 'Content Operations',
    description: 'Editorial workflows that make planning, reviews, and publishing dependable.',
    chip: 'Systems',
    logos: [GHL, N8N, OPENAI],
    bullets: ['Content calendars', 'Review coordination', 'Quality standards'],
  },
  {
    index: '03',
    title: 'Remote Team Leadership',
    description: 'Practical coordination, coaching, and performance tracking for distributed teams.',
    chip: 'Leadership',
    logos: [GHL, GWS, SLACK],
    bullets: ['Training and onboarding', 'Work allocation', 'Performance records'],
  },
  {
    index: '04',
    title: 'Community Operations',
    description: 'Structured engagement and campaign support for fast-moving digital communities.',
    chip: 'Community',
    logos: [REACT, VITE, CLOUDFLARE],
    bullets: ['Campaign coordination', 'Member support', 'Clear reporting'],
  },
  {
    index: '05',
    title: 'Process Documentation',
    description: 'Simple guides and repeatable systems that reduce confusion and handoff risk.',
    chip: 'Documentation',
    logos: [CLAUDE_CODE, EXPO, CHROME],
    bullets: ['SOPs and playbooks', 'Templates and trackers', 'Knowledge transfer'],
  },
]

/** The tool marks, stacked horizontally on white tiles (same as Projects). */
function Marks({ logos }: { logos: string[] }) {
  return (
    <span className="bento__logos" aria-hidden="true">
      {logos.map((src) => (
        <span key={src} className="bento__logo">
          <img src={src} alt="" width={22} height={22} decoding="async" />
        </span>
      ))}
    </span>
  )
}

/* ---------- The page ---------- */

export default function ServicesGrid() {
  return (
    <section className="pgrid sgrid" aria-labelledby="services-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Services</span>
        <h1 className="pgrid__title" id="services-title">
          Clear content. Calm operations.
        </h1>
        <p className="pgrid__lede">
          I help teams explain complex subjects and build the systems that keep good work moving.
        </p>
      </header>

      <div className="home__glass sgrid__glass">
        {/* One dark plate, the headline on the left, the three stages wired
            in order on the right with a signal running them. */}
        <div className="sgrid__method" aria-labelledby="method-title">
          <div className="sgrid__method-copy">
            <span className="sgrid__method-eyebrow">Working method</span>
            <h2 className="sgrid__method-title" id="method-title">
              Understand. Structure. Deliver.
              <br />
              <span>A practical path from complexity to momentum.</span>
            </h2>
            <p className="sgrid__method-sub">
              The same disciplined process works for an article, a campaign, or a remote team workflow.
            </p>
          </div>

          <ol className="sgrid__stages" role="list">
            {STAGES.map((s, i) => {
              const StageIcon = s.Icon
              return (
                <li key={s.index} className="sgrid__stage" style={{ '--i': i } as CSSProperties}>
                  <span className="sgrid__stage-ghost" aria-hidden="true">{s.index}</span>
                  <span className="sgrid__stage-icon" aria-hidden="true">
                    <StageIcon size={22} weight="duotone" />
                  </span>
                  <h3 className="sgrid__stage-label">{s.label}.</h3>
                  <p className="sgrid__stage-body">{s.body}</p>
                  <ul className="sgrid__stage-chips" role="list" aria-label={`${s.label} touches`}>
                    {s.chips.map((c) => (
                      <li key={c} className="sgrid__stage-chip">{c}</li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ol>
        </div>

        {/* Five cards, each carrying the marks of what it is built with. */}
        <div className="sgrid__offers">
          <div className="sgrid__offers-head">
            <h2 className="sgrid__offers-title">Capabilities for content-led teams.</h2>
            <p className="sgrid__offers-sub">Available for remote roles, contracts, and project-based work.</p>
          </div>
          <ul className="bento sgrid__services" role="list">
            {SERVICES.map((s) => (
              <li key={s.title} className="bento__card sgrid__service">
                <span className="bento__head">
                  <span className="sgrid__service-top">
                    <Marks logos={s.logos} />
                    <span className="sgrid__service-index" aria-hidden="true">{s.index} / 05</span>
                  </span>
                  <span className="bento__title">{s.title}</span>
                  <span className="bento__desc">{s.description}</span>
                </span>
                <span className="sgrid__chip" aria-hidden="true">{s.chip}</span>
                <ul className="sgrid__bullets" role="list">
                  {s.bullets.map((b) => (
                    <li key={b} className="sgrid__bullet">
                      <CheckCircle size={15} weight="duotone" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}
