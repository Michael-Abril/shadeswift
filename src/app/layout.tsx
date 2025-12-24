import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const outfit = Outfit({
  variable: '--font-heading',
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'ShadeSwift | Factory Direct Custom Window Shades in Florida',
    template: '%s | ShadeSwift',
  },
  description:
    'Save 50% on custom blinds and shades. Factory direct from Miami. Serving Orlando and South Florida. 10-year warranty, free installation.',
  keywords: [
    'custom window shades',
    'motorized blinds Orlando',
    'custom shades South Florida',
    'factory direct blinds Miami',
    'cellular shades Florida',
    'zebra blinds Miami',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shadeswift.com',
    siteName: 'ShadeSwift',
    title: 'ShadeSwift | Factory Direct Custom Window Shades',
    description:
      'Save 50% on custom blinds and shades. Factory direct from Miami with 10-year warranty.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ShadeSwift - Custom Window Shades',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ShadeSwift | Factory Direct Custom Window Shades',
    description: 'Save 50% on custom blinds and shades. Factory direct from Miami.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'HomeGoodsStore',
              name: 'ShadeSwift',
              description: 'Factory direct custom window shades serving Florida',
              url: 'https://shadeswift.com',
              telephone: '305-923-1222',
              email: 'sales@shadeswift.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '4715 NW 157th ST Bay 3',
                addressLocality: 'Miami',
                addressRegion: 'FL',
                postalCode: '33314',
                addressCountry: 'US',
              },
              areaServed: [
                { '@type': 'City', name: 'Orlando', containedInPlace: { '@type': 'State', name: 'Florida' } },
                { '@type': 'City', name: 'Miami', containedInPlace: { '@type': 'State', name: 'Florida' } },
                { '@type': 'City', name: 'Fort Lauderdale', containedInPlace: { '@type': 'State', name: 'Florida' } },
                { '@type': 'City', name: 'West Palm Beach', containedInPlace: { '@type': 'State', name: 'Florida' } },
              ],
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                opens: '09:00',
                closes: '17:00',
              },
              priceRange: '$$',
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
