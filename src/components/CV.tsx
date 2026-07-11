import { Reveal } from "./Reveal";
import { cv } from "../data/content";

export function CV() {
  return (
    <section id="referenzen" className="relative bg-plum-deep text-bone py-24 md:py-40 overflow-hidden">
      {/* Gold glow accents */}
      <div className="pointer-events-none absolute top-0 left-1/2 w-[800px] h-[400px] -translate-x-1/2 opacity-20"
        style={{ background: 'radial-gradient(ellipse at center top, rgba(240,216,150,0.7) 0%, transparent 70%)' }} />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 md:mb-24 items-end">
          <Reveal className="lg:col-span-7">
            <p className="inline-flex items-center gap-3 bg-gold-gradient-soft border border-champagne/50 px-4 py-1.5 mb-8 glow-gold">
              <span className="text-[11px] uppercase tracking-[0.4em] text-ink font-medium">
                ★ Werdegang · Curriculum
              </span>
            </p>
            <h2 className="font-display font-light text-bone text-5xl md:text-7xl lg:text-8xl leading-[0.94] tracking-[-0.02em]">
              Beinahe drei
              <span className="block italic text-gold-shimmer text-glow-gold">Dekaden Lernen.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <p className="text-bone/70 text-sm md:text-base leading-[1.85] font-light">
              Vom Diplom in Salzburg zur Meisterprüfung mit Auszeichnung 2021 — plus Ausbildungen
              in Face-Yoga, Natural Face Lifting und Mentaltraining. Wissen als Handwerk.
            </p>
          </Reveal>
        </div>

        {/* Timeline as CV list — with gold divider gradient */}
        <div className="border-t border-champagne/40">
          {cv.map((c, i) => {
            const isHighlight = c.label.includes('★');
            return (
              <Reveal key={i} delay={Math.min(i * 0.02, 0.4)}>
                <div className={`group grid grid-cols-12 gap-6 border-b border-champagne/15 py-5 md:py-6 transition-all ${isHighlight ? 'bg-gold-gradient-soft/10' : 'hover:bg-gold-gradient-soft/5'}`}>
                  <div className={`col-span-4 md:col-span-2 font-mono text-[10px] md:text-xs uppercase tracking-[0.24em] pt-1 font-bold ${isHighlight ? 'text-gold-shimmer' : 'text-champagne'}`}>
                    {c.year}
                  </div>
                  <div className={`col-span-8 md:col-span-10 font-display italic font-light text-lg md:text-2xl leading-tight ${isHighlight ? 'text-gold-shimmer' : 'text-bone group-hover:text-champagne-soft'} transition-colors`}>
                    {c.label}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
