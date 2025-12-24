import { Metadata } from 'next';
import DraperyContent from './DraperyContent';

export const metadata: Metadata = {
  title: 'Custom Drapery Florida | Luxury Curtains Miami & Orlando',
  description:
    'Elegant custom drapery for a luxurious finish. Blackout and motorized options. Factory direct pricing in Miami, Fort Lauderdale, and Orlando.',
  keywords: [
    'custom drapery Miami',
    'luxury curtains Florida',
    'blackout drapes Orlando',
    'motorized curtains South Florida',
  ],
  openGraph: {
    title: 'Custom Drapery | ShadeSwift',
    description:
      'Luxurious custom drapery for the ultimate in elegance. Factory direct from Miami.',
    images: ['/images/drapery-og.jpg'],
  },
};

export default function DraperyPage() {
  return <DraperyContent />;
}
