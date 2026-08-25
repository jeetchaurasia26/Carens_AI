"use client";

import React from "react";
import Image from "next/image";
import dashboardImg from "../../../public/dashboard.png";
import { motion } from "framer-motion";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { ArrowRight, ShieldCheck, Database, Zap, Users, Activity } from "lucide-react";
import { ThreeDTiltCard } from "@/components/ui/3d-tilt-card";
import LunarGravityCard from "@/components/ui/lunar-gravity-card";
import { SparklesCore } from "@/components/ui/sparkles";

const timelineData = [
  { id: 1, title: "Customer Onboarding & KYC", date: "Stage 1", content: "Digital loan application, PAN/Aadhaar verification.", category: "Onboarding", icon: Users, relatedIds: [2], status: "completed" as const, energy: 100 },
  { id: 2, title: "Underwriting & AI Decision", date: "Stage 2", content: "Rule-based engine, multi-bureau checks, and automated risk scoring.", category: "Decisioning", icon: Zap, relatedIds: [1, 3], status: "completed" as const, energy: 90 },
  { id: 3, title: "Disbursement & LMS", date: "Stage 3", content: "Loan booking, flexible tenure structures.", category: "Management", icon: Database, relatedIds: [2, 4], status: "in-progress" as const, energy: 60 },
  { id: 4, title: "Collections & Recovery", date: "Stage 4", content: "Automated bucket movement, strategy-based allocation.", category: "Operations", icon: Activity, relatedIds: [3, 5], status: "pending" as const, energy: 30 },
  { id: 5, title: "Reconciliation & Reporting", date: "Stage 5", content: "Real-time reconciliation, GST reports.", category: "Compliance", icon: ShieldCheck, relatedIds: [4], status: "pending" as const, energy: 10 },
];

export function DemoHtmlContent() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2 + 0.5,
            duration: 0.8,
            ease: "easeInOut" as any,
        },
    }),
  };

  return (
    <div className="w-full text-white pointer-events-none">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 md:px-6">
        <div className="relative z-10 text-center p-6 pointer-events-auto mt-24">
            <motion.div
                custom={0}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6 backdrop-blur-sm"
            >
                <Zap className="h-4 w-4 text-purple-400" />
                <span className="text-sm font-medium text-gray-200">
                    AI-Powered Lending CRM
                </span>
            </motion.div>

            <motion.div
                custom={1}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="w-full md:w-[40rem] relative flex flex-col items-center justify-center mb-6 mx-auto"
            >
                <h1 className="text-5xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 relative z-20">
                    Careens AI
                </h1>
                <div className="w-full h-24 relative -mt-2">
                    {/* Gradients */}
                    <div className="absolute inset-x-10 md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-10 md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-20 md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-20 md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px w-1/4" />

                    {/* Core component */}
                    <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,white,transparent)] pointer-events-none">
                       <SparklesCore
                           background="transparent"
                           minSize={0.4}
                           maxSize={1}
                           particleDensity={1200}
                           className="w-full h-full"
                           particleColor="#FFFFFF"
                       />
                    </div>
                </div>
            </motion.div>

            <motion.p
                custom={2}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="max-w-2xl mx-auto text-lg text-gray-400 mb-10"
            >
                The intelligent lending suite that automates underwriting, streamlines collections, and scales your NBFC operations in real-time.
            </motion.p>

            <motion.div
                custom={3}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
            >
                <button className="px-8 py-4 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition-colors duration-300 flex items-center gap-2 mx-auto pointer-events-auto">
                    Request a Demo
                    <ArrowRight className="h-5 w-5" />
                </button>
            </motion.div>
        </div>
      </section>

      {/* 2. DASHBOARD PREVIEW */}
      <section className="min-h-[60vh] md:min-h-screen w-full py-8 md:py-32 pointer-events-auto bg-black/40 backdrop-blur-sm border-t border-white/5 overflow-hidden">
        <ContainerScroll
          titleComponent={
            <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4 px-4">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-black mt-1 leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 block pb-2">
                Real-time Data
              </span>
            </h1>
          }
        >
          <div className="w-full h-full bg-white flex flex-col p-1 md:p-2 rounded-xl relative overflow-hidden">
            <Image 
              src={dashboardImg} 
              alt="Admin Dashboard" 
              fill
              className="object-cover object-top rounded-lg md:rounded-xl contrast-[1.05] saturate-[1.1] brightness-[1.02] drop-shadow-md" 
            />
          </div>
        </ContainerScroll>
      </section>

      {/* 3. TIMELINE */}
      <section id="platform" className="min-h-[50vh] md:min-h-screen w-full relative pointer-events-auto bg-black/60 backdrop-blur-md border-t border-white/5 flex flex-col items-center pt-12 md:pt-24 pb-8 md:pb-12 overflow-hidden">
         <div className="text-center z-10 pointer-events-none px-4">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight drop-shadow-2xl">The Lending Lifecycle</h2>
            <p className="text-gray-400 mt-2 font-semibold text-sm md:text-lg">Click nodes to explore each stage</p>
         </div>
        <div className="w-full flex-1 mt-8 md:mt-20 relative">
          <RadialOrbitalTimeline timelineData={timelineData} />
        </div>
      </section>

      {/* 4. FEATURES */}
      <section id="technology" className="min-h-[50vh] md:min-h-screen py-16 md:py-40 px-4 md:px-6 pointer-events-auto relative">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-7xl font-black tracking-tighter drop-shadow-2xl px-2">
              Your Lending Stack. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">Unified in 3D.</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <ThreeDTiltCard className="group h-auto md:h-[400px]">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-6 border border-white/20 group-hover:scale-110 transition-transform duration-500">
                <Users className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-3">Customer Onboarding</h3>
              <p className="text-sm md:text-base text-gray-400 font-medium leading-relaxed">
                Direct integration with Protean for PAN verification, Aadhaar XML, CKYC search, Video KYC, and advanced face liveliness detection.
              </p>
            </ThreeDTiltCard>
            
            <ThreeDTiltCard className="group h-auto md:h-[400px]">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-6 border border-white/20 group-hover:scale-110 transition-transform duration-500">
                <Zap className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-3">Credit Decisioning</h3>
              <p className="text-sm md:text-base text-gray-400 font-medium leading-relaxed">
                Rule-based underwriting engine with multi-bureau checks, bank statement analysis, and automated accept/reject/refer algorithms.
              </p>
            </ThreeDTiltCard>

            <ThreeDTiltCard className="group h-auto md:h-[400px]">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-6 border border-white/20 group-hover:scale-110 transition-transform duration-500">
                <Database className="w-6 h-6 md:w-8 md:h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-3">Loan Management</h3>
              <p className="text-sm md:text-base text-gray-400 font-medium leading-relaxed">
                Highly configurable loan products, daily/monthly interest models, dynamic repayment schedules, and automated overdue tracking.
              </p>
            </ThreeDTiltCard>
          </div>
        </div>
      </section>

      {/* 5. FOOTER CTA */}
      <section className="py-20 md:py-40 px-4 md:px-6 pointer-events-auto bg-white text-black relative flex items-center justify-center border-t border-white/10">
        <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter mb-6 md:mb-8 uppercase leading-tight">
              Build The <br/>Future of <br/><span className="text-gray-400">Lending.</span>
            </h2>
            <p className="text-lg md:text-2xl text-gray-600 mb-10 md:mb-12 font-medium max-w-2xl mx-auto px-4">
              Zero engineering effort for NBFCs. Built for Indian regulatory requirements.
            </p>
            <button className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-4 md:px-16 md:py-8 text-base md:text-xl font-black uppercase tracking-widest transition-transform hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
              Initialize Platform
            </button>
        </div>
      </section>

      {/* 4. LUNAR GRAVITY SECTION */}
      <section className="min-h-[80vh] w-full relative pointer-events-auto flex items-center justify-center py-20 px-4 border-t border-white/5 bg-black/60 backdrop-blur-md">
         <LunarGravityCard className="max-w-[1200px]" />
      </section>

    </div>
  );
}
