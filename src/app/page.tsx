"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { HorizonHeroSection } from "@/components/ui/horizon-hero-section";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { Calendar, Code, FileText, User, Clock, ArrowRight, ShieldCheck, Database, Zap, Activity, Users, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const timelineData = [
  {
    id: 1,
    title: "Customer Onboarding & KYC",
    date: "Stage 1",
    content: "Digital loan application, PAN/Aadhaar verification, Face liveliness & Match.",
    category: "Onboarding",
    icon: User,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Underwriting & AI Decision",
    date: "Stage 2",
    content: "Rule-based engine, multi-bureau checks, and automated risk scoring.",
    category: "Decisioning",
    icon: Zap,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Disbursement & LMS",
    date: "Stage 3",
    content: "Loan booking, flexible tenure structures, and repayment schedule generation.",
    category: "Management",
    icon: Database,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 60,
  },
  {
    id: 4,
    title: "Collections & Recovery",
    date: "Stage 4",
    content: "Automated bucket movement, strategy-based allocation, and click-to-call.",
    category: "Operations",
    icon: Activity,
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 30,
  },
  {
    id: 5,
    title: "Reconciliation & Reporting",
    date: "Stage 5",
    content: "Real-time reconciliation, GST reports, and credit bureau reporting.",
    category: "Compliance",
    icon: ShieldCheck,
    relatedIds: [4],
    status: "pending" as const,
    energy: 10,
  },
];

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setIsPastHero(window.scrollY > window.innerHeight * 1.5);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-500 selection:text-white">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? isPastHero
              ? "bg-white/80 backdrop-blur-md border-b border-slate-200 py-4 text-slate-900 shadow-sm"
              : "bg-black/60 backdrop-blur-md border-b border-white/10 py-4 text-white"
            : "bg-transparent py-6 text-white"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter">CARENS AI</div>
          <div className={`hidden md:flex gap-8 text-sm font-medium ${isScrolled && isPastHero ? "text-slate-600" : "text-white/80"}`}>
            <a href="#platform" className="hover:text-indigo-600 transition-colors">Platform</a>
            <a href="#solutions" className="hover:text-indigo-600 transition-colors">Solutions</a>
            <a href="#technology" className="hover:text-indigo-600 transition-colors">Technology</a>
            <a href="#security" className="hover:text-indigo-600 transition-colors">Security</a>
          </div>
          <Button className={`${
            isScrolled && isPastHero 
              ? "bg-indigo-600 text-white hover:bg-indigo-700" 
              : "bg-white text-black hover:bg-white/90"
            } rounded-full px-6 transition-transform hover:scale-105 active:scale-95`}>
            Request Demo
          </Button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative h-[200vh] bg-black">
        <div className="sticky top-0 h-screen">
          <HorizonHeroSection />
        </div>
      </section>

      {/* Intro Context */}
      <section className="py-32 px-6 relative z-10 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-slate-900">
              One Platform. <br />
              <span className="text-indigo-600">Every Stage of Lending.</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium">
              Carens AI provides configurable digital lending infrastructure for NBFCs across the lending lifecycle. From origination to collections, we power faster credit delivery while reducing operational complexity.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Lending Lifecycle (Orbital Timeline) */}
      <section id="platform" className="h-screen w-full relative bg-slate-50 border-t border-slate-200">
        <RadialOrbitalTimeline timelineData={timelineData} />
      </section>

      {/* Architecture & Integration Layer */}
      <section id="technology" className="py-32 px-6 bg-white relative border-t border-slate-200">
        <div className="container mx-auto max-w-6xl">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-slate-900">
              Your Lending Stack. <span className="text-indigo-600">Unified.</span>
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="p-8 border border-slate-200 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                <Users className="w-10 h-10 mb-6 text-indigo-500 group-hover:text-indigo-600 transition-colors" />
                <h3 className="text-xl font-bold mb-4 text-slate-900">Customer Onboarding</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Direct integration with Protean for PAN verification, Aadhaar XML, CKYC search, Video KYC, and advanced face liveliness detection.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="p-8 border border-slate-200 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                <Activity className="w-10 h-10 mb-6 text-indigo-500 group-hover:text-indigo-600 transition-colors" />
                <h3 className="text-xl font-bold mb-4 text-slate-900">Credit Decisioning</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Rule-based underwriting engine with multi-bureau checks, bank statement analysis, and automated accept/reject/refer algorithms.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="p-8 border border-slate-200 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                <Database className="w-10 h-10 mb-6 text-indigo-500 group-hover:text-indigo-600 transition-colors" />
                <h3 className="text-xl font-bold mb-4 text-slate-900">Loan Management</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Highly configurable loan products, daily/monthly interest models, dynamic repayment schedules, and automated overdue tracking.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* AI / Underwriting Deep Dive */}
      <section className="py-32 px-6 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                Turn Data Into <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-500">Credit Decisions.</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 font-medium">
                Our animated decision engine ingests customer identity, income, bank data, and risk signals in real-time. Automated score computation yields instant Accept, Refer, or Reject outcomes.
              </p>
              <ul className="space-y-4">
                {['Multi-bureau checks', 'Fuzzy name matching', 'Configurable eligibility criteria'].map((item, i) => (
                  <li key={i} className="flex items-center text-sm font-semibold text-slate-700">
                    <ShieldCheck className="w-5 h-5 mr-3 text-indigo-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="relative aspect-square md:aspect-[4/3] rounded-2xl border border-slate-200 bg-white p-8 flex flex-col justify-center items-center shadow-2xl">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] rounded-2xl"></div>
                
                <div className="relative z-10 w-full max-w-sm space-y-6">
                  <div className="p-4 rounded-xl border border-slate-100 bg-slate-50 flex items-center justify-between shadow-sm">
                    <span className="text-sm font-semibold text-slate-700">Risk Score Computation</span>
                    <Activity className="w-5 h-5 text-teal-500 animate-pulse" />
                  </div>
                  <div className="flex gap-4">
                    <div className="h-2 flex-1 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-indigo-500"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="p-3 rounded-lg border border-slate-100 bg-slate-50 shadow-sm">
                      <div className="text-xs font-semibold text-slate-500 mb-1">Identity</div>
                      <div className="text-green-600 font-bold text-sm">Verified</div>
                    </div>
                    <div className="p-3 rounded-lg border border-slate-100 bg-slate-50 shadow-sm">
                      <div className="text-xs font-semibold text-slate-500 mb-1">Income</div>
                      <div className="text-green-600 font-bold text-sm">Stable</div>
                    </div>
                    <div className="p-3 rounded-lg border border-teal-200 bg-teal-50 shadow-[0_4px_15px_rgba(20,184,166,0.15)]">
                      <div className="text-xs font-semibold text-teal-600 mb-1">Decision</div>
                      <div className="text-teal-700 font-extrabold text-sm">ACCEPT</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Operations & Collections */}
      <section className="py-32 px-6 bg-white relative border-t border-slate-200">
        <div className="container mx-auto max-w-6xl">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                Collections That Scale <br />
                <span className="text-indigo-600">With Your Portfolio.</span>
              </h2>
              <p className="text-lg text-slate-600 font-medium">
                Automated bucket movement, strategy-based allocation, and a unified operations console to track real-time funnels and 360-degree customer views.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <div className="h-full p-8 border border-slate-200 rounded-2xl bg-slate-50 flex flex-col justify-between hover:shadow-lg transition-shadow">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">Operations Console</h3>
                  <p className="text-slate-600 mb-8 font-medium">One view across your entire lending operations. Monitor SLA, resolutions, and ticket tracking instantly.</p>
                </div>
                <div className="space-y-3">
                  {['Real-time funnel tracking', '360-degree customer view', 'SLA and resolution monitoring'].map((item, i) => (
                    <div key={i} className="flex items-center p-3 rounded-lg bg-white border border-slate-100 text-sm font-semibold text-slate-700 shadow-sm">
                      <ArrowRight className="w-4 h-4 mr-3 text-indigo-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="h-full p-8 border border-slate-200 rounded-2xl bg-slate-50 flex flex-col justify-between hover:shadow-lg transition-shadow">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">Reconciliation Engine</h3>
                  <p className="text-slate-600 mb-8 font-medium">High-volume automated reconciliation for disbursements, repayments, and mandates. Exception identification built-in.</p>
                </div>
                <div className="space-y-3">
                  {['Configurable reconciliation rules', 'Automated bureau file generation', 'Export-compatible formats for ERPs'].map((item, i) => (
                    <div key={i} className="flex items-center p-3 rounded-lg bg-white border border-slate-100 text-sm font-semibold text-slate-700 shadow-sm">
                      <FileCheck className="w-4 h-4 mr-3 text-indigo-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 bg-slate-900 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 via-slate-900 to-slate-900"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 text-white">
              Build the Lending Infrastructure of Tomorrow.
            </h2>
            <p className="text-xl text-slate-300 mb-12 font-medium">
              Zero engineering effort for NBFCs. Modular, configurable, and built for Indian regulatory requirements. Scales from pilot programs to millions of loans.
            </p>
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 rounded-full px-12 py-8 text-lg font-bold transition-transform hover:scale-105 active:scale-95 group shadow-xl">
              Request a Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800 bg-slate-950 text-slate-400 text-sm">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="font-bold text-white mb-4">Carens AI</div>
            <div className="space-y-2 flex flex-col font-medium">
              <a href="#" className="hover:text-white transition-colors">Platform</a>
              <a href="#" className="hover:text-white transition-colors">Solutions</a>
              <a href="#" className="hover:text-white transition-colors">Technology</a>
            </div>
          </div>
          <div>
            <div className="font-bold text-white mb-4">Resources</div>
            <div className="space-y-2 flex flex-col font-medium">
              <a href="#" className="hover:text-white transition-colors">Documentation</a>
              <a href="#" className="hover:text-white transition-colors">API Reference</a>
              <a href="#" className="hover:text-white transition-colors">Security</a>
            </div>
          </div>
          <div>
            <div className="font-bold text-white mb-4">Company</div>
            <div className="space-y-2 flex flex-col font-medium">
              <a href="#" className="hover:text-white transition-colors">About</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
              <a href="#" className="hover:text-white transition-colors">Careers</a>
            </div>
          </div>
          <div>
            <div className="font-bold text-white mb-4">Legal</div>
            <div className="space-y-2 flex flex-col font-medium">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex justify-between items-center border-t border-slate-800 pt-8 font-medium">
          <div>© {new Date().getFullYear()} Carens AI. All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
}
