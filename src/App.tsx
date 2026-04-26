import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ScrollToTop from "./components/ScrollToTop";

// Lazy loading views for faster initial load
const Home = lazy(() => import("./pages/Home"));
const Layanan = lazy(() => import("./pages/Layanan"));
const LayananDetail = lazy(() => import("./pages/LayananDetail"));
const Portofolio = lazy(() => import("./pages/Portofolio"));
const Artikel = lazy(() => import("./pages/Artikel"));
const ArtikelDetail = lazy(() => import("./pages/ArtikelDetail"));
const TentangKami = lazy(() => import("./pages/TentangKami"));
const Kontak = lazy(() => import("./pages/Kontak"));
const AdminCMS = lazy(() => import("./pages/KelolaLapangan22"));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh] bg-bg">
    <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-bg text-ink font-sans selection:bg-accent selection:text-ink overflow-x-hidden">
          <Navbar />

          <main className="flex-grow">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tentang-kami" element={<TentangKami />} />
                <Route path="/layanan" element={<Layanan />} />
                <Route path="/layanan/:slug" element={<LayananDetail />} />
                <Route path="/portofolio" element={<Portofolio />} />
                <Route path="/artikel" element={<Artikel />} />
                <Route path="/artikel/:slug" element={<ArtikelDetail />} />
                <Route path="/kontak" element={<Kontak />} />
                <Route path="/kelola_lapangan_22" element={<AdminCMS />} />
              </Routes>
            </Suspense>
          </main>

          <Footer />
          <FloatingWhatsApp />
        </div>
      </Router>
    </HelmetProvider>
  );
}
