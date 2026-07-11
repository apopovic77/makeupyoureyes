import { Reveal } from "./Reveal";
import { cv } from "../data/content";

export function CV() {
  return (
    <section id="referenzen" className="relative bg-ink text-bone py-24 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 md:mb-24 items-end">
          <Reveal className="lg:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.4em] text-champagne font-medium mb-8">
              Werdegang · Curriculum
            </p>
            <h2 className="font-display font-light text-bone text-5xl md:text-7xl lg:text-8xl leading-[0.94] tracking-[-0.02em]">
              Beinahe drei
              <span className="block italic">Dekaden Lernen.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <p className="text-bone/70 text-sm md:text-base leading-[1.85] font-light">
              Vom Diplom in Salzburg zur Meisterprüfung mit Auszeichnung 2021 — plus Ausbildungen
              in Face-Yoga, Natural Face Lifting und Mentaltraining. Wissen als Handwerk.
            </p>
          </Reveal>
        </div>

        {/* Timeline as CV list */}
        <div className="border-t border-bone/25">
          {cv.map((c, i) => (
            <Reveal key={i} delay={Math.min(i * 0.02, 0.4)}>
              <div className="grid grid-cols-12 gap-6 border-b border-bone/15 py-5 md:py-6 hover:bg-bone/[0.03] transition-colors">
                <div className="col-span-4 md:col-span-2 font-mono text-[10px] md:text-xs uppercase tracking-[0.24em] text-champagne pt-1">
                  {c.year}
                </div>
                <div className="col-span-8 md:col-span-10 font-display italic font-light text-bone text-lg md:text-2xl leading-tight">
                  {c.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
