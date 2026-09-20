"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, CheckCircle2, ShieldCheck, Clock, UserCheck } from "lucide-react";

export default function ScheduleDemoPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-24 pb-20 bg-slate-50 text-slate-900 min-h-screen space-y-12">
      
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-100 px-3 py-1 rounded-full">
          Live Product Walkthrough
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900">
          Schedule a Custom Enterprise Demo
        </h1>
        <p className="text-xs sm:text-sm text-slate-600">
          Speak with a PKI security engineer to evaluate our Desktop, Web, or API Signing solutions for your organization.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Form */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 space-y-4"
            >
              <CheckCircle2 className="mx-auto text-emerald-500" size={56} />
              <h3 className="text-2xl font-black text-slate-900">Demo Walkthrough Booked!</h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                A calendar invitation with Google Meet link has been dispatched to your work email address.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 border-b pb-3">Your Information</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Full Name</label>
                  <input required type="text" placeholder="John Doe" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-teal-500 outline-none" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Work Email</label>
                  <input required type="email" placeholder="john@company.com" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-teal-500 outline-none" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Company Name</label>
                  <input required type="text" placeholder="Acme Corp Ltd" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-teal-500 outline-none" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Interested Solution</label>
                  <select className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-teal-500 outline-none">
                    <option>Desktop Offline Bulk Signer</option>
                    <option>Paperless eSign (Aadhaar OTP)</option>
                    <option>REST API & SDK Integration</option>
                    <option>Enterprise Workflow Engine</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1 pt-2">
                <label className="text-xs font-bold text-slate-700">Preferred Date & Time</label>
                <input required type="datetime-local" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-teal-500 outline-none" />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-lg transition"
              >
                Confirm Product Walkthrough
              </button>
            </form>
          )}
        </div>

        {/* Sidebar */}
        <div className="bg-slate-900 text-white p-6 rounded-3xl space-y-6 shadow-xl">
          <h3 className="text-lg font-bold">What to Expect</h3>
          <ul className="space-y-3 text-xs text-slate-300">
            <li className="flex items-center gap-2"><UserCheck size={16} className="text-teal-400 shrink-0" /> 1-on-1 session with a PKI Architect</li>
            <li className="flex items-center gap-2"><Clock size={16} className="text-teal-400 shrink-0" /> 30-minute tailored demonstration</li>
            <li className="flex items-center gap-2"><ShieldCheck size={16} className="text-teal-400 shrink-0" /> Architecture & compliance consultation</li>
          </ul>
        </div>

      </div>
    </div>
  );
}