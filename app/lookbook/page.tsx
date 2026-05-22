import Image from 'next/image';

export const metadata = {
  title: 'Lookbook - Noiseless',
  description: 'Our campaigns and lookbook.',
};

const placeholderImages = [
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1550614000-4b95d4157120?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1617331721458-bd3bd3f9c7f8?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1509319117193-57bab727e09d?q=80&w=800&auto=format&fit=crop',
];

export default function LookbookPage() {
  return (
    <div className="pt-28 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tighter uppercase">Lookbook</h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Vibes, aesthetic, and how we wear it on the streets. 
            Real people, real fits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {placeholderImages.map((img, i) => (
            <div key={i} className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900">
              <Image
                src={img}
                alt={`Lookbook image ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-accent font-semibold tracking-widest text-sm uppercase">More dropping soon</p>
        </div>
      </div>
    </div>
  );
}
