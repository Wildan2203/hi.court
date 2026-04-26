import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/6281335147090?text=Halo%20hi.court,%20saya%20tertarik%20untuk%20berkonsultasi%20mengenai%20pembuatan/renovasi%20lapangan."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:-translate-y-2 transition-all duration-300 z-[60] flex items-center justify-center group"
      aria-label="Chat WhatsApp"
    >
      <FaWhatsapp
        size={32}
        className="group-hover:scale-110 transition-transform"
      />
      <span className="absolute right-full mr-4 bg-white text-ink text-sm font-bold px-4 py-2 rounded-[12px] shadow-soft opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap pointer-events-none">
        Chat via WhatsApp
      </span>
    </a>
  );
}
