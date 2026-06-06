"use client";
import { motion } from "framer-motion";
import { MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  const inputClass = "w-full px-4 py-3 rounded-lg text-sm border outline-none transition-all duration-200 bg-white";
  const inputStyle = { borderColor: "#E5E7EB", fontFamily: "var(--font-dm-sans)", color: "var(--brand-dark)" };

  return (
    <section id="contact" className="py-24 lg:py-32" style={{ background: "var(--brand-white)" }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[380px_1fr] gap-16">
          {/* Left */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="flex items-center gap-2 mb-5">
              <span className="w-8 h-0.5 rounded-full" style={{ background: "var(--brand-red)" }} />
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold" style={{ color: "var(--brand-red)", fontFamily: "var(--font-dm-sans)" }}>Get in Touch</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 32, filter: "blur(4px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ duration: 0.9, ease: "easeOut", delay: 0.08 }} className="text-[36px] lg:text-[44px] font-bold leading-[1.1] mb-5" style={{ color: "var(--brand-navy)", fontFamily: "var(--font-playfair)" }}>
              We&apos;re Here<br />to <span style={{ color: "var(--brand-red)" }}>Help You.</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.75, delay: 0.16 }} className="text-sm leading-relaxed mb-10" style={{ color: "#4B5563", fontFamily: "var(--font-dm-sans)" }}>
              Have questions or ready to start your real estate journey? Reach out to us today. Our team is always available to assist you.
            </motion.p>
            <div className="space-y-6">
              {[
                { Icon: MapPin, title: "Our Office", lines: ["2nd Floor, Pave Prime House,", "Freedom Way, Lekki Phase 1,", "Lagos, Nigeria."] },
                { Icon: Clock, title: "Office Hours", lines: ["Mon - Fri: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 3:00 PM"] },
              ].map((info, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 + i * 0.1 }} className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(200,16,46,0.07)", color: "var(--brand-red)" }}>
                    <info.Icon size={17} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-1" style={{ color: "var(--brand-dark)", fontFamily: "var(--font-dm-sans)" }}>{info.title}</p>
                    {info.lines.map((line, j) => (
                      <p key={j} className="text-xs leading-relaxed" style={{ color: "var(--brand-gray)", fontFamily: "var(--font-dm-sans)" }}>{line}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <motion.div initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: "easeOut", delay: 0.18 }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { label: "Full Name", placeholder: "Enter your full name", type: "text" },
                { label: "Email Address", placeholder: "Enter your email", type: "email" },
                { label: "Phone Number", placeholder: "Enter your phone number", type: "tel" },
                { label: "Subject", placeholder: "What is this about?", type: "text" },
              ].map((field, i) => (
                <div key={i}>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--brand-dark)", fontFamily: "var(--font-dm-sans)" }}>{field.label}</label>
                  <input type={field.type} placeholder={field.placeholder} className={inputClass} style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = "var(--brand-red)"; e.target.style.boxShadow = "0 0 0 3px rgba(200,16,46,0.08)"; }}
                    onBlur={e => { e.target.style.borderColor = "#E5E7EB"; e.target.style.boxShadow = "none"; }} />
                </div>
              ))}
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--brand-dark)", fontFamily: "var(--font-dm-sans)" }}>Message</label>
                <textarea rows={5} placeholder="Type your message here..." className={`${inputClass} resize-none`} style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = "var(--brand-red)"; e.target.style.boxShadow = "0 0 0 3px rgba(200,16,46,0.08)"; }}
                  onBlur={e => { e.target.style.borderColor = "#E5E7EB"; e.target.style.boxShadow = "none"; }} />
              </div>
              <div>
                <motion.button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold text-white" style={{ background: "var(--brand-red)", fontFamily: "var(--font-dm-sans)" }} whileHover={{ scale: 1.03, boxShadow: "0 8px 24px rgba(200,16,46,0.38)" }} whileTap={{ scale: 0.97 }}>
                  Send Message <Send size={14} strokeWidth={1.5} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
