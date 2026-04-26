import React from "react";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { Target, Flag, Users, Award } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import LazyImage from "../components/LazyImage";
import { IMAGES } from "../constants/images";

export default function TentangKami() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <Helmet>
        <title>Tentang Kami | hi.court - Spesialis Kontraktor Olahraga</title>
        <meta
          name="description"
          content="Profil hi.court, spesialis kontraktor lapangan olahraga flexypave terkemuka di Indonesia. Berpengalaman melayani pembuatan & renovasi berstandar internasional."
        />
        <meta
          name="keywords"
          content="profil kontraktor lapangan olahraga, tentang hi.court, pengalaman hi.court, spesialis konstruksi lapangan, pembuat lapangan tenis flexypave, kontraktor lapangan basket"
        />
        <meta
          property="og:title"
          content="Tentang Kami | hi.court - Spesialis Kontraktor Olahraga"
        />
        <meta
          property="og:description"
          content="Profil hi.court, spesialis kontraktor lapangan olahraga flexypave terkemuka di Indonesia."
        />
        <meta property="og:image" content={IMAGES.metaImageOG} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content={IMAGES.metaImageOG} />
        <link rel="canonical" href="https://hicourt.com/tentang-kami" />
      </Helmet>
      
      <div className="pt-24 pb-16 min-h-screen bg-bg">
        {/* Page Header */}
        <section className="bg-primary/5 py-16 md:py-20 px-6 border-b border-primary/10">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="flex justify-center w-full mb-6">
              <Breadcrumbs />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Tentang hi.court
            </h1>
            <p className="text-lg text-ink/80 leading-[1.6]">
              Membangun ruang berekspresi dan berprestasi melalui infrastruktur
              olahraga yang berkualitas, aman, berstandar internasional, dan
              bergaransi nyata.
            </p>
          </div>
        </section>

        {/* Main Profile */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
                className="lg:w-1/2"
              >
                <h2 className="text-secondary font-bold tracking-[1px] uppercase text-[12px] px-4 py-1.5 bg-secondary/10 rounded-full inline-block mb-4">
                  Profil Perusahaan
                </h2>
                <h3 className="text-3xl md:text-[40px] font-serif leading-[1.2] text-primary mb-6">
                  Inovasi & Dedikasi Sejak Dekade Lalu
                </h3>
                <div className="space-y-4 text-ink/80 leading-[1.7] text-[15px]">
                  <p>
                    Berawal dari dedikasi dalam dunia olahraga, hi.court
                    didirikan dengan komitmen murni untuk menghadirkan fasilitas
                    olahraga (khususnya lapangan keras berbahan Flexypave) yang
                    mampu menyamai kualitas standar internasional namun dengan
                    biaya yang disesuaikan untuk kebutuhan iklim di Indonesia.
                  </p>
                  <p>
                    Kami bukan hanya kontraktor biasa; kami adalah atlet,
                    penggemar olahraga, dan teknisi spesialis. Pemahaman
                    mendalam kami terhadap pergerakan atlet di atas lapangan
                    memungkinkan kami meracik material permukaan Flexypave agar
                    memberikan daya cengkeram (grip) ideal dan penyerapan kejut
                    (shock-absorption) yang meminimalisir cedera lutut dan
                    engkel.
                  </p>
                  <p>
                    Hingga kini, kami telah dipercaya oleh berbagai instansi
                    pemerintahan, kampus ternama, pengembang perumahan elit,
                    hingga pemilik properti pribadi untuk merancang dan
                    membangun arena olahraga impian mereka.
                  </p>
                </div>
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
                  alt="Tim hi.court"
                  // Ditambahkan object-cover agar gambar selalu proporsional
                  className="rounded-[20px] shadow-soft aspect-[4/3] object-cover"
                  // Ditambahkan relative z-10
                  wrapperClassName="w-full h-full relative z-10"
                  loading="eager"
                  fetchpriority="high"
                />
                
                {/* Diubah menjadi z-0 dan pointer-events-none */}
                <div className="absolute -inset-4 border border-secondary/30 rounded-[24px] translate-x-4 translate-y-4 z-0 pointer-events-none"></div>

                {/* Floating Badge - DITAMBAHKAN z-20 */}
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-[20px] shadow-soft border border-primary/10 max-w-[200px] z-20">
                  <div className="text-4xl font-bold text-primary mb-2">
                    15+
                  </div>
                  <div className="text-[13px] font-bold uppercase tracking-[0.5px] text-ink/70">
                    Tahun
                    <br />
                    Pengalaman
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Visi & Misi */}
        <section className="py-20 bg-card-bg border-y border-primary/10">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
                className="p-10 rounded-[24px] bg-bg border border-primary/10 hover:border-primary/30 transition-colors shadow-soft"
              >
                <div className="w-14 h-14 bg-primary text-white rounded-[16px] flex items-center justify-center mb-6 shadow-sm">
                  <Target size={28} />
                </div>
                <h3 className="text-2xl font-serif text-primary font-bold mb-4">
                  Visi Kami
                </h3>
                <p className="text-ink/80 leading-[1.7] text-[15px]">
                  Menjadi kontraktor lapangan olahraga nomor satu di Indonesia
                  yang dikenal karena inovasi material, ketahanan hasil kerja,
                  dan presisi yang memenuhi kriteria kompetisi olahraga
                  internasional.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.2 }}
                className="p-10 rounded-[24px] bg-bg border border-primary/10 hover:border-primary/30 transition-colors shadow-soft"
              >
                <div className="w-14 h-14 bg-secondary text-white rounded-[16px] flex items-center justify-center mb-6 shadow-sm">
                  <Flag size={28} />
                </div>
                <h3 className="text-2xl font-serif text-primary font-bold mb-4">
                  Misi Kami
                </h3>
                <ul className="space-y-3 text-ink/80 leading-[1.6] text-[15px]">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2.5 flex-shrink-0"></div>
                    <span>
                      Menggunakan material ramah lingkungan dan berteknologi
                      tinggi.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2.5 flex-shrink-0"></div>
                    <span>
                      Ketepatan waktu pengerjaan tanpa mengorbankan kualitas.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2.5 flex-shrink-0"></div>
                    <span>
                      Memberikan edukasi perawatan lapangan yang tepat untuk
                      masa pakai yang panjang.
                    </span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-white/20">
              <div className="text-center px-4">
                <div className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">
                  350+
                </div>
                <div className="text-white/80 text-[13px] uppercase tracking-[1px] font-bold">
                  Proyek Selesai
                </div>
              </div>
              <div className="text-center px-4">
                <div className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">
                  15+
                </div>
                <div className="text-white/80 text-[13px] uppercase tracking-[1px] font-bold">
                  Tahun Pengalaman
                </div>
              </div>
              <div className="text-center px-4">
                <div className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">
                  40+
                </div>
                <div className="text-white/80 text-[13px] uppercase tracking-[1px] font-bold">
                  Mitra Instansi
                </div>
              </div>
              <div className="text-center px-4">
                <div className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">
                  100%
                </div>
                <div className="text-white/80 text-[13px] uppercase tracking-[1px] font-bold">
                  Garansi Kualitas
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}