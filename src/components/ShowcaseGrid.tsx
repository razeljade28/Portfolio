const steps = [
  { n: '01', title: 'The challenge', copy: 'A new 15-person Nigeria-based TikTok team needed practical platform training, clear content direction, and a reliable day-to-day operating rhythm.' },
  { n: '02', title: 'What I organized', copy: 'I trained the team, developed content angles and video concepts, coordinated assignments, and maintained performance, commission, salary, and work-volume records.' },
  { n: '03', title: 'The operating outcome', copy: 'The team gained a repeatable workflow, consistent coaching, clear ownership, and performance targets of 1,000–5,000 views per video.' },
]

export default function ShowcaseGrid() {
  return (
    <section className="pgrid rcase" aria-labelledby="showcase-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Operations case study</span>
        <h1 className="pgrid__title" id="showcase-title">Building structure for a new remote team.</h1>
        <p className="pgrid__lede">Bitget · Assistant Manager and TikTok Team Lead</p>
      </header>
      <div className="home__glass rcase__glass">
        <div className="rcase__portrait"><img src="/portrait-editorial.webp" alt="Razel Jade Hijastro" /></div>
        <div className="rcase__story">
          <p className="rcase__lead">Good operations make expectations visible, ownership clear, and progress measurable.</p>
          <div className="rcase__steps">{steps.map((step) => <article key={step.n}><span>{step.n}</span><div><h2>{step.title}</h2><p>{step.copy}</p></div></article>)}</div>
          <div className="rcase__metrics"><div><strong>15</strong><span>team members</span></div><div><strong>Remote</strong><span>Nigeria-based team</span></div><div><strong>1K–5K</strong><span>view target per video</span></div></div>
        </div>
      </div>
    </section>
  )
}
