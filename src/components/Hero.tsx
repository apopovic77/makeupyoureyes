import { motion } from "framer-motion";
import { hero, marion } from "../data/content";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-bone text-ink pt-32 md:pt-40 pb-24 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        {/* LEFT — massive editorial type */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-[11px] uppercase tracking-[0.4em] text-champagne font-medium mb-8 md:mb-14"
          >
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
            className="font-display font-normal text-ink text-[64px] sm:text-[92px] md:text-[128px] lg:text-[168px] leading-[0.88] tracking-[-0.03em]"
          >
            <span className="block italic font-light">{hero.title}</span>
            <span className="block text-champagne">{hero.titleAccent}</span>
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
              className="group inline-flex items-center gap-4 bg-ink text-bone px-8 py-4 text-[11px] uppercase tracking-[0.32em] font-medium hover:bg-champagne transition-colors"
            >
              {hero.cta1}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#kontakt"
              className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-ink underline underline-offset-8 decoration-champagne decoration-2 hover:decoration-ink transition-colors py-4"
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
            <img
              src={marion.editorial}
              alt="Editorial portrait"
              className="w-full h-full object-cover editorial-bw"
            />
            {/* Champagne strip at bottom-right — signature detail */}
            <div className="absolute -bottom-4 -right-4 h-24 w-24 border-2 border-champagne pointer-events-none" />
            <div className="absolute top-6 left-6 text-[10px] uppercase tracking-[0.32em] text-bone mix-blend-difference font-light">
              MAKEUPYOUREYES<br />Editorial · 2026
            </div>
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
