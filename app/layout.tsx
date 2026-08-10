import type { Metadata } from "next";
import { Inter, Fraunces, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const siteUrl = "https://vilsend.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "VilSend — Move files faster. Work together better.",
    template: "%s — VilSend",
  },
  description:
    "VilSend helps teams securely transfer files across devices with end-to-end encryption, no file size limits, and a simple, reliable experience built for modern businesses.",

  // icons: { icon: "/logo.png", apple: "/logo.png" },
  keywords: [
    "VilSend",
    "secure file sharing",
    "encrypted file transfer",
    "team file sharing",
    "large file transfer",
    "device-to-device file sharing",
    "end-to-end encryption",
    "cross-platform file sharing",
    "business file sharing",
    "secure document transfer",
    "file sharing for teams",
    "remote team collaboration",
    "secure file transfer",
    "encrypted sharing",
    "fast file transfer",
    "workspace file sharing",
    "VilSend file sharing",
    "encrypted file sharing platform",
    "send files securely",
    "share files online",
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
    url: siteUrl,
    siteName: "VilSend",
    title: "VilSend — Move files faster. Work together better.",
    description:
      "VilSend helps teams securely transfer files across devices with end-to-end encryption, no file size limits, and a simple, reliable experience built for modern businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "VilSend — Move files faster. Work together better.",
    description:
      "VilSend helps teams securely transfer files across devices with end-to-end encryption, no file size limits, and a simple, reliable experience built for modern businesses.",
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
      className={`${inter.variable} ${fraunces.variable} ${plexMono.variable}`}
    >
      <head>
        <meta name="theme-color" content="#14120F" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "VilSend",
              applicationCategory: "BusinessApplication",
              operatingSystem: "macOS, Windows, iOS, Android",
              description:
                "VilSend helps teams securely transfer files across devices with end-to-end encryption, no file size limits, and a simple, reliable experience built for modern businesses.",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                "Device-to-device encrypted transfers",
                "Organization workspaces",
                "Team invitations",
                "Large file support",
                "Cross-platform experience",
                "Transfer history",
                "Real-time device status",
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
