export const brand = {
  name: "MAKEUPYOUREYES",
  short: "MUYE",
  founder: "Marion Oberlerchner",
  founderTitle: "Kosmetikmeisterin & Beautyexpertin",
  established: 2009,
  masterYear: 2021,
  address: "Waidach 8",
  city: "Oberdrauburg",
  zip: "9781",
  country: "Kärnten, Österreich",
  phone: "+43 664 92 42 319",
  phoneDisplay: "+43 664 924 2319",
  email: "office@makeupyoureyes.com",
  uid: "ATU80080626",
  instagram: "https://www.instagram.com/makeupyoureyes/",
  facebook: "https://www.facebook.com/makeupyoureyes",
  hoursWeek: "MO – FR · 10 – 18",
  hoursSat: "SA nach Vereinbarung",
  coords: [12.9678, 46.7480] as [number, number], // Oberdrauburg
};

export const hero = {
  eyebrow: "SEIT 2009 · KOSMETIKMEISTERIN 2021",
  title: "Straffung",
  titleAccent: "ohne Spritze.",
  subline:
    "Natural Face Lifting — die vier-säulige Alternative zu Botox. Face Yoga, Beauty Taping, Gua Sha, Cupping. Für einen Blick der wieder atmet.",
  cta1: "Beauty Guide sichern",
  cta2: "Termin anfragen",
};

export const marion = {
  eyebrow: "Das Gesicht dahinter",
  headline: "Marion\nOberlerchner",
  quote: "Träume nicht dein Leben, sondern lebe deine Träume.",
  bio:
    "Ich hatte das große Glück meinen Traum und größte Leidenschaft, seitdem ich ein Kind bin, wahr werden zu lassen. Bereits mit Anfang 20 startete ich meine Vision mit MAKEUPYOUREYES — heute darf ich Menschen mit der Kunst innerer und äußerer Schönheit zu einem gehobeneren, erfüllteren Lebensgefühl verhelfen.",
  bio2:
    "Meine zahlreichen Aus- und Weiterbildungen im Beauty- sowie Natural Faceliftingbereich ermöglichen mir eine ganzheitliche Betrachtungsweise — von der Muskulatur bis zur mentalen Ebene.",
  portrait: "/media/images/fotogelb-0ac26d10-1920w.jpg", // in B&W filter
  editorial: "/media/images/_MG_2076-Edit01bw-1920w.jpg",
};

// Natural Face Lifting — the current USP
export const nfl = {
  eyebrow: "Natural Face Lifting",
  headline: "Die vier Säulen der\nnatürlichen Verjüngung.",
  lead:
    "Face Yoga · Beauty Taping · Gua Sha · Cupping. Vier Methoden, die einzeln wirken — gemeinsam ihre volle Kraft entfalten. Nachhaltige Straffung, Regeneration und Ausstrahlung. Ohne Nadel. Ohne Skalpell.",
  pillars: [
    {
      no: "01",
      title: "Face Yoga",
      kicker: "Muskelaktivierung & Straffung",
      body:
        "Aufbau und Kräftigung der Gesichtsmuskulatur. Natürliches Lifting durch Muskeltonus, verbesserte Konturen, aktivierte Durchblutung. Ein Fitnessprogramm für dein Gesicht.",
    },
    {
      no: "02",
      title: "Beauty Taping",
      kicker: "Faszien-Entspannung",
      body:
        "Kinesiologisches Tape löst Spannungen in Muskeln und Faszien, regt Lymphfluss und Regeneration an. Feine Bewegungssignale, die das Gewebe im Schlaf trainieren.",
    },
    {
      no: "03",
      title: "Gua Sha",
      kicker: "Lymphdrainage & Kontur",
      body:
        "Alte chinesische Schabetechnik. Anregung des Lymphflusses, sichtbare Definition der Wangenknochen und Kieferlinie, Auflockerung von Verklebungen.",
    },
    {
      no: "04",
      title: "Cupping",
      kicker: "Durchblutung & Kollagen",
      body:
        "Sanftes Vakuum stimuliert Kollagenproduktion und Mikrozirkulation. Frische, rosige Ausstrahlung, sichtbar reduzierte feine Linien.",
    },
  ],
  quote:
    "Dein Gesicht braucht keine Korrektur — nur Entspannung, die es wieder strahlen lässt.",
};

// All services organized in 4 categories
export const catalogue = [
  {
    kicker: "KOSMETIK",
    heading: "Klassik & Medizinisch",
    items: [
      { no: "01", name: "Klassische Kosmetik", slug: "klassische-kosmetik" },
      { no: "02", name: "Medizinische Kosmetik", slug: "medizinische-kosmetik" },
      { no: "03", name: "Sun Spray Tanning", slug: "sun-spray-tanning" },
      { no: "04", name: "Farb- und Stilberatung", slug: "farb-und-stilberatung" },
    ],
  },
  {
    kicker: "PERMANENT",
    heading: "Make-up & Kontur",
    items: [
      { no: "05", name: "Make-up", slug: "make-up" },
      { no: "06", name: "Permanent Make-up", slug: "permanent-make-up" },
      { no: "07", name: "Microblading", slug: "microblading" },
    ],
  },
  {
    kicker: "AUGEN & FINGER",
    heading: "Feinarbeit",
    items: [
      { no: "08", name: "Wimpernverlängerung", slug: "wimpernverlaengerung" },
      { no: "09", name: "Wimpernlifting", slug: "wimpernlifting" },
      { no: "10", name: "Nageldesign", slug: "nageldesign" },
      { no: "11", name: "Dauerhafte Haarentfernung IPL", slug: "dauerhafte-haarentfernung-ipl" },
    ],
  },
  {
    kicker: "MENTAL",
    heading: "Transformation",
    items: [
      { no: "12", name: "Transformation Coaching", slug: "transformation" },
      { no: "13", name: "Mentale Schönheit", slug: "mentaleschoenheit" },
      { no: "14", name: "ON TOUR (mobil)", slug: "ontour" },
    ],
  },
];

// Ausbildungswerdegang — condensed to feel like a curriculum vitae
export const cv = [
  { year: "1997–2007", label: "Kaufmännische Ausbildung — Handelsschule / -akademie" },
  { year: "2007", label: "Diplom Make-up Stylistin · Salzburg" },
  { year: "2008", label: "Diplom Visagistin & Make-up Artist" },
  { year: "2008", label: "Farb-, Stil- und Imageberaterin" },
  { year: "2008", label: "Anti-Aging Trainerin" },
  { year: "2009", label: "Gründung MAKEUPYOUREYES · selbstständige Unternehmerin" },
  { year: "2010", label: "European Beauty Coach · EYELASH-Stylistin · Naildesignerin" },
  { year: "2010", label: "Diplom Permanent Make-up Stylistin & Body Tattoo" },
  { year: "2013/14", label: "Dauerhafte Haarentfernung IPL" },
  { year: "2014", label: "Professionelle Wimpernverlängerung" },
  { year: "2020", label: "Ausbildung klassische Kosmetik" },
  { year: "2021", label: "Weiterbildung Microblading" },
  { year: "2021", label: "★ Meisterprüfung Kosmetik mit Auszeichnung" },
  { year: "2022–", label: "Mentaltrainer · Entspannungstrainer · Positive Psychologie" },
  { year: "2025", label: "Face-Yoga bei Ayuryogatherapie · Julia Backhaus" },
  { year: "2026", label: "Natural Face Lifting Methoden bei Olga von Stein" },
];

// Portfolio — editorial shoots + client references
// Bento sizes: 'wide' (2col), 'tall' (2row), 'huge' (2x2), or 'default' (1x1)
export const portfolio = {
  eyebrow: "Portfolio · Editorial Work",
  headline: "Meine Arbeit\nspricht.",
  lead:
    "Aus 20 Jahren am Make-up-Set — Beauty-Pageant-Finalistinnen, Editorial-Shootings mit Martin Lugger und Alois Bergmann, Kunden-Porträts. Jede Seele bekommt ihren eigenen Blick.",
  works: [
    { src: "/media/images/oczy-1920w.jpg", tag: "Editorial", caption: "Silber-Kette · Signature Shot", size: "huge" },
    { src: "/media/images/140613_martinlugger_lisa_MLUG1836p-1920w.jpg", tag: "Martin Lugger", caption: "Wiese · Golden Hour", size: "tall" },
    { src: "/media/images/_MG_2076-Edit01bw-1920w.jpg", tag: "Editorial", caption: "Karo · B&W Studio", size: "default" },
    { src: "/media/images/140613_martinlugger_lisa_MLUG1908-1920w.jpg", tag: "Martin Lugger", caption: "Grasses · Editorial", size: "default" },
    { src: "/media/images/_MG_2148-Edit02-1920w.jpg", tag: "Editorial", caption: "Water-Splash · Beauty", size: "wide" },
    { src: "/media/images/_MG_2209-Edit-1920w.jpg", tag: "Editorial", caption: "Blau · Splash-Beauty", size: "default" },
    { src: "/media/images/_MG_2283-Edit01F-1920w.jpg", tag: "Editorial", caption: "Kleid · Studio-Portrait", size: "tall" },
    { src: "/media/images/_MG_7805-1920w.jpg", tag: "Editorial", caption: "Rotkleid · Portrait", size: "default" },
    { src: "/media/images/_MG_7537_2-1920w.jpg", tag: "Editorial", caption: "B&W · Cover-Portrait", size: "default" },
    { src: "/media/images/AL_02-1920w.jpg", tag: "Alois Bergmann", caption: "Dance · Bewegung", size: "wide" },
    { src: "/media/images/julia11-1920w.jpg", tag: "Editorial", caption: "Julia · Sunset-Portrait", size: "default" },
    { src: "/media/images/Lisa-1920w.jpg", tag: "Kunden", caption: "Lisa · Behandlung", size: "default" },
  ],
};

export const contact = {
  eyebrow: "Kontakt",
  headline: "Ein Termin.\nEin Wandel.",
  lead:
    "Ruf an, schreib eine WhatsApp, oder komm direkt in den Salon. MAKEUPYOUREYES freut sich auf dich.",
};

export const testimonials = [
  {
    quote:
      "Marion versteht Gesichter. Sie sieht nicht was fehlt — sie sieht was da ist und holt es raus.",
    author: "K.M.",
    role: "Bestandskundin, seit 2014",
  },
  {
    quote:
      "Das erste Mal nach Jahren, dass ich mich nach einer Behandlung wie ich selbst gefühlt habe — nur ausgeruhter.",
    author: "S.P.",
    role: "Natural Face Lifting",
  },
  {
    quote:
      "Handwerklich präzise, menschlich unaufdringlich, ästhetisch klar. Ein seltenes Trio.",
    author: "J.B.",
    role: "Permanent Make-up",
  },
];
