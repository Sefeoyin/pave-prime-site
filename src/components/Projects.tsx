"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Building2, LayoutGrid, MapPin } from "lucide-react";

const sideProjects = [
  { image: "/Pave Court Estate.png", title: "Pave Court Estate", location: "Abuja, FCT", status: "Ongoing", color: "orange" },
  { image: "/The Pave City Center.png", title: "Pave City Center", location: "Ibadan, Oyo State", status: "Upcoming", color: "blue" },
];

const projectStats = [
  { icon: Building2, value: "15+", label: "Projects Completed" },
  { icon: LayoutGrid, value: "1.2M+", label: "Square Meters Developed" },
  { icon: MapPin, value: "8+", label: "Cities Reached" },
];

export default function Projects() {
  const featuredRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: featuredRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section id="projects" className="py-24 lg:py-32" style={{ background: "var(--brand-light)" }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} className="flex items-center gap-2 mb-5">
              <span className="w-8 h-0.5 rounded-full" style={{ background: "var(--brand-red)" }} />
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold" style={{ color: "var(--brand-red)", fontFamily: "var(--font-dm-sans)" }}>Our Projects</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 32, filter: "blur(4px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ duration: 0.9, ease: "easeOut", delay: 0.08 }} className="text-[36px] lg:text-[44px] font-bold leading-[1.1] mb-5" style={{ color: "var(--brand-navy)", fontFamily: "var(--font-playfair)" }}>
              Building Communities,{" "}<span style={{ color: "var(--brand-red)" }}>Creating Value.</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.75, ease: "easeOut", delay: 0.16 }} className="text-sm leading-relaxed mb-8 max-w-[380px]" style={{ color: "#4B5563", fontFamily: "var(--font-dm-sans)" }}>
              We don&apos;t just build properties; we build communities where people live, work, and thrive. Explore some of our landmark projects across Nigeria.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.24 }} className="flex gap-4 mb-14">
              <motion.a href="#" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-white" style={{ background: "var(--brand-navy)", fontFamily: "var(--font-dm-sans)" }} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                View All Projects
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M3 7.5H12M8.5 4L12 7.5L8.5 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </motion.a>
              <motion.a href="#" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold border" style={{ color: "var(--brand-dark)", borderColor: "rgba(13,27,42,0.2)", fontFamily: "var(--font-dm-sans)" }} whileHover={{ borderColor: "var(--brand-dark)" }} whileTap={{ scale: 0.97 }}>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1.2"/><path d="M6 5L10 7.5L6 10V5Z" fill="currentColor"/></svg>
                Our Approach
              </motion.a>
            </motion.div>
            <div className="flex gap-8">
              {projectStats.map((stat, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 + i * 0.09 }} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "rgba(200,16,46,0.08)", color: "var(--brand-red)" }}>
                    <stat.icon size={16} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xl font-bold" style={{ color: "var(--brand-navy)", fontFamily: "var(--font-playfair)" }}>{stat.value}</p>
                    <p className="text-[11px]" style={{ color: "var(--brand-gray)", fontFamily: "var(--font-dm-sans)" }}>{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: image grid */}
          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-4">
            {/* Featured */}
            <motion.div ref={featuredRef} initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 1.05, ease: "easeOut", delay: 0.15 }} className="group relative rounded-2xl overflow-hidden md:row-span-2 cursor-pointer" style={{ minHeight: "420px" }} whileHover={{ y: -4 }}>
              <motion.div className="relative w-full h-full" style={{ y: imgY }} whileHover={{ scale: 1.04 }} transition={{ duration: 1.1, ease: "easeOut" }}>
                <Image src="/The Pave Residence.png" alt="The Pave Residence" fill className="object-cover" sizes="(max-width: 768px) 100vw, 30vw" />
              </motion.div>
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.78) 30%, transparent 65%)" }} />
              <span className="absolute top-4 left-4 px-3 py-1.5 rounded text-[11px] font-semibold text-white" style={{ background: "rgba(255,255,255,0.14)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)" }}>Featured Project</span>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-base font-bold text-white mb-1" style={{ fontFamily: "var(--font-dm-sans)" }}>The Pave Residence</p>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-white/60" style={{ fontFamily: "var(--font-dm-sans)" }}>Lekki, Lagos</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold" style={{ background: "rgba(34,197,94,0.22)", color: "#4ade80" }}>Completed</span>
                </div>
              </div>
            </motion.div>

            {sideProjects.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.75, ease: "easeOut", delay: 0.3 + i * 0.12 }} className="group relative rounded-xl overflow-hidden cursor-pointer" style={{ height: "240px" }} whileHover={{ scale: 1.01 }}>
                <motion.div className="relative w-full h-full" whileHover={{ scale: 1.05 }} transition={{ duration: 1, ease: "easeOut" }}>
                  <Image src={p.image} alt={p.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 20vw" />
                </motion.div>
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.72) 40%, transparent 70%)" }} />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-sm font-semibold text-white mb-0.5" style={{ fontFamily: "var(--font-dm-sans)" }}>{p.title}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-white/55" style={{ fontFamily: "var(--font-dm-sans)" }}>{p.location}</span>
                    <span className="px-2 py-0.5 rounded text-[9px] font-semibold" style={{ background: p.color === "orange" ? "rgba(251,146,60,0.25)" : "rgba(96,165,250,0.25)", color: p.color === "orange" ? "#fb923c" : "#60a5fa" }}>{p.status}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
