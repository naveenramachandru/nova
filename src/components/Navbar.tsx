"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  Menu,
  X,
  MessageSquare,
  ShoppingCart,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface NavMenuItem {
  title: string;
  sub: string;
  id: string;
}

const navMenus: Record<string, NavMenuItem[]> = {
  "Digital Signatures": [
    { title: "What is a DSC?", sub: "Understanding DSC fundamentals", id: "dsc-overview" },
    { title: "Types & Uses", sub: "Class 3, Encrypt & Sign certificates", id: "dsc-types" },
    { title: "Choose My DSC", sub: "Interactive wizard & selector", id: "dsc-selector" },
    { title: "New Application", sub: "Apply for a fresh certificate", id: "dsc-apply" },
    { title: "Renewal Portal", sub: "Renew existing DSC instantly", id: "dsc-renew" },
    { title: "Knowledge Base", sub: "FAQs, manuals & compliance", id: "dsc-faqs" },
  ],
  "USB Hardware Tokens": [
    { title: "Token Overview", sub: "Hardware security modules", id: "token-overview" },
    { title: "Compare Models", sub: "Feature comparison matrix", id: "token-compare" },
    { title: "FIPS 140-3 Standard", sub: "Government-grade security", id: "token-fips" },
    { title: "Brands & Catalog", sub: "HYP2003, ePass2003 & ProxKey", id: "token-brands" },
    { title: "Drivers & Utilities", sub: "Download OS drivers", id: "token-compatibility" },
    { title: "Bulk & Corporate", sub: "Volume discounts for teams", id: "token-bulk" },
  ],
  "Signing Solutions": [
    { title: "Desktop Signer", sub: "Offline bulk PDF sign tool", id: "signer-desktop" },
    { title: "Paperless eSign", sub: "Instant OTP-based signing", id: "signer-paperless" },
    { title: "Web Cloud Signer", sub: "Browser-native PKI solution", id: "signer-web-cloud" },
    { title: "API Integration", sub: "REST APIs for ERP & CRM", id: "signer-api" },
    { title: "Workflow Engine", sub: "Enterprise document routing", id: "signer-workflow" },
    { title: "Schedule Demo", sub: "Book product walkthrough", id: "signer-demo" },
  ],
  "Corporate Tech": [
    { title: "Rojgaar.ai", sub: "AI-powered automated hiring", id: "rojgaar-ai" },
  ],
  "Partnerships": [
    { title: "Reseller Program", sub: "Sell DSCs with high margins", id: "reseller" },
    { title: "Regional Distributor", sub: "State & district territories", id: "distributor" },
    { title: "Referral Network", sub: "Earn recurring commission", id: "referral" },
    { title: "OEM & Tech Partners", sub: "Embed our PKI technology", id: "tech" },
  ],
};

const financialServices: Record<string, { title: string; id: string }[]> = {
  GST: [
    { title: "GST Registration", id: "fin-gst-reg" },
    { title: "GST Filing", id: "fin-gst-filing" },
    { title: "LUT Filing", id: "fin-gst-lut" },
  ],
  "Income Tax": [
    { title: "Self ITR Filing", id: "fin-itr-self" },
    { title: "Hire Tax Expert", id: "fin-itr-expert" },
    { title: "Notice Management", id: "fin-itr-notice" },
  ],
  "Business Setup": [
    { title: "Pvt Ltd Company", id: "fin-business-pvtltd" },
    { title: "LLP Registration", id: "fin-business-llp" },
    { title: "Proprietorship", id: "fin-business-prop" },
  ],
  "Registrations & Licences": [
    { title: "MSME/Udyam", id: "fin-reg-msme" },
    { title: "FSSAI License", id: "fin-reg-fssai" },
    { title: "Trademark", id: "fin-reg-trademark" },
  ],
  "Accounting, Payroll & Audit": [
    { title: "Bookkeeping", id: "fin-acct-bookkeeping" },
    { title: "Payroll Processing", id: "fin-acct-payroll" },
    { title: "Audit Support", id: "fin-acct-audit" },
  ],
  "Tenders & Finance": [
    { title: "Tender Preparation", id: "fin-tenders-prep" },
    { title: "Project Report", id: "fin-tenders-project-report" },
    { title: "CMA Data", id: "fin-tenders-cma" },
  ],
};

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = "919513396263";
    const defaultMessage = "Hello! I need sales and technical assistance with Nova Venture services.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, "_blank");
  };

  const mainMenus = ["Digital Signatures", "USB Hardware Tokens", "Signing Solutions"];
  const secondaryMenus = ["Corporate Tech", "Partnerships"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white transition-all duration-300">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand Logo & Mobile Toggle */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white transition rounded-lg bg-slate-800/50"
            aria-label="Toggle Navigation Menu"
          >
            {mobileDrawerOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          
          <Link href="/" className="flex items-center space-x-2.5 group">
            <div className="w-9 h-9 rounded-xl overflow-hidden bg-slate-800 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
              <Image 
                src="/logo.jpeg" 
                alt="Nova Venture Logo" 
                width={36} 
                height={36} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-extrabold text-sm tracking-wider text-white group-hover:text-teal-400 transition">
                NOVA VENTURE
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          <Link
            href="/"
            className="px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition"
          >
            Home
          </Link>

          {mainMenus.map((category) => (
            <div
              key={category}
              className="relative"
              onMouseEnter={() => setActiveMenu(category)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center space-x-1.5 px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition group">
                <span>{category}</span>
                <ChevronDown
                  size={14}
                  className={`text-slate-400 group-hover:text-white transition-transform duration-200 ${
                    activeMenu === category ? "rotate-180 text-teal-400" : ""
                  }`}
                />
              </button>

              {activeMenu === category && (
                <div className="absolute top-full left-0 w-[460px] bg-slate-900/95 border border-slate-800 shadow-2xl backdrop-blur-xl rounded-2xl p-4 grid grid-cols-2 gap-2">
                  <div className="col-span-2 flex items-center justify-between pb-2 border-b border-slate-800/80 mb-1 px-1">
                    <span className="text-[11px] font-bold text-teal-400 tracking-wider uppercase flex items-center gap-1.5">
                      <Sparkles size={12} /> {category}
                    </span>
                    <span className="text-[10px] text-slate-500">Secure PKI Solutions</span>
                  </div>
                  {navMenus[category].map((item) => (
                    <Link
                      key={item.id}
                      href={`/page/${item.id}`}
                      className="group/item p-2.5 rounded-xl hover:bg-slate-800/80 transition duration-150 border border-transparent hover:border-slate-700/50"
                    >
                      <div className="text-xs font-semibold text-slate-200 group-hover/item:text-teal-300 transition flex items-center justify-between">
                        <span>{item.title}</span>
                        <ArrowRight size={12} className="opacity-0 group-hover/item:opacity-100 -translate-x-1 group-hover/item:translate-x-0 transition-all text-teal-400" />
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                        {item.sub}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Financial Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveMenu("Financial Services")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className="flex items-center space-x-1.5 px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition group">
              <span>Financial Desk</span>
              <ChevronDown
                size={14}
                className={`text-slate-400 group-hover:text-white transition-transform duration-200 ${
                  activeMenu === "Financial Services" ? "rotate-180 text-teal-400" : ""
                }`}
              />
            </button>

            {activeMenu === "Financial Services" && (
              <div className="absolute top-full -left-20 w-[640px] bg-slate-900/95 border border-slate-800 shadow-2xl backdrop-blur-xl rounded-2xl p-5 grid grid-cols-4 gap-4">
                <div className="col-span-4 border-b border-slate-800 pb-2 flex justify-between items-center">
                  <span className="text-[11px] font-bold text-teal-400 tracking-wider uppercase flex items-center gap-1">
                    <CheckCircle2 size={12} /> Compliance & Financial Services
                  </span>
                  <span className="text-[10px] text-slate-500">Government Accredited</span>
                </div>
                {Object.entries(financialServices).map(([group, items]) => (
                  <div key={group} className="space-y-1.5">
                    <div className="text-[11px] font-bold text-slate-300 border-b border-slate-800/60 pb-1">
                      {group}
                    </div>
                    {items.map((item) => (
                      <Link
                        key={item.id}
                        href={`/page/${item.id}`}
                        className="block text-xs text-slate-400 hover:text-teal-300 transition hover:translate-x-0.5 duration-150 py-1"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          {secondaryMenus.map((category) => (
            <div
              key={category}
              className="relative"
              onMouseEnter={() => setActiveMenu(category)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center space-x-1.5 px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition group">
                <span>{category}</span>
                <ChevronDown
                  size={14}
                  className={`text-slate-400 group-hover:text-white transition-transform duration-200 ${
                    activeMenu === category ? "rotate-180 text-teal-400" : ""
                  }`}
                />
              </button>

              {activeMenu === category && (
                <div className="absolute top-full right-0 w-[460px] bg-slate-900/95 border border-slate-800 shadow-2xl backdrop-blur-xl rounded-2xl p-4 grid grid-cols-2 gap-2">
                  <div className="col-span-2 flex items-center justify-between pb-2 border-b border-slate-800/80 mb-1 px-1">
                    <span className="text-[11px] font-bold text-teal-400 tracking-wider uppercase flex items-center gap-1.5">
                      <Sparkles size={12} /> {category}
                    </span>
                    <span className="text-[10px] text-slate-500">Secure PKI Solutions</span>
                  </div>
                  {navMenus[category].map((item) => (
                    <Link
                      key={item.id}
                      href={`/page/${item.id}`}
                      className="group/item p-2.5 rounded-xl hover:bg-slate-800/80 transition duration-150 border border-transparent hover:border-slate-700/50"
                    >
                      <div className="text-xs font-semibold text-slate-200 group-hover/item:text-teal-300 transition flex items-center justify-between">
                        <span>{item.title}</span>
                        <ArrowRight size={12} className="opacity-0 group-hover/item:opacity-100 -translate-x-1 group-hover/item:translate-x-0 transition-all text-teal-400" />
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                        {item.sub}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center space-x-1.5 px-3.5 py-2 text-xs font-medium text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-xl transition duration-200"
          >
            <MessageSquare size={14} />
            <span>WhatsApp Support</span>
          </button>
          
          <Link
            href="/page/dsc-apply"
            className="flex items-center space-x-1.5 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-500 hover:to-teal-400 text-white font-semibold text-xs px-4 py-2 rounded-xl shadow-md shadow-blue-500/20 transition duration-200 active:scale-95"
          >
            <ShoppingCart size={14} />
            <span>Apply Now</span>
          </Link>
        </div>
      </div>

      {/* Fully Functional Mobile Navigation Drawer */}
      {mobileDrawerOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 w-full h-[calc(100vh-4rem)] bg-slate-950 z-50 p-6 overflow-y-auto space-y-6 border-t border-slate-800 shadow-2xl">
          <div className="flex gap-2">
            <button
              onClick={handleWhatsAppClick}
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-xl text-xs font-semibold"
            >
              <MessageSquare size={16} />
              <span>WhatsApp</span>
            </button>
            <Link
              href="/page/dsc-apply"
              onClick={() => setMobileDrawerOpen(false)}
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-blue-600 text-white rounded-xl text-xs font-semibold"
            >
              <ShoppingCart size={16} />
              <span>Apply Now</span>
            </Link>
          </div>

          <div className="space-y-6 pb-32">
            <Link
              href="/"
              onClick={() => setMobileDrawerOpen(false)}
              className="block py-2.5 text-sm font-bold text-white border-b border-slate-800"
            >
              Home Overview
            </Link>

            {Object.keys(navMenus).map((cat) => (
              <div key={cat} className="space-y-2">
                <div className="text-[11px] font-bold text-teal-400 uppercase tracking-wider">
                  {cat}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {navMenus[cat].map((item) => (
                    <Link
                      key={item.id}
                      href={`/page/${item.id}`}
                      onClick={() => setMobileDrawerOpen(false)}
                      className="p-3 bg-slate-900 rounded-xl text-xs text-slate-300 hover:text-white border border-slate-800"
                    >
                      <div className="font-medium text-slate-200">{item.title}</div>
                      <div className="text-[10px] text-slate-500 truncate mt-0.5">{item.sub}</div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}