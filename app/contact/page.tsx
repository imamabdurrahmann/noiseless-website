import { Metadata } from 'next';

import ContactForm from '@/components/ContactForm';

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
              <h2 className="text-2xl font-bold mb-4">Hubungi via WhatsApp</h2>
              <p className="text-foreground/80 mb-6 text-sm">
                Isi form di bawah ini dan kami akan membalas pesan Anda secepatnya (Senin - Sabtu, 10:00 - 20:00 WIB).
              </p>
              <ContactForm />
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
