/**
 * Central site configuration.
 * Single source of truth for the one-pager content and metadata.
 */

export const site = {
  /** Main name / brand shown in the hero and used in metadata. */
  title: 'bitcape',
  /** Short subtitle shown under the name. */
  subtitle: 'Software & Web',
  /** One-line description in the hero. */
  tagline: 'I build things for the web.',
  /** Used as the default meta description and Open Graph description. */
  description: 'Bitcape — I build things for the web.',
  /** Author / owner name used in meta tags. */
  author: 'Bitcape',
  /** Contact email used by the "Contact" button (mailto link). */
  email: 'hello@example.com',
  /** Default social sharing image (relative to the site root). */
  ogImage: '/favicon.svg',
  /** Language of the site content. */
  lang: 'en',
} as const;


