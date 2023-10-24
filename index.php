<?php
// Definisikan variabel untuk tahun saat ini
$currentYear = date("Y");
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Aplikasi Sekolah SD Negeri 25 Kota Ternate - Beranda</title>
  <link rel="stylesheet" href="style.css">
  <link rel="icon" href="image1.png" type="image/png">
  <script src="script.js"></script>
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
      <h2>Halaman Beranda</h2>
      <h2>Salam literasi yang hangat!</h2>
      <b>Kami dengan bangga mempersembahkan aplikasi sekolah SD bertema literasi, yang dirancang khusus untuk membantu memperkaya dunia belajar anak-anak.</b>
      <b>Literasi adalah kunci sukses dalam menjelajahi dunia pengetahuan, dan kami berkomitmen untuk mengembangkan minat baca dan kemampuan menulis pada generasi muda.</b>
      <b>Melalui aplikasi ini, kami menghadirkan pengalaman belajar yang interaktif, kreatif, dan menyenangkan.</b>
    </div>

<div class="wrapper">
    <div class="slides">
      <span id="slide-1"></span>
      <span id="slide-2"></span>
      <span id="slide-3"></span>
      <span id="slide-4"></span>
      <div class="images">
        <img src="image4.jpeg" alt="Gambar 1">
        <img src="image5.jpeg" alt="Gambar 2">
        <img src="image6.jpeg" alt="Gambar 3">
        <img src="image7.jpeg" alt="Gambar 4">
      </div>
    </div>
    <!-- navigasi -->
    <div class="navigasi">
      <a href="#slide-1">1</a>
      <a href="#slide-2">2</a>
      <a href="#slide-3">3</a>
      <a href="#slide-4">4</a>
    </div>
    </section>
<footer>
    <p>&copy; <?php echo $currentYear; ?> Aplikasi Sekolah. All rights reserved.</p>
</footer>

<script src="script.js"></script>
</body>

</html>
