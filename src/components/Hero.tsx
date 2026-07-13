import { motion } from "framer-motion";
import { hero, marion } from "../data/content";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-bone text-ink pt-32 md:pt-40 pb-24">
      {/* Radial gold glow — dedicated clip container */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(240,216,150,0.5) 0%, rgba(212,168,83,0.2) 40%, transparent 70%)' }} />
        <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(228,165,165,0.5) 0%, rgba(199,117,139,0.2) 40%, transparent 70%)' }} />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        {/* LEFT — massive editorial type */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="inline-flex items-center gap-3 bg-gold-gradient-soft border border-champagne/40 px-4 py-1.5 mb-8 md:mb-14 glow-gold"
          >
            <span className="text-[11px] uppercase tracking-[0.4em] text-ink font-medium">
              ★ {hero.eyebrow}
            </span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
            className="text-ink relative isolate"
          >
            {/*
              Line 1 sits ABOVE line 2 in z-order and paints its own line-box in bone bg.
              Where line 2's S-swash reaches upward into line 1's row, the bone bg covers it.
              No layout change: same font-sizes, same leading, same margins.
            */}
            <span className="relative block font-display font-normal text-ink text-[64px] sm:text-[88px] md:text-[120px] lg:text-[152px] tracking-normal z-20 bg-bone" style={{ lineHeight: "1.0" }}>
              {hero.title}
            </span>
            <span className="relative block font-display font-normal text-gold-shimmer text-glow-gold text-[64px] sm:text-[88px] md:text-[120px] lg:text-[152px] tracking-normal z-10" style={{ lineHeight: "1.0" }}>
              {hero.titleAccent}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="mt-10 md:mt-16 max-w-lg text-ink-soft text-base md:text-lg leading-[1.75] font-light"
          >
            {hero.subline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75 }}
            className="mt-10 md:mt-14 flex flex-col sm:flex-row items-start gap-4 sm:gap-6"
          >
            <a
              href="#natural-face-lifting"
              className="group inline-flex items-center gap-4 bg-gold-gradient text-ink px-8 py-4 text-[11px] uppercase tracking-[0.32em] font-bold glow-gold hover:scale-[1.02] hover:shadow-[0_0_48px_rgba(240,216,150,0.6)] transition-all"
            >
              {hero.cta1}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#kontakt"
              className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-ink underline underline-offset-8 decoration-champagne decoration-2 hover:decoration-champagne-deep transition-colors py-4 font-medium"
            >
              {hero.cta2}
            </a>
          </motion.div>
        </div>

        {/* RIGHT — portrait treated B&W (hides the harsh eye makeup) */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, delay: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
          className="lg:col-span-5 order-1 lg:order-2 relative"
        >
          <div className="relative aspect-[3/4] max-w-[420px] mx-auto lg:ml-auto lg:mr-0">
            {/* Gold gradient frame */}
            <div className="absolute -inset-2 bg-gold-gradient glow-gold" />
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={marion.editorial}
                alt="Editorial portrait"
                className="w-full h-full object-cover editorial-bw"
              />
              {/* Warm rose-gold overlay tint */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(135deg, rgba(228,165,165,0.15) 0%, transparent 40%, rgba(212,168,83,0.2) 100%)' }} />
            </div>
            {/* Signature detail — floating gold label */}
            <div className="absolute -bottom-6 -right-6 bg-ink text-champagne-soft px-5 py-3 border border-champagne glow-gold">
              <div className="text-[9px] uppercase tracking-[0.4em] font-light">Editorial</div>
              <div className="font-serif italic text-lg text-champagne-soft">MMXXVI</div>
            </div>
            {/* Sparkles */}
            <span className="absolute -top-4 -left-4 text-2xl text-champagne animate-sparkle">✦</span>
            <span className="absolute top-1/3 -right-6 text-lg text-champagne-soft animate-sparkle" style={{ animationDelay: '1.5s' }}>✦</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom ticker */}
      <div className="absolute bottom-8 inset-x-0 mx-auto max-w-[1440px] px-6 md:px-10 flex items-center justify-between text-[10px] uppercase tracking-[0.32em] text-stone">
        <span>OBERDRAUBURG · KÄRNTEN</span>
        <span className="hidden md:inline">SCROLL ↓</span>
        <span>SEIT MMIX</span>
      </div>
    </section>
  );
}
