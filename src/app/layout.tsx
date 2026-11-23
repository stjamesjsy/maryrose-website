import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { PropsWithChildren } from "react";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], display: "swap", variable: "--font-bebas" });
const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://themaryrose.je"),
  title: {
    default: "The Mary Rose - Pub, Bar & Nightclub at the Weighbridge, Jersey",
    template: "%s | The Mary Rose"
  },
  description: "Live sports on the big screens, karaoke every Friday and events all year round at The Mary Rose, 18 Mulcaster St, St Helier, Jersey.",
  manifest: "/site.webmanifest",
  icons: {
    apple: "/images/favicons/apple-touch-icon.png"
  }
}

export const viewport: Viewport = {
  themeColor: "#1a1f25"
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en-GB" className={`${bebas.variable} ${inter.variable}`}>
      <body className="maryrose flex min-h-screen flex-col">{children}</body>
    </html>
  );
}
