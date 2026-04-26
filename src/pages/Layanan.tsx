import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import LazyImage from "../components/LazyImage";
import { Helmet } from "react-helmet-async";
import { Layers, CheckCircle, ArrowRight } from "lucide-react";
import {
  TennisBallIcon,
  BasketballIcon,
  ShuttlecockIcon,
  ShoeIcon,
  PickleballIcon,
  VolleyballIcon,
} from "../components/Icons";
import Breadcrumbs from "../components/Breadcrumbs";
import { IMAGES } from "../constants/images";

export default function Layanan() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <Helmet>
        <title>Layanan - hi.court</title>
        <meta
          name="description"
          content="Layanan jasa konstruksi dan renovasi lapangan olahraga hi.court. Tersedia pembuatan pondasi, pengecatan flexypave lapangan tenis, basket, dan badminton, hingga pemeliharaan berkala."
        />
        <meta
          name="keywords"
          content="layanan kontraktor lapangan olahraga, jasa konstruksi lapangan dari nol, pengecatan lapangan flexypave, jasa perawatan lapangan tenis, renovasi lapangan basket, hi.court"
        />
        <meta property="og:title" content="Layanan - hi.court" />
        <meta
          property="og:description"
          content="Layanan lengkap jasa konstruksi dan renovasi lapangan olahraga Flexypave profesional."
        />
        <meta property="og:image" content={IMAGES.metaImageOG} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content={IMAGES.metaImageOG} />
        <link rel="canonical" href="https://hicourt.com/layanan" />
      </Helmet>
      <div className="pt-24 pb-16">
        {/* Page Header */}
        <section className="bg-primary/5 py-16 md:py-24 px-6 border-b border-primary/10">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="flex justify-center w-full mb-6">
              <Breadcrumbs />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Layanan Kami
            </h1>
            <p className="text-lg text-ink/80 leading-[1.6]">
              Solusi total komprehensif mulai dari perencanaan, pemilihan
              material, pembangunan, hingga perawatan lapangan olahraga bertaraf
              internasional berbahan dasar Flexypave.
            </p>
          </div>
        </section>

        {/* Main Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  title: "Lapangan Tenis",
                  slug: "tenis",
                  desc: "Kami adalah spesialis pembuat lapangan tenis standar elit. Menawarkan opsi permukaan Flexypave yang ideal untuk penyerapan goncangan dan pantulan bola yang selalu responsif, baik untuk kebutuhan indoor maupun outdoor.",
                  img: IMAGES.layananTenis,
                  features: [
                    "Lapisan Flexypave Asli",
                    "Tahan Sinar UV",
                    "Bisa Pilih Warna",
                  ],
                  icon: <TennisBallIcon size={24} />,
                },
                {
                  title: "Lapangan Basket",
                  slug: "basket",
                  desc: "Konstruksi lapangan basket berbahan Flexypave lutut-aman yang dirancang khusus meminimalisir cedera lutut. Tahan terhadap kelembaban maupun sengatan matahari terus-menerus.",
                  img: IMAGES.layananBasket,
                  features: [
                    "Permukaan Empuk",
                    "Anti Slip / Licin",
                    "Line Kuat",
                  ],
                  icon: <BasketballIcon size={24} />,
                },
                {
                  title: "Lapangan Badminton",
                  slug: "badminton",
                  desc: "Instalasi sistem lantai badminton profesional menggunakan opsi Flexypave. Menjamin grip optimal untuk permainan bertempo cepat dan aman untuk olahraga harian.",
                  img: IMAGES.layananBadminton,
                  features: [
                    "Flexypave Sport Surface",
                    "Empuk untuk Lutut",
                    "Grip Maksimal",
                  ],
                  icon: <ShuttlecockIcon size={24} />,
                },
                {
                  title: "Jogging Track",
                  slug: "jogging-track",
                  desc: "Pembangunan lintasan Jogging Track menggunakan sistem pelapisan 100% Flexypave. Empuk, menyerap goncangan, dan sangat bersahabat untuk sendi kaki pelari.",
                  img: IMAGES.layananJogging,
                  features: [
                    "Material 100% Flexypave",
                    "Aman Untuk Sistem Sendi",
                    "Anti Genangan Air (Waterproof)",
                  ],
                  icon: <ShoeIcon size={24} />,
                },
                {
                  title: "Lapangan Pickleball",
                  slug: "pickleball",
                  desc: "Kami membangun lapangan Pickleball standar profesional dengan sistem matras 100% Flexypave yang memaksimalkan pijakan serta kontrol gerak sepatu saat pertandingan.",
                  img: IMAGES.layananPickleball,
                  features: [
                    "Garis Lapangan Standar",
                    "100% Flexypave Asli",
                    "Pantulan Bola Optimal",
                  ],
                  icon: <PickleballIcon size={24} />,
                },
                {
                  title: "Lapangan Volly",
                  slug: "volly",
                  desc: "Solusi pembuatan lapangan bola volly profesional dengan standar PBVSI. Kami menggunakan material sport surface terbaik untuk daya tahan lama dan keamanan sendi atlet.",
                  img: IMAGES.layananVolly,
                  features: [
                    "Standar Ukuran PBVSI",
                    "Material Anti-Slip",
                    "Pilihan Warna Custom",
                  ],
                  icon: <VolleyballIcon size={24} />,
                },
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeIn}
                  viewport={{ once: true }}
                >
                  <Link
                    to={`/layanan/${service.slug}`}
                    className="block bg-card-bg rounded-[20px] overflow-hidden border border-primary/10 shadow-soft group hover:border-primary/30 transition-colors h-full flex flex-col"
                  >
                    <div className="h-48 md:h-64 overflow-hidden relative">
                      <LazyImage
                        src={service.img}
                        alt={service.title}
                        className="group-hover:scale-105"
                        wrapperClassName="w-full h-full"
                      />
                      <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary shadow-sm">
                        {service.icon}
                      </div>
                    </div>
                    <div className="p-8 flex-grow flex flex-col">
                      <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                        {service.title}
                      </h3>
                      <p className="text-ink/80 text-[15px] leading-[1.6] mb-6">
                        {service.desc}
                      </p>

                      <div className="space-y-3 mb-6">
                        {service.features.map((feat) => (
                          <div key={feat} className="flex items-center gap-3">
                            <CheckCircle size={16} className="text-secondary" />
                            <span className="text-[14px] font-medium text-ink">
                              {feat}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-auto pt-4 border-t border-primary/10 flex items-center gap-2 text-primary text-[13px] font-bold uppercase tracking-[1px] group-hover:text-secondary border-t-primary/5">
                        Lihat Detail{" "}
                        <ArrowRight
                          size={16}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Renovations & Process Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Proses Kerja Kami
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Kami mengadopsi prosedur kerja transparan dan sistematis demi
                menghasilkan lapangan terbaik yang tahan hingga puluhan tahun.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Konsultasi & Survei",
                  desc: "Menganalisis lokasi, jenis tanah, dan menyesuaikan dengan visi serta budget Anda.",
                },
                {
                  step: "02",
                  title: "Perencanaan",
                  desc: "Desain layout rinci, pemilihan material, dan estimasi waktu penyelesaian yang akurat.",
                },
                {
                  step: "03",
                  title: "Konstruksi / Renovasi",
                  desc: "Eksekusi oleh tenaga ahli menggunakan peralatan berat dan bahan berkualitas tinggi.",
                },
                {
                  step: "04",
                  title: "Finishing & Handover",
                  desc: "Pengecatan, instalasi jaring/tiang, serta evaluasi akhir sebelum garansi minimal 3 bulan maksimal 6 bulan aktif.",
                },
              ].map((process, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 p-6 rounded-[16px] backdrop-blur-sm border border-white/20"
                >
                  <span className="text-4xl font-bold font-serif text-white/30 block mb-4">
                    {process.step}
                  </span>
                  <h4 className="text-xl font-bold mb-3">{process.title}</h4>
                  <p className="text-white/70 text-[14px] leading-[1.6]">
                    {process.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
