export const metadata = {
  title: 'FAQ & Kebijakan - Noiseless',
  description: 'Pertanyaan umum dan kebijakan retur/pengembalian barang.',
};

export default function FAQPage() {
  return (
    <div className="pt-28 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 uppercase text-foreground">FAQ & Kebijakan</h1>
        
        <div className="space-y-12">
          {/* FAQ Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-accent">Pertanyaan Umum (FAQ)</h2>
            <div className="space-y-6">
              <div className="bg-zinc-100 dark:bg-zinc-900 p-6 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="text-lg font-bold mb-2 text-foreground">Berapa lama proses pengiriman?</h3>
                <p className="text-muted">Untuk pesanan reguler, pesanan akan diproses dalam 1-2 hari kerja. Estimasi pengiriman tergantung pada ekspedisi dan lokasi tujuan (biasanya 2-4 hari kerja untuk Pula Jawa).</p>
              </div>
              <div className="bg-zinc-100 dark:bg-zinc-900 p-6 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="text-lg font-bold mb-2 text-foreground">Apakah produk yang sudah habis (Sold Out) akan di-restock?</h3>
                <p className="text-muted">Sebagian besar koleksi NOISELESS bersifat terbatas (Limited Drops). Kami jarang melakukan restock untuk artikel yang sama guna menjaga eksklusivitas.</p>
              </div>
              <div className="bg-zinc-100 dark:bg-zinc-900 p-6 rounded-2xl border border-black/5 dark:border-white/5">
                <h3 className="text-lg font-bold mb-2 text-foreground">Bagaimana cara menentukan ukuran yang pas?</h3>
                <p className="text-muted">Setiap halaman produk memiliki panduan ukuran (Size Chart) & Techpack di bagian paling bawah. Pastikan untuk mengukur berdasarkan panduan tersebut sebelum memesan.</p>
              </div>
            </div>
          </section>

          {/* Return Policy Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-accent">Kebijakan Pengembalian (Return Policy)</h2>
            <div className="prose prose-zinc dark:prose-invert max-w-none text-muted">
              <p className="mb-4">
                Kepuasan lo adalah prioritas kami. Kalau barang yang lo terima mengalami cacat produksi atau kesalahan pengiriman dari pihak NOISELESS, lo berhak mengajukan penukaran (Return).
              </p>
              <h4 className="text-foreground font-bold mt-6 mb-2">Syarat Penukaran Barang:</h4>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Klaim maksimal dilakukan <strong>2x24 jam</strong> setelah status resi menunjukkan barang telah diterima.</li>
                <li><strong>Wajib</strong> menyertakan video unboxing dari awal paket belum terbuka (tanpa edit/cut). Tanpa video unboxing, komplain tidak dapat kami proses.</li>
                <li>Barang masih dalam keadaan baru, belum dicuci, belum dipakai (kecuali fitting), dan tag/label masih terpasang utuh.</li>
                <li>Ongkos kirim retur akibat kesalahan produksi/pengiriman akan kami tanggung sepenuhnya.</li>
              </ul>

              <h4 className="text-foreground font-bold mt-6 mb-2">Penukaran Ukuran (Size Exchange):</h4>
              <p className="mb-4">
                Jika barang tidak muat, kami memperbolehkan tukar size selama stock pengganti masih tersedia. Ongkos kirim bolak-balik sepenuhnya ditanggung oleh pembeli. Pastikan cek Size Chart dengan teliti sebelum membeli.
              </p>
              
              <div className="mt-8 p-6 bg-accent/10 border border-accent/20 rounded-xl">
                <p className="text-foreground font-medium m-0">
                  Untuk mengajukan retur atau bantuan lainnya, silakan hubungi tim kami via <a href="/contact" className="text-accent underline hover:text-accent/80">WhatsApp Contact</a>.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
