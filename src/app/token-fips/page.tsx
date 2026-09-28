"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Lock, Cpu, Shield, Download, CheckCircle2, ChevronDown } from "lucide-react";

// Note: In Next.js App Router, metadata exports must be placed in a server layout/page or handled via generateMetadata. 
// Below is the complete component structured for optimal SEO and client rendering.

export default function TokenFipsPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="space-y-20 pb-20 pt-4 bg-slate-50 text-slate-900">
      
      {/* JSON-LD Structured Data for FIPS Hardware Token Product */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "FIPS 140-3 Cryptographic USB Token",
            "image": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
            "description": "Tamper-evident hardware security tokens engineered for non-extractable private key storage and zero-trust identity authentication.",
            "brand": {
              "@type": "Brand",
              "name": "Nova Venture"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "INR",
              "lowPrice": "999",
              "highPrice": "2499",
              "offerCount": "5"
            }
          })
        }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-950 text-white pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-[10px] font-extrabold text-teal-400 bg-teal-500/10 border border-teal-500/30 px-3.5 py-1.5 rounded-full inline-block">
              Hardware Security Modules & USB Tokens
            </span>
            <h1 className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent tracking-tight">
              FIPS 140-3 Cryptographic USB Tokens & DSC Hardware
            </h1>
            <p className="text-sm text-slate-400 leading-relaxed">
              Tamper-evident hardware security tokens engineered for non-extractable private key storage, Class 3 digital signature certificates, and zero-trust identity authentication.
            </p>
          </div>

          <div className="relative aspect-video rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80"
              alt="FIPS Security Token and Hardware Cryptographic Key"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* 2. PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Non-Extractable Keys", desc: "Private keys generated inside token memory can never be read, exported, or duplicated.", icon: Lock },
          { title: "Cross-OS Compatibility", desc: "Native middleware and PKCS#11 support for Windows 11, macOS, and Linux platforms.", icon: Cpu },
          { title: "Rugged Casing", desc: "Shockproof, water-resistant housing rated for over 100,000 insertion cycles.", icon: Shield },
        ].map((p, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <p.icon className="text-teal-600 mb-3" size={22} />
            <h3 className="text-sm font-bold text-slate-900 mb-1">{p.title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </section>

      {/* 3. STEPPER */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 space-y-2">
            <span className="text-[10px] uppercase tracking-widest text-teal-400 font-mono font-bold">Quick Guide</span>
            <h2 className="text-2xl sm:text-3xl font-black">Hardware Setup & Installation Guide</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Plug Token", desc: "Insert USB token into any standard USB-A or USB-C port." },
              { step: "02", title: "Run Middleware", desc: "Auto-run PKCS#11 driver and security middleware installer." },
              { step: "03", title: "Configure PIN", desc: "Set secure User PIN to unlock your cryptographic certificate vault." },
              { step: "04", title: "Execute Sign", desc: "Sign tax documents, PDF contracts, or portal forms securely." },
            ].map((s, i) => (
              <div key={i} className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                <span className="text-xl font-bold text-teal-400 font-mono">{s.step}</span>
                <h3 className="text-xs font-bold text-white mt-2">{s.title}</h3>
                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TECHNICAL TABLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-[10px] uppercase font-bold tracking-widest text-teal-700">Datasheet Specifications</span>
            <h3 className="text-lg font-black text-slate-900 mt-1">Token Hardware Technical Parameters</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-600">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-800 font-bold">
                <tr><th className="p-3">Specification Parameter</th><th className="p-3">Technical Value</th></tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr><td className="p-3 font-semibold text-slate-900">Security Standard</td><td className="p-3">FIPS 140-2 / FIPS 140-3 Level 2 & Level 3 Validated</td></tr>
                <tr><td className="p-3 font-semibold text-slate-900">EEPROM Memory</td><td className="p-3">64 KB High Security Flash Memory for Certificates</td></tr>
                <tr><td className="p-3 font-semibold text-slate-900">Cryptographic Algorithms</td><td className="p-3">RSA 2048/4096-bit, AES, SHA-256, ECC</td></tr>
                <tr><td className="p-3 font-semibold text-slate-900">API Support & Middleware</td><td className="p-3">PKCS#11 v2.20, MS-CAPI, CNG, PC/SC, CCID</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. USE CASES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 space-y-2">
          <span className="text-[10px] uppercase tracking-widest text-teal-700 font-bold">Applications</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Enterprise Use Cases & Deployments</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Treasury Operations", desc: "Multi-factor hardware key authorization for corporate banking portals and fund transfers." },
            { title: "Customs Documentation", desc: "High-volume digital signing on ICEGATE customs export portals and trade networks." },
            { title: "Enterprise IT Security", desc: "Hardware token credentials for zero-trust network access and server authentication." },
          ].map((uc, i) => (
            <div key={i} className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 mb-1">{uc.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{uc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 space-y-3">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-black text-slate-900">Hardware Token FAQs</h2>
        </div>
        {[
          { q: "What happens if the token User PIN gets locked?", a: "The token can be unlocked using the secure Admin / Super Administrator PIN provided with your hardware documentation package." },
          { q: "Can cryptographic private keys be copied off the token?", a: "No. Private keys are generated within the secure onboard chip and remain permanently locked with zero extractability." },
        ].map((faq, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm">
            <button 
              onClick={() => setActiveFaq(activeFaq === idx ? null : idx)} 
              className="w-full text-left font-bold text-xs sm:text-sm text-slate-900 flex justify-between items-center"
            >
              <span>{faq.q}</span>
              <ChevronDown size={16} className={`transition-transform duration-300 ${activeFaq === idx ? "rotate-180 text-teal-600" : ""}`} />
            </button>
            {activeFaq === idx && (
              <p className="text-xs text-slate-600 mt-3 pt-3 border-t border-slate-100 leading-relaxed">
                {faq.a}
              </p>
            )}
          </div>
        ))}
      </section>

      {/* 7. CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-950 p-8 sm:p-12 rounded-3xl text-white flex flex-col sm:flex-row justify-between items-center gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-black">Order Bulk Hardware Security Tokens</h3>
            <p className="text-xs text-slate-400">Discounted tier pricing available for CA firms, banks, and enterprise deployments.</p>
          </div>
          <Link 
            href="/token-bulk" 
            className="px-6 py-3.5 bg-teal-400 hover:bg-teal-300 font-bold text-xs rounded-xl text-slate-950 transition shrink-0 shadow-lg shadow-teal-400/20"
          >
            Request Bulk Quote
          </Link>
        </div>
      </section>

    </div>
  );
}