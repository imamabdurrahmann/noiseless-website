'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl z-50">
      <nav className="bg-white/70 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.05)] border border-white/50 rounded-full px-6 py-3 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:scale-105 transition-transform">
            <Image 
              src="/images/products/LOGO.png" 
              alt="Noiseless Logo" 
              width={32} 
              height={32} 
              className="object-contain"
            />
            <span className="font-display text-xl font-bold tracking-widest text-foreground">
              NOISELESS
            </span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-sm font-semibold text-muted hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/katalog" className="text-sm font-semibold text-muted hover:text-accent transition-colors">
              Katalog
            </Link>
            <Link href="/tentang" className="text-sm font-semibold text-muted hover:text-accent transition-colors">
              Tentang
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}