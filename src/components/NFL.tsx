import { Reveal } from "./Reveal";
import { nfl } from "../data/content";

export function NFL() {
  return (
    <section id="natural-face-lifting" className="relative bg-ink text-bone py-24 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        {/* Section masthead */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 md:mb-32">
          <Reveal className="lg:col-span-6">
            <p className="text-[11px] uppercase tracking-[0.4em] text-champagne font-medium mb-8">
              {nfl.eyebrow}
            </p>
            <h2 className="font-display font-light text-bone text-5xl md:text-7xl lg:text-8xl leading-[0.94] tracking-[-0.02em] whitespace-pre-line">
              {nfl.headline}
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-5 lg:col-start-8 lg:pt-6">
            <p className="text-bone/70 text-base md:text-lg leading-[1.85] font-light">
              {nfl.lead}
            </p>
          </Reveal>
        </div>

        {/* Four pillars — brutalist grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-bone/15 border border-bone/15">
          {nfl.pillars.map((p, i) => (
            <Reveal key={p.no} delay={i * 0.08}>
              <div className="bg-ink p-8 md:p-12 h-full min-h-[280px] flex flex-col">
                <div className="flex items-baseline gap-6 mb-8">
                  <span className="font-display font-normal text-champagne text-6xl md:text-7xl italic">
                    {p.no}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.32em] text-bone/60 font-light">
                    {p.kicker}
                  </span>
                </div>
                <h3 className="font-display font-light text-bone text-3xl md:text-4xl leading-tight mb-6">
                  {p.title}
                </h3>
                <p className="text-bone/65 text-sm md:text-base leading-[1.75] font-light">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Pull quote at bottom */}
        <Reveal delay={0.2}>
          <blockquote className="mt-20 md:mt-32 max-w-4xl mx-auto text-center">
            <p className="font-display italic font-light text-bone text-3xl md:text-5xl lg:text-6xl leading-[1.15] tracking-[-0.01em]">
              „{nfl.quote}"
            </p>
            <footer className="mt-10 text-[10px] uppercase tracking-[0.4em] text-champagne">
              — Marion Oberlerchner
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
