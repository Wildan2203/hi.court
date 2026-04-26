import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import { IMAGES } from "../constants/images";

export default function Kontak() {
  const [searchParams] = useSearchParams();
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const [formData, setFormData] = useState({
    nama: "",
    layanan: "Pembuatan Lapangan Tenis",
    pesan: "",
  });

  useEffect(() => {
    const layananParam = searchParams.get("layanan");
    if (layananParam) {
      setFormData((prev) => ({ ...prev, layanan: layananParam }));
    }
  }, [searchParams]);

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { nama, layanan, pesan } = formData;

    // Construct WhatsApp message
    let textMessage = `Halo hi.court, perkenalkan saya *${nama || "Calon Klien"}*.%0A%0A`;
    textMessage += `Saya tertarik untuk berkonsultasi mengenai *${layanan}*.%0A%0A`;
    if (pesan) {
      textMessage += `*Pesan Tambahan:*%0A${pesan}%0A%0A`;
    }
    textMessage += `Mohon info lebih lanjut. Terima kasih!`;

    const whatsappUrl = `https://wa.me/6281333751922?text=${textMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <Helmet>
        <title>Hubungi Kami - hi.court</title>
        <meta
          name="description"
          content="Hubungi hi.court untuk konsultasi gratis dan survey lokasi pembuatan atau renovasi lapangan olahraga flexypave. Dapatkan penawaran harga terbaik."
        />
        <meta
          name="keywords"
          content="hubungi kontraktor lapangan, nomor whatsapp hi.court, jasa survey lapangan olahraga, konsultasi spesialis lapangan tenis, estimasi harga proyek lapangan olahraga, kontak hi.court"
        />
        <meta property="og:title" content="Hubungi Kami - hi.court" />
        <meta
          property="og:description"
          content="Konsultasi gratis dan survey lokasi terkait pembangunan maupun renovasi lapangan olahraga bersama hi.court."
        />
        <meta property="og:image" content={IMAGES.metaImageOG} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content={IMAGES.metaImageOG} />
        <link rel="canonical" href="https://hicourt.com/kontak" />
      </Helmet>
      <div className="pt-24 pb-16 min-h-screen bg-bg">
        {/* Page Header */}
        <section className="bg-primary/5 py-16 md:py-20 px-6 border-b border-primary/10">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="flex justify-center w-full mb-6">
              <Breadcrumbs />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Hubungi Kami
            </h1>
            <p className="text-lg text-ink/80 leading-[1.6]">
              Punya rencana membangun lapangan impian? Konsultasikan kepada tim
              spesialis kami secara gratis, kapan saja.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-16 mb-20">
              {/* Contact Info */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="lg:w-1/3 space-y-8"
              >
                <h3 className="text-2xl font-serif text-primary font-bold mb-6">
                  Info Kontak
                </h3>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full shadow-soft flex items-center justify-center text-primary flex-shrink-0 border border-primary/10">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold text-ink mb-1">
                      Alamat Kantor
                    </h4>
                    <p className="text-[14px] text-ink/70 leading-[1.6]">
                      Jl. Gang Masjid, RT.04/RW.04, Desa Jabon
                      <br />
                      Jatimulyo, Kec. Kauman
                      <br />
                      Kabupaten Tulungagung, Jawa Timur 66261
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full shadow-soft flex items-center justify-center text-primary flex-shrink-0 border border-primary/10">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold text-ink mb-1">
                      WhatsApp Terhubung
                    </h4>
                    <p className="text-[14px] text-ink/70 leading-[1.6]">
                      <a
                        href="https://wa.me/6281333751922"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        +62 813-3375-1922
                      </a>
                      <br />
                      <span className="text-[12px] opacity-70">
                        Layanan Online 24 Jam
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full shadow-soft flex items-center justify-center text-primary flex-shrink-0 border border-primary/10">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold text-ink mb-1">
                      Email
                    </h4>
                    <p className="text-[14px] text-ink/70 leading-[1.6]">
                      <a
                        href="mailto:hi.court01@gmail.com"
                        className="hover:text-primary transition-colors"
                      >
                        hi.court01@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Form to WhatsApp */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:w-2/3"
              >
                <div className="bg-white p-8 md:p-12 rounded-[24px] shadow-soft border border-primary/10">
                  <h3 className="text-2xl font-serif text-primary font-bold mb-8">
                    Kirim Pesan via WhatsApp
                  </h3>
                  <form className="space-y-6" onSubmit={handleWhatsAppSubmit}>
                    <div className="space-y-2">
                      <label className="text-[13px] font-bold text-ink/70 uppercase tracking-[0.5px]">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.nama}
                        onChange={(e) =>
                          setFormData({ ...formData, nama: e.target.value })
                        }
                        className="w-full bg-bg border border-primary/10 rounded-[12px] px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-[15px]"
                        placeholder="Masukkan nama Anda"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[13px] font-bold text-ink/70 uppercase tracking-[0.5px]">
                        Layanan yang diminati
                      </label>
                      <select
                        value={formData.layanan}
                        onChange={(e) =>
                          setFormData({ ...formData, layanan: e.target.value })
                        }
                        className="w-full bg-bg border border-primary/10 rounded-[12px] px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-[15px] appearance-none"
                      >
                        <option value="Pembuatan Lapangan Tenis">
                          Pembuatan Lapangan Tenis
                        </option>
                        <option value="Pembuatan Lapangan Basket">
                          Pembuatan Lapangan Basket
                        </option>
                        <option value="Pembuatan Lapangan Badminton">
                          Pembuatan Lapangan Badminton
                        </option>
                        <option value="Renovasi / Pengecatan Ulang">
                          Renovasi / Pengecatan Ulang Lapangan
                        </option>
                        <option value="Layanan Lainnya">Lainnya</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[13px] font-bold text-ink/70 uppercase tracking-[0.5px]">
                        Pesan Tambahan (Opsional)
                      </label>
                      <textarea
                        rows={4}
                        value={formData.pesan}
                        onChange={(e) =>
                          setFormData({ ...formData, pesan: e.target.value })
                        }
                        className="w-full bg-bg border border-primary/10 rounded-[12px] px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-[15px] resize-none"
                        placeholder="Jelaskan kebutuhan lokasi, ukuran, atau pertanyaan Anda di sini..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#25D366] text-white font-bold uppercase tracking-[1px] text-[14px] rounded-[12px] py-4 hover:bg-[#20BE5C] transition-colors flex items-center justify-center gap-2 shadow-sm"
                    >
                      <Send size={18} /> Lanjutkan ke Chat WhatsApp
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>

            {/* Interactive Map */}
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
      </div>
    </>
  );
}
