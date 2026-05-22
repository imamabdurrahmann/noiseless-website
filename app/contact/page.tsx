import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Noiseless',
  description: 'Hubungi tim Noiseless untuk pertanyaan, kolaborasi, atau order.',
};

export default function ContactPage() {
  return (
    <div className="pt-28 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Contact Us</h1>
        <p className="text-muted text-lg mb-12 max-w-2xl">
          Punya pertanyaan soal produk, sizing, atau pengiriman? Atau mau ngajak kolaborasi? 
          Jangan ragu buat reach out ke kita. We're here to help.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Contact Methods */}
          <div className="space-y-8">
            <div className="bg-zinc-100 dark:bg-zinc-900/60 rounded-[2rem] p-8 border border-black/5 dark:border-white/5 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold mb-2">WhatsApp</h2>
              <p className="text-foreground/80 mb-6">
                Fast response untuk order, ketersediaan stock, dan pertanyaan umum.
                (Senin - Sabtu, 10:00 - 20:00 WIB)
              </p>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#25D366] text-white px-6 py-3 font-semibold rounded-full hover:scale-105 transition-transform"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                Chat WhatsApp
              </a>
            </div>

            <div className="bg-zinc-100 dark:bg-zinc-900/60 rounded-[2rem] p-8 border border-black/5 dark:border-white/5 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold mb-2">Email & Collabs</h2>
              <p className="text-foreground/80 mb-6">
                Untuk tawaran kerjasama, press, dan inquiries bisnis lainnya.
              </p>
              <a
                href="mailto:hello@noiseless.com"
                className="inline-flex items-center justify-center bg-foreground text-background px-6 py-3 font-semibold rounded-full hover:scale-105 transition-transform"
              >
                hello@noiseless.com
              </a>
            </div>
          </div>

          {/* Right Column: FAQ / Info */}
          <div className="bg-foreground text-background rounded-[2rem] p-8 lg:p-12">
            <h2 className="text-3xl font-display font-bold mb-8">Frequently Asked</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2">Berapa lama proses pengiriman?</h3>
                <p className="text-background/80">Pesanan diproses dalam 1-2 hari kerja. Pengiriman reguler biasanya memakan waktu 2-4 hari tergantung lokasi.</p>
              </div>
              <hr className="border-background/20" />
              <div>
                <h3 className="font-bold text-lg mb-2">Bisa tukar size nggak?</h3>
                <p className="text-background/80">Bisa! Berlaku 3x24 jam setelah barang diterima. Pastikan tag belum dicopot dan barang belum dicuci.</p>
              </div>
              <hr className="border-background/20" />
              <div>
                <h3 className="font-bold text-lg mb-2">Restock produk lama?</h3>
                <p className="text-background/80">Beberapa core item (seperti Essential Hoodie) akan direstock. Tapi untuk seasonal drops, kalau udah habis ya habis selamanya.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
