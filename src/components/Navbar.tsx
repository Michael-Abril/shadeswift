'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { NAV_LINKS, COMPANY_INFO, PRODUCTS } from '@/lib/constants';
import Container from './ui/Container';
import Button from './ui/Button';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span
              className={cn(
                'text-2xl font-bold font-heading transition-colors',
                isScrolled ? 'text-secondary' : 'text-white'
              )}
            >
              Shade<span className="text-primary">Swift</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="relative">
                {link.children ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >
                    <button
                      className={cn(
                        'flex items-center space-x-1 font-medium transition-colors',
                        isScrolled
                          ? 'text-secondary hover:text-primary'
                          : 'text-white/90 hover:text-white'
                      )}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={cn(
                          'w-4 h-4 transition-transform',
                          isProductsOpen && 'rotate-180'
                        )}
                      />
                    </button>

                    {/* Mega Menu */}
                    <AnimatePresence>
                      {isProductsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                        >
                          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 w-[500px] grid grid-cols-2 gap-4">
                            {PRODUCTS.map((product) => (
                              <Link
                                key={product.id}
                                href={`/products/${product.slug}`}
                                className="flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                              >
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                  <div className="w-6 h-6 bg-primary rounded" />
                                </div>
                                <div>
                                  <p className="font-medium text-secondary group-hover:text-primary transition-colors">
                                    {product.name}
                                  </p>
                                  <p className="text-sm text-muted line-clamp-1">
                                    From ${product.startingPrice}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      'font-medium transition-colors',
                      isScrolled
                        ? 'text-secondary hover:text-primary'
                        : 'text-white/90 hover:text-white'
                    )}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className={cn(
                'flex items-center space-x-2 font-medium transition-colors',
                isScrolled
                  ? 'text-secondary hover:text-primary'
                  : 'text-white/90 hover:text-white'
              )}
            >
              <Phone className="w-4 h-4" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <Button href="#quote" variant="primary" size="sm">
              Get Free Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              'lg:hidden p-2 rounded-lg transition-colors',
              isScrolled ? 'text-secondary' : 'text-white'
            )}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <Container>
              <div className="py-6 space-y-4">
                {NAV_LINKS.map((link) => (
                  <div key={link.label}>
                    {link.children ? (
                      <div className="space-y-2">
                        <p className="font-medium text-secondary">
                          {link.label}
                        </p>
                        <div className="pl-4 space-y-2">
                          {PRODUCTS.map((product) => (
                            <Link
                              key={product.id}
                              href={`/products/${product.slug}`}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block text-muted hover:text-primary transition-colors"
                            >
                              {product.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block font-medium text-secondary hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}

                <div className="pt-4 border-t space-y-3">
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="flex items-center space-x-2 text-secondary"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{COMPANY_INFO.phone}</span>
                  </a>
                  <Button href="#quote" variant="primary" className="w-full">
                    Get Free Quote
                  </Button>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
