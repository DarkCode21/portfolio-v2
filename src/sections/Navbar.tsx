"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useEffect, useId, useMemo, useState } from "react";

function Navigation() {
  const t = useTranslations("Navbar");
  return (
    <ul className="nav-ul flex items-center gap-6">
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

function LanguageSwitcher() {
  const pathname = usePathname();
  const locale = useLocale();
  const [open, setOpen] = useState(false);

  const locales = useMemo(
    () => [
      {
        code: "es",
        name: "Español",
        short: "ES",
        flag: "/assets/logos/es.png",
      },
      {
        code: "en",
        name: "English",
        short: "EN",
        flag: "/assets/logos/en.png",
      },
    ],
    []
  );

  const current = useMemo(
    () => locales.find((l) => l.code === locale) ?? locales[0],
    [locale, locales]
  );

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md text-neutral-200 hover:text-white hover:bg-white/10 focus:outline-none"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
      >
        <Image
          src={current.flag}
          alt={`${current.name} flag`}
          width={18}
          height={18}
          className="rounded-full"
        />
        <span className="text-sm">{current.short}</span>
        <ChevronDown size={14} className="opacity-70" />
      </button>

      {open && (
        <motion.ul
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.16 }}
          className="absolute right-0 mt-2 w-40 overflow-hidden rounded-xl border border-white/10 bg-neutral-900/80 backdrop-blur-md shadow-xl"
          role="listbox"
        >
          {locales.map((l) => (
            <li key={l.code}>
              <Link
                href={pathname}
                locale={l.code as any}
                className="flex items-center gap-2 px-3 py-2 text-sm text-neutral-200 hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                <Image
                  src={l.flag}
                  alt={`${l.name} flag`}
                  width={18}
                  height={18}
                  className="rounded-full"
                />
                <span>{l.name}</span>
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileNavId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      className="fixed left-0 right-0 z-20"
      initial={false}
      animate={{ top: scrolled ? 0 : 16 }}
      transition={{ type: "spring", stiffness: 260, damping: 30 }}
    >
      <motion.div
        className="backdrop-blur-lg bg-primary/40"
        style={{ width: "100%" }}
        initial={false}
        animate={{
          maxWidth: scrolled ? "100%" : "80rem",
          borderRadius: scrolled ? "0rem" : "9999px",
          marginLeft: scrolled ? "0rem" : "auto",
          marginRight: scrolled ? "0rem" : "auto",
        }}
        transition={{ type: "spring", stiffness: 260, damping: 30 }}
      >
        <div className="c-space">
          <div className="grid grid-cols-3 items-center py-2 sm:py-2">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2 text-white">
                <Image
                  src="/assets/logos/darkcode.png"
                  alt="DarkCode logo"
                  width={32}
                  height={32}
                  className="h-7 w-7"
                  priority
                />
                <span className="text-xl font-bold">DarkCode</span>
              </Link>
            </div>

            <nav className="hidden sm:flex justify-center" aria-label="Primary">
              <Navigation />
            </nav>

            <div className="ml-auto flex items-center gap-2">
              <div className="hidden sm:block">
                <LanguageSwitcher />
              </div>
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
            </div>
          </div>
        </div>

        {isOpen && (
          <motion.div
            className="block overflow-hidden text-center sm:hidden"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ maxHeight: "100vh" }}
            transition={{ duration: 0.3 }}
          >
            <nav id={mobileNavId} className="pb-3" aria-label="Primary mobile">
              <Navigation />
            </nav>

            <div className="flex justify-center pb-4">
              <LanguageSwitcher />
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
