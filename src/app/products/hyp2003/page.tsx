"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Award,
  Globe2,
  TrendingUp,
  Users,
  CheckCircle2,
  ArrowLeft,
  Cpu,
  Lock,
  HardDrive,
  FileText,
} from "lucide-react";

export default function Hyp2003ProductPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-teal-50/20 to-blue-50/30 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Navigation back to homepage */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-teal-700 hover:text-teal-900 transition"
        >
          <ArrowLeft size={16} />
          Back to Nova Ecosystem
        </Link>

        {/* Header Title */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 bg-teal-100 border border-teal-200 text-teal-800 px-3 py-1 rounded-full text-xs font-bold">
            <ShieldCheck size={14} className="text-teal-600" />
            <span>Product #1 — Hardware Security Module</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900">
            HYPERPKI™ HYP2003 USB TOKEN
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl leading-relaxed">
            The staple cryptographic hardware token powering India's digital signature infrastructure. Certified CCA India approved and NIST FIPS 140-3 Level 3 validated[cite: 7].
          </p>
        </div>

        {/* Market Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <Award className="text-teal-600 mb-2" size={20} />
            <div className="text-xl font-black text-slate-900">2013</div>
            <div className="text-xs font-bold text-teal-700">Market Entry</div>
            <p className="text-[10px] text-slate-500 mt-1">Selling in India for 13+ years</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <TrendingUp className="text-teal-600 mb-2" size={20} />
            <div className="text-xl font-black text-slate-900">2,60,00,000+</div>
            <div className="text-xs font-bold text-teal-700">Sold in India</div>
            <p className="text-[10px] text-slate-500 mt-1">2.6 Crore+ active deployments</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <Globe2 className="text-blue-600 mb-2" size={20} />
            <div className="text-xl font-black text-slate-900">30 Million+</div>
            <div className="text-xs font-bold text-blue-700">Sold Globally</div>
            <p className="text-[10px] text-slate-500 mt-1">Global security scale</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <Users className="text-slate-700 mb-2" size={20} />
            <div className="text-xl font-black text-slate-900">60%+</div>
            <div className="text-xs font-bold text-slate-700">India Market Share</div>
            <p className="text-[10px] text-slate-500 mt-1">Used by majority of providers</p>
          </div>
        </div>

        {/* Datasheet Specifications Section */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <FileText className="text-teal-600" size={24} />
            <h2 className="text-xl font-bold text-slate-900">Datasheet & Technical Specifications</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Spec Table */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider text-teal-700">Hardware & Certification</h3>
              <table className="w-full text-xs text-left border-collapse">
                <tbody className="divide-y divide-slate-100">
                  <tr><td className="py-2.5 font-bold text-slate-700">Dimensions</td><td className="py-2.5 text-slate-600">53 × 16.5 × 8.5 mm[cite: 7]</td></tr>
                  <tr><td className="py-2.5 font-bold text-slate-700">Weight</td><td className="py-2.5 text-slate-600">6 grams[cite: 7]</td></tr>
                  <tr><td className="py-2.5 font-bold text-slate-700">FIPS Security Level</td><td className="py-2.5 text-slate-600">FIPS 140-3 Level 3 Validated[cite: 7]</td></tr>
                  <tr><td className="py-2.5 font-bold text-slate-700">Regulatory Approval</td><td className="py-2.5 text-slate-600">CCA India Approved, FCC/CE/ICES, RoHS/REACH[cite: 7]</td></tr>
                  <tr><td className="py-2.5 font-bold text-slate-700">Memory Space</td><td className="py-2.5 text-slate-600">64 KB for Digital Signing & Encryption[cite: 7]</td></tr>
                  <tr><td className="py-2.5 font-bold text-slate-700">Data Retention & Cycles</td><td className="py-2.5 text-slate-600">Min 10 years / 500,000 Read/Write Cycles[cite: 7]</td></tr>
                </tbody>
              </table>
            </div>

            {/* Cryptographic Support */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider text-blue-700">Crypto & Middleware API</h3>
              <table className="w-full text-xs text-left border-collapse">
                <tbody className="divide-y divide-slate-100">
                  <tr><td className="py-2.5 font-bold text-slate-700">Algorithms Supported</td><td className="py-2.5 text-slate-600">RSA 2048~4096, AES, SHA, ECDSA[cite: 7]</td></tr>
                  <tr><td className="py-2.5 font-bold text-slate-700">Hash Algorithms</td><td className="py-2.5 text-slate-600">SHA-256, SHA-384, SHA-512[cite: 7]</td></tr>
                  <tr><td className="py-2.5 font-bold text-slate-700">API Standards Support</td><td className="py-2.5 text-slate-600">Microsoft CAPI, CNG, PKCS#11 V2.20, Smart Card Minidriver, PC/SC, CCID[cite: 7]</td></tr>
                  <tr><td className="py-2.5 font-bold text-slate-700">Operating Systems</td><td className="py-2.5 text-slate-600">Windows, Linux, macOS[cite: 7]</td></tr>
                  <tr><td className="py-2.5 font-bold text-slate-700">Middleware Setup</td><td className="py-2.5 text-slate-600">Onboard auto-run partition for automatic middleware installation[cite: 7]</td></tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}