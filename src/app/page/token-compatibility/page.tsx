"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Monitor, HardDrive, CheckCircle2, ShieldAlert } from "lucide-react";

export default function TokenCompatibilityPage() {
  const [selectedOs, setSelectedOs] = useState<"win" | "mac" | "linux">("win");

  return (
    <div className="pt-24 pb-20 bg-slate-50 text-slate-900 min-h-screen space-y-16">
      
      {/* SECTION 1: DRIVER DOWNLOAD HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-teal-100 px-3 py-1 rounded-full">
          Middleware & Downloads
        </span>
        <h1 className="text-4xl font-black text-slate-900">Token Drivers & Utility Software</h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
          Download certified middleware drivers, PKCS#11 modules, and diagnostics utilities for HYP2003, ePass2003, and ProxKey hardware.
        </p>
      </section>

      {/* SECTION 2: OS TAB DRIVER SELECTOR */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex justify-center gap-3 border-b border-slate-100 pb-4">
            <button
              onClick={() => setSelectedOs("win")}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition ${
                selectedOs === "win" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600"
              }`}
            >
              <Monitor size={16} /> Windows (10/11)
            </button>
            <button
              onClick={() => setSelectedOs("mac")}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition ${
                selectedOs === "mac" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600"
              }`}
            >
              <Monitor size={16} /> macOS (Intel/M1/M2/M3)
            </button>
            <button
              onClick={() => setSelectedOs("linux")}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition ${
                selectedOs === "linux" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600"
              }`}
            >
              <HardDrive size={16} /> Linux (Ubuntu/Debian)
            </button>
          </div>

          {/* Download Items */}
          <div className="space-y-3">
            {[
              { name: "HYP2003 Token Manager & PKCS#11 Driver v3.1", size: "14.2 MB", ver: "v3.1.2026" },
              { name: "ePass2003 Auto Middleware Installer", size: "18.5 MB", ver: "v2.0.1" },
              { name: "ProxKey Token User Tool & PKI Certificate Manager", size: "12.8 MB", ver: "v4.0.5" },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{item.name}</h4>
                  <span className="text-[10px] text-slate-500">Version: {item.ver} | Size: {item.size}</span>
                </div>
                <button className="px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 transition shrink-0">
                  <Download size={14} /> Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: TROUBLESHOOTING FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-amber-50 border border-amber-200 rounded-3xl p-6 space-y-3">
          <h3 className="text-xs font-bold text-amber-900 uppercase flex items-center gap-1.5">
            <ShieldAlert size={16} /> Driver Installation Troubleshooting Tip:
          </h3>
          <p className="text-xs text-amber-900/80 leading-relaxed">
            If Google Chrome or Microsoft Edge fails to detect your USB token during e-Tendering or Income Tax filing, ensure you have enabled the PKCS#11 service inside the Token Manager and restarted your browser.
          </p>
        </div>
      </section>

    </div>
  );
}