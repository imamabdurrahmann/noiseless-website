import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-background text-foreground text-center">
      <h1 className="text-8xl md:text-9xl font-display font-bold mb-4 tracking-tighter">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Lost in the noise.</h2>
      <p className="text-foreground/80 mb-8 max-w-md mx-auto">
        The page you're looking for doesn't exist, has been moved, or maybe it was just a limited drop.
      </p>
      <Link href="/" className="inline-block bg-foreground text-background px-8 py-4 rounded-full font-semibold hover:scale-105 active:scale-95 transition-transform">
        Go Back to the Quiet
      </Link>
    </div>
  );
}
