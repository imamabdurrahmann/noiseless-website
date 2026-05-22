'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 w-[95%] sm:w-[90%] max-w-4xl z-50">
      <nav className="bg-background/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.05)] border border-foreground/10 rounded-full px-4 sm:px-6 py-2 sm:py-3 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:scale-105 transition-transform shrink-0">
            <Image 
              src="/images/products/LOGO.png" 
              alt="Noiseless Logo" 
              width={28} 
              height={28} 
              className="object-contain sm:w-8 sm:h-8"
            />
            <span className="font-display text-lg sm:text-xl font-bold tracking-widest text-foreground">
              NOISELESS
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className={`text-sm font-semibold transition-colors ${pathname === '/' ? 'text-foreground' : 'text-muted hover:text-accent'}`}>
              Home
            </Link>
            <Link href="/katalog" className={`text-sm font-semibold transition-colors ${pathname === '/katalog' || pathname.startsWith('/produk') ? 'text-foreground' : 'text-muted hover:text-accent'}`}>
              Katalog
            </Link>
            <Link href="/lookbook" className={`text-sm font-semibold transition-colors ${pathname === '/lookbook' ? 'text-foreground' : 'text-muted hover:text-accent'}`}>
              Lookbook
            </Link>
            <Link href="/tentang" className={`text-sm font-semibold transition-colors ${pathname === '/tentang' ? 'text-foreground' : 'text-muted hover:text-accent'}`}>
              Tentang
            </Link>
          </div>

          {/* Desktop Right - Theme & Contact */}
          <div className="hidden md:flex items-center space-x-4 ml-auto pl-6">
            <ThemeToggle />
            <Link
              href="/contact"
              className={`text-sm font-semibold px-4 py-1.5 rounded-full transition-colors ${pathname === '/contact' ? 'bg-accent text-white' : 'bg-foreground text-background hover:bg-accent'}`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button & Theme */}
          <div className="md:hidden flex items-center space-x-2 ml-auto">
            <ThemeToggle />
            <button 
              className="p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-background dark:bg-zinc-900 border border-foreground/10 rounded-2xl shadow-xl overflow-hidden py-2 px-4 flex flex-col gap-3">
            <Link onClick={() => setIsMenuOpen(false)} href="/" className={`block py-2 text-sm font-semibold ${pathname === '/' ? 'text-accent' : 'text-foreground hover:text-accent'}`}>
              Home
            </Link>
            <Link onClick={() => setIsMenuOpen(false)} href="/katalog" className={`block py-2 text-sm font-semibold ${pathname === '/katalog' || pathname.startsWith('/produk') ? 'text-accent' : 'text-foreground hover:text-accent'}`}>
              Katalog
            </Link>
            <Link onClick={() => setIsMenuOpen(false)} href="/lookbook" className={`block py-2 text-sm font-semibold ${pathname === '/lookbook' ? 'text-accent' : 'text-foreground hover:text-accent'}`}>
              Lookbook
            </Link>
            <Link onClick={() => setIsMenuOpen(false)} href="/tentang" className={`block py-2 text-sm font-semibold ${pathname === '/tentang' ? 'text-accent' : 'text-foreground hover:text-accent'}`}>
              Tentang
            </Link>
            <Link onClick={() => setIsMenuOpen(false)} href="/contact" className={`block py-2 text-sm font-semibold ${pathname === '/contact' ? 'text-accent' : 'text-foreground hover:text-accent'}`}>
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}