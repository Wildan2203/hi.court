import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Clock, Search } from "lucide-react";
import { motion } from "motion/react";
import Breadcrumbs from "../components/Breadcrumbs";
import LazyImage from "../components/LazyImage";
import { IMAGES } from "../constants/images";

export default function Artikel() {
  const [customArticles, setCustomArticles] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => setCustomArticles(data.artikel || []))
      .catch((err) => console.error("Gagal memuat data artikel", err));
  }, []);

  const articles = [
    {
      title: "Kelebihan Lapangan Tenis Flexy Dibanding Standar",
      date: "April 25, 2026",
      cat: "Edukasi",
      minRead: "4 min",
      img: IMAGES.artikel2,
      minidesc:
        "Pelajari secara mendalam mengapa para atlet profesional masa kini lebih merekomendasikan penggunaan permukaan flexypave. Artikel ini akan membedah secara ilmiah bagaimana elastisitas bahan akrilik dari flexypave mampu meredam tekanan (shock-absorption) pada lutut dan persendian kaki, sehingga risiko cedera jangka panjang bagi atlet maupun amatir dapat diminimalisir secara drastis saat bermain.",
    },
    {
      title: "Cek di Sini! Harga Lapangan Tenis Murah & Terjangkau",
      date: "April 25, 2026",
      cat: "Biaya",
      minRead: "3 min",
      img: IMAGES.artikel3,
      minidesc:
        "Berapa sebenarnya budget yang Anda perlukan untuk membangun lapangan impian? Kami menyajikan rincian biaya komponen pembuatan lapangan tenis secara transparan. Mulai dari pengerjaan aspal hotmix dasar, instalasi kawat harmonika, estimasi daya lighting LED yang dibutuhkan untuk bermain malam, hingga biaya jasa pengecatan akrilik premium per meter perseginya.",
    },
    {
      title: "Alasan Harus Memilih Kontraktor Berpengalaman",
      date: "April 25, 2026",
      cat: "Tips",
      minRead: "5 min",
      img: IMAGES.artikel4,
      minidesc:
        "Tahukah Anda banyak lapangan olahraga yang catnya mengelupas dan lapangannya retak-retak hanya dalam hitungan bulan? Itu seringkali diakibatkan oleh pengerjaan pemborong rumahan biasa yang tidak memahami struktur drainase dan sifat material. Simak analisa kenapa penggunaan kontraktor spesialis menjadi investasi terbaik untuk umur lapangan Anda.",
    },
    {
      title: "Mengenal Perbedaan Permukaan Hardcourt vs Clay",
      date: "April 25, 2026",
      cat: "Edukasi",
      minRead: "6 min",
      img: IMAGES.artikel5,
      minidesc:
        "Setiap turnamen Grand Slam memiliki ciri khasnya, ada yang hardcourt dan ada yang gravel (tanah liat). Kenali perbedaan gaya bermain, kecepatan pantulan bola (ball bounce speed), dan perawatan dari permukaan tanah liat dibandingkan permukaan aspal-akrilik beton. Panduan ini sangat cocok bagi klub yang masih ragu memilih jenis bidang lantai lapangannya.",
    },
    {
      title: "Waktu Terbaik Mengecat Ulang Lapangan Olahraga",
      date: "April 25, 2026",
      cat: "Perawatan",
      minRead: "3 min",
      img: IMAGES.artikel6,
      minidesc:
        "Paparan hujan dan terik UV selama bertahun-tahun pasti akan membuat pigmen warna lapangan lantai luaran Anda memudar dan berubah menjadi licin (kehilangan pasir silika). Jangan menunggu jatuhnya korban! Kenali 5 tanda pasti bahwa lapangan basket maupun tenis Anda mendesak memerlukan peremajaan cat untuk mengembalikan grip serta nilai estetikanya ke sedia kala.",
    },
    ...customArticles.map((a) => ({
      title: a.judul,
      date: a.tanggal,
      cat: a.kategori,
      minRead: "5 min",
      img: a.gambar || IMAGES.artikel6,
      minidesc: a.isi.substring(0, 150) + "...",
      isCustom: true,
    })),
  ];

  const filteredArticles = articles.filter((article) => {
    const q = searchQuery.toLowerCase();
    return (
      article.title.toLowerCase().includes(q) ||
      article.cat.toLowerCase().includes(q) ||
      article.minidesc.toLowerCase().includes(q)
    );
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <Helmet>
        <title>Wawasan & Artikel - hi.court</title>
        <meta
          name="description"
          content="Temukan wawasan, tips perawatan, estimasi biaya RAB, dan edukasi pembuatan lapangan olahraga dari hi.court untuk sarana lapangan tenis, basket & badminton."
        />
        <meta
          name="keywords"
          content="artikel lapangan olahraga, tips merawat lapangan tenis, biaya lapangan basket, panduan bangun GOR, wawasan konstruksi sarana olahraga, edukasi flexypave, hi.court"
        />
        <meta property="og:title" content="Wawasan & Artikel - hi.court" />
        <meta
          property="og:description"
          content="Wawasan, tips, dan edukasi seputar pembuatan dan perawatan lapangan olahraga dari hi.court."
        />
        <meta property="og:image" content={IMAGES.metaImageOG} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content={IMAGES.metaImageOG} />
        <link rel="canonical" href="https://hicourt.com/artikel" />
      </Helmet>
      <div className="pt-24 pb-16 min-h-screen bg-bg">
        {/* Page Header */}
        <section className="bg-primary/5 py-16 md:py-20 px-6 border-b border-primary/10">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="flex justify-center w-full mb-6">
              <Breadcrumbs />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Wawasan & Artikel
            </h1>
            <p className="text-lg text-ink/80 leading-[1.6]">
              Temukan berbagai informasi, tips, panduan biaya, hingga wawasan
              edukasional seputar pembuatan dan perawatan lapangan olahraga.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-7xl">
            {/* Search Header */}
            <div className="mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
              <h2 className="text-2xl font-serif text-primary font-bold">
                Semua Artikel
              </h2>
              <div className="relative w-full md:w-96">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search size={18} className="text-ink/40" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari judul, kategori, atau topik..."
                  className="w-full pl-11 pr-4 py-3 bg-white border border-primary/10 rounded-full text-[14px] text-ink placeholder:text-ink/40 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                />
              </div>
            </div>

            {/* Featured Article */}
            {!searchQuery && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
                className="mb-16"
              >
                <Link
                  to="/artikel/panduan-lengkap-membangun-flexypave-dari-nol"
                  className="bg-white rounded-[24px] overflow-hidden shadow-soft border border-primary/10 flex flex-col md:flex-row group cursor-pointer block"
                >
                  {/* BAGIAN YANG DIPERBAIKI (Featured Article) */}
                  <div className="md:w-1/2 relative min-h-[250px] md:min-h-[350px] overflow-hidden aspect-video md:aspect-auto bg-primary/5">
                    <LazyImage
                      src={IMAGES.artikel1}
                      alt="Featured Article"
                      /* object-contain MEMASTIKAN TEKS GAMBAR TIDAK TERPOTONG SAMA SEKALI */
                      className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-contain w-full h-full"
                      wrapperClassName="absolute inset-0 w-full h-full"
                    />
                  </div>
                  <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <span className="text-[11px] font-bold uppercase tracking-[1px] text-secondary mb-4 block px-[10px] py-[4px] bg-secondary/10 w-max rounded-full">
                      Topik Hangat &bull; April 25, 2026
                    </span>
                    <h2 className="text-2xl md:text-3xl font-serif text-primary mb-4 group-hover:text-secondary transition-colors leading-[1.3]">
                      Panduan Lengkap Pembuatan Lapangan Tenis Flexy Pave
                    </h2>
                    <p className="text-ink/70 leading-[1.6] mb-8 text-[15px]">
                      Pembuatan lapangan tenis dengan sistem Flexy Pave membutuhkan
                      perhatian khusus pada kualitas permukaan, daya lentur, serta
                      ketahanan terhadap cuaca. Material ini dirancang untuk memberikan
                      kenyamanan bermain sekaligus mengurangi risiko cedera. Pelajari
                      tahapan persiapan dasar, proses pelapisan, hingga finishing agar
                      lapangan memenuhi standar permainan profesional.
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center text-[13px] font-bold uppercase tracking-[0.5px] text-ink/50 group-hover:text-primary transition-colors">
                        Baca selengkapnya{" "}
                        <ArrowRight
                          size={16}
                          className="ml-2 group-hover:translate-x-1 transition-transform"
                        />
                      </div>
                      <div className="flex items-center gap-1.5 text-ink/40 text-[13px] font-medium">
                        <Clock size={16} /> 7 min baca
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}

            {/* Grid Articles */}
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article, idx) => {
                  // Generate slug from title
                  const slug = article.title
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)+/g, "");

                  return (
                    <motion.div
                      key={idx}
                      initial="hidden"
                      whileInView="visible"
                      variants={fadeIn}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <Link
                        to={`/artikel/${slug}`}
                        className="bg-card-bg rounded-[20px] overflow-hidden border border-primary/10 shadow-soft hover:-translate-y-1 transition-all group cursor-pointer flex flex-col h-full"
                      >
                        {/* BAGIAN YANG DIPERBAIKI (Grid Articles) */}
                        <div className="w-full aspect-video overflow-hidden relative bg-primary/5 border-b border-primary/10">
                          <LazyImage
                            src={article.img}
                            alt={article.title}
                            /* object-contain MEMASTIKAN TEKS GAMBAR TIDAK TERPOTONG SAMA SEKALI */
                            className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-contain w-full h-full"
                            wrapperClassName="absolute inset-0 w-full h-full"
                          />
                        </div>
                        <div className="p-6 flex-grow flex flex-col">
                          <span className="text-[11px] font-bold uppercase tracking-[1px] text-secondary mb-4 block px-[10px] py-[4px] bg-secondary/10 w-max rounded-full">
                            {article.cat} &bull; {article.date}
                          </span>
                          <h4 className="text-[18px] font-serif text-primary mb-3 group-hover:text-secondary transition-colors leading-[1.4] line-clamp-2">
                            {article.title}
                          </h4>
                          <p className="text-[13px] text-ink/70 leading-[1.6] line-clamp-3 mb-6">
                            {article.minidesc}
                          </p>

                          <div className="mt-auto flex items-center justify-between pt-4 border-t border-primary/5">
                            <div className="flex items-center text-[13px] font-bold uppercase tracking-[0.5px] text-ink/50 group-hover:text-primary transition-colors">
                              Baca{" "}
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
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-[24px] border border-primary/10">
                <Search size={48} className="mx-auto text-ink/20 mb-4" />
                <h3 className="text-xl font-serif text-primary mb-2">
                  Artikel tidak ditemukan
                </h3>
                <p className="text-ink/60">Coba cari dengan kata kunci lain.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}