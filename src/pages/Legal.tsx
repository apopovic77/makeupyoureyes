import { useEffect } from "react";
import { Link } from "react-router-dom";
import { brand } from "../data/content";

type Props = { kind: "impressum" | "datenschutz" };
const TITLES = { impressum: "Impressum", datenschutz: "Datenschutz" };

export function LegalPage({ kind }: Props) {
  useEffect(() => {
    const prev = document.title;
    document.title = `${TITLES[kind]} — ${brand.name}`;
    window.scrollTo(0, 0);
    return () => { document.title = prev; };
  }, [kind]);

  return (
    <article className="bg-bone pt-32 md:pt-40 pb-24 min-h-screen">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.32em] text-stone hover:text-champagne transition-colors mb-10 font-medium"
        >
          ← zurück
        </Link>
        <p className="text-[10px] uppercase tracking-[0.4em] text-champagne mb-6 font-medium">
          {TITLES[kind]}
        </p>
        {kind === "impressum" ? <Impressum /> : <Datenschutz />}
      </div>
    </article>
  );
}

function H1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="font-serif font-light italic text-ink text-4xl md:text-6xl leading-[0.95] tracking-[-0.02em]">
      {children}
    </h1>
  );
}
function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif italic text-ink text-2xl md:text-3xl mt-12 mb-3 leading-tight">
      {children}
    </h2>
  );
}
function P({ children }: { children: React.ReactNode }) {
  return <p className="text-ink-soft leading-[1.85] mt-4 font-light">{children}</p>;
}

function Impressum() {
  return (
    <>
      <H1>Impressum</H1>
      <P>Angaben gemäß § 5 E-Commerce-Gesetz und § 25 Mediengesetz.</P>

      <H2>Medieninhaber</H2>
      <P>
        <strong className="text-ink">MAKEUPYOUREYES</strong> — {brand.founder}<br />
        {brand.address}, {brand.zip} {brand.city}<br />
        {brand.country}
      </P>
      <P>
        Telefon: <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="text-champagne hover:underline">{brand.phoneDisplay}</a><br />
        E-Mail: <a href={`mailto:${brand.email}`} className="text-champagne hover:underline">{brand.email}</a><br />
        UID: {brand.uid}
      </P>

      <H2>Unternehmensgegenstand</H2>
      <P>Kosmetikbehandlungen · Permanent Make-up · Microblading · Wimpernlifting · Nageldesign · Farb- und Stilberatung · Sun Spray Tanning · Natural Face Lifting (Face Yoga, Beauty Taping, Gua Sha, Cupping) · Transformation Coaching. Zuständige Kammer: Wirtschaftskammer Kärnten.</P>

      <H2>Berufsrecht</H2>
      <P>Gewerbeordnung — abrufbar unter <a href="https://www.ris.bka.gv.at" target="_blank" rel="noopener noreferrer" className="text-champagne hover:underline">ris.bka.gv.at</a>.</P>

      <H2>Online-Streitbeilegung</H2>
      <P>Plattform der EU-Kommission: <a href="https://ec.europa.eu/odr" target="_blank" rel="noopener noreferrer" className="text-champagne hover:underline">ec.europa.eu/odr</a>. Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren teilzunehmen.</P>

      <H2>Bild- und Text-Copyright</H2>
      <P>Alle erschienenen Texte, Bilder und Downloads dieser Website sind urheberrechtlich geschützt und alle Rechte sind vorbehalten. Reproduktionen, gleich welcher Art, nur mit schriftlicher Genehmigung von {brand.founder}.</P>
    </>
  );
}

function Datenschutz() {
  return (
    <>
      <H1>Datenschutz</H1>

      <H2>Verantwortliche Stelle</H2>
      <P>
        MAKEUPYOUREYES — {brand.founder}<br />
        {brand.address}, {brand.zip} {brand.city}<br />
        {brand.email} · {brand.phoneDisplay}
      </P>

      <H2>Allgemeine Hinweise</H2>
      <P>Die Verwendung personenbezogener Daten richtet sich nach den geltenden gesetzlichen Bestimmungen (DSGVO, Telekommunikationsgesetz) sowie der durch die Nutzer:innen erteilten Einwilligung.</P>

      <H2>Datenerfassung</H2>
      <P>Diese Website erfasst technische Daten (Browser, Betriebssystem, Uhrzeit) automatisch zur fehlerfreien Bereitstellung. Es werden keine personenbezogenen Tracker, kein Analytics und keine Marketing-Cookies eingesetzt.</P>

      <H2>Kontaktaufnahme</H2>
      <P>Wenn Sie uns per Telefon, WhatsApp oder E-Mail kontaktieren, werden die übermittelten Daten zur Bearbeitung Ihrer Anfrage gespeichert. Eine Weitergabe an Dritte erfolgt nicht.</P>

      <H2>Externe Dienste</H2>
      <P>Kartenkacheln für den Standort werden von <a href="https://openfreemap.org" target="_blank" rel="noopener noreferrer" className="text-champagne hover:underline">OpenFreeMap</a> (basierend auf OpenStreetMap) geladen. Schriftarten werden über das Google-Fonts-CDN geladen.</P>

      <H2>Ihre Rechte</H2>
      <P>Sie haben jederzeit das Recht auf Auskunft, Berichtigung oder Löschung Ihrer gespeicherten personenbezogenen Daten sowie Beschwerderecht bei der Datenschutzbehörde Österreich.</P>

      <H2>SSL / TLS</H2>
      <P>Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung — erkennbar am Schloss-Symbol im Browser.</P>
    </>
  );
}
