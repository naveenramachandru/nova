"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Briefcase,
  Bot,
  Brain,
  Sparkles,
  Kanban,
  CheckCircle2,
  Clock,
  LineChart,
  UserCheck,
  FileText,
  Workflow,
  ArrowRight,
  Zap,
  Target,
  ShieldAlert,
  Layers,
  Search,
  Cpu,
  BarChart3,
  Award,
  ChevronRight,
  Sparkle,
} from "lucide-react";

// ANIMATION VARIANTS
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function RojgaarAiPage() {
  const [activeTab, setActiveTab] = useState<"hr" | "pm">("hr");
  const [selectedWorkflow, setSelectedWorkflow] = useState<number>(0);

  const workflows = [
    {
      title: "1. Smart Job Description & Sourcing",
      role: "HR & Talent",
      desc: "AI dynamically generates JDs based on project demands and auto-sources candidates across top tech portals.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "2. Autonomous AI Interviewing",
      role: "HR & Tech Leads",
      desc: "Conduct automated 1-on-1 technical and behavioral AI video assessments with real-time scoring.",
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "3. Direct Project Onboarding",
      role: "Project Managers",
      desc: "Automated offer dispatch, background verification, and instant task provisioning inside active sprints.",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "4. AI Sprint & Capacity Tracking",
      role: "Execution Leads",
      desc: "Track developer velocity, prevent burnouts, and dynamically reassign blockers using predictive AI.",
      img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-slate-950 text-slate-100 min-h-screen space-y-24 overflow-hidden">
      
      {/* SECTION 1: HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Glow backdrop effect */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="space-y-6 z-10"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3.5 py-1.5 rounded-full text-xs font-semibold">
              <Sparkles size={14} className="text-emerald-400" />
              <span>Next-Gen Workforce & HR Intelligence</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight tracking-tight">
              Rojgaar.ai
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                AI Automated Hiring & Project Management
              </span>
            </h1>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Unify your human resource operations and project management under one intelligent AI engine. From automated resume screening and AI interviews to project allocation and sprint tracking.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="#demo"
                className="px-6 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-xs rounded-xl shadow-lg shadow-emerald-500/20 transition flex items-center gap-2"
              >
                <span>Get Started with Rojgaar.ai</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href="#workflows"
                className="px-6 py-3.5 bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 font-semibold text-xs rounded-xl transition flex items-center gap-2"
              >
                <Bot size={14} className="text-emerald-400" />
                <span>Explore Interactive Workflows</span>
              </Link>
            </div>
          </motion.div>

          {/* HERO VISUAL CARD WITH ANIMATED GLOW */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >
            <div className="relative rounded-3xl p-1 bg-gradient-to-b from-emerald-500/30 via-slate-800 to-slate-900 shadow-2xl">
              <div className="bg-slate-900 rounded-[22px] p-6 sm:p-8 space-y-6">
                <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <Brain size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm">Rojgaar Command Engine</h3>
                      <p className="text-xs text-slate-400">Autonomous HR & PM Insights</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-400 text-[10px] font-bold rounded-full uppercase tracking-wider animate-pulse">
                    Live Engine
                  </span>
                </div>

                {/* TOGGLE PREVIEW SWITCH */}
                <div className="grid grid-cols-2 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-semibold">
                  <button
                    onClick={() => setActiveTab("hr")}
                    className={`py-2 rounded-lg transition ${
                      activeTab === "hr"
                        ? "bg-slate-800 text-emerald-400 shadow"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    HR & Automated Hiring
                  </button>
                  <button
                    onClick={() => setActiveTab("pm")}
                    className={`py-2 rounded-lg transition ${
                      activeTab === "pm"
                        ? "bg-slate-800 text-emerald-400 shadow"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    Project Management AI
                  </button>
                </div>

                {/* ANIMATED PREVIEW SWITCH */}
                <AnimatePresence mode="wait">
                  {activeTab === "hr" ? (
                    <motion.div
                      key="hr-tab"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-3 font-mono text-xs"
                    >
                      <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <UserCheck size={14} className="text-emerald-400" />
                          <span className="text-slate-300">Resume Screening (ATS)</span>
                        </div>
                        <span className="text-emerald-400 font-bold">98.4% JD Match</span>
                      </div>
                      <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Bot size={14} className="text-cyan-400" />
                          <span className="text-slate-300">AI Video Interview</span>
                        </div>
                        <span className="text-slate-400">Auto-Evaluated</span>
                      </div>
                      <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <FileText size={14} className="text-teal-400" />
                          <span className="text-slate-300">Offer Letter Generation</span>
                        </div>
                        <span className="text-emerald-400">Dispatched</span>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="pm-tab"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-3 font-mono text-xs"
                    >
                      <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Kanban size={14} className="text-emerald-400" />
                          <span className="text-slate-300">Sprint Backlog Allocation</span>
                        </div>
                        <span className="text-emerald-400 font-bold">Optimal Load</span>
                      </div>
                      <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Clock size={14} className="text-amber-400" />
                          <span className="text-slate-300">Burnup Risk Detection</span>
                        </div>
                        <span className="text-amber-400 font-bold">2 Risks Flagged</span>
                      </div>
                      <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <LineChart size={14} className="text-cyan-400" />
                          <span className="text-slate-300">Predictive Completion</span>
                        </div>
                        <span className="text-cyan-400 font-bold">On Schedule</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: ANIMATED METRICS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <motion.div variants={fadeInUp} className="space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono">75%</div>
            <div className="text-xs text-slate-400">Faster Hiring Time</div>
          </motion.div>
          <motion.div variants={fadeInUp} className="space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-teal-400 font-mono">90%</div>
            <div className="text-xs text-slate-400">Automated Screening</div>
          </motion.div>
          <motion.div variants={fadeInUp} className="space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-cyan-400 font-mono">3x</div>
            <div className="text-xs text-slate-400">Sprint Delivery Velocity</div>
          </motion.div>
          <motion.div variants={fadeInUp} className="space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono">100%</div>
            <div className="text-xs text-slate-400">Unbiased Candidate Parsing</div>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 3: INTERACTIVE WORKFLOW SHOWCASE (WITH IMAGES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12" id="workflows">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Unified Lifecycle</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">How Rojgaar.ai Connects HR with PM</h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            Click through the stages below to see how AI merges recruitment directly into project execution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* WORKFLOW STEPS LIST */}
          <div className="lg:col-span-5 space-y-3">
            {workflows.map((wf, idx) => (
              <motion.button
                key={idx}
                onClick={() => setSelectedWorkflow(idx)}
                whileHover={{ x: 5 }}
                className={`w-full text-left p-5 rounded-2xl border transition flex items-center justify-between ${
                  selectedWorkflow === idx
                    ? "bg-slate-900 border-emerald-500 shadow-lg shadow-emerald-500/10"
                    : "bg-slate-950/60 border-slate-800 hover:bg-slate-900/50"
                }`}
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">{wf.role}</span>
                  <h3 className="text-sm font-bold text-white">{wf.title}</h3>
                </div>
                <ChevronRight
                  size={18}
                  className={`transition ${selectedWorkflow === idx ? "text-emerald-400 translate-x-1" : "text-slate-600"}`}
                />
              </motion.button>
            ))}
          </div>

          {/* IMAGE DISPLAY PANEL */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedWorkflow}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="relative h-80 sm:h-96 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl"
              >
                <Image
                  src={workflows[selectedWorkflow].img}
                  alt={workflows[selectedWorkflow].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 space-y-2">
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-[10px] font-bold rounded-full uppercase border border-emerald-500/30">
                    {workflows[selectedWorkflow].role}
                  </span>
                  <h3 className="text-xl font-bold text-white">{workflows[selectedWorkflow].title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{workflows[selectedWorkflow].desc}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* SECTION 4: DETAILED HR & PM FEATURE GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">Enterprise Capabilities</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">Full-Stack AI Module Breakdown</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Search size={22} />
            </div>
            <h3 className="text-lg font-bold text-white">Automated Sourcing & ATS</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Scours multi-channel developer networks and matches profiles to job descriptions using semantic vectors.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4"
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Bot size={22} />
            </div>
            <h3 className="text-lg font-bold text-white">AI Video Screening</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Conducts automated interactive interviews, validating code logic, language fluency, and problem-solving skills.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4"
          >
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
              <BarChart3 size={22} />
            </div>
            <h3 className="text-lg font-bold text-white">Predictive Sprint Velocity</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Uses historical developer commit patterns to accurately estimate project release timelines and milestone risks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6" id="demo">
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950 border border-slate-800 rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full" />
          <h2 className="text-3xl font-black text-white">Ready to Transform Your Hiring & Project Workflows?</h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
            Schedule a personalized demo of Rojgaar.ai and see how automated hiring and intelligent project management scale your enterprise.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg transition"
            >
              Request Rojgaar.ai Access
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}