import { Metadata } from 'next';
import MotorizedContent from './MotorizedContent';

export const metadata: Metadata = {
  title: 'Motorized Blinds Orlando & Miami | Smart Home Window Treatments',
  description:
    'Control your blinds with Alexa, Google Home, or your smartphone. Motorized shades with child-safe design. Factory direct pricing in Orlando and South Florida.',
  keywords: [
    'motorized blinds Orlando',
    'smart blinds Miami',
    'automated window shades Florida',
    'Alexa blinds',
    'Google Home shades',
  ],
  openGraph: {
    title: 'Smart Motorized Blinds | ShadeSwift',
    description:
      'Voice-controlled, app-enabled motorized blinds. Factory direct from Miami.',
    images: ['/images/motorized-og.jpg'],
  },
};

export default function MotorizedPage() {
  return <MotorizedContent />;
}
