import { Metadata } from 'next';
import RomanShadesContent from './RomanShadesContent';

export const metadata: Metadata = {
  title: 'Roman Shades Florida | Classic Window Treatments Miami & Orlando',
  description:
    'Elegant roman shades with soft, cascading folds. Classic style for any decor. Factory direct pricing in Miami, Fort Lauderdale, and Orlando.',
  keywords: [
    'roman shades Miami',
    'classic blinds Florida',
    'fabric shades Orlando',
    'elegant window treatments South Florida',
  ],
  openGraph: {
    title: 'Roman Shades | ShadeSwift',
    description:
      'Timeless elegance with soft folds. Factory direct from Miami.',
    images: ['/images/roman-shades-og.jpg'],
  },
};

export default function RomanShadesPage() {
  return <RomanShadesContent />;
}
