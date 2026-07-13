import { Reveal } from "./Reveal";
import { testimonials } from "../data/content";

export function Testimonials() {
  return (
    <section className="relative bg-bone text-ink py-24 md:py-40">
      {/* Ambient rose glow — clipped container */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[600px] h-[400px] opacity-25"
          style={{ background: 'radial-gradient(ellipse, rgba(228,165,165,0.6) 0%, transparent 70%)' }} />
      </div>
      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10">

        <Reveal>
          <p className="relative inline-flex items-center gap-3 bg-gold-gradient-soft border border-champagne/40 px-4 py-1.5 mb-12 md:mb-16 glow-gold">
            <span className="text-[11px] uppercase tracking-[0.4em] text-ink font-medium">
              ★ Kundenstimmen
            </span>
          </p>
        </Reveal>
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <figure className="group h-full flex flex-col p-8 border border-champagne/25 hover:border-champagne/60 transition-all hover:glow-gold bg-bone">
                <span className="font-display italic font-light text-gold-shimmer text-8xl leading-none mb-4">
                  „
                </span>
                <blockquote className="font-serif italic font-light text-ink text-xl md:text-2xl leading-[1.35] flex-1">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 border-t border-champagne/40 pt-4">
                  <div className="text-[11px] uppercase tracking-[0.32em] text-champagne-deep font-bold">
                    ✦ {t.author}
                  </div>
                  <div className="text-[11px] text-stone mt-1">
                    {t.role}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
