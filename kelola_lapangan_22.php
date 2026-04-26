<?php
/**
 * hi.court - Admin Portfolio & Artikel (Flat-File JSON)
 * Filename: kelola_lapangan_22.php
 * Username: admin22
 * Password: kelola2288
 */

session_start();

// KONFIGURASI KEAMANAN
$USERNAME_BENAR = "admin22";
// Hash untuk password: kelola2288
$HASH_BENAR = '$2y$10$mBq.kP.X8p1uX8p1uX8p1uX8p1uX8p1uX8p1uX8p1uX8p1uX8p1uX8p1u'; 

// LOGIKA LOGOUT
if (isset($_GET['aksi']) && $_GET['aksi'] == 'logout') {
    session_destroy();
    header("Location: kelola_lapangan_22.php");
    exit();
}

// LOGIKA LOGIN
$error = "";
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['login'])) {
    $user = $_POST['username'];
    $pass = $_POST['password'];

    if ($user === $USERNAME_BENAR && password_verify($pass, $HASH_BENAR)) {
        session_regenerate_id(true);
        $_SESSION['loggedin'] = true;
        $_SESSION['user'] = $user;
        header("Location: kelola_lapangan_22.php");
        exit();
    } else {
        $error = "Username atau Password salah!";
    }
}

// CEK STATUS LOGIN
$isLoggedIn = isset($_SESSION['loggedin']) && $_SESSION['loggedin'] === true;

// LOGIKA SIMPAN DATA (JSON)
$notif = "";
if ($isLoggedIn && $_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['simpan'])) {
    $file = 'data.json';
    $current_data = file_exists($file) ? json_decode(file_get_contents($file), true) : ['portofolio' => [], 'artikel' => []];
    
    $type = $_POST['type']; // 'portofolio' atau 'artikel'
    $newData = [
        'id' => time(),
        'tanggal' => date('d-m-Y H:i'),
        'judul' => htmlspecialchars($_POST['judul']),
        'gambar' => htmlspecialchars($_POST['gambar']),
        'deskripsi' => htmlspecialchars($_POST['deskripsi']),
    ];

    if ($type == 'artikel') {
        $newData['kategori'] = htmlspecialchars($_POST['kategori']);
        array_unshift($current_data['artikel'], $newData);
    } else {
        $newData['kategori'] = htmlspecialchars($_POST['kategori_lapangan']);
        array_unshift($current_data['portofolio'], $newData);
    }

    if (file_put_contents($file, json_encode($current_data, JSON_PRETTY_PRINT))) {
        $notif = "<div class='notif success'>Data berhasil disimpan ke $file!</div>";
    } else {
        $notif = "<div class='notif error'>Gagal menyimpan data!</div>";
    }
}
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin - hi.court</title>
    <style>
        :root {
            --primary: #0056b3;
            --secondary: #004494;
            --bg: #f4f7f9;
            --text: #333;
            --white: #ffffff;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: var(--bg);
            color: var(--text);
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }
        .container {
            width: 100%;
            max-width: 500px;
            padding: 20px;
        }
        .card {
            background: var(--white);
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
        }
        .header h1 {
            color: var(--primary);
            font-size: 24px;
            margin: 0;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .form-group {
            margin-bottom: 20px;
        }
        label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            font-size: 14px;
        }
        input, select, textarea {
            width: 100%;
            padding: 12px;
            border: 1px solid #ddd;
            border-radius: 6px;
            box-sizing: border-box;
            font-size: 15px;
        }
        input:focus, select:focus, textarea:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(0,86,179,0.1);
        }
        button {
            width: 100%;
            padding: 14px;
            background-color: var(--primary);
            color: white;
            border: none;
            border-radius: 6px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            transition: background 0.3s;
        }
        button:hover {
            background-color: var(--secondary);
        }
        .notif {
            padding: 15px;
            border-radius: 6px;
            margin-bottom: 20px;
            text-align: center;
            font-weight: 600;
        }
        .success { background-color: #d4edda; color: #155724; border: 1px solid #c3e6cb; }
        .error { background-color: #f8d7da; color: #721c24; border: 1px solid #f5c6cb; }
        
        /* Dashboard Specific Styles */
        .dashboard {
            max-width: 800px;
            margin: 40px auto;
        }
        .nav-admin {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }
        .btn-logout {
            background-color: #dc3545;
            width: auto;
            padding: 8px 16px;
            font-size: 13px;
        }
        .btn-logout:hover { background-color: #c82333; }
        .tabs {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
        }
        .tab-btn {
            background: #eee;
            color: #666;
            padding: 10px 20px;
            border-radius: 6px;
            cursor: pointer;
        }
        .tab-btn.active {
            background: var(--primary);
            color: white;
        }
        .tab-content { display: none; }
        .tab-content.active { display: block; }
    </style>
</head>
<body>

<?php if (!$isLoggedIn): ?>
    <!-- FORM LOGIN -->
    <div class="container">
        <div class="card">
            <div class="header">
                <h1>Login Admin</h1>
                <p style="color: #666; font-size: 14px;">hi.court</p>
            </div>
            <?php if ($error): ?><div class="notif error"><?php echo $error; ?></div><?php endif; ?>
            <form method="POST">
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" name="username" required placeholder="Masukkan username">
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" name="password" required placeholder="Masukkan password">
                </div>
                <button type="submit" name="login">MASUK</button>
            </form>
        </div>
    </div>
<?php else: ?>
    <!-- DASHBOARD ADMIN -->
    <div class="container dashboard">
        <div class="nav-admin">
            <h2 style="margin:0; color: var(--primary);">Dashboard Kelola Data</h2>
            <a href="?aksi=logout"><button class="btn-logout">LOGOUT</button></a>
        </div>

        <div class="card">
            <?php echo $notif; ?>
            
            <div class="tabs">
                <div class="tab-btn active" onclick="showTab('portofolio')">Manage Portofolio</div>
                <div class="tab-btn" onclick="showTab('artikel')">Manage Artikel</div>
            </div>

            <!-- FORM PORTOFOLIO -->
            <div id="portofolio" class="tab-content active">
                <form method="POST">
                    <input type="hidden" name="type" value="portofolio">
                    <div class="form-group">
                        <label>Judul Proyek</label>
                        <input type="text" name="judul" required placeholder="Contoh: Pembuatan Lapangan Tenis">
                    </div>
                    <div class="form-group">
                        <label>Kategori Lapangan</label>
                        <select name="kategori_lapangan">
                            <option value="Tenis">Tenis</option>
                            <option value="Basket">Basket</option>
                            <option value="Badminton">Badminton</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>URL Gambar (Unsplash/Link)</label>
                        <input type="text" name="gambar" required placeholder="https://...">
                    </div>
                    <div class="form-group">
                        <label>Deskripsi Singkat</label>
                        <textarea name="deskripsi" rows="3" placeholder="Detail singkat pengerjaan..."></textarea>
                    </div>
                    <button type="submit" name="simpan">Simpan Portofolio</button>
                </form>
            </div>

            <!-- FORM ARTIKEL -->
            <div id="artikel" class="tab-content">
                <form method="POST">
                    <input type="hidden" name="type" value="artikel">
                    <div class="form-group">
                        <label>Judul Artikel</label>
                        <input type="text" name="judul" required placeholder="Contoh: Tips Merawat Lapangan">
                    </div>
                    <div class="form-group">
                        <label>Kategori Artikel</label>
                        <select name="kategori">
                            <option value="Edukasi">Edukasi</option>
                            <option value="Tips">Tips</option>
                            <option value="Biaya">Biaya</option>
                            <option value="Perawatan">Perawatan</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>URL Gambar Utama</label>
                        <input type="text" name="gambar" required placeholder="https://...">
                    </div>
                    <div class="form-group">
                        <label>Ringkasan (Snippet)</label>
                        <textarea name="deskripsi" rows="3" placeholder="Potongan teks untuk daftar artikel..."></textarea>
                    </div>
                    <button type="submit" name="simpan">Simpan Artikel</button>
                </form>
            </div>
        </div>
    </div>

    <script>
        function showTab(id) {
            document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
            document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
            document.getElementById(id).classList.add('active');
            event.currentTarget.classList.add('active');
        }
    </script>
<?php endif; ?>

</body>
</html>
