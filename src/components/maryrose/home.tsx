"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ChevronDown, Clock, MapPin, ParkingCircle } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { ContactForm } from "./contact-form";
import { IMG, OPENING_HOURS, SITE } from "../../lib/data";
import { EASE_OUT, FadeUp } from "../ui/motion";
import { Eyebrow, Heading, SiteShell } from "../ui/ui";
import { FacebookIcon, InstagramIcon } from "../ui/icons";
import { Events } from "./events";
import { Gallery } from "./gallery";
import { WhatsOn } from "./whats-on";

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const tags = ["Pub", "Bar", "Nightclub"];

  return (
    <section ref={ref} className="relative flex min-h-[100svh] items-center overflow-hidden bg-mary-night">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <motion.div className="absolute inset-0" initial={{ scale: 1.2 }} animate={{ scale: 1.05 }} transition={{ duration: 2.4, ease: EASE_OUT }}>
          <Image src={`${IMG}/hero-bar.jpg`} alt="" fill preload sizes="100vw" className="object-cover object-[50%_40%] saturate-[0.85]" />
        </motion.div>
      </motion.div>
      {/* The bar photo is bright and warm - tint it towards the brand slate, then darken the edges and behind the copy so the white logo reads. */}
      <div aria-hidden="true" className="absolute inset-0 bg-mary-deep/50 mix-blend-multiply" />
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,19,23,0.85)_0%,rgba(15,19,23,0.35)_22%,rgba(15,19,23,0.35)_60%,rgba(15,19,23,0.97)_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,19,23,0.55),rgba(15,19,23,0.2)_60%,transparent_100%)]" />

      <motion.div className="mary-container relative z-10 flex flex-col items-center pt-[var(--header-h)] text-center" style={{ y: contentY, opacity: fade }}>
        <h1 className="w-[min(78vw,34rem)]">
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 30, scale: 0.94, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.4, ease: EASE_OUT, delay: 0.15 }}
          >
            <Image src={`${IMG}/logo.png`} alt="The Mary Rose" width={625} height={317} preload className="h-auto w-full drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]" />
          </motion.span>
        </h1>
        <p className="mary-display mt-8 flex items-center [text-shadow:0_2px_16px_rgba(0,0,0,0.6)] gap-4 text-[clamp(1.5rem,3.4vw,2.5rem)] tracking-[0.18em] text-white md:gap-6">
          {tags.map((t, i) => (
            <motion.span
              key={t}
              className="flex items-center gap-4 md:gap-6"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.7 + i * 0.1 }}
            >
              {i > 0 && <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-mary-blue" />}
              {t}
            </motion.span>
          ))}
        </p>
        <motion.p className="mt-5 max-w-xl text-lg text-white/85 [text-shadow:0_1px_12px_rgba(0,0,0,0.7)]" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: EASE_OUT, delay: 1 }}>
          Sports on the big screens, karaoke every Friday and events all year round - at the Weighbridge, the heart of Jersey's nightlife.
        </motion.p>
        <motion.div className="mt-10 flex flex-col gap-3 sm:flex-row" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: EASE_OUT, delay: 1.15 }}>
          <a href="#events" className="mary-btn mary-btn-solid h-14 px-9 text-base">
            Upcoming events
          </a>
          <a href="#visit" className="mary-btn mary-btn-outline h-14 px-9 text-base">
            Find us
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#whats-on"
        aria-label="Scroll to what's on"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 p-3 text-white/70 hover:text-mary-blue"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={26} aria-hidden="true" />
      </motion.a>
    </section>
  );
}

function Visit() {
  return (
    <section id="visit" className="scroll-mt-[var(--header-h)] border-t border-mary-line bg-mary-night py-24 md:py-32">
      <div className="mary-container grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div className="flex flex-col gap-10">
          <Heading lines={["Find", "us"]} accentSameLine />
          <FadeUp className="flex flex-col gap-7">
            <div className="flex gap-4">
              <MapPin className="mt-1 shrink-0 text-mary-blue" size={22} aria-hidden="true" />
              <div>
                <p className="font-bold text-white">Address</p>
                <a href={SITE.maps} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-mary-blue">
                  {SITE.addressLine}
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="mt-1 shrink-0 text-mary-blue" size={22} aria-hidden="true" />
              <div>
                <p className="font-bold text-white">Opening hours</p>
                {OPENING_HOURS.map(([d, h]) => (
                  <p key={d} className="text-white/70">
                    <span className="text-white">{d}</span> · {h}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex gap-4">
              <ParkingCircle className="mt-1 shrink-0 text-mary-blue" size={22} aria-hidden="true" />
              <div>
                <p className="font-bold text-white">Parking</p>
                <p className="text-white/70">Pier Road car park is a short walk up Pier Road hill.</p>
              </div>
            </div>
          </FadeUp>
          <FadeUp>
            <a href={SITE.maps} target="_blank" rel="noopener noreferrer" className="mary-btn mary-btn-outline group">
              Get directions <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </FadeUp>
        </div>
        <FadeUp y={32} className="relative min-h-[360px] overflow-hidden rounded-[1.5rem] border border-mary-line lg:min-h-full">
          <iframe
            title="Map showing The Mary Rose, 18 Mulcaster St, St Helier"
            src={SITE.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full"
          />
        </FadeUp>
      </div>
    </section>
  );
}

function Contact() {
  const social = "flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-mary-blue hover:bg-mary-blue hover:text-mary-ink";

  return (
    <section id="contact" className="relative scroll-mt-[var(--header-h)] overflow-hidden border-t border-mary-line py-24 md:py-32">
      {/* <div aria-hidden="true" className="mary-glow pointer-events-none absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2" /> */}
      <div className="mary-container relative flex flex-col items-center">
        <Heading eyebrow="Got a question?" lines={["Get in", "touch"]} accentSameLine center />
        <FadeUp className="mt-4 text-center text-white/70">Drop us a message and we'll get back to you as soon as we can.</FadeUp>
        <FadeUp delay={0.05} className="mt-12 w-full max-w-4xl">
          <div className="mary-card p-6 md:p-10">
            <Eyebrow className="mb-6">Send us a message</Eyebrow>
            <ContactForm source="home-general" />
          </div>
        </FadeUp>
        <FadeUp delay={0.1} className="mt-8 flex items-center gap-4 text-white/60">
          <span>Or find us on</span>
          <span className="flex gap-2">
            <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" aria-label="The Mary Rose on Facebook" className={social}>
              <FacebookIcon size={18} />
            </a>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="The Mary Rose on Instagram" className={social}>
              <InstagramIcon size={18} />
            </a>
          </span>
        </FadeUp>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <div className="h-6 bg-mary-blue" />
      <WhatsOn />
      <Events />
      <Gallery />
      <Visit />
      <Contact />
    </SiteShell>
  );
}
