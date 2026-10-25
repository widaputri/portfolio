import Image from 'next/image';

export default function Hero() {
  const capability = 'Product-Minded UI/UX Design * AI-Assisted Prototyping * UX Research & Validation * Conversion & Growth Strategy';

  return (
    <section className="flex flex-col gap-3 sm:gap-5 md:gap-10">
      <div className="relative">
        <h1 className="hero-title mono-font text-[clamp(36px,4vw,48px)] leading-none tracking-[-0.04em] text-[#363636]">
          Curious as a cat
          <span className="cat-inline" aria-hidden="true">
            <Image src="/figma-assets/hero-cats.png" alt="" width={99} height={61} className="cat-image" />
          </span>
          ,shaping products you didn’t know you needed.
        </h1>
      </div>
      <div className="marquee-frame overflow-hidden border-l border-r border-[#fbd5e8] px-3 py-1.5" tabIndex={0} aria-label={capability}>
        <div className="marquee-track mono-font text-[clamp(15px,2.2vw,32px)] leading-tight text-[#f552a6]">
          <span className="pr-12">{capability}</span>
          <span aria-hidden="true" className="pr-12">{capability}</span>
        </div>
      </div>
    </section>
  );
}
