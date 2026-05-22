export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm font-bold tracking-widest">NOISELESS</p>
            <p className="text-xs text-gray-500 mt-1">Quiet but noticed.</p>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://instagram.com/noiseless"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-black"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-black"
            >
              WhatsApp
            </a>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Noiseless. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}