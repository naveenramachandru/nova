"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, CheckCircle2, ShieldCheck, Mail, Phone } from "lucide-react";

export default function TokenBulkPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-24 pb-20 bg-slate-50 text-slate-900 min-h-screen space-y-16">
      
      {/* SECTION 1: BULK BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">Enterprise & Wholesale</span>
            <h1 className="text-3xl sm:text-5xl font-black">Bulk USB Token Procurement</h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Equip your corporate teams, chartered accountancy firms, or government agencies with bulk-discounted FIPS certified USB tokens.
            </p>
          </div>
          <div className="relative h-64 rounded-2xl overflow-hidden border border-slate-800">
            <Image
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80"
              alt="Corporate Bulk Orders"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: BULK DISCOUNT TIERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-2 mb-10">
          <h2 className="text-2xl font-black text-slate-900">Volume Pricing Tiers</h2>
          <p className="text-xs text-slate-600">Tiered volume pricing designed for enterprise deployments.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { range: "25 - 100 Tokens", discount: "15% OFF", desc: "Ideal for CA firms & medium enterprises" },
            { range: "101 - 500 Tokens", discount: "25% OFF", desc: "Best for corporate teams & developers" },
            { range: "500+ Tokens", discount: "Custom OEM Rate", desc: "Includes custom logo laser engraving" },
          ].map((tier, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center space-y-3">
              <span className="text-2xl font-black text-teal-600 font-mono">{tier.discount}</span>
              <h4 className="text-sm font-bold text-slate-900">{tier.range}</h4>
              <p className="text-xs text-slate-500">{tier.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: INQUIRY FORM */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl space-y-6">
          <h3 className="text-lg font-bold text-slate-900 border-b pb-3">Request Corporate Quote</h3>
          
          {submitted ? (
            <div className="text-center py-8 space-y-2">
              <CheckCircle2 className="mx-auto text-emerald-500" size={48} />
              <h4 className="text-lg font-bold text-slate-900">Quote Request Sent!</h4>
              <p className="text-xs text-slate-600">Our enterprise account team will send formal pricing within 2 business hours.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input required type="text" placeholder="Company Name" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-teal-500 outline-none" />
                <input required type="email" placeholder="Work Email" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-teal-500 outline-none" />
                <input required type="tel" placeholder="Phone Number" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-teal-500 outline-none" />
                <input required type="number" placeholder="Quantity Required (e.g., 50)" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-teal-500 outline-none" />
              </div>
              <textarea placeholder="Specific model preference (e.g. HYP2003 64KB) or custom requirements..." rows={3} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-teal-500 outline-none"></textarea>
              <button type="submit" className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-lg transition">
                Submit Wholesale Inquiry
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
}