export interface ProductColor {
  name: string;
  hex?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
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
    description: 'Daily beater lu yang bakal kepake terus. Cuttingan fit yang jatuhnya pas banget di badan, bahannya adem parah no debat. Cocok buat nongkrong santai sampe nge-date.',
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
    description: 'Bukan hoodie pasaran. Pake cotton fleece 375GSM tebel tapi tetep breathable. Ada detail sablon glitter & emblem star chrome yang bikin lu auto stand out. Quiet but noticed.',
    category: 'hoodie',
    sizes: ['M', 'L', 'XL', 'XXL'],
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
    description: 'Versatile piece yang wajib ada di rotasi fit lu. Grafisnya subtle tapi ngasih statement keras. Pake ini doang udah cukup bikin gaya lu keliatan proper.',
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
    description: 'Outerwear andalan buat riding atau sekedar layer up. Siluet boxy vintage yang lagi hype abis. Rugged, bold, dan pastinya timeless.',
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
    description: 'Naikin level gaya lu tanpa keliatan try hard. Perfect buat dapetin old-money aesthetic atau sekedar smart-casual look. Clean and lowkey flex.',
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
