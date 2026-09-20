"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileCode,
  CheckCircle2,
  Download,
  Folder,
  Monitor,
  ShieldCheck,
  Zap,
  Cpu,
  ArrowRight,
  Layers,
} from "lucide-react";

export default function DesktopSignerPage() {
  return (
    <div className="pt-24 pb-20 bg-slate-50 text-slate-900 min-h-screen space-y-16">
      
      {/* SECTION 1: HERO BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-800 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Monitor size={14} className="text-teal-600" />
              <span>Offline Enterprise Application</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight">
              High-Speed Offline Bulk PDF Signer Utility
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Batch-sign thousands of PDF documents (Invoices, Tax Reports, Purchase Orders, Certificates) locally on your desktop workstation without uploading confidential data to external cloud servers.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-lg transition flex items-center gap-2">
                <Download size={14} />
                <span>Download Desktop Signer (v4.2)</span>
              </button>
              <Link
                href="/page/signer-demo"
                className="px-6 py-3.5 bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 font-bold text-xs rounded-xl transition"
              >
                Request Enterprise License
              </Link>
            </div>
          </motion.div>

          <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
              alt="Desktop PDF Batch Signer Software"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="text-[10px] font-bold uppercase text-teal-400">Local Processing</span>
              <h3 className="text-lg font-bold">Process Up to 10,000 PDFs per Minute</h3>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CORE CAPABILITIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">Utility Capabilities</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Built for High-Volume Document Operations</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Folder,
              title: "Watched Folder Automation",
              desc: "Automatically detects newly generated PDFs in specified system directories and signs them instantly in the background.",
            },
            {
              icon: Layers,
              title: "Custom Visual Signature",
              desc: "Configure exact signature coordinates, page ranges, company logos, and custom text stamps.",
            },
            {
              icon: ShieldCheck,
              title: "100% Offline Data Privacy",
              desc: "All cryptographic operations happen directly on host RAM using USB tokens or PFX files.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <item.icon className="text-teal-600" size={28} />
              <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: STEP-BY-STEP WORKFLOW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-md space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-black text-slate-900">How Desktop Bulk Signer Works</h2>
            <p className="text-xs text-slate-600">Simplicity combined with enterprise-grade PKI security.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: "01", title: "Select Source Folder", desc: "Choose directory containing un-signed PDFs." },
              { step: "02", title: "Plug Hardware Token", desc: "Insert your HYP2003 or ePass USB token." },
              { step: "03", title: "Configure Layout", desc: "Set visual signature position on last page." },
              { step: "04", title: "Execute Batch", desc: "Batch process thousands of files with one click." },
            ].map((s, idx) => (
              <div key={idx} className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <span className="text-xl font-black text-teal-600 font-mono">{s.step}</span>
                <h4 className="text-sm font-bold text-slate-900">{s.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: SYSTEM REQUIREMENTS & COMPATIBILITY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">Compatibility</span>
            <h3 className="text-2xl sm:text-3xl font-black">Supported Operating Systems & Crypto Drivers</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Compatible with Windows 10/11, Windows Server 2019/2022, macOS, and Linux distributions. Native support for PKCS#11, MS CAPI, and CNG providers.
            </p>
            <div className="grid grid-cols-2 gap-3 text-xs text-slate-300 font-mono pt-2">
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-teal-400" /> Windows 64-bit</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-teal-400" /> macOS Sonoma / Ventura</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-teal-400" /> PKCS#11 / Token Support</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-teal-400" /> PFX / P12 Certificate Files</span>
            </div>
          </div>

          <div className="relative h-64 rounded-2xl overflow-hidden border border-slate-800">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
              alt="System Desktop Analytics"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION 5: FAQS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
        <h3 className="text-xl font-bold text-slate-900 text-center">Desktop Signer Frequently Asked Questions</h3>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600 shadow-sm">
          <span className="font-bold text-slate-900 block text-sm">Is internet required for signing PDFs using the desktop app?</span>
          <p>No. Internet connection is only required if you enable remote Timestamping (TSA) or OCSP revocation checks. Local cryptographic signing works entirely offline.</p>
        </div>
      </section>

      {/* SECTION 6: CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-4">
          <h3 className="text-2xl font-black">Start Your 14-Day Free Enterprise Trial</h3>
          <p className="text-xs sm:text-sm text-teal-100 max-w-xl mx-auto">Download Desktop Signer today and evaluate watched folder batch signing with full features.</p>
          <button className="px-6 py-3 bg-white text-slate-900 font-bold text-xs rounded-xl shadow-md hover:bg-slate-100 transition">
            Download Desktop Installer
          </button>
        </div>
      </section>

    </div>
  );
}