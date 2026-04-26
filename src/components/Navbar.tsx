import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { IMAGES } from "../constants/images";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initially
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Beranda", path: "/" },
    { name: "Tentang", path: "/tentang-kami" },
    { name: "Layanan", path: "/layanan" },
    { name: "Portofolio", path: "/portofolio" },
    { name: "Artikel", path: "/artikel" },
  ];

  const isHome = location.pathname === "/";
  const navBgClass =
    isScrolled || !isHome
      ? "bg-card-bg/95 backdrop-blur-md shadow-sm py-4 border-b border-primary/15"
      : "bg-transparent py-5";

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${navBgClass}`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
         <Link to="/" className="flex items-center gap-2 md:gap-3 group flex-shrink-0 overflow-visible">
  {/* LOGO */}
  <img
    src={IMAGES.logo}
    alt="hi.court logo"
   className="h-14 md:h-16 w-auto object-contain shrink-0"
  />
  
  {/* TITLE / JUDUL */}
  {/* <span className="font-serif font-bold text-xl md:text-4x2 tracking-tight text-primary whitespace-nowrap">
    hi.court
  </span> */}
</Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-5">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-[13px] font-bold uppercase tracking-[0.5px] transition-colors ${location.pathname === item.path ? "text-primary" : "text-ink/80 hover:text-primary"}`}
              >
                {item.name}
              </Link>
            ))}

            <Link
              to="/kontak"
              className="px-6 py-2.5 bg-primary text-white hover:bg-secondary text-[13px] font-bold uppercase tracking-[0.5px] rounded-[10px] shadow-[0_4px_15px_rgba(85,122,70,0.2)] transition-all hover:-translate-y-0.5 ml-4"
            >
              Hubungi Kami
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-card-bg border-b border-primary/10 overflow-hidden shadow-soft"
          >
            <div className="px-6 py-4 flex flex-col space-y-4">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-bold uppercase tracking-[0.5px] text-[13px] ${location.pathname === item.path ? "text-primary" : "text-ink/80"}`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/kontak"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center px-5 py-3 bg-primary text-white font-bold uppercase tracking-[0.5px] text-[13px] rounded-[10px] mt-2"
              >
                Hubungi Kami
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
