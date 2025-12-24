'use client';

import { motion } from 'framer-motion';
import {
  Factory,
  Users,
  Award,
  Heart,
  MapPin,
  Phone,
  Mail,
  Clock,
  Check,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import TrustBar from '@/components/TrustBar';
import LeadForm from '@/components/LeadForm';
import { COMPANY_INFO } from '@/lib/constants';

const timeline = [
  {
    year: '1984',
    title: 'Wholesale Beginnings',
    description:
      'Started as a wholesale distributor, supplying window treatments to retailers across Florida.',
  },
  {
    year: '2014',
    title: 'Manufacturing Launch',
    description:
      'Opened our Miami factory to manufacture custom shades in-house, cutting out the middleman.',
  },
  {
    year: '2020',
    title: 'Direct to Consumer',
    description:
      'Launched ShadeSwift to bring factory-direct pricing directly to Florida homeowners.',
  },
  {
    year: 'Today',
    title: 'Serving 10,000+ Homes',
    description:
      'Trusted by thousands of families across Orlando and South Florida for quality and value.',
  },
];

const values = [
  {
    icon: Award,
    title: 'Quality First',
    description:
      'Every shade is crafted with premium materials and rigorous quality control. We stand behind our 10-year warranty.',
  },
  {
    icon: Heart,
    title: 'Customer Focus',
    description:
      'From your first call to final installation, we treat you like family. Your satisfaction is our priority.',
  },
  {
    icon: Factory,
    title: 'Local Manufacturing',
    description:
      'Made right here in Miami. Supporting local jobs and ensuring fast delivery for Florida customers.',
  },
  {
    icon: Users,
    title: 'Family Values',
    description:
      'As a family-owned business, we bring personal attention and integrity to every project.',
  },
];

const stats = [
  { value: '40+', label: 'Years Experience' },
  { value: '10,000+', label: 'Happy Customers' },
  { value: '50%', label: 'Average Savings' },
  { value: '10', label: 'Year Warranty' },
];

export default function AboutContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-secondary overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#06b6d4_25%,transparent_25%,transparent_75%,#06b6d4_75%)] bg-[size:60px_60px]" />
        </div>

        <Container className="relative z-10 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center px-4 py-2 bg-primary/20 rounded-full text-primary text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              Our Story
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              From Our Florida Factory<br />
              <span className="text-primary">To Your Windows</span>
            </h1>

            <p className="text-lg text-white/70 mb-8 max-w-2xl">
              We&apos;re not just another window treatment company. We&apos;re a
              family-owned manufacturer with 40+ years of industry experience,
              bringing factory-direct quality and pricing to Florida homes.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary py-8">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Four Decades of Excellence
              </h2>
              <div className="space-y-4 text-muted">
                <p>
                  What started as a small wholesale operation in 1984 has grown
                  into one of Florida&apos;s most trusted window treatment
                  manufacturers. Our founder saw an opportunity to bring better
                  quality and fairer pricing to the industry.
                </p>
                <p>
                  In 2014, we took a bold step: opening our own manufacturing
                  facility in Miami. This allowed us to control every aspect of
                  production, from fabric selection to final quality inspection.
                </p>
                <p>
                  Today, ShadeSwift represents the next chapter of our journey.
                  We&apos;ve cut out the middleman entirely, bringing our
                  factory-direct savings straight to homeowners across Orlando
                  and South Florida.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Timeline */}
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={item.year} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold text-sm">
                        {item.year}
                      </div>
                      {index < timeline.length - 1 && (
                        <div className="w-0.5 h-full bg-primary/20 mt-2" />
                      )}
                    </div>
                    <div className="pb-6">
                      <h3 className="font-bold text-secondary mb-1">
                        {item.title}
                      </h3>
                      <p className="text-muted text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 p-6 bg-white rounded-2xl shadow-sm"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Factory Direct */}
      <section className="py-20 bg-secondary text-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-primary text-sm font-medium mb-4">
                The ShadeSwift Difference
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Factory Direct Matters
              </h2>
              <p className="text-white/70 mb-8">
                When you buy from traditional retailers, you&apos;re paying for
                showroom overhead, sales commissions, and multiple markups. With
                ShadeSwift, you&apos;re buying directly from the source.
              </p>

              <div className="space-y-4">
                {[
                  'No middleman markups',
                  'Quality control at every step',
                  'Faster turnaround times',
                  'Direct communication with makers',
                  'Custom solutions, not cookie-cutter',
                  'Local support you can trust',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white/5 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6">Visit Our Factory</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-white/60">
                        {COMPANY_INFO.address.street}
                        <br />
                        {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}{' '}
                        {COMPANY_INFO.address.zip}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-white/60">{COMPANY_INFO.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-white/60">{COMPANY_INFO.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Hours</p>
                      <p className="text-white/60">{COMPANY_INFO.hours}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section id="quote" className="py-20 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Ready to Experience the Difference?
              </h2>
              <p className="text-muted mb-8">
                Join thousands of Florida families who have discovered the
                ShadeSwift advantage. Get a free quote and see how much you can
                save with factory-direct pricing.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-secondary">
                    Free in-home consultation
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-secondary">
                    No-pressure, transparent pricing
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-secondary">
                    10-year manufacturer warranty
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
