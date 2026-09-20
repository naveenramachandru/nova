"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileCheck2,
  Zap,
  Lock,
  Download,
  ChevronDown,
  CheckCircle2,
  Sparkles,
  Layers,
  ShieldCheck,
} from "lucide-react";

export default function SignDesktopPage() {
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
              <Sparkles size={12} /> Desktop Signing Tools
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
              Automated Batch PDF Desktop Signer
            </h1>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Batch sign thousands of PDF invoices, Form 16s, and corporate contracts locally on your workstation using USB Hardware Tokens without cloud document uploads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-6 py-3.5 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-500 hover:to-teal-400 font-extrabold text-xs text-white rounded-xl shadow-lg shadow-blue-500/20 transition active:scale-95 flex items-center justify-center gap-2">
                <Download size={14} />
                <span>Download Desktop Signer</span>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-video rounded-3xl overflow-hidden border border-slate-800 shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80"
              alt="Desktop PDF Signing Software"
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
          <p className="text-2xl font-black text-slate-900">Why Use Local Desktop Signing</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Zero Cloud Data Transmission", desc: "Your PDF documents never leave your local computer environment, ensuring 100% data privacy.", icon: Lock },
            { title: "High-Speed Batch Engine", desc: "Cryptographically sign over 1,000 PDF invoices or reports per minute with custom signature placement.", icon: Zap },
            { title: "Visual Signature Customizer", desc: "Embed company logos, signature timestamps, location data, and custom reasons onto PDFs.", icon: FileCheck2 },
          ].map((p, i) => (
            <motion.div key={i} whileHover={{ y: -4 }} className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
              <p.icon size={24} className="text-teal-600 mb-4" />
              <h3 className="text-base font-bold text-slate-900 mb-2">{p.title}</h3>
              <p className="text-xs text-slate-600">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. STEPPER WORKFLOW */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-2 mb-12">
            <h2 className="text-xs font-bold text-teal-400 uppercase tracking-widest">Operation Workflow</h2>
            <p className="text-2xl font-black">4 Steps to Batch Sign PDFs</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Select Source Folder", desc: "Select the folder containing thousands of un-signed PDF files." },
              { step: "02", title: "Connect USB Token", desc: "Plug in your FIPS 140-2/3 USB token and enter your User PIN." },
              { step: "03", title: "Position Stamp", desc: "Set visual signature dimensions and coordinate positions on pages." },
              { step: "04", title: "Execute Batch Sign", desc: "Click start to automatically sign all PDFs into an output folder." },
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
          <h3 className="text-lg font-bold text-slate-900">Software Compatibility & Features</h3>
          <table className="w-full text-left text-xs text-slate-600 border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-800 font-bold">
                <th className="p-3">Specification</th>
                <th className="p-3">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr><td className="p-3 font-semibold">Operating Systems</td><td className="p-3">Windows 10, Windows 11, macOS, Ubuntu Linux</td></tr>
              <tr><td className="p-3 font-semibold">Token Compatibility</td><td className="p-3">HYP2003, ePass2003, ProxKey, WatchData, PKCS#11 Standards</td></tr>
              <tr><td className="p-3 font-semibold">Signing Throughput</td><td className="p-3">Up to 2,500 PDFs / Minute (Hardware Dependent)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. USE CASES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-2 mb-10">
          <h2 className="text-xs font-bold text-teal-600 uppercase tracking-widest">Applications</h2>
          <p className="text-2xl font-black text-slate-900">Ideal Document Workflows</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Tax Audit Reports", desc: "Sign Form 16, Form 3CD, and financial statements in bulk." },
            { title: "Corporate Invoicing", desc: "Automate digital signatures on GST-compliant sales invoices." },
            { title: "HR Purchase Orders", desc: "Stamp HR letters, NDAs, and vendor contracts instantly." },
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
            { q: "Do my documents upload to a server?", a: "No. The software works completely offline on your computer. Your files remain on your local disk." },
            { q: "Is Adobe Reader required to view signed files?", a: "No. Signed files are standard Adobe-compliant PDF signatures readable on any viewer." },
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
            <h3 className="text-2xl font-black">Try Desktop PDF Signer Today</h3>
            <p className="text-xs text-slate-400 mt-1">Download a free 14-day full feature trial version.</p>
          </div>
          <button className="px-6 py-3.5 bg-gradient-to-r from-blue-600 to-teal-500 font-bold text-xs rounded-xl shadow-md text-white">
            Get Trial Download
          </button>
        </div>
      </section>
    </div>
  );
}