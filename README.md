# ShadeSwift 2.0

A modern, high-performance e-commerce/lead-generation website for ShadeSwift - a factory-direct custom window shade manufacturer serving Orlando and South Florida.

**Live Preview:** [https://michael-abril.github.io/shadeswift](https://michael-abril.github.io/shadeswift)
**Legacy Site (to replace):** [https://shadeswift.com](https://shadeswift.com)

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Outfit (headings) + Inter (body) via Google Fonts

## Brand Identity

| Element | Value |
|---------|-------|
| Primary Color | Cyan/Teal `#06b6d4` |
| Secondary | Slate-900 `#0f172a` |
| Typography | Outfit + Inter |
| Vibe | "Apple Store for Windows" |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Build for GitHub Pages
npm run build  # (configured with output: 'export')
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (SEO, fonts, Navbar, Footer)
│   ├── page.tsx                # Home page
│   ├── about/page.tsx          # About page
│   ├── products/
│   │   ├── cellular-shades/    # Energy efficient shades
│   │   ├── motorized/          # Smart home blinds
│   │   ├── zebra-blinds/       # Dual-layer shades
│   │   ├── roller-shades/      # Classic roller shades
│   │   ├── drapery/            # Custom drapery
│   │   └── roman-shades/       # Roman shades
│   └── api/lead/route.ts       # Lead form endpoint
├── components/
│   ├── Navbar.tsx              # Sticky header (transparent → white)
│   ├── Footer.tsx              # 4-column SEO footer
│   ├── HeroSection.tsx         # Full-screen hero
│   ├── TrustBar.tsx            # Trust signals bar
│   ├── ProductCard.tsx         # Product cards with hover
│   ├── LeadForm.tsx            # 3-step lead capture form
│   └── ui/                     # Reusable UI components
└── lib/
    ├── constants.ts            # Products, service areas, company info
    └── utils.ts                # Utility functions
```

## Features

### Completed ✅

- [x] Next.js 14 App Router setup
- [x] Tailwind CSS with brand colors
- [x] Responsive Navbar (transparent → solid on scroll)
- [x] Comprehensive Footer with service areas
- [x] Hero section with CTA
- [x] Trust bar with icons
- [x] Product card components
- [x] 3-step lead form with ZIP validation (Orlando 32xxx, South Florida 33xxx)
- [x] Home page with all sections
- [x] About page with company story
- [x] 6 product pages with SEO metadata
- [x] JSON-LD schema markup (HomeGoodsStore)
- [x] Framer Motion animations
- [x] GitHub Pages deployment config

### In Progress 🔄

See [ROADMAP.md](./ROADMAP.md) for detailed next steps.

## Service Areas

The lead form validates ZIP codes for:
- **Orlando Region:** 32xxx ZIP codes
- **South Florida:** 33xxx ZIP codes (Miami, Fort Lauderdale, West Palm Beach)

## SEO Keywords Targeted

- Motorized Blinds Orlando
- Custom Shades South Florida
- Factory Direct Blinds Miami
- Cellular Shades Florida
- Zebra Blinds Miami

## Deployment

### GitHub Pages (Current)
Configured for static export with `basePath: '/shadeswift'`

### Production (Vercel/Custom Domain)
1. Remove `basePath` from `next.config.ts`
2. Remove `output: 'export'` for server features
3. Connect to Vercel or deploy to custom hosting

## License

Private - ShadeSwift © 2024
