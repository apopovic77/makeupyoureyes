import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { portfolio } from "../data/content";

const AUTOPLAY_MS = 6000;
const total = portfolio.works.length;
const pad = (n: number) => n.toString().padStart(2, "0");

export function Portfolio() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % total), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [paused]);

  const go = (delta: number) => setI((v) => (v + delta + total) % total);
  const work = portfolio.works[i];

  return (
    <section
      id="portfolio"
      className="relative bg-plum-deep text-bone"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Section masthead — sits above the slider */}
      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 pt-24 md:pt-32 pb-10 md:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <Reveal className="lg:col-span-8">
            <p className="inline-flex items-center gap-3 bg-gold-gradient-soft border border-champagne/50 px-4 py-1.5 mb-8 glow-gold">
              <span className="text-[11px] uppercase tracking-[0.4em] text-ink font-medium">
                ★ {portfolio.eyebrow}
              </span>
            </p>
            <h2 className="text-bone whitespace-pre-line">
              {portfolio.headline.split("\n").map((line, li) => (
                li === 0 ? (
                  <span key={li} className="block font-serif font-light italic text-5xl md:text-7xl lg:text-8xl leading-[0.94] tracking-[-0.02em]">{line}</span>
                ) : (
                  <span key={li} className="block font-display font-normal text-gold-shimmer text-glow-gold text-6xl md:text-8xl lg:text-9xl leading-[1.0] tracking-normal pb-2">{line}</span>
                )
              ))}
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-3 lg:col-start-10">
            <p className="text-bone/75 text-base leading-[1.85] font-light">
              Aus 20 Jahren am Make-up-Set — Beauty-Pageant-Finalistinnen, Editorial-Shootings, Kunden-Porträts. Jede Seele bekommt ihren eigenen Blick.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Full-bleed cover slider */}
      <div className="relative w-full h-[75vh] min-h-[600px] md:h-[85vh] md:min-h-[720px] overflow-hidden">
        {/* Slide */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.2, ease: [0.22, 0.61, 0.36, 1] }}
            className="absolute inset-0"
          >
            <img
              src={work.src}
              alt={work.title}
              className="w-full h-full object-cover object-top"
              draggable={false}
            />
            {/* Overlay removed — colors of the makeup work stay authentic */}
            {/* Dark vignette bottom + left for legibility */}
            <div className="absolute inset-0 pointer-events-none" style={{
              background: "linear-gradient(180deg, rgba(16,6,16,0.35) 0%, transparent 25%, transparent 45%, rgba(16,6,16,0.7) 100%)",
            }} />
            <div className="absolute inset-0 pointer-events-none" style={{
              background: "linear-gradient(90deg, rgba(16,6,16,0.65) 0%, transparent 40%)",
            }} />
          </motion.div>
        </AnimatePresence>

        {/* Cover-caption overlay — bottom-left */}
        <div className="absolute inset-x-0 bottom-0 z-20 pb-10 md:pb-16">
          <div className="mx-auto max-w-[1440px] px-6 md:px-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={`caption-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
                className="max-w-2xl"
              >
                <div className="inline-flex items-center gap-3 bg-gold-gradient text-ink px-3 py-1 mb-5 text-[10px] uppercase tracking-[0.32em] font-bold glow-gold">
                  ★ {work.tag}
                </div>
                <h3 className="font-serif font-light italic text-bone text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.02em]">
                  <span className="italic text-gold-shimmer text-glow-gold">{work.title}</span>
                </h3>
                <p className="mt-4 md:mt-6 text-bone/85 text-sm md:text-base leading-[1.7] font-light max-w-md">
                  {work.caption}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Controls right */}
            <div className="flex items-center gap-3 md:pb-4">
              <button
                onClick={() => go(-1)}
                className="w-14 h-14 flex items-center justify-center border border-champagne/60 text-champagne-soft hover:bg-gold-gradient hover:text-ink hover:glow-gold transition-all"
                aria-label="Vorheriges"
              >
                ←
              </button>
              <button
                onClick={() => go(1)}
                className="w-14 h-14 flex items-center justify-center border border-champagne/60 text-champagne-soft hover:bg-gold-gradient hover:text-ink hover:glow-gold transition-all"
                aria-label="Nächstes"
              >
                →
              </button>
              <span className="ml-4 font-mono text-[11px] uppercase tracking-[0.32em] text-champagne">
                {pad(i + 1)} <span className="text-champagne/50">/ {pad(total)}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Ambient sparkle */}
        <span className="absolute top-10 right-10 text-2xl text-champagne animate-sparkle z-10">✦</span>
        <span className="absolute top-24 right-24 text-lg text-champagne-soft animate-sparkle z-10" style={{ animationDelay: "1.5s" }}>✦</span>

        {/* Autoplay progress bar */}
        <motion.div
          key={`bar-${i}`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: paused ? 0 : 1 }}
          transition={{ duration: paused ? 0 : AUTOPLAY_MS / 1000, ease: "linear" }}
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-gradient origin-left"
          style={{ opacity: paused ? 0.3 : 1 }}
        />
      </div>

      {/* Thumbnail rail — quick jump */}
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 py-10 md:py-14">
        <div className="flex items-center gap-3 md:gap-4 overflow-x-auto pb-3 -mx-2 px-2 [scrollbar-color:rgba(212,168,83,0.6)_transparent]">
          {portfolio.works.map((w, wi) => (
            <button
              key={wi}
              onClick={() => setI(wi)}
              className={`shrink-0 relative w-[80px] h-[100px] md:w-[100px] md:h-[130px] overflow-hidden border transition-all ${
                wi === i
                  ? "border-champagne glow-gold scale-105"
                  : "border-champagne/25 opacity-60 hover:opacity-100 hover:border-champagne/50"
              }`}
              aria-label={`Slide ${wi + 1}`}
            >
              <img src={w.src} alt="" className="w-full h-full object-cover object-top" />
              {wi === i && (
                <div className="absolute inset-0 pointer-events-none" style={{
                  background: "linear-gradient(135deg, rgba(212,168,83,0.25) 0%, transparent 60%)"
                }} />
              )}
            </button>
          ))}
        </div>
        <div className="mt-6 flex justify-between items-center text-[10px] uppercase tracking-[0.32em] text-champagne-soft/80">
          <span>Miss Osttirol · Miss Tourismus · Kärntens Nächstes Topmodel</span>
          <a href="#kontakt" className="hover:text-champagne transition-colors underline underline-offset-8 decoration-champagne/50 hover:decoration-champagne">
            Termin buchen →
          </a>
        </div>
      </div>
    </section>
  );
}
