"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import logoImg from "../../../public/logo.jpg";
import { motion } from "framer-motion";
import AetherBackground from "@/components/ui/aether-background";
import { DemoHtmlContent } from "@/components/3d-experience/DemoHtmlContent";

export default function DemoPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen font-sans bg-transparent selection:bg-white selection:text-black overflow-x-hidden relative">
      {/* Dynamic Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled 
            ? "bg-[#020205]/80 backdrop-blur-xl py-4 text-white shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-b border-white/5"
            : "bg-transparent py-6 text-white"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center pointer-events-auto">
          <div className="flex items-center gap-3">
            <Image src={logoImg} alt="Careens AI Logo" width={40} height={40} className="rounded-full border border-white/10" />
            <div className="text-2xl font-black tracking-tighter uppercase">Careens AI</div>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-gray-400">
            <a href="#platform" className="hover:text-white transition-colors">Platform</a>
            <a href="#technology" className="hover:text-white transition-colors">Technology</a>
          </div>
          <button className="bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 px-6 py-2 rounded-full font-bold transition-all">
            Request Demo
          </button>
        </div>
      </motion.nav>

      {/* The 2D Canvas Background replacing 3D WebGL Background */}
      <AetherBackground />

      {/* The foreground UI sections (Aether Hero text + Home Page sections + Lunar Gravity) */}
      <div className="relative z-10 w-full">
        <DemoHtmlContent />
      </div>
    </main>
  );
}
