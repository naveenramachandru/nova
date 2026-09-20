"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, Briefcase, Building2, Sparkles, ChevronDown, CheckCircle2 } from "lucide-react";

export default function CorpRojgaarPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="space-y-20 pb-20 pt-4 bg-slate-50">
      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-[10px] font-extrabold text-teal-400 bg-teal-500/10 border border-teal-500/30 px-3.5 py-1.5 rounded-full inline-block">
              Corporate AI HR Engine
            </span>
            <h1 className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Rojgaar.ai — Automated Talent Screening
            </h1>
            <p className="text-sm text-slate-400 leading-relaxed">
              AI-driven candidate sourcing, automated skill assessment video interviews, and enterprise ATS integration.
            </p>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="Rojgaar AI Talent Platform"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* 2. PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "CV Parser AI", desc: "Process thousands of incoming resumes with semantic intent matching.", icon: Users },
          { title: "Asynchronous Interviews", desc: "Automated video interview screening with candidate scorecards.", icon: Briefcase },
          { title: "Enterprise ATS Sync", desc: "Native sync with Greenhouse, Lever, Workday, and custom portals.", icon: Building2 },
        ].map((p, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <p.icon className="text-teal-600 mb-3" size={22} />
            <h3 className="text-sm font-bold text-slate-900 mb-1">{p.title}</h3>
            <p className="text-xs text-slate-600">{p.desc}</p>
          </div>
        ))}
      </section>

      {/* 3. STEPPER */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-black text-center mb-10">Recruitment Workflow</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Post Job Scope", desc: "Define job roles and skill parameters." },
              { step: "02", title: "AI Sourcing", desc: "Algorithm parses inbound resume pool." },
              { step: "03", title: "AI Screening", desc: "Candidates complete proctored video assessments." },
              { step: "04", title: "Issue Offer", desc: "Review candidate scorecard and dispatch offers." },
            ].map((s, i) => (
              <div key={i} className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                <span className="text-xl font-bold text-teal-400 font-mono">{s.step}</span>
                <h4 className="text-xs font-bold text-white mt-2">{s.title}</h4>
                <p className="text-[11px] text-slate-400 mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SPECIFICATIONS TABLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
          <h3 className="text-base font-bold text-slate-900 mb-4">Platform Performance Specs</h3>
          <table className="w-full text-left text-xs text-slate-600">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-800">
              <tr><th className="p-3">Parameter</th><th className="p-3">Specification</th></tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr><td className="p-3 font-semibold">Parsing Throughput</td><td className="p-3">10,000 Resumes / Hour</td></tr>
              <tr><td className="p-3 font-semibold">Integrations</td><td className="p-3">Greenhouse, Workday, REST Webhooks</td></tr>
              <tr><td className="p-3 font-semibold">Security Compliance</td><td className="p-3">ISO 27001 / GDPR Compliant Storage</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. USE CASES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Tech Staffing Firms", desc: "Reduce time-to-hire by 70% when evaluating engineering applicants." },
          { title: "High Volume Retail", desc: "Filter thousands of seasonal store applicants automatically." },
          { title: "Enterprise Shared Services", desc: "Centralize global candidate scoring across multiple branch offices." },
        ].map((uc, i) => (
          <div key={i} className="bg-white border border-slate-200 p-6 rounded-2xl">
            <h4 className="text-xs font-bold text-slate-900 mb-1">{uc.title}</h4>
            <p className="text-xs text-slate-600">{uc.desc}</p>
          </div>
        ))}
      </section>

      {/* 6. FAQ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 space-y-3">
        <h2 className="text-xl font-black text-center mb-6">Platform FAQs</h2>
        {[
          { q: "How does Rojgaar.ai score candidates?", a: "It evaluates candidates using domain-specific models measuring code accuracy, problem-solving speed, and communication." },
          { q: "Is candidate data secure?", a: "Yes, candidate data is encrypted and stored in full compliance with GDPR and ISO standards." },
        ].map((faq, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-4">
            <button onClick={() => setActiveFaq(activeFaq === idx ? null : idx)} className="w-full text-left font-bold text-xs flex justify-between">
              <span>{faq.q}</span>
              <ChevronDown size={14} />
            </button>
            {activeFaq === idx && <p className="text-xs text-slate-600 mt-2 border-t pt-2">{faq.a}</p>}
          </div>
        ))}
      </section>

      {/* 7. CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-950 p-8 rounded-3xl text-white flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold">Schedule Enterprise Demo</h3>
            <p className="text-xs text-slate-400">See how Rojgaar.ai automates recruitment operations.</p>
          </div>
          <button className="px-5 py-3 bg-teal-500 font-bold text-xs rounded-xl text-slate-950">
            Book Live Demo
          </button>
        </div>
      </section>
    </div>
  );
}