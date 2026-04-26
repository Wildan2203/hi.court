import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  Building2,
  Shield,
  Landmark,
  GraduationCap,
  Plane,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../components/Breadcrumbs";
import LazyImage from "../components/LazyImage";
import { IMAGES } from "../constants/images";

export default function Portofolio() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("kategori") || "Semua";

  const [activeTab, setActiveTab] = useState(initialCategory);
  const [customProjects, setCustomProjects] = useState<any[]>([]);

  // If URL changes due to navigation from LayananDetail, update active tab
  useEffect(() => {
    const kat = searchParams.get("kategori");
    if (kat) {
      setActiveTab(kat);
    }
  }, [searchParams]);

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => setCustomProjects(data.portofolio || []))
      .catch((err) => console.error("Gagal memuat data portofolio", err));
  }, []);

  const categories = [
    "Semua",
    "Tenis",
    "Basket",
    "Badminton",
    "Jogging Track",
    "Pickleball",
    "Volly",
  ];

  const mitraList = [
    { name: "Kementerian PUPR", icon: Landmark, category: "Pemerintahan" },
    { name: "Kementerian Pertahanan", icon: Shield, category: "Pemerintahan" },
    { name: "Bank Mandiri", icon: Building2, category: "BUMN & BUMD" },
    { name: "Bank DKI", icon: Building2, category: "BUMN & BUMD" },
    { name: "TNI AD", icon: Shield, category: "Militer" },
    { name: "TNI AU", icon: Shield, category: "Militer" },
    { name: "Kopassus", icon: Shield, category: "Militer" },
    { name: "Korpaskhas", icon: Shield, category: "Militer" },
    { name: "PT. PLN (Persero)", icon: Building2, category: "BUMN" },
    { name: "PT. Angkasa Pura II", icon: Plane, category: "BUMN" },
    {
      name: "Universitas Indonesia",
      icon: GraduationCap,
      category: "Pendidikan",
    },
    {
      name: "Universitas Negeri Jakarta",
      icon: GraduationCap,
      category: "Pendidikan",
    },
  ];

  const projects = [
    {
      cat: "Tenis",
      title: "Pembuatan Hardcourt Instansi Pemerintah",
      img: IMAGES.lapangantenis1,
    },
    {
      cat: "Tenis",
      title: "Renovasi Lapangan Tenis Outdoor",
      img: IMAGES.lapangantenis2,
    },
    {
      cat: "Tenis",
      title: "Renovasi Lapangan Tenis Outdoor",
      img: IMAGES.lapangantenis3,
    },
    {
      cat: "Tenis",
      title: "Renovasi Lapangan Tenis Outdoor",
      img: IMAGES.lapangantenis4,
    },
    {
      cat: "Tenis",
      title: "Renovasi Lapangan Tenis Outdoor",
      img: IMAGES.lapangantenis5,
    },
    {
      cat: "Tenis",
      title: "Renovasi Lapangan Tenis Outdoor",
      img: IMAGES.lapangantenis6,
    },
    {
      cat: "Tenis",
      title: "Renovasi Lapangan Tenis Outdoor",
      img: IMAGES.lapangantenis7,
    },
    {
      cat: "Tenis",
      title: "Renovasi Lapangan Tenis Outdoor",
      img: IMAGES.lapangantenis8,
    },
    {
      cat: "Tenis",
      title: "Renovasi Lapangan Tenis Outdoor",
      img: IMAGES.lapangantenis9,
    },
    {
      cat: "Tenis",
      title: "Renovasi Lapangan Tenis Outdoor",
      img: IMAGES.lapangantenis10,
    },
    {
      cat: "Basket",
      title: "Lapangan Basket 3x3 Perumahan",
      img: IMAGES.lapanganbasket1,
    },
    {
      cat: "Basket",
      title: "Lapangan Basket 3x3 Perumahan",
      img: IMAGES.lapanganbasket2,
    },
    {
      cat: "Basket",
      title: "Lapangan Basket 3x3 Perumahan",
      img: IMAGES.lapanganbasket3,
    },
    {
      cat: "Basket",
      title: "Lapangan Basket 3x3 Perumahan",
      img: IMAGES.lapanganbasket4,
    },
    {
      cat: "Badminton",
      title: "Pemasangan Flexypave GOR Indoor",
      img: IMAGES.lapanganbadminton1,
    },
    {
      cat: "Jogging Track",
      title: "Pembuatan Lintasan Jogging Outdoor Flexypave",
      img: IMAGES.lapanganjoggingtrack1 || IMAGES.defaultPortfolioOther,
    },
    {
      cat: "Pickleball",
      title: "Pembangunan Lapangan Pickleball Mandiri",
      img: IMAGES.lapanganpickleball1 || IMAGES.defaultPortfolioOther2,
    },
    {
      cat: "Pickleball",
      title: "Pembangunan Lapangan Pickleball Mandiri",
      img: IMAGES.lapanganpickleball2 || IMAGES.defaultPortfolioOther2,
    },
    {
      cat: "Pickleball",
      title: "Pembangunan Lapangan Pickleball Mandiri",
      img: IMAGES.lapanganpickleball3 || IMAGES.defaultPortfolioOther2,
    },
    {
      cat: "Pickleball",
      title: "Pembangunan Lapangan Pickleball Mandiri",
      img: IMAGES.lapanganpickleball4 || IMAGES.defaultPortfolioOther2,
    },
    {
      cat: "Pickleball",
      title: "Pembangunan Lapangan Pickleball Mandiri",
      img: IMAGES.lapanganpickleball5 || IMAGES.defaultPortfolioOther2,
    },
    {
      cat: "Volly",
      title: "Pengerjaan Lapangan Volly Flexypave",
      img: IMAGES.lapanganvolly1,
    },
    ...customProjects.map((p) => ({
      cat: p.kategori,
      title: p.judul,
      img: p.gambar || IMAGES.lapanganbadminton1,
      isCustom: true,
    })),
  ];

  const filteredProjects =
    activeTab === "Semua"
      ? projects
      : projects.filter((p) => p.cat === activeTab);

  return (
    <>
      <Helmet>
        <title>Portofolio Proyek - hi.court</title>
        <meta
          name="description"
          content="Lihat galeri portofolio dan hasil karya hi.court dalam merancang serta membangun proyek lapangan tenis, basket, dan badminton berstandar internasional."
        />
        <meta
          name="keywords"
          content="portofolio pembuatan lapangan, hasil karya kontraktor olahraga, proyek lapangan flexypave, gambar lapangan tenis, desain lapangan basket outdoor, contoh proyek GOR, hi.court"
        />
        <meta property="og:title" content="Portofolio Proyek - hi.court" />
        <meta
          property="og:description"
          content="Lihat galeri portofolio lengkap proyek lapangan olahraga dari hi.court."
        />
        <meta property="og:image" content={IMAGES.metaImageOG} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content={IMAGES.metaImageOG} />
        <link rel="canonical" href="https://hicourt.com/portofolio" />
      </Helmet>
      <div className="pt-24 pb-16 min-h-screen bg-bg">
        {/* Page Header */}
        <section className="bg-primary/5 py-16 md:py-20 px-6 border-b border-primary/10">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="flex justify-center w-full mb-6">
              <Breadcrumbs />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Portofolio Kami
            </h1>
            <p className="text-lg text-ink/80 leading-[1.6]">
              Jelajahi berbagai proyek konstruksi dan renovasi lapangan olahraga
              Flexypave yang telah berhasil kami kerjakan.
            </p>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-7xl">
            {/* Filters */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-6 py-2.5 rounded-full text-[13px] font-bold uppercase tracking-[0.5px] transition-all duration-300 ${
                    activeTab === cat
                      ? "bg-primary text-white shadow-md"
                      : "bg-white text-ink/70 hover:bg-primary/10 hover:text-primary border border-primary/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence>
                {filteredProjects.map((item, idx) => (
                  <motion.div
                    key={item.title + idx}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group relative rounded-[20px] overflow-hidden cursor-pointer shadow-soft border border-primary/10 bg-white"
                  >
                    <div className="aspect-[4/3] bg-card-bg overflow-hidden relative">
                      <LazyImage
                        src={item.img}
                        alt={item.title}
                        className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover w-full h-full"
                        wrapperClassName="w-full h-full"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                    <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-ink/90 via-ink/40 to-transparent flex flex-col justify-end p-6">
                      <span className="inline-block px-[10px] py-[4px] bg-white/20 backdrop-blur-sm text-white text-[11px] font-bold uppercase tracking-[1px] rounded-full w-max mb-3 shadow-sm">
                        {item.cat}
                      </span>
                      {/* <h3 className="text-white font-serif font-bold text-lg md:text-xl leading-tight drop-shadow-md">
                        {item.title}
                      </h3> */}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Full Mitra Section */}
        <section className="py-24 bg-card-bg border-t border-primary/10">
          <div className="container mx-auto px-6 max-w-7xl text-center">
            <h2 className="text-secondary font-bold tracking-[1px] uppercase text-[12px] px-4 py-1.5 bg-secondary/10 rounded-full inline-block mb-4">
              Mitra Kepercayaan
            </h2>
            <h3 className="text-3xl md:text-[40px] font-serif leading-[1.2] text-primary mb-8">
              Langganan Perusahaan Besar & Pemerintahan
            </h3>
            <p className="text-ink/80 text-[15px] mb-16 max-w-2xl mx-auto leading-[1.6]">
              Kualitas pekerjaan yang konsisten dan garansi tertulis membuat
              puluhan institusi papan atas mempercayakan infrastruktur olahraga
              mereka kepada hi.court.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
              {mitraList.map((mitra, index) => {
                const Icon = mitra.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-[20px] shadow-sm border border-primary/10 flex flex-col items-center justify-center min-h-[160px] hover:shadow-md hover:border-primary/30 transition-all hover:-translate-y-1 group relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full -z-0 transition-transform group-hover:scale-125 duration-500"></div>
                    <div className="w-12 h-12 bg-primary/5 text-primary rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300 z-10">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <span className="font-serif font-bold text-[15px] md:text-[17px] text-ink/80 group-hover:text-primary text-center leading-[1.3] transition-colors z-10 mb-2">
                      {mitra.name}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-primary/60 z-10">
                      {mitra.category}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
