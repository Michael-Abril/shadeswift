import { Metadata } from 'next';
import RollerShadesContent from './RollerShadesContent';

export const metadata: Metadata = {
  title: 'Custom Roller Shades Florida | Factory Direct Blinds Miami',
  description:
    'Clean, minimalist roller shades starting at $79. Factory direct from Miami. Huge fabric selection, blackout options available. Free installation in Orlando & South Florida.',
  keywords: [
    'roller shades Miami',
    'custom blinds Florida',
    'blackout shades Orlando',
    'factory direct roller blinds',
  ],
  openGraph: {
    title: 'Custom Roller Shades | ShadeSwift',
    description:
      'Classic roller shades with clean lines. Factory direct from Miami.',
    images: ['/images/roller-shades-og.jpg'],
  },
};

export default function RollerShadesPage() {
  return <RollerShadesContent />;
}
