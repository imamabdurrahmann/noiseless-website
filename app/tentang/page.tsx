export const metadata = {
  title: 'Tentang - Noiseless',
  description: 'Tentang brand Noiseless',
};

export default function TentangPage() {
  return (
    <div className="pt-28 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Tentang Noiseless</h1>
        <p className="text-muted mb-8">Siapa kita dan kenapa kami bikin brand ini</p>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-xl font-bold mt-8 mb-4">Cerita Kami</h2>
          <p className="text-foreground/80 mb-4">
            Noiseless lahir dari satu ide sederhana: bahwa fashion terbaik tidak harus
            berisik. Di dunia yang penuh dengan distractions dan noise visual, kami percaya
            bahwa style yang understated justru lebih berkesan.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">Filosofi</h2>
          <p className="text-foreground/80 mb-4">
            Kami nggak chase trend. Kami bikin produk yang timeless — bisa dipake hari ini,
            besok, atau tahun depan. Kualitas jadi prioritas utama, karena baju yang bagus
            itu tahan lama, bukan cuma bagus di foto.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">Komitmen Kami</h2>
          <ul className="list-disc list-inside text-foreground/80 space-y-2">
            <li>Material berkualitas — cuma pake fabric yang udah teruji</li>
            <li>Desain minimalist — nggak lebay, tapi tetap standout</li>
            <li>Produksi kecil-batch — tiap piece diperhatikan</li>
            <li>Harga jujur — nggak ada markup gila-gilaan</li>
          </ul>

        </div>
      </div>
    </div>
  );
}
