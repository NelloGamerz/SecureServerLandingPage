export const SITE_URL = "https://vilsend.app";
export const SITE_NAME = "VilSend";
export const SITE_TITLE = "VilSend — Device-to-Device File Transfer for Teams";
export const SITE_DESCRIPTION =
  "VilSend transfers and shares data directly between devices — end-to-end encrypted file transfer with no file size limits, built for teams on Mac, Windows, iOS, and Android.";

const organization = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.png` },
  description: SITE_DESCRIPTION,
};

const website = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "en",
  description: SITE_DESCRIPTION,
  publisher: { "@id": `${SITE_URL}/#organization` },
};

const softwareApplication = {
  "@type": "SoftwareApplication",
  "@id": `${SITE_URL}/#app`,
  name: SITE_NAME,
  url: SITE_URL,
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "File Transfer",
  operatingSystem: "macOS, Windows, iOS, Android",
  description: SITE_DESCRIPTION,
  isAccessibleForFree: true,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/PreOrder",
  },
  publisher: { "@id": `${SITE_URL}/#organization` },
  featureList: [
    "Device-to-device encrypted transfers",
    "Organization workspaces",
    "Team invitations",
    "Large file support",
    "Cross-platform experience",
    "Transfer history",
    "Real-time device status",
  ],
};

export const siteSchemas = [
  { "@context": "https://schema.org", ...organization },
  { "@context": "https://schema.org", ...website },
  { "@context": "https://schema.org", ...softwareApplication },
];
