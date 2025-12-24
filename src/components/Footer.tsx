import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube,
} from 'lucide-react';
import { COMPANY_INFO, PRODUCTS, SERVICE_AREAS } from '@/lib/constants';
import Container from './ui/Container';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      {/* Main Footer */}
      <Container>
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold font-heading">
                Shade<span className="text-primary">Swift</span>
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Factory direct custom window shades. Serving Florida families
              since 2014 with quality products and unbeatable prices.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Products</h3>
            <ul className="space-y-3">
              {PRODUCTS.map((product) => (
                <li key={product.id}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Service Areas</h3>
            <div className="space-y-4">
              <div>
                <p className="text-white font-medium mb-2">
                  {SERVICE_AREAS.orlando.name}
                </p>
                <ul className="space-y-1">
                  {SERVICE_AREAS.orlando.cities.map((city) => (
                    <li key={city} className="text-gray-400 text-sm">
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-white font-medium mb-2">
                  {SERVICE_AREAS.southFlorida.name}
                </p>
                <ul className="space-y-1">
                  {SERVICE_AREAS.southFlorida.cities.map((city) => (
                    <li key={city} className="text-gray-400 text-sm">
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-start space-x-3 text-gray-400 hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-start space-x-3 text-gray-400 hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>
                  {COMPANY_INFO.address.street}
                  <br />
                  {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}{' '}
                  {COMPANY_INFO.address.zip}
                </span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>{COMPANY_INFO.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <Container>
          <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span className="text-xl">🇺🇸</span>
              <span>Made in Florida, USA</span>
            </div>
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
