export const COMPANY_INFO = {
  name: 'ShadeSwift',
  tagline: 'Factory Direct Custom Window Shades',
  phone: '305-923-1222',
  email: 'sales@shadeswift.com',
  address: {
    street: '4715 NW 157th ST Bay 3',
    city: 'Miami',
    state: 'FL',
    zip: '33314',
  },
  hours: '9 AM - 5 PM Daily',
};

export const SERVICE_AREAS = {
  orlando: {
    name: 'Orlando',
    zipPrefix: '32',
    cities: ['Orlando', 'Kissimmee', 'Winter Park', 'Sanford', 'Lake Mary'],
  },
  southFlorida: {
    name: 'South Florida',
    zipPrefix: '33',
    cities: ['Miami', 'Fort Lauderdale', 'West Palm Beach', 'Boca Raton', 'Hollywood'],
  },
};

export function isValidServiceArea(zip: string): { valid: boolean; area: string | null } {
  const cleanZip = zip.replace(/\D/g, '');
  if (cleanZip.length !== 5) {
    return { valid: false, area: null };
  }

  if (cleanZip.startsWith('32')) {
    return { valid: true, area: 'Orlando' };
  }
  if (cleanZip.startsWith('33')) {
    return { valid: true, area: 'South Florida' };
  }

  return { valid: false, area: null };
}

export const PRODUCTS = [
  {
    id: 'roller-shades',
    name: 'Roller Shades',
    slug: 'roller-shades',
    description: 'Clean lines, modern look. Our most popular option.',
    startingPrice: 79,
    badge: 'BEST SELLER',
    image: '/images/roller-shades.jpg',
  },
  {
    id: 'cellular-shades',
    name: 'Cellular Shades',
    slug: 'cellular-shades',
    description: 'Superior insulation for Florida heat. Energy efficient.',
    startingPrice: 89,
    badge: null,
    image: '/images/cellular-shades.jpg',
  },
  {
    id: 'zebra-blinds',
    name: 'Zebra Blinds',
    slug: 'zebra-blinds',
    description: 'Dual-layer design for perfect light control.',
    startingPrice: 99,
    badge: 'NEW',
    image: '/images/zebra-blinds.jpg',
  },
  {
    id: 'motorized',
    name: 'Motorized Blinds',
    slug: 'motorized',
    description: 'Smart home ready. Works with Alexa & Google.',
    startingPrice: 199,
    badge: 'SMART HOME',
    image: '/images/motorized.jpg',
  },
  {
    id: 'drapery',
    name: 'Custom Drapery',
    slug: 'drapery',
    description: 'Luxury fabric panels for an elegant finish.',
    startingPrice: 149,
    badge: null,
    image: '/images/drapery.jpg',
  },
  {
    id: 'roman-shades',
    name: 'Roman Shades',
    slug: 'roman-shades',
    description: 'Classic elegance with soft, cascading folds.',
    startingPrice: 129,
    badge: null,
    image: '/images/roman-shades.jpg',
  },
];

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  {
    label: 'Products',
    href: '/products',
    children: PRODUCTS.map((p) => ({
      label: p.name,
      href: `/products/${p.slug}`,
      description: p.description,
    })),
  },
  { label: 'About', href: '/about' },
];

export const SERVICE_TYPES = [
  'New Installation',
  'Replacement',
  'Motorization Upgrade',
  'Free Consultation',
];
