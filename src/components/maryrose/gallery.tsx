"use client";

import { AnimatePresence, motion, type PanInfo } from "motion/react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { GALLERY, SITE } from "../../lib/data";
import { EASE_OUT, FadeUp } from "../ui/motion";
import { Heading } from "../ui/ui";
import { InstagramIcon } from "../ui/icons";

/**
 * Bento layout on md+ (4 columns). Spans are picked so nine 4:3 photos tile two full 4×2 blocks with no gaps.
 * On mobile the lead photo spans both columns and the rest sit in a plain 2-column grid.
 */
const SPANS: Record<number, string> = {
  0: "col-span-2 row-span-2",
  3: "md:col-span-2",
  4: "md:row-span-2",
  5: "md:col-span-2",
  6: "md:row-span-2"
}

/** Distance (px) a swipe has to travel in the lightbox before it changes photo. */
const SWIPE = 80;

function Lightbox({ index, onClose, onStep }: { index: number; onClose: () => void; onStep: (dir: 1 | -1) => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const [dir, setDir] = useState<1 | -1>(1);
  const image = GALLERY[index];

  const step = useCallback((d: 1 | -1) => {
    setDir(d);
    onStep(d);
  }, [onStep]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        step(1);
      } else if (e.key === "ArrowLeft") {
        step(-1);
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, step]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -SWIPE) {
      step(1);
    } else if (info.offset.x > SWIPE) {
      step(-1);
    }
  }

  const control = "mary-hit-44 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-mary-night/60 text-white backdrop-blur transition-colors hover:border-mary-blue hover:bg-mary-blue hover:text-mary-ink";

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Photo gallery"
      className="fixed inset-0 z-[80] flex flex-col bg-mary-night/95 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <div className="mary-container flex h-[var(--header-h)] shrink-0 items-center justify-between" onClick={(e) => e.stopPropagation()}>
        <p className="mary-display text-2xl text-white" aria-live="polite">
          <span className="text-mary-blue">{String(index + 1).padStart(2, "0")}</span>
          <span className="text-white/40"> / {String(GALLERY.length).padStart(2, "0")}</span>
        </p>
        <button ref={closeRef} type="button" aria-label="Close gallery" onClick={onClose} className={control}>
          <X size={20} aria-hidden="true" />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 md:px-24">
        <AnimatePresence initial={false} custom={dir} mode="popLayout">
          <motion.div
            key={image.src}
            custom={dir}
            className="relative h-full max-h-[78vh] w-full max-w-6xl cursor-grab active:cursor-grabbing"
            variants={{
              enter: (d: number) => ({ opacity: 0, x: d * 80 }),
              center: { opacity: 1, x: 0 },
              exit: (d: number) => ({ opacity: 0, x: d * -80 })
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: EASE_OUT }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.6}
            onDragEnd={onDragEnd}
            onClick={(e) => e.stopPropagation()}
          >
            <Image src={image.src} alt={image.alt} fill sizes="100vw" draggable={false} className="pointer-events-none select-none object-contain" />
          </motion.div>
        </AnimatePresence>

        <button type="button" aria-label="Previous photo" onClick={(e) => { e.stopPropagation(); step(-1); }} className={`${control} absolute left-4 top-1/2 hidden -translate-y-1/2 md:flex lg:left-8`}>
          <ChevronLeft size={22} aria-hidden="true" />
        </button>
        <button type="button" aria-label="Next photo" onClick={(e) => { e.stopPropagation(); step(1); }} className={`${control} absolute right-4 top-1/2 hidden -translate-y-1/2 md:flex lg:right-8`}>
          <ChevronRight size={22} aria-hidden="true" />
        </button>
      </div>

      <div className="mary-container flex shrink-0 items-center justify-between gap-4 py-6" onClick={(e) => e.stopPropagation()}>
        <p className="min-w-0 text-sm text-white/60 md:text-base">{image.alt}</p>
        <div className="flex shrink-0 gap-2 md:hidden">
          <button type="button" aria-label="Previous photo" onClick={() => step(-1)} className={control}>
            <ChevronLeft size={22} aria-hidden="true" />
          </button>
          <button type="button" aria-label="Next photo" onClick={() => step(1)} className={control}>
            <ChevronRight size={22} aria-hidden="true" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const triggers = useRef<(HTMLButtonElement | null)[]>([]);
  const last = useRef(0);

  const close = useCallback(() => {
    setOpen(null);
    // Hand focus back to the photo that opened the lightbox.
    requestAnimationFrame(() => triggers.current[last.current]?.focus());
  }, []);

  const stepBy = useCallback((d: 1 | -1) => {
    setOpen((i) => {
      if (i === null) {
        return i;
      }
      const next = (i + d + GALLERY.length) % GALLERY.length;
      last.current = next;
      return next;
    });
  }, []);

  return (
    <section id="gallery" className="relative scroll-mt-[var(--header-h)] overflow-x-clip py-24 md:py-32">
      <div aria-hidden="true" className="mary-glow-sea pointer-events-none absolute -right-60 top-10 h-[700px] w-[700px]" />
      <div className="mary-container relative">
        <div className="mb-12 flex flex-col gap-8 md:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <Heading eyebrow="Gallery" lines={["Inside", "the Mary Rose"]} accentSameLine />
          {/* <FadeUp>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="mary-btn mary-btn-ghost group">
              <InstagramIcon size={16} /> More on Instagram
              <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </FadeUp> */}
        </div>

        <ul className="grid auto-rows-[9.5rem] grid-flow-dense grid-cols-2 gap-3 sm:auto-rows-[13rem] md:auto-rows-[11rem] md:grid-cols-4 md:gap-4 lg:auto-rows-[14rem]">
          {GALLERY.map((g, i) => (
            <motion.li
              key={g.src}
              className={SPANS[i] ?? ""}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: EASE_OUT, delay: (i % 4) * 0.06 }}
            >
              <button
                ref={(el) => {
                  triggers.current[i] = el;
                }}
                type="button"
                aria-label={`View photo ${i + 1} of ${GALLERY.length}: ${g.alt}`}
                onClick={() => {
                  last.current = i;
                  setOpen(i);
                }}
                className="group relative block h-full w-full overflow-hidden rounded-[1.25rem] border border-mary-line bg-mary-card"
              >
                <Image
                  src={g.src}
                  alt=""
                  fill
                  sizes={i === 0 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"}
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-mary-night/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
                <span aria-hidden="true" className="absolute bottom-3 right-3 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-mary-blue text-mary-ink opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                  <Expand size={16} />
                </span>
              </button>
            </motion.li>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {open !== null && <Lightbox index={open} onClose={close} onStep={stepBy} />}
      </AnimatePresence>
    </section>
  );
}
