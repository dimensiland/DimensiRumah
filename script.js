// ================= DATA PROPERTI =================
const properties = [
  {
    judul: "Tanah Samping Air Terjun, Luas 1450m² Hanya 175jt! Dekat Tumpeng Menoreh",
    lokasi: "Ngadirejo, Purworejo Regency, Central Java",
    luas: "1.450 m²",
    harga: "Rp 175.000.000",
    deskripsi: "Status Sertifikat : SHM Tegalan",
    youtube: "https://youtu.be/duhG7mcri-E",
    thumbnail: "Ngadirejo1450.jpg"
  },
  {
    judul: "Tanah 1098m² Dialiri Mata Air View Sawah & Perbukitan",
    lokasi: "Krinjing, Nanggulan, Kulonprogo, DIY",
    luas: "1.098 m²",
    harga: "Rp 225.000.000",
    deskripsi: "Status Sertifikat : SHM",
    youtube: "https://youtu.be/LcT86J2X8cE",
    thumbnail: "Krinjing1098.jpg"
  },
  {
    judul: "Lahan 90rb/m² View Sawah Ala Ubud Bali, Akses Tol & Bandara",
    lokasi: "Banjaran, Girimulyo, Kulonprogo, DIY",
    luas: "5.000 m²",
    harga: "Rp 90.000/m²",
    deskripsi: "Status Sertifikat : SHM Pekarangan",
    youtube: "https://youtu.be/cAkiLW-B69I",
    thumbnail: "Banjaran5000.jpg"
  },
  {
    judul: "Tanah Samping Jalan Provinsi! Luas 2554m² Hanya 350jt! Dekat Kawasan Wisata Menoreh!",
    lokasi: "Pagerharjo, Kulon Progo Regency, Special Region of Yogyakarta",
    luas: "2.554 m²",
    harga: "Rp 350.000.000",
    deskripsi: "Status Sertifikat : SHM Pekarangan",
    youtube: "https://youtu.be/9L--W_8UBP8",
    thumbnail: "Pagerharjo2554.jpg"
  },
  {
    judul: "Sekali Setahun! Tanah Samping Sungai, Sawah, Jalan Provinsi! Luas 1015m²! Dekat Wisata Menoreh!",
    lokasi: "Sinogo, Pagerharjo, Samigaluh, Kulon Progo Regency, Special Region of Yogyakarta",
    luas: "1.015 m²",
    harga: "Rp 495.000.000",
    deskripsi: "Status Sertifikat : SHM",
    youtube: "https://youtu.be/UgCrAo67P4Q",
    thumbnail: "Pagerharjo1015.jpeg"
  }
];

// ================= CONFIG =================
const WHATSAPP_NUMBER = "6287737447313";
const container = document.getElementById("property-list");

if (!container) {
  console.error('Element dengan id "property-list" tidak ditemukan');
}

// ================= RENDER =================
properties.forEach(item => {
  const card = document.createElement("div");
  card.className = "property-card";

  card.innerHTML = `
    <a href="${item.youtube}" target="_blank" class="thumbnail-wrapper">
      <img src="${item.thumbnail}" alt="${item.judul}">
      <span class="play-icon">▶</span>
    </a>

    <div class="property-content">
      <h2>${item.judul}</h2>
      <p class="location">${item.lokasi}</p>
      <p><strong>Luas:</strong> ${item.luas}</p>
      <p class="price">${item.harga}</p>
      <p>${item.deskripsi}</p>

      <a class="whatsapp-btn"
        href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
          "Saya tertarik dengan " + item.judul + " melalui DIMENSI LAND"
        )}"
        target="_blank">
        Hubungi DIMENSI LAND via WhatsApp
      </a>
    </div>
  `;

  container.appendChild(card);
});


