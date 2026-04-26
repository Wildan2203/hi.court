import React from "react";
import { useParams, Link, Navigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion"; // Catatan: pastikan import dari "framer-motion" jika "motion/react" error
import { Helmet } from "react-helmet-async";
import {
  CheckCircle,
  Phone,
  ArrowRight,
  Cog,
  HardHat,
  FileText,
} from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import LazyImage from "../components/LazyImage";
import { IMAGES } from "../constants/images";

const serviceData: Record<string, any> = {
  // ... (Data serviceData Anda tetap sama persis, saya persingkat di sini agar rapi)
  tenis: {
    title: "Pembuatan Lapangan Tenis Profesional",
    heroImg: IMAGES.layananTenis,
    description: "Kami melayani pembuatan dari nol maupun pelapisan ulang lapangan tenis Flexypave...",
    longDesc: "Lapangan tenis yang baik bukan hanya dilihat dari kemulusan catnya...",
    benefits: ["Lapisan Flexypave Tahan Sinar UV", "Ketahanan Pakai dengan Garansi Minimal 3 Bulan Maksimal 6 Bulan", "Pantulan Bola 100% Konsisten", "Material Flexypave untuk Keamanan Lutut", "Tersedia Pilihan Warna Custom"],
    specifications: ["Ketebalan Coating: 2.0mm - 3.0mm", "Material: 100% Flexypave", "Standarisasi: ITF Classification", "Waktu Pengerjaan: 14 - 21 Hari Kerja", "Garansi: Minimal 3 Bulan Maksimal 6 Bulan"],
    processes: [
      { title: "Site Inspection & Leveling", desc: "Pemetaan kemiringan aspal/beton (1-degree slope)..." },
      { title: "Patching & Crack Repair", desc: "Penutupan retak rambut dan cekungan..." },
      { title: "Instalasi Material Flexypave", desc: "Aplikasi lapisan primer dan material cair..." },
      { title: "Top-Coat & Line Painting", desc: "Pengecatan hingga 3 lapisan warna UV-resistant..." },
    ],
    relatedArticleSlug: "kelebihan-lapangan-tenis-flexy-dibanding-standar",
    relatedArticleName: "Mengapa Harus Berpindah ke Lapangan Tenis Flexypave?",
  },
  basket: { /* Data Basket */ },
  badminton: { /* Data Badminton */ },
  "jogging-track": { /* Data Jogging Track */ },
  pickleball: { /* Data Pickleball */ },
  volly: { /* Data Volly */ },
};

export default function LayananDetail() {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const currentUrl =
    typeof window !== "undefined"
      ? window.location.href
      : `https://hicourt.com${location.pathname}`;

  const decodedSlug = slug ? decodeURIComponent(slug) : "";

  if (!decodedSlug || !serviceData[decodedSlug]) {
    return <Navigate to="/layanan" replace />;
  }

  const service = serviceData[decodedSlug];

  return (
    <>
      <Helmet>
        <title>{service.title} - hi.court</title>
        <meta name="description" content={service.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={`${service.title} - hi.court`} />
        <meta property="og:description" content={service.description} />
        <meta property="og:image" content={service.heroImg} />
        <link rel="preload" as="image" href={service.heroImg} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={currentUrl} />
        <meta property="twitter:title" content={`${service.title} - hi.court`} />
        <meta property="twitter:description" content={service.description} />
        <meta property="twitter:image" content={service.heroImg} />
      </Helmet>

      <div className="pt-20 border-t border-primary/10">
        
        {/* HERO IMAGE SECTION (PERBAIKAN ADA DI SINI) */}
        <div className="w-full h-[40vh] md:h-[60vh] relative overflow-hidden bg-gray-900">
          
          {/* Layer 1: Gambar (z-0) */}
          <div className="absolute inset-0 z-0">
            <LazyImage
              src={service.heroImg}
              alt={service.title}
              className="w-full h-full object-cover"
              wrapperClassName="w-full h-full block"
              loading="eager"
              fetchpriority="high"
            />
          </div>
          
          {/* Layer 2: Overlay Gelap (z-10) */}
          <div className="absolute inset-0 bg-ink/50 mix-blend-multiply z-10 pointer-events-none"></div>
          
          {/* Layer 3: Konten Teks (z-20) */}
          <div className="absolute inset-0 flex items-center z-20">
            <div className="container mx-auto px-6 max-w-7xl pt-16 relative">
              <Breadcrumbs
                textColor="text-white/60"
                hoverColor="hover:text-white"
                activeColor="text-white"
                className="mb-4 drop-shadow-md"
              />
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white max-w-3xl leading-[1.1] mt-2 drop-shadow-lg">
                {service.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <section className="py-20 bg-bg">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-16 relative">
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:w-2/3"
              >
                <h2 className="text-3xl font-serif text-primary font-bold mb-6">
                  Tentang Layanan Ini
                </h2>
                <p className="text-lg text-ink/80 leading-[1.8] mb-8 font-medium">
                  {service.description}
                </p>
                <p className="text-[15px] text-ink/70 leading-[1.8] mb-12 flex flex-col gap-4">
                  {service.longDesc
                    .split(".")
                    .filter(Boolean)
                    .map((sentence: string, idx: number) => (
                      <span key={idx} className="block">
                        {sentence}.
                      </span>
                    ))}
                </p>

                <h3 className="text-2xl font-serif text-primary font-bold mb-6">
                  Spesifikasi & Keunggulan Layanan Ini
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                  {service.benefits.map((benefit: string, idx: number) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-4 rounded-[16px] bg-white border border-primary/10 shadow-soft"
                    >
                      <CheckCircle
                        className="text-secondary flex-shrink-0 mt-0.5"
                        size={20}
                      />
                      <span className="text-[14px] font-bold text-ink/80 leading-[1.4]">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Spesifikasi Teknis */}
                <h3 className="text-2xl font-serif text-primary font-bold mb-6 flex items-center gap-3">
                  <Cog className="text-secondary" /> Spesifikasi Teknis
                </h3>
                <ul className="mb-12 space-y-3">
                  {service.specifications.map((spec: string, idx: number) => {
                    const [label, val] = spec.split(": ");
                    return (
                      <li
                        key={idx}
                        className="flex items-center text-[15px] p-3 border-b border-primary/10 last:border-0 hover:bg-white transition-colors"
                      >
                        <span className="font-bold text-primary w-1/3 min-w-[120px]">
                          {label}
                        </span>
                        <span className="text-ink/70 w-2/3">
                          {val || label}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                {/* SOP / Metodologi */}
                <h3 className="text-2xl font-serif text-primary font-bold mb-6 flex items-center gap-3">
                  <HardHat className="text-secondary" /> Metodologi Pengerjaan
                </h3>
                <div className="space-y-6 mb-12">
                  {service.processes.map(
                    (proc: { title: string; desc: string }, idx: number) => (
                      <div key={idx} className="flex gap-6 group">
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center font-serif group-hover:bg-primary group-hover:text-white transition-colors">
                            {idx + 1}
                          </div>
                          {idx !== service.processes.length - 1 && (
                            <div className="w-px h-full bg-primary/20 my-2"></div>
                          )}
                        </div>
                        <div className="pb-6">
                          <h4 className="font-bold text-lg text-primary mb-2 group-hover:text-secondary transition-colors">
                            {proc.title}
                          </h4>
                          <p className="text-ink/70 text-[14px] leading-[1.6]">
                            {proc.desc}
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </div>

                <div className="bg-primary/5 p-6 md:p-8 rounded-[20px] flex flex-col md:flex-row items-center justify-between group border border-primary/10">
                  <div className="mb-6 md:mb-0 md:mr-6 flex-grow">
                    <h4 className="font-serif font-bold text-xl text-primary mb-2">
                      Artikel Pilihan:
                    </h4>
                    <span className="text-[14px] font-medium text-ink/80 block mb-1">
                      {service.relatedArticleName}
                    </span>
                    <span className="text-[13px] text-ink/60">
                      Wawasan lebih lanjut mengenai bahan dan cara perawatannya.
                    </span>
                  </div>
                  <Link
                    to={`/artikel/${service.relatedArticleSlug}`}
                    className="w-full md:w-max px-6 py-3 bg-white flex items-center justify-center rounded-[10px] font-bold uppercase tracking-[1px] text-[13px] border border-primary/10 text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all flex-shrink-0"
                  >
                    Baca Artikel <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </motion.div>

              {/* Sidebar CTA */}
              <div className="lg:w-1/3 relative z-30">
                <div className="bg-primary rounded-[24px] p-8 text-white sticky top-32 shadow-lg">
                  <h3 className="text-xl font-serif font-bold mb-4">
                    Tertarik dengan Proyek Ini?
                  </h3>
                  <p className="text-white/80 text-[14px] leading-[1.6] mb-8">
                    Diskusikan spesifikasi luas lahan, bahan yang Anda minati,
                    dan budget Anda kepada konsultan ahli kami sekarang juga.
                    Konsultasi dan survey lapangan kami sediakan gratis.
                  </p>
                  <div className="space-y-4">
                    <Link
                      to={`/portofolio?kategori=${encodeURIComponent(
                        service.title.includes("Tenis")
                          ? "Tenis"
                          : service.title.includes("Basket")
                          ? "Basket"
                          : service.title.includes("Badminton")
                          ? "Badminton"
                          : service.title.includes("Jogging")
                          ? "Jogging Track"
                          : service.title.includes("Pickleball")
                          ? "Pickleball"
                          : service.title.includes("Volly")
                          ? "Volly"
                          : "Semua"
                      )}`}
                      className="w-full bg-white text-primary font-bold uppercase tracking-[1px] text-[13px] rounded-[10px] py-4 px-6 flex items-center justify-center gap-2 hover:bg-white/90 transition-colors shadow-md"
                    >
                      Lihat Portofolio{" "}
                      {service.title.includes("Tenis")
                        ? "Tenis"
                        : service.title.includes("Basket")
                        ? "Basket"
                        : service.title.includes("Badminton")
                        ? "Badminton"
                        : service.title.includes("Jogging")
                        ? "Jogging Track"
                        : service.title.includes("Pickleball")
                        ? "Pickleball"
                        : service.title.includes("Volly")
                        ? "Volly"
                        : ""}
                    </Link>

                    <Link
                      to={`/kontak?layanan=${encodeURIComponent(service.title)}`}
                      className="w-full bg-secondary text-primary font-bold uppercase tracking-[1px] text-[13px] rounded-[10px] py-4 px-6 flex items-center justify-center gap-2 hover:bg-white transition-colors shadow-md"
                    >
                      <FileText size={18} /> Request a Quote
                    </Link>
                    <a
                      href={`https://wa.me/6281333751922?text=${encodeURIComponent(
                        `Halo hi.court, saya tertarik untuk berkonsultasi mengenai ${service.title}. Mohon info lebih lanjut.`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full bg-[#25D366] text-white font-bold uppercase tracking-[1px] text-[13px] rounded-[10px] py-4 px-6 flex items-center justify-center gap-2 hover:bg-[#20BE5C] transition-colors shadow-sm"
                    >
                      Chat via WhatsApp
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>
      </div>
    </>
  );
}