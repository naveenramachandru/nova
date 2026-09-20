"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  Cloud,
  Lock,
  CheckCircle2,
  Key,
  ShieldCheck,
  ArrowRight,
  Server,
} from "lucide-react";

export default function WebCloudSignerPage() {
  return (
    <div className="pt-24 pb-20 bg-slate-50 text-slate-900 min-h-screen space-y-16">
      
      {/* SECTION 1: HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Cloud size={14} className="text-blue-600" />
              <span>Browser-Native Cloud PKI</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight">
              Web-Based Cloud Digital Signing Solution
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Sign documents inside Google Chrome, Microsoft Edge, or Safari without installing complex local software or Java applets. Bridges web browsers seamlessly to USB hardware tokens or Cloud HSMs.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/page/signer-demo"
                className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-lg transition flex items-center gap-2"
              >
                <span>Launch Web Signer Portal</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

          <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <Image
              src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80"
              alt="Cloud PKI Signer Infrastructure"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: FEATURES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">Platform Features</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Zero-Footprint Web Architecture</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Globe,
              title: "Cross-Browser Native",
              desc: "Works natively in Chrome, Firefox, Edge, and Safari using WebCrypto APIs.",
            },
            {
              icon: Key,
              title: "Hardware Token & HSM Bridge",
              desc: "Connects local USB tokens or remote HSM modules directly to web forms.",
            },
            {
              icon: Server,
              title: "Centralized Remote Key Store",
              desc: "Store corporate signing keys in cloud HSMs with strict role-based access control.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <item.icon className="text-blue-600" size={28} />
              <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: ARCHITECTURE COMPARISON */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl">
          <h3 className="text-xl font-black text-slate-900 text-center mb-6">Legacy vs. Cloud Web Signer</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-red-50/50 rounded-2xl border border-red-100 space-y-2">
              <span className="text-xs font-bold text-red-600 uppercase">Old Legacy Signers</span>
              <ul className="text-xs text-slate-600 space-y-2 pt-2">
                <li>• Requires NPAPI / Java Applets (Deprecated in modern browsers)</li>
                <li>• Constant browser crash errors and security block warnings</li>
                <li>• Slow installation requiring administrative privileges</li>
              </ul>
            </div>
            <div className="p-6 bg-emerald-50/50 rounded-2xl border border-emerald-100 space-y-2">
              <span className="text-xs font-bold text-emerald-600 uppercase">Nova Web Cloud Signer</span>
              <ul className="text-xs text-slate-600 space-y-2 pt-2">
                <li>• 100% WebCrypto & REST microservice architecture</li>
                <li>• Instant loading without browser plugins or extensions</li>
                <li>• High performance parallel document hash signing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: SECURITY CERTIFICATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 text-center space-y-4">
          <ShieldCheck className="mx-auto text-blue-400" size={36} />
          <h3 className="text-2xl font-black">Bank-Grade Cloud Encryption</h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            All document hashes are encrypted in transit using TLS 1.3 and signed inside FIPS 140-2 Level 3 hardware security modules.
          </p>
        </div>
      </section>

    </div>
  );
}