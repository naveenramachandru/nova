"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, ArrowRight, HelpCircle } from "lucide-react";

export default function DscSelectorPage() {
  const [userType, setUserType] = useState<"individual" | "organization">("individual");
  const [useCase, setUseCase] = useState<"mca" | "tender" | "dgft" | "foreign">("mca");

  return (
    <div className="pt-24 pb-20 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
        
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-bold uppercase">
            <Sparkles size={14} /> Guided Certificate Finder
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900">
            Interactive DSC Requirement Wizard
          </h1>
          <p className="text-xs sm:text-sm text-slate-600">
            Answer 2 simple questions to find the exact certificate type needed for your work.
          </p>
        </div>

        {/* Wizard Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8">
          
          {/* Step 1 */}
          <div className="space-y-4">
            <label className="text-xs font-extrabold uppercase text-slate-500 tracking-wider">
              Step 1: Who is applying for the DSC?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => setUserType("individual")}
                className={`p-5 rounded-2xl border text-left font-bold transition flex justify-between items-center ${
                  userType === "individual"
                    ? "border-teal-600 bg-teal-50/50 text-teal-950"
                    : "border-slate-200 text-slate-700 hover:bg-slate-50"
                }`}
              >
                <div>
                  <div className="text-sm font-black">Individual</div>
                  <div className="text-xs font-normal text-slate-500 mt-0.5">For Tax, MCA Director (DIN), GST filing</div>
                </div>
                {userType === "individual" && <CheckCircle2 className="text-teal-600" size={20} />}
              </button>

              <button
                onClick={() => setUserType("organization")}
                className={`p-5 rounded-2xl border text-left font-bold transition flex justify-between items-center ${
                  userType === "organization"
                    ? "border-teal-600 bg-teal-50/50 text-teal-950"
                    : "border-slate-200 text-slate-700 hover:bg-slate-50"
                }`}
              >
                <div>
                  <div className="text-sm font-black">Organization / Entity</div>
                  <div className="text-xs font-normal text-slate-500 mt-0.5">Pvt Ltd, Partnership, LLP, Tenders</div>
                </div>
                {userType === "organization" && <CheckCircle2 className="text-teal-600" size={20} />}
              </button>
            </div>
          </div>

          {/* Step 2 */}
          <div className="space-y-4">
            <label className="text-xs font-extrabold uppercase text-slate-500 tracking-wider">
              Step 2: What is your primary purpose?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { id: "mca", label: "MCA / Tax / GST" },
                { id: "tender", label: "e-Tender / GeM" },
                { id: "dgft", label: "Import / Export" },
                { id: "foreign", label: "Foreign National" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setUseCase(item.id as any)}
                  className={`p-4 rounded-xl border text-xs font-bold transition text-center ${
                    useCase === item.id
                      ? "border-teal-600 bg-slate-900 text-white shadow-md"
                      : "border-slate-200 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Result Recommendation Box */}
          <motion.div 
            key={`${userType}-${useCase}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-900 text-white p-6 rounded-2xl space-y-4"
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] text-teal-400 font-mono font-bold uppercase">Recommended Solution</span>
                <h3 className="text-xl font-black">
                  {userType === "individual" && useCase === "mca" && "Class 3 Individual Signing Certificate"}
                  {userType === "individual" && useCase === "tender" && "Class 3 Individual Combo (Signing + Encryption)"}
                  {userType === "organization" && "Class 3 Organization Combo Certificate"}
                  {useCase === "foreign" && "Class 3 Foreign National Certificate"}
                  {useCase === "dgft" && "Class 3 DGFT Certificate"}
                </h3>
              </div>
              <span className="text-xs bg-teal-500/20 text-teal-300 font-bold px-3 py-1 rounded-full border border-teal-500/30">
                2 Year Validity
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Includes paperless eKYC processing, cryptographic keys generated on-token, and complete setup assistance.
            </p>

            <div className="pt-2 flex justify-end">
              <Link
                href="/page/dsc-apply"
                className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs rounded-xl shadow-md transition flex items-center gap-2"
              >
                Proceed to Online Application <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}