"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Lightbulb, Trophy } from "lucide-react";

const values = [
  { icon: ShieldCheck, title: "Integrity", desc: "We do what's right, always." },
  { icon: Lightbulb, title: "Innovation", desc: "Creative solutions for every client." },
  { icon: Trophy, title: "Excellence", desc: "We exceed expectations, every time." },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32" style={{ background: "var(--brand-white)" }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex items-center gap-2 mb-5"
            >
              <span className="w-8 h-0.5 rounded-full" style={{ background: "var(--brand-red)" }} />
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold" style={{ color: "var(--brand-red)", fontFamily: "var(--font-dm-sans)" }}>
                About Pave Prime Realty
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 36, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.08 }}
              className="text-[40px] lg:text-[50px] font-bold leading-[1.08] mb-6"
              style={{ color: "var(--brand-navy)", fontFamily: "var(--font-playfair)" }}
            >
              Building Tomorrow,{" "}
              <span style={{ color: "var(--brand-red)" }}>Today.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.16 }}
              className="space-y-4 mb-8"
            >
              <p className="text-base leading-relaxed" style={{ color: "#4B5563", fontFamily: "var(--font-dm-sans)" }}>
                Pave Prime Realty is a forward-thinking real estate company in Nigeria, committed to delivering exceptional value through innovation, integrity, and outstanding service.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#4B5563", fontFamily: "var(--font-dm-sans)" }}>
                From property acquisition to investment advisory and development, we provide end-to-end real estate solutions that empower our clients to achieve their goals.
              </p>
            </motion.div>

            {/* Values */}
            <div className="grid grid-cols-3 gap-5 mb-10">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 + i * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: "rgba(200,16,46,0.07)", color: "var(--brand-red)" }}>
                    <v.icon size={20} strokeWidth={1.5} />
                  </div>
                  <p className="text-sm font-semibold mb-1" style={{ color: "var(--brand-dark)", fontFamily: "var(--font-dm-sans)" }}>{v.title}</p>
                  <p className="text-xs leading-snug" style={{ color: "var(--brand-gray)", fontFamily: "var(--font-dm-sans)" }}>{v.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.32 }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-white"
              style={{ background: "var(--brand-navy)", fontFamily: "var(--font-dm-sans)", boxShadow: "0 4px 20px rgba(13,27,42,0.25)" }}
              whileHover={{ scale: 1.02, boxShadow: "0 8px 28px rgba(13,27,42,0.35)" }}
              whileTap={{ scale: 0.97 }}
            >
              Learn More About Us
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M3 7.5H12M8.5 4L12 7.5L8.5 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </motion.a>
          </div>

          {/* Right */}
          <div className="relative mt-8 lg:mt-0" style={{ paddingBottom: "60px" }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.1, ease: "easeOut", delay: 0.15 }}
              className="relative rounded-2xl overflow-hidden"
              style={{ height: "460px" }}
            >
              <Image src="/Building Tomorrow, Today section.png" alt="Luxury interior" fill className="object-cover" sizes="50vw" />
            </motion.div>

            {/* Testimonial card */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
              className="absolute left-4 right-4 lg:left-6 lg:right-6 rounded-2xl p-6"
              style={{ bottom: "0px", background: "var(--brand-navy)", boxShadow: "0 20px 60px rgba(13,27,42,0.4)", zIndex: 10 }}
            >
              <div className="flex gap-4 items-start mb-4">
                <span className="text-5xl leading-none -mt-2 flex-shrink-0" style={{ color: "var(--brand-red)", fontFamily: "Georgia, serif" }}>&ldquo;</span>
                <p className="text-[14px] leading-relaxed text-white" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  Their professionalism, attention to detail, and dedication to my investment goals gave me complete peace of mind.
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0" style={{ background: "var(--brand-red)" }}>OA</div>
                  <div>
                    <p className="text-sm font-semibold text-white" style={{ fontFamily: "var(--font-dm-sans)" }}>Olaolu A.</p>
                    <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-dm-sans)" }}>Satisfied Investor</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="w-8 h-8 rounded-full border flex items-center justify-center" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 3L5 7L9 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                  <button className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "var(--brand-red)" }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3L9 7L5 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
