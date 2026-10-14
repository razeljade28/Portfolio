import type { CSSProperties } from 'react'
import { ArrowUpRight, MapPin } from '@/components/slab'
import { profile } from '@/data/profile'

/**
 * AboutGrid - the About view as a fixed viewport.
 *
 * One glass sheet, two columns: who you are on the left, the illustration
 * on the right. Sized to the panel, so nothing here scrolls.
 *
 * The left column is a ladder, not a paragraph block: one display statement,
 * one line of context, then the four things you do - each carrying the marks
 * of the tools it is built with. The tools are the proof, so they are the
 * visual. Swap the marks below for your own (any square SVG/PNG in public/).
 */

const N8N = { src: '/icons/ai/n8n.svg', name: 'n8n' }
const ZAPIER = { src: '/icons/ai/zapier.svg', name: 'Zapier' }
const DOCKER = { src: '/icons/ai/docker.svg', name: 'Docker' }
const CLAUDE = { src: '/icons/ai/claude-color.svg', name: 'Claude' }
const CODEX = { src: '/icons/ai/codex.svg', name: 'Codex' }
const GWS = { src: '/icons/googleworkspace.svg', name: 'Google Workspace' }
const SLACK = { src: '/icons/ai/slack-color.svg', name: 'Slack' }
const FIREFLIES = { src: '/icons/ai/fireflies.png', name: 'Fireflies' }

type Capability = {
  index: string
  title: string
  marks: { src: string; name: string }[]
}

const CAPABILITIES: Capability[] = [
  {
    index: '01',
    title: 'Research-led crypto writing',
    marks: [CLAUDE, CODEX, GWS],
  },
  {
    index: '02',
    title: 'Editorial and content operations',
    marks: [GWS, SLACK, FIREFLIES],
  },
  {
    index: '03',
    title: 'Remote team leadership',
    marks: [SLACK, GWS, ZAPIER],
  },
  {
    index: '04',
    title: 'Process and workflow design',
    marks: [N8N, ZAPIER, DOCKER],
  },
]

export default function AboutGrid() {
  return (
    <section className="pgrid agrid" aria-labelledby="about-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">About</span>
        <h1 className="pgrid__title" id="about-title">
          {`Hi, I’m ${profile.firstName}.`}
        </h1>
        <p className="pgrid__lede">
          I turn technical subjects into clear stories and complex team activity into dependable systems.
        </p>
      </header>

      <div className="home__glass agrid__glass">
        <div className="agrid__copy">
          <p className="agrid__lead">
            I bring an engineer’s eye to communication.
            <span> Structure first, then clarity, then momentum.</span>
          </p>

          <p className="agrid__note">
            <strong>More than three years across LBank, Bitget, and MEXC Global.</strong>{' '}
            I have written 100+ approved articles, led teams of up to 20 people, and built the practical systems that keep remote work moving.{' '}
            <a className="agrid__link" href="/Razel_Jade_Hijastro_Resume.pdf" download>
              Download my résumé
            </a>{' '}
            for the full experience.
          </p>

          <ul className="agrid__caps" role="list">
            {CAPABILITIES.map((c) => (
              <li key={c.index} className="agrid__cap">
                <span className="agrid__cap-marks">
                  {c.marks.map((m, i) => (
                    <span
                      key={m.name}
                      className="agrid__mark"
                      style={{ '--i': c.marks.length - i } as CSSProperties}
                    >
                      <img src={m.src} alt={m.name} loading="lazy" decoding="async" />
                    </span>
                  ))}
                </span>
                <span className="agrid__cap-title">{c.title}</span>
                <span className="agrid__cap-index" aria-hidden="true">
                  {c.index}
                </span>
              </li>
            ))}
          </ul>

          {/* One plate, two cells sharing a mark / title / meta anatomy. */}
          <div className="agrid__bar">
            <span className="agrid__cell">
              <span className="agrid__cell-mark agrid__cell-mark--img">
                <img src="/graduation.webp" alt="" loading="lazy" decoding="async" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">BS Civil Engineering</span>
                <span className="agrid__cell-meta">Southern Mindanao Colleges · 2024</span>
              </span>
            </span>

            <span className="agrid__cell">
              <span className="agrid__cell-mark">
                <MapPin size={16} weight="fill" aria-hidden="true" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">{profile.location}</span>
                <span className="agrid__cell-meta">Remote worldwide</span>
              </span>
            </span>

            <a className="agrid__cell agrid__cell--wide" href="mailto:razeljadehijastro28@gmail.com">
              <span className="agrid__cell-mark agrid__cell-mark--plain">
                <img src="/favicon.svg" alt="" loading="lazy" decoding="async" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">Available for remote opportunities</span>
                <span className="agrid__cell-meta">Content · operations · team leadership</span>
              </span>
              <ArrowUpRight className="agrid__cell-go" size={15} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="agrid__portrait">
          <img
            src="/portrait-formal.webp"
            alt="Portrait of Razel Jade Hijastro"
            loading="eager"
            decoding="async"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  )
}
