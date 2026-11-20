import type { Metadata } from "next";
import { Instrument_Serif, Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/scroll-progress";
import { Spotlight } from "@/components/spotlight";
import { JsonLd } from "@/components/json-ld";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL, siteSchemas } from "@/lib/seo";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s — VilSend",
  },
  description: SITE_DESCRIPTION,

  keywords: [
    "device to device transfer",
    "device-to-device file transfer",
    "transfer data between devices",
    "share data between devices",
    "secure file transfer",
    "encrypted file transfer",
    "large file transfer",
    "file sharing for teams",
    "send large files",
    "secure data sharing",
    "cross-platform file sharing",
    "end-to-end encryption",
    "VilSend",
  ],
  authors: [{ name: "VilSend" }],
  creator: "VilSend",
  publisher: "VilSend",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${grotesk.variable} ${display.variable} ${plexMono.variable}`}
    >
      <head>
        <meta name="theme-color" content="#030407" />
        <JsonLd data={siteSchemas} />
      </head>
      <body>
        <ScrollProgress />
        <Spotlight />
        <div
          className="pointer-events-none fixed left-[18px] top-1/2 z-40 -translate-y-1/2 font-mono text-[9.5px] uppercase tracking-[0.42em] text-ash-soft opacity-70 [writing-mode:vertical-rl] max-[1360px]:hidden"
          aria-hidden
        >
          VILSEND · EST. 2026 · SECURE TRANSFER
        </div>
        {children}
      </body>
    </html>
  );
}
