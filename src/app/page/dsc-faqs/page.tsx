"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, FileText, Download } from "lucide-react";

export default function DscFaqsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What documents are required for an Individual DSC?",
      a: "For an individual DSC, you only need your PAN card and Aadhaar card. The process is completely paperless using Aadhaar eKYC and a quick 30-second video recording."
    },
    {
      q: "Can I download a Digital Signature without a USB Token?",
      a: "No. As per CCA guidelines in India, Class 3 Digital Signature Certificates must be downloaded onto FIPS 140-3 Level 3 validated crypto hardware tokens like HYP2003."
    },
    {
      q: "How long does it take to issue a Digital Signature?",
      a: "Once you complete the eKYC and video verification, the certificate approval takes approximately 15 to 30 minutes during working hours."
    },
    {
      q: "What is the validity period of a DSC?",
      a: "Digital Signature Certificates are typically issued with 1-year, 2-year, or 3-year validity options."
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-100 px-3 py-1 rounded-full">
            Knowledge Base & Support
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900">
            Frequently Asked Questions
          </h1>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left p-5 font-bold text-sm text-slate-900 flex justify-between items-center"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`transition-transform duration-200 ${openIndex === idx ? "rotate-180 text-teal-600" : ""}`} size={18} />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}