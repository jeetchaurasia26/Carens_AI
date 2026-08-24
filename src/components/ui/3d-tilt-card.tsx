"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export const ThreeDTiltCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);
  
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div className={`perspective-[1000px] h-full w-full ${className}`}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative h-full w-full rounded-[30px] border border-white/10 bg-[#0a0a0a] transition-all duration-200 ease-linear"
      >
        <div
          style={{
            transform: isHovering ? "translateZ(50px)" : "translateZ(0px)",
            transition: "transform 0.2s ease-out",
          }}
          className="relative h-full w-full rounded-[30px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-start justify-start p-6 md:p-10"
        >
          {/* Inner glowing highlight that follows mouse */}
          <motion.div 
            className="absolute -inset-px rounded-[30px] opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100"
            style={{
               opacity: isHovering ? 1 : 0,
               background: `radial-gradient(600px circle at ${isHovering ? (x.get() + 0.5) * 100 : 50}% ${isHovering ? (y.get() + 0.5) * 100 : 50}%, rgba(255,255,255,0.1), transparent 40%)`
            }}
          />
          
          <div className="relative z-10 w-full h-full flex flex-col">
            {children}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
