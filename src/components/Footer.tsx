"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Mail, MessageCircle, Globe } from "lucide-react";

const contactItems = [
  { Icon: Phone, label: "Call Us", lines: ["+234 901 123 4567", "+234 809 876 5432"] },
  { Icon: Mail, label: "Email Us", lines: ["info@paveprime.ng", "hello@paveprime.ng"] },
  { Icon: MessageCircle, label: "Chat With Us", lines: ["+234 901 123 4567", "(WhatsApp Available)"] },
  { Icon: Globe, label: "Follow Us", social: true },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--brand-white)", borderTop: "1px solid var(--brand-border)" }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {contactItems.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(200,16,46,0.06)", color: "var(--brand-red)" }}>
                <item.Icon size={18} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs font-bold mb-1 uppercase tracking-wide" style={{ color: "var(--brand-dark)", fontFamily: "var(--font-dm-sans)" }}>{item.label}</p>
                {item.lines?.map((line, j) => (
                  <p key={j} className="text-xs" style={{ color: "var(--brand-gray)", fontFamily: "var(--font-dm-sans)" }}>{line}</p>
                ))}
                {item.social && (
                  <div className="flex gap-2 mt-1">
                    {["f", "ig", "in", "x"].map((s) => (
                      <a key={s} href="#" className="w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-bold transition-colors hover:bg-red-50" style={{ background: "rgba(13,27,42,0.06)", color: "var(--brand-dark)", fontFamily: "var(--font-dm-sans)" }}>{s}</a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom bar — logo icon only, no text */}
      <div className="border-t" style={{ borderColor: "var(--brand-border)" }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-5 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="relative w-8 h-8">
            <Image src="/Logo Icon.png" alt="Pave Prime Realty" fill className="object-contain" />
          </div>
          <p className="text-xs" style={{ color: "var(--brand-gray)", fontFamily: "var(--font-dm-sans)" }}>
            © {new Date().getFullYear()} Pave Prime Realty. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
              <a key={link} href="#" className="text-xs transition-colors hover:text-red-600" style={{ color: "var(--brand-gray)", fontFamily: "var(--font-dm-sans)" }}>{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
