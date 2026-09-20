"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  GitMerge,
  Users,
  CheckCircle2,
  Clock,
  ShieldCheck,
  ArrowRight,
  Layers,
} from "lucide-react";

export default function WorkflowEnginePage() {
  return (
    <div className="pt-24 pb-20 bg-slate-50 text-slate-900 min-h-screen space-y-16">
      
      {/* SECTION 1: HERO BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <GitMerge size={14} className="text-purple-600" />
              <span>Multi-Party Document Orchestration</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight">
              Enterprise Document Workflow & Approval Engine
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Automate complex multi-step approval routing, sequential/parallel signing chains, automated email reminders, and audit tracking across your organizational hierarchy.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/page/signer-demo"
                className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-lg transition flex items-center gap-2"
              >
                <span>Book Workflow Walkthrough</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

          <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="Multi Party Approval Workflow"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: WORKFLOW STAGES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-bold text-purple-700 uppercase tracking-widest">Routing Capabilities</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Intelligent Routing & Signer Roles</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <GitMerge className="text-purple-600" size={28} />
            <h3 className="text-lg font-bold text-slate-900">Sequential Signing</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Routes document to Signer B only after Signer A completes their digital signature.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <Users className="text-purple-600" size={28} />
            <h3 className="text-lg font-bold text-slate-900">Parallel Approval</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Dispatches document simultaneously to multiple stakeholders for fast concurrent review.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <Clock className="text-purple-600" size={28} />
            <h3 className="text-lg font-bold text-slate-900">Auto Reminders & Expiry</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Automated WhatsApp & Email notifications sent to pending signers with customizable expiration dates.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: AUDIT TRAIL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">Compliance Certificate</span>
            <h3 className="text-2xl sm:text-3xl font-black">Tamper-Proof Audit Certificates</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Every completed workflow automatically generates a court-admissible Certificate of Completion detailing IP addresses, timestamps, identity verification scores, and cryptographic SHA-256 digests.
            </p>
          </div>
          <div className="relative h-64 rounded-2xl overflow-hidden border border-slate-800">
            <Image
              src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80"
              alt="Audit Trail Legal Document"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

    </div>
  );
}