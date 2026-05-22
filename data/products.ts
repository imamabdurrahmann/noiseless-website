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
  category: 'tshirt' | 'hoodie' | 'crewneck' | 'accessories' | 'longsleeve' | 'workjacket' | 'polo';
  sizes: string[];
  colors: ProductColor[];
  images: string[];
  techpackImage?: string;
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'noiseless-tshirt',
    name: 'Noiseless T-Shirt',
    price: 150000,
    description: 'T-shirt Noiseless dengan desain minimal. Cocok untuk everyday wear.',
    category: 'tshirt',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'White', hex: '#FFFFFF' },
    ],
    images: ['/images/products/MOCKUP TSHIRT_.png'],
    techpackImage: '/images/techpacks/techpack-tshirt.png',
  },
  {
    id: '2',
    slug: 'noiseless-hoodie',
    name: 'Noiseless Hoodie',
    price: 350000,
    description: 'Hoodie dengan bahan fleece berkualitas. Hangat dan stylish.',
    category: 'hoodie',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Black', hex: '#000000' },
    ],
    images: ['/images/products/MOCKUP HOODIE.png'],
    techpackImage: '/images/techpacks/techpack-hoodie.png',
  },
  {
    id: '3',
    slug: 'noiseless-longsleeve',
    name: 'Noiseless Longsleeve',
    price: 200000,
    description: 'Longsleeve shirt yang nyaman dengan cuttingan modern.',
    category: 'longsleeve',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Black', hex: '#000000' },
    ],
    images: ['/images/products/MOCKUP LONGSLEEVE.png'],
    techpackImage: '/images/techpacks/techpack-longsleeve.png',
  },
  {
    id: '4',
    slug: 'noiseless-workjacket',
    name: 'Noiseless Workjacket',
    price: 450000,
    description: 'Workjacket canvas premium yang tangguh namun tetap stylish.',
    category: 'workjacket',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'Navy', hex: '#000080' },
    ],
    images: ['/images/products/MOCKUP WORKJACKET.png'],
    techpackImage: '/images/techpacks/techpack-workjacket.png',
  },
  {
    id: '5',
    slug: 'noiseless-polo',
    name: 'Noiseless Polo',
    price: 180000,
    description: 'Polo shirt elegan yang cocok untuk smart casual.',
    category: 'polo',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'White', hex: '#FFFFFF' },
    ],
    images: ['/images/products/mockup polo.png'],
    techpackImage: '/images/techpacks/techpack-polo.png',
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
