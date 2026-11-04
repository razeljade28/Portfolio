// This published portfolio has no framework source checkout. Keep this section
// readable and independent of the generated bundle's internal variable names.
const articleUrl = new URL('../samples/healthcare-primary-care-guide/index.html', import.meta.url).href;
const filesUrl = 'https://github.com/razeljade28/Portfolio/tree/main/samples/healthcare-primary-care-guide';

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
            standalone && h.jsx('p', { className: 'view__lede', children: 'Writing samples with the finished article, sources, and publishing details.' })
          ] }),
          !standalone && h.jsxs(Link, { to: '/sample-projects', className: 'sample-projects__all', children: ['View all samples ', h.jsx('span', { 'aria-hidden': true, children: '\u2192' })] }),
          standalone && h.jsx(Link, { to: '/', className: 'sample-projects__back', children: '\u2190 Back to home' })
        ]
      }),
      h.jsx('div', {
        className: standalone ? 'sample-projects__body' : undefined,
        children: h.jsxs('article', {
          className: 'sample-project',
          children: [
            h.jsxs('a', { className: 'sample-project__preview', href: articleUrl, 'aria-label': 'Read the healthcare article: How to choose a primary care doctor', children: [
              h.jsx('span', { className: 'sample-project__preview-label', children: 'Choosing care' }),
              h.jsxs('div', { className: 'sample-project__paper', 'aria-hidden': true, children: [
                h.jsx('span', { className: 'sample-project__paper-kicker', children: 'Patient guide' }),
                h.jsx('span', { className: 'sample-project__paper-title', children: 'How to choose a primary care doctor' }),
                h.jsx('span', { className: 'sample-project__paper-subtitle', children: 'A practical guide' }),
                h.jsx('span', { className: 'sample-project__paper-rule' }),
                h.jsx('span', { className: 'sample-project__paper-line' }),
                h.jsx('span', { className: 'sample-project__paper-line sample-project__paper-line--short' })
              ] }),
              h.jsxs('span', { className: 'sample-project__preview-link', children: ['Read the article ', arrow] })
            ] }),
            h.jsxs('div', { className: 'sample-project__copy', children: [
              h.jsx('p', { className: 'sample-project__category', children: '01 / Healthcare writing sample' }),
              h.jsx(projectHeading, { className: 'sample-project__title', children: 'How to choose a primary care doctor' }),
              h.jsx('p', { className: 'sample-project__description', children: 'A patient guide to comparing doctors, checking credentials, and asking the right questions before booking. Includes sources and a printable comparison checklist.' }),
              h.jsx('ul', { className: 'sample-project__tags', 'aria-label': 'Project topics', children: ['SEO article', 'Patient education', 'Source research'].map(tag => h.jsx('li', { children: tag }, tag)) }),
              h.jsxs('div', { className: 'sample-project__actions', children: [
                h.jsxs('a', { href: articleUrl, className: 'sample-project__read', children: ['Read article ', arrow] }),
                h.jsx('a', { href: filesUrl, target: '_blank', rel: 'noopener noreferrer', className: 'sample-project__files', 'aria-label': 'View project files on GitHub (opens in a new tab)', children: 'View project files' })
              ] })
            ] })
          ]
        })
      }),
      standalone && h.jsxs('div', { className: 'sample-projects__notes', children: [
        h.jsx('h2', { children: 'Inside this sample' }),
        h.jsx('p', { children: 'The article is written for patients and people looking for healthcare services. The project files include the article in Markdown, its SEO title and description, source notes, and a responsive HTML version.' }),
        h.jsx('p', { children: 'This is a portfolio writing sample. Keyword phrases are candidates; search-volume and ranking results have not been measured.' })
      ] })
    ]
  });
}
