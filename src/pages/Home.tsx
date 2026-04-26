import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ShieldCheck,
  Activity,
  Trophy,
  CircleDot,
  Dribbble,
  Layers,
  CheckCircle,
  ChevronDown,
  Phone,
  Mail,
  ArrowRight,
  MoveRight,
  Wallet,
  ThumbsUp,
  Clock,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import {
  TennisBallIcon,
  BasketballIcon,
  ShuttlecockIcon,
  ShoeIcon,
  PickleballIcon,
  VolleyballIcon,
} from "../components/Icons";
import LazyImage from "../components/LazyImage";
import { IMAGES } from "../constants/images";

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <>
      <Helmet>
        <title>
          hi.court | Kontraktor Lapangan Olahraga Spesialis Flexypave #1
        </title>
        <meta
          name="description"
          content="hi.court: Spesialis Kontraktor Olahraga #1 Indonesia. Jasa pembuatan & renovasi lapangan tenis, basket, badminton berstandar ITF/FIBA dengan material Flexypave premium. Konsultasi Gratis & Bergaransi!"
        />
        <meta
          name="keywords"
          content="jasa pembuatan lapangan tenis flexypave, kontraktor lapangan olahraga indonesia, jasa renovasi lapangan basket, spesialis lapangan badminton flexypave, biaya pembuatan lapangan olahraga outdoor, pengecatan lapangan basket, hi.court"
        />
        <meta
          property="og:title"
          content="hi.court | Kontraktor Lapangan Olahraga Spesialis Flexypave #1"
        />
        <meta
          property="og:description"
          content="Jasa pembuatan dan renovasi lapangan tenis, basket, dan badminton profesional berstandar internasional. Konsultasi gratis sekarang!"
        />
        <meta property="og:image" content={IMAGES.metaImageHomeOG} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content={IMAGES.metaImageHomeOG} />
        <link rel="canonical" href="https://hicourt.com/" />
      </Helmet>

      {/* Hero Section */}
      <section
        id="beranda"
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 px-4 lg:px-8"
      >
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-primary to-secondary rounded-[20px] p-8 lg:p-16 text-white relative overflow-hidden flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="absolute -right-[50px] -bottom-[50px] w-[300px] h-[300px] bg-white/5 rounded-full pointer-events-none"></div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="flex-1 text-center lg:text-left relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-[11px] font-bold uppercase tracking-[0.5px] mb-6 shadow-sm shadow-black/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Langganan Perusahaan Besar & Pemerintahan
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[60px] font-serif leading-[1.1] mb-6">
              hi.court: Spesialis Kontraktor Lapangan Olahraga Flexypave.
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0 leading-[1.6]">
              Menghadirkan lapangan tenis, basket, dan badminton berkualitas
              premium dengan material Flexypave standar internasional dan
              garansi resmi.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#kontak"
                className="w-full sm:w-auto px-8 py-4 bg-white text-primary font-bold uppercase tracking-[0.5px] text-[14px] rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-1"
              >
                Konsultasi Gratis
              </a>
              <Link
                to="/layanan"
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white font-bold uppercase tracking-[0.5px] text-[14px] rounded-full transition-all hover:bg-white/10 hover:border-white"
              >
                Daftar Layanan Kami
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-lg lg:max-w-none relative z-10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md p-5 rounded-[12px] border border-white/20">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-4 text-white">
                  <ShieldCheck size={20} />
                </div>
                <h2 className="font-serif text-[16px] mb-2 leading-[1.4]">
                  Indoor Arena
                </h2>
                <p className="text-[12px] text-white/80 leading-relaxed">
                  UV-protected roofing untuk kenyamanan bermain 24 jam di segala
                  cuaca.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-5 rounded-[12px] border border-white/20">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-4 text-white">
                  <Activity size={20} />
                </div>
                <h2 className="font-serif text-[16px] mb-2 leading-[1.4]">
                  Classic Outdoor
                </h2>
                <p className="text-[12px] text-white/80 leading-relaxed">
                  Permukaan lapangan semi-hard yang dioptimalkan untuk standar
                  atlet internasional.
                </p>
              </div>
            </div>

            <div className="mt-4 bg-white/10 backdrop-blur-md p-5 rounded-[12px] border border-white/20 flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary">
                <Trophy size={24} />
              </div>
              <div>
                <p className="text-[14px] font-bold">Kualitas Terjamin</p>
                <p className="text-[12px] text-white/80 mt-1">
                  Bahan Standar Internasional
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tentang Kami Snippet */}
      <section className="py-24 bg-white border-y border-primary/10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <span className="text-secondary font-bold tracking-[1px] uppercase text-[12px] px-4 py-1.5 bg-secondary/10 rounded-full inline-block mb-4">
                Profil hi.court
              </span>
              <h2 className="text-3xl md:text-[40px] font-serif leading-[1.2] text-primary mb-6">
                Membangun Lapangan Olahraga Kelas Dunia di Indonesia
              </h2>
              <div className="space-y-4 text-ink/80 text-[15px] leading-[1.7] mb-8">
                <p>
                  hi.court adalah mitra terpercaya ratusan instansi dalam
                  menghadirkan <strong>jasa pembuatan lapangan olahraga</strong>{" "}
                  berstandar internasional selama lebih dari 15 tahun.
                </p>
                <p>
                  Kami berkomitmen menghadirkan fasilitas rekreasi dan kompetisi
                  yang aman, presisi, serta menggunakan material{" "}
                  <strong>Flexypave</strong> asli yang bergaransi resmi.
                </p>
              </div>
              <Link
                to="/tentang-kami"
                className="inline-flex items-center gap-2 text-primary text-[14px] font-bold uppercase tracking-[0.5px] hover:text-secondary transition-colors group"
              >
                Baca Profil Lengkap{" "}
                <MoveRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={18}
                />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <LazyImage
                src={IMAGES.homeHero}
                alt="Jasa pembuatan lapangan tenis flexypave profesional oleh hi.court"
                className="rounded-[20px] shadow-soft aspect-[4/3] object-cover"
                wrapperClassName="relative z-10"
                fetchpriority="high"
                loading="eager"
              />
              <div className="absolute -inset-4 border border-secondary/30 rounded-[24px] translate-x-4 translate-y-4 z-0 pointer-events-none"></div>
              {/* DIPERBAIKI: Tambahan z-20 agar tidak tertimpa LazyImage */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-[16px] shadow-soft border border-primary/10 z-20">
                <div className="text-3xl font-bold text-primary font-serif">
                  15+
                </div>
                <div className="text-[11px] font-bold uppercase tracking-[1px] text-ink/60">
                  Tahun
                  <br />
                  Pengalaman
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Snippet */}
      <section className="py-24 bg-bg">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-primary font-bold tracking-[1px] uppercase text-[12px] px-4 py-1.5 bg-primary/10 rounded-full inline-block mb-4">
                Layanan Kami
              </span>
              <h2 className="text-3xl md:text-[40px] font-serif leading-[1.2] text-ink">
                Jasa Pembuatan & Renovasi Lapangan Olahraga
              </h2>
            </div>
            <Link
              to="/layanan"
              className="flex items-center gap-2 text-primary text-[14px] font-bold uppercase tracking-[0.5px] hover:text-secondary transition-colors group"
            >
              Lihat Semua Layanan{" "}
              <MoveRight
                className="group-hover:translate-x-1 transition-transform"
                size={18}
              />
            </Link>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                title: "Lapangan Tenis",
                desc: "Jasa pembuatan lapangan tenis standar ITF menggunakan material Flexypave dengan akurasi pantulan bola tinggi.",
                img: IMAGES.layananTenis,
                slug: "tenis",
                icon: <TennisBallIcon size={24} />,
              },
              {
                title: "Lapangan Basket",
                desc: "Kontraktor lapangan basket FIBA outdoor & indoor dengan sistem antislip dan perlindungan sendi atlet.",
                img: IMAGES.layananBasket,
                slug: "basket",
                icon: <BasketballIcon size={24} />,
              },
              {
                title: "Lapangan Badminton",
                desc: "Pemasangan lantai badminton profesional BWF dengan matras Flexypave khusus untuk kenyamanan dan performa.",
                img: IMAGES.layananBadminton,
                slug: "badminton",
                icon: <ShuttlecockIcon size={24} />,
              },
              {
                title: "Jogging Track",
                desc: "Pembangunan lintasan Jogging Track menggunakan sistem pelapisan 100% Flexypave yang empuk dan menyerap goncangan.",
                img: IMAGES.layananJogging || IMAGES.layananDefault,
                slug: "jogging-track",
                icon: <ShoeIcon size={24} />,
              },
              {
                title: "Pickleball",
                desc: "Pembuatan lapangan Pickleball standar profesional dengan sistem matras 100% Flexypave untuk kontrol gerak presisi.",
                img: IMAGES.layananPickleball || IMAGES.layananDefault,
                slug: "pickleball",
                icon: <PickleballIcon size={24} />,
              },
              {
                title: "Lapangan Volly",
                desc: "Jasa pembuatan lapangan volly standar PBVSI dengan material berkualitas tinggi untuk performa dan keamanan pemain.",
                img: IMAGES.layananVolly,
                slug: "volly",
                icon: <VolleyballIcon size={24} />,
              },
            ].map((service, idx) => (
              <motion.div key={idx} variants={fadeIn} className="h-full">
                <Link
                  to={`/layanan/${service.slug}`}
                  className="block group h-full rounded-[24px] bg-white border border-primary/10 overflow-hidden shadow-soft hover:shadow-[0_8px_30px_rgba(85,122,70,0.15)] hover:border-primary/30 transition-all duration-300 flex flex-col transform hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden bg-primary/10">
                    <LazyImage
                      src={service.img}
                      alt={`Jasa pembuatan ${service.title} hi.court`}
                      className="group-hover:scale-110 transition-transform duration-500 ease-in-out object-cover w-full h-full"
                      wrapperClassName="w-full h-full absolute inset-0 z-10"
                    />
                    {/* DIPERBAIKI: Tambahan z-20 dan pointer-events-none */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent z-20 pointer-events-none"></div>
                    {/* DIPERBAIKI: Tambahan z-30 */}
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary shadow-sm z-30">
                      {service.icon}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow relative z-20">
                    <h3 className="text-xl font-serif text-primary mb-3 flex justify-between items-center group-hover:text-secondary transition-colors">
                      {service.title}
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors text-primary border border-primary/20 flex-shrink-0 ml-2">
                        <ArrowRight
                          size={14}
                          className="group-hover:translate-x-0.5 transition-transform"
                        />
                      </div>
                    </h3>
                    <p className="text-[14px] text-ink/70 leading-[1.6] mb-4 flex-grow">
                      {service.desc}
                    </p>
                    <span className="text-[12px] font-bold tracking-[1px] uppercase text-ink/40 group-hover:text-primary transition-colors">
                      Detail Spesifikasi
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-card-bg border-y border-primary/10">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <span className="text-secondary font-bold tracking-[1px] uppercase text-[12px] px-4 py-1.5 bg-secondary/10 rounded-full inline-block mb-4">
                Keunggulan hi.court
              </span>
              <h2 className="text-3xl md:text-[40px] font-serif leading-[1.2] text-primary mb-6">
                Alasan Memilih hi.court sebagai Kontraktor Olahraga Anda
              </h2>
              <p className="text-ink/80 text-[15px] mb-8 leading-[1.6]">
                Kami menjamin keawetan dan keamanan permukaan lapangan melalui
                penggunaan teknik aplikasi material terbaik di kelasnya.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Teknisi Spesialis Berpengalaman",
                    desc: "Pengerjaan dilakukan oleh tim ahli spesifik konstruksi lantai olahraga, bukan kontraktor umum.",
                    icon: <ShieldCheck className="text-white" size={20} />,
                  },
                  {
                    title: "Material Flexypave Standar Global",
                    desc: "Menggunakan bahan premium berstandar ITF/FIBA yang meredam benturan dan antislip.",
                    icon: <Layers className="text-white" size={20} />,
                  },
                  {
                    title: "Biaya Transparan & Bergaransi",
                    desc: "Estimasi biaya rill tanpa biaya tersembunyi dengan dukungan garansi tertulis resmi.",
                    icon: <ThumbsUp className="text-white" size={20} />,
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 p-4 rounded-[16px] border border-primary/5 hover:border-primary/20 transition-colors bg-bg/50"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-soft">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-[16px] font-serif text-primary mb-1">
                        {item.title}
                      </h4>
                      <p className="text-ink/70 text-[13px] leading-[1.5]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <LazyImage
                  src={IMAGES.homeAbout}
                  alt="Proses pengerjaan konstruksi lapangan olahraga profesional oleh teknisi hi.court"
                  className="rounded-[20px] shadow-soft aspect-[4/5] max-w-md mx-auto object-cover"
                  wrapperClassName="relative z-10"
                />
                {/* DIPERBAIKI: z-index diperjelas agar tidak bentrok */}
                <div className="absolute -inset-4 border border-secondary/30 rounded-[24px] translate-x-6 translate-y-6 z-0 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-[20px] max-w-md mx-auto z-20 pointer-events-none"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mitra Snippet */}
      <section className="py-16 bg-white overflow-hidden border-b border-primary/10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-10">
            <h4 className="text-[13px] font-bold uppercase tracking-[1px] text-ink/50">
              Telah Dipercaya Oleh Institusi, Swasta & Militer Terkemuka
            </h4>
          </div>

          <div className="relative flex overflow-hidden group py-6 border-y border-primary/10 bg-primary/5">
            <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
              <div className="flex gap-20 items-center px-10">
                {[
                  "Kementerian PUPR",
                  "Kementerian Pertahanan",
                  "Bank Mandiri",
                  "Bank DKI",
                  "TNI AD",
                  "TNI AU",
                  "Kopassus",
                  "Korpaskhas",
                  "PT. PLN (Persero)",
                  "PT. Angkasa Pura II",
                  "Universitas Indonesia",
                  "UNJ",
                ].map((mitra, idx) => (
                  <div
                    key={`mitra1-${idx}`}
                    className="text-xl md:text-2xl font-serif font-bold text-ink/40 grayscale hover:grayscale-0 hover:text-primary transition-all duration-300 whitespace-nowrap"
                  >
                    {mitra}
                  </div>
                ))}
              </div>
              <div className="flex gap-20 items-center px-10">
                {[
                  "Kementerian PUPR",
                  "Kementerian Pertahanan",
                  "Bank Mandiri",
                  "Bank DKI",
                  "TNI AD",
                  "TNI AU",
                  "Kopassus",
                  "Korpaskhas",
                  "PT. PLN (Persero)",
                  "PT. Angkasa Pura II",
                  "Universitas Indonesia",
                  "UNJ",
                ].map((mitra, idx) => (
                  <div
                    key={`mitra2-${idx}`}
                    className="text-xl md:text-2xl font-serif font-bold text-ink/40 grayscale hover:grayscale-0 hover:text-primary transition-all duration-300 whitespace-nowrap"
                  >
                    {mitra}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portofolio"
              className="text-[13px] font-bold uppercase tracking-[1px] text-primary hover:text-secondary transition-colors underline underline-offset-4 decoration-primary/30"
            >
              Lihat Daftar Klien Sepenuhnya
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Snippet */}
      <section className="py-24 bg-bg">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-primary font-bold tracking-[1px] uppercase text-[12px] px-4 py-1.5 bg-primary/10 rounded-full inline-block mb-4">
                Portofolio Terkini
              </span>
              <h2 className="text-3xl md:text-[40px] font-serif leading-[1.2] text-ink">
                Proyek Lapangan Olahraga hi.court
              </h2>
            </div>
            <Link
              to="/portofolio"
              className="flex items-center gap-2 text-primary text-[14px] font-bold uppercase tracking-[0.5px] hover:text-secondary transition-colors group"
            >
              Daftar Proyek Lengkap{" "}
              <MoveRight
                className="group-hover:translate-x-1 transition-transform"
                size={18}
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                img: IMAGES.lapangantenis1,
                cat: "Tenis",
                title: "Kontraktor Lapangan Tenis Flexypave",
              },
              {
                img: IMAGES.lapanganbasket1, // Placeholder
                cat: "Basket",
                title: "Pengecatan Ulang Lapangan Basket FIBA",
              },
              {
                img: IMAGES.lapanganbadminton1, // Placeholder
                cat: "Badminton",
                title: "Instalasi Lantai GOR Badminton Indoor",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-[16px] overflow-hidden cursor-pointer shadow-soft border border-primary/10"
              >
                <div className="aspect-[4/3] bg-card-bg relative">
                  <LazyImage
                    src={item.img}
                    alt={`Portofolio hi.court: ${item.title}`}
                    className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover w-full h-full"
                    wrapperClassName="w-full h-full absolute inset-0 z-10"
                    loading="lazy"
                  />
                </div>
                {/* DIPERBAIKI: Tambahan z-20 dan pointer-events-none */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent flex flex-col justify-end p-6 z-20 pointer-events-none">
                  <span className="inline-block px-[10px] py-[4px] bg-white/20 backdrop-blur-sm text-white text-[11px] font-bold uppercase tracking-[1px] rounded-full w-max mb-3 shadow-sm">
                    {item.cat}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Artikel Snippet */}
      <section className="py-24 bg-white border-b border-primary/10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-secondary font-bold tracking-[1px] uppercase text-[12px] px-4 py-1.5 bg-secondary/10 rounded-full inline-block mb-4">
                Edukasi Lapangan
              </span>
              <h2 className="text-3xl md:text-[40px] font-serif leading-[1.2] text-primary">
                Artikel & Tips Kontraktor Olahraga
              </h2>
            </div>
            <Link
              to="/artikel"
              className="flex items-center gap-2 text-primary text-[14px] font-bold uppercase tracking-[0.5px] hover:text-secondary transition-colors group"
            >
              Baca Blog Selengkapnya{" "}
              <MoveRight
                className="group-hover:translate-x-1 transition-transform"
                size={18}
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Kelebihan Lapangan Tenis Flexy Dibanding Standar",
                date: "Okt 12, 2023",
                cat: "Edukasi",
                minRead: "4 min",
                img: IMAGES.artikel2,
                slug: "kelebihan-lapangan-tenis-flexy-dibanding-standar",
              },
              {
                title: "Harga Lapangan Tenis Murah & Terjangkau hi.court",
                date: "Sep 28, 2023",
                cat: "Biaya",
                minRead: "3 min",
                img: IMAGES.artikel3,
                slug: "cek-di-sini-harga-lapangan-tenis-murah-terjangkau",
              },
              {
                title: "Panduan Lengkap Membangun GOR Indoor dari Nol",
                date: "Nov 05, 2023",
                cat: "Topik Hangat",
                minRead: "8 min",
                img: IMAGES.artikel1,
                slug: "panduan-lengkap-membangun-gor-indoor-dari-nol",
              },
            ].map((article, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link
                  to={`/artikel/${article.slug}`}
                  className="bg-card-bg rounded-[20px] overflow-hidden border border-primary/10 shadow-soft hover:-translate-y-1 transition-all group cursor-pointer flex flex-col h-full relative"
                >
                  <div className="h-48 overflow-hidden relative">
                    <LazyImage
                      src={article.img}
                      alt={`Artikel hi.court: ${article.title}`}
                      className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover w-full h-full"
                      wrapperClassName="w-full h-full absolute inset-0 z-10"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col relative z-20">
                    <span className="text-[11px] font-bold uppercase tracking-[1px] text-secondary mb-4 block px-[10px] py-[4px] bg-secondary/10 w-max rounded-full">
                      {article.cat} • {article.date}
                    </span>
                    <h3 className="text-[18px] font-serif text-primary mb-6 group-hover:text-secondary transition-colors leading-[1.4] line-clamp-2">
                      {article.title}
                    </h3>

                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-primary/5">
                      <div className="flex items-center text-[13px] font-bold uppercase tracking-[0.5px] text-ink/50 group-hover:text-primary transition-colors">
                        Baca Artikel{" "}
                        <ArrowRight
                          size={16}
                          className="ml-2 group-hover:translate-x-1 transition-transform"
                        />
                      </div>
                      <div className="flex items-center gap-1.5 text-ink/40 text-[13px] font-medium">
                        <Clock size={14} /> {article.minRead}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-card-bg border-y border-primary/10">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-[40px] font-serif leading-[1.2] text-primary mb-4">
              FAQ Kontraktor Lapangan Olahraga
            </h2>
            <p className="text-ink/80 text-[15px]">
              Pertanyaan seputar jasa pembuatan dan renovasi lapangan hi.court.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Apakah harga pembuatan lapangan bisa dinegosiasikan?",
                a: "Ya, harga sangat fleksibel dan dapat disesuaikan dengan anggaran Anda tanpa menurunkan standar mutu yang esensial.",
              },
              {
                q: "Apakah hi.court memberikan garansi?",
                a: "Tentu. Kami memberikan garansi resmi (minimal 3 bulan maksimal 6 bulan) untuk kualitas material dan pengerjaan lapangan untuk periode tertentu setelah proyek diserahterimakan.",
              },
              {
                q: "Berapa lama estimasi waktu pengerjaan 1 lapangan tenis?",
                a: "Waktu pengerjaan bervariasi bergantung kondisi lahan dan cuaca (jika outdoor), rata-rata membutuhkan 2 hingga 4 minggu kerja.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="border border-primary/10 rounded-[16px] overflow-hidden shadow-[0_2px_8px_rgba(85,122,70,0.04)] bg-white"
              >
                <button
                  className="w-full text-left p-6 flex justify-between items-center transition-colors focus:outline-none hover:bg-bg/50"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                >
                  <span className="font-medium text-ink pr-4 text-[15px]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`flex-shrink-0 text-primary transition-transform duration-300 ${activeFaq === idx ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-bg/30"
                    >
                      <div className="p-6 pt-0 text-ink/70 leading-[1.6] text-[13px] border-t border-primary/5 mt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="kontak" className="py-20 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto rounded-[20px] bg-gradient-to-br from-primary to-secondary relative overflow-hidden p-10 lg:p-16">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay z-0"
            style={{ backgroundImage: `url('${IMAGES.homeHeroBackground}')` }}
          ></div>
          <div className="absolute right-[10%] top-[-50px] w-[200px] h-[200px] bg-white/5 rounded-full pointer-events-none z-0"></div>
          <div className="relative z-10 text-center text-white">
            <h2 className="text-3xl md:text-5xl font-serif leading-[1.1] mb-6">
              Siap Membangun Lapangan Olahraga Anda?
            </h2>
            <p className="text-white/80 text-[16px] mb-10 max-w-2xl mx-auto leading-[1.6]">
              Jangan tunda lagi. Konsultasikan kebutuhan dan budget Anda
              sekarang juga. Kepuasan Anda adalah prioritas utama kami.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={`https://wa.me/6281335147090?text=${encodeURIComponent("Halo hi.court, saya tertarik untuk berkonsultasi mengenai pembuatan lapangan olahraga. Mohon info lebih lanjut.")}`}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 bg-[#25D366] text-white font-bold uppercase tracking-[0.5px] text-[14px] rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-1 hover:bg-[#20BE5C] flex items-center justify-center gap-2"
              >
                <FaWhatsapp size={20} /> Chat via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Peta Interaktif - Maps Section */}
      <section className="pb-24 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-secondary font-bold tracking-[1px] uppercase text-[12px] px-4 py-1.5 bg-secondary/10 rounded-full inline-block mb-4">
              Lokasi Kami
            </h2>
            <h3 className="text-3xl md:text-[40px] font-serif leading-[1.2] text-primary">
              Kunjungi Kantor hi.court
            </h3>
          </div>
          <div className="w-full h-[450px] bg-card-bg rounded-[24px] overflow-hidden shadow-soft border border-primary/10">
            <iframe
              src="https://maps.google.com/maps?q=Jl.%20Gang%20Masjid,%20RT.%2004%20RW.%2004,%20Desa,%20Jabon,%20Jatimulyo,%20Kec.%20Kauman,%20Kabupaten%20Tulungagung,%20Jawa%20Timur%2066261,%20Indonesia&sll=-8.036895,111.873408&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Kantor hi.court"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}