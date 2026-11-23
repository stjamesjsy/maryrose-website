import Link from "next/link";
import { NAV_ITEMS, OPENING_HOURS, SITE } from "../../lib/data";
import { Logo } from "./header";
import { FacebookIcon, InstagramIcon } from "./icons";

const HEAD = "mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-mary-blue";
const LINK = "text-white/75 transition-colors hover:text-mary-blue";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-mary-line bg-mary-night">
      <div className="mary-container relative grid gap-12 py-16 md:grid-cols-2 md:py-20 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-4">
          <Logo className="h-14 w-fit md:h-16" />
          <p className="max-w-xs text-white/60">Pub &bull; Bar &bull; Nightclub. At the Weighbridge, the heart of Jersey's nightlife.</p>

          <div className="flex gap-2">
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="The Mary Rose on Instagram" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-mary-blue hover:bg-mary-blue hover:text-mary-ink">
              <InstagramIcon size={18} />
            </a>
            <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" aria-label="The Mary Rose on Facebook" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-mary-blue hover:bg-mary-blue hover:text-mary-ink">
              <FacebookIcon size={18} />
            </a>
          </div>
        </div>

        <div className="lg:col-span-2">
          <p className={HEAD}>Explore</p>

          <ul className="flex flex-col gap-3">
            {NAV_ITEMS.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className={LINK}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className={HEAD}>Opening hours</p>

          <dl className="flex flex-col gap-3">
            {OPENING_HOURS.map(([d, h]) => (
              <div key={d} className="flex flex-col">
                <dt className="font-semibold text-white">{d}</dt>
                <dd className="text-white/60">{h}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-3">
          <p className={HEAD}>Find us</p>

          <address className="flex flex-col gap-3 not-italic">
            <a href={SITE.maps} target="_blank" rel="noopener noreferrer" className={LINK}>
              {SITE.address.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </a>
            <span className="flex flex-col">
              <a href={`mailto:${SITE.email}`} className="text-mary-blue hover:underline">
                {SITE.email}
              </a>
              <span className="text-sm text-white/45">General enquiries</span>
            </span>
          </address>
        </div>
      </div>
      <div className="border-t border-mary-line">
        <div className="mary-container flex flex-col gap-3 py-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {SITE.company}. All rights reserved.</p>
          <a href={SITE.privacy} className="transition-colors hover:text-mary-blue">
            Privacy policy
          </a>
        </div>
      </div>
    </footer>
  );
}
