'use client';

import { motion } from 'framer-motion';
import {
  Smartphone,
  Mic,
  Shield,
  Wifi,
  Timer,
  Battery,
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
    icon: Mic,
    title: 'Voice Control',
    description:
      'Works with Alexa, Google Home, and Siri. Control your shades with simple voice commands.',
  },
  {
    icon: Smartphone,
    title: 'App Control',
    description:
      'Open, close, and schedule your blinds from anywhere using our smartphone app.',
  },
  {
    icon: Shield,
    title: 'Child Safe',
    description:
      'No cords, no chains. The safest choice for homes with children and pets.',
  },
  {
    icon: Timer,
    title: 'Smart Scheduling',
    description:
      'Set schedules based on sunrise/sunset or specific times. Your shades work while you sleep.',
  },
];

const features = [
  'Whisper-quiet motor operation',
  'Battery or hardwired options',
  '5-year motor warranty',
  'Remote control included',
  'Group control for multiple shades',
  'Integration with smart home systems',
  'Solar-powered battery charging option',
  'Manual override capability',
];

const compatibleWith = [
  { name: 'Amazon Alexa', color: 'bg-blue-500' },
  { name: 'Google Home', color: 'bg-red-500' },
  { name: 'Apple HomeKit', color: 'bg-gray-800' },
  { name: 'SmartThings', color: 'bg-green-500' },
];

const relatedProducts = PRODUCTS.filter((p) => p.slug !== 'motorized').slice(0, 3);

export default function MotorizedContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#06b6d4_1px,transparent_1px)] bg-[size:30px_30px]" />
        </div>

        <Container className="relative z-10 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center px-4 py-2 bg-primary/20 rounded-full text-primary text-sm font-medium mb-6">
                <Wifi className="w-4 h-4 mr-2" />
                Smart Home Ready
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Smart<br />
                <span className="text-primary">Motorized Blinds</span>
              </h1>

              <p className="text-lg text-white/70 mb-6">
                The future of window treatments is here. Control your blinds with
                your voice, smartphone, or set schedules that work around your
                life. No cords, no hassle, just smart convenience.
              </p>

              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-white/50 text-sm">Starting at</span>
                <span className="text-5xl font-bold text-white">$199</span>
                <span className="text-white/50 line-through">$399</span>
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
                  Watch Demo
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center relative">
                <div className="w-48 h-64 bg-white/10 rounded-lg relative">
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Wifi className="w-6 h-6 text-white" />
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
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Mic className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted">Voice Command</p>
                    <p className="text-lg font-bold text-secondary">&quot;Alexa, close blinds&quot;</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      <TrustBar />

      {/* Compatible With */}
      <section className="py-12 bg-white border-b">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <span className="text-muted font-medium">Works with:</span>
            {compatibleWith.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full"
              >
                <div className={`w-3 h-3 rounded-full ${item.color}`} />
                <span className="font-medium text-secondary">{item.name}</span>
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
              Smart Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              The Smart Way to Control Light
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

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-secondary mb-8">
                Features & Specifications
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
                Power Options
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-3">
                    <Battery className="w-6 h-6 text-primary" />
                    <h3 className="font-bold text-secondary">Battery Powered</h3>
                  </div>
                  <p className="text-muted text-sm">
                    Rechargeable battery lasts 6-12 months. Easy USB-C charging.
                    No electrician needed.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-3">
                    <Wifi className="w-6 h-6 text-primary" />
                    <h3 className="font-bold text-secondary">Hardwired</h3>
                  </div>
                  <p className="text-muted text-sm">
                    Professional installation available. Never worry about
                    charging. Ideal for large installations.
                  </p>
                </div>
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
              Also Available in Motorized
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
                Upgrade to Smart Motorized Blinds
              </h2>
              <p className="text-white/70 mb-8">
                Join the smart home revolution. Get a free quote for motorized
                blinds and experience the convenience of automated window
                treatments.
              </p>

              <div className="space-y-4">
                {[
                  'Free smart home consultation',
                  'Professional installation included',
                  '5-year motor warranty',
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
