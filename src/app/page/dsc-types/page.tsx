"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { KeyRound, Shield, FileCheck, CheckCircle2, ArrowRight } from "lucide-react";

export default function DscTypesPage() {
  return (
    <div className="pt-24 pb-20 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* Hero Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-teal-700 bg-teal-100 px-3 py-1 rounded-full">
            Certificate Taxonomy
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900">
            Types & Applications of Digital Signatures
          </h1>
          <p className="text-slate-600 text-sm sm:text-base">
            Select the right Certificate Class based on your organizational compliance needs and portal requirements.
          </p>
        </div>

        {/* Certificate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Class 3 Signing */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-white border border-slate-200 rounded-3xl p-6 shadow-md space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
                  alt="Class 3 Signing"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md">
                <KeyRound size={14} /> Class 3 Signing
              </div>
              <h3 className="text-xl font-black text-slate-900">Individual & Organizational Signing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Used for MCA company filings, Income Tax returns, GST submission, EPFO portal, and IE Code applications.
              </p>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-teal-600" /> MCA / ROC Filings</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-teal-600" /> Income Tax & GST Portals</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-teal-600" /> EPFO & Import/Export</li>
              </ul>
            </div>
            <Link href="/page/dsc-apply" className="w-full py-3 bg-slate-900 text-white text-xs font-bold rounded-xl text-center hover:bg-slate-800 transition">
              Apply Class 3 Signing
            </Link>
          </motion.div>

          {/* Class 3 Encryption */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-white border border-slate-200 rounded-3xl p-6 shadow-md space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
                  alt="Class 3 Encryption"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                <Shield size={14} /> Class 3 Encryption
              </div>
              <h3 className="text-xl font-black text-slate-900">Data & Document Protection</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Protects sensitive data transmitted during online e-Tendering processes to prevent unauthorized interception.
              </p>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-600" /> Secure Document Encryption</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-600" /> Confidential e-Tender Submissions</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-600" /> Key Exchange Security</li>
              </ul>
            </div>
            <Link href="/page/dsc-apply" className="w-full py-3 bg-slate-900 text-white text-xs font-bold rounded-xl text-center hover:bg-slate-800 transition">
              Apply Encryption DSC
            </Link>
          </motion.div>

          {/* Combo Certificate */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-white border border-teal-500 rounded-3xl p-6 shadow-xl space-y-6 flex flex-col justify-between relative"
          >
            <div className="absolute -top-3 right-6 bg-teal-600 text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full">
              Most Popular
            </div>
            <div className="space-y-4">
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80"
                  alt="Combo DSC"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md">
                <FileCheck size={14} /> Class 3 Combo (Sign + Encrypt)
              </div>
              <h3 className="text-xl font-black text-slate-900">Complete e-Tendering Solution</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Includes both Signing and Encryption certificates in a single FIPS-validated USB security token.
              </p>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-teal-600" /> IRCTC, Railways, GeM Portal</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-teal-600" /> State e-Procurement Systems</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-teal-600" /> Includes HYP2003 Hardware Token</li>
              </ul>
            </div>
            <Link href="/page/dsc-apply" className="w-full py-3 bg-teal-600 text-white text-xs font-bold rounded-xl text-center hover:bg-teal-500 transition shadow-md">
              Apply Combo Certificate
            </Link>
          </motion.div>
        </div>

      </div>
    </div>
  );
}