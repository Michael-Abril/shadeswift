import { Metadata } from 'next';
import CellularShadesContent from './CellularShadesContent';

export const metadata: Metadata = {
  title: 'Cellular & Honeycomb Shades | Energy Efficient Window Treatments',
  description:
    'Save on cooling costs with our insulating cellular shades. Perfect for Florida heat. Factory direct pricing, 10-year warranty. Free installation in Orlando & South Florida.',
  keywords: [
    'cellular shades Florida',
    'honeycomb blinds Miami',
    'energy efficient window treatments',
    'insulating blinds Orlando',
    'cellular blinds South Florida',
  ],
  openGraph: {
    title: 'Cellular Shades | ShadeSwift',
    description:
      'Energy-efficient honeycomb shades that reduce cooling costs by up to 25%. Factory direct from Miami.',
    images: ['/images/cellular-shades-og.jpg'],
  },
};

export default function CellularShadesPage() {
  return <CellularShadesContent />;
}
