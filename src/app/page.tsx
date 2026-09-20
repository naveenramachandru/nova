"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

import {
  ShieldCheck,
  
  ArrowRight,
  Sparkles,
  Award,
  Globe2,
  CheckCircle2,
  Building2,
  ChevronDown,
  Cpu,
  HardDrive,
  Server,
  ArrowUpRight,
  PenTool,
  Calculator,
  Receipt,
  Scale,
} from "lucide-react";

export default function HomePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"esign" | "itr" | "token" | "gst">("esign");


  // Parallax Controllers
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(heroScroll, [0, 1], ["0%", "25%"]);
  const heroScale = useTransform(heroScroll, [0, 1], [1, 0.96]);

  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    
    <div className="space-y-28 pb-24 bg-gradient-to-b from-slate-50 via-teal-50/20 via-blue-50/20 to-slate-50 text-slate-900 overflow-hidden">
      
      {/* 1. HERO SECTION WITH PARALLAX & AMBIENT ANIMATIONS */}
      <section ref={heroRef} className="relative pt-16 pb-20 overflow-hidden">
        {/* Floating Light Blobs */}
        <motion.div 
          animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.6, 0.3], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-10 -left-10 w-96 h-96 bg-teal-300/40 rounded-full blur-3xl -z-10 pointer-events-none"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 -right-10 w-96 h-96 bg-blue-300/40 rounded-full blur-3xl -z-10 pointer-events-none"
        />

        <motion.div style={{ y: heroY, scale: heroScale }} className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 text-teal-900 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest shadow-sm backdrop-blur-md"
            >
              <Sparkles size={14} className="text-teal-600 animate-pulse" />
              <span>THE DIGITAL BUSINESS ECOSYSTEM</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-black tracking-tight leading-tight text-slate-900"
            >
              Empowering. Scaling. Growing Your Business, <span className="bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">Digitally.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-2xl font-bold text-slate-700 tracking-tight"
            >
              Everything Your Business Needs to Move Forward.
            </motion.p>

            {/* Pain Point Narrative Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="bg-white/80 backdrop-blur-xl border border-white/80 p-6 sm:p-10 rounded-3xl text-left shadow-xl shadow-teal-900/5 space-y-6"
            >
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-lg sm:text-xl font-black text-slate-900">
                  Your Business Shouldn't Need a Different Vendor for Everything.
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Eliminating the friction of disconnected compliance, tax, and security software.
                </p>
              </div>

              {/* Service Badges Grid */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs font-bold text-slate-700"
              >
                {[
                  { label: "Company Registrations", icon: Building2 },
                  { label: "Income Tax & ITR Filing", icon: Calculator },
                  { label: "GST & Invoicing", icon: Receipt },
                  { label: "Paperless eSign", icon: PenTool },
                  { label: "HYP2003 Hardware", icon: ShieldCheck },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="bg-slate-50/90 border border-slate-200/80 p-3.5 rounded-2xl flex flex-col items-center justify-center text-center gap-2 shadow-sm hover:border-teal-400 hover:bg-teal-50/40 transition"
                  >
                    <item.icon size={20} className="text-teal-600" />
                    <span>{item.label}</span>
                  </motion.div>
                ))}
              </motion.div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  Running a enterprise or small business shouldn't involve coordinating separate service providers for tax preparation, GST filing, digital signature workflows, and hardware security keys. Disconnected tools create redundant logins, scattered invoices, and unnecessary compliance risks.
                </p>
                <p className="font-medium text-slate-700">
                  Nova consolidates an expanding suite of digital products, financial services, eSign portals, and cryptographic security hardware into one streamlined platform.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs font-bold text-teal-800">
                  One platform for Digital Signatures, Financial Services, ITR Filings & Hardware Security Tokens.
                </p>
                <Link
                  href="/products/hyp2003"
                  className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-500 hover:to-blue-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-teal-600/20 transition flex items-center justify-center gap-2 shrink-0 group"
                >
                  <span>Explore Hardware Token (HYP2003)</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </section>

      {/* 2. STATS OVERVIEW BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { value: "2.6 Crore+", label: "HYP2003 Tokens Sold in India", icon: Award },
            { value: "30 Million+", label: "Tokens Deployed Globally", icon: Globe2 },
            { value: "99.9%", label: "Tax Filing Compliance Rate", icon: CheckCircle2 },
            { value: "100%", label: "IT Act Legal Validity (eSign)", icon: Scale },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="bg-white/80 backdrop-blur-md border border-slate-200 p-6 rounded-3xl shadow-sm text-center space-y-1"
            >
              <stat.icon className="mx-auto text-teal-600 mb-2" size={24} />
              <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">{stat.value}</div>
              <p className="text-xs text-slate-600 font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. INTERACTIVE SOLUTIONS TABBED SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-teal-700 bg-teal-100/80 px-3 py-1 rounded-full border border-teal-200">
            Integrated Ecosystem Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            End-to-End Execution for Modern Enterprises
          </h2>
        </div>

        {/* Dynamic Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
          {[
            { id: "esign", label: "eSign Solutions", icon: PenTool },
            { id: "itr", label: "Financial & ITR Filing", icon: Calculator },
            { id: "gst", label: "GST & Bookkeeping", icon: Receipt },
            { id: "token", label: "HYP2003 Token Hardware", icon: ShieldCheck },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20 scale-105"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              <tab.icon size={16} className={activeTab === tab.id ? "text-teal-400" : "text-slate-500"} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Contents */}
        <AnimatePresence mode="wait">
          {/* TAB 1: eSign Solutions */}
          {activeTab === "esign" && (
            <motion.div
              key="esign"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            >
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-800 px-3 py-1 rounded-full text-xs font-bold">
                  <PenTool size={14} className="text-teal-600" />
                  <span>Paperless Digital Signatures</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  Instant Legal eSign & Remote Workflow
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Sign contracts, NDAs, invoices, tax filings, and onboarding forms legally in seconds. Designed strictly in adherence with Indian IT Act guidelines for tamper-proof digital authorization.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    "Aadhaar-based eSign integration",
                    "DSC Class 3 Token compatibility",
                    "Multi-party signer orchestration",
                    "Cryptographic audit trail log",
                    "Automated email notifications",
                    "256-bit AES encrypted storage",
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 size={16} className="text-teal-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-lg border border-slate-200 group">
                <Image
                  src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80"
                  alt="Digital Signature Workflow"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-[10px] font-bold uppercase text-teal-400 bg-teal-950/80 px-2 py-0.5 rounded border border-teal-800">IT Act Compliant</span>
                  <h4 className="text-sm font-bold">Tamper-Proof Document Signing</h4>
                  <p className="text-[11px] text-slate-300">Valid for agreements, vendor contracts, and tax filings.</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: Financial & ITR Filing */}
          {activeTab === "itr" && (
            <motion.div
              key="itr"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            >
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-bold">
                  <Calculator size={14} className="text-blue-600" />
                  <span>Tax Computation & Filing</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  Financial Services & Guided ITR Filing
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Eliminate income tax filing errors with automated deduction tracking, Form 16 reconciliation, and guided ITR submission for salaried individuals, freelancers, and corporations.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    "ITR-1 to ITR-7 filings supported",
                    "Form 26AS & AIS auto-fetch",
                    "Maximizes Section 80C/80D deductions",
                    "Expert CA review prior to final filing",
                    "Instant e-Verification processing",
                    "Capital gains tax calculation",
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 size={16} className="text-blue-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-lg border border-slate-200 group">
                <Image
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80"
                  alt="ITR Filing & Tax Platform"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-[10px] font-bold uppercase text-blue-400 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800">Financial Accuracy</span>
                  <h4 className="text-sm font-bold">Smart Tax Computation Portal</h4>
                  <p className="text-[11px] text-slate-300">Fast income tax return filing with guaranteed compliance.</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: GST & Bookkeeping */}
          {activeTab === "gst" && (
            <motion.div
              key="gst"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            >
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 text-indigo-800 px-3 py-1 rounded-full text-xs font-bold">
                  <Receipt size={14} className="text-indigo-600" />
                  <span>GST & Corporate Accounting</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  GST Reconciliation & Digital Bookkeeping
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Automate monthly GST returns (GSTR-1, GSTR-3B, GSTR-9), generate e-invoices, and manage ledger accounting in real time without manual entry errors.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    "GSTR-1 & GSTR-3B monthly filing",
                    "Automated GSTR-2B ITC matching",
                    "QR code enabled GST e-Invoicing",
                    "Real-time profit & loss ledger",
                    "E-Way bill generation integration",
                    "Multi-branch accounting support",
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 size={16} className="text-indigo-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-lg border border-slate-200 group">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
                  alt="GST & Accounting Portal"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-[10px] font-bold uppercase text-indigo-400 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-800">GST Portal Integration</span>
                  <h4 className="text-sm font-bold">Automated Invoicing & Filing</h4>
                  <p className="text-[11px] text-slate-300">Seamless e-invoicing and tax credit reconciliation.</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 4: HYP2003 Token Hardware */}
          {activeTab === "token" && (
            <motion.div
              key="token"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            >
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 text-slate-800 px-3 py-1 rounded-full text-xs font-bold">
                  <ShieldCheck size={14} className="text-teal-600" />
                  <span>Hardware Security Spotlight</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  HYP2003 Cryptographic USB Token
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  FIPS 140-3 Level 3 validated cryptographic USB token[cite: 7]. Approved by CCA India for storing Class 3 Digital Signature Certificates securely with zero extractability[cite: 7].
                </p>

                {/* Hardware Grid Metrics */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200">
                    <span className="text-[10px] text-slate-500 font-bold uppercase">In Market Since</span>
                    <div className="text-xl font-black text-slate-900 font-mono">2013</div>
                    <p className="text-[10px] text-teal-700 font-semibold">13+ Years Presence</p>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200">
                    <span className="text-[10px] text-slate-500 font-bold uppercase">Tokens Sold in India</span>
                    <div className="text-xl font-black text-teal-700 font-mono">2,60,00,000+</div>
                    <p className="text-[10px] text-teal-800 font-semibold">2.6 Crore+ Deployed</p>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200">
                    <span className="text-[10px] text-slate-500 font-bold uppercase">Global Deployments</span>
                    <div className="text-xl font-black text-blue-700 font-mono">30 Million+</div>
                    <p className="text-[10px] text-blue-800 font-semibold">International Footprint</p>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200">
                    <span className="text-[10px] text-slate-500 font-bold uppercase">India Market Share</span>
                    <div className="text-xl font-black text-slate-900 font-mono">60%+</div>
                    <p className="text-[10px] text-slate-600 font-semibold">Industry Preference</p>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/products/hyp2003"
                    className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-3 rounded-xl text-xs font-bold transition shadow-md"
                  >
                    <span>View Product Datasheet Page</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>

              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-lg border border-slate-200 group">
                <Image
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80"
                  alt="HYP2003 Security Hardware"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-[10px] font-bold uppercase text-teal-400 bg-teal-950/80 px-2 py-0.5 rounded border border-teal-800">CCA Approved</span>[cite: 7]
                  <h4 className="text-sm font-bold">HYPERPKI™ HYP2003 USB TOKEN</h4>
                  <p className="text-[11px] text-slate-300">Dimensions: $53\times16.5\times8.5$ mm | 64 KB Memory[cite: 7]</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* 4. VISUAL CAPABILITY GRID WITH HD IMAGES & HOVER MOTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-xs font-black text-teal-700 uppercase tracking-widest">Digital Platform Pillars</h2>
          <p className="text-2xl sm:text-4xl font-black text-slate-900">Comprehensive Business Services</p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Pillar 1: eSign */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-md flex flex-col justify-between group"
          >
            <div className="relative h-52 w-full bg-slate-100 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80"
                alt="Paperless eSign"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold text-teal-800">
                PAPERLESS WORKFLOW
              </div>
            </div>
            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Legal eSign Infrastructure</h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-2">
                  Execute contracts, agreements, and compliance disclosures electronically with encrypted verification logs.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-[11px] font-bold text-teal-700 flex items-center justify-between">
                <span>Explore eSign Features</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>

          {/* Pillar 2: Financials & Tax */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-md flex flex-col justify-between group"
          >
            <div className="relative h-52 w-full bg-slate-100 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80"
                alt="Tax and Financial Services"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold text-blue-800">
                TAX & COMPLIANCE
              </div>
            </div>
            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900">ITR & Financial Filings</h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-2">
                  Assisted Income Tax Return submission, GST e-invoicing, and structured bookkeeping tailored to business size.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-[11px] font-bold text-blue-700 flex items-center justify-between">
                <span>Start Tax Preparation</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>

          {/* Pillar 3: Hardware Security */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-md flex flex-col justify-between group"
          >
            <div className="relative h-52 w-full bg-slate-100 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
                alt="HYP2003 Token Security"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold text-indigo-800">
                CRYPTOGRAPHIC HARDWARE
              </div>
            </div>
            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900">HYP2003 Token Hardware</h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-2">
                  FIPS 140-3 Level 3 hardware token for non-extractable key storage and digital signature issuance[cite: 7].
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-[11px] font-bold text-indigo-700 flex items-center justify-between">
                <span>Read Datasheet Specs</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 5. DATASHEET SPECIFICATIONS BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-teal-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="text-center space-y-2 mb-10 relative z-10">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">Hardware Intelligence</span>
            <h2 className="text-2xl sm:text-3xl font-black">HYP2003 Technical Breakdown[cite: 7]</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <motion.div whileHover={{ y: -4 }} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 space-y-2">
              <Cpu className="text-teal-400 mb-2" size={28} />
              <h4 className="text-base font-bold text-white">Crypto Engine & Storage</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                64 KB EEPROM memory for digital signing & encryption[cite: 7]. Onboard private key generation ensures non-extractable certificate security[cite: 7].
              </p>
              <p className="text-[11px] text-teal-300 font-mono pt-2">• Algorithms: RSA 2048~4096, AES, SHA, ECDSA[cite: 7]</p>
            </motion.div>

            <motion.div whileHover={{ y: -4 }} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 space-y-2">
              <HardDrive className="text-blue-400 mb-2" size={28} />
              <h4 className="text-base font-bold text-white">Reliability & Memory Cycles</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Tested for enterprise longevity with high rewrite capacity and automated middleware mounting partitions[cite: 7].
              </p>
              <p className="text-[11px] text-blue-300 font-mono pt-2">• At least 500,000 cycles | 10 yr retention[cite: 7]</p>
            </motion.div>

            <motion.div whileHover={{ y: -4 }} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 space-y-2">
              <Server className="text-indigo-400 mb-2" size={28} />
              <h4 className="text-base font-bold text-white">Cross-Platform API Support</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Native compatibility across Windows, Linux, and macOS platforms with full system driver integration[cite: 7].
              </p>
              <p className="text-[11px] text-indigo-300 font-mono pt-2">• MS CAPI, CNG, PKCS#11, PC/SC, CCID[cite: 7]</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. WORKFLOW STEPPER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-xs font-bold text-teal-700 uppercase tracking-widest">Implementation Process</h2>
          <p className="text-2xl sm:text-3xl font-black text-slate-900">4 Steps to Integrated Operations</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Select Services", desc: "Choose your needed service: ITR filing, GST accounting, eSign portal, or HYP2003 tokens." },
            { step: "02", title: "Digital KYC", desc: "Instant paperless identity authorization using official verification records." },
            { step: "03", title: "Key Issuance", desc: "Cryptographic keys generated onboard FIPS 140-3 Level 3 certified tokens[cite: 7]." },
            { step: "04", title: "Unified Management", desc: "Oversee all filings, invoices, tokens, and eSign documents under one Nova portal." },
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -4 }}
              className="bg-white border border-slate-200 p-6 rounded-2xl space-y-2 shadow-sm"
            >
              <span className="text-3xl font-black text-teal-600 font-mono">{item.step}</span>
              <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. FAQ ACCORDION WITH ANIMATED SLIDE */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-xs font-bold text-teal-700 uppercase tracking-widest">Common Questions</h2>
          <p className="text-2xl font-black text-slate-900">Frequently Asked Questions</p>
        </div>

        <div className="space-y-3">
          {[
            { 
              q: "Can I manage ITR filings and eSign services on the same platform?", 
              a: "Yes. Nova combines income tax preparation, GST returns, eSign portal workflows, and cryptographic token management under one ecosystem." 
            },
            { 
              q: "Are Nova's eSign solutions legally valid under Indian law?", 
              a: "Yes, Nova eSign solutions comply fully with the Indian IT Act, ensuring legally binding signatures across contracts, tax forms, and internal approvals." 
            },
            { 
              q: "What makes HYP2003 the preferred hardware token in India?", 
              a: "With over 2.6 Crore tokens deployed across India since 2013, HYP2003 is FIPS 140-3 Level 3 validated[cite: 7], CCA India approved[cite: 7], and holds over 60% market share." 
            },
            { 
              q: "Does HYP2003 support macOS and Linux operating systems?", 
              a: "Yes, HYP2003 features native drivers and PKCS#11 support across Windows, macOS, and Linux platforms[cite: 7]." 
            },
          ].map((faq, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <button
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                className="w-full text-left p-4 sm:p-5 flex justify-between items-center text-xs sm:text-sm font-bold text-slate-900"
              >
                <span>{faq.q}</span>
                <ChevronDown size={16} className={`transition-transform duration-300 ${activeFaq === index ? "rotate-180 text-teal-600" : ""}`} />
              </button>
              <AnimatePresence>
                {activeFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 sm:px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* 8. CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          whileHover={{ scale: 1.005 }}
          className="bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="space-y-1">
            <h3 className="text-2xl sm:text-3xl font-black">Consolidate Your Business Operations Today.</h3>
            <p className="text-xs sm:text-sm text-teal-100">Get started with Nova's eSign, Financial Services, ITR filing, and HYP2003 token solutions.</p>
          </div>
          <Link 
            href="/products/hyp2003" 
            className="px-6 py-3.5 bg-white hover:bg-slate-50 text-teal-900 font-bold text-xs rounded-xl shadow-md transition shrink-0"
          >
            Explore HYP2003 Hardware
          </Link>
        </motion.div>
      </section>

    </div>
  );
}