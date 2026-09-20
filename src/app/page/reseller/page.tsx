"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  PackageCheck,
  DollarSign,
  Users,
  Zap,
  HelpCircle,
  ChevronDown,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ResellerProgramPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is the minimum order quantity for reseller margins?",
      a: "Our tier 1 reseller margins kick in with a minimum initial order of just 25 USB hardware tokens or DSC issuance credits.",
    },
    {
      q: "Can I manage my own client pricing?",
      a: "Yes, resellers have complete pricing autonomy. You purchase inventory at wholesale rates and set your own end-user prices.",
    },
    {
      q: "Do you provide co-branded marketing materials?",
      a: "We provide customizable digital flyers, email templates, and technical datasheets with your firm's logo.",
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-gradient-to-b from-slate-50 via-indigo-50/40 to-slate-100 text-slate-800 min-h-screen space-y-20 overflow-hidden">
      
      {/* SECTION 1: HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-indigo-100 border border-indigo-200 text-indigo-700 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-sm">
              <Award size={14} />
              <span>High Profit Margins</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-tight">
              Authorized DSC & Token <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-600">Reseller Program</span>
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Sell Digital Signature Certificates (DSC) and FIPS-certified USB hardware tokens directly to your client base with complete price autonomy and up to 60% gross profit margins.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="#apply" className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-lg shadow-indigo-200 transition flex items-center gap-2">
                <span>Become a Reseller</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

          <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
            <Image src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80" alt="Reseller Partner" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* SECTION 2: METRICS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-black text-indigo-600 font-mono">Up to 60%</div>
            <div className="text-xs text-slate-500 mt-1">Profit Margins</div>
          </div>
          <div>
            <div className="text-3xl font-black text-sky-600 font-mono">2,500+</div>
            <div className="text-xs text-slate-500 mt-1">Active Resellers</div>
          </div>
          <div>
            <div className="text-3xl font-black text-emerald-600 font-mono">Instant</div>
            <div className="text-xs text-slate-500 mt-1">Inventory Allocation</div>
          </div>
          <div>
            <div className="text-3xl font-black text-indigo-600 font-mono">Zero</div>
            <div className="text-xs text-slate-500 mt-1">Annual Program Fees</div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROFIT & TIER BREAKDOWN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Margin Structure</span>
          <h2 className="text-3xl font-black text-slate-900">Reseller Volume Tiers</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { tier: "Silver Tier", volume: "25 - 100 Units", margin: "35% Margin", perks: ["Standard Portal Access", "Email Support", "Co-branded Flyers"] },
            { tier: "Gold Tier", volume: "101 - 500 Units", margin: "48% Margin", perks: ["Priority Dispatch", "Dedicated Account Rep", "API Access for Bulk Orders"] },
            { tier: "Platinum Tier", volume: "500+ Units", margin: "60% Margin", perks: ["Maximum Margin Rate", "Custom Packaging Support", "24/7 Priority Tech Helpdesk"] },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4 hover:border-indigo-400 hover:shadow-md transition">
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 font-mono text-[10px] font-bold rounded-full">{item.tier}</span>
              <h3 className="text-2xl font-black text-slate-900">{item.margin}</h3>
              <p className="text-xs text-slate-500">Volume: {item.volume}</p>
              <ul className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                {item.perks.map((p, pIdx) => (
                  <li key={pIdx} className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: VISUAL WORKFLOW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 rounded-2xl overflow-hidden border border-slate-200">
            <Image src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80" alt="Reseller Dashboard" fill className="object-cover" />
          </div>
          <div className="space-y-6">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Dashboard Capabilities</span>
            <h2 className="text-3xl font-black text-slate-900">Full Operational Control Over Your Stock</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our partner portal gives you instant stock provisioning, real-time client status tracking, automated invoice generation, and full management over client DSC renewals.
            </p>
            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70 flex justify-between">
                <span className="text-slate-700">Instant Stock Credit Top-up</span>
                <span className="text-emerald-600 font-bold">Real-Time</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70 flex justify-between">
                <span className="text-slate-700">Client Renewal Automation</span>
                <span className="text-sky-600 font-bold">Automated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: ONBOARDING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Onboarding</span>
          <h2 className="text-3xl font-black text-slate-900">4 Simple Steps to Start Selling</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { step: "01", title: "Apply Online", desc: "Fill out the reseller registration form." },
            { step: "02", title: "KYC Verification", desc: "Upload business registration documents." },
            { step: "03", title: "Choose Package", desc: "Select initial inventory credits." },
            { step: "04", title: "Start Issuing", desc: "Issue DSCs directly to your customers." },
          ].map((s, idx) => (
            <div key={idx} className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
              <span className="text-2xl font-black text-indigo-600 font-mono">{s.step}</span>
              <h3 className="text-sm font-bold text-slate-900">{s.title}</h3>
              <p className="text-xs text-slate-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-black text-slate-900">Reseller FAQ</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm">
              <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full p-5 text-left flex justify-between items-center text-sm font-bold text-slate-900">
                <span>{faq.q}</span>
                <ChevronDown size={16} className={`transition ${openFaq === idx ? "rotate-180 text-indigo-600" : "text-slate-400"}`} />
              </button>
              {openFaq === idx && <p className="p-5 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100">{faq.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6" id="apply">
        <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-slate-900 border border-indigo-700/30 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl text-white">
          <h2 className="text-3xl font-black">Ready to Boost Your Profits as a Reseller?</h2>
          <p className="text-xs sm:text-sm text-indigo-100 max-w-lg mx-auto">Get verified in under 24 hours and access wholesale partner pricing.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-white text-indigo-950 hover:bg-slate-100 font-bold text-xs rounded-xl shadow-lg transition">
            Apply for Reseller Account
          </Link>
        </div>
      </section>
    </div>
  );
}