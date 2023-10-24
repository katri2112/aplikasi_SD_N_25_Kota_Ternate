<?php
// Definisikan variabel untuk tahun saat ini
$currentYear = date("Y");
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Aplikasi Sekolah SD Negeri 25 Kota Ternate - Jadwal</title>
  <link rel="stylesheet" href="style.css">
  <link rel="icon" href="image1.png" type="image/png">
</head>

<body>
<header>
<img src="image1.png" alt="Logo" class="logo">
    <h1>SD Negeri 25 Kota Ternate</h1>
</header>

<nav>
    <ul>
      <li><a href="index.php">Beranda</a></li>
      <li><a href="pengumuman.php">Pengumuman</a></li>
      <li><a href="jadwal.php">Jadwal</a></li>
      <li><a href="kontak.php">Kontak</a></li>
    </ul>
</nav>

<section class="background-block">
    <div id="container">
      <h2>Halaman Jadwal</h2>
      <p>Selamat datang di halaman jadwal kami. Berikut adalah jadwal kegiatan sekolah kami.</p>
      <!-- Isi jadwal di sini -->
      <li>
        <select id="jadwal" name="jadwal">
          <option value="senin">Senin</option>
          <option value="selasa">Selasa</option>
          <option value="rabu">Rabu</option>
          <option value="kamis">Kamis</option>
          <option value="jumat">Jumat</option>
          <option value="sabtu">Sabtu</option>
          <option value="minggu">Minggu</option>
        </select>
      </li>
    </div>
</section>

<footer>
    <p>&copy; <?php echo $currentYear; ?> Aplikasi Sekolah. All rights reserved.</p>
</footer>

<script src="script.js"></script>
</body>

</html>
