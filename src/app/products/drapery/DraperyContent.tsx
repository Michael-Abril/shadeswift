'use client';

import { motion } from 'framer-motion';
import {
  Crown,
  Moon,
  Sparkles,
  Maximize,
  Check,
  ArrowRight,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import TrustBar from '@/components/TrustBar';
import LeadForm from '@/components/LeadForm';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS } from '@/lib/constants';

const benefits = [
  {
    icon: Crown,
    title: 'Luxury Feel',
    description:
      'Premium fabrics that add sophistication and elegance to any room. The ultimate in window fashion.',
  },
  {
    icon: Moon,
    title: 'Blackout Options',
    description:
      'Lined drapery for complete light blocking. Perfect for bedrooms and media rooms.',
  },
  {
    icon: Sparkles,
    title: 'Custom Design',
    description:
      'Choose from hundreds of fabrics, linings, and header styles for a truly custom look.',
  },
  {
    icon: Maximize,
    title: 'Floor to Ceiling',
    description:
      'Make rooms feel larger with drapes that extend from ceiling to floor.',
  },
];

const features = [
  'Premium fabric collection',
  'Multiple lining options',
  'Pinch pleat, ripplefold, grommet headers',
  'Motorization available',
  'Custom rod and hardware',
  'Blackout and thermal options',
  'Pattern matching',
  'Professional installation',
];

const specs = [
  { label: 'Width Range', value: 'Custom to 300"' },
  { label: 'Height Range', value: 'Custom to 144"' },
  { label: 'Header Styles', value: '6 options' },
  { label: 'Lining Options', value: 'Unlined, Lined, Blackout, Thermal' },
  { label: 'Fullness', value: '2x or 2.5x standard' },
  { label: 'Warranty', value: '10 Years' },
];

const relatedProducts = PRODUCTS.filter((p) => p.slug !== 'drapery').slice(0, 3);

export default function DraperyContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#06b6d4_25%,transparent_25%,transparent_50%,#06b6d4_50%,#06b6d4_75%,transparent_75%)] bg-[size:40px_40px]" />
        </div>

        <Container className="relative z-10 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center px-4 py-2 bg-primary/20 rounded-full text-primary text-sm font-medium mb-6">
                <Crown className="w-4 h-4 mr-2" />
                Luxury Collection
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Custom<br />
                <span className="text-primary">Drapery</span>
              </h1>

              <p className="text-lg text-white/70 mb-6">
                Elevate your space with luxurious custom drapery. From flowing
                sheers to dramatic blackout panels, our drapes add the perfect
                finishing touch to any room.
              </p>

              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-white/50 text-sm">Starting at</span>
                <span className="text-5xl font-bold text-white">$149</span>
                <span className="text-white/50 line-through">$299</span>
                <span className="px-3 py-1 bg-primary rounded-full text-white text-sm font-medium">
                  50% OFF
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="#quote" variant="primary" size="lg">
                  Get Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white hover:text-secondary"
                >
                  Browse Fabrics
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center">
                <div className="flex gap-4">
                  <div className="w-20 h-64 bg-white/20 rounded-t" />
                  <div className="w-20 h-64 bg-white/15 rounded-t" />
                  <div className="w-20 h-64 bg-white/10 rounded-t" />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Crown className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted">Premium Quality</p>
                    <p className="text-xl font-bold text-secondary">Luxury Fabrics</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      <TrustBar />

      {/* Benefits */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              Why Custom Drapery?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              The Ultimate in Elegance
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 p-6 bg-gray-50 rounded-2xl"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Features & Specs */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-secondary mb-8">
                Features & Options
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-secondary">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-secondary mb-8">
                Specifications
              </h2>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                {specs.map((spec, index) => (
                  <div
                    key={spec.label}
                    className={`flex justify-between items-center p-4 ${
                      index !== specs.length - 1 ? 'border-b border-gray-100' : ''
                    }`}
                  >
                    <span className="text-muted">{spec.label}</span>
                    <span className="font-semibold text-secondary">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Related Products */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              You Might Also Like
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((product, index) => (
              <ProductCard key={product.id} {...product} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section id="quote" className="py-20 bg-secondary">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Get Your Free Quote for Custom Drapery
              </h2>
              <p className="text-white/70 mb-8">
                Add luxury to any room with custom drapery. Get a free quote and
                fabric samples today.
              </p>

              <div className="space-y-4">
                {[
                  'Free fabric samples',
                  'Custom hardware included',
                  '10-year warranty',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-white">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <LeadForm />
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
