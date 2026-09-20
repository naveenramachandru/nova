"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Cpu,
  Lock,
  HardDrive,
  KeyRound,
  CheckCircle2,
  ArrowRight,
  Zap,
  Layers,
  Award,
} from "lucide-react";

export default function TokenOverviewPage() {
  return (
    <div className="pt-24 pb-20 bg-slate-50 text-slate-900 min-h-screen space-y-20">
      
      {/* SECTION 1: HERO BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-teal-100 border border-teal-200 text-teal-800 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <ShieldCheck size={14} className="text-teal-600" />
              <span>Cryptographic Token Technology</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
              Hardware Security Modules Built for PKI Ecosystems
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              USB Hardware Tokens serve as tamper-proof cryptographic smart cards equipped with high-speed microcontrollers. Designed to generate, store, and execute digital signature private keys without exposing them to host operating systems.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/page/token-brands"
                className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-lg transition flex items-center gap-2"
              >
                <span>Browse Token Catalog</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/page/token-compare"
                className="px-6 py-3.5 bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 font-bold text-xs rounded-xl transition"
              >
                Compare Models
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group"
          >
            <Image
              src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80"
              alt="USB Hardware Token Security"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="text-[10px] uppercase font-bold text-teal-400 bg-teal-950/80 px-2 py-0.5 rounded border border-teal-800">
                CCA Approved
              </span>
              <h3 className="text-lg font-bold">Tamper-Evident Cryptographic Architecture</h3>
              <p className="text-xs text-slate-300">Non-extractable key pairs stored inside high-security EEPROM silicon.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: KEY PILLARS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">Architectural Pillars</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Why Hardware Tokens are Essential</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Cpu,
              title: "Onboard Key Generation",
              desc: "Cryptographic keys (RSA 2048/4096 & ECDSA) are computed directly inside the chip processor. Private keys never leave the hardware.",
            },
            {
              icon: Lock,
              title: "Zero Extractability",
              desc: "Protected against memory dump attacks, reverse engineering, and malware extraction. Private key memory cannot be copied.",
            },
            {
              icon: ShieldCheck,
              title: "PIN-Protected Access",
              desc: "Two-factor authentication model requiring physical possession of the token along with user PIN verification.",
            },
          ].map((pillar, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3"
            >
              <pillar.icon className="text-teal-600" size={28} />
              <h3 className="text-lg font-bold text-slate-900">{pillar.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 3: DEEP TECH SPECIFICATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">Hardware Architecture</span>
            <h2 className="text-3xl font-black">Silicon Specifications & Cryptographic Speed</h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Equipped with 32-bit secure microcontrollers and dedicated crypto accelerators, Nova hardware tokens execute thousands of signing requests daily across government, corporate, and banking portals.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700">
                <span className="text-[10px] text-teal-400 font-bold uppercase">Memory Size</span>
                <div className="text-xl font-black font-mono">64 KB - 128 KB</div>
              </div>
              <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700">
                <span className="text-[10px] text-teal-400 font-bold uppercase">Data Retention</span>
                <div className="text-xl font-black font-mono">10+ Years</div>
              </div>
              <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700">
                <span className="text-[10px] text-teal-400 font-bold uppercase">Erase Cycles</span>
                <div className="text-xl font-black font-mono">500,000+</div>
              </div>
              <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700">
                <span className="text-[10px] text-teal-400 font-bold uppercase">Operating Temp</span>
                <div className="text-xl font-black font-mono">-20°C to 85°C</div>
              </div>
            </div>
          </div>

          <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-slate-800">
            <Image
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
              alt="Crypto Silicon Microchip"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: USE CASES & COMPATIBILITY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">Application Scope</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Supported Portals & Industry Standards</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { name: "MCA / ROC Portal", desc: "Company incorporated filings" },
            { name: "e-Procurement / GeM", desc: "Government tender submissions" },
            { name: "Income Tax & GST", desc: "Returns e-Verification" },
            { name: "Icegate & DGFT", desc: "Import export documentation" },
            { name: "EPFO Portal", desc: "Employee Provident Fund authorization" },
            { name: "Banking & SWIFT", desc: "High-value fund transfers" },
            { name: "PDF Document Signer", desc: "Bulk enterprise contracts" },
            { name: "Trademark Registration", desc: "IP filing security" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1"
            >
              <CheckCircle2 className="text-teal-600 mb-1" size={18} />
              <h4 className="text-xs font-bold text-slate-900">{item.name}</h4>
              <p className="text-[11px] text-slate-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 5: HOW TO SET UP STEPS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-black text-slate-900">3-Step Hardware Setup</h2>
            <p className="text-xs text-slate-600">Get your USB token ready for signing in under 2 minutes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <span className="text-2xl font-black text-teal-600 font-mono">01</span>
              <h3 className="text-sm font-bold text-slate-900">Plug & Auto Mount</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connect the USB token to any Windows, macOS, or Linux port. The virtual driver installer mounts automatically.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <span className="text-2xl font-black text-teal-600 font-mono">02</span>
              <h3 className="text-sm font-bold text-slate-900">Install Middleware Driver</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Run the middleware setup to register PKCS#11 and MS CAPI/CNG crypto providers into your system.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <span className="text-2xl font-black text-teal-600 font-mono">03</span>
              <h3 className="text-sm font-bold text-slate-900">Enter User PIN & Sign</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Enter your security PIN when prompted by Chrome, Adobe Reader, or government portals to authorize signatures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-teal-600 via-blue-600 to-slate-900 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1">
            <h3 className="text-2xl sm:text-3xl font-black">Need Bulk Hardware Tokens for Your Team?</h3>
            <p className="text-xs sm:text-sm text-teal-100">Get discounted pricing, custom branding, and corporate support.</p>
          </div>
          <Link
            href="/page/token-bulk"
            className="px-6 py-3.5 bg-white text-slate-900 font-bold text-xs rounded-xl shadow-md hover:bg-slate-100 transition shrink-0"
          >
            Request Corporate Quote
          </Link>
        </div>
      </section>

    </div>
  );
}