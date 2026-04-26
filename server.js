import express from 'express';
import session from 'express-session';
import bcrypt from 'bcryptjs';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
import { createServer as createViteServer } from 'vite';

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
    const app = express();
    const PORT = 3000;
    const DATA_FILE = 'data.json';

    app.set('trust proxy', 1); // Trust first proxy (Cloud Run/Nginx)

    // CONFIGURATION
    const USERNAME_BENAR = 'admin22';
    // Fixed hash for 'kelola2288'
    const HASH_BENAR = '$2b$10$H9G4YfCYuUFT.H0XncPXPO2TERsB0/OO/SKBwD5lX0s/RbttZaKhe'; 

    app.use(express.json({ limit: '50mb' }));
    app.use(express.urlencoded({ extended: true, limit: '50mb' }));
    app.use(session({
        secret: 'hicourt-secret-key-2026',
        resave: false,
        saveUninitialized: true,
        cookie: { 
            secure: false, 
            httpOnly: true,
            sameSite: 'lax',
            maxAge: 24 * 60 * 60 * 1000 
        }
    }));

    // HELPERS
    async function bacaData() {
        try {
            const data = await fs.readFile(DATA_FILE, 'utf8');
            return JSON.parse(data);
        } catch (err) {
            return { portofolio: [], artikel: [] };
        }
    }

    async function simpanData(data) {
        await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
    }

    // API ROUTES (For Admin CMS)
    app.post('/api/admin/login', async (req, res) => {
        const { username, password } = req.body;
        if (username === USERNAME_BENAR && bcrypt.compareSync(password, HASH_BENAR)) {
            req.session.loggedIn = true;
            req.session.user = username;
            req.session.save((err) => {
                if (err) return res.status(500).json({ error: 'Session save error' });
                res.json({ success: true });
            });
        } else {
            res.status(401).json({ error: 'Username atau password salah' });
        }
    });

    app.get('/api/admin/status', (req, res) => {
        console.log('Session Status Check:', req.sessionID, req.session.loggedIn);
        res.json({ loggedIn: req.session.loggedIn || false, user: req.session.user || null });
    });

    app.get('/api/admin/logout', (req, res) => {
        req.session.destroy(() => {
            res.json({ success: true });
        });
    });

    // Middleware to check login
    function checkAuth(req, res, next) {
        if (req.session && req.session.loggedIn) return next();
        console.warn('Auth Failed - Missing Session:', req.sessionID);
        res.status(403).json({ error: 'Sesi habis atau tidak valid. Silakan login kembali.' });
    }

    app.get('/api/data', async (req, res) => {
        const data = await bacaData();
        res.json(data);
    });

    app.post('/api/admin/simpan-portofolio', checkAuth, async (req, res) => {
        const data = await bacaData();
        const newItem = {
            id: Date.now(),
            tanggal: new Date().toLocaleDateString('id-ID'),
            ...req.body
        };
        data.portofolio.unshift(newItem);
        await simpanData(data);
        res.json({ success: true });
    });

    app.post('/api/admin/simpan-artikel', checkAuth, async (req, res) => {
        const data = await bacaData();
        const newItem = {
            id: Date.now(),
            tanggal: new Date().toLocaleDateString('id-ID'),
            ...req.body
        };
        data.artikel.unshift(newItem);
        await simpanData(data);
        res.json({ success: true });
    });

    app.delete('/api/admin/hapus-portofolio/:id', checkAuth, async (req, res) => {
        const data = await bacaData();
        const id = parseInt(req.params.id);
        data.portofolio = data.portofolio.filter((item) => item.id !== id);
        await simpanData(data);
        res.json({ success: true });
    });

    app.delete('/api/admin/hapus-artikel/:id', checkAuth, async (req, res) => {
        const data = await bacaData();
        const id = parseInt(req.params.id);
        data.artikel = data.artikel.filter((item) => item.id !== id);
        await simpanData(data);
        res.json({ success: true });
    });

    // VITE MIDDLEWARE (Handles React Rendering)
    if (process.env.NODE_ENV !== 'production') {
        const vite = await createViteServer({
            server: { middlewareMode: true },
            appType: 'spa',
        });
        app.use(vite.middlewares);
    } else {
        const distPath = path.join(process.cwd(), 'dist');
        app.use(express.static(distPath));
        app.get('*', (req, res) => {
            res.sendFile(path.join(distPath, 'index.html'));
        });
    }

    app.listen(PORT, '0.0.0.0', () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

startServer();
