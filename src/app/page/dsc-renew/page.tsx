"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { RefreshCw, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

export default function DscRenewPage() {
  return (
    <div className="pt-24 pb-20 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-xs font-bold uppercase">
              <RefreshCw size={14} className="animate-spin text-blue-600" /> Instant Renewal Engine
            </div>
            <h1 className="text-4xl font-black text-slate-900">
              Renew Your Existing Digital Signature Certificate
            </h1>
            <p className="text-slate-600 text-sm leading-relaxed">
              Re-use your existing HYP2003 or ePass USB Hardware Token to renew your Digital Signature in 10 minutes without paying extra hardware costs.
            </p>
            
            <div className="p-4 bg-white rounded-2xl border border-slate-200 space-y-3 shadow-sm">
              <h3 className="text-xs font-bold text-slate-900 uppercase">Renewal Process Checklist:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-teal-600" /> Same PAN Number</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-teal-600" /> Reuse Existing USB Token</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-teal-600" /> Paperless Video Verification</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-teal-600" /> Instant On-Token Download</span>
              </div>
            </div>
          </div>

          <div className="relative h-80 rounded-3xl overflow-hidden shadow-xl border border-slate-200">
            <Image 
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80"
              alt="Certificate Renewal"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
}