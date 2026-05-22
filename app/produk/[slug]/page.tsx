import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductBySlug, formatPrice, products } from '@/data/products';
import WhatsAppButton from '@/components/WhatsAppButton';
import { ProductColor } from '@/data/products';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: 'Produk tidak ditemukan' };
  return {
    title: `${product.name} - Noiseless`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="pt-28 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Link */}
        <Link
          href="/katalog"
          className="inline-flex items-center text-sm text-muted hover:text-foreground mb-8"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Kembali ke Katalog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Product Info */}
          <div>
            <p className="text-sm text-muted uppercase tracking-wide mb-2">
              {product.category}
            </p>
            <h1 className="text-3xl font-bold mb-4 text-foreground">{product.name}</h1>
            <p className="text-2xl font-semibold mb-6 text-foreground">{formatPrice(product.price)}</p>
            <p className="text-foreground/80 mb-8">{product.description}</p>

            {/* Color Options */}
            <div className="mb-6">
              <p className="text-sm font-medium mb-3 text-foreground">Warna Tersedia:</p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color: ProductColor) => (
                  <span
                    key={color.name}
                    className="px-4 py-2 border border-foreground/20 rounded-full text-sm text-foreground"
                  >
                    {color.name}
                  </span>
                ))}
              </div>
            </div>

            {/* WhatsApp Order Form */}
            <div className="bg-zinc-100 dark:bg-zinc-900 p-6 rounded-lg border border-black/5 dark:border-white/5">
              <h2 className="text-lg font-bold mb-4 text-foreground">Pesan via WhatsApp</h2>
              <WhatsAppButton productName={product.name} colors={product.colors} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
