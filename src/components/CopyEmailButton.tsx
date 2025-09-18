"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  const email = "Your Email Address";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <motion.button
      onClick={copyToClipboard}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      className="relative w-[12rem] cursor-pointer overflow-hidden rounded-full bg-primary px-1 py-4 text-center text-sm font-extralight"
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="copied"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <Image
              src="/assets/copy-done.svg"
              width={20}
              height={20}
              alt="copy done"
            />
            Email has Copied
          </motion.p>
        ) : (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="copy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <Image
              src="/assets/copy-done.svg"
              width={20}
              height={20}
              alt="copy done"
            />
            Copy Email Address
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
