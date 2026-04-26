# Panduan Mengatur dan Optimasi Gambar pada Website hi.court

Gambar yang tidak optimal dapat membuat website menjadi lambat saat dikunjungi. Ikuti panduan ini untuk mengelola, menempatkan, dan mengoptimasi setiap foto di website Anda.

## 1. Dimana Menaruh Gambar?
Semua foto atau gambar (logo, banner, foto artikel, dll) disarankan untuk dimasukkan ke dalam subfolder public.

Contoh struktur direktori foto Anda (Anda bisa membuat folder ini di sidebar sebelah kiri):
```
public/
  ├── images/
  │    ├── logo.png
  │    ├── hero-klien-1.webp
  │    ├── lapangan-tenis.webp
  │    └── lapangan-basket.webp
```

## 2. Bagaimana Menerapkan Gambar Ke Website?

Jika gambar Anda file nya berada dalam folder `public/images/logo.png`, maka gambar tersebut dapat diakses melalui URL `/images/logo.png`.

Buka file **`src/constants/images.ts`**. File ini adalah **Pusat Kontrol Foto** di website Anda. 
Anda tinggal mengganti URL bawaan dengan URL gambar di folder `public` Anda.

Contoh di dalam file `src/constants/images.ts`:
```typescript
export const IMAGES = {
  // SEBELUM:
  // homeHero: 'https://images.unsplash.com/photo-1542144582-1ba...1',

  // SESUDAH (diarahkan ke gambar Anda):
  homeHero: '/images/lapangan-tenis.webp',

  // Untuk konfigurasi logo
  logo: '/images/logo.png', // Kosong berarti teks biasa
};
```

Setiap perubahan di file `src/constants/images.ts` akan otomatis dirasakan di seluruh halaman website mulai dari Beranda, Portofolio, Layanan, hingga meta tags SEO!

## 3. Cara Mengoptimasi Foto (Sangat Penting untuk SEO & Kecepatan)

*   **Format WebP adalah Raja**: Jangan gunakan format `.png` atau `.jpg` biasa untuk foto ukuran besar seperti hero atau background. Ubah ('convert') formatnya menjadi `.webp`. Ukuran WebP 30-50% lebih kecil dibanding JPG tanpa mengurangi kualitas kasat mata. (*Gunakan PNG hanya untuk Logo/Icon yang punya backrgound transparan*)
*   **Kompres File**: Sebelum Anda memasukkan foto ke folder `public/images/`, kecilkan ukuran (compress). **Tips**: Gunakan [TinyPNG (tinypng.com)](https://tinypng.com/) atau [Squoosh (squoosh.app)](https://squoosh.app/). Usahakan ukuran gambar tidak melebihi **200 KB**. Untuk banner full layar, usahakan maksimal 300-400 KB.
*   **Resize Sesuai Kebutuhan**: Jangan unggah foto dengan resolusi 4000x3000 pixels jika Anda hanya butuh gambar kecil (misal untuk foto di card artikel). Crop atau Resize ke ukuran wajar (Misal: maksimal lebar 1600px untuk hero image banner, dan 800px lebar untuk gambar dalam artikel).
*   **Gunakan Lazy Loading**: Kami sudah menggunakan komponen `LazyImage` di seluruh website agar foto di bagian bawah website hanya akan dimuat ketika pengguna scroll (menggeser) layarnya. Ini sangat disarankan oleh Google.

Selamat mengedit gambar Anda dengan mudah dan cepat tanpa harus masuk satu per satu ke setiap baris kode!
