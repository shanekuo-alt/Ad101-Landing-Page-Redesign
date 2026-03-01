"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Your Plan", href: "#your-plan" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(0,0,0,0.06)"
          : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex h-[56px] max-w-[1280px] items-center justify-between px-5 lg:px-[max(80px,5vw)]">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 font-display text-[15px] font-medium tracking-tight transition-colors duration-300"
          style={{ color: scrolled ? "#2f2f2f" : "#2f2f2f" }}
        >
          <Image
            src="/ad101-logo.png"
            alt="Ad101 logo"
            width={28}
            height={28}
            className="h-7 w-auto"
          />
          Ad101
        </a>

        {/* Nav links — spread out, editorial feel */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] font-normal tracking-wide transition-colors duration-300"
              style={{
                color: scrolled
                  ? "rgba(47,47,47,0.6)"
                  : "rgba(47,47,47,0.55)",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Minimal CTA — text link style on hero, subtle on scroll */}
        <a
          href="#get-plan"
          className="text-[13px] font-medium tracking-wide transition-colors duration-300"
          style={{
            color: scrolled ? "#C8A650" : "#2f2f2f",
          }}
        >
          Get Your Plan &rarr;
        </a>
      </div>
    </motion.nav>
  );
}
