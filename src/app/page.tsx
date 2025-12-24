'use client';

import { motion } from 'framer-motion';
import {
  Ruler,
  ShoppingCart,
  Wrench,
  Star,
  Quote,
  MapPin,
} from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import ProductCard from '@/components/ProductCard';
import LeadForm from '@/components/LeadForm';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { PRODUCTS, SERVICE_AREAS } from '@/lib/constants';

const steps = [
  {
    icon: Ruler,
    title: 'Measure',
    description:
      'Book a free in-home consultation. Our experts will measure your windows and help you choose the perfect shades.',
  },
  {
    icon: ShoppingCart,
    title: 'Order',
    description:
      'Review your custom quote and place your order. Everything is made-to-measure in our Florida factory.',
  },
  {
    icon: Wrench,
    title: 'Install',
    description:
      'Professional installation included. We handle everything so you can enjoy your beautiful new shades.',
  },
];

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Miami, FL',
    rating: 5,
    text: 'Absolutely love my new motorized blinds! The team was professional, and the price was half what I was quoted elsewhere. Highly recommend!',
  },
  {
    name: 'James L.',
    location: 'Orlando, FL',
    rating: 5,
    text: 'From consultation to installation, ShadeSwift exceeded my expectations. The cellular shades have made a noticeable difference in our energy bills.',
  },
  {
    name: 'Maria G.',
    location: 'Fort Lauderdale, FL',
    rating: 5,
    text: 'Best decision we made for our home renovation. Factory direct pricing is real - we saved over $2,000 compared to other quotes.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Trust Bar */}
      <TrustBar />

      {/* Products Section */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              Our Products
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Premium Window Treatments
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              From classic roller shades to smart motorized blinds, we have the
              perfect solution for every window and every budget.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product, index) => (
              <ProductCard key={product.id} {...product} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              How It Works
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Getting custom window treatments has never been easier. We handle
              everything from start to finish.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 h-full shadow-sm border border-gray-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                    <span className="text-5xl font-bold text-gray-100">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted">{step.description}</p>
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/20" />
                )}
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              Customer Love
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              What Our Customers Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <p className="text-secondary mb-6">{testimonial.text}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-secondary">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted">{testimonial.location}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-secondary text-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-primary text-sm font-medium mb-4">
                Serving Florida
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                From Orlando to Miami
              </h2>
              <p className="text-white/70 mb-8">
                We proudly serve homeowners throughout Central and South Florida.
                All our products are manufactured in our Miami factory and
                installed by our professional team.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold">
                      {SERVICE_AREAS.orlando.name}
                    </h3>
                  </div>
                  <ul className="space-y-1 text-white/60 text-sm">
                    {SERVICE_AREAS.orlando.cities.map((city) => (
                      <li key={city}>{city}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold">
                      {SERVICE_AREAS.southFlorida.name}
                    </h3>
                  </div>
                  <ul className="space-y-1 text-white/60 text-sm">
                    {SERVICE_AREAS.southFlorida.cities.map((city) => (
                      <li key={city}>{city}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Florida map placeholder */}
              <div className="aspect-square bg-white/5 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-48 bg-primary/20 rounded-t-full mx-auto mb-4" />
                  <p className="text-white/40 text-sm">Florida Service Map</p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* CTA / Lead Form Section */}
      <section id="quote" className="py-20 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                Free Quote
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Ready to Transform Your Windows?
              </h2>
              <p className="text-muted mb-8">
                Get a free, no-obligation quote for custom window shades. Our
                team will help you find the perfect solution for your home and
                budget.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <span className="text-secondary">
                    Free in-home consultation
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <span className="text-secondary">
                    No pressure, no obligation
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <span className="text-secondary">
                    Same-day quotes available
                  </span>
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
