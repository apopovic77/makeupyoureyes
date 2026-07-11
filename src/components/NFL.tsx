import { Reveal } from "./Reveal";
import { nfl } from "../data/content";

export function NFL() {
  return (
    <section id="natural-face-lifting" className="relative bg-plum-deep text-bone py-24 md:py-40 overflow-hidden">
      {/* Ambient gold + rose glows */}
      <div className="pointer-events-none absolute top-20 -left-40 w-[700px] h-[700px] rounded-full opacity-25"
        style={{ background: 'radial-gradient(circle, rgba(240,216,150,0.6) 0%, rgba(212,168,83,0.25) 40%, transparent 70%)' }} />
      <div className="pointer-events-none absolute bottom-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(228,165,165,0.6) 0%, rgba(199,117,139,0.2) 40%, transparent 70%)' }} />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10">
        {/* Section masthead */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 md:mb-32">
          <Reveal className="lg:col-span-6">
            <p className="inline-flex items-center gap-3 bg-gold-gradient-soft border border-champagne/50 px-4 py-1.5 mb-8 glow-gold">
              <span className="text-[11px] uppercase tracking-[0.4em] text-ink font-medium">
                ★ {nfl.eyebrow}
              </span>
            </p>
            <h2 className="font-display font-light text-bone text-5xl md:text-7xl lg:text-8xl leading-[0.94] tracking-[-0.02em] whitespace-pre-line">
              {nfl.headline.split('\n').map((line, i) => (
                <span key={i} className={i === 1 ? 'block text-gold-shimmer text-glow-gold' : 'block'}>{line}</span>
              ))}
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-5 lg:col-start-8 lg:pt-6">
            <p className="text-bone/70 text-base md:text-lg leading-[1.85] font-light">
              {nfl.lead}
            </p>
          </Reveal>
        </div>

        {/* Four pillars — luxe grid with gold accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {nfl.pillars.map((p, i) => (
            <Reveal key={p.no} delay={i * 0.08}>
              <div className="group relative bg-plum p-8 md:p-12 h-full min-h-[280px] flex flex-col overflow-hidden border border-champagne/25 hover:border-champagne/60 transition-all hover:glow-gold">
                {/* Top gold hairline */}
                <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-champagne to-transparent opacity-70" />

                <div className="flex items-baseline gap-6 mb-8">
                  <span className="font-display font-normal text-gold-shimmer text-6xl md:text-8xl italic leading-none text-glow-gold">
                    {p.no}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.32em] text-champagne-soft font-light">
                    {p.kicker}
                  </span>
                </div>
                <h3 className="font-display font-light text-bone text-3xl md:text-4xl leading-tight mb-6 group-hover:text-champagne-soft transition-colors">
                  {p.title}
                </h3>
                <p className="text-bone/70 text-sm md:text-base leading-[1.75] font-light">
                  {p.body}
                </p>

                {/* Sparkle corner */}
                <span className="absolute bottom-4 right-4 text-champagne opacity-40 group-hover:opacity-100 transition-opacity animate-sparkle">✦</span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Pull quote at bottom — with sparkle frame */}
        <Reveal delay={0.2}>
          <blockquote className="mt-20 md:mt-32 max-w-4xl mx-auto text-center relative">
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-3xl text-gold-shimmer">✦ ✦ ✦</span>
            <p className="font-script font-normal text-champagne-soft text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-glow-gold">
              {nfl.quote}
            </p>
            <footer className="mt-10 text-[10px] uppercase tracking-[0.4em] text-champagne-soft">
              — Marion Oberlerchner
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
