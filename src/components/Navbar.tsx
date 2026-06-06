"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Properties", href: "#properties", hasDropdown: true },
  { label: "Services", href: "#services", hasDropdown: true },
  { label: "Projects", href: "#projects" },
  { label: "Resources", href: "#insights", hasDropdown: true },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.98)",
        backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
        boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.07)" : "none",
        padding: scrolled ? "8px 0" : "10px 0",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 flex items-center justify-between">
        {/* Logo — icon only, brand name is baked into the image */}
        <a href="#" className="flex items-center">
          <div className="relative w-12 h-12">
            <Image src="/Logo Icon.png" alt="Pave Prime Realty" fill className="object-contain" />
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative flex items-center gap-1 text-sm font-medium transition-colors duration-200"
              style={{
                color: link.label === "Home" ? "var(--brand-red)" : "var(--brand-dark)",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              {link.label}
              {link.hasDropdown && <ChevronDown size={12} strokeWidth={2} />}
              {link.label === "Home" && (
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full" style={{ background: "var(--brand-red)" }} />
              )}
            </a>
          ))}
        </div>

        {/* Right */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+2349011234567"
            className="flex items-center gap-2 text-sm font-medium"
            style={{ color: "var(--brand-dark)", fontFamily: "var(--font-dm-sans)" }}
          >
            {/* Phone handset SVG matching original design */}
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 10.5L11 8L9.5 9.5C8 8.5 6.5 7 5.5 5.5L7 4L4.5 1.5L2 4C2 9 6 13 11 13L13.5 10.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            +234 901 123 4567
          </a>
          <motion.a
            href="#contact"
            className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white"
            style={{
              background: "var(--brand-navy)",
              fontFamily: "var(--font-dm-sans)",
              boxShadow: "0 2px 10px rgba(13,27,42,0.3)",
            }}
            whileHover={{ scale: 1.02, boxShadow: "0 4px 18px rgba(13,27,42,0.4)" }}
            whileTap={{ scale: 0.97 }}
          >
            Schedule a Call
          </motion.a>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="space-y-1.5">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="block h-0.5 w-6 rounded-full"
                style={{ background: "var(--brand-dark)" }}
                animate={menuOpen ? (i === 0 ? { rotate: 45, y: 8 } : i === 1 ? { opacity: 0 } : { rotate: -45, y: -8 }) : { rotate: 0, y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-white border-t"
            style={{ borderColor: "var(--brand-border)" }}
          >
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="block py-2 text-sm font-medium"
                  style={{ color: "var(--brand-dark)", fontFamily: "var(--font-dm-sans)" }}
                  onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
              <a href="#contact" className="block mt-4 px-5 py-3 rounded-lg text-sm font-semibold text-white text-center"
                style={{ background: "var(--brand-navy)", fontFamily: "var(--font-dm-sans)" }}>
                Schedule a Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
