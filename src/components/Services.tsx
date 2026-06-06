"use client";
import { motion } from "framer-motion";
import { Home, Building2, TrendingUp, Key, Settings, BarChart3, Users, MapPin, Star } from "lucide-react";

const services = [
  { icon: Home, title: "Property Sales", desc: "Buy or sell residential, commercial, and land properties with ease." },
  { icon: Building2, title: "Property Development", desc: "We develop modern, sustainable, and valuable real estate projects." },
  { icon: TrendingUp, title: "Investment Advisory", desc: "Get expert advice that helps you make profitable real estate decisions." },
  { icon: Key, title: "Property Management", desc: "We manage your properties with professionalism and maximum returns in mind." },
  { icon: Settings, title: "Facility Management", desc: "We ensure your facilities are well-maintained and operating at peak." },
];

const globalStats = [
  { icon: BarChart3, value: "₦50B+", label: "Total Transactions" },
  { icon: Home, value: "500+", label: "Properties Sold" },
  { icon: Users, value: "1,200+", label: "Happy Clients" },
  { icon: MapPin, value: "15+", label: "Cities Covered" },
  { icon: Star, value: "98%", label: "Client Satisfaction" },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32" style={{ background: "var(--brand-white)" }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 mb-14">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="flex items-center gap-2 mb-5"
            >
              <span className="w-8 h-0.5 rounded-full" style={{ background: "var(--brand-red)" }} />
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold" style={{ color: "var(--brand-red)", fontFamily: "var(--font-dm-sans)" }}>
                Our Services
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 28, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.85, ease: "easeOut", delay: 0.08 }}
              className="text-[36px] lg:text-[46px] font-bold leading-[1.1]"
              style={{ color: "var(--brand-navy)", fontFamily: "var(--font-playfair)" }}
            >
              Smart Solutions for
              <br />
              Every Real Estate Need
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.16 }}
            className="flex items-end"
          >
            <p className="text-base leading-relaxed" style={{ color: "#4B5563", fontFamily: "var(--font-dm-sans)" }}>
              We provide a full range of real estate services designed to guide you at every stage of your property journey.
            </p>
          </motion.div>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-16">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.09 }}
              className="group rounded-2xl p-6 cursor-pointer"
              style={{
                background: "var(--brand-white)",
                border: "1.5px solid var(--brand-border)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                transition: "all 0.4s ease",
              }}
              whileHover={{
                y: -5,
                boxShadow: "0 16px 40px rgba(0,0,0,0.1)",
                borderColor: "rgba(200,16,46,0.2)",
                transition: { duration: 0.35, ease: "easeOut" },
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                style={{ background: "rgba(200,16,46,0.07)", color: "var(--brand-red)" }}
              >
                <service.icon size={22} strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-bold mb-2" style={{ color: "var(--brand-dark)", fontFamily: "var(--font-dm-sans)" }}>
                {service.title}
              </h3>
              <p className="text-xs leading-relaxed mb-4" style={{ color: "var(--brand-gray)", fontFamily: "var(--font-dm-sans)" }}>
                {service.desc}
              </p>
              <a href="#" className="inline-flex items-center gap-1 text-xs font-semibold" style={{ color: "var(--brand-red)", fontFamily: "var(--font-dm-sans)" }}>
                Learn More
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6H10M7 3L10 6L7 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-2xl p-7 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
          style={{ background: "var(--brand-light)", border: "1px solid var(--brand-border)" }}
        >
          {globalStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.08 }}
              className="text-center"
            >
              <div className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center" style={{ background: "rgba(200,16,46,0.08)", color: "var(--brand-red)" }}>
                <stat.icon size={18} strokeWidth={1.5} />
              </div>
              <p className="text-2xl font-bold mb-1" style={{ color: "var(--brand-navy)", fontFamily: "var(--font-playfair)" }}>{stat.value}</p>
              <p className="text-[12px]" style={{ color: "var(--brand-gray)", fontFamily: "var(--font-dm-sans)" }}>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
