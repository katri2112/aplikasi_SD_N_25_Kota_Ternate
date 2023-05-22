// Data jadwal pelajaran atas
const schedulesAtas = [
  { day: "Senin", subject: "Matematika", time: "08:00 - 09:30" },
  { day: "Selasa", subject: "Bahasa Inggris", time: "09:45 - 11:15" },
  { day: "Rabu", subject: "IPA", time: "13:00 - 14:30" },
  { day: "Kamis", subject: "IPS", time: "14:45 - 16:15" },
  { day: "Jumat", subject: "Olahraga", time: "08:00 - 09:30" },
  { day: "Sabtu", subject: "Seni Budaya", time: "09:45 - 11:15" }
];

// Data jadwal pelajaran bawah
const schedulesBawah = [
  { day: "Senin", subject: "Bahasa Indonesia", time: "09:30 - 11:00" },
  { day: "Selasa", subject: "Pendidikan Agama", time: "11:30 - 13:00" },
  { day: "Rabu", subject: "Olahraga", time: "14:30 - 16:00" },
  { day: "Kamis", subject: "Seni Rupa", time: "16:30 - 18:00" },
  { day: "Jumat", subject: "IPS", time: "10:30 - 12:00" },
  { day: "Sabtu", subject: "Penjaskes", time: "12:30 - 14:00" }
];

let isTableAtasVisible = true; // Menyimpan status tabel atas terlihat atau tersembunyi
let isTableBawahVisible = true; // Menyimpan status tabel bawah terlihat atau tersembunyi

// Fungsi untuk memuat jadwal atas
function getScheduleAtas() {
  const tableAtas = document.getElementById("jadwal-table-atas");

  // Menghapus data jadwal sebelumnya
  while (tableAtas.rows.length > 1) {
    tableAtas.deleteRow(1);
  }

  // Memasukkan data jadwal baru
  for (let i = 0; i < schedulesAtas.length; i++) {
    const schedule = schedulesAtas[i];
    const row = tableAtas.insertRow();
    const dayCell = row.insertCell();
    const subjectCell = row.insertCell();
    const timeCell = row.insertCell();

    dayCell.textContent = schedule.day;
    subjectCell.textContent = schedule.subject;
    timeCell.textContent = schedule.time;
  }

  isTableAtasVisible = true;
  toggleTableAtasButton();
}

// Fungsi untuk menghapus jadwal atas
function clearScheduleAtas() {
  const tableAtas = document.getElementById("jadwal-table-atas");

  // Menghapus data jadwal
  while (tableAtas.rows.length > 1) {
    tableAtas.deleteRow(1);
  }

  isTableAtasVisible = false;
  toggleTableAtasButton();
}

// Fungsi untuk menampilkan atau menyembunyikan tabel atas
function toggleTableAtas() {
  const tableAtas = document.getElementById("jadwal-table-atas");
  const toggleButton = document.getElementById("toggle-button-atas");

  if (isTableAtasVisible) {
    tableAtas.style.display = "none";
    toggleButton.textContent = "Tampilkan Tabel Atas";
  } else {
    tableAtas.style.display = "table";
    toggleButton.textContent = "Sembunyikan Tabel Atas";
  }

  isTableAtasVisible = !isTableAtasVisible;
}

// Fungsi untuk mengubah teks tombol toggle tabel atas sesuai dengan status tabel
function toggleTableAtasButton() {
  const toggleButton = document.getElementById("toggle-button-atas");

  if (isTableAtasVisible) {
    toggleButton.textContent = "Sembunyikan Tabel Atas";
  } else {
    toggleButton.textContent = "Tampilkan Tabel Atas";
  }
}

// Fungsi untuk memuat jadwal bawah
function getScheduleBawah() {
  const tableBawah = document.getElementById("jadwal-table-bawah");

  // Menghapus data jadwal sebelumnya
  while (tableBawah.rows.length > 1) {
    tableBawah.deleteRow(1);
  }

  // Memasukkan data jadwal baru
  for (let i = 0; i < schedulesBawah.length; i++) {
    const schedule = schedulesBawah[i];
    const row = tableBawah.insertRow();
    const dayCell = row.insertCell();
    const subjectCell = row.insertCell();
    const timeCell = row.insertCell();

    dayCell.textContent = schedule.day;
    subjectCell.textContent = schedule.subject;
    timeCell.textContent = schedule.time;
  }

  isTableBawahVisible = true;
  toggleTableBawahButton();
}

// Fungsi untuk menghapus jadwal bawah
function clearScheduleBawah() {
  const tableBawah = document.getElementById("jadwal-table-bawah");

  // Menghapus data jadwal
  while (tableBawah.rows.length > 1) {
    tableBawah.deleteRow(1);
  }

  isTableBawahVisible = false;
  toggleTableBawahButton();
}

// Fungsi untuk menampilkan atau menyembunyikan tabel bawah
function toggleTableBawah() {
  const tableBawah = document.getElementById("jadwal-table-bawah");
  const toggleButton = document.getElementById("toggle-button-bawah");

  if (isTableBawahVisible) {
    tableBawah.style.display = "none";
    toggleButton.textContent = "Tampilkan Tabel Bawah";
  } else {
    tableBawah.style.display = "table";
    toggleButton.textContent = "Sembunyikan Tabel Bawah";
  }

  isTableBawahVisible = !isTableBawahVisible;
}

// Fungsi untuk mengubah teks tombol toggle tabel bawah sesuai dengan status tabel
function toggleTableBawahButton() {
  const toggleButton = document.getElementById("toggle-button-bawah");

  if (isTableBawahVisible) {
    toggleButton.textContent = "Sembunyikan Tabel Bawah";
  } else {
    toggleButton.textContent = "Tampilkan Tabel Bawah";
  }
}
