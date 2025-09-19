"use client";

import { Float } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { Suspense, useId } from "react";
import { useMediaQuery } from "react-responsive";

import HeroText from "@/components/HeroText";
import Loader from "@/components/Loader";
import ParallaxBackground from "@/components/ParallaxBackground";
import Astronaut from "@/components/three/models/Astronaut";

export default function Hero() {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const sectionId = useId();

  return (
    <section
      id={`${sectionId}-home`}
      data-section="home"
      aria-label="Hero section"
      className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space"
    >
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut
                scale={isMobile ? 1.2 : 1.5}
                position={isMobile ? [0.2, -1.5, 0] : [1.6, -1.5, 0]}
                rotation={[-Math.PI / 1.3, 0.9, 2.5]}
              />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
}

function Rig() {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
  return null;
}
