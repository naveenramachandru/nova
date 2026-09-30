"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
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
  Users,
  Lock,
  Zap,
  FileCheck,
  Quote,
  Star,
  Layers,
  Cloud,
  Smartphone,
  BarChart3,
  Clock,
  Shield,
  Key,
  Palette,
  Film,
  Layout,
} from "lucide-react";

export default function HomePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"esign" | "itr" | "token" | "gst">("esign");

  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track global page scroll progress for continuous scrollytelling transforms
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Dynamic Scrollytelling Background Parallax Speeds
  const bgLightY1 = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const bgLightY2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const bgLightScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.3, 0.85]);

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(heroScroll, [0, 1], ["0%", "35%"]);
  const heroScale = useTransform(heroScroll, [0, 1], [1, 0.92]);
  const heroCardParallax = useTransform(heroScroll, [0, 1], ["0%", "-15%"]);

  // Reusable Scrollytelling Reveal Variants
  const scrollyContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const scrollyItem = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } 
    },
  };

  // Split Text Mask Animation Variants (Reveal from bottom through hidden overflow container)
  const maskContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
  };

  const maskLine = {
    hidden: { y: "110%", opacity: 0 },
    visible: { 
      y: "0%", 
      opacity: 1, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } 
    },
  };

  return (
    <div ref={containerRef} className="space-y-32 pb-28 pt-20 sm:pt-24 bg-gradient-to-b from-slate-50 via-teal-50/20 via-blue-50/20 to-slate-50 text-slate-900 overflow-hidden relative">
      
      {/* Background Animated Ambient Lights with Scrollytelling Parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div 
          style={{ y: bgLightY1, scale: bgLightScale }}
          animate={{ opacity: [0.25, 0.55, 0.25], x: [0, 70, 0], y: [0, 50, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-[650px] h-[650px] bg-teal-400/30 rounded-full blur-[140px]"
        />
        <motion.div 
          style={{ y: bgLightY2 }}
          animate={{ opacity: [0.2, 0.5, 0.2], x: [0, -60, 0], y: [0, -70, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 -right-20 w-[650px] h-[650px] bg-blue-400/30 rounded-full blur-[140px]"
        />
      </div>

      {/* Expanded JSON-LD Structured Data with High-Performance SEO Keyword Cluster (80+ Keywords) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Nova Venture",
            "url": "https://novaventure.in",
            "logo": "https://novaventure.in/logo.png",
            "description": "Best DSC Provider in India & Authorized CCA approved Class 3 DSC, FIPS 140-3 HYP2003 cryptographic USB token supplier, legal eSign software, ITR filing, and GST compliance platform.",
            "keywords": [
              // Best DSC Provider in India & Regional Search
              "Best DSC provider in India", "Best DSC provider near me", "Top digital signature certificate provider India",
              "Authorized DSC provider in India", "CCA approved DSC provider India", "Class 3 DSC provider online India",
              "Best digital signature company in India", "Buy Class 3 DSC online India", "Fast DSC issuing authority India",
              "Paperless DSC provider India", "Lowest price DSC provider India", "Trusted DSC vendor India",
              "Corporate DSC provider India", "CA partner DSC provider India", "Bulk DSC provider for enterprises India",
              "Immediate DSC activation India", "Digital signature certificate provider near me", "Local DSC registration center",
              "Authorized digital signature agent near me", "Fast digital signature provider nearby", "Same day DSC delivery near me",
              "Offline DSC token pickup near me", "Verified DSC partner in my city", "Trusted digital signature consultant near me",
              "Local CA office for DSC token",
              // Best Token Provider in India & Hardware Security
              "Best token provider in India", "Best token provider near me", "FIPS 140-3 token provider India",
              "HYP2003 cryptographic USB token provider India", "USB token for digital signature India", "Cryptographic hardware token supplier India",
              "Best USB token for DSC in India", "CCA approved USB token provider", "Secure USB token dealer India",
              "Wholesale USB crypto token provider India", "Hardware token for income tax filing India", "GST USB token provider India",
              "MCA portal compatible USB token India", "Non-extractable USB cryptographic key provider", "Digital signature token distributors India",
              "USB token provider near me", "Buy crypto token hardware near me", "DSC USB token shop nearby",
              "Hardware token emergency replacement near me", "Authorized HYP2003 token dealer near me", "USB token vendor for CAs near me",
              "Local hardware token support desk", "Computer token drive provider near me", "Instant USB token pickup location",
              "Certified digital token retailer nearby",
              // DSC for Tax, GST, MCA & Compliance (Long-Tail SEO)
              "Class 3 DSC for GST return filing India", "Digital signature for income tax e-filing India", "MCA21 company registration DSC provider",
              "DGFT digital signature token for exporters", "e-Tendering Class 3 DSC provider India", "GeM portal digital signature token",
              "EPFO employer digital signature provider", "IEC linked digital signature certificate India", "Tax audit digital signature token provider",
              "Company incorporation DSC bundle India", "Partnership firm digital signature provider", "LLP registration DSC and token combo",
              "Director KYC digital signature provider", "Form 3CD digital signature token India", "ICEGATE custom digital signature provider",
              "ITR-7 corporate filing DSC provider", "GSTR-9 annual return digital signature token", "SPICe+ form digital signature provider India",
              "RBI and banking compliance DSC token", "E-procurement cryptographic token provider",
              // eSign, Software & Multi-Product Integration
              "Best eSign solution provider India", "Aadhaar based eSign API provider India", "Legal electronic signature platform India",
              "IT Act compliant eSign software India", "Multi-party digital document signing India", "Cloud based eSign and DSC platform",
              "Automated GST and ITR filing software India", "Unified tax compliance and token portal", "Paperless workflow eSign software India",
              "Secure digital document authorization tool India", "Enterprise cryptographic key management platform", "API integration for digital signatures India",
              "Remote document signing software India", "Tamper-proof audit trail eSign provider"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN"
            }
          })
        }}
      />

      {/* 1. SCROLLYTELLING HERO SECTION WITH MASKED SPLIT TEXT */}
      <section ref={heroRef} className="relative pb-10 overflow-hidden">
        <motion.div style={{ y: heroY, scale: heroScale }} className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.7, y: -30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500/10 via-blue-500/10 to-indigo-500/10 border border-teal-500/30 text-teal-900 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest shadow-sm backdrop-blur-md"
            >
              <Sparkles size={14} className="text-teal-600 animate-spin" style={{ animationDuration: "6s" }} />
              <span>TOP DIGITAL SIGNATURE CERTIFICATE & HYP2003 TOKEN PROVIDER INDIA</span>
            </motion.div>

            {/* Split Text Mask Heading */}
            <motion.h1 
              variants={maskContainer}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-6xl font-black tracking-tight leading-tight text-slate-900 flex flex-col items-center justify-center gap-1"
            >
              <div className="overflow-hidden py-1">
                <motion.span variants={maskLine} className="block">
                  Authorized Class 3 DSC, Hardware Tokens & eSign,
                </motion.span>
              </div>
              <div className="overflow-hidden py-1">
                <motion.span variants={maskLine} className="block bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Unified.
                </motion.span>
              </div>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
              className="text-lg sm:text-2xl font-bold text-slate-700 tracking-tight"
            >
              India&apos;s Trusted CCA Approved Provider for Tax, GST, MCA & Compliance.
            </motion.p>

            <motion.div 
              style={{ y: heroCardParallax }}
              initial={{ opacity: 0, y: 50, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }}
              className="bg-white/90 backdrop-blur-2xl border border-white/80 p-6 sm:p-10 rounded-3xl text-left shadow-2xl shadow-teal-900/10 space-y-6 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-500" />

              <div className="border-b border-slate-100 pb-4">
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-lg sm:text-xl font-black text-slate-900"
                >
                  Fast DSC Issuance, FIPS 140-3 Cryptographic Tokens & Legal eSign Solutions.
                </motion.h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Seamless online Class 3 DSC purchasing, instant activation, and wholesale hardware distribution for CAs, enterprises, and tax filing professionals across India.
                </p>
              </div>

              <motion.div 
                variants={scrollyContainer}
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
                    variants={scrollyItem}
                    whileHover={{ scale: 1.05, y: -6 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-slate-50/90 border border-slate-200/80 p-3.5 rounded-2xl flex flex-col items-center justify-center text-center gap-2 shadow-sm hover:shadow-xl hover:shadow-teal-900/15 hover:border-teal-400 hover:bg-white transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-9 h-9 rounded-xl bg-teal-100/60 flex items-center justify-center text-teal-600 transition-colors group-hover:bg-teal-500 group-hover:text-white">
                      <item.icon size={20} />
                    </div>
                    <span>{item.label}</span>
                  </motion.div>
                ))}
              </motion.div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  As a leading authorized digital signature certificate vendor in India, we deliver secure cryptographic keys, MCA21 company incorporation bundles, GST return signing, and DGFT tokens instantly.
                </p>
                <p className="font-medium text-slate-700">
                  Consolidate your digital workflows with FIPS 140-3 HYP2003 hardware tokens and IT Act compliant eSign API integrations.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs font-bold text-teal-800">
                  Official CCA approved partner for Class 3 DSC tokens and enterprise tax compliance software.
                </p>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/products/hyp2003"
                    className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-500 hover:to-blue-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-teal-600/30 hover:shadow-2xl hover:shadow-teal-600/50 transition-all duration-300 flex items-center justify-center gap-2 shrink-0 group"
                  >
                    <span>Explore HYP2003 Hardware Token</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 2. STATS OVERVIEW BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scrollyContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {[
            { value: "2.6 Crore+", label: "HYP2003 Tokens Sold in India", icon: Award },
            { value: "30 Million+", label: "Tokens Deployed Globally", icon: Globe2 },
            { value: "99.9%", label: "Tax & GST Filing Compliance", icon: CheckCircle2 },
            { value: "100%", label: "IT Act Legal Validity (eSign)", icon: Scale },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              variants={scrollyItem}
              whileHover={{ y: -8, scale: 1.03 }}
              className="bg-white/85 backdrop-blur-md border border-slate-200 p-6 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-teal-900/10 text-center space-y-1 hover:border-teal-300 transition-all duration-300"
            >
              <stat.icon className="mx-auto text-teal-600 mb-2" size={24} />
              <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">{stat.value}</div>
              <p className="text-xs text-slate-600 font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* TRUSTED BY / LOGOS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Trusted by top CA firms, tax consultants & enterprises across India</p>
        </motion.div>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollyContainer}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center opacity-85"
        >
          {[
            { name: "FinServe", color: "from-teal-500 to-teal-700" },
            { name: "TaxPro", color: "from-blue-500 to-blue-700" },
            { name: "SecureSign", color: "from-indigo-500 to-indigo-700" },
            { name: "GST Hub", color: "from-emerald-500 to-emerald-700" },
            { name: "CorpLedger", color: "from-slate-600 to-slate-800" },
            { name: "Digitax", color: "from-cyan-500 to-cyan-700" },
          ].map((logo, i) => (
            <motion.div
              key={i}
              variants={scrollyItem}
              whileHover={{ scale: 1.08, opacity: 1, y: -4 }}
              className="bg-white border border-slate-200 rounded-2xl py-5 px-4 flex items-center justify-center shadow-sm hover:shadow-lg hover:border-teal-300 cursor-pointer transition-all duration-300"
            >
              <div className={`h-8 w-24 rounded-lg bg-gradient-to-r ${logo.color} flex items-center justify-center text-white text-[10px] font-black tracking-wider shadow-sm`}>
                {logo.name}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CREATIVE VISUAL STYLES & ANIMATION SHOWCASE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-3 mb-12"
        >
          <span className="text-xs font-extrabold uppercase tracking-widest text-teal-700 bg-teal-100/80 px-3 py-1 rounded-full border border-teal-200">
            Creative & Artistic Direction
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            Explore Our Creative Animation & Visual Styles
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto">
            From expressive storytelling to polished digital assets, our design system supports diverse visual aesthetics tailored for immersive brand experiences.
          </p>
        </motion.div>

        <motion.div 
          variants={scrollyContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* 1. Anime-Inspired */}
          <motion.div
            variants={scrollyItem}
            whileHover={{ y: -10, scale: 1.03 }}
            className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-pink-900/15 hover:border-pink-300 flex flex-col justify-between group transition-all duration-300"
          >
            <div className="relative h-48 w-full bg-gradient-to-br from-pink-950 via-purple-900 to-slate-900 p-6 flex flex-col justify-between text-white overflow-hidden">
              <div className="absolute -top-10 -right-10 w-36 h-36 bg-pink-500/20 rounded-full blur-2xl" />
              <div className="flex justify-between items-center relative z-10">
                <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider text-pink-200">Anime-Inspired</span>
                <Palette size={26} className="text-pink-400" />
              </div>
              <div className="relative z-10 space-y-1">
                <h3 className="text-xl font-black">Expressive & Dynamic Art</h3>
                <p className="text-xs text-pink-200/80">Action lines & dramatic lighting</p>
              </div>
            </div>
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <ul className="space-y-2 text-xs text-slate-600 font-medium">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-pink-600 shrink-0" /> Expressive characters and detailed eyes</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-pink-600 shrink-0" /> Dynamic poses and action lines</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-pink-600 shrink-0" /> Dramatic lighting and vibrant colors</li>
              </ul>
              <div className="pt-4 border-t border-slate-100 text-[11px] font-bold text-pink-700">
                Great for stories, character art, action, fantasy, and emotional scenes
              </div>
            </div>
          </motion.div>

          {/* 2. Stop-Motion */}
          <motion.div
            variants={scrollyItem}
            whileHover={{ y: -10, scale: 1.03 }}
            className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-amber-900/15 hover:border-amber-300 flex flex-col justify-between group transition-all duration-300"
          >
            <div className="relative h-48 w-full bg-gradient-to-br from-amber-950 via-orange-900 to-slate-900 p-6 flex flex-col justify-between text-white overflow-hidden">
              <div className="absolute -top-10 -right-10 w-36 h-36 bg-amber-500/20 rounded-full blur-2xl" />
              <div className="flex justify-between items-center relative z-10">
                <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider text-amber-200">Stop-Motion</span>
                <Film size={26} className="text-amber-400" />
              </div>
              <div className="relative z-10 space-y-1">
                <h3 className="text-xl font-black">Handmade & Physical Feel</h3>
                <p className="text-xs text-amber-200/80">Visible textures & warm cinema</p>
              </div>
            </div>
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <ul className="space-y-2 text-xs text-slate-600 font-medium">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-600 shrink-0" /> Handmade, physical feel</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-600 shrink-0" /> Visible textures and natural imperfections</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-amber-600 shrink-0" /> Warm, cinematic lighting setups</li>
              </ul>
              <div className="pt-4 border-t border-slate-100 text-[11px] font-bold text-amber-800">
                Great for cute characters, fantasy, storytelling, toys, and whimsical scenes
              </div>
            </div>
          </motion.div>

          {/* 3. Motion Graphics */}
          <motion.div
            variants={scrollyItem}
            whileHover={{ y: -10, scale: 1.03 }}
            className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-cyan-900/15 hover:border-cyan-300 flex flex-col justify-between group transition-all duration-300"
          >
            <div className="relative h-48 w-full bg-gradient-to-br from-cyan-950 via-blue-900 to-slate-900 p-6 flex flex-col justify-between text-white overflow-hidden">
              <div className="absolute -top-10 -right-10 w-36 h-36 bg-cyan-500/20 rounded-full blur-2xl" />
              <div className="flex justify-between items-center relative z-10">
                <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider text-cyan-200">Motion Graphics</span>
                <Layout size={26} className="text-cyan-400" />
              </div>
              <div className="relative z-10 space-y-1">
                <h3 className="text-xl font-black">Clean Shapes & Typography</h3>
                <p className="text-xs text-cyan-200/80">Modern & polished transitions</p>
              </div>
            </div>
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <ul className="space-y-2 text-xs text-slate-600 font-medium">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-600 shrink-0" /> Clean shapes, typography, and smooth transitions</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-600 shrink-0" /> Bold colors and graphic compositions</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-cyan-600 shrink-0" /> Modern, professional, polished appearance</li>
              </ul>
              <div className="pt-4 border-t border-slate-100 text-[11px] font-bold text-cyan-800">
                Great for corporate explainers, UI presentations, modern branding, and data visualization
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. INTERACTIVE SOLUTIONS TABBED SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-3 mb-10"
        >
          <span className="text-xs font-extrabold uppercase tracking-widest text-teal-700 bg-teal-100/80 px-3 py-1 rounded-full border border-teal-200">
            Integrated Ecosystem Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            End-to-End Execution for Modern Enterprises
          </h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollyContainer}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8"
        >
          {[
            { id: "esign", label: "eSign Solutions", icon: PenTool },
            { id: "itr", label: "Financial & ITR Filing", icon: Calculator },
            { id: "gst", label: "GST & Bookkeeping", icon: Receipt },
            { id: "token", label: "HYP2003 Token Hardware", icon: ShieldCheck },
          ].map((tab) => (
            <motion.button
              key={tab.id}
              variants={scrollyItem}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-slate-900 text-white shadow-xl shadow-slate-900/25 scale-105"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:shadow-md"
              }`}
            >
              <tab.icon size={16} className={activeTab === tab.id ? "text-teal-400" : "text-slate-500"} />
              <span>{tab.label}</span>
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === "esign" && (
            <motion.div
              key="esign"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.97 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
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
              
              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-inner border border-teal-100 bg-gradient-to-br from-teal-900 via-slate-900 to-slate-950 p-6 flex flex-col justify-between text-white">
                <div className="flex justify-between items-center border-b border-teal-500/20 pb-4">
                  <div className="flex items-center gap-2">
                    <PenTool className="text-teal-400" size={20} />
                    <span className="text-xs font-mono font-bold tracking-wider">SECURE_ESIGN_GATEWAY.sys</span>
                  </div>
                  <span className="text-[10px] bg-teal-500/20 text-teal-300 px-2.5 py-1 rounded-md border border-teal-400/30 font-mono">IT Act Compliant</span>
                </div>
                
                <div className="space-y-3 bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-md">
                  <div className="flex items-center justify-between text-xs text-teal-300 font-mono">
                    <span>Document: Contract_Agreement_2026.pdf</span>
                    <Lock size={14} className="text-teal-400" />
                  </div>
                  <div className="h-1.5 w-full bg-teal-950 rounded-full overflow-hidden">
                    <div className="h-full bg-teal-400 w-full animate-pulse" />
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-slate-300">
                    <CheckCircle2 size={14} className="text-teal-400" />
                    <span>Cryptographic Hash: sha256_verified</span>
                  </div>
                </div>

                <div className="bg-teal-950/80 border border-teal-500/30 p-4 rounded-xl flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-black text-teal-200">Tamper-Proof Signing</h4>
                    <p className="text-[11px] text-slate-400">Secured via cryptographic module</p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center border border-teal-400/40">
                    <ShieldCheck size={22} className="text-teal-400" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "itr" && (
            <motion.div
              key="itr"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.97 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
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

              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-inner border border-blue-100 bg-gradient-to-br from-blue-900 via-slate-900 to-slate-950 p-6 flex flex-col justify-between text-white">
                <div className="flex justify-between items-center border-b border-blue-500/20 pb-4">
                  <div className="flex items-center gap-2">
                    <Calculator className="text-blue-400" size={20} />
                    <span className="text-xs font-mono font-bold tracking-wider">TAX_COMPUTATION_ENGINE.io</span>
                  </div>
                  <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2.5 py-1 rounded-md border border-blue-400/30 font-mono">AIS Synced</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <span className="text-[10px] text-slate-400 font-mono">Gross Income</span>
                    <div className="text-base font-bold text-blue-300 font-mono">₹18,40,000</div>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <span className="text-[10px] text-slate-400 font-mono">Total Deductions</span>
                    <div className="text-base font-bold text-emerald-400 font-mono">₹1,50,000</div>
                  </div>
                </div>

                <div className="bg-blue-950/80 border border-blue-500/30 p-4 rounded-xl flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-black text-blue-200">Smart Tax Portal</h4>
                    <p className="text-[11px] text-slate-400">Automated reconciliation & max savings</p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center border border-blue-400/40">
                    <BarChart3 size={22} className="text-blue-400" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "gst" && (
            <motion.div
              key="gst"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.97 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
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

              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-inner border border-indigo-100 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 p-6 flex flex-col justify-between text-white">
                <div className="flex justify-between items-center border-b border-indigo-500/20 pb-4">
                  <div className="flex items-center gap-2">
                    <Receipt className="text-indigo-400" size={20} />
                    <span className="text-xs font-mono font-bold tracking-wider">GSTN_LEDGER_SYNC.net</span>
                  </div>
                  <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-2.5 py-1 rounded-md border border-indigo-400/30 font-mono">Live ITC Match</span>
                </div>

                <div className="space-y-2 font-mono text-xs bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="flex justify-between text-slate-300">
                    <span>GSTR-3B Status:</span>
                    <span className="text-emerald-400 font-bold">Filed & Verified</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Input Tax Credit:</span>
                    <span className="text-indigo-300">₹2,45,000</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>IRN Invoices:</span>
                    <span className="text-teal-300">1,420 Generated</span>
                  </div>
                </div>

                <div className="bg-indigo-900/60 border border-indigo-500/30 p-4 rounded-xl flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-black text-indigo-200">Automated Reconciliation</h4>
                    <p className="text-[11px] text-slate-400">Real-time GST portal connectivity</p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center border border-indigo-400/40">
                    <Cloud size={22} className="text-indigo-400" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "token" && (
            <motion.div
              key="token"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.97 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
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
                  FIPS 140-3 Level 3 validated cryptographic USB token. Approved by CCA India for storing Class 3 Digital Signature Certificates securely with zero extractability.
                </p>
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
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
                    <Link
                      href="/products/hyp2003"
                      className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-3 rounded-xl text-xs font-bold transition shadow-md hover:shadow-xl hover:shadow-slate-900/30"
                    >
                      <span>View Product Datasheet Page</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </motion.div>
                </div>
              </div>

              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-950 p-6 flex flex-col justify-between text-white">
                <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <Key className="text-teal-400" size={20} />
                    <span className="text-xs font-mono font-bold tracking-wider">HYPERPKI_HARDWARE_MODULE</span>
                  </div>
                  <span className="text-[10px] bg-teal-500/20 text-teal-300 px-2.5 py-1 rounded-md border border-teal-400/30 font-mono">FIPS 140-3 L3</span>
                </div>

                <div className="flex flex-col items-center justify-center space-y-3 py-6 bg-slate-900/50 border border-slate-800 rounded-2xl">
                  <div className="w-20 h-12 bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg border border-slate-600 flex items-center justify-center shadow-lg relative">
                    <div className="w-3 h-3 bg-teal-400 rounded-full animate-ping absolute top-2 right-2" />
                    <Cpu className="text-teal-300" size={24} />
                  </div>
                  <span className="text-xs font-mono text-slate-300">HYP2003 USB Cryptographic Key</span>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center justify-between text-xs font-mono">
                  <span>Memory: 64 KB</span>
                  <span className="text-teal-400">CCA Approved</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* WHY NOVA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-80 sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-gradient-to-br from-teal-900 via-slate-900 to-slate-950 p-8 flex flex-col justify-between text-white"
          >
            <div className="flex items-center justify-between border-b border-teal-500/20 pb-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-teal-400" size={22} />
                <span className="text-xs font-mono font-bold tracking-widest">NOVA_ECOSYSTEM_CORE</span>
              </div>
              <span className="text-[10px] bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full font-mono border border-teal-500/30">Unified Stack</span>
            </div>

            <div className="grid grid-cols-2 gap-4 my-auto">
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md space-y-1">
                <PenTool className="text-teal-400" size={20} />
                <h3 className="text-xs font-bold text-white">eSign Portal</h3>
                <p className="text-[10px] text-slate-400">Legal Digital Signing</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md space-y-1">
                <Calculator className="text-blue-400" size={20} />
                <h3 className="text-xs font-bold text-white">ITR & Tax</h3>
                <p className="text-[10px] text-slate-400">Automated Computation</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md space-y-1">
                <Receipt className="text-indigo-400" size={20} />
                <h3 className="text-xs font-bold text-white">GST Accounting</h3>
                <p className="text-[10px] text-slate-400">GSTR-1 & 3B Filing</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md space-y-1">
                <ShieldCheck className="text-emerald-400" size={20} />
                <h3 className="text-xs font-bold text-white">HYP2003 Token</h3>
                <p className="text-[10px] text-slate-400">Hardware Security</p>
              </div>
            </div>

            <div className="pt-4 border-t border-teal-500/20 flex items-center justify-between text-xs text-slate-300 font-mono">
              <span>Status: Active & Secure</span>
              <span className="text-teal-400">100% Compliant</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <span className="text-xs font-extrabold uppercase tracking-widest text-teal-700 bg-teal-100/80 px-3 py-1 rounded-full border border-teal-200">
              Why Choose Nova
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
              The Only Stack That Unifies Compliance, Tax & Hardware Security
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Most businesses juggle five different portals, three vendors, and a USB token that only works on Windows. Nova removes that complexity with a single authenticated workspace.
            </p>
            <div className="space-y-4">
              {[
                { icon: Layers, title: "Unified Dashboard", desc: "eSign, ITR, GST and token lifecycle in one login." },
                { icon: Lock, title: "Bank-Grade Security", desc: "FIPS 140-3 Level 3 hardware + 256-bit encryption." },
                { icon: Zap, title: "Same-Day Activation", desc: "Digital KYC and key issuance within hours, not days." },
                { icon: FileCheck, title: "100% Legal Validity", desc: "IT Act, CCA and GSTN compliant by design." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  whileHover={{ x: 6, scale: 1.01 }}
                  className="flex gap-4 items-start p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-teal-900/10 hover:border-teal-300 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center shrink-0">
                    <item.icon size={20} className="text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                    <p className="text-xs text-slate-600 mt-0.5">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. VISUAL CAPABILITY GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-2 mb-12"
        >
          <span className="text-xs font-black text-teal-700 uppercase tracking-widest">Digital Platform Pillars</span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900">Comprehensive Business Services</h2>
        </motion.div>
        <motion.div 
          variants={scrollyContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              badge: "Workflow",
              title: "Legal eSign Infrastructure",
              desc: "Execute contracts, agreements, and compliance disclosures electronically with encrypted verification logs.",
              cta: "Explore eSign Features",
              color: "from-teal-950 via-teal-900 to-slate-900",
              text: "text-teal-400",
              icon: PenTool,
            },
            {
              badge: "Compliance",
              title: "ITR & Financial Filings",
              desc: "Assisted Income Tax Return submission, GST e-invoicing, and structured bookkeeping tailored to business size.",
              cta: "Start Tax Preparation",
              color: "from-blue-950 via-blue-900 to-slate-900",
              text: "text-blue-400",
              icon: Calculator,
            },
            {
              badge: "Hardware",
              title: "HYP2003 Token Hardware",
              desc: "FIPS 140-3 Level 3 hardware token for non-extractable key storage and digital signature issuance.",
              cta: "Read Datasheet Specs",
              color: "from-slate-950 via-slate-900 to-teal-950",
              text: "text-indigo-400",
              icon: ShieldCheck,
            },
          ].map((card, i) => (
            <motion.div 
              key={i}
              variants={scrollyItem}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-teal-900/15 hover:border-teal-300 flex flex-col justify-between group transition-all duration-300"
            >
              <div className={`relative h-44 w-full bg-gradient-to-br ${card.color} p-6 flex flex-col justify-between text-white`}>
                <div className="flex justify-between items-center">
                  <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider">{card.badge}</span>
                  <card.icon size={28} className={card.text} />
                </div>
                <h3 className="text-lg font-black">{card.title}</h3>
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <p className="text-xs text-slate-600 leading-relaxed">{card.desc}</p>
                <div className={`pt-4 border-t border-slate-100 text-[11px] font-bold ${card.text} flex items-center justify-between`}>
                  <span>{card.cta}</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SECURITY & COMPLIANCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-gradient-to-br from-slate-900 via-slate-950 to-teal-950 rounded-3xl p-8 sm:p-12 text-white overflow-hidden relative shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">Security First</span>
              <h2 className="text-3xl sm:text-4xl font-black leading-tight">
                Cryptographic Trust Built Into Every Layer
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                From the HYP2003 FIPS-validated token to AES-256 document storage and CCA-approved certificate chains, Nova is engineered for zero-compromise digital identity and statutory compliance.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Shield, label: "FIPS 140-3 Level 3" },
                  { icon: Lock, label: "256-bit AES Encryption" },
                  { icon: Scale, label: "IT Act 2000 Compliant" },
                  { icon: Award, label: "CCA India Approved" },
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3 bg-white/5 border border-white/10 hover:border-teal-400/50 rounded-xl px-4 py-3 transition"
                  >
                    <item.icon size={18} className="text-teal-400" />
                    <span className="text-xs font-bold">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-white/10 bg-slate-950 p-6 flex flex-col justify-between">
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-xs font-mono text-teal-400">ENCRYPTION_MODULE.sec</span>
                <Lock className="text-teal-400" size={18} />
              </div>
              <div className="space-y-2 font-mono text-xs text-slate-300 bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="text-teal-300">&gt; init_aes_256_cipher()</div>
                <div className="text-slate-400">&gt; fips_140_3_hardware_verify()</div>
                <div className="text-emerald-400">&gt; status: secure & authorized</div>
              </div>
              <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono">
                <span>Zero Extractability</span>
                <span className="text-teal-400">CCA Certified</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 5. DATASHEET SPECIFICATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-slate-900 via-slate-950 to-teal-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden"
        >
          <div className="text-center space-y-2 mb-10 relative z-10">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">Hardware Intelligence</span>
            <h2 className="text-2xl sm:text-3xl font-black">HYP2003 Technical Breakdown</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <motion.div whileHover={{ y: -8, scale: 1.02 }} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-teal-400/50 transition-all duration-300 space-y-2">
              <Cpu className="text-teal-400 mb-2" size={28} />
              <h3 className="text-base font-bold text-white">Crypto Engine & Storage</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                64 KB EEPROM memory for digital signing & encryption. Onboard private key generation ensures non-extractable certificate security.
              </p>
              <p className="text-[11px] text-teal-300 font-mono pt-2">• Algorithms: RSA 2048~4096, AES, SHA, ECDSA</p>
            </motion.div>
            <motion.div whileHover={{ y: -8, scale: 1.02 }} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 space-y-2">
              <HardDrive className="text-blue-400 mb-2" size={28} />
              <h3 className="text-base font-bold text-white">Reliability & Memory Cycles</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Tested for enterprise longevity with high rewrite capacity and automated middleware mounting partitions.
              </p>
              <p className="text-[11px] text-blue-300 font-mono pt-2">• At least 500,000 cycles | 10 yr retention</p>
            </motion.div>
            <motion.div whileHover={{ y: -8, scale: 1.02 }} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-indigo-400/50 transition-all duration-300 space-y-2">
              <Server className="text-indigo-400 mb-2" size={28} />
              <h3 className="text-base font-bold text-white">Cross-Platform API Support</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Native compatibility across Windows, Linux, and macOS platforms with full system driver integration.
              </p>
              <p className="text-[11px] text-indigo-300 font-mono pt-2">• MS CAPI, CNG, PKCS#11, PC/SC, CCID</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* INTEGRATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-3 mb-12"
        >
          <span className="text-xs font-extrabold uppercase tracking-widest text-teal-700 bg-teal-100/80 px-3 py-1 rounded-full border border-teal-200">
            Connected Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            Works With the Tools You Already Use
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto">
            Native integrations with GSTN, income-tax portals, popular accounting software, and enterprise SSO providers keep your workflow uninterrupted.
          </p>
        </motion.div>
        <motion.div 
          variants={scrollyContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {[
            { icon: Cloud, title: "GSTN Portal", desc: "Direct return filing" },
            { icon: BarChart3, title: "AIS / Form 26AS", desc: "Auto data fetch" },
            { icon: Smartphone, title: "Aadhaar eSign", desc: "OTP-based signing" },
            { icon: Building2, title: "MCA Portal", desc: "Company filings" },
            { icon: FileCheck, title: "e-Invoice IRP", desc: "QR & IRN generation" },
            { icon: Users, title: "CA Practice Tools", desc: "Bulk client management" },
            { icon: Lock, title: "Enterprise SSO", desc: "SAML / OAuth" },
            { icon: Clock, title: "Scheduled Jobs", desc: "Auto monthly filings" },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={scrollyItem}
              whileHover={{ y: -6, scale: 1.03 }}
              className="bg-white border border-slate-200 rounded-2xl p-5 text-center space-y-2 shadow-sm hover:shadow-xl hover:shadow-teal-900/10 hover:border-teal-300 transition-all duration-300"
            >
              <div className="w-11 h-11 mx-auto rounded-xl bg-teal-50 flex items-center justify-center">
                <item.icon size={22} className="text-teal-600" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
              <p className="text-[11px] text-slate-500">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 6. WORKFLOW STEPPER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-2 mb-12"
        >
          <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">Implementation Process</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">4 Steps to Integrated Operations</h2>
        </motion.div>
        <motion.div 
          variants={scrollyContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { step: "01", title: "Select Services", desc: "Choose your needed service: ITR filing, GST accounting, eSign portal, or HYP2003 tokens." },
            { step: "02", title: "Digital KYC", desc: "Instant paperless identity authorization using official verification records." },
            { step: "03", title: "Key Issuance", desc: "Cryptographic keys generated onboard FIPS 140-3 Level 3 certified tokens." },
            { step: "04", title: "Unified Management", desc: "Oversee all filings, invoices, tokens, and eSign documents under one Nova portal." },
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              variants={scrollyItem}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white border border-slate-200 p-6 rounded-2xl space-y-2 shadow-sm hover:shadow-xl hover:shadow-teal-900/10 hover:border-teal-300 transition-all duration-300 relative"
            >
              {idx < 3 && <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-teal-200 z-10" />}
              <span className="text-3xl font-black text-teal-600 font-mono">{item.step}</span>
              <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-3 mb-12"
        >
          <span className="text-xs font-extrabold uppercase tracking-widest text-teal-700 bg-teal-100/80 px-3 py-1 rounded-full border border-teal-200">
            Customer Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            Trusted by CAs, CFOs & Growing Businesses
          </h2>
        </motion.div>
        <motion.div 
          variants={scrollyContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              quote: "Nova cut our monthly GST and ITR cycle from 9 days to under 48 hours. The HYP2003 tokens work flawlessly across our 40+ machines.",
              name: "Priya Mehta",
              role: "Partner, Mehta & Associates CA",
              initials: "PM",
            },
            {
              quote: "Finally one vendor for eSign, DSC tokens and tax filings. The audit trail and multi-party signing saved us during due-diligence season.",
              name: "Rahul Kapoor",
              role: "CFO, GreenTech Logistics",
              initials: "RK",
            },
            {
              quote: "We deployed 2,000+ HYP2003 tokens across branches. Zero extractability and CCA approval gave our board complete peace of mind.",
              name: "Ananya Sharma",
              role: "Head of IT, Bharat Retail Group",
              initials: "AS",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              variants={scrollyItem}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white border border-slate-200 rounded-3xl p-6 shadow-md hover:shadow-2xl hover:shadow-teal-900/10 hover:border-teal-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <Quote size={28} className="text-teal-200 mb-3" />
                <p className="text-sm text-slate-700 leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-11 h-11 rounded-full bg-teal-100 text-teal-800 font-bold flex items-center justify-center border-2 border-teal-200 shrink-0 text-xs">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{t.name}</p>
                  <p className="text-[11px] text-slate-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* USE-CASE STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-2 mb-10"
        >
          <span className="text-xs font-black text-teal-700 uppercase tracking-widest">Real-World Impact</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">How Teams Use Nova Every Day</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.02, y: -4 }} 
            className="h-64 sm:h-72 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-teal-900/20 bg-gradient-to-br from-teal-950 via-teal-900 to-slate-900 p-8 flex flex-col justify-between text-white border border-teal-800/40 transition-all duration-300"
          >
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold uppercase tracking-widest bg-teal-500/30 text-teal-200 px-3 py-1 rounded-full border border-teal-400/30">CA Practices</span>
              <Users className="text-teal-400" size={24} />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-black">Bulk ITR & GST for 500+ Clients</h3>
              <p className="text-xs text-slate-300">One dashboard, expert review queue, same-day e-verification.</p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.02, y: -4 }} 
            className="h-64 sm:h-72 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-900/20 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 p-8 flex flex-col justify-between text-white border border-blue-800/40 transition-all duration-300"
          >
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold uppercase tracking-widest bg-blue-500/30 text-blue-200 px-3 py-1 rounded-full border border-blue-400/30">Enterprises</span>
              <Building2 className="text-blue-400" size={24} />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-black">Company-Wide eSign & Token Rollout</h3>
              <p className="text-xs text-slate-300">Centralized DSC lifecycle + multi-party contract workflows.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-2 mb-8"
        >
          <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">Common Questions</span>
          <h2 className="text-2xl font-black text-slate-900">Frequently Asked Questions</h2>
        </motion.div>
        <div className="space-y-3">
          {[
            { q: "Where can I find the best DSC provider in India for Class 3 digital signatures?", a: "Nova is a trusted, authorized CCA approved DSC provider in India offering immediate activation, online purchase, and paperless Class 3 digital signature certificates." },
            { q: "How do I buy FIPS 140-3 HYP2003 USB tokens near me?", a: "You can purchase certified HYP2003 cryptographic USB tokens online or through our local verified hardware token distributors across India with instant pickup and vendor support." },
            { q: "Are Nova's eSign and DSC solutions compliant with MCA and GST portals?", a: "Yes, our Class 3 digital signatures and cryptographic tokens are fully compatible with MCA21 company incorporation, SPICe+, GST return filing, ICEGATE, and income tax e-filing." },
            { q: "Can I manage ITR filings and eSign services on the same platform?", a: "Yes. Nova combines income tax preparation, GST returns, eSign portal workflows, and cryptographic token management under one ecosystem." },
            { q: "Are Nova's eSign solutions legally valid under Indian law?", a: "Yes, Nova eSign solutions comply fully with the Indian IT Act, ensuring legally binding signatures across contracts, tax forms, and internal approvals." },
            { q: "What makes HYP2003 the preferred hardware token in India?", a: "With over 2.6 Crore tokens deployed across India since 2013, HYP2003 is FIPS 140-3 Level 3 validated, CCA India approved, and holds over 60% market share." },
            { q: "Does HYP2003 support macOS and Linux operating systems?", a: "Yes, HYP2003 features native drivers and PKCS#11 support across Windows, macOS, and Linux platforms." },
            { q: "How long does digital KYC and token issuance take?", a: "Most users complete paperless KYC and receive activated HYP2003 tokens with Class 3 certificates within the same business day when documentation is in order." },
          ].map((faq, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ scale: 1.01 }}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-teal-300 transition-all duration-300"
            >
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
            </motion.div>
          ))}
        </div>
      </section>

      {/* 8. CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.96, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.01 }}
          className="bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shadow-teal-900/30 relative overflow-hidden"
        >
          <div className="space-y-1 relative z-10">
            <h3 className="text-2xl sm:text-3xl font-black">Consolidate Your Business Operations Today.</h3>
            <p className="text-xs sm:text-sm text-teal-100">Get started with Nova&apos;s eSign, Financial Services, ITR filing, and HYP2003 token solutions.</p>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative z-10 shrink-0">
            <Link 
              href="/products/hyp2003" 
              className="px-6 py-3.5 bg-white hover:bg-slate-50 text-teal-900 font-bold text-xs rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 block"
            >
              Explore HYP2003 Hardware
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
}