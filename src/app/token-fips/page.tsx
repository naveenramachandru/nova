"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Lock, Cpu, Shield, Download, CheckCircle2, ChevronDown } from "lucide-react";

export default function TokenFipsPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="space-y-20 pb-20 pt-4 bg-slate-50">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-950 text-white pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-[10px] font-extrabold text-teal-400 bg-teal-500/10 border border-teal-500/30 px-3.5 py-1.5 rounded-full inline-block">
              Hardware Security Modules
            </span>
            <h1 className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              FIPS 140-3 Cryptographic USB Tokens
            </h1>
            <p className="text-sm text-slate-400 leading-relaxed">
              Tamper-evident hardware security tokens engineered for non-extractable private key storage and zero-trust identity authentication.
            </p>
          </div>

          <div className="relative aspect-video rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80"
              alt="FIPS Security Token"
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
          { title: "Non-Extractable Keys", desc: "Private keys generated inside token memory can never be read or duplicated.", icon: Lock },
          { title: "Cross-OS Compatibility", desc: "Native middleware support for Windows 11, macOS, and Linux.", icon: Cpu },
          { title: "Rugged Casing", desc: "Shockproof, water-resistant housing rated for over 100,000 insertion cycles.", icon: Shield },
        ].map((p, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <p.icon className="text-teal-600 mb-3" size={22} />
            <h3 className="text-sm font-bold text-slate-900 mb-1">{p.title}</h3>
            <p className="text-xs text-slate-600">{p.desc}</p>
          </div>
        ))}
      </section>

      {/* 3. STEPPER */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-black text-center mb-10">Hardware Setup Guide</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Plug Token", desc: "Insert USB token into any standard USB-A/USB-C port." },
              { step: "02", title: "Run Middleware", desc: "Auto-run PKCS#11 driver installer." },
              { step: "03", title: "Configure PIN", desc: "Set User PIN to unlock cryptographic vault." },
              { step: "04", title: "Execute Sign", desc: "Sign documents inside Adobe PDF or browser portals." },
            ].map((s, i) => (
              <div key={i} className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                <span className="text-xl font-bold text-teal-400 font-mono">{s.step}</span>
                <h4 className="text-xs font-bold text-white mt-2">{s.title}</h4>
                <p className="text-[11px] text-slate-400 mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TECHNICAL TABLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
          <h3 className="text-base font-bold text-slate-900 mb-4">Token Hardware Specifications</h3>
          <table className="w-full text-left text-xs text-slate-600">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-800">
              <tr><th className="p-3">Feature</th><th className="p-3">Specification</th></tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr><td className="p-3 font-semibold">Standard</td><td className="p-3">FIPS 140-2 / FIPS 140-3 Level 2</td></tr>
              <tr><td className="p-3 font-semibold">EEPROM Memory</td><td className="p-3">64 KB High Security Memory</td></tr>
              <tr><td className="p-3 font-semibold">API Support</td><td className="p-3">PKCS#11 v2.20, MS-CAPI, CNG</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. USE CASES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Treasury Operations", desc: "Multi-factor hardware key authorization for corporate banking portals." },
          { title: "Customs Documentation", desc: "High-volume signing on ICEGATE customs export portals." },
          { title: "Enterprise IT Security", desc: "Hardware token credentials for zero-trust network authentication." },
        ].map((uc, i) => (
          <div key={i} className="bg-white border border-slate-200 p-6 rounded-2xl">
            <h4 className="text-xs font-bold text-slate-900 mb-1">{uc.title}</h4>
            <p className="text-xs text-slate-600">{uc.desc}</p>
          </div>
        ))}
      </section>

      {/* 6. FAQ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 space-y-3">
        <h2 className="text-xl font-black text-center mb-6">Hardware FAQs</h2>
        {[
          { q: "What happens if User PIN is locked?", a: "The token can be unlocked using the Admin PIN provided with your token documentation." },
          { q: "Can keys be copied off the token?", a: "No. Cryptographic keys remain permanently locked inside hardware chip memory." },
        ].map((faq, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-4">
            <button onClick={() => setActiveFaq(activeFaq === idx ? null : idx)} className="w-full text-left font-bold text-xs flex justify-between">
              <span>{faq.q}</span>
              <ChevronDown size={14} />
            </button>
            {activeFaq === idx && <p className="text-xs text-slate-600 mt-2 border-t pt-2">{faq.a}</p>}
          </div>
        ))}
      </section>

      {/* 7. CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-950 p-8 rounded-3xl text-white flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold">Order Bulk Hardware Tokens</h3>
            <p className="text-xs text-slate-400">Discounted tier pricing for enterprise deployments.</p>
          </div>
          <Link href="/token-bulk" className="px-5 py-3 bg-teal-500 font-bold text-xs rounded-xl text-slate-950">
            Request Bulk Quote
          </Link>
        </div>
      </section>
    </div>
  );
}