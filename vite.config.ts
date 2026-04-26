import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, loadEnv } from 'vite';

// Perbaikan wajib untuk menggunakan '__dirname' di sistem ESM ("type": "module")
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
  // Menggunakan process.cwd() lebih aman untuk mendeteksi lokasi .env
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    define: {
      // PERINGATAN: Ini membuat API Key bisa dilihat publik di inspect element.
      // Pastikan Anda mengamankannya ke backend nanti.
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    build: {
      target: 'esnext'
      // Bagian 'rollupOptions' (manualChunks) SAYA HAPUS SEMENTARA
      // Biarkan Vite yang memikirkan cara membagi file secara otomatis agar React tidak error di Vercel.
    }
  };
});