"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import Image from "next/image";
import { BadgeCheck, UserCheck, Lock, Home, Users, Building2, Award } from "lucide-react";

const stats = [
  { icon: Home, value: "500+", label: "Properties Sold" },
  { icon: Users, value: "1,200+", label: "Happy Clients" },
  { icon: Building2, value: "15+", label: "Ongoing Projects" },
  { icon: Award, value: "8+", label: "Years Experience" },
];

// SVG org logo representations
const OrgLogos = () => (
  <div className="flex items-center justify-center gap-10 flex-wrap">
    {/* NIESV */}
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" className="opacity-40 hover:opacity-70 transition-opacity">
      <circle cx="26" cy="26" r="24" stroke="#111827" strokeWidth="1.2"/>
      <circle cx="26" cy="26" r="20" stroke="#111827" strokeWidth="0.6"/>
      <text x="26" y="23" textAnchor="middle" fontSize="7" fontWeight="700" fontFamily="sans-serif" fill="#111827">NIESV</text>
      <text x="26" y="32" textAnchor="middle" fontSize="4.5" fontFamily="sans-serif" fill="#111827">EST. 1969</text>
    </svg>
    {/* REDAN */}
    <svg width="90" height="40" viewBox="0 0 90 40" fill="none" className="opacity-40 hover:opacity-70 transition-opacity">
      <rect x="1" y="1" width="18" height="20" rx="1" stroke="#111827" strokeWidth="1"/>
      <rect x="4" y="13" width="4" height="8" fill="#111827"/>
      <rect x="9" y="10" width="4" height="11" fill="#111827"/>
      <rect x="14" y="7" width="4" height="14" fill="#111827"/>
      <text x="24" y="14" fontSize="9" fontWeight="800" fontFamily="sans-serif" fill="#111827">REDAN</text>
      <text x="24" y="24" fontSize="4.2" fontFamily="sans-serif" fill="#111827">REAL ESTATE DEVELOPERS</text>
      <text x="24" y="30" fontSize="4.2" fontFamily="sans-serif" fill="#111827">ASSOCIATION OF NIGERIA</text>
    </svg>
    {/* Nigeria Real Estate Hub */}
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" className="opacity-40 hover:opacity-70 transition-opacity">
      <circle cx="26" cy="26" r="24" stroke="#111827" strokeWidth="1.2"/>
      <path d="M26 14L30 22H38L32 27L34 35L26 30L18 35L20 27L14 22H22L26 14Z" stroke="#111827" strokeWidth="1" fill="none"/>
      <text x="26" y="46" textAnchor="middle" fontSize="4" fontFamily="sans-serif" fill="#111827">NREH</text>
    </svg>
    {/* National Association of Realtors */}
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" className="opacity-40 hover:opacity-70 transition-opacity">
      <rect x="2" y="2" width="48" height="48" rx="4" stroke="#111827" strokeWidth="1.2"/>
      <text x="26" y="32" textAnchor="middle" fontSize="24" fontWeight="800" fontFamily="serif" fill="#111827">R</text>
      <text x="26" y="44" textAnchor="middle" fontSize="4" fontFamily="sans-serif" fill="#111827">REALTORS®</text>
    </svg>
    {/* Lagos State Real Estate */}
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" className="opacity-40 hover:opacity-70 transition-opacity">
      <path d="M26 4L46 14V38L26 48L6 38V14L26 4Z" stroke="#111827" strokeWidth="1.2" fill="none"/>
      <path d="M18 36V24L26 18L34 24V36" stroke="#111827" strokeWidth="1" fill="none"/>
      <rect x="22" y="28" width="8" height="8" stroke="#111827" strokeWidth="0.8"/>
      <text x="26" y="47" textAnchor="middle" fontSize="3.5" fontFamily="sans-serif" fill="#111827">LASREDA</text>
    </svg>
  </div>
);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);

  const stagger: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
  };

  const lineReveal: Variants = {
    hidden: { opacity: 0, y: 48, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.95, ease: "easeOut" } },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: "easeOut" } },
  };

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden"
      style={{ background: "var(--brand-light)", minHeight: "100vh" }}
    >
      {/* Hero image — bleeds from top of viewport, right side */}
      <motion.div
        className="absolute top-0 bottom-0 right-0 hidden lg:block"
        style={{ width: "60%", y: imageY }}
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      >
        <Image
          src="/Hero Page Image.png"
          alt="Premium Property"
          fill
          priority
          className="object-cover object-center"
          sizes="60vw"
        />
        {/* Left gradient fade */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to right, var(--brand-light) 0%, rgba(248,248,246,0.6) 18%, transparent 38%)"
        }} />
        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-48" style={{
          background: "linear-gradient(to top, var(--brand-light) 0%, transparent 100%)"
        }} />
      </motion.div>

      {/* Left content */}
      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10 flex items-center" style={{ minHeight: "100vh" }}>
        <motion.div
          className="relative z-10 pt-28 pb-16 max-w-[520px]"
          style={{ y: contentY }}
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* Headline */}
          <motion.h1
            variants={lineReveal}
            className="font-bold leading-[1.04] tracking-tight mb-6"
            style={{
              color: "var(--brand-navy)",
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(44px, 5.5vw, 68px)",
            }}
          >
            Delivering Real
            <br />
            Estate Solutions
            <br />
            That{" "}
            <span style={{ color: "var(--brand-red)" }}>Last.</span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            variants={fadeUp}
            className="text-base leading-relaxed mb-8 max-w-[400px]"
            style={{ color: "#4B5563", fontFamily: "var(--font-dm-sans)" }}
          >
            At Pave Prime Realty, we help you find, own, and invest in properties that shape a better tomorrow.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-12">
            <motion.a
              href="#properties"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-white"
              style={{ background: "var(--brand-navy)", fontFamily: "var(--font-dm-sans)", boxShadow: "0 4px 20px rgba(13,27,42,0.28)" }}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 28px rgba(13,27,42,0.38)" }}
              whileTap={{ scale: 0.97 }}
            >
              Explore Properties
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M3 7.5H12M8.5 4L12 7.5L8.5 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </motion.a>
            <motion.a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold border"
              style={{ color: "var(--brand-dark)", borderColor: "rgba(13,27,42,0.2)", fontFamily: "var(--font-dm-sans)" }}
              whileHover={{ borderColor: "var(--brand-dark)", background: "rgba(0,0,0,0.02)", scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M6 5L10 7.5L6 10V5Z" fill="currentColor"/>
              </svg>
              Watch Video
            </motion.a>
          </motion.div>

          {/* Stats card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.97 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: "easeOut", delay: 0.45 } },
            }}
            className="rounded-2xl p-5 grid grid-cols-4 gap-3"
            style={{
              background: "var(--brand-white)",
              boxShadow: "0 12px 48px rgba(0,0,0,0.09)",
              border: "1px solid rgba(229,231,235,0.8)",
            }}
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="flex justify-center mb-2">
                  <stat.icon size={20} style={{ color: "var(--brand-red)" }} strokeWidth={1.5} />
                </div>
                <div className="text-xl font-bold" style={{ color: "var(--brand-navy)", fontFamily: "var(--font-playfair)" }}>
                  {stat.value}
                </div>
                <div className="text-[11px] leading-tight mt-0.5" style={{ color: "var(--brand-gray)", fontFamily: "var(--font-dm-sans)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Overlay card — positioned on image */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 1.0 }}
        className="hidden lg:block absolute right-8 xl:right-14"
        style={{ top: "50%", transform: "translateY(-20%)", zIndex: 10 }}
      >
        <div className="rounded-2xl p-5 w-[230px]" style={{
          background: "rgba(13,27,42,0.88)",
          backdropFilter: "blur(14px)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 24px 64px rgba(0,0,0,0.3)",
        }}>
          {[
            { Icon: BadgeCheck, title: "Verified Properties", desc: "We ensure every property meets the highest standards." },
            { Icon: UserCheck, title: "Expert Guidance", desc: "Get professional support at every step." },
            { Icon: Lock, title: "Secure Transactions", desc: "Your investment is safe with us." },
          ].map((item, i) => (
            <div key={i} className={`flex gap-3 items-start ${i < 2 ? "pb-4 mb-4 border-b border-white/10" : ""}`}>
              <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(200,16,46,0.2)", color: "var(--brand-red)" }}>
                <item.Icon size={14} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs font-semibold text-white mb-0.5" style={{ fontFamily: "var(--font-dm-sans)" }}>{item.title}</p>
                <p className="text-[11px] leading-snug" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-dm-sans)" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Trust badges strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 1.2 }}
        className="relative z-10 border-t py-6"
        style={{ borderColor: "var(--brand-border)", background: "rgba(255,255,255,0.95)", backdropFilter: "blur(8px)" }}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <p className="text-center text-[11px] uppercase tracking-[0.22em] mb-5" style={{ color: "var(--brand-gray)", fontFamily: "var(--font-dm-sans)" }}>
            Trusted by Thousands. Backed by Excellence.
          </p>
          <OrgLogos />
        </div>
      </motion.div>
    </section>
  );
}
