import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import Link from 'next/link';

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="pt-28 sm:pt-32 pb-8 space-y-24">
      {/* Hero Section (Bento Box style) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[60vh] lg:h-[80vh]">
          {/* Main Statement */}
          <div className="lg:col-span-8 bg-zinc-100 dark:bg-zinc-900/60 rounded-[2rem] sm:rounded-[3rem] p-6 md:p-16 flex flex-col justify-center relative overflow-hidden group">
            <div className="relative z-10 max-w-2xl">
              <span className="inline-block px-4 py-1.5 bg-white dark:bg-zinc-800 rounded-full text-[10px] md:text-xs font-bold tracking-widest text-zinc-900 dark:text-zinc-100 shadow-sm mb-4 md:mb-8 border border-black/5 dark:border-white/5 uppercase">
                New Collection 2026
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-black tracking-tighter leading-[0.9] mb-4 md:mb-6 text-zinc-900 dark:text-zinc-50">
                QUIET <br/> BUT <span className="text-accent">NOTICED.</span>
              </h1>
              <p className="text-base md:text-xl text-muted font-medium mb-6 md:mb-10 max-w-md">
                Elevated streetwear for everyday motion. Design that speaks without making a sound.
              </p>
              <Link
                href="/katalog"
                className="inline-flex items-center justify-center bg-foreground text-background px-6 py-3 md:px-8 md:py-4 text-sm md:text-base rounded-full font-semibold hover:scale-105 hover:bg-accent transition-all duration-300 shadow-xl"
              >
                Shop Now
              </Link>
            </div>
            
            {/* Abstract decorative elements */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-black/5 dark:from-white/5 to-transparent pointer-events-none" />
          </div>

          {/* Side Banner */}
          <div className="lg:col-span-4 flex flex-col gap-4 md:gap-6">
            <div className="bg-foreground text-background rounded-[2rem] p-6 md:p-8 flex-1 flex flex-col justify-between group overflow-hidden relative">
              <div className="relative z-10">
                <h3 className="font-display text-xl md:text-2xl font-bold mb-1 md:mb-2">The Essential Hoodie</h3>
                <p className="text-background/70 text-xs md:text-sm">Our most loved piece, redefined.</p>
              </div>
              <Link href="/produk/noiseless-hoodie" className="relative z-10 mt-6 md:mt-8 w-10 h-10 md:w-12 md:h-12 bg-background text-foreground rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                →
              </Link>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 md:w-48 md:h-48 bg-accent/20 blur-3xl rounded-full" />
            </div>
            
            <div className="bg-accent text-white rounded-[2rem] p-6 md:p-8 py-8 md:min-h-[12rem] flex items-center justify-center text-center">
              <p className="font-display text-lg md:text-2xl font-bold tracking-tight">Free Shipping Nationwide</p>
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