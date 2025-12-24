import { Metadata } from 'next';
import ZebraBlindsContent from './ZebraBlindsContent';

export const metadata: Metadata = {
  title: 'Zebra Blinds Miami | Dual Layer Sheer Shades Florida',
  description:
    'Modern zebra blinds with alternating sheer and solid bands for perfect light control. Factory direct pricing in Miami, Fort Lauderdale, and Orlando.',
  keywords: [
    'zebra blinds Miami',
    'dual layer shades Florida',
    'sheer shades Orlando',
    'modern blinds South Florida',
  ],
  openGraph: {
    title: 'Zebra Blinds | ShadeSwift',
    description:
      'Contemporary dual-layer blinds for ultimate light control. Factory direct from Miami.',
    images: ['/images/zebra-blinds-og.jpg'],
  },
};

export default function ZebraBlindsPage() {
  return <ZebraBlindsContent />;
}
