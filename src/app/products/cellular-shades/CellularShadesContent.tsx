'use client';

import { motion } from 'framer-motion';
import {
  Thermometer,
  Volume2,
  Sun,
  Shield,
  Zap,
  Baby,
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
    icon: Thermometer,
    title: 'Superior Insulation',
    description:
      'Honeycomb air pockets trap heat and cold, reducing energy costs by up to 25% - perfect for Florida summers.',
  },
  {
    icon: Volume2,
    title: 'Noise Reduction',
    description:
      'The unique cellular structure absorbs sound, creating a quieter, more peaceful home environment.',
  },
  {
    icon: Sun,
    title: 'UV Protection',
    description:
      'Block up to 99% of harmful UV rays to protect your furniture, flooring, and artwork from fading.',
  },
  {
    icon: Baby,
    title: 'Child Safe',
    description:
      'Cordless and motorized options eliminate dangling cords for a safer home with children and pets.',
  },
];

const features = [
  'Light-filtering and blackout fabrics available',
  'Single, double, and triple cell options',
  'Top-down/bottom-up operation',
  'Motorization with smart home integration',
  'Custom colors and patterns',
  'Inside or outside mount',
  'Day/night dual shade option',
  'Humidity resistant for bathrooms',
];

const specs = [
  { label: 'Width Range', value: '20" – 96"' },
  { label: 'Height Range', value: '24" – 96"' },
  { label: 'Max Area', value: '48 sq ft' },
  { label: 'Cell Size', value: '3/8", 3/4", 1 1/4"' },
  { label: 'Mounting Depth', value: '1 5/8" minimum' },
  { label: 'Warranty', value: '10 Years' },
];

const perfectFor = [
  {
    title: 'Living Rooms',
    description: 'Control natural light while maintaining privacy and style.',
  },
  {
    title: 'Bedrooms',
    description:
      'Blackout options ensure complete darkness for restful sleep.',
  },
  {
    title: 'Home Offices',
    description: 'Reduce glare on screens while keeping the room bright.',
  },
  {
    title: 'Sunrooms',
    description: 'Maximum insulation where the sun hits hardest.',
  },
];

const relatedProducts = PRODUCTS.filter(
  (p) => p.slug !== 'cellular-shades'
).slice(0, 3);

export default function CellularShadesContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-secondary overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d4_1px,transparent_1px),linear-gradient(to_bottom,#06b6d4_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <Container className="relative z-10 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center px-4 py-2 bg-primary/20 rounded-full text-primary text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Energy Efficient
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Cellular &<br />
                <span className="text-primary">Honeycomb Shades</span>
              </h1>

              <p className="text-lg text-white/70 mb-6">
                The smartest choice for Florida homes. Our cellular shades trap
                air in their honeycomb structure, creating a barrier against
                heat and cold that can reduce your energy bills by up to 25%.
              </p>

              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-white/50 text-sm">Starting at</span>
                <span className="text-5xl font-bold text-white">$89</span>
                <span className="text-white/50 line-through">$179</span>
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
                  View Gallery
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Product image placeholder */}
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-48 h-64 bg-primary/30 rounded-lg mx-auto mb-4 relative overflow-hidden">
                    {/* Honeycomb pattern */}
                    <div className="absolute inset-0 flex flex-col gap-1 p-2">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="h-full bg-white/20 rounded"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Thermometer className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted">Energy Savings</p>
                    <p className="text-xl font-bold text-secondary">Up to 25%</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              Why Cellular Shades?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Benefits That Make a Difference
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Cellular shades aren&apos;t just window treatments – they&apos;re
              an investment in comfort, energy efficiency, and home value.
            </p>
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
            {/* Features */}
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

            {/* Specs */}
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

      {/* Perfect For */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Perfect For Every Room
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perfectFor.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary/30 rounded-lg" />
                </div>
                <h3 className="text-lg font-bold text-secondary mb-2">
                  {item.title}
                </h3>
                <p className="text-muted text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Related Products */}
      <section className="py-20 bg-gray-50">
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

      {/* CTA / Lead Form */}
      <section id="quote" className="py-20 bg-secondary">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Get Your Free Quote for Cellular Shades
              </h2>
              <p className="text-white/70 mb-8">
                Ready to save on energy bills and upgrade your home? Get a free,
                no-obligation quote today. Our experts will help you find the
                perfect cellular shade solution.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-white">
                    Factory direct pricing – save 50%
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-white">
                    Free professional measurement
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-white">10-year manufacturer warranty</span>
                </div>
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
