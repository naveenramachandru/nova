"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Check,
  X,
  ShieldCheck,
  Cpu,
  ArrowRight,
  HardDrive,
  Award,
  HelpCircle,
} from "lucide-react";

export default function TokenComparePage() {
  const [selectedBrand, setSelectedBrand] = useState<string>("all");

  return (
    <div className="pt-24 pb-20 bg-slate-50 text-slate-900 min-h-screen space-y-16">
      
      {/* SECTION 1: HERO HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <span className="text-xs font-extrabold uppercase tracking-widest text-teal-700 bg-teal-100 px-3 py-1 rounded-full">
          Hardware Evaluation Matrix
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900">
          USB Hardware Token Comparison
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
          Compare specifications, security certifications, memory capacities, and operating system support across top hardware token models.
        </p>
      </section>

      {/* SECTION 2: COMPARISON MATRIX TABLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-slate-200 rounded-3xl shadow-xl overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                <th className="p-5 font-extrabold">Feature / Spec</th>
                <th className="p-5 font-extrabold text-teal-400">HYP2003 (HyperPKI)</th>
                <th className="p-5 font-extrabold">ePass2003 Auto</th>
                <th className="p-5 font-extrabold">ProxKey Watchdata</th>
              </tr>
            </thead>
            <tbody className="text-xs text-slate-700 divide-y divide-slate-100 font-medium">
              <tr>
                <td className="p-5 font-bold text-slate-900">FIPS Security Standard</td>
                <td className="p-5 text-teal-700 font-bold bg-teal-50/50">FIPS 140-3 Level 3</td>
                <td className="p-5">FIPS 140-2 Level 3</td>
                <td className="p-5">FIPS 140-2 Level 3</td>
              </tr>
              <tr>
                <td className="p-5 font-bold text-slate-900">Memory EEPROM Capacity</td>
                <td className="p-5 text-teal-700 font-bold bg-teal-50/50">64 KB / 128 KB</td>
                <td className="p-5">64 KB</td>
                <td className="p-5">64 KB</td>
              </tr>
              <tr>
                <td className="p-5 font-bold text-slate-900">CCA India Approved</td>
                <td className="p-5 bg-teal-50/50"><Check className="text-emerald-600" size={18} /></td>
                <td className="p-5"><Check className="text-emerald-600" size={18} /></td>
                <td className="p-5"><Check className="text-emerald-600" size={18} /></td>
              </tr>
              <tr>
                <td className="p-5 font-bold text-slate-900">RSA Key Lengths</td>
                <td className="p-5 font-mono bg-teal-50/50">2048, 3072, 4096 bit</td>
                <td className="p-5 font-mono">2048 bit</td>
                <td className="p-5 font-mono">2048 bit</td>
              </tr>
              <tr>
                <td className="p-5 font-bold text-slate-900">Auto Driver Partition</td>
                <td className="p-5 bg-teal-50/50"><Check className="text-emerald-600" size={18} /> (Plug & Play)</td>
                <td className="p-5"><Check className="text-emerald-600" size={18} /></td>
                <td className="p-5"><Check className="text-emerald-600" size={18} /></td>
              </tr>
              <tr>
                <td className="p-5 font-bold text-slate-900">Operating System Support</td>
                <td className="p-5 bg-teal-50/50">Windows, macOS, Linux</td>
                <td className="p-5">Windows, macOS, Linux</td>
                <td className="p-5">Windows, macOS, Linux</td>
              </tr>
              <tr>
                <td className="p-5 font-bold text-slate-900">Indian Market Deployment</td>
                <td className="p-5 font-bold text-teal-800 bg-teal-50/50">2.6 Crore+ Units</td>
                <td className="p-5">1.5 Crore+ Units</td>
                <td className="p-5">1.0 Crore+ Units</td>
              </tr>
              <tr>
                <td className="p-5 font-bold text-slate-900">Action Link</td>
                <td className="p-5 bg-teal-50/50">
                  <Link href="/products/hyp2003" className="px-3 py-1.5 bg-teal-600 text-white rounded-lg font-bold text-[11px] hover:bg-teal-500 transition inline-block">
                    Buy HYP2003
                  </Link>
                </td>
                <td className="p-5">
                  <Link href="/page/token-brands" className="px-3 py-1.5 bg-slate-900 text-white rounded-lg font-bold text-[11px] hover:bg-slate-800 transition inline-block">
                    View Model
                  </Link>
                </td>
                <td className="p-5">
                  <Link href="/page/token-brands" className="px-3 py-1.5 bg-slate-900 text-white rounded-lg font-bold text-[11px] hover:bg-slate-800 transition inline-block">
                    View Model
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 3: HIGHLIGHTED WINNER CARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-slate-900 to-teal-950 text-white p-8 sm:p-10 rounded-3xl shadow-xl grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2 space-y-4">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-teal-400 bg-teal-900/60 px-3 py-1 rounded-full border border-teal-700">
              Industry Standard Champion
            </span>
            <h3 className="text-2xl sm:text-3xl font-black">HYP2003 Leads Indian PKI Infrastructure</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              With FIPS 140-3 Level 3 validation and over 60% market share in India, HYP2003 offers unmatched reliability, fastest signature generation cycles, and native driver installation across macOS and Windows.
            </p>
          </div>
          <div className="text-center md:text-right">
            <Link
              href="/products/hyp2003"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg transition"
            >
              <span>View HYP2003 Product Page</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: BUYING GUIDANCE ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-black text-slate-900">How to Choose the Right Token Model</h2>
          <p className="text-xs text-slate-600">Consider these key factors before making your enterprise purchase decision.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2 shadow-sm">
            <ShieldCheck className="text-teal-600" size={24} />
            <h4 className="text-sm font-bold text-slate-900">Portal Compatibility</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Ensure your token is listed on the official approved vendor list for MCA, Income Tax, and e-Procurement portals.
            </p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2 shadow-sm">
            <Cpu className="text-teal-600" size={24} />
            <h4 className="text-sm font-bold text-slate-900">Certification Standard</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              FIPS 140-3 Level 3 is the newest government benchmark replacing older FIPS 140-2 tokens for enhanced tamper security.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: FAQs & SUPPORT */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-lg font-bold text-slate-900">Can I transfer my existing certificate from ePass to HYP2003?</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Private keys stored in tokens are non-extractable. To switch hardware models, your Certifying Authority (CA) must issue a fresh certificate or process a token replacement re-issuance.
          </p>
        </div>
      </section>

    </div>
  );
}