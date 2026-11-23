"use client";

import { Star } from "lucide-react";
import { type ReactNode } from "react";
import { TICKER } from "../../lib/data";
import { Footer } from "./footer";
import { Header } from "./header";
import { FadeUp } from "./motion";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export function StarMark({ size = 22, className = "" }: { size?: number; className?: string }) {
  return <Star size={size} className={`shrink-0 fill-mary-blue text-mary-blue ${className}`} aria-hidden="true" />;
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`mary-eyebrow ${className}`}>{children}</p>;
}

export function Heading({ eyebrow, lines, as: Tag = "h2", className = "", center = false, accentSameLine = false }: { eyebrow?: string; lines: [string, string?]; as?: "h1" | "h2"; className?: string; center?: boolean; accentSameLine?: boolean; }) {
  return (
    <FadeUp y={20} className={`flex flex-col gap-4 ${center ? "items-center text-center" : ""} ${className}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}

      <Tag className="mary-h2 text-white">
        <span className={accentSameLine ? "" : "block"}>{lines[0]}</span>
        
        {lines[1] && (
          <>
            {accentSameLine ? " " : null}
            <span className={accentSameLine ? "text-mary-blue" : "block text-mary-blue"}>
              {lines[1]}
            </span>
          </>
        )}
      </Tag>
    </FadeUp>
  );
}

export function Ticker({ items = TICKER, tone = "blue" }: { items?: string[]; tone?: "blue" | "dark" }) {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((t) => (
        <li key={t} className="flex items-center gap-6 pr-6 md:gap-8 md:pr-8">
          <span className="mary-display whitespace-nowrap text-2xl md:text-3xl">{t}</span>
          <Star size={18} className={`mary-twinkle shrink-0 ${tone === "blue" ? "fill-mary-ink text-mary-ink" : "fill-mary-blue text-mary-blue"}`} aria-hidden="true" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className={`relative overflow-hidden py-4 md:py-5 ${tone === "blue" ? "bg-mary-blue text-mary-ink" : "border-y border-mary-line bg-mary-night text-white"}`}>
      <div className="mary-marquee flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
