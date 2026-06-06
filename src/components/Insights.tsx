"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail } from "lucide-react";

const articles = [
  { image: "/may 20, 2024, markets insights.png", date: "May 20, 2024", category: "Market Insights", title: "5 Things to Consider Before Buying Property in Nigeria" },
  { image: "/April 15, 2024, Investment image.png", date: "Apr 15, 2024", category: "Investment", title: "Why Real Estate Remains the Best Long-term Investment" },
  { image: "/April 02, 2024, Home ownership.png", date: "Apr 02, 2024", category: "Home Ownership", title: "The Rise of Modern Living: What Homebuyers Want in 2024" },
  { image: "/March 18, 2024, Market Updates.png", date: "Mar 18, 2024", category: "Market Updates", title: "Nigeria Real Estate Market Update: Q2 2024 Outlook" },
];

export default function Insights() {
  return (
    <section id="insights" className="py-24 lg:py-32" style={{ background: "var(--brand-white)" }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-20">
          {/* Left */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="flex items-center gap-2 mb-5">
              <span className="w-8 h-0.5 rounded-full" style={{ background: "var(--brand-red)" }} />
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold" style={{ color: "var(--brand-red)", fontFamily: "var(--font-dm-sans)" }}>Resources</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 32, filter: "blur(4px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ duration: 0.9, ease: "easeOut", delay: 0.08 }} className="text-[32px] lg:text-[40px] font-bold leading-[1.15] mb-4" style={{ color: "var(--brand-navy)", fontFamily: "var(--font-playfair)" }}>
              Insights That{" "}<span style={{ color: "var(--brand-red)" }}>Keep You Ahead.</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.75, delay: 0.16 }} className="text-sm leading-relaxed mb-8" style={{ color: "#4B5563", fontFamily: "var(--font-dm-sans)" }}>
              Stay informed with expert tips, market updates, and real estate guides to help you make smarter property decisions.
            </motion.p>
            <motion.a href="#" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.24 }} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-white" style={{ background: "var(--brand-navy)", fontFamily: "var(--font-dm-sans)" }} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              Browse All Articles
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M3 7.5H12M8.5 4L12 7.5L8.5 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </motion.a>
          </div>

          {/* Articles grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.map((article, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.75, ease: "easeOut", delay: i * 0.09 }} className="group cursor-pointer">
                <div className="relative h-[170px] rounded-xl overflow-hidden mb-4">
                  <motion.div className="relative w-full h-full" whileHover={{ scale: 1.06 }} transition={{ duration: 1, ease: "easeOut" }}>
                    <Image src={article.image} alt={article.title} fill className="object-cover" sizes="20vw" />
                  </motion.div>
                </div>
                <div className="flex items-center gap-2 mb-2 text-[11px]" style={{ color: "var(--brand-gray)", fontFamily: "var(--font-dm-sans)" }}>
                  <span>{article.date}</span>
                  <span>•</span>
                  <span style={{ color: "var(--brand-red)", fontWeight: 600 }}>{article.category}</span>
                </div>
                <h3 className="text-sm font-semibold leading-snug mb-3 transition-colors group-hover:text-red-700" style={{ color: "var(--brand-dark)", fontFamily: "var(--font-dm-sans)" }}>
                  {article.title}
                </h3>
                <a href="#" className="inline-flex items-center gap-1 text-xs font-semibold" style={{ color: "var(--brand-red)", fontFamily: "var(--font-dm-sans)" }}>
                  Read More
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 5.5H9M6 3L9 5.5L6 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.8, ease: "easeOut" }} className="mt-16 rounded-2xl p-7 flex flex-col lg:flex-row items-center gap-8" style={{ background: "var(--brand-light)", border: "1px solid var(--brand-border)" }}>
          <div className="flex items-center gap-5 flex-1">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--brand-navy)" }}>
              <Mail size={22} strokeWidth={1.5} color="white" />
            </div>
            <div>
              <p className="font-bold mb-1" style={{ color: "var(--brand-dark)", fontFamily: "var(--font-dm-sans)" }}>Subscribe to Our Newsletter</p>
              <p className="text-sm" style={{ color: "var(--brand-gray)", fontFamily: "var(--font-dm-sans)" }}>Get the latest property updates, market insights, and exclusive offers delivered straight to your inbox.</p>
            </div>
          </div>
          <div className="flex gap-3 w-full lg:w-auto">
            <input type="email" placeholder="Enter your email address" className="flex-1 lg:w-[280px] px-4 py-3 rounded-lg text-sm outline-none border bg-white transition-all duration-200" style={{ borderColor: "var(--brand-border)", fontFamily: "var(--font-dm-sans)" }}
              onFocus={e => { e.target.style.borderColor = "var(--brand-red)"; e.target.style.boxShadow = "0 0 0 3px rgba(200,16,46,0.08)"; }}
              onBlur={e => { e.target.style.borderColor = "var(--brand-border)"; e.target.style.boxShadow = "none"; }} />
            <motion.button className="px-5 py-3 rounded-lg text-sm font-semibold text-white flex-shrink-0" style={{ background: "var(--brand-red)", fontFamily: "var(--font-dm-sans)" }} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>Subscribe</motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
