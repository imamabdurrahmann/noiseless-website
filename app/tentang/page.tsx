export const metadata = {
  title: 'Tentang - Noiseless',
  description: 'Tentang brand Noiseless',
};

export default function TentangPage() {
  return (
    <div className="pt-28 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Behind Noiseless</h1>
        <p className="text-muted text-lg mb-12">The story, the vision, the quiet flex.</p>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4">How We Started</h2>
          <p className="text-foreground/80 mb-6">
            Noiseless lahir karena kita capek ngeliat fashion yang terlalu "berisik" dan <i>over-branded</i>. 
            Di era di mana semua orang pada fomo dan pengen caper lewat baju yang heboh, kita milih jalan ninja buat <i>stay lowkey</i>. 
            We believe that true style speaks for itself without screaming for attention. Makanya kita bikin Noiseless — 
            buat lu yang pengen keliatan <i>proper</i>, <i>aesthetic</i>, tapi tetep <i>effortlessly cool</i>.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Our Mindset</h2>
          <p className="text-foreground/80 mb-6">
            Kita anti banget <i>fast fashion</i> yang umurnya sebulan doang. Noiseless dibikin buat ngelewatin semua <i>micro-trends</i> fana itu. 
            Focus kita bikin <i>essential pieces</i> yang <i>timeless</i>, gampang di-<i>mix and match</i>, dan pastinya awet dipake tempur. 
            Karena <i>fit</i> yang bagus itu bukan yang cuma <i>hype</i> sesaat di FYP, tapi yang beneran jadi <i>go-to outfit</i> andalan lu tiap hari.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">The Noiseless Promise</h2>
          <ul className="space-y-4 text-foreground/80 list-none pl-0">
            <li className="flex items-start gap-3">
              <span className="text-accent text-xl leading-none">•</span>
              <div><strong className="text-foreground">Premium Fabric Only</strong> — bahan abal-abal is a big no. Kita cuma pake material yang kerasa mahal pas nempel di kulit.</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent text-xl leading-none">•</span>
              <div><strong className="text-foreground">Understated Design</strong> — no flashy logo, no cringe graphics. Clean, simple, but hits different.</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent text-xl leading-none">•</span>
              <div><strong className="text-foreground">Small Batch Drops</strong> — ga diproduksi massal alias <i>limited run</i> buat ngejaga eksklusivitas biar lu gak kembaran mulu di tongkrongan.</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent text-xl leading-none">•</span>
              <div><strong className="text-foreground">No Bullshit Pricing</strong> — kita pengen lu dapet barang quality <i>high-end</i> tanpa harus nguras dompet sampe nangis. No ridiculous markup.</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
