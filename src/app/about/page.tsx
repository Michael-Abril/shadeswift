import { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About Us | Family-Owned Window Shade Manufacturer in Florida',
  description:
    'ShadeSwift is a family-owned window shade manufacturer in Miami with 40+ years of industry experience. Factory direct pricing, quality craftsmanship, local service.',
  keywords: [
    'window shade manufacturer Florida',
    'family owned blinds company',
    'Miami shade factory',
    'local window treatments',
  ],
  openGraph: {
    title: 'About ShadeSwift | Our Story',
    description:
      'From our Florida factory to your windows. 40+ years of experience, family-owned, factory direct.',
    images: ['/images/about-og.jpg'],
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
