"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, Award, CheckCircle2, ShoppingCart } from "lucide-react";

export default function TokenBrandsPage() {
  const products = [
    {
      id: "hyp2003",
      title: "HYP2003 (HyperPKI)",
      certification: "FIPS 140-3 Level 3",
      memory: "64 KB / 128 KB",
      img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
      desc: "India's highest selling hardware token with 2.6 Crore+ units deployed. Approved by CCA India for Class 3 DSC.",
      featured: true,
    },
    {
      id: "epass2003",
      title: "ePass2003 Auto",
      certification: "FIPS 140-2 Level 3",
      memory: "64 KB",
      img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      desc: "Feitian ePass2003 auto-driver USB token for digital signing and e-procurement portals.",
      featured: false,
    },
    {
      id: "proxkey",
      title: "ProxKey Watchdata",
      certification: "FIPS 140-2 Level 3",
      memory: "64 KB",
      img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      desc: "Watchdata ProxKey cryptographic USB token with multi-platform middleware drivers.",
      featured: false,
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-slate-50 text-slate-900 min-h-screen space-y-16">
      
      {/* SECTION 1: CATALOG HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-teal-100 px-3 py-1 rounded-full">
          Hardware Storefront
        </span>
        <h1 className="text-4xl font-black text-slate-900">Approved USB Token Brands Catalog</h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
          Explore government-certified PKI hardware tokens from authorized original equipment manufacturers (OEMs).
        </p>
      </section>

      {/* SECTION 2: PRODUCT CARDS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -6 }}
              className={`bg-white rounded-3xl border overflow-hidden shadow-md flex flex-col justify-between ${
                product.featured ? "border-teal-500 ring-2 ring-teal-500/20" : "border-slate-200"
              }`}
            >
              <div className="space-y-4 p-6">
                <div className="relative h-48 rounded-2xl overflow-hidden bg-slate-100">
                  <Image src={product.img} alt={product.title} fill className="object-cover" />
                  {product.featured && (
                    <span className="absolute top-3 left-3 bg-teal-600 text-white text-[9px] font-black uppercase px-2.5 py-1 rounded-full">
                      Best Seller
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-black text-slate-900">{product.title}</h3>
                    <span className="text-[10px] font-mono font-bold text-teal-700">{product.certification}</span>
                  </div>
                  <span className="text-xs font-bold bg-slate-100 text-slate-800 px-2.5 py-1 rounded-lg">
                    {product.memory}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">{product.desc}</p>
              </div>

              <div className="p-6 border-t border-slate-100 pt-4">
                <Link
                  href={product.id === "hyp2003" ? "/products/hyp2003" : "#"}
                  className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition"
                >
                  <ShoppingCart size={14} />
                  <span>View Product Details</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 3: AUTHENTICITY GUARANTEE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="space-y-2">
            <Award className="mx-auto text-teal-600" size={28} />
            <h4 className="text-sm font-bold">100% Genuine OEM Stock</h4>
            <p className="text-xs text-slate-500">Sourced directly from certified hardware manufacturers with warranty.</p>
          </div>
          <div className="space-y-2">
            <ShieldCheck className="mx-auto text-teal-600" size={28} />
            <h4 className="text-sm font-bold">CCA India Authorized</h4>
            <p className="text-xs text-slate-500">Pre-approved for all licensed Certifying Authorities in India.</p>
          </div>
          <div className="space-y-2">
            <CheckCircle2 className="mx-auto text-teal-600" size={28} />
            <h4 className="text-sm font-bold">Ready Stocks & Fast Shipping</h4>
            <p className="text-xs text-slate-500">Express delivery options across all major metro cities and districts.</p>
          </div>
        </div>
      </section>

    </div>
  );
}