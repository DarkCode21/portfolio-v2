"use client";
import { useState } from "react";
import Project from "@/components/Project"; // si aún es .jsx, no pasa nada
import { myProjects } from "@/constants";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Projects() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };

  const [preview, setPreview] = useState<string | null>(null);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
      id="work"
    >
      <h2 className="text-heading">My Selected Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}

      {preview && (
        <motion.img
          className="pointer-events-none fixed left-0 top-0 z-50 h-56 w-80 rounded-lg object-cover shadow-lg"
          src={preview}
          style={{ x: springX, y: springY }}
          alt="preview"
        />
      )}
    </section>
  );
}
