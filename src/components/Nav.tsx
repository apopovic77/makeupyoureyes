import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { brand } from "../data/content";

const links = [
  { href: "#natural-face-lifting", label: "Natural Face Lifting" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#marion", label: "Marion" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-bone/95 backdrop-blur-md py-3 shadow-[0_1px_0_0_rgba(10,10,10,0.08)]" : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 flex items-center justify-between">
        <Link
          to="/"
          className="font-display font-normal text-ink text-3xl md:text-4xl leading-none tracking-normal hover:text-champagne transition-colors"
        >
          MakeUpYourEyes
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] uppercase tracking-[0.28em] text-ink hover:text-champagne transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${brand.phone.replace(/\s/g, "")}`}
            className="hidden md:inline-block text-[11px] uppercase tracking-[0.28em] text-ink hover:text-champagne transition-colors"
          >
            {brand.phoneDisplay}
          </a>
          <a
            href="#kontakt"
            className="hidden md:inline-flex items-center gap-2 bg-gold-gradient text-ink px-4 py-2 text-[11px] uppercase tracking-[0.28em] font-bold glow-gold hover:scale-[1.03] transition-all"
          >
            ★ Termin
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden inline-flex flex-col items-end gap-1.5 p-2"
            aria-label="Menu"
          >
            <span className="block w-6 h-px bg-ink" />
            <span className="block w-4 h-px bg-ink" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-bone border-t border-ink/10 px-6 py-6 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm uppercase tracking-[0.28em] text-ink font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${brand.phone.replace(/\s/g, "")}`}
            className="block text-sm text-champagne pt-4 border-t border-ink/10"
          >
            {brand.phoneDisplay}
          </a>
        </div>
      )}
    </header>
  );
}
