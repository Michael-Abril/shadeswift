'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  id: string;
  name: string;
  slug: string;
  description: string;
  startingPrice: number;
  badge?: string | null;
  image: string;
  index?: number;
}

export default function ProductCard({
  name,
  slug,
  description,
  startingPrice,
  badge,
  image,
  index = 0,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link href={`/products/${slug}`}>
        <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
          {/* Image Container */}
          <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
            {/* Placeholder gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20" />

            {/* Image with hover zoom */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-primary/10 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                <div className="w-20 h-16 bg-primary/30 rounded-lg" />
              </div>
            </div>

            {/* Badge */}
            {badge && (
              <div
                className={cn(
                  'absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold',
                  badge === 'BEST SELLER' && 'bg-primary text-white',
                  badge === 'NEW' && 'bg-green-500 text-white',
                  badge === 'SMART HOME' && 'bg-purple-500 text-white',
                  !['BEST SELLER', 'NEW', 'SMART HOME'].includes(badge) &&
                    'bg-secondary text-white'
                )}
              >
                {badge}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-semibold text-secondary group-hover:text-primary transition-colors mb-2">
              {name}
            </h3>
            <p className="text-muted text-sm mb-4 line-clamp-2">{description}</p>

            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm text-muted">Starting at</span>
                <p className="text-2xl font-bold text-secondary">
                  ${startingPrice}
                </p>
              </div>

              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                <ArrowRight className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
