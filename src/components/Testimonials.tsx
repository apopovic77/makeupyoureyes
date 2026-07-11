import { Reveal } from "./Reveal";
import { testimonials } from "../data/content";

export function Testimonials() {
  return (
    <section className="relative bg-bone text-ink py-24 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.4em] text-champagne font-medium mb-12 md:mb-16">
            Kundenstimmen
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <figure className="h-full flex flex-col">
                <span className="font-display italic font-light text-champagne text-7xl leading-none mb-6">
                  „
                </span>
                <blockquote className="font-display italic font-light text-ink text-xl md:text-2xl leading-[1.35] flex-1">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 border-t border-ink/15 pt-4">
                  <div className="text-[11px] uppercase tracking-[0.32em] text-ink font-medium">
                    {t.author}
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
