import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export const metadata = {
  title: 'Katalog - Noiseless',
  description: 'Lihat semua koleksi Noiseless',
};

export default function KatalogPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Katalog</h1>
        <p className="text-gray-600 mb-8">Semua koleksi Noiseless</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
