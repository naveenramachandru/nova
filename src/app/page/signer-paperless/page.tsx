"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Smartphone,
  ShieldCheck,
  Zap,
  CheckCircle2,
  FileCheck2,
  Lock,
  ArrowRight,
  Sparkles,
  Server,
  Building2,
  FileText,
  Workflow,
  KeyRound,
} from "lucide-react";

export default function PaperlessEsignPage() {
  return (
    <div className="pt-24 pb-20 bg-slate-50 text-slate-900 min-h-screen space-y-16">
      
      {/* SECTION 1: HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Zap size={14} className="text-emerald-600" />
              <span>CCA Empaneled & IT Act Compliant</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight">
              Paperless eSign Gateway & ESP Integration
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Fully compliant online Digital Signature service based on the Electronic Authentication Technique Rules (2015) issued by the Controller of Certifying Authorities (CCA). Enables instant document signing via e-KYC response without physical hardware cryptographic tokens[cite: 12].
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/page/signer-demo"
                className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-lg transition flex items-center gap-2"
              >
                <span>Try Live eSign Demo</span>
                <ArrowRight size={14} />
              </Link>
              <a
                href="http://www.cca.gov.in"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 font-bold text-xs rounded-xl transition flex items-center gap-2"
              >
                <ShieldCheck size={14} className="text-emerald-600" />
                <span>CCA Guidelines Info</span>
              </a>
            </div>
          </motion.div>

          <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <Image
              src="https://images.unsplash.com/photo-1556742049-0a670f4a4591?auto=format&fit=crop&w=1200&q=80"
              alt="Aadhaar Mobile eSign Verification"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white space-y-1">
              <span className="text-[10px] uppercase font-bold text-emerald-400">IT Act 2000 & 2015 Rules</span>
              <h3 className="text-lg font-bold">Legally Equivalent to Physical Signatures</h3>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CCA WORKFLOW STEP-BY-STEP (DIRECTLY FROM PDF SPECIFICATION) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Official CCA Architecture</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">eSign Service Provider (ESP) Workflow</h2>
            <p className="text-xs text-slate-600 max-w-2xl mx-auto">
              How the interaction functions between the User, Application Service Provider (ASP), eSign Service Provider (ESP), e-KYC Provider, and Licensed Certifying Authority (CA)[cite: 12].
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                step: "01",
                title: "Signature Request",
                desc: "User requests digital signature through Application Service Provider (ASP) app[cite: 12].",
              },
              {
                step: "02",
                title: "eSign Packet",
                desc: "ASP forwards document hash + eSign request packet to eSign Service Provider (ESP)[cite: 12].",
              },
              {
                step: "03",
                title: "e-KYC Request",
                desc: "ESP issues eKYC verification request (PoA/PoI) to e-KYC Service Provider[cite: 12].",
              },
              {
                step: "04",
                title: "eKYC Response",
                desc: "e-KYC Provider returns verified subscriber details upon OTP / biometric check[cite: 12].",
              },
              {
                step: "05",
                title: "Request for DSC",
                desc: "ESP requests On-the-Fly Digital Signature Certificate from Licensed CA[cite: 12].",
              },
              {
                step: "06",
                title: "Issuance of DSC",
                desc: "Certifying Authority issues short-lived DSC for identity authentication[cite: 12].",
              },
              {
                step: "07",
                title: "Digital Signature",
                desc: "ESP computes digital signature and returns signature + DSC to the ASP[cite: 12].",
              },
              {
                step: "08",
                title: "Attach to PDF",
                desc: "Signature & certificate are attached permanently to electronic document[cite: 12].",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <span className="text-xl font-black text-emerald-600 font-mono">{item.step}</span>
                <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: KEY ROLES & ELIGIBILITY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Compliance Criteria</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">CCA Eligibility & Technical Framework</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <Building2 className="text-emerald-600" size={28} />
            <h3 className="text-lg font-bold text-slate-900">Licensed CA Requirement</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              eSign Service Providers must be existing licensed Certifying Authorities operating under the Information Technology Act, 2000[cite: 12].
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <ShieldCheck className="text-emerald-600" size={28} />
            <h3 className="text-lg font-bold text-slate-900">Empaneled Security Audit</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Mandatory third-party security evaluation and compliance audit conducted by CCA-empaneled auditors[cite: 12].
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <KeyRound className="text-emerald-600" size={28} />
            <h3 className="text-lg font-bold text-slate-900">Scalable Cryptography</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Eliminates hardware token dependencies, allowing citizen-facing services to scale seamlessly to millions of users[cite: 12].
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: STATS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-black text-emerald-400 font-mono">100%</div>
            <div className="text-xs text-slate-400 mt-1">IT Act 2000 Legal Validity</div>
          </div>
          <div>
            <div className="text-3xl font-black text-emerald-400 font-mono">0</div>
            <div className="text-xs text-slate-400 mt-1">Hardware Tokens Needed</div>
          </div>
          <div>
            <div className="text-3xl font-black text-emerald-400 font-mono">8-Step</div>
            <div className="text-xs text-slate-400 mt-1">CCA Secure PKI Cycle</div>
          </div>
          <div>
            <div className="text-3xl font-black text-emerald-400 font-mono">Instant</div>
            <div className="text-xs text-slate-400 mt-1">On-the-Fly DSC Issuance</div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-4 border border-slate-800">
          <h3 className="text-2xl font-black">Empower Your ASP Application with eSign</h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">Integrate our eSign API gateway for instant eKYC-backed digital signatures.</p>
          <Link href="/page/signer-demo" className="inline-block px-6 py-3.5 bg-emerald-500 text-slate-950 font-bold text-xs rounded-xl hover:bg-emerald-400 transition">
            Request ASP Integration Kit
          </Link>
        </div>
      </section>

    </div>
  );
}