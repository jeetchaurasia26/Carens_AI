"use client";

import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useScroll, useSpring } from "framer-motion";

export function ParticleNetwork() {
  const pointsRef = useRef<THREE.Points>(null);
  
  // Use framer-motion's useScroll to track normal DOM scroll
  const { scrollYProgress } = useScroll();
  
  // CRITICAL: Add spring damping to the scroll to make the camera movement 
  // feel incredibly buttery smooth (like the ScrollControls damping)
  const smoothScroll = useSpring(scrollYProgress, { 
    stiffness: 50, 
    damping: 20, 
    restDelta: 0.001 
  });

  const particleCount = 15000;
  
  // Generate random points in a massive 3D volume
  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    const color1 = new THREE.Color(0x3b82f6); // Blue
    const color2 = new THREE.Color(0x8b5cf6); // Purple
    const color3 = new THREE.Color(0xffffff); // White

    for (let i = 0; i < particleCount; i++) {
      // Spread across X, Y, Z. Z goes very deep
      positions[i * 3] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 2] = (Math.random() - 1.0) * 120 + 30;

      const mixedColor = color1.clone().lerp(color2, Math.random());
      if (Math.random() > 0.95) {
        mixedColor.copy(color3); // Occasional bright white dot
      }

      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }
    
    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;

    // Use the smooth spring value for the scroll offset (0 to 1)
    const scrollOffset = smoothScroll.get();
    
    // Move the camera FORWARD through the Z-axis based on smooth scroll
    state.camera.position.z = THREE.MathUtils.lerp(30, -60, scrollOffset);
    
    // Subtle mouse parallax
    state.camera.position.x += (state.pointer.x * 3 - state.camera.position.x) * 0.05;
    state.camera.position.y += (state.pointer.y * 3 - state.camera.position.y) * 0.05;
    state.camera.lookAt(0, 0, state.camera.position.z - 40);

    // Rotate points slowly for a living feel
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    pointsRef.current.rotation.x = state.clock.elapsedTime * 0.01;

    // Pulse particles slightly
    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < particleCount; i++) {
        const iy = i * 3 + 1;
        pos[iy] += Math.sin(state.clock.elapsedTime * 2 + pos[i * 3]) * 0.005;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
