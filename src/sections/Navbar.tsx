"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useId, useState } from "react";

function Navigation() {
  const t = useTranslations("Navbar");
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link" href="#home">
          {t("home")}
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#about">
          {t("about")}
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#work">
          {t("work")}
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#contact">
          {t("contact")}
        </a>
      </li>
    </ul>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const mobileNavId = useId();

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <Link
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            DarkCode
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls={mobileNavId}
          >
            <Image
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              alt="Menu toggle icon"
              width={24}
              height={24}
              className="h-6 w-6"
              priority
            />
          </button>

          <nav className="hidden sm:flex" aria-label="Primary">
            <Navigation />
          </nav>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav id={mobileNavId} className="pb-5" aria-label="Primary mobile">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
}
