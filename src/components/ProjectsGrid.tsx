import { useMemo, useState } from 'react'
import { articles } from '@/data/articles'

const featured = [
  { category: 'Security', title: 'How Social Engineering Turned “Unhackable” Crypto Security into a $282M Loss', summary: 'A practical look at how human trust—not code—became the point of failure.', url: 'https://www.lbank.com/creator/social-engineering-unhackable-crypto-security-282m-loss' },
  { category: 'Tokenization', title: 'The Tokenization Supercycle: When Wall Street Puts Real Assets On-Chain', summary: 'Institutional adoption and the infrastructure moving real-world assets on-chain.', url: 'https://www.lbank.com/creator/tokenization-supercycle-wall-street-real-assets-on-chain' },
  { category: 'Markets', title: 'Bitcoin ETFs Bounce $562M After a $1.5B Sell-Off', summary: 'ETF-flow data translated into useful context for readers navigating volatility.', url: 'https://www.lbank.com/creator/bitcoin-etfs-bounce-selloff-defi-portfolios-volatility' },
]

export default function ProjectsGrid() {
  const [query, setQuery] = useState('')
  const [showAll, setShowAll] = useState(false)
  const filtered = useMemo(() => articles.filter(({ title }) => title.toLowerCase().includes(query.toLowerCase())), [query])
  const visible = query || showAll ? filtered : filtered.slice(0, 10)

  return (
    <section className="pgrid rpub" aria-labelledby="projects-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Published work</span>
        <h1 className="pgrid__title" id="projects-title">Crypto stories built for clarity.</h1>
        <p className="pgrid__lede">Selected reporting and analysis, plus a searchable archive of 76 published LBank articles.</p>
      </header>
      <div className="rpub__featured">
        {featured.map((item, index) => (
          <a className="rpub__feature" href={item.url} target="_blank" rel="noreferrer" key={item.title}>
            <span>{String(index + 1).padStart(2, '0')} · {item.category}</span><h2>{item.title}</h2><p>{item.summary}</p><b>Read on LBank</b>
          </a>
        ))}
      </div>
      <div className="home__glass rpub__archive">
        <div className="rpub__bar">
          <div><span className="pgrid__eyebrow">Archive</span><h2>76 published articles</h2></div>
          <label><span className="sr-only">Search publications</span><input value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder="Search topics, markets, companies" /></label>
        </div>
        {query && <p className="rpub__result" aria-live="polite">{filtered.length} {filtered.length === 1 ? 'result' : 'results'}</p>}
        <div className="rpub__list">
          {visible.map((item, index) => <a href={item.url} target="_blank" rel="noreferrer" key={item.title}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item.title}</strong><small>View</small></a>)}
          {!visible.length && <p>No publications match that search.</p>}
        </div>
        {!query && articles.length > 10 && <button type="button" className="rpub__more" onClick={() => setShowAll((value) => !value)}>{showAll ? 'Show fewer publications' : 'Show all publications'}</button>}
      </div>
    </section>
  )
}
