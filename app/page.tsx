import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import Link from 'next/link';

export default function Home() {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="pt-24 pb-8 space-y-24">
      {/* Hero Section (Bento Box style) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[80vh]">
          {/* Main Statement */}
          <div className="lg:col-span-8 bg-zinc-100 rounded-[2rem] sm:rounded-[3rem] p-8 md:p-16 flex flex-col justify-center relative overflow-hidden group">
            <div className="relative z-10 max-w-2xl">
              <span className="inline-block px-4 py-1.5 bg-white rounded-full text-xs font-bold tracking-widest text-foreground shadow-sm mb-8 border border-black/5 uppercase">
                New Collection 2026
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-black tracking-tighter leading-[0.9] mb-6">
                QUIET <br/> BUT <span className="text-accent">NOTICED.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted font-medium mb-10 max-w-md">
                Elevated streetwear for everyday motion. Design that speaks without making a sound.
              </p>
              <Link
                href="/katalog"
                className="inline-flex items-center justify-center bg-foreground text-background px-8 py-4 rounded-full font-semibold hover:scale-105 hover:bg-accent transition-all duration-300 shadow-xl"
              >
                Shop Now
              </Link>
            </div>
            
            {/* Abstract decorative elements */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-white/40 to-transparent pointer-events-none" />
          </div>

          {/* Side Banner */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-foreground text-background rounded-[2rem] p-8 flex-1 flex flex-col justify-between group overflow-hidden relative">
              <div className="relative z-10">
                <h3 className="font-display text-2xl font-bold mb-2">The Essential Hoodie</h3>
                <p className="text-background/70 text-sm">Our most loved piece, redefined.</p>
              </div>
              <Link href="/produk/noiseless-oversized-hoodie" className="relative z-10 mt-8 w-12 h-12 bg-background text-foreground rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                →
              </Link>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-accent/20 blur-3xl rounded-full" />
            </div>
            
            <div className="bg-accent text-white rounded-[2rem] p-8 h-48 flex items-center justify-center text-center">
              <p className="font-display text-xl font-bold tracking-tight">Free Shipping Nationwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="bg-foreground text-background py-4 overflow-hidden -rotate-2 scale-105">
        <div className="whitespace-nowrap flex font-display text-2xl md:text-4xl font-black tracking-widest uppercase items-center">
          <div className="animate-marquee flex items-center">
            <span className="mx-8">NOISELESS</span> <span className="text-accent mx-2">✦</span>
            <span className="mx-8">QUIET BUT NOTICED</span> <span className="text-accent mx-2">✦</span>
            <span className="mx-8">ESSENTIAL WEAR</span> <span className="text-accent mx-2">✦</span>
            <span className="mx-8">NOISELESS</span> <span className="text-accent mx-2">✦</span>
            <span className="mx-8">QUIET BUT NOTICED</span> <span className="text-accent mx-2">✦</span>
            <span className="mx-8">ESSENTIAL WEAR</span> <span className="text-accent mx-2">✦</span>
            <span className="mx-8">NOISELESS</span> <span className="text-accent mx-2">✦</span>
            <span className="mx-8">QUIET BUT NOTICED</span> <span className="text-accent mx-2">✦</span>
            <span className="mx-8">ESSENTIAL WEAR</span> <span className="text-accent mx-2">✦</span>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-2">Latest Drops</h2>
            <p className="text-muted">Explore our newest arrivals.</p>
          </div>
          <Link
            href="/katalog"
            className="hidden md:inline-flex px-6 py-2 border-2 border-foreground rounded-full font-semibold hover:bg-foreground hover:text-background transition-colors"
          >
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link
            href="/katalog"
            className="inline-flex px-8 py-3 border-2 border-foreground rounded-full font-semibold hover:bg-foreground hover:text-background transition-colors"
          >
            View All
          </Link>
        </div>
      </section>
    </div>
  );
}