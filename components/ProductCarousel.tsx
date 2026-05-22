'use client';

import * as React from 'react';
import Image from 'next/image';

export function ProductCarousel({ images, productName }: { images: string[], productName: string }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative aspect-square w-full bg-zinc-100 dark:bg-zinc-900 rounded-lg overflow-hidden group">
      <Image
        src={images[currentIndex]}
        alt={`${productName} - View ${currentIndex + 1}`}
        fill
        className="object-cover"
        priority
      />

      {images.length > 1 && (
        <>
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-foreground"
            aria-label="Previous image"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-foreground"
            aria-label="Next image"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-foreground w-4' : 'bg-foreground/40 hover:bg-foreground/60'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
