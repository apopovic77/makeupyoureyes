import { Reveal } from "./Reveal";
import { portfolio } from "../data/content";

// Bento size → grid classes
const sizeClass: Record<string, string> = {
  huge: "col-span-2 row-span-2 md:col-span-2 md:row-span-2",
  tall: "row-span-2 md:row-span-2",
  wide: "col-span-2 md:col-span-2",
  default: "",
};

export function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-plum-deep text-bone py-24 md:py-40 overflow-hidden">
      {/* Ambient gold + rose glows */}
      <div className="pointer-events-none absolute top-40 -left-40 w-[700px] h-[700px] rounded-full opacity-25"
        style={{ background: 'radial-gradient(circle, rgba(240,216,150,0.55) 0%, transparent 70%)' }} />
      <div className="pointer-events-none absolute bottom-20 -right-40 w-[600px] h-[600px] rounded-full opacity-25"
        style={{ background: 'radial-gradient(circle, rgba(228,165,165,0.55) 0%, transparent 70%)' }} />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10">
        {/* Section masthead */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-24 items-end">
          <Reveal className="lg:col-span-7">
            <p className="inline-flex items-center gap-3 bg-gold-gradient-soft border border-champagne/50 px-4 py-1.5 mb-8 glow-gold">
              <span className="text-[11px] uppercase tracking-[0.4em] text-ink font-medium">
                ★ {portfolio.eyebrow}
              </span>
            </p>
            <h2 className="font-display font-light text-bone text-5xl md:text-7xl lg:text-8xl leading-[0.94] tracking-[-0.02em] whitespace-pre-line">
              {portfolio.headline.split('\n').map((line, i) => (
                <span key={i} className={i === 1 ? 'block italic text-gold-shimmer text-glow-gold' : 'block'}>{line}</span>
              ))}
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <p className="text-bone/75 text-base md:text-lg leading-[1.85] font-light">
              {portfolio.lead}
            </p>
          </Reveal>
        </div>

        {/* Bento-Grid — magazine spread */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4 md:gap-5">
          {portfolio.works.map((w, i) => (
            <Reveal key={i} delay={Math.min(i * 0.04, 0.35)} className={sizeClass[w.size] || ""}>
              <figure className="group relative w-full h-full overflow-hidden border border-champagne/25 hover:border-champagne/70 transition-all hover:glow-gold cursor-pointer">
                <img
                  src={w.src}
                  alt={w.caption}
                  className="w-full h-full object-cover editorial-bw transition-transform duration-[1400ms] group-hover:scale-[1.06]"
                  loading="lazy"
                />
                {/* Warm rose-gold uniform overlay */}
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(135deg, rgba(228,165,165,0.15) 0%, transparent 40%, rgba(212,168,83,0.22) 100%)' }} />
                {/* Dark bottom gradient for caption */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-plum-deep/95 via-plum-deep/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Caption on hover */}
                <figcaption className="absolute inset-x-0 bottom-0 p-4 md:p-5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0">
                  <span className="inline-block bg-gold-gradient text-ink px-2 py-0.5 text-[9px] uppercase tracking-[0.28em] font-bold mb-2">
                    ★ {w.tag}
                  </span>
                  <p className="font-display italic text-bone text-lg md:text-xl leading-tight">
                    {w.caption}
                  </p>
                </figcaption>
                {/* Sparkle top corner */}
                <span className="absolute top-3 right-3 text-champagne opacity-0 group-hover:opacity-100 transition-opacity animate-sparkle text-xs">✦</span>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Bottom credit */}
        <Reveal delay={0.3}>
          <div className="mt-16 md:mt-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-8 border-t border-champagne/25">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] uppercase tracking-[0.32em] text-champagne-soft/85">
              <span>Miss Osttirol · Miss Tourismus · Kärntens Nächstes Topmodel</span>
            </div>
            <a
              href="#kontakt"
              className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-champagne-soft underline underline-offset-8 decoration-champagne decoration-2 hover:decoration-champagne-soft transition-colors font-medium"
            >
              Termin für dein Editorial
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
