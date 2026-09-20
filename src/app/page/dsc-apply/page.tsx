"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart, ShieldCheck, CheckCircle2, Lock, FileText } from "lucide-react";

export default function DscApplyPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-100 px-3 py-1 rounded-full">
            Online Issuance Portal
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900">
            Apply for Fresh Digital Signature
          </h1>
          <p className="text-xs sm:text-sm text-slate-600">
            Paperless Aadhaar PAN eKYC verification. Get your certificate issued within 15 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Form */}
          <div className="lg:col-span-2 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
              >
                <CheckCircle2 className="mx-auto text-emerald-500" size={56} />
                <h3 className="text-2xl font-black text-slate-900">Application Submitted!</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Our verification officer will review your application and send the paperless video verification link to your mobile number.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-lg font-bold text-slate-900 border-b pb-3">Applicant Information</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Full Name (As per PAN)</label>
                    <input required type="text" placeholder="John Doe" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-teal-500 outline-none" />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Mobile Number (Aadhaar Linked)</label>
                    <input required type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-teal-500 outline-none" />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Email Address</label>
                    <input required type="email" placeholder="john@example.com" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-teal-500 outline-none" />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Certificate Type</label>
                    <select className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-teal-500 outline-none">
                      <option>Class 3 Individual Signing (2 Years)</option>
                      <option>Class 3 Individual Combo (2 Years)</option>
                      <option>Class 3 Organization Combo (2 Years)</option>
                    </select>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <ShieldCheck size={16} className="text-teal-600" /> Paperless eKYC Requirements:
                  </span>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    You will need your PAN Card, Aadhaar Number, and a smartphone/webcam for a 30-second video recording.
                  </p>
                </div>

                <button 
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-bold text-xs rounded-xl shadow-lg hover:from-teal-500 hover:to-blue-500 transition"
                >
                  Proceed to Payment & Verification
                </button>
              </form>
            )}
          </div>

          {/* Sidebar Info */}
          <div className="bg-slate-900 text-white p-6 rounded-3xl space-y-6 shadow-xl">
            <h3 className="text-lg font-bold">What is Included?</h3>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-teal-400 shrink-0" /> FIPS 140-3 Certified HYP2003 Token</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-teal-400 shrink-0" /> Free Driver & USB Software Download</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-teal-400 shrink-0" /> Remote Desktop Setup Assistance</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-teal-400 shrink-0" /> CCA India Approved Certificate</li>
            </ul>

            <div className="relative h-40 rounded-2xl overflow-hidden border border-slate-800">
              <Image 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80"
                alt="USB Token Security"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}