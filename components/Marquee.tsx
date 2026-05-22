export default function Marquee() {
  const content = (
    <>
      <span className="mx-4">✦ NOISELESS</span>
      <span className="mx-4">✦ QUIET BUT NOTICED</span>
      <span className="mx-4">✦ HIGH QUALITY FABRIC</span>
      <span className="mx-4">✦ WORLDWIDE SHIPPING</span>
      <span className="mx-4">✦ ESSENTIALS</span>
      <span className="mx-4">✦ LIMITED DROPS</span>
    </>
  );

  return (
    <div className="bg-foreground text-background py-1.5 overflow-hidden whitespace-nowrap z-50 relative w-full flex">
      {/* We need two elements to create a seamless infinite loop */}
      <div className="animate-marquee inline-block font-display text-xs sm:text-sm font-semibold tracking-widest uppercase">
        {content}
        {content}
        {content}
        {content}
      </div>
      <div className="animate-marquee inline-block font-display text-xs sm:text-sm font-semibold tracking-widest uppercase absolute top-1.5" style={{ animationDelay: '-10s' }}>
        {content}
        {content}
        {content}
        {content}
      </div>
    </div>
  );
}
