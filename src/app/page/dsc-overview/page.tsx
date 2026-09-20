"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, FileCheck2, Cpu, CheckCircle2, ArrowRight, Lock, Award } from "lucide-react";

export default function DscOverviewPage() {
  return (
    <div className="pt-24 pb-20 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <ShieldCheck size={14} /> Digital Signature Fundamentals
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight">
              What is a Digital Signature Certificate (DSC)?
            </h1>
            <p className="text-slate-600 text-base leading-relaxed">
              A Digital Signature Certificate (DSC) is a secure digital equivalent of a physical signature or handwritten signature. Issued by licensed Certifying Authorities (CAs), it cryptographically authenticates your identity for online filings, e-tendering, and legal documents under the Indian IT Act, 2000.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link 
                href="/page/dsc-apply"
                className="px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs rounded-xl shadow-lg transition flex items-center gap-2"
              >
                Apply for New DSC <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border border-slate-200"
          >
            <Image 
              src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80"
              alt="Digital Signature Concept"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="text-[10px] uppercase font-bold text-teal-400">Security Standard</span>
              <h3 className="text-lg font-bold">100% Legal & Cryptographically Tamper-Proof</h3>
            </div>
          </motion.div>
        </div>

        {/* Key Features Grid */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-xs font-bold text-teal-700 uppercase tracking-widest">Core Architecture</h2>
            <p className="text-2xl font-black text-slate-900">How PKI Digital Signatures Work</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Lock,
                title: "Asymmetric Encryption",
                desc: "Uses a pair of Public and Private keys. Private keys are securely contained inside USB tokens."
              },
              {
                icon: FileCheck2,
                title: "Tamper Evident",
                desc: "Any modification made to a document post-signing invalidates the certificate signature immediately."
              },
              {
                icon: Award,
                title: "Legal Acceptance",
                desc: "Accepted across MCA, Income Tax, GST, e-Procurement portals, and Indian Courts."
              }
            ].map((card, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3"
              >
                <card.icon className="text-teal-600" size={28} />
                <h3 className="text-lg font-bold text-slate-900">{card.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}