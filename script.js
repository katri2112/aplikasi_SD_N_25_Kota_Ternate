// File: script.js

// Data pengumuman
const announcements = [
  {
    title: "Pengumuman 1",
    content: "Ini adalah pengumuman pertama."
  },
  {
    title: "Pengumuman 2",
    content: "Ini adalah pengumuman kedua."
  },
  {
    title: "Pengumuman 3",
    content: "Ini adalah pengumuman ketiga."
  }
];

// Data jadwal pelajaran
const schedule = [
  {
    day: "Senin",
    subject: "Matematika",
    time: "08:00 - 09:30"
  },
  {
    day: "Selasa",
    subject: "Bahasa Inggris",
    time: "10:00 - 11:30"
  },
  {
    day: "Rabu",
    subject: "IPA",
    time: "13:00 - 14:30"
  }
];

// Data kontak
const contacts = [
  {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "1234567890"
  },
  {
    name: "Jane Smith",
    email: "janesmith@example.com",
    phone: "0987654321"
  }
];

// Fungsi untuk menampilkan pengumuman terbaru
function showLatestAnnouncement() {
  const latestAnnouncement = announcements[0];
  alert(latestAnnouncement.title + "\n\n" + latestAnnouncement.content);
}

// Fungsi untuk memuat jadwal pelajaran
function getSchedule() {
  const table = document.getElementById("jadwal-table");

  // Menghapus data jadwal yang sudah ada sebelumnya
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }

  // Memuat data jadwal baru
  for (let i = 0; i < schedule.length; i++) {
    const row = table.insertRow();
    const dayCell = row.insertCell();
    const subjectCell = row.insertCell();
    const timeCell = row.insertCell();

    dayCell.textContent = schedule[i].day;
    subjectCell.textContent = schedule[i].subject;
    timeCell.textContent = schedule[i].time;
  }
}

// Fungsi untuk menampilkan kontak
function showContact() {
  const contactList = document.getElementById("contact-list");

  // Menghapus data kontak yang sudah ada sebelumnya
  while (contactList.firstChild) {
    contactList.removeChild(contactList.firstChild);
  }

  // Menambahkan data kontak baru
  for (let i = 0; i < contacts.length; i++) {
    const contactItem = document.createElement("li");
    const contactInfo = document.createElement("div");

    contactInfo.innerHTML = `<strong>${contacts[i].name}</strong><br>Email: ${contacts[i].email}<br>Phone: ${contacts[i].phone}`;
    contactItem.appendChild(contactInfo);
    contactList.appendChild(contactItem);
  }
}
