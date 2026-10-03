import type { Metadata } from "next";
import HomePageClient from "./HomePageClient"; // adjust path

export const metadata: Metadata = {
  title: "Best DSC Provider in India | Class 3 DSC, HYP2003 FIPS 140-3 Token & eSign | Nova Venture",
  description:
    "Authorized CCA-approved Class 3 DSC provider in India. Buy FIPS 140-3 HYP2003 cryptographic USB tokens, legal eSign software, ITR filing & GST compliance platform. 2.6 Crore+ tokens deployed.",
  keywords: [
    "Best DSC provider in India",
    "Authorized DSC provider in India",
    "CCA approved DSC provider India",
    "Class 3 DSC provider online India",
    "FIPS 140-3 token provider India",
    "HYP2003 cryptographic USB token",
    "Best USB token for DSC in India",
    "Digital signature for income tax e-filing",
    "MCA21 company registration DSC",
    "Best eSign solution provider India",
    "Legal electronic signature platform India",
  ],
  authors: [{ name: "Nova Venture" }],
  creator: "Nova Venture",
  publisher: "Nova Venture",
  metadataBase: new URL("https://novaventure.in"),
  alternates: {
    canonical: "https://novaventure.in",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://novaventure.in",
    siteName: "Nova Venture",
    title: "Best DSC Provider in India | Class 3 DSC & HYP2003 Token | Nova Venture",
    description:
      "Authorized CCA-approved Class 3 DSC, FIPS 140-3 HYP2003 USB tokens, legal eSign, ITR & GST platform. Trusted by CAs and enterprises across India.",
    images: [
      {
        url: "/og-image.jpg", // create this image (1200×630)
        width: 1200,
        height: 630,
        alt: "Nova Venture - DSC, eSign & HYP2003 Tokens",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best DSC Provider in India | Nova Venture",
    description:
      "CCA-approved Class 3 DSC, FIPS 140-3 HYP2003 tokens, eSign & tax compliance platform.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function HomePage() {
  return <HomePageClient />;
}