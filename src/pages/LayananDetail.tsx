import React from "react";
import { useParams, Link, Navigate, useLocation } from "react-router-dom";
import { motion } from "motion/react";
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
  tenis: {
    title: "Pembuatan Lapangan Tenis Profesional",
    heroImg: IMAGES.layananTenis,
    description:
      "Kami melayani pembuatan dari nol maupun pelapisan ulang lapangan tenis Flexypave di seluruh Indonesia. Keahlian kami terletak pada pemahaman karakteristik material untuk memastikan pantulan (true bounce) yang konsisten.",
    longDesc:
      "Lapangan tenis yang baik bukan hanya dilihat dari kemulusan catnya, tetapi dari akurasi level kemiringan untuk drainase, elastisitas material Flexypave, serta ketahanan terhadap sinar UV untuk versi outdoor. Tim hi.court menyajikan pelapisan Flexypave asli yang menjamin lapangan tidak licin saat gerimis, dan meredam beban ke lutut atlet. Lapangan yang kami bangun memenuhi spesifikasi standar ITF (International Tennis Federation).",
    benefits: [
      "Lapisan Flexypave Tahan Sinar UV",
      "Ketahanan Pakai dengan Garansi Minimal 3 Bulan Maksimal 6 Bulan",
      "Pantulan Bola 100% Konsisten",
      "Material Flexypave untuk Keamanan Lutut",
      "Tersedia Pilihan Warna Custom",
    ],
    specifications: [
      "Ketebalan Coating: 2.0mm - 3.0mm",
      "Material: 100% Flexypave",
      "Standarisasi: ITF Classification",
      "Waktu Pengerjaan: 14 - 21 Hari Kerja",
      "Garansi: Minimal 3 Bulan Maksimal 6 Bulan",
    ],
    processes: [
      {
        title: "Site Inspection & Leveling",
        desc: "Pemetaan kemiringan aspal/beton (1-degree slope) menggunakan instrumen teodolit presisi.",
      },
      {
        title: "Patching & Crack Repair",
        desc: "Penutupan retak rambut dan cekungan dengan mortar Flexypave khusus dari dasar lapangan.",
      },
      {
        title: "Instalasi Material Flexypave",
        desc: "Aplikasi lapisan primer dan material cair Flexypave untuk melenturkan pijakan kaki.",
      },
      {
        title: "Top-Coat & Line Painting",
        desc: "Pengecatan hingga 3 lapisan warna UV-resistant dan pembuatan garis pembatas dengan akurasi 100%.",
      },
    ],
    relatedArticleSlug: "kelebihan-lapangan-tenis-flexy-dibanding-standar",
    relatedArticleName: "Mengapa Harus Berpindah ke Lapangan Tenis Flexypave?",
  },
  basket: {
    title: "Kontraktor Lapangan Basket",
    heroImg: IMAGES.layananBasket,
    description:
      "Konstruksi lapangan basket berbahan Flexypave tangguh yang dirancang khusus meminimalisir cedera (knee-friendly).",
    longDesc:
      "Permainan basket menuntut manuver cepat, lompatan ekstrem, dan perhentian mendadak. Hal ini membutuhkan lapangan dengan grip yang sangat kuat. Tim hi.court mengimplementasikan sistem pelapisan Flexypave bergradasi anti selip yang cocok untuk segala cuaca, melindungi pemain dari hentakan keras di lantai beton. Pilihan terbaik untuk lapangan basket outdoor maupun semi-indoor.",
    benefits: [
      "Permukaan Flexypave Anti-Kelelahan & Slip",
      "Garis Lapangan Presisi (Standar FIBA)",
      "Perbaikan Struktur Beton Retak Sebelum Pengecatan",
      "Permukaan Flexypave Lebih Aman dari Beton Murni",
      "Pengerjaan Ring Besi & Papan Pantul Transparan",
    ],
    specifications: [
      "Material: 100% Flexypave",
      "Ketebalan: 3.0mm+",
      "Dimensi: Standar FIBA (28m x 15m)",
      "Waktu Pengerjaan: 14 - 25 Hari Kerja",
      "Garansi: Minimal 3 Bulan Maksimal 6 Bulan",
    ],
    processes: [
      {
        title: "Persiapan Sub-Base",
        desc: "Pemeriksaan tingkat porositas dan keretakan lantai kerja beton, penambalan pori kasar.",
      },
      {
        title: "Grinding & Primer Curing",
        desc: "Lantai di-grinding dan diolesi pelapis pengikat anti-air.",
      },
      {
        title: "Pemasangan Material Flexypave",
        desc: "Aplikasi berlapis bantalan karet cair Flexypave untuk meredam kejut.",
      },
      {
        title: "Finishing & Aksesoris",
        desc: "Pengecatan presisi garis kunci/tiga angka, disusul pemasangan ring custom dan papan pantul tempered glass.",
      },
    ],
    relatedArticleSlug: "waktu-terbaik-mengecat-ulang-lapangan-olahraga",
    relatedArticleName: "Kapan Waktu Terbaik Repainting Lapangan Basket Anda?",
  },
  badminton: {
    title: "Instalasi Lapangan Badminton",
    heroImg: IMAGES.layananBadminton,
    description:
      "Instalasi sistem lantai badminton profesional dengan lapisan khusus Flexypave. Menjamin grip optimal untuk permainan bertempo cepat.",
    longDesc:
      "Di olahraga badminton, split milidetik dan langkah mundur mendadak adalah kunci. Lantai Flexypave yang kami aplikasikan memberikan keseimbangan sempurna antara laju sepatu dan perlindungan bantalan sendi. Solusi yang jauh lebih tangguh dalam jangka panjang dibandingkan karpet biasa, cocok untuk GOR publik dan sekolah.",
    benefits: [
      "Sistem Flexypave yang Nyaman",
      "Anti-Slip Saat Banyak Keringat",
      "Aman Untuk Lutut (Shock Absorption Maksimal)",
      "Pemasangan Tiang dan Net",
      "Garis Pengecatan Tahan Gesekan Sepatu",
    ],
    specifications: [
      "Material: 100% Flexypave",
      "Ketebalan: 3.0mm+",
      "Sertifikasi Garis: Sesuai Panduan BWF",
      "Waktu Pengerjaan: 7 - 14 Hari Kerja",
      "Garansi: Minimal 3 Bulan Maksimal 6 Bulan",
    ],
    processes: [
      {
        title: "Pembersihan & Treatment Kelembaban",
        desc: "Menambal porositas beton dasar agar air tanah tidak merembes naik.",
      },
      {
        title: "Waterproofing Leveling",
        desc: "Aplikasi pelapis primer agar lantai base menempel dengan sempurna.",
      },
      {
        title: "Instalasi Material Flexypave",
        desc: "Penggelaran pelapis cairan karet Flexypave berlapis yang akan mengeras menjadi bantalan lantai yang empuk.",
      },
      {
        title: "Court Marking & Netting",
        desc: "Penanaman pondasi net dilanjut garis zona servis tebal yang presisi 100%.",
      },
    ],
    relatedArticleSlug: "panduan-lengkap-membangun-gor-indoor-dari-nol",
    relatedArticleName: "Panduan Eksekutif Membangun GOR Indoor dari Nol",
  },
  "jogging-track": {
    title: "Pembangunan Lintasan Jogging Track",
    heroImg: IMAGES.layananJogging,
    description:
      "Pengerjaan lapangan lintasan Jogging Track menggunakan material 100% Flexypave. Permukaan yang empuk namun kuat, menyerap goncangan langkah demi kesehatan sendi kaki pelari.",
    longDesc:
      "Fasilitas Jogging Track modern idealnya tidak menggunakan aspal keras atau beton biasa. Paparan berulang pada beton keras saat berlari bisa meresiko aus pada sendi lutut. Sistem 100% Flexypave hi.court adalah pilihan utama. Dengan lapisan bantal (rubber cushion) dari Flexypave, permukaan lari menjadi sangat ergonomis, lincah, anti-slip di segala cuaca, serta tahan lama melawan abrasi langkah sepatu.",
    benefits: [
      "Material 100% Flexypave Meredam Goncangan",
      "Menurunkan Risiko Cedera Lutut Pelari",
      "Tahan Genangan Air dan Lumut",
      "Warna Khusus Tahan Sinar Matahari UV",
    ],
    specifications: [
      "Material: 100% Flexypave",
      "Ketebalan Coating: 3.0mm - 4.5mm",
      "Standarisasi Permukaan: Seamless Rubber",
      "Waktu Pengerjaan: 10 - 20 Hari Kerja",
      "Garansi: Minimal 3 Bulan Maksimal 6 Bulan",
    ],
    processes: [
      {
        title: "Persiapan Sub-Base",
        desc: "Pemetaan level kemiringan area lintasan untuk jalur drainase yang tepat.",
      },
      {
        title: "Installasi Lapisan Bawah",
        desc: "Aplikasi primer agar material merekat kuat dengan landasan beton/aspal dasar.",
      },
      {
        title: "Instalasi Flexypave Cushion",
        desc: "Pengecoran lapis demi lapis bahan karet cair 100% Flexypave untuk meredam kejut.",
      },
      {
        title: "Top-Coat & Lining",
        desc: "Pengecatan UV-resistant dan pemberian garis pembatas lajur lari yang presisi.",
      },
    ],
    relatedArticleSlug: "kelebihan-lapangan-tenis-flexy-dibanding-standar",
    relatedArticleName: "Mengapa Flexypave Sangat Baik untuk Sendi Anda?",
  },
  pickleball: {
    title: "Pembuatan Lapangan Pickleball",
    heroImg: IMAGES.layananPickleball,
    description:
      "Pembangunan lapangan Pickleball berstandar memakai matras 100% Flexypave untuk pergerakan lincah dan pantulan bola tenis Pickleball yang presisi.",
    longDesc:
      "Olahraga Pickleball berkembang sangat pesat dan menuntut lapangan berukuran khusus yang seringkali dikonversi dari lapangan tenis atau dibangun dari nol. Memakai material murni 100% Flexypave dari hi.court, lapangan Pickleball yang kami tangani tidak hanya bebas licin saat pergerakan cepat, tetapi juga memperpanjang batas umur pemakaiannya. Pengaplikasian warna yang tajam dan presisi garis menjamin kenyamanan penglihatan di area lapangan.",
    benefits: [
      "Lapisan 100% Flexypave yang Anti Licin",
      "Pantulan Bola (True Bounce) yang Konsisten",
      "Dimensi/Garis Khusus Pickleball",
      "Tahan Panas Ruang Outdoor Maupun Lembab Indoor",
      "Pengecatan Gradasi Warna Tersedia",
    ],
    specifications: [
      "Material: 100% Flexypave",
      "Dimensi: 13.4m x 6.1m (Standar Bebas)",
      "Ketebalan Garis Batas: 2 Inch (5cm)",
      "Waktu Pengerjaan: 7 - 14 Hari Kerja",
      "Garansi: Minimal 3 Bulan Maksimal 6 Bulan",
    ],
    processes: [
      {
        title: "Site Inspection & Leveling",
        desc: "Mengecek kepadatan landasan serta menambal jika ada area beton berpori/retak.",
      },
      {
        title: "Aplikasi Primer Khusus",
        desc: "Pelapisan dasar (primer) guna memaksimalkan daya cengkeram material karet ke beton.",
      },
      {
        title: "Pelapisan 100% Flexypave",
        desc: "Aplikasi cairan 100% Flexypave secara berlapis hingga mencapai fleksibilitas (cushion) standar.",
      },
      {
        title: "Pengecatan Garis",
        desc: "Pengecatan garis ganda dengan lakban khusus maupun garis tunggal sesuai standardisasi Pickleball.",
      },
    ],
    relatedArticleSlug: "waktu-terbaik-mengecat-ulang-lapangan-olahraga",
    relatedArticleName: "Kapan Waktu Terbaik Merawat Lapangan Anda?",
  },
  volly: {
    title: "Pembuatan Lapangan Volly",
    heroImg: IMAGES.layananDefault,
    description:
      "Kami spesialis pengerjaan lapangan bola volly profesional dengan standar PBVSI menggunakan material Flexypave berkualitas tinggi.",
    longDesc:
      "Olahraga bola volly membutuhkan permukaan yang responsif untuk pergerakan kaki yang cepat dan bantalan yang cukup untuk meredam kejut saat mendarat setelah melakukan smash atau block. hi.court menghadirkan solusi lapangan volly berbahan Flexypave yang tidak hanya awet terhadap cuaca ekstrem Indonesia, namun juga memberikan grip maksimal sehingga pemain terhindar dari risiko tergelincir.",
    benefits: [
      "Standar Ukuran & Garis PBVSI",
      "Material Flexypave Anti-Slip & Awet",
      "Permukaan Ergonomis & Empuk",
      "Tahan Terhadap Jamur & Genangan Air",
      "Pilihan Warna Cerah yang Tidak Cepat Pudar",
    ],
    specifications: [
      "Material: 100% Flexypave",
      "Dimensi: Standar PBVSI (18m x 9m)",
      "Ketebalan Coating: 3.0mm+",
      "Waktu Pengerjaan: 10 - 18 Hari Kerja",
      "Garansi: Minimal 3 Bulan Maksimal 6 Bulan",
    ],
    processes: [
      {
        title: "Evaluasi Landasan & Leveling",
        desc: "Pengecekan kerataan beton dan perbaikan kemiringan untuk pembuangan air yang optimal.",
      },
      {
        title: "Seal Coating & Priming",
        desc: "Penutupan pori-pori lantai kerja agar material utama merekat dengan senyawa beton.",
      },
      {
        title: "Aplikasi Layer Flexypave",
        desc: "Pelapisan material sport surface secara bertahap untuk mendapatkan ketebalan yang diinginkan.",
      },
      {
        title: "Marking & Finishing",
        desc: "Pemberian garis lapangan serta pengecekan akhir kualitas permukaan.",
      },
    ],
    relatedArticleSlug: "waktu-terbaik-mengecat-ulang-lapangan-olahraga",
    relatedArticleName: "Tips Perawatan Lapangan Olahraga Outdoor",
  },
};

export default function LayananDetail() {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const currentUrl =
    typeof window !== "undefined"
      ? window.location.href
      : `https://hicourt.com${location.pathname}`;

  // Decode the slug to handle any encoded characters safely (e.g. from external links)
  const decodedSlug = slug ? decodeURIComponent(slug) : "";

  if (!decodedSlug || !serviceData[decodedSlug]) {
    // If invalid slug, redirect to services list
    return <Navigate to="/layanan" replace />;
  }

  const service = serviceData[decodedSlug];

  return (
    <>
      <Helmet>
        <title>{service.title} - hi.court</title>
        <meta name="description" content={service.description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={`${service.title} - hi.court`} />
        <meta property="og:description" content={service.description} />
        <meta property="og:image" content={service.heroImg} />
        <link rel="preload" as="image" href={service.heroImg} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={currentUrl} />
        <meta
          property="twitter:title"
          content={`${service.title} - hi.court`}
        />
        <meta property="twitter:description" content={service.description} />
        <meta property="twitter:image" content={service.heroImg} />
      </Helmet>

      <div className="pt-20 border-t border-primary/10">
        {/* Hero Image */}
        <div className="w-full h-[40vh] md:h-[60vh] relative">
          <LazyImage
            src={service.heroImg}
            alt={service.title}
            className="w-full h-full object-cover"
            wrapperClassName="w-full h-full"
            loading="eager"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-ink/50 mix-blend-multiply"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6 max-w-7xl pt-16">
              <Breadcrumbs
                textColor="text-white/60"
                hoverColor="hover:text-white"
                activeColor="text-white"
                className="mb-4"
              />
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white max-w-3xl leading-[1.1] mt-2">
                {service.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <section className="py-20 bg-bg">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-16">
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
                    ),
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
              <div className="lg:w-1/3">
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
                      to={`/portofolio?kategori=${encodeURIComponent(service.title.includes("Tenis") ? "Tenis" : service.title.includes("Basket") ? "Basket" : service.title.includes("Badminton") ? "Badminton" : service.title.includes("Jogging") ? "Jogging Track" : service.title.includes("Pickleball") ? "Pickleball" : service.title.includes("Volly") ? "Volly" : "Semua")}`}
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
                      href={`https://wa.me/6281335147090?text=${encodeURIComponent(`Halo hi.court, saya tertarik untuk berkonsultasi mengenai ${service.title}. Mohon info lebih lanjut.`)}`}
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
