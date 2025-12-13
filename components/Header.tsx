'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Image
              src="/images/logo.png"
              alt="SoftLogix Logo"
              width={150}
              height={40}
              className="h-8 sm:h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              About Us
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              Services
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              Products
            </Link>
            <Link href="/catalogue" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              Catalogue
            </Link>
            <Link href="/industries" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              Industries
            </Link>
            <Link href="/why-choose-us" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              Why Choose Us
            </Link>
            <Link 
              href="/contact" 
              className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-900"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="/" className="block text-gray-700 hover:text-blue-900 font-medium">Home</Link>
            <Link href="/about" className="block text-gray-700 hover:text-blue-900 font-medium">About Us</Link>
            <Link href="/services" className="block text-gray-700 hover:text-blue-900 font-medium">Services</Link>
            <Link href="/products" className="block text-gray-700 hover:text-blue-900 font-medium">Products</Link>
            <Link href="/catalogue" className="block text-gray-700 hover:text-blue-900 font-medium">Catalogue</Link>
            <Link href="/industries" className="block text-gray-700 hover:text-blue-900 font-medium">Industries</Link>
            <Link href="/why-choose-us" className="block text-gray-700 hover:text-blue-900 font-medium">Why Choose Us</Link>
            <Link href="/contact" className="block bg-blue-900 text-white px-4 py-2 rounded-md text-center font-medium">
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

