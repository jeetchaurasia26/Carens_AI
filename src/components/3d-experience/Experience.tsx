"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { ParticleNetwork } from "./ParticleNetwork";

export function Experience() {
  return (
    <div className="fixed inset-0 z-0 h-screen w-screen bg-[#020205] pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 30], fov: 75 }}
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
        dpr={[1, 2]}
      >
        <color attach="background" args={["#020205"]} />
        <fogExp2 attach="fog" args={["#020205", 0.02]} />
        
        <Suspense fallback={null}>
          <ParticleNetwork />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
