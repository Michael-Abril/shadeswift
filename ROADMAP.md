# ShadeSwift 2.0 - Development Roadmap

This document tracks everything needed to fully replace the live shadeswift.com website.

---

## Phase 1: Frontend Polish (Priority: HIGH)

### 1.1 Image Assets
- [ ] **Hero images** - High-quality lifestyle photos for each page
  - [ ] Home hero (living room with shades)
  - [ ] About page (factory/team photos)
  - [ ] Product pages (6 product hero images)
- [ ] **Product images** - Professional product photography
  - [ ] Roller shades gallery
  - [ ] Cellular shades gallery
  - [ ] Zebra blinds gallery
  - [ ] Motorized blinds gallery
  - [ ] Drapery gallery
  - [ ] Roman shades gallery
- [ ] **Testimonial avatars** - Customer photos or placeholders
- [ ] **Favicon & OG images** - Social sharing images for each page
- [ ] **Logo** - SVG logo for Navbar

### 1.2 UI Enhancements
- [ ] Add image carousels/galleries to product pages
- [ ] Implement "before/after" room transformations
- [ ] Add fabric swatch color picker component
- [ ] Create comparison table for product features
- [ ] Add FAQ accordion section to product pages
- [ ] Implement "Recently Viewed" product tracking
- [ ] Add loading skeletons for better UX
- [ ] Implement scroll-to-top button
- [ ] Add breadcrumb navigation on product pages

### 1.3 Mobile Optimization
- [ ] Test and refine mobile navigation drawer
- [ ] Optimize touch targets for mobile
- [ ] Test form usability on mobile devices
- [ ] Verify all animations perform well on mobile

---

## Phase 2: Backend & Integrations (Priority: HIGH)

### 2.1 Lead Form Backend
Current: Placeholder API route that logs to console

**Options to implement:**
- [ ] **Email integration** (Resend, SendGrid, or AWS SES)
  - Send notification to sales@shadeswift.com
  - Send confirmation email to customer
- [ ] **CRM integration** (HubSpot, Salesforce, or Pipedrive)
  - Create contact/lead record
  - Trigger sales workflow
- [ ] **Database storage** (Supabase, Planetscale, or MongoDB)
  - Store leads for reporting
  - Track conversion metrics
- [ ] **Slack notification** - Real-time lead alerts

### 2.2 Form Enhancements
- [ ] Add phone number validation
- [ ] Implement reCAPTCHA or Turnstile spam protection
- [ ] Add UTM parameter tracking
- [ ] Implement form abandonment tracking
- [ ] Add "Schedule Callback" time picker

### 2.3 Analytics & Tracking
- [ ] **Google Analytics 4** integration
- [ ] **Google Tag Manager** setup
- [ ] **Meta Pixel** for Facebook/Instagram ads
- [ ] **Conversion tracking** for lead form submissions
- [ ] **Hotjar/Clarity** for user behavior analysis

---

## Phase 3: SEO Optimization (Priority: HIGH)

### 3.1 Technical SEO
- [ ] Add `metadataBase` to fix OG image warnings
- [ ] Create `robots.txt` file
- [ ] Generate `sitemap.xml` (dynamic)
- [ ] Implement canonical URLs
- [ ] Add structured data for:
  - [ ] Products (Product schema)
  - [ ] FAQs (FAQPage schema)
  - [ ] Reviews (Review schema)
  - [ ] Breadcrumbs (BreadcrumbList schema)
- [ ] Optimize Core Web Vitals (LCP, FID, CLS)
- [ ] Implement image lazy loading with blur placeholders

### 3.2 Content SEO
- [ ] Write unique meta descriptions for each page (150-160 chars)
- [ ] Optimize H1/H2 hierarchy for target keywords
- [ ] Add alt text to all images
- [ ] Create blog section for content marketing
  - [ ] "How to Choose Window Treatments for Florida Homes"
  - [ ] "Motorized Blinds: A Complete Guide"
  - [ ] "Energy Savings with Cellular Shades"
- [ ] Add customer review/testimonial section with rich snippets

### 3.3 Local SEO
- [ ] Create location-specific landing pages:
  - [ ] `/orlando/` - Orlando area page
  - [ ] `/miami/` - Miami area page
  - [ ] `/fort-lauderdale/` - Fort Lauderdale page
  - [ ] `/west-palm-beach/` - West Palm Beach page
- [ ] Optimize for "near me" searches
- [ ] Add Google Maps embed for factory location
- [ ] Ensure NAP (Name, Address, Phone) consistency

---

## Phase 4: Additional Pages (Priority: MEDIUM)

### 4.1 Required Pages
- [ ] `/contact` - Contact page with form, map, hours
- [ ] `/gallery` - Photo gallery of installations
- [ ] `/reviews` - Customer testimonials page
- [ ] `/faq` - Frequently asked questions
- [ ] `/warranty` - Warranty information
- [ ] `/privacy` - Privacy policy
- [ ] `/terms` - Terms of service

### 4.2 Conversion Pages
- [ ] `/free-quote` - Dedicated quote landing page
- [ ] `/free-consultation` - Consultation booking page
- [ ] `/special-offers` - Promotions and deals

### 4.3 Resource Pages
- [ ] `/measuring-guide` - How to measure windows
- [ ] `/installation-guide` - DIY installation instructions
- [ ] `/care-guide` - Maintenance and cleaning tips

---

## Phase 5: Advanced Features (Priority: LOW)

### 5.1 E-commerce Functionality
- [ ] Product configurator (size, color, features)
- [ ] Instant price calculator
- [ ] Add to cart / checkout flow
- [ ] Payment processing (Stripe)
- [ ] Order tracking system

### 5.2 Customer Portal
- [ ] User accounts
- [ ] Order history
- [ ] Saved quotes
- [ ] Appointment scheduling

### 5.3 Chat & Support
- [ ] Live chat widget (Intercom, Drift, or Crisp)
- [ ] AI chatbot for common questions
- [ ] SMS notifications for appointments

---

## Phase 6: Production Deployment (Priority: HIGH)

### 6.1 Pre-Launch Checklist
- [ ] Remove GitHub Pages config (`basePath`, `output: 'export'`)
- [ ] Set up production environment variables
- [ ] Configure custom domain (shadeswift.com)
- [ ] Set up SSL certificate
- [ ] Test all forms in production
- [ ] Verify analytics tracking
- [ ] Check all links and 404s
- [ ] Test on multiple browsers (Chrome, Safari, Firefox, Edge)
- [ ] Test on multiple devices (iOS, Android, Desktop)
- [ ] Run Lighthouse audit (target: 90+ scores)
- [ ] Submit sitemap to Google Search Console

### 6.2 Deployment Options
| Platform | Pros | Cons |
|----------|------|------|
| **Vercel** | Easy, fast, free tier, great DX | Vendor lock-in |
| **Netlify** | Similar to Vercel, good forms | Slightly slower |
| **AWS Amplify** | Scalable, enterprise-ready | More complex |
| **Railway** | Full-stack, databases included | Smaller community |

### 6.3 Domain Migration
- [ ] Set up staging environment (staging.shadeswift.com)
- [ ] QA testing on staging
- [ ] Update DNS records
- [ ] Set up redirects from old URLs
- [ ] Monitor for 404 errors post-launch
- [ ] Update Google Business Profile

---

## Progress Summary

| Phase | Status | Completion |
|-------|--------|------------|
| Phase 1: Frontend Polish | 🔄 In Progress | 20% |
| Phase 2: Backend & Integrations | ⏳ Not Started | 0% |
| Phase 3: SEO Optimization | 🔄 Partial | 40% |
| Phase 4: Additional Pages | ⏳ Not Started | 0% |
| Phase 5: Advanced Features | ⏳ Not Started | 0% |
| Phase 6: Production Deployment | ⏳ Not Started | 0% |

---

## Immediate Next Steps

1. **Add real images** - Replace placeholders with professional photography
2. **Connect lead form** - Implement email notifications (Resend is easiest)
3. **Add metadataBase** - Fix SEO warnings
4. **Create sitemap** - For Google indexing
5. **Set up analytics** - GA4 + conversion tracking

---

## Questions to Resolve

1. **Lead form destination**: Where should leads be sent? (Email, CRM, Both?)
2. **Pricing strategy**: Show prices on site or quote-only?
3. **E-commerce scope**: Just lead-gen or full checkout?
4. **Content**: Who will write blog posts and additional copy?
5. **Photography**: Hire photographer or use stock images?
6. **Hosting preference**: Vercel, custom server, or other?

---

*Last Updated: December 2024*
