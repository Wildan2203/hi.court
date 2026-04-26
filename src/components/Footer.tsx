import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { IMAGES } from "../constants/images";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-primary/10 pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img
                src={IMAGES.logo}
                alt="hi.court logo"
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  // Fallback rendering if image is not yet uploaded
                  (e.target as HTMLImageElement).style.display = "none";
                  if ((e.target as HTMLImageElement).nextElementSibling) {
                    (
                      (e.target as HTMLImageElement)
                        .nextElementSibling as HTMLElement
                    ).style.display = "flex";
                  }
                }}
              />
              <div
                className="hidden items-center gap-2"
                style={{ display: "none" }}
              >
                <div className="w-8 h-8 rounded-[8px] bg-primary text-white flex items-center justify-center font-bold text-sm">
                  HC
                </div>
                <span className="font-serif font-bold text-xl uppercase text-primary">
                  hi.court
                </span>
              </div>
            </Link>
            <p className="text-ink/70 text-[13px] leading-[1.6] mb-6">
              Kontraktor lapangan olahraga profesional, andal, dan terpercaya di
              Indonesia. Berpengalaman menangani project swasta maupun
              pemerintahan.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/share/17m37GNs2f/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-[#1877F2] hover:text-white transition-colors duration-300"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="https://www.instagram.com/hi.courtt?igsh=ZHlzbmtxZDFhZnk="
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-[#E4405F] hover:text-white transition-colors duration-300"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://www.tiktok.com/@hi.courtt?_r=1&_t=ZS-95pBf7nOTtQ"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-[#000000] hover:text-white hover:border-black transition-colors duration-300"
              >
                <FaTiktok size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-primary font-serif font-bold text-[16px] mb-6">
              Layanan Cepat
            </h4>
            <ul className="space-y-3 text-[13px] font-medium text-ink/70">
              <li>
                <Link
                  to="/layanan"
                  className="hover:text-primary transition-colors"
                >
                  Semua Layanan
                </Link>
              </li>
              <li>
                <Link
                  to="/layanan/tenis"
                  className="hover:text-primary transition-colors"
                >
                  Lapangan Tenis
                </Link>
              </li>
              <li>
                <Link
                  to="/layanan/basket"
                  className="hover:text-primary transition-colors"
                >
                  Lapangan Basket
                </Link>
              </li>
              <li>
                <Link
                  to="/layanan/badminton"
                  className="hover:text-primary transition-colors"
                >
                  Lapangan Badminton
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-serif font-bold text-[16px] mb-6">
              Tautan Penting
            </h4>
            <ul className="space-y-3 text-[13px] font-medium text-ink/70">
              <li>
                <Link
                  to="/tentang-kami"
                  className="hover:text-primary transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  to="/portofolio"
                  className="hover:text-primary transition-colors"
                >
                  Portofolio Proyek
                </Link>
              </li>
              <li>
                <Link
                  to="/kontak"
                  className="hover:text-primary transition-colors"
                >
                  Kontak
                </Link>
              </li>
              <li>
                <Link
                  to="/artikel"
                  className="hover:text-primary transition-colors"
                >
                  Wawasan & Artikel
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-serif font-bold text-[16px] mb-6">
              Hubungi Kami
            </h4>
            <ul className="space-y-4 text-[13px] font-medium text-ink/70">
              <li className="flex items-start gap-3">
                <MapPin className="text-secondary flex-shrink-0" size={16} />
                <span className="leading-[1.6]">
                  Jl. Gang Masjid, RT.04/RW.04, Desa Jabon
                  <br />
                  Kec. Kauman, Kab Tulungagung
                  <br />
                  Jawa Timur 66261
                </span>
              </li>
              <li className="flex items-center gap-3">
                <a
                  href="https://wa.me/6281333751922"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <FaWhatsapp
                    className="text-[#25D366] flex-shrink-0"
                    size={18}
                  />
                  <span>WhatsApp: +62 813-3375-1922</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-ink/50 uppercase tracking-[0.5px]">
          <p>
            &copy; {new Date().getFullYear()} hi.court. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
