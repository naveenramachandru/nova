"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Cpu, Code2, Terminal, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

export default function OemTechPartnersPage() {
  return (
    <div className="pt-24 pb-20 bg-gradient-to-b from-indigo-50/50 via-slate-50 to-sky-50/40 text-slate-800 min-h-screen space-y-20 overflow-hidden">
      
      {/* SECTION 1: HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-indigo-100 border border-indigo-200 text-indigo-800 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-sm">
              <Cpu size={14} />
              <span>Embed PKI Infrastructure</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-tight">
              OEM & Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-600">Partner Program</span>
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Integrate certified eSign gateways, cryptographic token drivers, and HSM signing engines directly into your SaaS platforms and ERP enterprise products.
            </p>
            <Link href="#apply" className="inline-flex items-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-lg shadow-indigo-200 transition">
              <span>Request Developer SDK</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
            <Image src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80" alt="OEM Tech Team" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* SECTION 2: TECH STACK CAPABILITIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">White-Label Integration</span>
          <h2 className="text-3xl font-black text-slate-900">Built for Software Developers</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 hover:border-indigo-300 transition">
            <Code2 className="text-indigo-600" size={28} />
            <h3 className="text-lg font-bold text-slate-900">White-Label RESTful APIs</h3>
            <p className="text-xs text-slate-500">Embed document signing and hash verification directly inside your own application UI.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 hover:border-indigo-300 transition">
            <Terminal className="text-indigo-600" size={28} />
            <h3 className="text-lg font-bold text-slate-900">Cross-Platform SDKs</h3>
            <p className="text-xs text-slate-500">Ready-to-use SDKs for Node.js, Python, Java, Flutter, and .NET environments.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 hover:border-indigo-300 transition">
            <ShieldCheck className="text-indigo-600" size={28} />
            <h3 className="text-lg font-bold text-slate-900">Hardware HSM Integration</h3>
            <p className="text-xs text-slate-500">Connect directly to high-throughput cloud HSMs for high-volume automated document sealing.</p>
          </div>
        </div>
      </section>

      {/* SECTION 3: CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6" id="apply">
        <div className="bg-gradient-to-r from-indigo-900 via-slate-900 to-sky-950 border border-indigo-800/30 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl text-white">
          <h2 className="text-3xl font-black">Ready to Embed Our PKI Engine?</h2>
          <p className="text-xs text-indigo-100 max-w-lg mx-auto">Get sandbox API keys and full technical documentation in minutes.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-indigo-500 hover:bg-indigo-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg transition">
            Access Developer Portal
          </Link>
        </div>
      </section>
    </div>
  );
}