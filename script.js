    // Data jadwal pelajaran kelas 5a
    const schedulesAtas = [
      { day: "Senin", subject: "Matematika", time: "08:00 - 09:30" },
      { day: "Selasa", subject: "Bahasa Inggris", time: "09:45 - 11:15" },
      { day: "Rabu", subject: "IPA", time: "13:00 - 14:30" },
      { day: "Kamis", subject: "IPS", time: "14:45 - 16:15" },
      { day: "Jumat", subject: "Olahraga", time: "08:00 - 09:30" },
      { day: "Sabtu", subject: "Seni Budaya", time: "09:45 - 11:15" }
    ];

    // Data jadwal pelajaran kelas 5b
    const schedulesAtas2 = [
      { day: "Senin", subject: "Matematika", time: "08:00 - 09:30" },
      { day: "Selasa", subject: "Bahasa Inggris", time: "09:45 - 11:15" },
      { day: "Rabu", subject: "IPA", time: "13:00 - 14:30" },
      { day: "Kamis", subject: "IPS", time: "14:45 - 16:15" },
      { day: "Jumat", subject: "Olahraga", time: "08:00 - 09:30" },
      { day: "Sabtu", subject: "Seni Budaya", time: "09:45 - 11:15" }
    ];
	
    // Data jadwal pelajaran kelas 4a
    const schedulesBawah = [
      { day: "Senin", subject: "Upacara Bendera", time: "07:05 - 7:45" },
	  { day: "Senin", subject: "Jus Amma", time: "07:45 - 8:55" },
	  { day: "Senin", subject: "Tematik", time: "08:55 - 9:30" },
	  { day: "Senin", subject: "Istirahat", time: "09:30 - 10:00" },
	  { day: "Senin", subject: "Tematik", time: "10:00 - 12:20" },
	  { day: "Hari", subject: "Mata Pelajaran", time: "Waktu"},
	  { day: "Selasa", subject: "Senam", time: "7:05 - 7:45" },
	  { day: "Selasa", subject: "Matematika", time: "7:45 - 09:30" },
	  { day: "Selasa", subject: "Istirahat", time: "9:30 - 10:00" },
	  { day: "Selasa", subject: "P A B P", time: "10:00 - 12:20" },
	  { day: "Hari", subject: "Mata Pelajaran", time: "Waktu"},
      { day: "Rabu", subject: "Literasi", time: "07:05 - 7:45" },
	  { day: "Rabu", subject: "Matematika", time: "7:45 - 9:30" },
	  { day: "Rabu", subject: "Istirahat", time: "9:30 - 10:00" },
	  { day: "Rabu", subject: "Tematik", time: "10:00 - 12:20" },
	  { day: "Hari", subject: "Mata Pelajaran", time: "Waktu"},
      { day: "Kamis", subject: "Literasi", time: "7:05 - 7:45" },
      { day: "Kamis", subject: "P J O K", time: "7:45 - 8:55" },
	  { day: "Kamis", subject: "tematik", time: "8:55 - 9:30" },
	  { day: "Kamis", subject: "Istirahat", time: "9:30 - 10:00" },
	  { day: "Kamis", subject: "Tematik", time: "10:00 - 12:20" },
	  { day: "Hari", subject: "Mata Pelajaran", time: "Waktu"},
      { day: "Jumat", subject: "Kegiatan Keagamaan", time: "7:05 - 7:45" },
	  { day: "Jumat", subject: "P J O K", time: "7:45 - 8:55" },
	  { day: "Jumat", subject: "tematik", time: "8:55 - 9:30" },
	  { day: "Jumat", subject: "Istirahat", time: "9:30 - 10:00" },
	  { day: "Jumat", subject: "Tematik", time: "10:00 - 12:20" },
	  { day: "Hari", subject: "Mata Pelajaran", time: "Waktu"},
	  { day: "Sabtu", subject: "Kegiatan Inspiratif", time: "7:05 - 7:45" },
	  { day: "Sabtu", subject: "M U L O K", time: "7:45 - 8:55" },
	  { day: "Sabtu", subject: "tematik", time: "8:55 - 9:30" },
	  { day: "Sabtu", subject: "Istirahat", time: "9:30 - 10:00" },
	  { day: "Sabtu", subject: "Tematik", time: "10:00 - 12:20" },
    ];

 // Data jadwal pelajaran kelas 4b
    const schedulesBawah2 = [
      { day: "Senin", subject: "Bahasa Indonesia", time: "09:30 - 11:00" },
      { day: "Selasa", subject: "Pendidikan Agama", time: "11:30 - 13:00" },
      { day: "Rabu", subject: "Olahraga", time: "14:30 - 16:00" },
      { day: "Kamis", subject: "Seni Rupa", time: "16:30 - 18:00" },
      { day: "Jumat", subject: "IPS", time: "10:30 - 12:00" },
      { day: "Sabtu", subject: "Penjaskes", time: "12:30 - 14:00" }
    ];

    let isTableAtasVisible = true; // Menyimpan status tabel atas terlihat atau tersembunyi
	let isTableAtas2Visible = true; // Menyimpan status tabel atas terlihat atau tersembunyi
    let isTableBawahVisible = true; // Menyimpan status tabel bawah terlihat atau tersembunyi
    let isTableBawah2Visible = true; // Menyimpan status tabel bawah terlihat atau tersembunyi
	
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

      while (tableAtas.rows.length > 1) {
        tableAtas.deleteRow(1);
      }

      isTableAtasVisible = false;
      toggleTableAtasButton();
    }

    // Fungsi untuk menampilkan/menyembunyikan tabel atas
    function toggleTableAtas() {
      const tableAtas = document.getElementById("jadwal-table-atas");

      if (isTableAtasVisible) {
        tableAtas.style.display = "none";
        isTableAtasVisible = false;
        toggleTableAtasButton();
      } else {
        tableAtas.style.display = "table";
        isTableAtasVisible = true;
        toggleTableAtasButton();
      }
    }

    // Fungsi untuk mengubah teks tombol toggle tabel atas
    function toggleTableAtasButton() {
      const toggleButton = document.querySelector("#container:first-of-type button:nth-of-type(3)");

      if (isTableAtasVisible) {
        toggleButton.textContent = "Sembunyikan Tabel Atas";
      } else {
        toggleButton.textContent = "Tampilkan Tabel Atas";
      }
    }
	
	    // Fungsi untuk memuat jadwal atas
    function getScheduleAtas2() {
      const tableAtas2 = document.getElementById("jadwal-table-atas2");

      // Menghapus data jadwal sebelumnya
      while (tableAtas2.rows.length > 1) {
        tableAtas2.deleteRow(1);
      }

      // Memasukkan data jadwal baru
      for (let i = 0; i < schedulesAtas2.length; i++) {
        const schedule = schedulesAtas2[i];
        const row = tableAtas2.insertRow();
        const dayCell = row.insertCell();
        const subjectCell = row.insertCell();
        const timeCell = row.insertCell();

        dayCell.textContent = schedule.day;
        subjectCell.textContent = schedule.subject;
        timeCell.textContent = schedule.time;
      }

      isTableAtas2Visible = true;
      toggleTableAtas2Button();
    }

    // Fungsi untuk menghapus jadwal atas
    function clearScheduleAtas2() {
      const tableAtas2 = document.getElementById("jadwal-table-atas2");

      while (tableAtas2.rows.length > 1) {
        tableAtas2.deleteRow(1);
      }

      isTableAtas2Visible = false;
      toggleTableAtas2Button();
    }

    // Fungsi untuk menampilkan/menyembunyikan tabel atas
    function toggleTableAtas2() {
      const tableAtas2 = document.getElementById("jadwal-table-atas2");

      if (isTableAtas2Visible) {
        tableAtas2.style.display = "none";
        isTableAtas2Visible = false;
        toggleTableAtas2Button();
      } else {
        tableAtas2.style.display = "table";
        isTableAtas2Visible = true;
        toggleTableAtas2Button();
      }
    }

    // Fungsi untuk mengubah teks tombol toggle tabel atas
    function toggleTableAtas2Button() {
      const toggleButton = document.querySelector("#container:first-of-type button:nth-of-type(3)");

      if (isTableAtas2Visible) {
        toggleButton.textContent = "Sembunyikan Tabel Atas2";
      } else {
        toggleButton.textContent = "Tampilkan Tabel Atas2";
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

      while (tableBawah.rows.length > 1) {
        tableBawah.deleteRow(1);
      }

      isTableBawahVisible = false;
      toggleTableBawahButton();
    }

    // Fungsi untuk menampilkan/menyembunyikan tabel bawah
    function toggleTableBawah() {
      const tableBawah = document.getElementById("jadwal-table-bawah");

      if (isTableBawahVisible) {
        tableBawah.style.display = "none";
        isTableBawahVisible = false;
        toggleTableBawahButton();
      } else {
        tableBawah.style.display = "table";
        isTableBawahVisible = true;
        toggleTableBawahButton();
      }
    }
	
    // Fungsi untuk memuat jadwal bawah
    function getScheduleBawah2() {
      const tableBawah2 = document.getElementById("jadwal-table-bawah2");

      // Menghapus data jadwal sebelumnya
      while (tableBawah2.rows.length > 1) {
        tableBawah2.deleteRow(1);
      }

      // Memasukkan data jadwal baru
      for (let i = 0; i < schedulesBawah2.length; i++) {
        const schedule = schedulesBawah2[i];
        const row = tableBawah2.insertRow();
        const dayCell = row.insertCell();
        const subjectCell = row.insertCell();
        const timeCell = row.insertCell();

        dayCell.textContent = schedule.day;
        subjectCell.textContent = schedule.subject;
        timeCell.textContent = schedule.time;
      }

      isTableBawah2Visible = true;
      toggleTableBawah2Button();
    }

    // Fungsi untuk menghapus jadwal bawah
    function clearScheduleBawah2() {
      const tableBawah2 = document.getElementById("jadwal-table-bawah2");

      while (tableBawah2.rows.length > 1) {
        tableBawah2.deleteRow(1);
      }

      isTableBawah2Visible = false;
      toggleTableBawah2Button();
    }

    // Fungsi untuk menampilkan/menyembunyikan tabel bawah
    function toggleTableBawah2() {
      const tableBawah2 = document.getElementById("jadwal-table-bawah2");

      if (isTableBawah2Visible) {
        tableBawah2.style.display = "none";
        isTableBawah2Visible = false;
        toggleTableBawah2Button();
      } else {
        tableBawah2.style.display = "table";
        isTableBawah2Visible = true;
        toggleTableBawah2Button();
      }
    }

    // Fungsi untuk mengubah teks tombol toggle tabel bawah
    function toggleTableBawah2Button() {
      const toggleButton = document.querySelector("#container:last-of-type button:nth-of-type(3)");

      if (isTableBawah2Visible) {
        toggleButton.textContent = "Sembunyikan Tabel Bawah2";
      } else {
        toggleButton.textContent = "Tampilkan Tabel Bawah2";
      }
    }
