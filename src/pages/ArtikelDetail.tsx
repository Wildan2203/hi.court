import React, { useState, useEffect } from "react";
import { useParams, Link, Navigate, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import {
  Calendar,
  User,
  CheckCircle,
  ArrowRight,
  Link as LinkIcon,
  Mail,
  Loader2,
} from "lucide-react";
import {
  FaWhatsapp,
  FaTelegramPlane,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import LazyImage from "../components/LazyImage";
import { IMAGES } from "../constants/images";

const staticArticles: Record<string, any> = {
  "kelebihan-lapangan-tenis-flexy-dibanding-standar": {
    title: "Kelebihan Lapangan Tenis Flexy Dibanding Standar - hi.court",
    displayTitle:
      "Kelebihan Lapangan Tenis Flexy Dibanding Standar: Mengapa Anda Harus Berpindah?",
    cat: "Edukasi",
    date: "April 25, 2026",
    img: IMAGES.artikel2,
    description:
      "Bongkar tuntas kelebihan lapisan Flexypave dibandingkan aspal keras konvensional. Lindungi atlet Anda dari resiko cedera jangka panjang.",
    relatedServiceSlug: "tenis",
    relatedServiceName: "Pembuatan Lapangan Tenis Profesional",
    content: `Permukaan lapangan tenis konvensional yang kerap kita jumpai seringkali hanya berupa beton atau aspal kasar yang dicat seadanya. Meskipun murah di awal, efek jangka panjangnya terhadap fisiologi atlet bisa sangat merugikan. Itulah sebabnya standar internasional kini bergeser ke arah sistem pelapisan material khusus yang kuat dan lentur, atau yang lebih populer dikenal dengan **Flexypave**.
    
    Sebagai kontraktor pembangun struktur dan pelapisan [lapangan tenis profesional](/layanan/tenis) yang telah bermitra dengan puluhan instansi, kami di hi.court sangat merekomendasikan opsi ini. Mengapa?
    
    ### 1. Absorpsi Kejutan yang Menyelamatkan Lutut (Shock Absorption)
    Bermain tenis menuntut gerak lateral yang konstan, sprint pendek, dan pengereman tiba-tiba. Di atas beton polos, seluruh tekanan kinetik akan diserap langsung oleh meniskus (tulang rawan) lutut dan engkel atlet. Permukaan Flexy dirancang dengan lapisan material elastis tebal yang berperan sebagai peredam kejut alami. Ini bukan sekadar mitos—banyak atlet pro yang bermain di hardcourt bersertifikat ITF mampu berlatih 3 jam lebih lama tanpa keluhan nyeri sendi.

    ### 2. Tahan Terhadap Pergeseran Suhu Tropis Ekstrem
    Indonesia memiliki cuaca yang sangat agresif. Siang memanas terik, malam mendadak hujan deras. Lapangan beton biasa sangat rentan mengalami retak rambut *(hairline cracks)* akibat siklus muai-susut yang instan. 
    Cat berbahan dasar Flexypave memiliki sifat memantulkan sinar UV, mengurangi serapan panas hingga 15 derajat ke lapisan dasar, menjaga struktur tetap solid dan warnanya tajam bertahun-tahun tanpa pudar.
    
    ### 3. Pantulan Bola 100% Konsisten (True Bounce)
    Pernah bermain di lapangan di mana bola memantul ke arah yang tidak tertebak karena *dead spots*? Pengerjaan berlapis pada sistem Flexypave menutupi porositas aspal dasar, memberikan keseragaman tekstur silika di semua kuadran lapangan. Hasilnya? Kecepatan laju bola (pace) dan pantulan yang konsisten di area servis, baseline, hingga net.

    **Kesimpulan:** Berinvestasilah pada keamanan. Jika Anda berniat membangun lapangan untuk akademi, institusi perumahan prestise, atau universitas Anda, menambahkan material Flexypave bukanlah pengeluaran—ini adalah nilai jual *(selling point)* utama fasilitas Anda.`,
  },
  "cek-di-sini-harga-lapangan-tenis-murah-terjangkau": {
    title: "Berapa Harga Pembuatan Lapangan Tenis di 2023? Cek Detailnya",
    displayTitle:
      "Berapa Biaya Rill Membangun Lapangan Tenis? Panduan Harga Transparan",
    cat: "Biaya",
    date: "April 25, 2026",
    img: IMAGES.artikel3,
    description:
      "Menyingkap estimasi dan variabel biaya pembuatan lapangan tenis. Dari penyiapan lahan kosong hingga lapisan Flexypave final.",
    relatedServiceSlug: "tenis",
    relatedServiceName: "Pembuatan Lapangan Tenis",
    content: `Sebuah pertanyaan yang paling umum masuk ke nomor WhatsApp kantor kami: *"Pak, berapa biaya pembuatan lapangan tenis satu line?"*
    
    Kami di hi.court sangat menghargai transparansi. Menjawab pertanyaan tersebut tidak bisa dengan satu angka pasti karena membangun infrastruktur olahraga sama dengan membangun arsitektur spesifik. Berikut adalah rincian komponen yang paling mendikte anggaran Anda:
    
    ### 1. Kondisi "Day Zero" Lahan (Bobot Biaya: 40% - 50%)
    Jika Anda memiliki lahan berupa tanah gembur, rawa, atau sawah, proses pra-konstruksi akan sangat intensif. Lahan harus dikeruk, dipadatkan dengan *compactor* berat, diuruk batu makadam (base coarse), lalu di-cor beton tebal atau di-hotmix aspal berkualitas tinggi. 
    Namun, jika Anda sudah memiliki lantai eksisting berupa cor beton matang atau aspal yang rata, **kami bisa memangkas anggaran Anda hingga separuhnya!**
    
    ### 2. Opsi Permukaan Lapangan (Bobot Biaya: 30%)
    hi.court secara eksklusif menggunakan material **Flexypave**. Penambahan lapisan karet liquid sebelum cat akhir. Ini yang dipakai di turnamen skala nasional maupun internasional. Investasi lapisan pelindung lutut atlet ini memberikan kenyamanan maksimal dan perlindungan jangka panjang terhadap sendi dibandingkan material lainnya.
    
    ### 3. Pagar Kawat dan Tiang Fasilitas (Bobot Biaya: 10% - 15%)
    Lapangan tenis membutuhkan pagar ram / harmonika minimal tinggi 3 hingga 4 meter agar bola tidak liar keluar. Volume pagar, spesifikasi besi pipa (medium galvanis/hitam), serta ketebalan kawat sangat mempengaruhi total anggaran. Tiang lampu sorot malam (floodlights) juga dihitung secara terpisah.
    
    ### Rangkuman Terbuka
    Sebagai gambaran kasar di Indonesia (belum termasuk perataan lahan ekstrim), pembuatan lapangan dengan mutu material yang baik rata-rata dimulai dari di atas Rp 150.000.000 hingga Rp 350.000.000+. 
    
    Kami menyarankan Anda untuk **berhati-hati dengan penawaran harga yang "terlalu di bawah standar"**. Kontraktor nakal sering mengakali ketebalan cor (menyebabkan retak 3 bulan kemudian) atau menggunakan cat oplosan yang langsung mengelupas tersapu hujan. 
    Selalu prioritaskan kualitas jangka panjang. Diskusikan budget spesifik Anda dengan konsultan teknis kami hari ini.`,
  },
  "alasan-harus-memilih-kontraktor-berpengalaman": {
    title: "Alasan Harus Memilih Kontraktor Berpengalaman | hi.court",
    displayTitle:
      "Jangan Sembarang Tukang: 3 Alasan Wajib Memilih Kontraktor Olahraga Spesialis",
    cat: "Tips",
    date: "April 25, 2026",
    img: IMAGES.artikel4,
    description:
      "Apa perbedaan tukang bangunan biasa dan spesialis lapangan olahraga? Hindari kesalahan konstruksi presisi lapangan.",
    relatedServiceSlug: "tenis",
    relatedServiceName: "Semua Layanan Pembuatan Lapangan",
    content: `Banyak instansi atau pengelola perumahan mencoba berhemat dengan menyerahkan proyek lapangan olahraga terbuka kepada mandor atau tukang bangunan biasa. Hasilnya? Air hujan sering menggenang (*puddling*), cat melotok dalam hitungan minggu, dan garis pembatas yang miring. 
    
    Membangun arena berstandar olahraga jauh berbeda dengan menyemen teras rumah. Berikut adalah tiga kompetensi *engineering* yang hanya dimiliki kontraktor khusus:
    
    ### 1. Kemiringan dan Leveling Drainase (The 1-Degree Rule)
    Lapangan outdoor yang bermutu tinggi wajib meratakan curah hujan ke tepi luar seketika setelah badai tropis berhenti. Praktisi berpengalaman tahu bagaimana menghitung aspal dengan elevasi mikro 0.8 hingga 1 derajat, yang cukup curam untuk membuang air, tapi tidak terasa miring saat atlet berlari. Ini memerlukan laser *levelling* presisi tinggi.

    ### 2. Komposisi Campuran Flexypave Khusus
    Lantai olahraga tidak dicat menggunakan cat tembok apalagi epoksi ruangan rumah sakit! Sistem pelapisan (coating) menggunakan material Flexypave khusus yang teruji ketahanannya. Ini untuk menghasilkan koefisien gesekan spesifik: Cukup kasar agar tidak slip saat lari basah kesisihan, tapi tidak menyebabkan sepatu cepat gundul. 
    
    ### 3. Pemahaman Aturan Garis BWF / FIBA / ITF
    Sering terjadi dimensi kotak 3-points lapangan basket atau kotak servis tenis salah ukuran hanya selisih beberapa sentimeter. Terlihat remeh, namun bagi pembinaan atlet, kesalahan spasial ini fatal merusak insting jarak. Ahli kami menggunakan teodolit optik dan cetakan mekanis untuk melukis garis lapangan dengan error margin 0%.`,
  },
  "mengenal-perbedaan-permukaan-hardcourt-vs-clay": {
    title: "Perbedaan Permukaan Tenis Flexypave vs Clay | hi.court",
    displayTitle:
      "Flexypave vs Clay Court: Permukaan Mana Yang Cocok Untuk Proyek Anda?",
    cat: "Edukasi",
    date: "April 25, 2026",
    img: IMAGES.artikel5,
    description:
      "Bandingkan perbedaan kecepatan bola dan tingkat perawatan antara tanah liat (clay) dan material Flexypave.",
    relatedServiceSlug: "tenis",
    relatedServiceName: "Pembuatan Lapangan Tenis",
    content: `Bagi penggemar Grand Slam, istilah *French Open (Clay Open)* dan *US/Australian Open (Hardcourt)* tentu tidak asing. Namun, bagi pengelola area, mana yang paling cocok dibangun di iklim seperti Indonesia?

    ### Karakteristik Clay Court (Tanah Liat)
    Lapangan ini terbuat dari batu bata, serpihan batu, atau shale yang dihancurkan secara ekstrem hingga mirip tanah.
    **Gaya Bermain:** Mengurangi kecepatan laju bola (slow pace) dan menghasilkan pantulan (bounce) yang sangat tinggi. Sangat cocok bagi pemain spesialis bertahan di *baseline*.
    **Dampak Pemeliharaan:** SANGAT TINGGI. Apalagi dengan iklim tropis hujan deras di Indonesia, lapangan bisa rusak atau menjadi sangat becek. Lapangan ini perlu pelurusan basah rutin, disisir, dan ditambah material top soil-nya nyaris setiap satu minggu kompetisi. 

    ### Karakteristik Flexypave (Rekomendasi Utama Kami)
    **Gaya Bermain:** Laju bola lebih cepat, pantulan seimbang, dapat diandalkan untuk pola permainan dinamis dan net-play. Lapisan material ini memberikan kenyamanan bermain lebih lama.
    **Dampak Pemeliharaan:** SANGAT RENDAH. Anda tinggal membersihkan genangan air atau menyikatnya dengan pembersih biasa. Tidak ada kotoran debu oranye yang mengotori sepatu dan kaus kaki.

    **Saran Profesional:** Untuk perumahan, akademi umum, maupun penggunaan instansi di Asia Tenggara, Flexypave adalah investasi paling masuk akal karena bebas masalah perawatan harian dan aman untuk lutut.`,
  },
  "waktu-terbaik-mengecat-ulang-lapangan-olahraga": {
    title: "Waktu Terbaik Mengecat Ulang Lapangan Olahraga | hi.court",
    displayTitle:
      "Kapan Lapangan Harus Dicat Ulang? Kenali 3 Tanda-Tanda Krusial Ini",
    cat: "Perawatan",
    date: "April 25, 2026",
    img: IMAGES.artikel6,
    description:
      "Jangan tunggu atlet Anda tergelincir atau aspal beton hancur total. Kenali kapan lapangan harus direnovasi (repainting).",
    relatedServiceSlug: "basket",
    relatedServiceName: "Renovasi Pengecatan Lapangan Basket/Tenis",
    content: `Siklus peremajaan visual infrastruktur olahraga sangat penting bukan hanya demi estetika properti Anda, tetapi demi keselamatan. Banyak instansi yang terluka gengsinya karena membiarkan warna pudar terkelupas apalagi jika lapangan tersebut hendak dipakai menyambut perhelatan lomba tingkat daerah.
    
    Jadi, kapan repainting atau pelapisan ulang tenis/basket harus dilakukan?

    ### 1. Warna Silika Telah Botak (Grip Menghilang)
    Cat pelapis standar ITF bukanlah cat warna polos memantul, melainkan mengandung butiran pasir silika. Gesekan sol sepatu karet akan menggerus lapisan pasir ini seiring waktu (umumnya 4-6 tahun pemakaian tinggi). Ciri utamanya: lantai olahraga mulai terasa licin jika tersiram keringat atau usai gerimis reda. Jika pemain sering tergelincir, itu adalah *Red Flag*!

    ### 2. Warnanya Teroksidasi Sinar Matahari Berlebih
    Warna hijau pekat, biru telur asin, atau terakota memudar drastis dan belang-belang di berbagai titik menunjukan resin Flexypave pelindung UV mulai kehabisan masa aktifnya. Pengecatan ulang secara re-coat akan mengembalikan keindahannya 100%.

    ### 3. Tumbuhnya Jamur atau Retakan Rambut
    Beton yang usianya sudah puluhan tahun terkadang rentan mengalami keretakan struktural mikro akibat getaran lempeng tanah. Air hujan meresap memicu spora jamur membelah cat. *Repainting* kelas atas oleh hi.court akan didahului dengan injeksi penambal celah struktural sebelum ditutup epoxy atau Flexypave pelapis akhir.`,
  },
 "panduan-lengkap-membangun-flexypave-dari-nol": {
  title: "Panduan Lengkap Pembuatan Lapangan Tenis Flexy Pave | hi.court",
  displayTitle:
    "Panduan Lengkap Pembuatan Lapangan Tenis Flexy Pave: Standar Profesional & Kesalahan yang Harus Dihindari",
  cat: "Topik Hangat",
  date: "April 25, 2026",
  img: IMAGES.artikel1,
  description:
    "Lapangan tenis bukan sekadar beton dilapisi cat. Pelajari sistem Flexy Pave dari dasar hingga finishing.",
  relatedServiceSlug: "tenis",
  relatedServiceName: "Pembuatan Lapangan Tenis Flexy Pave",
  content: `Banyak orang mengira pembuatan lapangan tenis hanya sebatas membuat permukaan beton lalu melapisinya dengan cat. Padahal, untuk menghasilkan lapangan tenis dengan performa optimal, dibutuhkan sistem konstruksi berlapis seperti Flexy Pave yang dirancang untuk kenyamanan, keamanan, dan daya tahan jangka panjang.

Dengan pengalaman dalam pembangunan berbagai lapangan olahraga, berikut adalah poin krusial dalam pembuatan lapangan tenis Flexy Pave yang sering diabaikan:

### 1. Persiapan Pondasi & Drainase yang Presisi
Lapangan tenis wajib memiliki sistem drainase yang baik untuk mencegah genangan air. Kemiringan permukaan (slope) biasanya dibuat sekitar 0.5% agar air dapat mengalir dengan sempurna tanpa mengganggu permainan.

Pondasi beton harus memiliki kekuatan struktural yang stabil serta permukaan yang benar-benar rata sebelum masuk ke tahap pelapisan.

### 2. Sistem Pelapisan Flexy Pave Berlapis
Flexy Pave bukan hanya satu lapisan, melainkan sistem coating berlapis yang terdiri dari base coat, cushion layer (lapisan elastis), hingga top coat.

Lapisan elastis ini berfungsi meredam benturan, mengurangi risiko cedera pemain, serta memberikan pantulan bola yang konsisten sesuai standar permainan tenis profesional.

### 3. Leveling & Crack Control (Kontrol Retak)
Retakan kecil pada beton bisa menjadi masalah besar jika tidak ditangani sejak awal. Oleh karena itu, proses leveling harus memiliki toleransi tinggi, dan setiap potensi retakan harus ditutup menggunakan material khusus sebelum aplikasi coating.

Permukaan yang tidak rata akan mempengaruhi arah pantulan bola dan kualitas permainan secara keseluruhan.

### 4. Finishing & Marking Sesuai Standar
Tahap akhir adalah pengecatan garis (marking) dengan standar ukuran resmi. Selain itu, pemilihan warna coating juga penting untuk visibilitas bola dan kenyamanan mata pemain.

Finishing yang baik tidak hanya meningkatkan estetika, tetapi juga memastikan lapangan siap digunakan untuk pertandingan maupun latihan intensif.

Jangan kompromikan kualitas hanya demi menekan biaya awal. Investasi pada sistem Flexy Pave yang tepat akan memberikan umur pakai lebih panjang, performa bermain yang optimal, dan biaya perawatan yang lebih rendah dalam jangka panjang.`,
},
};

import Breadcrumbs from "../components/Breadcrumbs";

export default function ArtikelDetail() {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const [allArticles, setAllArticles] =
    useState<Record<string, any>>(staticArticles);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => {
        const dynamicArticles: Record<string, any> = {};
        (data.artikel || []).forEach((a: any) => {
          const dynamicSlug = a.judul
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)+/g, "");
          dynamicArticles[dynamicSlug] = {
            title: a.judul,
            displayTitle: a.judul,
            cat: a.kategori,
            date: a.tanggal,
            img: a.gambar || IMAGES.artikel1,
            description: a.isi.substring(0, 160) + "...",
            relatedServiceSlug: "tenis",
            relatedServiceName: "Layanan Konstruksi Kami",
            content: a.isi,
          };
        });
        setAllArticles({ ...staticArticles, ...dynamicArticles });
      })
      .catch((err) => console.error("Gagal memuat data artikel", err))
      .finally(() => setIsLoading(false));
  }, [slug]);

  const decodedSlug = slug ? decodeURIComponent(slug) : "";
  const currentUrl =
    typeof window !== "undefined"
      ? window.location.href
      : `https://hicourt.com${location.pathname}`;

  if (isLoading) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center bg-bg">
        <Loader2 className="animate-spin text-primary" size={48} />
      </div>
    );
  }

  if (!decodedSlug || !allArticles[decodedSlug]) {
    return <Navigate to="/artikel" replace />;
  }

  const article = allArticles[decodedSlug];

  // Markdown parsing
  const processInline = (text: string) => {
    const parts = [];
    let lastIndex = 0;
    const tokenRegex = /(\*\*(.*?)\*\*|\[([^\]]+)\]\(([^)]+)\))/g;
    let match;
    let keyCounter = 0;

    while ((match = tokenRegex.exec(text)) !== null) {
      parts.push(text.slice(lastIndex, match.index));
      if (match[1].startsWith("**")) {
        parts.push(
          <strong key={keyCounter++} className="font-bold text-ink">
            {match[2]}
          </strong>,
        );
      } else if (match[1].startsWith("[")) {
        const linkText = match[3];
        const linkUrl = match[4];
        if (linkUrl.startsWith("/")) {
          parts.push(
            <Link
              key={keyCounter++}
              to={linkUrl}
              className="text-secondary font-bold hover:text-primary transition-colors hover:underline underline-offset-4"
            >
              {linkText}
            </Link>,
          );
        } else {
          parts.push(
            <a
              key={keyCounter++}
              href={linkUrl}
              target="_blank"
              rel="noreferrer"
              className="text-secondary font-bold hover:text-primary transition-colors hover:underline underline-offset-4"
            >
              {linkText}
            </a>,
          );
        }
      }
      lastIndex = match.index + match[0].length;
    }
    parts.push(text.slice(lastIndex));
    return parts;
  };

  const formattedContent = article.content
    .split("\n")
    .map((line: string, idx: number) => {
      if (line.trim().startsWith("###")) {
        return (
          <h3
            key={idx}
            className="text-2xl font-serif text-primary font-bold mt-12 mb-4"
          >
            {line.replace("### ", "")}
          </h3>
        );
      }
      if (line.trim() === "") return <br key={idx} />;
      return (
        <p key={idx} className="mb-4">
          {processInline(line)}
        </p>
      );
    });

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    alert("Tautan berhasil disalin!");
  };

  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(article.displayTitle);

  // Retrieve top 3 related articles based on category OR randomly if same cat not enough
  const relatedArticles = (Object.entries(allArticles) as [string, any][])
    .filter(([key]) => key !== decodedSlug)
    .sort((a, b) => (a[1].cat === article.cat ? -1 : 1)) // Prioritize same category
    .slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{article.title}</title>
        <meta name="description" content={article.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
        <meta property="og:image" content={article.img} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={article.title} />
        <meta property="twitter:description" content={article.description} />
        <meta property="twitter:image" content={article.img} />
        <link rel="preload" as="image" href={article.img} />
        <link rel="canonical" href={currentUrl} />
      </Helmet>

      <div className="pt-24 pb-16 bg-bg min-h-screen">
        <div className="container mx-auto px-6 max-w-3xl">
          <Breadcrumbs className="mb-8" />

          <div className="mb-8">
            <span className="text-[11px] font-bold uppercase tracking-[1px] text-secondary mb-4 block px-[10px] py-[4px] bg-secondary/10 w-max rounded-full">
              {article.cat}
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6 leading-[1.2]">
              {article.displayTitle}
            </h1>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-primary/10">
              <div className="flex items-center gap-6 text-ink/50 text-[14px] font-medium">
                <div className="flex items-center gap-2">
                  <Calendar size={16} /> {article.date}
                </div>
                <div className="flex items-center gap-2">
                  <User size={16} /> Tim Ahli hi.court
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[12px] font-bold text-ink/40 uppercase tracking-[1px] mr-2">
                  Bagikan
                </span>
                <a
                  href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all transform hover:-translate-y-1"
                  aria-label="Share on WhatsApp"
                >
                  <FaWhatsapp size={18} />
                </a>
                <a
                  href={`https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-[#0088cc]/10 text-[#0088cc] flex items-center justify-center hover:bg-[#0088cc] hover:text-white transition-all transform hover:-translate-y-1"
                  aria-label="Share on Telegram"
                >
                  <FaTelegramPlane size={18} />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all transform hover:-translate-y-1"
                  aria-label="Share on Facebook"
                >
                  <FaFacebookF size={18} />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1DA1F2]/10 text-[#1DA1F2] flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-all transform hover:-translate-y-1"
                  aria-label="Share on Twitter/X"
                >
                  <FaTwitter size={18} />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-[#0A66C2]/10 text-[#0A66C2] flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-all transform hover:-translate-y-1"
                  aria-label="Share on LinkedIn"
                >
                  <FaLinkedinIn size={18} />
                </a>
                <a
                  href={`mailto:?subject=${encodedTitle}&body=${encodedUrl}`}
                  className="w-10 h-10 rounded-full bg-ink/10 text-ink flex items-center justify-center hover:bg-ink hover:text-white transition-all transform hover:-translate-y-1"
                  aria-label="Share via Email"
                >
                  <Mail size={18} />
                </a>
                <button
                  onClick={handleCopyLink}
                  className="w-10 h-10 rounded-full bg-ink/5 text-ink/70 flex items-center justify-center hover:bg-ink hover:text-white transition-all transform hover:-translate-y-1"
                  aria-label="Copy Link"
                >
                  <LinkIcon size={18} />
                </button>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[24px] overflow-hidden bg-card-bg shadow-soft mb-12"
          >
            <LazyImage
              src={article.img}
              alt={article.title}
              className="aspect-video"
              wrapperClassName="w-full"
              loading="eager"
              fetchpriority="high"
            />
          </motion.div>

          <article className="prose prose-lg prose-p:text-ink/80 prose-p:leading-[1.8] max-w-none text-[16px] md:text-[18px]">
            {formattedContent}

            <div className="mt-16 mb-8 pt-8 border-t border-primary/10">
              <h3 className="text-2xl font-serif text-primary font-bold mb-6">
                Layanan Terkait
              </h3>
              <Link
                to={`/layanan/${article.relatedServiceSlug}`}
                className="block group"
              >
                <div className="bg-card-bg border border-primary/20 rounded-[20px] overflow-hidden flex flex-col md:flex-row items-stretch cursor-pointer hover:shadow-soft hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-full md:w-1/3 min-h-[160px] bg-primary/5 flex items-center justify-center border-r border-primary/10 relative overflow-hidden">
                    <LazyImage
                      src={article.img}
                      className="opacity-30 filter grayscale blur-[1px] absolute inset-0"
                      alt=""
                      wrapperClassName="w-full h-full"
                    />
                    <div className="relative z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3 p-8 flex flex-col justify-center bg-white">
                    <span className="text-[12px] font-bold text-secondary uppercase tracking-[1px] mb-2 flex items-center gap-2">
                      <CheckCircle size={14} /> Solusi Jasa Kami
                    </span>
                    <h4 className="text-xl md:text-2xl font-serif text-primary font-bold mb-3">
                      {article.relatedServiceName}
                    </h4>
                    <p className="text-ink/60 text-[14px]">
                      Konsultasikan pembangunan lapangan olahraga Anda dengan
                      standar mutu internasional.
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            {/* RELATED ARTICLES SECTION */}
            <div className="mt-12 mb-8 pt-12 border-t border-primary/10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-2 h-10 bg-secondary rounded-full"></div>
                <h3 className="text-2xl md:text-3xl font-serif text-primary font-bold">
                  Rekomendasi Bacaan
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map(([relatedSlug, r]) => (
                  <Link
                    to={`/artikel/${relatedSlug}`}
                    key={relatedSlug}
                    className="group flex flex-col h-full bg-white rounded-2xl border border-primary/5 shadow-soft hover:shadow-lg hover:-translate-y-1 transition-all overflow-hidden"
                  >
                    <div className="h-32 overflow-hidden">
                      <LazyImage
                        src={r.img}
                        alt={r.title}
                        className="group-hover:scale-110 transition-all duration-500"
                      />
                    </div>
                    <div className="p-5 flex-grow">
                      <span className="text-[10px] font-bold text-secondary uppercase tracking-wider mb-2 block">
                        {r.cat}
                      </span>
                      <h4 className="font-serif text-primary font-bold text-sm leading-tight line-clamp-2 group-hover:text-secondary transition-colors italic">
                        "{r.displayTitle}"
                      </h4>
                    </div>
                    <div className="p-5 pt-0 mt-auto flex items-center text-[12px] font-bold text-primary gap-1 group-hover:gap-2 transition-all">
                      Baca <ArrowRight size={14} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-8 p-8 bg-primary/5 border border-primary/10 rounded-[20px] text-center">
              <h4 className="font-serif font-bold text-xl text-primary mb-2">
                Punya Pertanyaan Spesifik?
              </h4>
              <p className="text-ink/70 text-sm mb-6">
                Jangan ragu hubungi teknisi kami untuk konsultasi gratis.
              </p>
              <Link
                to="/kontak"
                className="inline-block px-10 py-3.5 bg-primary text-white font-bold uppercase tracking-[1px] text-[12px] rounded-xl hover:bg-secondary transition-all"
              >
                Hubungi Kami
              </Link>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
