export type QA = { q: string; a: string }

/**
 * The questions people ask before they email. One list, used by the FAQ
 * accordion on the Contact view (and the legacy long-scroll FAQ section).
 * Five questions, two or three sentences each: the accordion sits in a
 * fixed panel and more than that pushes the email row off the plate.
 */
export const FAQS: QA[] = [
  {
    q: 'What do you do?',
    a: 'I work in crypto content writing, content operations, community operations, process documentation, and remote team coordination.',
  },
  {
    q: 'How fast can you start?',
    a: 'I am based in the Philippines and available for remote opportunities. Start timing depends on scope, so send the role or project details and I will reply with availability.',
  },
  {
    q: 'What kinds of roles are you considering?',
    a: 'Content writer, content operations, community operations, editorial coordination, and remote team leadership roles are the strongest fit.',
  },
  {
    q: 'Where are you based?',
    a: 'I am based in the Philippines (UTC+8) and have experience working remotely with international teams.',
  },
  {
    q: 'What happens after I write?',
    a: 'I will review your message, role, or project brief and reply by email with relevant experience, availability, and next steps.',
  },
]
