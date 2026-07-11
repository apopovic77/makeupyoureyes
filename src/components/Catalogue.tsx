import { Reveal } from "./Reveal";
import { catalogue } from "../data/content";

export function Catalogue() {
  return (
    <section id="leistungen" className="relative bg-bone text-ink py-24 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        {/* Section masthead */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 md:mb-28 items-end">
          <Reveal className="lg:col-span-8">
            <p className="text-[11px] uppercase tracking-[0.4em] text-champagne font-medium mb-8">
              Leistungen · index
            </p>
            <h2 className="font-display font-light text-ink text-5xl md:text-7xl lg:text-[112px] leading-[0.94] tracking-[-0.02em]">
              Ein Studio.
              <span className="block italic">Vierzehn Handwerke.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-3 lg:col-start-10">
            <p className="text-ink-soft text-sm leading-[1.85] font-light">
              Klassische Kosmetik, Permanent Make-up, feinste Handarbeit an Augen und Fingern —
              plus mentale und ästhetische Beratung. Jede Leistung als eigene Meisterschaft gepflegt.
            </p>
          </Reveal>
        </div>

        {/* Four categories × N services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {catalogue.map((cat, ci) => (
            <Reveal key={cat.kicker} delay={ci * 0.05}>
              <div>
                <div className="flex items-baseline justify-between border-b border-ink pb-4 mb-8">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-champagne font-medium mb-2">
                      {cat.kicker}
                    </p>
                    <h3 className="font-display italic font-light text-ink text-3xl md:text-4xl">
                      {cat.heading}
                    </h3>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.32em] text-stone">
                    · {cat.items.length}
                  </span>
                </div>
                <ul className="space-y-0 divide-y divide-ink/10">
                  {cat.items.map((item) => (
                    <li key={item.no}>
                      <a
                        href="#kontakt"
                        className="group flex items-baseline gap-6 py-5 hover:bg-bone-deep -mx-4 px-4 transition-colors"
                      >
                        <span className="font-mono text-[10px] text-stone tracking-[0.2em]">
                          {item.no}
                        </span>
                        <span className="font-display italic font-normal text-xl md:text-2xl text-ink flex-1 group-hover:text-champagne transition-colors">
                          {item.name}
                        </span>
                        <span className="text-[11px] uppercase tracking-[0.32em] text-stone opacity-0 group-hover:opacity-100 transition-opacity">
                          anfragen →
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
