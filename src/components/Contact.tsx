import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { Reveal } from "./Reveal";
import { brand, contact } from "../data/content";

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const map = new maplibregl.Map({
      container: ref.current,
      style: "https://tiles.openfreemap.org/styles/positron",
      center: brand.coords,
      zoom: 13.5,
      pitch: 30,
      bearing: 0,
      attributionControl: { compact: true },
      cooperativeGestures: true,
    });
    map.on("load", () => {
      const el = document.createElement("div");
      el.style.cssText = "width:44px;height:44px;cursor:pointer;transform:translateY(-8px);";
      el.innerHTML = `
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <circle cx="22" cy="22" r="21" fill="#0a0a0a" stroke="#b89968" stroke-width="1"/>
          <text x="22" y="27" text-anchor="middle" font-family="serif" font-size="17" fill="#f5f0e6" font-style="italic">M</text>
        </svg>`;
      new maplibregl.Marker({ element: el })
        .setLngLat(brand.coords)
        .setPopup(
          new maplibregl.Popup({ offset: 24, closeButton: false }).setHTML(
            `<div style="font-family:'Bodoni Moda',serif;font-style:italic;font-size:16px;color:#0a0a0a;padding:4px 6px;">MAKEUPYOUREYES<br><span style="font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:#b89968;font-family:'Inter',sans-serif;font-style:normal;">${brand.address} · ${brand.city}</span></div>`,
          ),
        )
        .addTo(map);
    });
    return () => { map.remove(); };
  }, []);

  return (
    <section id="kontakt" className="relative bg-bone text-ink py-24 md:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <p className="inline-flex items-center gap-3 bg-gold-gradient-soft border border-champagne/40 px-4 py-1.5 mb-8 glow-gold">
              <span className="text-[11px] uppercase tracking-[0.4em] text-ink font-medium">
                ★ {contact.eyebrow}
              </span>
            </p>
            <h2 className="text-ink whitespace-pre-line">
              {contact.headline.split('\n').map((line, i) => (
                i === 0 ? (
                  <span key={i} className="block font-serif font-light italic text-5xl md:text-7xl lg:text-8xl leading-[0.94] tracking-[-0.02em]">{line}</span>
                ) : (
                  <span key={i} className="block font-display font-normal text-gold-shimmer text-glow-gold text-6xl md:text-8xl lg:text-9xl leading-[1.0] tracking-normal pb-2">{line}</span>
                )
              ))}
            </h2>
            <p className="mt-10 md:mt-12 max-w-md text-ink-soft text-base md:text-lg leading-[1.85] font-light">
              {contact.lead}
            </p>

            {/* Contact grid */}
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-lg">
              <div>
                <p className="text-[10px] uppercase tracking-[0.32em] text-stone font-medium mb-2">
                  Anrufen
                </p>
                <a
                  href={`tel:${brand.phone.replace(/\s/g, "")}`}
                  className="font-serif italic text-xl md:text-2xl text-ink hover:text-champagne transition-colors"
                >
                  {brand.phoneDisplay}
                </a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.32em] text-stone font-medium mb-2">
                  Schreiben
                </p>
                <a
                  href={`mailto:${brand.email}`}
                  className="font-serif italic text-xl md:text-2xl text-ink hover:text-champagne transition-colors break-all"
                >
                  {brand.email}
                </a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.32em] text-stone font-medium mb-2">
                  Adresse
                </p>
                <address className="not-italic font-serif text-lg md:text-xl text-ink leading-tight">
                  {brand.address}<br />
                  {brand.zip} {brand.city}<br />
                  <span className="text-stone text-sm">{brand.country}</span>
                </address>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.32em] text-stone font-medium mb-2">
                  Öffnungszeiten
                </p>
                <div className="font-serif italic text-lg md:text-xl text-ink leading-tight">
                  {brand.hoursWeek}<br />
                  <span className="text-stone text-sm not-italic">{brand.hoursSat}</span>
                </div>
              </div>
            </div>

            <div className="mt-14 flex gap-6">
              <a
                href={`tel:${brand.phone.replace(/\s/g, "")}`}
                className="group inline-flex items-center gap-4 bg-gold-gradient text-ink px-8 py-4 text-[11px] uppercase tracking-[0.32em] font-bold glow-gold hover:scale-[1.02] hover:shadow-[0_0_48px_rgba(240,216,150,0.6)] transition-all"
              >
                Jetzt anrufen
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href={brand.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-champagne-deep underline underline-offset-8 decoration-champagne decoration-2 py-4 font-medium hover:decoration-champagne-deep transition-colors"
              >
                Instagram ↗
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-6">
            <div className="relative">
              <div className="absolute -inset-2 bg-gold-gradient glow-gold" />
              <div className="relative aspect-[4/5] lg:aspect-square">
                <div ref={ref} className="w-full h-full" />
              </div>
              <span className="absolute -top-4 -right-4 text-2xl text-champagne animate-sparkle">✦</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
