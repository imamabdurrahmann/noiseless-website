export default function Footer() {
  return (
    <footer className="bg-foreground text-background mt-24 rounded-t-[3rem] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-4">
              NOISE<span className="text-accent">LESS</span>
            </h2>
            <p className="text-background/70 text-lg max-w-md">
              Statement apparel without the noise. Quiet but noticed. Designed for the bold.
            </p>
          </div>
          <div className="flex flex-col md:items-end space-y-4">
            <h3 className="font-display text-xl font-semibold mb-2">Connect</h3>
            <a
              href="https://instagram.com/noiseless"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-background/80 hover:text-accent transition-colors flex items-center gap-2 group"
            >
              Instagram
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-background/80 hover:text-accent transition-colors flex items-center gap-2 group"
            >
              WhatsApp
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
        
        <div className="mt-24 pt-8 border-t border-background/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Noiseless. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-sm text-background/50 hover:text-background cursor-pointer">Privacy Policy</span>
            <span className="text-sm text-background/50 hover:text-background cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}