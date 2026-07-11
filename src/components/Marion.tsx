import { Reveal } from "./Reveal";
import { marion } from "../data/content";

export function Marion() {
  return (
    <section id="marion" className="relative bg-bone-deep text-ink py-24 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">
          {/* Portrait — B&W treatment hides harsh eye makeup */}
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={marion.portrait}
                  alt={marion.headline}
                  className="w-full h-full object-cover editorial-bw"
                />
              </div>
              <div className="mt-6 flex items-baseline justify-between border-t border-ink/25 pt-4">
                <span className="text-[10px] uppercase tracking-[0.4em] text-champagne font-medium">
                  Portrait
                </span>
                <span className="text-[10px] uppercase tracking-[0.32em] text-stone">
                  MMXXVI
                </span>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7 lg:pt-12">
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.4em] text-champagne font-medium mb-8">
                {marion.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display font-light text-ink text-5xl md:text-7xl lg:text-8xl leading-[0.94] tracking-[-0.02em] whitespace-pre-line">
                {marion.headline}
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-12 md:mt-16 font-display italic text-ink text-2xl md:text-3xl leading-[1.35] max-w-2xl">
                „{marion.quote}"
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-10 md:mt-14 grid md:grid-cols-2 gap-8 md:gap-12 max-w-3xl">
                <p className="text-ink-soft text-sm md:text-base leading-[1.85] font-light">
                  {marion.bio}
                </p>
                <p className="text-ink-soft text-sm md:text-base leading-[1.85] font-light">
                  {marion.bio2}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="mt-12 flex flex-wrap gap-x-10 gap-y-2 text-[11px] uppercase tracking-[0.28em]">
                <span className="text-stone">Kosmetikmeisterin 2021 ★</span>
                <span className="text-stone">15+ Zertifikate</span>
                <span className="text-stone">Seit 2009 selbstständig</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
