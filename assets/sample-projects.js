// This published portfolio has no framework source checkout. Keep this section
// readable and independent of the generated bundle's internal variable names.
const samples = [
  {
    slug: 'healthcare-primary-care-guide',
    label: 'Choosing care',
    title: 'How to choose a primary care doctor',
    subtitle: 'A practical guide',
    description: 'A patient guide to comparing doctors, checking credentials, and asking the right questions before booking. Includes sources and a printable comparison checklist.'
  },
  {
    slug: 'doctor-appointment-preparation',
    label: 'Preparing for a visit',
    title: "How to prepare for a doctor's appointment",
    subtitle: 'Questions to ask and notes to bring',
    description: 'A guide to organizing your concerns, bringing useful information, and understanding the next steps after a visit. Includes sources and a printable appointment notes sheet.'
  }
];

export function SampleProjects({ runtime: h, Link, standalone = false }) {
  const heading = standalone ? 'h1' : 'h2';
  const projectHeading = standalone ? 'h2' : 'h3';
  const arrow = h.jsx('span', { 'aria-hidden': true, children: '\u2197' });
  return h.jsxs('section', {
    className: standalone ? 'view sample-projects-page' : 'sample-projects sample-projects--home',
    id: 'sample-projects',
    'aria-labelledby': 'sample-projects-title',
    children: [
      h.jsxs('header', {
        className: standalone ? 'view__head sample-projects__heading' : 'sample-projects__heading',
        children: [
          h.jsxs('div', { children: [
            h.jsx('p', { className: 'sample-projects__eyebrow', children: 'Writing in practice' }),
            h.jsx(heading, { id: 'sample-projects-title', className: standalone ? 'view__title' : 'sample-projects__title', children: 'Sample projects' }),
            standalone && h.jsx('p', { className: 'view__lede', children: 'Practice projects created for this portfolio, with articles, process notes, and tools used.' })
          ] }),
          !standalone && h.jsxs(Link, { to: '/sample-projects', className: 'sample-projects__all', children: ['View all samples ', h.jsx('span', { 'aria-hidden': true, children: '\u2192' })] }),
          standalone && h.jsx(Link, { to: '/', className: 'sample-projects__back', children: '\u2190 Back to home' })
        ]
      }),
      h.jsx('div', {
        className: standalone ? 'sample-projects__body sample-projects__list' : 'sample-projects__list',
        children: samples.map((sample, index) => {
          const articleUrl = new URL('../samples/' + sample.slug + '/index.html', import.meta.url).href;
          const filesUrl = 'https://github.com/razeljade28/Portfolio/tree/main/samples/' + sample.slug;
          return h.jsxs('article', {
          className: 'sample-project',
          children: [
            h.jsxs('a', { className: 'sample-project__preview', href: articleUrl, 'aria-label': 'Read the healthcare article: ' + sample.title, children: [
              h.jsx('span', { className: 'sample-project__preview-label', children: sample.label }),
              h.jsxs('div', { className: 'sample-project__paper', 'aria-hidden': true, children: [
                h.jsx('span', { className: 'sample-project__paper-kicker', children: 'Practice article' }),
                h.jsx('span', { className: 'sample-project__paper-title', children: sample.title }),
                h.jsx('span', { className: 'sample-project__paper-subtitle', children: sample.subtitle }),
                h.jsx('span', { className: 'sample-project__paper-rule' }),
                h.jsx('span', { className: 'sample-project__paper-line' }),
                h.jsx('span', { className: 'sample-project__paper-line sample-project__paper-line--short' })
              ] }),
              h.jsxs('span', { className: 'sample-project__preview-link', children: ['Read the article ', arrow] })
            ] }),
            h.jsxs('div', { className: 'sample-project__copy', children: [
              h.jsx('p', { className: 'sample-project__category', children: String(index + 1).padStart(2, '0') + ' / Practice project' }),
              h.jsx(projectHeading, { className: 'sample-project__title', children: sample.title }),
              h.jsx('p', { className: 'sample-project__description', children: sample.description }),
              h.jsx('ul', { className: 'sample-project__tags', 'aria-label': 'Project topics', children: ['SEO article', 'Patient education', 'Source research'].map(tag => h.jsx('li', { children: tag }, tag)) }),
              h.jsxs('div', { className: 'sample-project__actions', children: [
                h.jsxs('a', { href: articleUrl, className: 'sample-project__read', children: ['Read article ', arrow] }),
                h.jsx('a', { href: filesUrl, target: '_blank', rel: 'noopener noreferrer', className: 'sample-project__files', 'aria-label': 'View project files on GitHub (opens in a new tab)', children: 'View project files' })
              ] })
            ] })
          ]
        }, sample.slug);
        })
      }),
      standalone && h.jsxs('div', { className: 'sample-projects__notes', children: [
        h.jsx('h2', { children: 'Inside these samples' }),
        h.jsx('p', { children: 'These articles are written for patients and people looking for healthcare services. Each project includes the article in Markdown, its SEO title and description, source notes, and a responsive HTML version.' }),
        h.jsx('p', { children: 'These are practice projects created for this portfolio. Each article explains how it was made and lists the tools used. Keyword phrases are candidates; search-volume and ranking results have not been measured.' })
      ] })
    ]
  });
}
