"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { MessageCircle, Headphones, ArrowRight } from "lucide-react";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ background: "var(--brand-navy)", minHeight: "340px" }}>
      {/* Parallax BG image */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <Image
          src="/Ready to Find or Invest in your new property section image.png"
          alt="Ready to Invest"
          fill
          className="object-cover"
          style={{ opacity: 0.25 }}
          sizes="100vw"
        />
      </motion.div>
      {/* Gradient overlays for cinematic depth */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(13,27,42,0.95) 0%, rgba(13,27,42,0.75) 55%, rgba(13,27,42,0.88) 100%)" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 25% 60%, rgba(200,16,46,0.07) 0%, transparent 55%)" }} />

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10 py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-0 justify-between">
          {/* Left: headline */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-[420px]"
          >
            <motion.h2
              initial={{ opacity: 0, y: 32, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.95, ease: "easeOut", delay: 0.1 }}
              className="font-bold leading-[1.1] text-white mb-4"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(30px, 3.5vw, 48px)" }}
            >
              Ready to Find or Invest
              <br />
              in Your Next Property?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-sm"
              style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-dm-sans)" }}
            >
              Let&apos;s help you turn your real estate goals into reality.
            </motion.p>
          </motion.div>

          {/* Right: features + button */}
          <div className="flex flex-col sm:flex-row lg:flex-row items-start gap-10">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="flex gap-4 items-start max-w-[220px]"
            >
              <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,255,255,0.1)", border: "1.5px solid rgba(255,255,255,0.15)", color: "white" }}>
                <MessageCircle size={18} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-semibold text-white mb-1" style={{ fontFamily: "var(--font-dm-sans)" }}>Personalized Consultation</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-dm-sans)" }}>We listen, understand, and recommend what&apos;s right for you.</p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.32 }}
              className="flex gap-4 items-start max-w-[220px]"
            >
              <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,255,255,0.1)", border: "1.5px solid rgba(255,255,255,0.15)", color: "white" }}>
                <Headphones size={18} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-semibold text-white mb-1" style={{ fontFamily: "var(--font-dm-sans)" }}>End-to-End Support</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-dm-sans)" }}>From search to ownership, we&apos;re with you every step.</p>
              </div>
            </motion.div>

            {/* CTA button */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.44 }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white self-center flex-shrink-0"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1.5px solid rgba(255,255,255,0.22)",
                backdropFilter: "blur(10px)",
                fontFamily: "var(--font-dm-sans)",
              }}
              whileHover={{ background: "rgba(255,255,255,0.16)", borderColor: "rgba(255,255,255,0.38)", scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Schedule a Consultation
              <ArrowRight size={15} strokeWidth={1.5} />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
