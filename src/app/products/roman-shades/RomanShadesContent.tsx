'use client';

import { motion } from 'framer-motion';
import {
  Layers,
  Sun,
  Palette,
  Heart,
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
    icon: Layers,
    title: 'Elegant Folds',
    description:
      'Soft, cascading fabric folds create a timeless look that adds warmth and sophistication.',
  },
  {
    icon: Sun,
    title: 'Light Control',
    description:
      'Available in light-filtering and blackout options to suit any room&apos;s needs.',
  },
  {
    icon: Palette,
    title: 'Fabric Variety',
    description:
      'Choose from solids, patterns, textures, and prints. Hundreds of options to match any decor.',
  },
  {
    icon: Heart,
    title: 'Timeless Style',
    description:
      'A classic look that never goes out of style. Perfect for traditional and transitional homes.',
  },
];

const features = [
  'Flat, hobbled, and relaxed styles',
  'Light-filtering and blackout',
  'Cordless and motorized options',
  'Lined and unlined options',
  'Inside or outside mount',
  'Custom sizing',
  'Child-safe cordless design',
  'Pattern matching available',
];

const specs = [
  { label: 'Width Range', value: '18" – 96"' },
  { label: 'Height Range', value: '24" – 120"' },
  { label: 'Fold Styles', value: 'Flat, Hobbled, Relaxed' },
  { label: 'Lining Options', value: 'Unlined, Lined, Blackout' },
  { label: 'Mounting Depth', value: '2.5" minimum' },
  { label: 'Warranty', value: '10 Years' },
];

const foldStyles = [
  {
    name: 'Flat Fold',
    description: 'Clean, crisp folds that stack neatly when raised.',
  },
  {
    name: 'Hobbled',
    description: 'Soft, flowing folds that maintain shape when raised.',
  },
  {
    name: 'Relaxed',
    description: 'Casual drape with a gentle curve at the bottom.',
  },
];

const relatedProducts = PRODUCTS.filter((p) => p.slug !== 'roman-shades').slice(0, 3);

export default function RomanShadesContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-secondary overflow-hidden">
        <Container className="relative z-10 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center px-4 py-2 bg-primary/20 rounded-full text-primary text-sm font-medium mb-6">
                <Heart className="w-4 h-4 mr-2" />
                Timeless Classic
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Roman<br />
                <span className="text-primary">Shades</span>
              </h1>

              <p className="text-lg text-white/70 mb-6">
                Classic elegance meets modern convenience. Our roman shades
                feature soft, cascading folds that add warmth and sophistication
                to any room.
              </p>

              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-white/50 text-sm">Starting at</span>
                <span className="text-5xl font-bold text-white">$129</span>
                <span className="text-white/50 line-through">$259</span>
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
                  Browse Styles
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
                <div className="w-48 h-64 bg-white/10 rounded-t-lg relative">
                  <div className="absolute bottom-0 left-0 right-0 space-y-2 p-2">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="h-8 bg-white/20 rounded"
                        style={{ marginLeft: i * 4, marginRight: i * 4 }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center">
                    <Layers className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted">Fold Styles</p>
                    <p className="text-xl font-bold text-secondary">3 Options</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      <TrustBar />

      {/* Fold Styles */}
      <section className="py-12 bg-white border-b">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {foldStyles.map((style) => (
              <div
                key={style.name}
                className="text-center p-6 bg-gray-50 rounded-2xl"
              >
                <div className="w-16 h-24 bg-primary/10 rounded mx-auto mb-4 relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 right-0 space-y-1 p-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="h-4 bg-primary/30 rounded" />
                    ))}
                  </div>
                </div>
                <h3 className="font-bold text-secondary mb-1">{style.name}</h3>
                <p className="text-sm text-muted">{style.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

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
              Why Roman Shades?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Classic Beauty, Modern Comfort
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
                Get Your Free Quote for Roman Shades
              </h2>
              <p className="text-white/70 mb-8">
                Add timeless elegance to any room with roman shades. Get a free
                quote and fabric samples today.
              </p>

              <div className="space-y-4">
                {[
                  'Free fabric samples',
                  'Professional measurement',
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
