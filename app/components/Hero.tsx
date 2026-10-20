export default function Hero() {
  const capability = 'Product-Minded UI/UX Design * AI-Assisted Prototyping * UX Research & Validation * Conversion & Growth Strategy';

  return (
    <section className="flex flex-col gap-10">
      <div className="relative">
        <h1 className="mono-font text-[clamp(38px,4.2vw,48px)] leading-none tracking-[-0.04em] text-[#363636]">
          Curious as a cat 🐈‍⬛, shaping products you didn&apos;t know you needed.
        </h1>
      </div>
      <div className="marquee-frame overflow-hidden border-l border-r border-[#fbd5e8] px-3 py-1.5" tabIndex={0} aria-label={capability}>
        <div className="marquee-track mono-font text-[clamp(20px,2.2vw,32px)] leading-tight text-[#f552a6]">
          <span className="pr-12">{capability}</span>
          <span aria-hidden="true" className="pr-12">{capability}</span>
        </div>
      </div>
    </section>
  );
}
