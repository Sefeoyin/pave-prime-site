"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const properties = [
  { image: "/5 bedroom detached duplex.png", badge: "For Sale", price: "₦120,000,000", title: "5 Bedroom Detached Duplex", location: "Lekki, Lagos", beds: 5, baths: 5, garage: 1, sqm: 450 },
  { image: "/3 bedroom apartment.png", badge: "For Sale", price: "₦85,000,000", title: "3 Bedroom Apartment", location: "Ikoyi, Lagos", beds: 3, baths: 3, garage: 1, sqm: 250 },
  { image: "/4 bedroom terrace duplex.png", badge: "For Sale", price: "₦95,000,000", title: "4 Bedroom Terrace Duplex", location: "Ajah, Lagos", beds: 4, baths: 4, garage: 2, sqm: 300 },
  { image: "/600sqm residential plot.png", badge: "For Sale", price: "₦45,000,000", title: "600sqm Residential Plot", location: "Abuja, FCT", plot: "600", doc: "C of O" },
];

function PropertyCard({ prop, index }: { prop: typeof properties[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, ease: "easeOut", delay: index * 0.1 }}
      className="group rounded-2xl overflow-hidden cursor-pointer"
      style={{ background: "var(--brand-navy)", boxShadow: "0 2px 16px rgba(0,0,0,0.07)", border: "1px solid rgba(255,255,255,0.08)" }}
      whileHover={{ y: -5, boxShadow: "0 24px 56px rgba(0,0,0,0.18)", transition: { duration: 0.38, ease: "easeOut" } }}
    >
      <div className="relative h-[200px] overflow-hidden">
        <motion.div className="relative w-full h-full" whileHover={{ scale: 1.04 }} transition={{ duration: 1.1, ease: "easeOut" }}>
          <Image src={prop.image} alt={prop.title} fill className="object-cover" sizes="25vw" />
        </motion.div>
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded text-[11px] font-bold text-white uppercase" style={{ background: "var(--brand-red)" }}>
          {prop.badge}
        </span>
        <motion.button className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "var(--brand-white)" }} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 12S1 8.2 1 4.5C1 2.6 2.6 1 4.5 1C5.6 1 6.5 1.6 7 2.4C7.5 1.6 8.4 1 9.5 1C11.4 1 13 2.6 13 4.5C13 8.2 7 12 7 12Z" stroke="var(--brand-red)" strokeWidth="1.2"/></svg>
        </motion.button>
      </div>
      <div className="p-4">
        <p className="text-lg font-bold mb-1" style={{ color: "var(--brand-white)", fontFamily: "var(--font-playfair)" }}>{prop.price}</p>
        <p className="text-sm font-semibold mb-1" style={{ color: "rgba(255,255,255,0.9)", fontFamily: "var(--font-dm-sans)" }}>{prop.title}</p>
        <div className="flex items-center gap-1 mb-3">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 1C3.5 1 2.3 2.2 2.3 3.8C2.3 5.7 5 9 5 9C5 9 7.7 5.7 7.7 3.8C7.7 2.2 6.5 1 5 1Z" stroke="var(--brand-red)" strokeWidth="0.9"/></svg>
          <span className="text-[12px]" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-dm-sans)" }}>{prop.location}</span>
        </div>
        <div className="pt-3 flex items-center gap-3 border-t text-[11px]" style={{ borderColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-dm-sans)" }}>
          {prop.beds ? (<><span>{prop.beds} Beds</span><span>{prop.baths} Baths</span><span>{prop.garage} Garage</span><span>{prop.sqm} sqm</span></>) : (<><span>{prop.plot} sqm</span><span>{prop.doc}</span></>)}
        </div>
      </div>
    </motion.div>
  );
}

export default function Properties() {
  return (
    <section id="properties" className="py-24 lg:py-32" style={{ background: "var(--brand-navy)" }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="flex items-start justify-between mb-12">
          <div className="max-w-[500px]">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="flex items-center gap-2 mb-5">
              <span className="w-8 h-0.5 rounded-full" style={{ background: "var(--brand-red)" }} />
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold" style={{ color: "var(--brand-red)", fontFamily: "var(--font-dm-sans)" }}>Featured Properties</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 28, filter: "blur(4px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ duration: 0.9, ease: "easeOut", delay: 0.08 }} className="text-[36px] lg:text-[44px] font-bold leading-[1.1] mb-4 text-white" style={{ fontFamily: "var(--font-playfair)" }}>
              Find Properties<br />That Fit Your Vision
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.16 }} className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-dm-sans)" }}>
              Discover a curated selection of premium properties across prime locations in Nigeria.
            </motion.p>
          </div>
          <motion.a href="#" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }} className="hidden lg:flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--brand-white)", fontFamily: "var(--font-dm-sans)" }}>
            View All Properties
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M3 7.5H12M8.5 4L12 7.5L8.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </motion.a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {properties.map((prop, i) => <PropertyCard key={i} prop={prop} index={i} />)}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {[0, 1, 2].map((i) => (
            <span key={i} className="rounded-full" style={{ width: i === 0 ? "24px" : "8px", height: "8px", background: i === 0 ? "var(--brand-red)" : "rgba(255,255,255,0.2)", display: "block" }} />
          ))}
        </div>
      </div>
    </section>
  );
}
