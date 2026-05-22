import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/produk/${product.slug}`} className="group block">
      <div className="aspect-[4/5] relative bg-zinc-100 dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
      </div>
      <div className="mt-5 space-y-2 px-2">
        <div className="flex justify-between items-start">
          <h3 className="text-base font-display font-semibold text-foreground group-hover:text-accent transition-colors">{product.name}</h3>
        </div>
        <p className="text-sm text-muted capitalize font-medium">{product.category}</p>
        <div className="flex gap-1.5 pt-1">
          {product.colors.map((color) => (
            <div 
              key={color.name}
              className="w-4 h-4 rounded-full border border-black/10 dark:border-white/10 shadow-inner"
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
        </div>
      </div>
    </Link>
  );
}