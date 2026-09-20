"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Lock,
  FileText,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export default function DscOverviewPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="space-y-20 pb-20 pt-4 bg-slate-50">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-950 text-white pt-16 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.15),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-center lg:text-left"
          >
            <span className="text-[10px] font-extrabold tracking-widest text-teal-400 uppercase bg-teal-500/10 border border-teal-500/30 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 backdrop-blur-md">
              <Sparkles size={12} /> Digital Signature Certificates
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
              Class 3 Digital Signature Certificate (DSC)
            </h1>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              High-assurance 2048-bit RSA cryptographic identities certified for MCA v3, e-Tendering, GST, and Income Tax portals under Controller of Certifying Authorities (CCA) guidelines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/dsc-apply"
                className="px-6 py-3.5 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-500 hover:to-teal-400 font-extrabold text-xs text-white rounded-xl shadow-lg shadow-blue-500/20 transition active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Apply Class 3 DSC</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-video rounded-3xl overflow-hidden border border-slate-800 shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80"
              alt="Class 3 Digital Signature"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* 2. VALUE PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-2 mb-10">
          <h2 className="text-xs font-bold text-teal-600 uppercase tracking-widest">Key Capabilities</h2>
          <p className="text-2xl font-black text-slate-900">Why Class 3 DSC is Required</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "2048-Bit RSA Key Pair", desc: "Dual keypairs generated on-chip for document signing and data encryption.", icon: ShieldCheck },
            { title: "Paperless eKYC Flow", desc: "Instant Aadhaar / PAN online verification completed within 15 minutes.", icon: Zap },
            { title: "Universal Portal Access", desc: "Native support across MCA21, e-Procurement, ICEGATE, and Trademarks.", icon: Lock },
          ].map((pillar, i) => (
            <motion.div key={i} whileHover={{ y: -4 }} className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
              <pillar.icon size={24} className="text-teal-600 mb-4" />
              <h3 className="text-base font-bold text-slate-900 mb-2">{pillar.title}</h3>
              <p className="text-xs text-slate-600">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. STEPPER WORKFLOW */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-2 mb-12">
            <h2 className="text-xs font-bold text-teal-400 uppercase tracking-widest">Issuance Process</h2>
            <p className="text-2xl font-black">4 Simple Steps to Get Issued</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Select Validity", desc: "Choose 1, 2, or 3-year certificate validity options." },
              { step: "02", title: "Verify eKYC", desc: "Enter Aadhaar or PAN details for automated online validation." },
              { step: "03", title: "Video Record", desc: "Complete a 30-second video recording on phone or desktop." },
              { step: "04", title: "Token Download", desc: "Download keys into your FIPS-compliant USB Token." },
            ].map((step, i) => (
              <div key={i} className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl space-y-2">
                <span className="text-2xl font-black text-teal-400 font-mono">{step.step}</span>
                <h4 className="text-sm font-bold">{step.title}</h4>
                <p className="text-xs text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TECHNICAL SPECIFICATIONS TABLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <h3 className="text-lg font-bold text-slate-900">Certificate Technical Specifications</h3>
          <table className="w-full text-left text-xs text-slate-600 border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-800 font-bold">
                <th className="p-3">Specification</th>
                <th className="p-3">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr><td className="p-3 font-semibold">Algorithm</td><td className="p-3">RSA 2048-bit / SHA-256</td></tr>
              <tr><td className="p-3 font-semibold">Class Type</td><td className="p-3">Class 3 (Individual / Organization)</td></tr>
              <tr><td className="p-3 font-semibold">Storage Hardware</td><td className="p-3">FIPS 140-2 / FIPS 140-3 Level 2 USB Token</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. USE CASES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-2 mb-10">
          <h2 className="text-xs font-bold text-teal-600 uppercase tracking-widest">Applications</h2>
          <p className="text-2xl font-black text-slate-900">Where Class 3 DSC is Required</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "MCA & Company Filings", desc: "Mandatory for directors submitting Form AOC-4, MGT-7, and ROC returns." },
            { title: "e-Procurement & Tenders", desc: "Required for encrypted bid submission on government tender platforms." },
            { title: "Income Tax & GST", desc: "Used by CAs and tax practitioners for audit reports and GSTR filings." },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-2">
              <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
              <p className="text-xs text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FAQ ACCORDION */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-xs font-bold text-teal-600 uppercase tracking-widest">Support FAQ</h2>
          <p className="text-2xl font-black text-slate-900">Frequently Asked Questions</p>
        </div>
        <div className="space-y-3">
          {[
            { q: "What is the difference between Signing and Encrypt DSC?", a: "Signing certificates establish digital identity and sign files. Encryption certificates encrypt tender bids before online submission." },
            { q: "How long does video verification take?", a: "Video verification takes under 1 minute by reading an on-screen prompt code." },
          ].map((faq, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full text-left p-4 flex justify-between items-center text-xs sm:text-sm font-bold text-slate-900"
              >
                <span>{faq.q}</span>
                <ChevronDown size={16} className={`transition-transform ${activeFaq === idx ? "rotate-180" : ""}`} />
              </button>
              {activeFaq === idx && (
                <div className="p-4 bg-slate-50 border-t border-slate-100 text-xs text-slate-600">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 7. CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black">Get Your Class 3 DSC Issued Now</h3>
            <p className="text-xs text-slate-400 mt-1">Instant online desk approval in less than 30 minutes.</p>
          </div>
          <Link
            href="/dsc-apply"
            className="px-6 py-3.5 bg-gradient-to-r from-blue-600 to-teal-500 font-bold text-xs rounded-xl shadow-md text-white"
          >
            Apply Certificate
          </Link>
        </div>
      </section>
    </div>
  );
}