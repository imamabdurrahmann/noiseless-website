import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import Link from 'next/link';

export default function Home() {
  const featuredProducts = products.slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-widest mb-4">
            NOISELESS
          </h1>
          <p className="text-gray-600 text-lg mb-8">Quiet but noticed.</p>
          <Link
            href="/katalog"
            className="inline-block bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors"
          >
            Lihat Koleksi
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Koleksi Terbaru</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/katalog"
              className="text-sm font-medium hover:text-gray-600 underline"
            >
              Lihat semua koleksi
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story Teaser */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Tentang Noiseless</h2>
          <p className="text-gray-600 mb-6">
            Noiseless adalah brand apparel yang percaya bahwa style terbaik
            datang dari kesederhanaan. Tanpa noise, tanpa distractions —
            hanya produk berkualitas dengan desain yang thoughtful.
          </p>
          <Link
            href="/tentang"
            className="text-sm font-medium hover:text-gray-600 underline"
          >
            Baca lebih lanjut
          </Link>
        </div>
      </section>
    </div>
  );
}