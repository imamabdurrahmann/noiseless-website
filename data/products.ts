export interface ProductColor {
  name: string;
  hex?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  description: string;
  category: 'tshirt' | 'hoodie' | 'crewneck' | 'accessories';
  sizes: string[];
  colors: ProductColor[];
  images: string[];
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'noiseless-essential-tee',
    name: 'Noiseless Essential Tee',
    price: 150000,
    description: 'Premium cotton t-shirt dengan desain minimal. Cocok untuk everyday wear.',
    category: 'tshirt',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Gray', hex: '#6B7280' },
    ],
    images: ['/images/products/placeholder-1.jpg'],
  },
  {
    id: '2',
    slug: 'noiseless-oversized-hoodie',
    name: 'Noiseless Oversized Hoodie',
    price: 350000,
    description: 'Hoodie oversized dengan bahan fleece berkualitas. Hangat dan stylish.',
    category: 'hoodie',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'Charcoal', hex: '#36454F' },
    ],
    images: ['/images/products/placeholder-2.jpg'],
  },
  {
    id: '3',
    slug: 'noiseless-graphic-tee',
    name: 'Noiseless Graphic Tee',
    price: 180000,
    description: 'T-shirt dengan graphic print khas Noiseless. Statement piece untuk kolektor.',
    category: 'tshirt',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'White', hex: '#FFFFFF' },
    ],
    images: ['/images/products/placeholder-3.jpg'],
  },
  {
    id: '4',
    slug: 'noiseless-crewneck',
    name: 'Noiseless Crewneck',
    price: 280000,
    description: 'Crewneck klasik dengan material premium. Perfect untuk layering.',
    category: 'crewneck',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'Navy', hex: '#000080' },
      { name: 'Olive', hex: '#556B2F' },
    ],
    images: ['/images/products/placeholder-4.jpg'],
  },
  {
    id: '5',
    slug: 'noiseless-tote-bag',
    name: 'Noiseless Tote Bag',
    price: 95000,
    description: 'Tote bag kanvas dengan logo Noiseless. Praktis untuk sehari-hari.',
    category: 'accessories',
    sizes: ['One Size'],
    colors: [
      { name: 'Natural', hex: '#F5F5DC' },
      { name: 'Black', hex: '#000000' },
    ],
    images: ['/images/products/placeholder-5.jpg'],
  },
  {
    id: '6',
    slug: 'noiseless-cap',
    name: 'Noiseless Cap',
    price: 85000,
    description: 'Snapback cap dengan logo Noiseless. Adjustable fit.',
    category: 'accessories',
    sizes: ['One Size'],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'White', hex: '#FFFFFF' },
    ],
    images: ['/images/products/placeholder-6.jpg'],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);
}
