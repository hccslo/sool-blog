'use client';

import { Menu, Search } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-osur-cream/95 backdrop-blur-sm border-b border-osur-black/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-osur-black/5 transition-colors rounded"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo */}
          <Link href="/" className="flex-1 flex justify-center">
            <div className="text-center">
              <h1 className="text-3xl tracking-wider font-light">Sool</h1>
            </div>
          </Link>

          {/* Right Navigation */}
          <div className="flex items-center gap-6">
            <Link
              href="/about"
              className="text-xs tracking-wider hover:text-osur-brown transition-colors hidden md:block"
            >
              ABOUT SOOL
            </Link>
            <Link
              href="/follow"
              className="text-xs tracking-wider hover:text-osur-brown transition-colors hidden md:block"
            >
              FOLLOW US
            </Link>
            <Link
              href="/shop"
              className="text-xs tracking-wider hover:text-osur-brown transition-colors hidden md:block"
            >
              SHOP
            </Link>
            <button className="p-2 hover:bg-osur-black/5 transition-colors rounded">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-osur-cream border-b border-osur-black/10 p-6 md:hidden">
          <nav className="flex flex-col gap-4">
            <Link href="/" className="text-sm tracking-wider hover:text-osur-brown transition-colors">
              Home
            </Link>
            <Link href="/the-woman" className="text-sm tracking-wider hover:text-osur-brown transition-colors">
              The Woman
            </Link>
            <Link href="/the-stories" className="text-sm tracking-wider hover:text-osur-brown transition-colors">
              The Stories
            </Link>
            <Link href="/feet-on-ground" className="text-sm tracking-wider hover:text-osur-brown transition-colors">
              Feet on the Ground
            </Link>
            <Link href="/the-style" className="text-sm tracking-wider hover:text-osur-brown transition-colors">
              The Style
            </Link>
            <Link href="/about" className="text-sm tracking-wider hover:text-osur-brown transition-colors">
              About Sool
            </Link>
            <Link href="/contact" className="text-sm tracking-wider hover:text-osur-brown transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
