"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Share2, DollarSign, Zap, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ReferralNetworkPage() {
  return (
    <div className="pt-24 pb-20 bg-gradient-to-b from-emerald-50/50 via-slate-50 to-teal-50/40 text-slate-800 min-h-screen space-y-20 overflow-hidden">
      
      {/* SECTION 1: HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-200 text-emerald-800 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-sm">
              <Share2 size={14} />
              <span>Earn Recurring Income</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-tight">
              PKI & eSign <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Referral Network</span>
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Monetize your professional network. Recommend Nova Venture&apos;s digital signature gateways and enterprise PKI infrastructure to earn up to 20% recurring commissions.
            </p>
            <Link href="#apply" className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-lg shadow-emerald-200 transition">
              <span>Get Referral Link</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
            <Image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80" alt="Referral Partner" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* SECTION 2: METRICS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-black text-emerald-600 font-mono">20%</div>
            <div className="text-xs text-slate-500 mt-1">Recurring Commission</div>
          </div>
          <div>
            <div className="text-3xl font-black text-teal-600 font-mono">90 Days</div>
            <div className="text-xs text-slate-500 mt-1">Cookie Window</div>
          </div>
          <div>
            <div className="text-3xl font-black text-cyan-600 font-mono">Monthly</div>
            <div className="text-xs text-slate-500 mt-1">Automated Payouts</div>
          </div>
          <div>
            <div className="text-3xl font-black text-emerald-600 font-mono">₹0</div>
            <div className="text-xs text-slate-500 mt-1">Joining Fee</div>
          </div>
        </div>
      </section>

      {/* SECTION 3: COMMISSION TIERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Payout Breakdown</span>
          <h2 className="text-3xl font-black text-slate-900">Earn on Every Renewal</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 hover:border-emerald-300 transition">
            <h3 className="text-lg font-bold text-slate-900">Standard eSign API</h3>
            <p className="text-2xl font-black text-emerald-600">15% Lifetime</p>
            <p className="text-xs text-slate-500">Earn on all monthly and annual API volume subscriptions.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-emerald-400 shadow-md space-y-3">
            <h3 className="text-lg font-bold text-slate-900">Enterprise HSM Contract</h3>
            <p className="text-2xl font-black text-emerald-600">20% First Year</p>
            <p className="text-xs text-slate-500">Earn huge payouts on custom enterprise deployments.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 hover:border-emerald-300 transition">
            <h3 className="text-lg font-bold text-slate-900">Hardware Token Referral</h3>
            <p className="text-2xl font-black text-emerald-600">10% Per Order</p>
            <p className="text-xs text-slate-500">Earn instant commission on bulk token shipments.</p>
          </div>
        </div>
      </section>

      {/* SECTION 4: CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6" id="apply">
        <div className="bg-gradient-to-r from-emerald-900 via-slate-900 to-teal-950 border border-emerald-800/30 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl text-white">
          <h2 className="text-3xl font-black">Join the Referral Network in 2 Minutes</h2>
          <p className="text-xs text-emerald-100 max-w-lg mx-auto">Get your custom tracking link and start earning instantly.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg transition">
            Generate Referral Link
          </Link>
        </div>
      </section>
    </div>
  );
}