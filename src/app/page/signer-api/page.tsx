"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Code2,
  Terminal,
  Copy,
  Check,
  ShieldCheck,
  Cpu,
  Server,
  FileCode,
} from "lucide-react";

export default function SignerApiPage() {
  const [copied, setCopied] = useState(false);

  const ccaEsignPayload = `// ASP to ESP (eSign Service Provider) Standard Gateway Request
{
  "asp_id": "ASP_NOVA_00981",
  "txn_id": "TXN_2026_98321049",
  "timestamp": "2026-09-20T19:30:00Z",
  "document_hash": {
    "algorithm": "SHA256",
    "value": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
  },
  "ekyc_mode": "OTP", // Options: OTP | BIOMETRIC | FACE
  "response_url": "https://asp.example.com/api/v1/esign/callback"
}`;

  const copyCode = () => {
    navigator.clipboard.writeText(ccaEsignPayload);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-24 pb-20 bg-slate-50 text-slate-900 min-h-screen space-y-16">
      
      {/* SECTION 1: HERO HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-900 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase">
              <Code2 size={14} className="text-indigo-600" />
              <span>CCA Standard ASP/ESP REST API</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900">
              eSign API & Gateway Technical Specifications
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Integrate Application Service Provider (ASP) systems directly with empaneled eSign Service Providers (ESP)[cite: 12]. Conforms to Controller of Certifying Authorities (CCA) eSign API specs for document hash processing and eKYC verification[cite: 12].
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/page/signer-demo" className="px-6 py-3.5 bg-slate-900 text-white font-bold text-xs rounded-xl hover:bg-slate-800 transition">
                Get Sandbox ASP Credentials
              </Link>
            </div>
          </div>

          {/* CODE INTERACTIVE BOX */}
          <div className="bg-slate-900 text-slate-100 rounded-3xl p-6 shadow-2xl border border-slate-800 relative font-mono text-xs">
            <div className="flex justify-between items-center pb-3 border-b border-slate-800 text-slate-400">
              <span className="flex items-center gap-2 text-[11px]">
                <Terminal size={14} className="text-indigo-400" /> cca_esign_request.json
              </span>
              <button onClick={copyCode} className="hover:text-white transition flex items-center gap-1">
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>
            <pre className="pt-4 overflow-x-auto text-slate-300 leading-relaxed">
              <code>{ccaEsignPayload}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* SECTION 2: CCA COMPLIANT ENDPOINTS OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-2 mb-10">
          <h2 className="text-2xl font-black text-slate-900">CCA Gateway Endpoints</h2>
          <p className="text-xs text-slate-600">Designed strictly for document hash signing without exposing raw document contents[cite: 12].</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-mono text-[10px] font-bold rounded">POST</span>
            <h3 className="text-sm font-bold text-slate-900">/api/v1/esign/initiate</h3>
            <p className="text-xs text-slate-600">Submits document SHA-256 hash and e-KYC request parameters to ESP[cite: 12].</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <span className="px-2 py-0.5 bg-blue-100 text-blue-800 font-mono text-[10px] font-bold rounded">POST</span>
            <h3 className="text-sm font-bold text-slate-900">/api/v1/esign/authorize</h3>
            <p className="text-xs text-slate-600">Validates subscriber eKYC response (Aadhaar OTP / Biometric) with e-KYC provider[cite: 12].</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <span className="px-2 py-0.5 bg-indigo-100 text-indigo-800 font-mono text-[10px] font-bold rounded">POST</span>
            <h3 className="text-sm font-bold text-slate-900">/api/v1/esign/download</h3>
            <p className="text-xs text-slate-600">Retrieves short-lived DSC certificate and cryptographic signature response[cite: 12].</p>
          </div>
        </div>
      </section>

      {/* SECTION 3: SECURITY & AUDIT COMPLIANCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-4 border border-slate-800">
          <ShieldCheck className="text-indigo-400" size={32} />
          <h3 className="text-2xl font-black">Audit & Security Parameters</h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
            As outlined in Section 5 & 8 of the CCA eSign Guidelines, all ESP integrations undergo strict technical evaluation by CCA-empaneled auditors to ensure cryptographic integrity, hardware security module (HSM) compliance, and zero-retention hash processing[cite: 12].
          </p>
        </div>
      </section>

    </div>
  );
}