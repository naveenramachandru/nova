"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Award,
  CheckCircle2,
  FileCheck2,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

export default function TokenFipsPage() {
  return (
    <div className="pt-24 pb-20 bg-slate-50 text-slate-900 min-h-screen space-y-16">
      
      {/* SECTION 1: HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-slate-900 text-teal-400 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest border border-slate-800">
              <Award size={14} /> NIST Security Standard
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight">
              FIPS 140-3 Level 3 Cryptographic Security
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              FIPS 140-3 is the benchmark security standard established by NIST (National Institute of Standards and Technology). It defines strict tamper-resistance physical enclosure rules and cryptographic module protection for federal and enterprise PKI assets.
            </p>
          </motion.div>

          <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <Image
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80"
              alt="FIPS Cryptographic Module"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="text-[10px] font-bold uppercase text-teal-400">NIST Certified</span>
              <h3 className="text-lg font-bold">Government-Grade Tamper Physical Protection</h3>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FIPS LEVEL BREAKDOWN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">NIST Hierarchy</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Understanding FIPS 140-3 Security Levels</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { level: "Level 1", title: "Basic Security", desc: "Basic cryptographic algorithm testing. No physical protection requirements.", current: false },
            { level: "Level 2", title: "Tamper Evident", desc: "Requires tamper-evident coatings or seals over physical enclosures.", current: false },
            { level: "Level 3", title: "Tamper Resistant", desc: "Detects physical intrusion and immediately zeroes out private keys.", current: true },
            { level: "Level 4", title: "Environmental Protection", desc: "Protects against voltage and temperature environmental attacks.", current: false },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className={`p-6 rounded-2xl border space-y-2 ${
                item.current
                  ? "bg-slate-900 text-white border-teal-500 shadow-xl relative"
                  : "bg-white text-slate-900 border-slate-200"
              }`}
            >
              {item.current && (
                <span className="absolute -top-3 right-4 bg-teal-500 text-slate-950 text-[9px] font-black uppercase px-2.5 py-0.5 rounded-full">
                  HYP2003 Standard
                </span>
              )}
              <span className={`text-xs font-mono font-bold uppercase ${item.current ? "text-teal-400" : "text-teal-700"}`}>
                {item.level}
              </span>
              <h4 className="text-base font-bold">{item.title}</h4>
              <p className={`text-xs leading-relaxed ${item.current ? "text-slate-300" : "text-slate-600"}`}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 3: TAMPER RESPONSIVE MECHANISM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-md grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">Active Zeroization</span>
            <h2 className="text-3xl font-black text-slate-900">Automatic Key Destruction Upon Physical Attack</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              FIPS 140-3 Level 3 tokens feature physical anti-probing shields. If an unauthorized entity attempts to drill, micro-probe, or chemically de-cap the silicon enclosure, the token automatically erases all onboard private key material instantly.
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle2 size={16} className="text-teal-600" />
                <span>Hardened opaque epoxy resin potting</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle2 size={16} className="text-teal-600" />
                <span>Active voltage and power frequency sensing</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle2 size={16} className="text-teal-600" />
                <span>Zero key leakage across electrical noise side channels</span>
              </div>
            </div>
          </div>

          <div className="relative h-72 rounded-2xl overflow-hidden border border-slate-200">
            <Image
              src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80"
              alt="Crypto Module Zeroization"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: CCA INDIA COMPLIANCE MANDATE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-amber-50 border border-amber-200 rounded-3xl p-8 space-y-4 text-amber-950">
          <div className="flex items-center gap-2 font-bold text-sm text-amber-900">
            <AlertTriangle className="text-amber-600" size={20} />
            <span>Controller of Certifying Authorities (CCA) Regulatory Requirement</span>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed text-amber-900/80">
            In accordance with Indian IT Act guidelines, all Class 3 Digital Signature Certificates issued by CAs (such as Pantagon, eMudhra, Vsign, Capricorn) must strictly be downloaded onto FIPS validated hardware tokens to maintain legal validity across MCA and Income Tax filings.
          </p>
        </div>
      </section>

      {/* SECTION 5: CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <h3 className="text-2xl font-black text-slate-900">Equip Your Enterprise with FIPS 140-3 Hardware</h3>
        <Link
          href="/products/hyp2003"
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs rounded-xl shadow-lg transition"
        >
          <span>Order FIPS Certified Tokens</span>
          <ArrowRight size={14} />
        </Link>
      </section>

    </div>
  );
}