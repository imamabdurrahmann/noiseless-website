import Link from 'next/link';
import Image from 'next/image';
import { Product, formatPrice } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/produk/${product.slug}`} className="group">
      <div className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="text-sm font-medium">{product.name}</h3>
        <p className="text-sm text-gray-600">{formatPrice(product.price)}</p>
        <p className="text-xs text-gray-400 capitalize">{product.category}</p>
      </div>
    </Link>
  );
}