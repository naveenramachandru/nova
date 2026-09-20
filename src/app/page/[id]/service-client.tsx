// src/app/page/[id]/service-client.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Sparkles,
  ArrowLeft,
  CheckCircle2,
  MessageSquare,
  ShoppingCart,
  FileText,
  Clock,
  Lock,
  ChevronRight,
  Download,
  HelpCircle,
  AlertCircle,
  Building2,
  Users,
  Award,
  Zap,
  Check,
  Search,
  ExternalLink,
  PhoneCall,
  PlayCircle,
  Info,
  Layers,
  BarChart3,
  BookOpen,
  ArrowUpRight,
  ShieldAlert,
  FileCheck2,
  Headphones,
  Laptop,
  CheckSquare,
  X,
  Layers3,
  Cpu,
  KeyRound,
  Calculator,
  UserCheck,
} from "lucide-react";

interface ServiceDetail {
  title: string;
  category: string;
  badge: string;
  heroImage: string;
  galleryImages: { title: string; url: string; caption: string }[];
  description: string;
  highlights: string[];
  benefits: string[];
  documentsRequired: string[];
  processingTime: string;
  validityOptions?: string[];
  steps: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  pricing: { tier: string; price: string; period: string; features: string[] }[];
  technicalSpecs?: { label: string; value: string }[];
}

const serviceDetailsMap: Record<string, ServiceDetail> = {
  "dsc-overview": {
    title: "Class 3 Digital Signature Certificate",
    category: "Digital Signatures",
    badge: "CCA Government Approved",
    heroImage:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      {
        title: "Paperless eKYC Flow",
        url: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
        caption: "Instant mobile OTP & Aadhaar verification without physical paperwork.",
      },
      {
        title: "FIPS 140-2 Level 2 Hardware",
        url: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
        caption: "High-security USB smart chip token protecting cryptographic keys.",
      },
      {
        title: "e-Tendering & ICEGATE",
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        caption: "Full authorization across MCA21, GST, e-Procurement, and Trademarks.",
      },
    ],
    description:
      "Class 3 Digital Signature Certificate (DSC) offers the highest echelon of cryptographic authentication and identity assurance in India. Built on 2048-bit RSA encryption, it is legally validated under the IT Act 2000 for MCA21 filings, GST portals, e-Tendering, ICEGATE, and trademark registration.",
    highlights: [
      "Maximum cryptographic security under IT Act 2000",
      "Instant paperless eKYC via Aadhaar or PAN",
      "Compatible with Windows, macOS, and Linux OS",
      "FIPS 140-2 Level 2 Hardware Token Storage",
    ],
    benefits: [
      "Asymmetric 2048-bit RSA key encryption preventing data tampering",
      "Valid across MCA, Income Tax, GST, Customs ICEGATE, and e-Procurement",
      "Instant video verification & Aadhaar paperless eKYC in under 5 minutes",
      "Full compliance with Controller of Certifying Authorities (CCA) norms",
      "Legal non-repudiation in judicial and official proceedings",
    ],
    documentsRequired: [
      "PAN Card copy (Self-attested digital upload)",
      "Aadhaar Card or Valid Government Identity Proof",
      "Applicant Passport Photograph (JPEG / PNG)",
      "Mobile number and Email address linked with Aadhaar",
    ],
    processingTime: "15 to 30 Minutes (Paperless eKYC)",
    validityOptions: ["1 Year", "2 Years", "3 Years"],
    steps: [
      {
        step: "01",
        title: "Submit Online Application",
        desc: "Fill in basic personal/organizational details and choose your desired validity duration.",
      },
      {
        step: "02",
        title: "Aadhaar / PAN eKYC Verification",
        desc: "Complete paperless mobile OTP validation linked with your identity records.",
      },
      {
        step: "03",
        title: "60-Second Video Verification",
        desc: "Record a short 30–60 second video recording through your mobile camera or browser.",
      },
      {
        step: "04",
        title: "Token Download & Dispatch",
        desc: "Upon CCA approval, the digital key is safely downloaded into your USB token.",
      },
    ],
    faqs: [
      {
        q: "What is the legal validity of a Class 3 Digital Signature?",
        a: "Under Section 5 of the Information Technology Act 2000, digital signatures carry equal legal standing to physical handwritten signatures on legal documents.",
      },
      {
        q: "Can I transfer my DSC to another USB drive?",
        a: "No. Cryptographic keys are generated inside FIPS-certified smart chips and cannot be copied, exported, or duplicated onto standard thumb drives.",
      },
      {
        q: "Is video recording mandatory for DSC issuance?",
        a: "Yes, CCA guidelines mandate a short video recording to verify the applicant's identity and prevent impersonation fraud.",
      },
    ],
    pricing: [
      {
        tier: "Standard Individual",
        price: "₹1,499",
        period: "2 Years",
        features: [
          "Class 3 Signing Certificate",
          "Free FIPS USB Hardware Token",
          "Aadhaar Paperless eKYC",
          "Dedicated Phone Support",
        ],
      },
      {
        tier: "Combo Bidding (Sign + Encrypt)",
        price: "₹2,499",
        period: "2 Years",
        features: [
          "Class 3 Sign + Encryption Combo",
          "HYP2003 Hardware Token Included",
          "e-Procurement & Tender Ready",
          "Priority Express Issuance",
        ],
      },
      {
        tier: "Enterprise Bulk Pack",
        price: "₹8,999",
        period: "2 Years / 10 Tokens",
        features: [
          "10 Individual / Org Certificates",
          "Dedicated Account Manager",
          "On-site / Remote Installation",
          "Free Driver & Java Setup Support",
        ],
      },
    ],
    technicalSpecs: [
      { label: "Encryption Algorithm", value: "RSA 2048-bit Asymmetric" },
      { label: "Hash Algorithm", value: "SHA-256 Bit Encryption" },
      { label: "Token Certification", value: "FIPS 140-2 Level 2" },
      { label: "Regulatory Body", value: "CCA India Approved" },
    ],
  },
  "fin-gst-reg": {
    title: "GST Registration & Tax Compliance Portal",
    category: "Financial Desk",
    badge: "Tax Department Accredited",
    heroImage:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      {
        title: "Chartered Accountant Scrutiny",
        url: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
        caption: "Direct document review by experienced tax professionals.",
      },
      {
        title: "GSTIN Allotment Certificate",
        url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
        caption: "Receive official GST REG-06 registration certificate upon approval.",
      },
      {
        title: "Input Tax Credit (ITC) Setup",
        url: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
        caption: "Seamlessly pass through ITC on inter-state commercial transactions.",
      },
    ],
    description:
      "Obtain your 15-digit Goods and Services Tax Identification Number (GSTIN) effortlessly with complete expert handling. We guide businesses, startups, and freelancers through legal structure selections, document verification, and officer response management.",
    highlights: [
      "100% Online application with expert tax review",
      "Guaranteed zero-error document submission",
      "Free Consultation on Composition vs Regular Scheme",
      "Direct response handling for GST clarification notices",
    ],
    benefits: [
      "Legal authorization to collect GST and pass Input Tax Credits (ITC)",
      "Seamless eligibility for government tenders and corporate vendors",
      "Expansion of business operations across state borders",
      "Enhances brand trust and commercial credibility",
    ],
    documentsRequired: [
      "PAN Card of Business Owner / Company / LLP",
      "Aadhaar Card of Authorized Signatory",
      "Proof of Business Premises (Electricity Bill / Rent Agreement)",
      "Bank Account Statement / Cancelled Cheque",
    ],
    processingTime: "3 to 7 Business Days",
    validityOptions: ["Lifetime Registration"],
    steps: [
      {
        step: "01",
        title: "Document Upload",
        desc: "Upload soft copies of your identity, address, and premises ownership documents.",
      },
      {
        step: "02",
        title: "Application Drafting",
        desc: "Our chartered accountants draft your GST REG-01 application with correct HSN/SAC codes.",
      },
      {
        step: "03",
        title: "TRN & ARN Generation",
        desc: "Application is submitted to the portal to generate Temporary Reference Number.",
      },
      {
        step: "04",
        title: "GSTIN Allotment",
        desc: "Receive your official GST registration certificate upon government officer sign-off.",
      },
    ],
    faqs: [
      {
        q: "What is the threshold limit for mandatory GST registration?",
        a: "GST registration is mandatory if turnover exceeds ₹40 Lakhs for goods (₹20 Lakhs for special category states) or ₹20 Lakhs for services.",
      },
      {
        q: "Can I apply for GST registration voluntarily?",
        a: "Yes, businesses below the turnover threshold can register voluntarily to claim Input Tax Credit and trade with larger clients.",
      },
    ],
    pricing: [
      {
        tier: "Proprietorship GST",
        price: "₹999",
        period: "One-time",
        features: [
          "Document Scrutiny",
          "Application Filing",
          "ARN Generation",
          "GST Certificate Handover",
        ],
      },
      {
        tier: "Pvt Ltd / LLP GST",
        price: "₹1,999",
        period: "One-time",
        features: [
          "Corporate Documentation",
          "Board Resolution Drafting",
          "Notice Management Included",
          "First Month Return Advisory",
        ],
      },
    ],
    technicalSpecs: [
      { label: "Portal Authority", value: "GSTN National Portal" },
      { label: "Application Form", value: "GST REG-01" },
      { label: "Certificate Form", value: "GST REG-06" },
      { label: "Turnover Threshold", value: "₹20L Services / ₹40L Goods" },
    ],
  },
  "token-compatibility": {
    title: "USB Hardware Tokens & Driver Suite",
    category: "Hardware Tokens",
    badge: "FIPS 140-2 Level 2 Certified",
    heroImage:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      {
        title: "HYP2003 Token Series",
        url: "https://images.unsplash.com/photo-1597852074816-d933c4d28050?auto=format&fit=crop&w=800&q=80",
        caption: "Plug-and-play USB hardware token compatible with Windows & macOS.",
      },
      {
        title: "Auto-Installing Driver Utility",
        url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
        caption: "Pre-loaded setup utilities eliminate Java PKI configuration errors.",
      },
      {
        title: "Tamper-Proof Smart Chip",
        url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
        caption: "Encrypted internal EEPROM memory preventing private key extraction.",
      },
    ],
    description:
      "Secure hardware token storage designed for storing cryptographic keys and digital certificates. Fully certified under FIPS 140-2 Level 2 standards, ensuring your private keys remain immune to online viruses, extraction attempts, and unauthorized duplication.",
    highlights: [
      "FIPS 140-2 Level 2 validated hardware key storage",
      "Seamless driver auto-run installer for Windows and Mac",
      "Password lock feature with brute-force protection",
      "Compatible with all major Certifying Authorities (CAs)",
    ],
    benefits: [
      "Hardware-enforced private key protection",
      "Plug-and-play functionality across government portals",
      "Multi-year physical durability with anti-static shell",
      "Zero vulnerability to network keyloggers or malware",
    ],
    documentsRequired: [
      "Compatible USB 2.0 / USB 3.0 Port",
      "Administrator permissions for driver installation",
    ],
    processingTime: "Express Doorstep Delivery (1-2 Days)",
    steps: [
      {
        step: "01",
        title: "Token Selection",
        desc: "Choose between HYP2003, ePass2003, or ProxKey tokens.",
      },
      {
        step: "02",
        title: "Dispatch & Shipping",
        desc: "Token is securely packed and dispatched via express courier.",
      },
      {
        step: "03",
        title: "Driver Installation",
        desc: "Plug in the token and run the built-in installer executable.",
      },
      {
        step: "04",
        title: "Download Certificate",
        desc: "Download your Class 3 DSC directly into the smart chip.",
      },
    ],
    faqs: [
      {
        q: "What happens if I forget my token password?",
        a: "For security reasons, entering the wrong password multiple times will lock the hardware token. You will need an Admin Unblocking Key (USER PIN reset).",
      },
    ],
    pricing: [
      {
        tier: "Single HYP2003 Token",
        price: "₹599",
        period: "One-time",
        features: [
          "FIPS 140-2 Certified",
          "Built-in Drivers",
          "Free Courier Delivery",
          "1 Year Warranty",
        ],
      },
      {
        tier: "Bulk 5-Pack Tokens",
        price: "₹2,499",
        period: "One-time",
        features: [
          "5x Hardware Tokens",
          "Priority Express Delivery",
          "Dedicated Partner Rate",
          "2 Year Replacement Warranty",
        ],
      },
    ],
    technicalSpecs: [
      { label: "Standard", value: "PKCS#11 v2.20, Microsoft CAPI" },
      { label: "Memory", value: "64KB High-Performance EEPROM" },
      { label: "Interface", value: "USB 2.0 High Speed" },
      { label: "Certifications", value: "FIPS 140-2 Level 2, CE, FCC" },
    ],
  },
};

export default function ServiceClient({ id }: { id: string }) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [calculatingYears, setCalculatingYears] = useState<number>(2);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Retrieve service detail or compute dynamic fallback based on ID selection
  const detail: ServiceDetail = serviceDetailsMap[id] || {
    title: id
      .replace(/^(fin|dsc|token|signer)-/, "")
      .replace(/-/g, " ")
      .toUpperCase(),
    category: id.startsWith("fin-")
      ? "Financial & Tax Services"
      : id.startsWith("token-")
      ? "Hardware & USB Tokens"
      : id.startsWith("signer-")
      ? "Digital Signing Tools"
      : "Compliance Solutions",
    badge: "Enterprise Grade",
    heroImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      {
        title: "Automated Workflow Integration",
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        caption: "Accelerate compliance processing with streamlined automation.",
      },
      {
        title: "Encrypted Cloud Archiving",
        url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
        caption: "Bank-grade data encryption securing all submitted assets.",
      },
      {
        title: "Dedicated Advisor Access",
        url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
        caption: "Direct support from domain experts throughout the procedure.",
      },
    ],
    description:
      "Enterprise security, cryptographic signing, and regulatory financial solutions engineered for modern business compliance and government portal workflows.",
    highlights: [
      "Government-accredited encryption standard",
      "Full compliance with Indian IT Act 2000 & CCA norms",
      "Fast turnaround time with dedicated support",
      "End-to-end cloud and hardware safety",
    ],
    benefits: [
      "Secures digital interactions against unauthorized alterations",
      "Legal non-repudiation in judicial and statutory portals",
      "Seamless remote verification with zero physical paperwork",
      "Comprehensive expert helpline and setup support",
    ],
    documentsRequired: [
      "Government Identity Proof (PAN Card / Aadhaar)",
      "Active Mobile Number and Email ID",
      "Recent passport-sized photo",
    ],
    processingTime: "15 to 60 Minutes",
    validityOptions: ["1 Year", "2 Years", "3 Years"],
    steps: [
      {
        step: "01",
        title: "Requirement Analysis",
        desc: "Identify necessary certificate class or compliance structure.",
      },
      {
        step: "02",
        title: "Document Submission",
        desc: "Securely upload soft copies via our encrypted client portal.",
      },
      {
        step: "03",
        title: "Authentication & Verification",
        desc: "Complete video recording or eKYC verification process.",
      },
      {
        step: "04",
        title: "Fulfillment & Delivery",
        desc: "Instant download or doorstep delivery of secure USB tokens.",
      },
    ],
    faqs: [
      {
        q: "How fast can I complete the application?",
        a: "Most online eKYC applications are processed and issued within 15 to 30 minutes following video verification.",
      },
      {
        q: "What support is provided during setup?",
        a: "Our technicians provide step-by-step guidance, driver utilities, and remote assistance for setup.",
      },
    ],
    pricing: [
      {
        tier: "Standard Plan",
        price: "₹1,499",
        period: "2 Years",
        features: [
          "Complete Processing",
          "Dedicated Helpline Support",
          "Free Digital Delivery",
          "Government Accredited",
        ],
      },
      {
        tier: "Express Fast-Track",
        price: "₹2,299",
        period: "2 Years",
        features: [
          "Priority Officer Clearance",
          "Included Hardware Token",
          "Remote Desktop Setup",
          "Instant Issue Guarantee",
        ],
      },
    ],
    technicalSpecs: [
      { label: "Security Level", value: "2048-bit High Encryption" },
      { label: "Compliance Status", value: "CCA & IT Act Validated" },
      { label: "Verification Standard", value: "Paperless Aadhaar eKYC" },
    ],
  };

  const handleWhatsApp = () => {
    const message = `Hello Nova Venture Team, I need technical and sales assistance regarding: ${detail.title} (ID: ${id}).`;
    window.open(
      `https://wa.me/919513396263?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const filteredFaqs = detail.faqs.filter(
    (item) =>
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/30 to-blue-50/50 text-slate-800 font-sans antialiased selection:bg-teal-200 selection:text-teal-900 pt-20 pb-24 px-4 sm:px-6 lg:px-8">
      
      {/* SECTION 1: TOP STICKY BREADCRUMB BAR */}
      <section className="max-w-7xl mx-auto mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4 bg-white/80 backdrop-blur-md border border-slate-200/80 px-4 py-2.5 rounded-2xl shadow-sm">
          <nav className="flex items-center space-x-2 text-xs font-medium text-slate-500">
            <Link
              href="/"
              className="hover:text-teal-600 transition flex items-center gap-1"
            >
              <ArrowLeft size={14} /> Home
            </Link>
            <ChevronRight size={12} className="text-slate-400" />
            <span className="text-teal-700 font-semibold">{detail.category}</span>
            <ChevronRight size={12} className="text-slate-400" />
            <span className="text-slate-800 truncate max-w-[180px] sm:max-w-xs font-bold">
              {detail.title}
            </span>
          </nav>
          <div className="flex items-center gap-2 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full animate-pulse">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            System Online • Active Service Node: {id}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* SECTION 2: DYNAMIC HERO BANNER & HEADER */}
        <section className="relative overflow-hidden rounded-3xl bg-white border border-slate-200/80 shadow-xl shadow-slate-200/50 transition-all hover:shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100/80 text-teal-800 border border-teal-200">
                  <Sparkles size={13} className="text-teal-600" />
                  {detail.category}
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100/80 text-blue-800 border border-blue-200">
                  <Award size={13} className="text-blue-600" />
                  {detail.badge}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                {detail.title}
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {detail.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={handleWhatsApp}
                  className="flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-emerald-600/20 transition hover:scale-[1.02] active:scale-95"
                >
                  <MessageSquare size={16} />
                  <span>WhatsApp Specialist</span>
                </button>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-blue-500/20 transition hover:scale-[1.02] active:scale-95"
                >
                  <ShoppingCart size={16} />
                  <span>Apply Online</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 aspect-video lg:aspect-square">
                <img
                  src={detail.heroImage}
                  alt={detail.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent flex items-end p-4">
                  <span className="text-white text-xs font-semibold flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
                    <ShieldCheck size={14} className="text-teal-400" />
                    Verified Service Module: {id}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: KEY HIGHLIGHTS METRICS BAR */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {detail.highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/90 backdrop-blur-sm border border-slate-200/80 p-4 rounded-2xl shadow-sm hover:shadow-md transition flex items-start gap-3.5"
            >
              <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 font-bold text-sm">
                0{idx + 1}
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Feature Core
                </h4>
                <p className="text-xs text-slate-600 font-medium mt-0.5">{item}</p>
              </div>
            </div>
          ))}
        </section>

        {/* SECTION 4: SELECTION-BASED FEATURE VISUAL GALLERY (IMAGE GRID) */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 flex items-center gap-2">
              <Layers3 size={20} className="text-teal-600" />
              Visual Breakdown & Real-World Application
            </h3>
            <span className="text-xs text-slate-500 font-medium hidden sm:inline-block">
              Tailored visual preview for {detail.title}
            </span>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {detail.galleryImages.map((imgItem, gIdx) => (
              <div
                key={gIdx}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-md hover:shadow-xl transition group"
              >
                <div className="relative aspect-video overflow-hidden bg-slate-100">
                  <img
                    src={imgItem.url}
                    alt={imgItem.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                    Module 0{gIdx + 1}
                  </div>
                </div>
                <div className="p-4 space-y-1">
                  <h4 className="font-bold text-slate-900 text-sm group-hover:text-teal-600 transition">
                    {imgItem.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {imgItem.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: DETAILED BENEFIT & REQUIREMENTS GRID */}
        <section className="grid lg:grid-cols-2 gap-8">
          {/* Key Benefits */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-lg shadow-slate-200/40 space-y-5">
            <div className="flex items-center gap-2 text-teal-700 font-bold text-sm uppercase tracking-wider border-b border-slate-100 pb-4">
              <ShieldCheck size={20} className="text-teal-600" />
              <span>Core Operational Benefits ({detail.category})</span>
            </div>
            <ul className="space-y-3.5">
              {detail.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 size={18} className="text-teal-600 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Prerequisites & Verification */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-lg shadow-slate-200/40 space-y-5">
            <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm uppercase tracking-wider border-b border-slate-100 pb-4">
              <FileText size={20} className="text-indigo-600" />
              <span>Mandatory Checklist & Prerequisites</span>
            </div>
            <div className="space-y-4">
              {detail.documentsRequired.map((doc, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/60 text-xs sm:text-sm font-medium text-slate-800"
                >
                  <FileCheck2 size={16} className="text-indigo-600 shrink-0" />
                  <span>{doc}</span>
                </div>
              ))}

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-slate-500 border-t border-slate-100">
                <span className="flex items-center gap-1.5 text-teal-700">
                  <Clock size={15} />
                  Turnaround: <strong className="text-slate-900">{detail.processingTime}</strong>
                </span>
                <span className="flex items-center gap-1.5 text-blue-700">
                  <Lock size={15} />
                  Encrypted Portal Protection
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: DYNAMIC TECHNICAL SPECIFICATIONS TABLE */}
        {detail.technicalSpecs && (
          <section className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-lg space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <Cpu size={20} className="text-teal-600" />
              <h3 className="font-bold text-slate-900 text-sm sm:text-base uppercase tracking-wider">
                Technical Specifications & Compliance Standards
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {detail.technicalSpecs.map((spec, sIdx) => (
                <div key={sIdx} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/70">
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">{spec.label}</span>
                  <span className="text-xs font-bold text-slate-900 mt-0.5 block">{spec.value}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 7: STEP-BY-STEP PROCESS WORKFLOW */}
        <section className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/50 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
              Clear Guidance
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              How the {detail.title} Workflow Operates
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Four structured phases from initial submission to final verification and delivery.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {detail.steps.map((st, idx) => (
              <div
                key={idx}
                className="relative p-5 rounded-2xl bg-gradient-to-b from-slate-50 to-white border border-slate-200/80 hover:border-teal-300 transition hover:-translate-y-1 shadow-sm"
              >
                <span className="text-3xl font-black text-teal-600/30 absolute top-3 right-4">
                  {st.step}
                </span>
                <div className="w-10 h-10 rounded-xl bg-teal-600 text-white font-bold flex items-center justify-center text-sm shadow-md mb-4">
                  {st.step}
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-1">{st.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 8: DURATION & COVERAGE CALCULATOR */}
        {detail.validityOptions && (
          <section className="bg-gradient-to-r from-teal-900 via-slate-900 to-blue-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-950/80 border border-teal-800 px-3 py-1 rounded-full flex items-center gap-1.5 w-fit">
                  <Calculator size={13} /> Interactive Cost Estimator
                </span>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Select Coverage & Renewal Horizon
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Longer term selections avoid annual re-verification and administrative delays.
                </p>
              </div>

              <div className="flex items-center gap-3 bg-slate-800/80 p-1.5 rounded-2xl border border-slate-700">
                {[1, 2, 3].map((yr) => (
                  <button
                    key={yr}
                    onClick={() => setCalculatingYears(yr)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                      calculatingYears === yr
                        ? "bg-teal-500 text-slate-950 shadow-md"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {yr} {yr === 1 ? "Year" : "Years"}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
              <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/60">
                <span className="text-[11px] text-slate-400 uppercase font-bold">Selected Duration</span>
                <p className="text-lg font-bold text-teal-300">{calculatingYears} Years Active Term</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/60">
                <span className="text-[11px] text-slate-400 uppercase font-bold">Estimated Benefit</span>
                <p className="text-lg font-bold text-emerald-400">
                  {calculatingYears === 3 ? "Save 35% on renewals" : calculatingYears === 2 ? "Save 20% on renewals" : "Base Pricing"}
                </p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/60">
                <span className="text-[11px] text-slate-400 uppercase font-bold">Verification Overhead</span>
                <p className="text-lg font-bold text-blue-300">Single Video / OTP Check</p>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 9: SELECTION-BASED PRICING TIERS */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Pricing Plans for {detail.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Transparent rate card with full features included upfront.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {detail.pricing.map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-6 sm:p-8 border transition duration-300 flex flex-col justify-between ${
                  idx === 1
                    ? "bg-white border-teal-500 shadow-2xl shadow-teal-500/10 ring-2 ring-teal-500/20 relative"
                    : "bg-white/80 border-slate-200/80 shadow-lg shadow-slate-200/40 hover:border-slate-300"
                }`}
              >
                {idx === 1 && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-sm">
                    Recommended Choice
                  </span>
                )}

                <div className="space-y-4">
                  <h3 className="font-bold text-slate-900 text-base">{plan.tier}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-slate-900">{plan.price}</span>
                    <span className="text-xs text-slate-500 font-medium">/ {plan.period}</span>
                  </div>

                  <ul className="space-y-2.5 pt-4 border-t border-slate-100">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <Check size={14} className="text-teal-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className={`mt-6 w-full py-2.5 rounded-xl font-bold text-xs transition shadow-md active:scale-95 ${
                    idx === 1
                      ? "bg-teal-600 hover:bg-teal-700 text-white"
                      : "bg-slate-900 hover:bg-slate-800 text-white"
                  }`}
                >
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 10: LEGAL COMPLIANCE & ACCREDITATION INFO */}
        <section className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-lg shadow-slate-200/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
              <ShieldAlert size={24} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                Regulatory Standards & Authorization
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Fully accredited under government certifying provisions for {detail.category}.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200">
              ISO 27001 Certified
            </span>
            <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200">
              Encryption Compliant
            </span>
          </div>
        </section>

        {/* SECTION 11: TECHNICAL COMPATIBILITY MATRIX */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
          <h3 className="font-bold text-sm uppercase tracking-wider text-teal-400 flex items-center gap-2">
            <Laptop size={18} /> OS & Software Compatibility Matrix
          </h3>
          <div className="grid sm:grid-cols-3 gap-4 text-xs">
            <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700">
              <span className="font-bold text-slate-200 block mb-1">Supported OS</span>
              <p className="text-slate-400">Windows 10/11 (32/64 bit), macOS Monterey or newer, Linux Ubuntu.</p>
            </div>
            <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700">
              <span className="font-bold text-slate-200 block mb-1">Browser Support</span>
              <p className="text-slate-400">Google Chrome, Microsoft Edge, Mozilla Firefox, Apple Safari.</p>
            </div>
            <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700">
              <span className="font-bold text-slate-200 block mb-1">Drivers & PKI</span>
              <p className="text-slate-400">HYP2003, ePass2003 Auto-run utilities, Java Runtime Environment.</p>
            </div>
          </div>
        </section>

        {/* SECTION 12: INTERACTIVE SEARCHABLE FAQ ACCORDION */}
        <section className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/50 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-2xl font-black text-slate-900">Frequently Asked Questions</h2>
              <p className="text-xs text-slate-500">Specific answers regarding {detail.title}.</p>
            </div>

            {/* Live Search Input */}
            <div className="relative max-w-xs w-full">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>

          <div className="space-y-3">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-slate-200/80 rounded-2xl overflow-hidden transition"
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full p-4 text-left font-bold text-xs sm:text-sm text-slate-800 bg-slate-50/50 hover:bg-slate-50 flex justify-between items-center gap-2"
                  >
                    <span>{faq.q}</span>
                    <ChevronRight
                      size={16}
                      className={`text-slate-400 transition-transform duration-200 shrink-0 ${
                        activeFaq === idx ? "rotate-90 text-teal-600" : ""
                      }`}
                    />
                  </button>
                  {activeFaq === idx && (
                    <div className="p-4 bg-white text-xs text-slate-600 border-t border-slate-100 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p className="text-xs text-slate-400 py-4 text-center">No matching FAQs found for "{searchQuery}".</p>
            )}
          </div>
        </section>

        {/* SECTION 13: DOWNLOAD UTILITIES BANNER */}
        <section className="bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-200/80 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center justify-center sm:justify-start gap-2">
              <Download size={18} className="text-blue-600" /> Need Drivers or Configuration Software?
            </h3>
            <p className="text-xs text-slate-600">
              Download driver setup utilities, token managers, and PKI signers directly.
            </p>
          </div>
          <Link
            href="/page/token-compatibility"
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition shrink-0"
          >
            Download Center
          </Link>
        </section>

        {/* SECTION 14: SELECTION-BASED USER REVIEWS */}
        <section className="grid sm:grid-cols-3 gap-4">
          <div className="bg-white border border-slate-200/80 p-5 rounded-2xl shadow-sm space-y-2">
            <div className="flex text-amber-400 text-xs">★★★★★</div>
            <p className="text-xs text-slate-600 italic">
              "Completed my {detail.title} setup seamlessly. Excellent phone guidance during verification."
            </p>
            <span className="text-[11px] font-bold text-slate-900 block">— Rajesh M., Verified Client</span>
          </div>
          <div className="bg-white border border-slate-200/80 p-5 rounded-2xl shadow-sm space-y-2">
            <div className="flex text-amber-400 text-xs">★★★★★</div>
            <p className="text-xs text-slate-600 italic">
              "Top notch turnaround time! Had my documents processed in record speed for our corporate submission."
            </p>
            <span className="text-[11px] font-bold text-slate-900 block">— Ananya S., Business Director</span>
          </div>
          <div className="bg-white border border-slate-200/80 p-5 rounded-2xl shadow-sm space-y-2">
            <div className="flex text-amber-400 text-xs">★★★★★</div>
            <p className="text-xs text-slate-600 italic">
              "Clear information, transparent pricing, and instant support on WhatsApp."
            </p>
            <span className="text-[11px] font-bold text-slate-900 block">— Vikram P., Legal Advisor</span>
          </div>
        </section>

        {/* SECTION 15: PERFORMANCE NUMBERS */}
        <section className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-lg grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <span className="text-2xl sm:text-3xl font-black text-teal-600">50,000+</span>
            <span className="text-xs text-slate-500 font-semibold block mt-1">Applications Processed</span>
          </div>
          <div>
            <span className="text-2xl sm:text-3xl font-black text-blue-600">99.8%</span>
            <span className="text-xs text-slate-500 font-semibold block mt-1">On-Time Clearance</span>
          </div>
          <div>
            <span className="text-2xl sm:text-3xl font-black text-indigo-600">100%</span>
            <span className="text-xs text-slate-500 font-semibold block mt-1">Legal Validity</span>
          </div>
          <div>
            <span className="text-2xl sm:text-3xl font-black text-emerald-600">24 / 7</span>
            <span className="text-xs text-slate-500 font-semibold block mt-1">Expert Support</span>
          </div>
        </section>

        {/* SECTION 16: CORPORATE PARTNERSHIP PROMO */}
        <section className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400">
              Bulk Issuance Program
            </span>
            <h3 className="font-bold text-lg sm:text-xl">Are you a Tax Consultant, CA, or Law Firm?</h3>
            <p className="text-xs text-slate-300">
              Join our channel partner portal to handle {detail.category} for your client base at wholesale rates.
            </p>
          </div>
          <Link
            href="/page/reseller"
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-md transition shrink-0"
          >
            Become a Partner
          </Link>
        </section>

        {/* SECTION 17: SECURITY & DATA GUARANTEE */}
        <section className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 sm:p-6 flex items-center gap-4">
          <ShieldCheck size={28} className="text-emerald-600 shrink-0" />
          <div className="text-xs text-emerald-900">
            <strong className="block text-sm font-bold text-emerald-950">Zero Data Retention Standard</strong>
            Uploaded identity records and verification files are automatically purged from staging servers post-clearance in strict accordance with data privacy guidelines.
          </div>
        </section>

        {/* SECTION 18: DIRECT CONSULTATION CARD */}
        <section className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-lg grid sm:grid-cols-2 gap-6 items-center">
          <div className="space-y-3">
            <h3 className="font-black text-slate-900 text-lg sm:text-xl">Require Assistance with {detail.title}?</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our specialized staff is ready to guide you through initial setup, documentation checks, and technical driver installations.
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
              <PhoneCall size={14} className="text-teal-600" /> Support Desk: +91 95133 96263
            </div>
          </div>
          <div className="flex justify-end gap-3">
            <button
              onClick={handleWhatsApp}
              className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition"
            >
              Consult via WhatsApp
            </button>
          </div>
        </section>

        {/* SECTION 19: RELATED SERVICES CROSS-NAVIGATION */}
        <section className="space-y-4">
          <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider">
            Explore Alternate Solutions
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <Link
              href="/page/dsc-overview"
              className="p-3 bg-white border border-slate-200 rounded-xl font-semibold text-slate-700 hover:text-teal-600 hover:border-teal-300 transition text-center shadow-sm"
            >
              Class 3 Digital Signatures
            </Link>
            <Link
              href="/page/fin-gst-reg"
              className="p-3 bg-white border border-slate-200 rounded-xl font-semibold text-slate-700 hover:text-teal-600 hover:border-teal-300 transition text-center shadow-sm"
            >
              GST Registration Desk
            </Link>
            <Link
              href="/page/token-compatibility"
              className="p-3 bg-white border border-slate-200 rounded-xl font-semibold text-slate-700 hover:text-teal-600 hover:border-teal-300 transition text-center shadow-sm"
            >
              USB Hardware Tokens
            </Link>
            <Link
              href="/page/signer-desktop"
              className="p-3 bg-white border border-slate-200 rounded-xl font-semibold text-slate-700 hover:text-teal-600 hover:border-teal-300 transition text-center shadow-sm"
            >
              Bulk PDF Signer Tool
            </Link>
          </div>
        </section>

        {/* SECTION 20: COMPLIANCE & LEGAL FOOTER */}
        <section className="text-center text-[11px] text-slate-400 space-y-1 pt-6 border-t border-slate-200/80">
          <p>© {new Date().getFullYear()} Nova Venture. All rights reserved.</p>
          <p>Licensed Certifying Authority RA Partner. All logos and product names are property of their respective owners.</p>
        </section>

        {/* SECTION 21: BOTTOM STICKY CALL TO ACTION BAR */}
        <section className="fixed bottom-4 left-4 right-4 z-40 max-w-4xl mx-auto">
          <div className="bg-slate-900/90 backdrop-blur-md text-white border border-slate-800 p-3 sm:p-4 rounded-2xl shadow-2xl flex items-center justify-between gap-4">
            <div className="hidden sm:block">
              <span className="text-xs font-bold text-teal-400 block">{detail.title}</span>
              <span className="text-[11px] text-slate-400">Ready to initiate your application?</span>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <button
                onClick={handleWhatsApp}
                className="flex-1 sm:flex-none px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition"
              >
                WhatsApp
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex-1 sm:flex-none px-5 py-2 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-500 hover:to-teal-400 text-white text-xs font-bold rounded-xl shadow-md transition"
              >
                Apply Online
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 22: APPLICATION POPUP MODAL */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-5 border border-slate-200 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
              <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <Sparkles size={16} className="text-teal-600" /> Start Application
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="space-y-3 text-xs text-slate-600">
                <p>
                  You are starting an application for:{" "}
                  <strong className="text-slate-900">{detail.title}</strong>
                </p>
                <div className="space-y-2">
                  <label className="block font-bold text-slate-700">Applicant / Company Name</label>
                  <input
                    type="text"
                    placeholder="Enter full legal name"
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block font-bold text-slate-700">Mobile Number</label>
                  <input
                    type="tel"
                    placeholder="Mobile number for OTP"
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    alert(`Application registered for ${detail.title}! Our team will reach out immediately.`);
                    setIsModalOpen(false);
                  }}
                  className="flex-1 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl shadow-md transition"
                >
                  Submit & Proceed
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}