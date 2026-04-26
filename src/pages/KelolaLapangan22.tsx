import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  LogIn,
  LogOut,
  FileText,
  Briefcase,
  Plus,
  Image as ImageIcon,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";

export default function AdminCMS() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [activeTab, setActiveTab] = useState("portofolio");
  const [statusMsg, setStatusMsg] = useState({ type: "", text: "" });

  const [portfolioData, setPortfolioData] = useState({
    kategori: "Tenis",
    gambar: "",
  });
  const [articleData, setArticleData] = useState({
    judul: "",
    penulis: "Admin",
    kategori: "Tips",
    gambar: "",
    isi: "",
  });
  const [allData, setAllData] = useState<{ portofolio: any[]; artikel: any[] }>(
    { portofolio: [], artikel: [] },
  );

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      fetchData();
    }
  }, [isLoggedIn]);

  const fetchData = async () => {
    try {
      const res = await fetch("/api/data");
      const data = await res.json();
      setAllData(data);
    } catch (err) {
      console.error("Failed to fetch data", err);
    }
  };

  const checkAuth = async () => {
    try {
      const res = await fetch("/api/admin/status", { credentials: "include" });
      const data = await res.json();
      setIsLoggedIn(data.loggedIn);
    } catch (err) {
      console.error("Failed to check auth", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMsg({ type: "", text: "" });
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(loginData),
      });
      const data = await res.json();
      if (data.success) {
        setIsLoggedIn(true);
        setStatusMsg({ type: "success", text: "Login berhasil!" });
      } else {
        setStatusMsg({ type: "error", text: data.error || "Login gagal" });
      }
    } catch (err) {
      setStatusMsg({ type: "error", text: "Terjadi kesalahan jaringan" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { credentials: "include" });
    setIsLoggedIn(false);
  };

  const handleSimpan = async (type: "portofolio" | "artikel") => {
    setIsLoading(true);
    setStatusMsg({ type: "", text: "" });
    const endpoint =
      type === "portofolio"
        ? "/api/admin/simpan-portofolio"
        : "/api/admin/simpan-artikel";
    const body = type === "portofolio" ? portfolioData : articleData;

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        setStatusMsg({
          type: "error",
          text: errorData.error || `Server error: ${res.status}`,
        });
        return;
      }

      const data = await res.json();
      if (data.success) {
        setStatusMsg({
          type: "success",
          text: `${type.charAt(0).toUpperCase() + type.slice(1)} berhasil disimpan!`,
        });
        if (type === "portofolio")
          setPortfolioData({ kategori: "Tenis", gambar: "" });
        else
          setArticleData({
            judul: "",
            penulis: "Admin",
            kategori: "Tips",
            gambar: "",
            isi: "",
          });
        fetchData(); // Refresh list
      } else {
        setStatusMsg({
          type: "error",
          text: data.error || "Gagal menyimpan data",
        });
      }
    } catch (err) {
      setStatusMsg({ type: "error", text: "Terjadi kesalahan jaringan" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (type: "portofolio" | "artikel", id: number) => {
    if (!confirm("Yakin ingin menghapus item ini?")) return;
    setIsLoading(true);
    setStatusMsg({ type: "", text: "" });
    const endpoint =
      type === "portofolio"
        ? `/api/admin/hapus-portofolio/${id}`
        : `/api/admin/hapus-artikel/${id}`;

    try {
      const res = await fetch(endpoint, {
        method: "DELETE",
        credentials: "include",
      });
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        setStatusMsg({
          type: "error",
          text: errorData.error || `Server error: ${res.status}`,
        });
        return;
      }
      const data = await res.json();
      if (data.success) {
        setStatusMsg({ type: "success", text: "Item berhasil dihapus!" });
        fetchData(); // Refresh list
      } else {
        setStatusMsg({
          type: "error",
          text: data.error || "Gagal menghapus item",
        });
      }
    } catch (err) {
      setStatusMsg({ type: "error", text: "Terjadi kesalahan jaringan" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "portofolio" | "artikel",
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      if (type === "portofolio") {
        setPortfolioData({ ...portfolioData, gambar: base64String });
      } else {
        setArticleData({ ...articleData, gambar: base64String });
      }
    };
    reader.readAsDataURL(file);
  };

  if (isLoading && !isLoggedIn) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-bg flex items-center justify-center">
        <Loader2 className="animate-spin text-primary" size={48} />
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-bg flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md bg-card-bg p-10 rounded-[32px] shadow-soft border border-primary/5"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
              <LogIn size={32} />
            </div>
            <h1 className="text-2xl font-serif font-bold text-primary">
              Login Admin CMS
            </h1>
            <p className="text-ink/60 text-sm mt-2">hi.court</p>
          </div>

          {statusMsg.text && (
            <div
              className={`mb-6 p-4 rounded-xl flex items-center gap-3 text-sm font-medium ${statusMsg.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}
            >
              {statusMsg.type === "success" ? (
                <CheckCircle size={18} />
              ) : (
                <AlertCircle size={18} />
              )}
              {statusMsg.text}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[13px] font-bold uppercase tracking-[1px] text-ink/40 ml-1">
                Username
              </label>
              <input
                type="text"
                required
                className="w-full px-5 py-4 rounded-2xl bg-primary/5 border border-transparent focus:border-primary focus:bg-white outline-none transition-all font-medium"
                value={loginData.username}
                onChange={(e) =>
                  setLoginData({ ...loginData, username: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <label className="text-[13px] font-bold uppercase tracking-[1px] text-ink/40 ml-1">
                Password
              </label>
              <input
                type="password"
                required
                className="w-full px-5 py-4 rounded-2xl bg-primary/5 border border-transparent focus:border-primary focus:bg-white outline-none transition-all font-medium"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-primary text-white rounded-2xl font-bold uppercase tracking-[1.5px] text-[13px] hover:bg-secondary transition-all shadow-md flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <Loader2 className="animate-spin" size={18} />
              ) : (
                "Masuk Ke Dashboard"
              )}
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-bg">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <span className="text-secondary font-bold uppercase tracking-[2px] text-[12px] mb-2 block">
              Admin Panel
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary">
              Kelola Konten
            </h1>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-6 py-3 bg-red-50 text-red-600 rounded-xl font-bold text-[13px] uppercase tracking-[1px] hover:bg-red-600 hover:text-white transition-all shadow-sm"
          >
            <LogOut size={16} /> Keluar
          </button>
        </div>

        <div className="mb-8 flex gap-4 border-b border-primary/10 pb-1">
          <button
            onClick={() => setActiveTab("portofolio")}
            className={`pb-4 px-6 font-bold uppercase tracking-[1px] text-[13px] transition-all relative ${activeTab === "portofolio" ? "text-primary" : "text-ink/40 hover:text-ink/60"}`}
          >
            <Briefcase size={16} className="inline mr-2 -mt-1" /> Portofolio
            {activeTab === "portofolio" && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full"
              />
            )}
          </button>
          <button
            onClick={() => setActiveTab("artikel")}
            className={`pb-4 px-6 font-bold uppercase tracking-[1px] text-[13px] transition-all relative ${activeTab === "artikel" ? "text-primary" : "text-ink/40 hover:text-ink/60"}`}
          >
            <FileText size={16} className="inline mr-2 -mt-1" /> Artikel
            {activeTab === "artikel" && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full"
              />
            )}
          </button>
        </div>

        {statusMsg.text && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-8 p-5 rounded-2xl flex items-center gap-4 ${statusMsg.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
          >
            {statusMsg.type === "success" ? (
              <CheckCircle size={24} />
            ) : (
              <AlertCircle size={24} />
            )}
            <p className="font-bold">{statusMsg.text}</p>
          </motion.div>
        )}

        <div className="bg-card-bg p-8 md:p-12 rounded-[32px] shadow-soft border border-primary/5">
          {activeTab === "portofolio" ? (
            <div className="space-y-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <Briefcase size={20} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary">
                  Tambah Portofolio
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[12px] font-bold uppercase text-ink/40">
                      Kategori
                    </label>
                    <select
                      className="w-full px-5 py-3.5 rounded-xl bg-primary/5 focus:bg-white border border-transparent focus:border-primary outline-none transition-all appearance-none cursor-pointer"
                      value={portfolioData.kategori}
                      onChange={(e) =>
                        setPortfolioData({
                          ...portfolioData,
                          kategori: e.target.value,
                        })
                      }
                    >
                      <option value="Tenis">Tenis</option>
                      <option value="Basket">Basket</option>
                      <option value="Badminton">Badminton</option>
                      <option value="Jogging Track">Jogging Track</option>
                      <option value="Pickleball">Pickleball</option>
                      <option value="Volly">Volly</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[12px] font-bold uppercase text-ink/40">
                      Unggah Gambar (Pribadi) / URL
                    </label>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <input
                          type="file"
                          accept="image/*"
                          className="text-xs text-ink/40 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 cursor-pointer"
                          onChange={(e) => handleFileChange(e, "portofolio")}
                        />
                      </div>
                      <div className="relative">
                        <ImageIcon
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/30"
                          size={18}
                        />
                        <input
                          type="text"
                          className="w-full pl-12 pr-5 py-3.5 rounded-xl bg-primary/5 focus:bg-white border border-transparent focus:border-primary outline-none transition-all font-mono text-sm"
                          placeholder="https://..."
                          value={
                            portfolioData.gambar.startsWith("data:image")
                              ? "Gambar terunggah"
                              : portfolioData.gambar
                          }
                          onChange={(e) =>
                            setPortfolioData({
                              ...portfolioData,
                              gambar: e.target.value,
                            })
                          }
                        />
                      </div>
                      {portfolioData.gambar && (
                        <div className="mt-2 relative w-32 h-20 rounded-lg overflow-hidden border border-primary/10 bg-white">
                          <img
                            src={portfolioData.gambar}
                            alt="Preview"
                            className="w-full h-full object-cover"
                          />
                          <button
                            onClick={() =>
                              setPortfolioData({ ...portfolioData, gambar: "" })
                            }
                            className="absolute top-1 right-1 bg-red-500 text-white rounded-full flex items-center justify-center w-5 h-5 shadow-md hover:bg-red-600 transition-colors"
                            title="Hapus Gambar"
                          >
                            <Plus size={12} className="rotate-45" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleSimpan("portofolio")}
                className="w-full md:w-max px-12 py-4 bg-primary text-white rounded-2xl font-bold uppercase tracking-[2px] text-[13px] hover:bg-secondary transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Plus size={18} /> Simpan Portofolio
              </button>

              <div className="pt-10 border-t border-primary/10">
                <h4 className="text-lg font-serif font-bold text-primary mb-6">
                  Daftar Portofolio
                </h4>
                <div className="space-y-4">
                  {allData.portofolio.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-4 bg-primary/5 rounded-xl border border-primary/5"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-white overflow-hidden shadow-sm">
                          <img
                            src={
                              item.gambar ||
                              "https://picsum.photos/seed/court/100/100"
                            }
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm text-ink/40 font-bold uppercase tracking-wider">
                            {item.kategori} • {item.tanggal}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleDelete("portofolio", item.id)}
                        className="px-4 py-2 bg-red-50 text-red-600 rounded-lg text-xs font-bold hover:bg-red-600 hover:text-white transition-all"
                      >
                        Hapus
                      </button>
                    </div>
                  ))}
                  {allData.portofolio.length === 0 && (
                    <p className="text-sm text-ink/40 italic">
                      Belum ada data portofolio.
                    </p>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <FileText size={20} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary">
                  Tulis Artikel Baru
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[12px] font-bold uppercase text-ink/40">
                      Judul Artikel
                    </label>
                    <input
                      type="text"
                      className="w-full px-5 py-3.5 rounded-xl bg-primary/5 focus:bg-white border border-transparent focus:border-primary outline-none transition-all"
                      placeholder="Contoh: Panduan Mengatur Drainase Lapangan"
                      value={articleData.judul}
                      onChange={(e) =>
                        setArticleData({
                          ...articleData,
                          judul: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[12px] font-bold uppercase text-ink/40">
                        Kategori
                      </label>
                      <select
                        className="w-full px-5 py-3.5 rounded-xl bg-primary/5 focus:bg-white border border-transparent focus:border-primary outline-none transition-all appearance-none cursor-pointer"
                        value={articleData.kategori}
                        onChange={(e) =>
                          setArticleData({
                            ...articleData,
                            kategori: e.target.value,
                          })
                        }
                      >
                        <option value="Tips">Tips</option>
                        <option value="Edukasi">Edukasi</option>
                        <option value="Biaya">Biaya</option>
                        <option value="Perawatan">Perawatan</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] font-bold uppercase text-ink/40">
                        Penulis
                      </label>
                      <input
                        type="text"
                        className="w-full px-5 py-3.5 rounded-xl bg-primary/5 focus:bg-white border border-transparent focus:border-primary outline-none transition-all"
                        value={articleData.penulis}
                        onChange={(e) =>
                          setArticleData({
                            ...articleData,
                            penulis: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[12px] font-bold uppercase text-ink/40">
                      Unggah Gambar Utama / URL
                    </label>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <input
                          type="file"
                          accept="image/*"
                          className="text-xs text-ink/40 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 cursor-pointer"
                          onChange={(e) => handleFileChange(e, "artikel")}
                        />
                      </div>
                      <div className="relative">
                        <ImageIcon
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/30"
                          size={18}
                        />
                        <input
                          type="text"
                          className="w-full pl-12 pr-5 py-3.5 rounded-xl bg-primary/5 focus:bg-white border border-transparent focus:border-primary outline-none transition-all font-mono text-sm"
                          placeholder="https://..."
                          value={
                            articleData.gambar.startsWith("data:image")
                              ? "Gambar terunggah"
                              : articleData.gambar
                          }
                          onChange={(e) =>
                            setArticleData({
                              ...articleData,
                              gambar: e.target.value,
                            })
                          }
                        />
                      </div>
                      {articleData.gambar && (
                        <div className="mt-2 relative w-32 h-20 rounded-lg overflow-hidden border border-primary/10 bg-white">
                          <img
                            src={articleData.gambar}
                            alt="Preview"
                            className="w-full h-full object-cover"
                          />
                          <button
                            onClick={() =>
                              setArticleData({ ...articleData, gambar: "" })
                            }
                            className="absolute top-1 right-1 bg-red-500 text-white rounded-full flex items-center justify-center w-5 h-5 shadow-md hover:bg-red-600 transition-colors"
                            title="Hapus Gambar"
                          >
                            <Plus size={12} className="rotate-45" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="space-y-6 flex flex-col">
                  <div className="space-y-2 flex-grow">
                    <label className="text-[12px] font-bold uppercase text-ink/40">
                      Konten Artikel
                    </label>
                    <textarea
                      className="w-full px-5 py-4 rounded-xl bg-primary/5 focus:bg-white border border-transparent focus:border-primary outline-none transition-all h-full min-h-[150px] resize-none"
                      placeholder="Tulis isi konten artikel di sini..."
                      value={articleData.isi}
                      onChange={(e) =>
                        setArticleData({ ...articleData, isi: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleSimpan("artikel")}
                className="w-full md:w-max px-12 py-4 bg-primary text-white rounded-2xl font-bold uppercase tracking-[2px] text-[13px] hover:bg-secondary transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Plus size={18} /> Simpan Artikel
              </button>

              <div className="pt-10 border-t border-primary/10">
                <h4 className="text-lg font-serif font-bold text-primary mb-6">
                  Daftar Artikel
                </h4>
                <div className="space-y-4">
                  {allData.artikel.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-4 bg-primary/5 rounded-xl border border-primary/5"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-white overflow-hidden shadow-sm">
                          <img
                            src={
                              item.gambar ||
                              "https://picsum.photos/seed/article/100/100"
                            }
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-bold text-ink text-sm">
                            {item.judul}
                          </p>
                          <p className="text-xs text-ink/40 font-bold uppercase tracking-wider">
                            {item.kategori} • {item.tanggal} • {item.penulis}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleDelete("artikel", item.id)}
                        className="px-4 py-2 bg-red-50 text-red-600 rounded-lg text-xs font-bold hover:bg-red-600 hover:text-white transition-all"
                      >
                        Hapus
                      </button>
                    </div>
                  ))}
                  {allData.artikel.length === 0 && (
                    <p className="text-sm text-ink/40 italic">
                      Belum ada data artikel.
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
