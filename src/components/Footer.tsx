import { Link } from "react-router-dom";
import { brand } from "../data/content";

export function Footer() {
  return (
    <footer className="bg-ink text-bone">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 md:mb-24">
          <div className="md:col-span-5">
            <p className="font-serif text-3xl md:text-4xl leading-[1.15] tracking-[0.28em]">
              MAKEUPYOUREYES
            </p>
            <p className="mt-4 font-serif italic text-lg text-bone/70 leading-tight">
              Marion Oberlerchner<br />
              <span className="text-champagne text-xs uppercase tracking-[0.28em] not-italic">
                Kosmetikmeisterin & Beautyexpertin
              </span>
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.32em] text-champagne mb-4 font-medium">
              Studio
            </p>
            <address className="not-italic text-bone/80 text-sm leading-relaxed font-light">
              {brand.address}<br />
              {brand.zip} {brand.city}<br />
              {brand.country}
            </address>
          </div>

          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.32em] text-champagne mb-4 font-medium">
              Kontakt
            </p>
            <ul className="space-y-1 text-bone/80 text-sm font-light">
              <li>
                <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="hover:text-champagne transition-colors">
                  {brand.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${brand.email}`} className="hover:text-champagne transition-colors">
                  {brand.email}
                </a>
              </li>
              <li>
                <a href={brand.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-champagne transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-bone/15 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-[10px] uppercase tracking-[0.32em] text-bone/50">
            © MMIX–MMXXVI · {brand.uid}
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-[10px] uppercase tracking-[0.32em] font-medium">
            <Link to="/impressum" className="text-bone/60 hover:text-champagne transition-colors">
              Impressum
            </Link>
            <Link to="/datenschutz" className="text-bone/60 hover:text-champagne transition-colors">
              Datenschutz
            </Link>
            <a href="#top" className="text-bone/60 hover:text-champagne transition-colors">
              ↑ Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
