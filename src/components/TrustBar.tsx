'use client';

import { motion } from 'framer-motion';
import { Flag, Shield, Factory, Home, Truck, Award } from 'lucide-react';
import Container from './ui/Container';

const trustItems = [
  {
    icon: Flag,
    label: 'Made in USA',
    description: 'Florida factory',
  },
  {
    icon: Shield,
    label: '10-Year Warranty',
    description: 'Full coverage',
  },
  {
    icon: Factory,
    label: 'Factory Direct',
    description: 'Save 50%',
  },
  {
    icon: Home,
    label: 'Free Consultation',
    description: 'In-home service',
  },
  {
    icon: Truck,
    label: '2-Week Delivery',
    description: 'Fast turnaround',
  },
  {
    icon: Award,
    label: '40+ Years',
    description: 'Industry experience',
  },
];

interface TrustBarProps {
  variant?: 'light' | 'dark';
  showAll?: boolean;
}

export default function TrustBar({
  variant = 'light',
  showAll = false,
}: TrustBarProps) {
  const items = showAll ? trustItems : trustItems.slice(0, 4);

  const bgColor = variant === 'light' ? 'bg-gray-50' : 'bg-secondary';
  const textColor = variant === 'light' ? 'text-secondary' : 'text-white';
  const mutedColor = variant === 'light' ? 'text-muted' : 'text-white/70';
  const iconBg = variant === 'light' ? 'bg-primary/10' : 'bg-white/10';

  return (
    <section className={`${bgColor} py-8 overflow-hidden`}>
      <Container>
        <div className="flex flex-wrap justify-center lg:justify-between gap-6 lg:gap-4">
          {items.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 px-4"
            >
              <div
                className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center`}
              >
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className={`font-semibold ${textColor}`}>{item.label}</p>
                <p className={`text-sm ${mutedColor}`}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
