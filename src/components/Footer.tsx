import React from "react";
import Link from "next/link";
import {
  Shield,
  Lock,
  Award,
  PhoneCall,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-50 via-teal-50/30 to-indigo-50/40 text-slate-700 border-t border-slate-200/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Trust Badges Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white/80 border border-slate-200/80 rounded-2xl mb-12 backdrop-blur-md shadow-sm">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-sky-50 border border-sky-200 text-sky-600 rounded-xl shrink-0">
              <Shield size={20} />
            </div>
            <div>
              <h5 className="text-xs font-bold text-slate-900">CCA Accredited</h5>
              <p className="text-[11px] text-slate-500">IT Act 2000 Compliant PKI</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-teal-50 border border-teal-200 text-teal-600 rounded-xl shrink-0">
              <Lock size={20} />
            </div>
            <div>
              <h5 className="text-xs font-bold text-slate-900">FIPS 140-3 Hardware</h5>
              <p className="text-[11px] text-slate-500">HYP2003 & ePass Tokens</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-indigo-50 border border-indigo-200 text-indigo-600 rounded-xl shrink-0">
              <Award size={20} />
            </div>
            <div>
              <h5 className="text-xs font-bold text-slate-900">256-Bit SSL Encrypted</h5>
              <p className="text-[11px] text-slate-500">Zero-trust Security Stack</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-emerald-50 border border-emerald-200 text-emerald-600 rounded-xl shrink-0">
              <CheckCircle size={20} />
            </div>
            <div>
              <h5 className="text-xs font-bold text-slate-900">Fast Turnaround</h5>
              <p className="text-[11px] text-slate-500">30-min Verification Desk</p>
            </div>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-teal-600 to-indigo-600 text-white flex items-center justify-center font-bold shadow-md shadow-teal-600/20">
                <Shield size={18} />
              </div>
              <span className="font-mono font-black text-sm tracking-widest text-slate-900">
                NOVA VENTURE
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed pr-4 max-w-md">
              Nova Venture delivers enterprise Class 3 Digital Signature Certificates, high-security FIPS hardware USB tokens, cloud eSign infrastructure, and AI-driven business tools.
            </p>
            <div className="space-y-2 text-xs text-slate-600 pt-2">
              <div className="flex items-center space-x-2">
                <PhoneCall size={14} className="text-teal-600 shrink-0" />
                <span>+91 95133 96263 (Sales & Desk Support)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} className="text-teal-600 shrink-0" />
                <span>support@novaventure.in</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={14} className="text-teal-600 shrink-0 mt-0.5" />
                <span>First floor, Site No 222, CV2 Group Innovation Park, Sri Rama Nagara, Mittaganahalli, Kannur Post, Bengaluru, Karnataka, 560064</span>
              </div>
            </div>
          </div>

          {/* Column 1: PKI & Certificates */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-700 mb-4">
              PKI & Signatures
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>
                <Link href="/page/dsc-overview" className="hover:text-teal-700 transition flex items-center gap-1 font-medium">
                  Class 3 DSC <ExternalLink size={10} className="text-slate-400" />
                </Link>
              </li>
              <li>
                <Link href="/page/dsc-types" className="hover:text-teal-700 transition font-medium">
                  Sign & Encrypt Certificate
                </Link>
              </li>
              <li>
                <Link href="/page/dsc-renew" className="hover:text-teal-700 transition font-medium">
                  Instant DSC Renewal
                </Link>
              </li>
              <li>
                <Link href="/page/token-fips" className="hover:text-teal-700 transition font-medium">
                  HYP2003 FIPS Tokens
                </Link>
              </li>
              <li>
                <Link href="/page/sign-esign" className="hover:text-teal-700 transition font-medium">
                  Paperless eSign API
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Financial Desk */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-700 mb-4">
              Financial Desk
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>
                <Link href="/page/fin-gst-reg" className="hover:text-teal-700 transition font-medium">
                  GST Registration & Filings
                </Link>
              </li>
              <li>
                <Link href="/page/fin-itr-expert" className="hover:text-teal-700 transition font-medium">
                  Income Tax Consulting
                </Link>
              </li>
              <li>
                <Link href="/page/fin-business-pvtltd" className="hover:text-teal-700 transition font-medium">
                  Pvt Ltd Incorporation
                </Link>
              </li>
              <li>
                <Link href="/page/fin-reg-msme" className="hover:text-teal-700 transition font-medium">
                  MSME & Udyam Portal
                </Link>
              </li>
              <li>
                <Link href="/page/fin-tender-prep" className="hover:text-teal-700 transition font-medium">
                  eTender Preparation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Ecosystem */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-700 mb-4">
              Corporate & Partners
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>
                <Link href="/page/corp-rojgaar" className="hover:text-teal-700 transition font-medium">
                  Rojgaar.ai Recruitment
                </Link>
              </li>
              <li>
                <Link href="/page/partner-reseller" className="hover:text-teal-700 transition font-medium">
                  DSC Partner Portal
                </Link>
              </li>
              <li>
                <Link href="/page/partner-distributor" className="hover:text-teal-700 transition font-medium">
                  Distributor Network
                </Link>
              </li>
              <li>
                <Link href="/page/token-bulk" className="hover:text-teal-700 transition font-medium">
                  Bulk Hardware Procurement
                </Link>
              </li>
              <li>
                <Link href="/page/dsc-faqs" className="hover:text-teal-700 transition font-medium">
                  Compliance Documentation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} Nova Venture Ecosystem. All Rights Reserved.
          </div>
          <div className="flex space-x-6">
            <Link href="/page/dsc-faqs" className="hover:text-slate-800 transition">
              Privacy Policy
            </Link>
            <Link href="/page/dsc-faqs" className="hover:text-slate-800 transition">
              Terms of Service
            </Link>
            <Link href="/page/dsc-faqs" className="hover:text-slate-800 transition">
              Security Standards
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}