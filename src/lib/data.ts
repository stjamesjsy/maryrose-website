export const IMG = "/images";

export type NavItem = { label: string; href: string }

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/#events" },
  { label: "Gallery", href: "/#gallery" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/#contact" }
];

export const SITE = {
  name: "The Mary Rose",
  company: "JKOLI LIMITED t/a The Mary Rose",
  address: ["18 Mulcaster St", "St Helier", "Jersey, JE2 3NJ"],
  addressLine: "18 Mulcaster St, St Helier, JE2 3NJ",
  email: "craigroberts@jkolijersey.com",
  instagram: "https://instagram.com/themaryrosejersey",
  facebook: "https://facebook.com/TheMaryRoseJersey",
  privacy: `/privacy`,
  maps: "https://www.google.com/maps/search/?api=1&query=The+Mary+Rose+18+Mulcaster+St+St+Helier+Jersey+JE2+3NJ",
  mapEmbed: "https://www.google.com/maps?q=The+Mary+Rose,+18+Mulcaster+St,+St+Helier,+Jersey+JE2+3NJ&output=embed",
  contactFormUrl: "https://mailer.glitch.je/api/contact",
  /** Set in .env - see .env.example. */
  eventsUrl: process.env.NEXT_PUBLIC_EVENTS_URL as string
}

export const OPENING_HOURS: [string, string][] = [
  ["Monday", "Closed"],
  ["Tuesday - Sunday", "7pm - 2am"]
];

export type Night = {
  id: string;
  title: string;
  /** Monday-first weekday indexes (0 = Mon … 6 = Sun) the night runs on. */
  dayIdx: number[];
  /** One-line summary for the line-up row. */
  line: string;
  days: string;
  when: string;
  intro: string;
  body: string;
  note: string;
  image: string;
  cta?: { label: string; href: string }[];
}

export const NIGHTS: Night[] = [
  {
    id: "karaoke",
    title: "Karaoke",
    dayIdx: [4],
    line: "Grab the mic and belt out your favourite tunes til 2am",
    days: "Friday",
    when: "11pm - 2am",
    intro: "Friday nights are made for karaoke.",
    body: "Grab the mic and belt out your favourite tunes. Whether you're a shower singer or a true star, Friday nights are made for it at The Mary Rose.",
    note: "No booking required - just turn up and pick your song.",
    image: `${IMG}/gallery/web/halloween-karaoke.jpg`
  },
  {
    id: "live-sports",
    title: "Live Sports",
    /** On whenever there's a match, so it never gets a "Tonight" badge. */
    dayIdx: [],
    line: "Football, rugby and more across multiple screens",
    days: "All week",
    when: "Whenever the action is on",
    intro: "Never miss a match.",
    body: "We show live football across multiple screens - plus rugby and the rest of the big sporting moments. Pull up a stool and cheer on your team.",
    note: "Fixture listings are coming soon - follow us on social for what's on this week.",
    image: `${IMG}/gallery/web/faversham-fc.jpg`,
    cta: [
      { label: "Follow on Facebook", href: "https://facebook.com/TheMaryRoseJersey" },
      { label: "Find us", href: "/#visit" }
    ]
  }
];

export const TICKER: string[] = [];

export type GalleryImage = { src: string; alt: string }

export const GALLERY: GalleryImage[] = [
  { src: `${IMG}/gallery/web/ladies-of-the-house.jpg`, alt: "A packed, neon-lit dance floor on a night out" },
  { src: `${IMG}/gallery/web/faversham-fc.jpg`, alt: "Football fans gathered in the bar to watch a match" },
  { src: `${IMG}/gallery/web/halloween-karaoke.jpg`, alt: "Halloween karaoke night with coloured lights over the crowd" },
  { src: `${IMG}/gallery/web/back-room.jpg`, alt: "The back room, with screens along the walls" },
  { src: `${IMG}/gallery/web/posters.jpg`, alt: "Framed Madonna and Beatles posters under fairy lights" },
  { src: `${IMG}/gallery/web/main-room-2.jpg`, alt: "The main room at The Mary Rose" },
  { src: `${IMG}/gallery/web/main-room-1.jpg`, alt: "The main bar at The Mary Rose, with taps, spirits and a big screen showing football" },
  { src: `${IMG}/gallery/web/main-room-3.jpg`, alt: "Seating in the main room at The Mary Rose" },
  { src: `${IMG}/gallery/web/main-room-4.jpg`, alt: "Another view of the main room at The Mary Rose" }
];

export type Faq = { q: string; a: string[]; list?: string[]; after?: string[]; link?: { label: string; href: string } }

export const FAQS: Faq[] = [
  { q: "Is there an age restriction?", a: ["18+ (unless stated otherwise). ID may be required."] },
  { q: "Where are you located?", a: ["We are located at 18 Mulcaster St, St Helier, Jersey, JE2 3NJ - at the Weighbridge, on the site of the old Tanguys."] },
  {
    q: "What is the dress code?",
    a: ["The dress code is smart casual."],
    list: [
      "No sportswear (after 10pm, Thursday - Sunday only)",
      "No dirty work clothes (after 10pm, Thursday - Sunday only)",
      "No football shirts (after 10pm, Thursday - Sunday only)",
      "No hats (at any time)"
    ]
  },
  { q: "Is there parking nearby?", a: ["Yes - Pier Road car park is a short walk up Pier Road hill."] },
  { q: "What are your opening hours?", a: ["Monday: closed.", "Tuesday - Thursday: 7pm - 2am.", "Friday: 3pm - 2am.", "Saturday & Sunday: 11:30am - 2am."] },
  { q: "Do you show the football?", a: ["Yes! We show live football across multiple screens, plus rugby and other big sporting events. Fixture listings are coming to the website soon."] },
  { q: "Do you have a cloakroom?", a: ["Unfortunately we do not."] },
  { q: "Do you have free Wi-Fi?", a: ["Yes! The details can be found at the bar - ask the bar staff if you need help."] },
  { q: "Can I vape inside?", a: ["Unfortunately not!"] },
  {
    q: "What forms of ID do you accept?",
    a: ["We accept the following:"],
    list: ["Full Jersey driving licence", "Passport"],
    after: ["We do not accept provisional licences or out-of-date forms of ID. We also do not accept photocopies, digital images or screenshots of IDs."]
  }
];
