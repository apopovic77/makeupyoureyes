import { Reveal } from "./Reveal";
import { marion } from "../data/content";

export function Marion() {
  return (
    <section id="marion" className="relative bg-bone-deep text-ink py-24 md:py-40 overflow-hidden">
      {/* Ambient rose+gold */}
      <div className="pointer-events-none absolute top-40 -left-32 w-[500px] h-[500px] rounded-full opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(228,165,165,0.6) 0%, transparent 70%)' }} />
      <div className="pointer-events-none absolute bottom-20 -right-40 w-[600px] h-[600px] rounded-full opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(240,216,150,0.5) 0%, transparent 70%)' }} />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">
          {/* Portrait with gold frame + duotone rose-gold treatment */}
          <Reveal className="lg:col-span-5">
            <div>
              {/* Framed image — sized by aspect ratio only */}
              <div className="relative aspect-[3/4]">
                <div className="absolute -inset-2 bg-gold-gradient glow-gold" />
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={marion.portrait}
                    alt={marion.headline}
                    className="w-full h-full object-cover editorial-bw"
                  />
                  {/* Rose-gold overlay */}
                  <div className="absolute inset-0 pointer-events-none"
                    style={{ background: 'linear-gradient(135deg, rgba(228,165,165,0.2) 0%, transparent 40%, rgba(212,168,83,0.25) 100%)' }} />
                </div>
                {/* Sparkles */}
                <span className="absolute -top-4 -right-4 text-2xl text-champagne animate-sparkle">✦</span>
                <span className="absolute bottom-1/4 -left-6 text-lg text-rose animate-sparkle" style={{ animationDelay: '1.2s' }}>✦</span>
              </div>

              {/* Caption — outside the framed wrapper */}
              <div className="mt-8 flex items-baseline justify-between border-t border-champagne/50 pt-4">
                <span className="text-[10px] uppercase tracking-[0.4em] text-champagne-deep font-bold">
                  ✦ Portrait
                </span>
                <span className="text-[10px] uppercase tracking-[0.32em] text-champagne-deep font-medium">
                  MMXXVI
                </span>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7 lg:pt-12">
            <Reveal>
              <p className="inline-flex items-center gap-3 bg-gold-gradient-soft border border-champagne/40 px-4 py-1.5 mb-8 glow-gold">
                <span className="text-[11px] uppercase tracking-[0.4em] text-ink font-medium">
                  ✦ {marion.eyebrow}
                </span>
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-script font-normal text-ink text-6xl md:text-8xl lg:text-9xl leading-[1.0] tracking-normal pb-2">
                <span className="text-gold-shimmer text-glow-gold">
                  Marion Oberlerchner
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-12 md:mt-16 font-script font-normal text-champagne-deep text-4xl md:text-5xl leading-[1.15] max-w-2xl">
                {marion.quote}
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
              <div className="mt-12 flex flex-wrap gap-x-4 gap-y-3 text-[11px] uppercase tracking-[0.28em]">
                <span className="inline-flex items-center gap-2 bg-gold-gradient text-ink px-4 py-2 font-bold glow-gold">
                  ★ Meisterin 2021
                </span>
                <span className="inline-flex items-center gap-2 border border-champagne text-champagne-deep px-4 py-2 font-medium">
                  ✦ 15+ Zertifikate
                </span>
                <span className="inline-flex items-center gap-2 border border-champagne text-champagne-deep px-4 py-2 font-medium">
                  ✦ Seit 2009
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
