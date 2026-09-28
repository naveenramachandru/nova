import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Nova Venture | Secure Hardware Tokens, eSign & Tax Filing Ecosystem",
    template: "%s | Nova Venture Business Ecosystem",
  },
  description:
    "Unified business ecosystem for FIPS 140-3 HYP2003 cryptographic USB tokens, legal paperless eSign portals, automated ITR tax filing, and GST accounting software in India.",
  keywords: [
    "HYP2003 token",
    "digital signature certificate hardware",
    "Class 3 DSC USB token",
    "paperless eSign software India",
    "income tax filing portal ITR",
    "GST reconciliation software",
    "GSTR 3B filing automation",
    "CCA India approved cryptographic token",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://novaventure.in",
    siteName: "Nova Venture",
    title: "Nova Venture | Secure Hardware & PKI Ecosystem",
    description:
      "All-in-one digital platform for HYP2003 hardware security tokens, legal eSign solutions, ITR filing, and GST compliance.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Venture | Secure Hardware & PKI Ecosystem",
    description:
      "FIPS 140-3 validated HYP2003 cryptographic tokens, eSign workflows, and automated tax solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F8FAFC] text-[#0F172A] antialiased`}>
        <Navbar />
        <main className="pt-16 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}