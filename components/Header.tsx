'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold tracking-widest">
            NOISELESS
          </Link>
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-gray-600">
              Home
            </Link>
            <Link href="/katalog" className="text-sm font-medium hover:text-gray-600">
              Katalog
            </Link>
            <Link href="/tentang" className="text-sm font-medium hover:text-gray-600">
              Tentang
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}