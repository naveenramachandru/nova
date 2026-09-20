"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Building2, Shield, ArrowRight, CheckCircle2, Truck, Globe } from "lucide-react";

export default function RegionalDistributorPage() {
  return (
    <div className="pt-24 pb-20 bg-gradient-to-b from-sky-50/50 via-slate-50 to-indigo-50/40 text-slate-800 min-h-screen space-y-20 overflow-hidden">
      
      {/* SECTION 1: HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-sky-100 border border-sky-200 text-sky-800 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-sm">
              <MapPin size={14} />
              <span>Exclusive Territorial Rights</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-tight">
              Regional PKI & Token <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600">Distributor Program</span>
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Secure state and district-level distribution rights for high-volume enterprise hardware tokens, cryptographic smart cards, and PKI security middleware.
            </p>
            <Link href="#apply" className="inline-flex items-center gap-2 px-6 py-3.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-xl shadow-lg shadow-sky-200 transition">
              <span>Apply for Territory</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
            <Image src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=80" alt="Regional Logistics" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* SECTION 2: STATS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-black text-sky-600 font-mono">150+</div>
            <div className="text-xs text-slate-500 mt-1">Distributor Territories</div>
          </div>
          <div>
            <div className="text-3xl font-black text-indigo-600 font-mono">100%</div>
            <div className="text-xs text-slate-500 mt-1">Lead Protection</div>
          </div>
          <div>
            <div className="text-3xl font-black text-emerald-600 font-mono">Tier-1</div>
            <div className="text-xs text-slate-500 mt-1">Bulk Hardware Pricing</div>
          </div>
          <div>
            <div className="text-3xl font-black text-sky-600 font-mono">Dedicated</div>
            <div className="text-xs text-slate-500 mt-1">Dispatch Logistics</div>
          </div>
        </div>
      </section>

      {/* SECTION 3: ADVANTAGES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">Distributor Benefits</span>
          <h2 className="text-3xl font-black text-slate-900">Monopolize Your Territory</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 hover:border-sky-300 transition">
            <Building2 className="text-sky-600" size={28} />
            <h3 className="text-lg font-bold text-slate-900">Guaranteed Territory Protection</h3>
            <p className="text-xs text-slate-500">All inbound customer requests originating from your designated state or district are routed directly to your team.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 hover:border-sky-300 transition">
            <Truck className="text-sky-600" size={28} />
            <h3 className="text-lg font-bold text-slate-900">Priority Freight & Warehousing</h3>
            <p className="text-xs text-slate-500">Accelerated bulk shipments direct from factory hubs to your regional distribution centers.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 hover:border-sky-300 transition">
            <Globe className="text-sky-600" size={28} />
            <h3 className="text-lg font-bold text-slate-900">Sub-Reseller Management</h3>
            <p className="text-xs text-slate-500">Onboard and manage local sub-resellers within your territory through your master portal.</p>
          </div>
        </div>
      </section>

      {/* SECTION 4: PRODUCT SPECS VISUAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-black text-slate-900">High-Demand Distributed Products</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Distribute certified hardware tokens used by banks, government portals, and multi-national corporations.
            </p>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500" /> HYP2003 & ePass2003 Auto-driver Tokens</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500" /> FIPS 140-2 Level 3 HSM Security Modules</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500" /> PKI Middleware & Multi-OS Drivers</li>
            </ul>
          </div>
          <div className="relative h-72 rounded-2xl overflow-hidden border border-slate-200">
            <Image src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80" alt="Hardware Tokens" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6" id="apply">
        <div className="bg-gradient-to-r from-sky-900 via-slate-900 to-indigo-950 border border-sky-800/30 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl text-white">
          <h2 className="text-3xl font-black">Apply for Exclusive Territory Rights Today</h2>
          <p className="text-xs text-sky-100 max-w-lg mx-auto">Lock in your state or district territory before slots are closed.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg transition">
            Request Territory Map & Terms
          </Link>
        </div>
      </section>
    </div>
  );
}