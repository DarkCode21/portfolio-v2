// src/components/Card.tsx
"use client";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  style?: React.CSSProperties;
  text?: string;
  image?: string;
  containerRef: React.MutableRefObject<HTMLDivElement | null>;
};

export default function Card({ style, text, image, containerRef }: Props) {
  return image && !text ? (
    <motion.img
      className="absolute w-15 cursor-grab"
      src={image}
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef as any}
      dragElastic={1}
      alt=""
    />
  ) : (
    <motion.div
      className="absolute w-[12rem] cursor-grab rounded-full bg-storm px-1 py-4 text-center text-xl font-extralight ring ring-gray-700"
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef as any}
      dragElastic={1}
    >
      {text}
    </motion.div>
  );
}
