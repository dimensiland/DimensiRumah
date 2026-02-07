// ================= DATA PROPERTI =================
const properties = [
  {
    judul: "Villa Dekat Candi Prambanan Dan Exit Tol Jogja, Madhava Prambanan, Harga Mulai Dari 395 Juta!",
    lokasi: "Jl. Sesek, Rejoso, Kec. Jogonalan, Kabupaten Klaten, Jawa Tengah",
    luas: "88 m²",
    harga: "Rp 395.000.000",
    deskripsi: "Status Sertifikat : SHM Pekarangan",
    youtube: "https://youtu.be/EveclyOwh3U",
    thumbnail: "VillaMadhava.jpg"
  },
  {
    judul: "Tanah 3180m² Murah 250rb/m² Dekat Jalur Luna Maya Kulonprogo Jogja Di Daerah Wisata Kuliner & Villa",
    lokasi: "Pendoworejo, Kulon Progo Regency, Special Region of Yogyakarta",
    luas: "3.180 m²",
    harga: "Rp 250.000/m²",
    deskripsi: "Status Sertifikat : SHM Pekarangan",
    youtube: "https://youtu.be/8xGm3jQ6zv8",
    thumbnail: "Pendoworejo3180.jpg"
  },
  {
    judul: "Tanah 1015m² Dekat Resto Svarna Padi & Puncak Saka, Harga Hanya 250 Juta",
    lokasi: "Grigak Giripurwo Girimulyo Kulonprogo",
    luas: "1.015 m²",
    harga: "Rp 250.000.000",
    deskripsi: "Status Sertifikat : SHM Pekarangan",
    youtube: "https://youtu.be/AyiTRArX6DM",
    thumbnail: "SwarnaPadi1015.jpg"
  },
  {
    judul: "Tanah Mewah Luas 2024m² Dekat Bandara NYIA & Exit Tol Jogja Di Daerah Kawasan Wisata VIlla & Kuliner",
    lokasi : "Kemukus, Tanjungharjo, Nanggulan, Kulonprogo, Daerah Istimewa Yogyakarta",
    luas: "2.024 m²",
    harga: "Rp 450.000.000",
    deskripsi: "Status Sertifikat : SHM Tegalan",
    youtube: "https://youtu.be/h1DDmB2D11k",
    thumbnail: "Kemukus2024.jpg"
  },
  {
    judul: "Tanah Dekat Pusat Kota Jogja, Area Wisata & Bandara Luas 381m² Harga 265 Juta Berada Di Sleman Jogja",
    lokasi: "Sumberarum, Sleman Regency, Special Region of Yogyakarta",
    luas: "381 m²",
    harga: "Rp 265.000.000",
    deskripsi: "Status Sertifikat : SHM Pekarangan",
    youtube: "https://youtu.be/BcosLFK4P4k",
    thumbnail: "Sumberarum381.jpg"
  },
  {
    judul: "Tanah Pekarangan Murah! Hanya 17km Dari Tugu! Kuas 439m² Cuma 330Juta! Dekat Wisata Dan Bandara YIA",
    lokasi: "Krinjing Tengah, Jati Sarono, Nanggulan, Kulon Progo Regency Yogyakarta",
    luas: "439 m²",
    harga: "Rp 329.250.000",
    deskripsi: "Status Sertifikat : SHM Pekarangan",
    youtube: "https://youtu.be/aygOqbNygNU",
    thumbnail: "Krinjing439.jpg"
  },
  {
    judul: "Jual Tanah 700m² Harga 500jt Dengan View Menakjubkan Paradise Sleman Barat Jogja",
    lokasi: "Plembon, Sendangsari, Minggir, Sleman, Yogyakarta",
    luas: "700 m²",
    harga: "Rp 500.000.000",
    deskripsi: "Status Sertifikat : SHM Sawah",
    youtube: "https://youtu.be/39w8fDvNUJU",
    thumbnail: "Minggir700.jpg"
  },
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
    judul: "Jual Tanah Pekarangan MURAH! Luas 800m² Hanya 185 Juta! Cocok Untuk Kebun Durian Dan Hutan Pinus!",
    lokasi: "Pucungroto, Purworejo Regency, Central Java",
    luas: "800 m²",
    harga: "Rp 185.000.000",
    deskripsi: "Status Sertifikat : SHM Pekarangan",
    youtube: "https://youtu.be/ps-LKAjMprU",
    thumbnail: "Pucungroto800.jpg"
  },
  {
    judul: "Tanah View Sawah Luas 1390m² Harga 225jt! Murah! Di Moyudan! Dekat Kota Jogja Dan Kampus UGM!!!",
    lokasi: "Sumberarum Sleman Regency, Special Region of Yogyakarta",
    luas: "1.390 m²",
    harga: "Rp 225.000.000",
    deskripsi: "Status Sertifikat : SHM Sawah",
    youtube: "https://youtu.be/HNq8tdcZrfs",
    thumbnail: "Sumberarum1390.jpg"
  },
  {
    judul: "TURUN HARGA! Luas 2086m² Harga 75jt NETT!!! View Pegunungan, Sawah, Sungai Cocok Untuk Kebun",
    lokasi: "Girimulyo Giripurwo",
    luas: "2.086 m²",
    harga: "Rp 75.000.000",
    deskripsi: "Status Sertifikat : SHM Tegalan",
    youtube: "https://youtu.be/9WpI7g4tiKA",
    thumbnail: "Girimulyo2086.jpg"
  },
  {
    judul: "Tanah Luas 1013m² Dialiri Mata Air Kondisi Datar & Rapi, Siap Bangun! Villa, Glamping Maupun Hunian",
    lokasi: "Pendem, Pandanrejo, Kec. Kaligesing, Kabupaten Purworejo",
    luas: "1.013 m²",
    harga: "Rp 175.000.000",
    deskripsi: "Status Sertifikat : SHM Sawah",
    youtube: "https://youtu.be/KLO8aTJOOHc",
    thumbnail: "Pendem1013.jpg"
  },
  {
    judul: "TURUN HARGA! Tanah Seluas 800m² Hanya 175 juta!!! Dekat Wisata Sungai Mudal Dan Menoreh Dreamland",
    lokasi: "Sokomoyo, Jatimulyo, Girimulyo",
    luas: "800 m²",
    harga: "Rp 175.000.000",
    deskripsi: "Status Sertifikat : SHM Pekarangan",
    youtube: "https://youtu.be/IJOafnEIBsQ",
    thumbnail: "Sokomoyo800.jpg"
  },
  {
    judul: "Tanah Luas 1315m² Harga 175Juta di Pinggir Jalan Provinsi Samigaluh Purworejo, Dekat Wisata Menoreh!",
    lokasi: "Pagerharjo, Kabupaten Kulon Progo, Daerah Istimewa Yogyakarta",
    luas: "1.315 m²",
    harga: "Rp 175.000.000",
    deskripsi: "Status Sertifikat : SHM Tegalan",
    youtube: "https://youtu.be/oPgNu09i2i8",
    thumbnail: "Pagerharjo1315.jpg"
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
    judul: "Tanah 2165m² View Sawah Ala Ubud, Harga 275 Juta Dekat Wisata Kuliner, Villa & Bandara NYIA",
    lokasi: "Banjaran, Giripurwo, Girimulyo, Kulonprogo, Daerah Istimewa Yogyakarta",
    luas: "2.165 m²",
    harga: "Rp 275.000.000",
    deskripsi: "Status Sertifikat : SHM Pekarangan",
    youtube: "https://youtu.be/bWmDknisI4U",
    thumbnail: "Banjaran2165.jpg"
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
    judul: "Tanah Murah! Luas 95m² Hanya 130 Juta! 17km Ke Tugu, Dekat Omah Betakan dan Studio Alam Gamplong!",
    lokasi: "Sumberagung, Kabupaten Sleman, Daerah Istimewa Yogyakarta",
    luas: "95 m²",
    harga: "Rp 130.000.000",
    deskripsi: "Status Sertifikat : SHM Pekarangan",
    youtube: "https://youtu.be/9B9JqUACHpM",
    thumbnail: "Sumberagung95.jpg"
  },
  {
    judul: "Jual Tanah Kavling Di Moyudan Luas 99m² Harga 100jt NEGO Dekat Kota Jogja Dan Wisata Nanggulan",
    lokasi: "Soronondan, Sendangrejo, Minggir, Sleman Regency, Special Region of Yogyakarta",
    luas: "99 m²",
    harga: "Rp 100.000.000",
    deskripsi: "Status Sertifikat : SHM Pekarangan",
    youtube: "https://youtu.be/5NlnF-es6-0",
    thumbnail: "Moyudan99.jpg"
  },
  {
    judul: "Tanah View Sawah Dan Bukit Menoreh! Luas 3200m² Harga 495jt Dekat Tumpeng Menoreh!",
    lokasi: "Loano, Sedayu, Purworejo Regency, Central Java",
    luas: "3.200 m²",
    harga: "Rp 495.000.000",
    deskripsi: "Status Sertifikat : SHM Pekarangan",
    youtube: "https://youtu.be/QNXXVf2kfj8",
    thumbnail: "Loano3200.jpg"
  },
  {
    judul: "Jual Cepat! Kavling View Sawah Indah 600rb/m² Luas 600m Dekat Bandara Yogyakarta",
    lokasi: "Kemiri Wijimulyo Nanggulan Kulonprogo Yogyakarta",
    luas: "600 m²",
    harga: "Rp 600.000/m²",
    deskripsi: "Status Sertifikat : SHM Pekarangan",
    youtube: "https://youtu.be/L2oI-uq27bo",
    thumbnail: "KavlingKemiri600.jpg"
  },
  {
    judul: "Tanah Samping Jalan Provinsi! Luas 2554m² Hanya 350jt!",
    lokasi: "Pagerharjo, Kulon Progo, DIY",
    luas: "2.554 m²",
    harga: "Rp 350.000.000",
    deskripsi: "Status Sertifikat : SHM Pekarangan",
    youtube: "https://youtu.be/9L--W_8UBP8",
    thumbnail: "Pagerharjo2554.jpg"
  },
  {
    judul: "Jual Tanah Luas 1441m² Dekat Wisata Nanggulan Harga 350rb/m!!! Dekat Jalan Nasional Ke Bandara YIA",
    lokasi: "Donomulyo, Kulon Progo Regency, Special Region of Yogyakarta",
    luas: "1.441 m²",
    harga: "Rp 350.000/m²",
    deskripsi: "Status Sertifikat : SHM Pekarangan",
    youtube: "https://youtu.be/kvU-DrOq_gM",
    thumbnail: "Donomulyo1441.jpg"
  },
  {
    judul: "Jual Tanah Seluas 5500m² Hanya 150rb/m SHM Pekarangan Cocok Untuk Berkebun Durian Dan Alpukat",
    lokasi: "Banjarharjo Kalibawang KulonProgo",
    luas: "5.500 m²",
    harga: "Rp 150.000/m²",
    deskripsi: "Status Sertifikat : SHM Pekarangan",
    youtube: "https://youtu.be/Pp90Kp1ZdOM",
    thumbnail: "Banjarharjo5500.jpg"
  },
  {
    judul: "Jual Tanah Istimewa Dekat Jalan Provinsi Luas 442m² Dengan Harga 85jt!!!",
    lokasi: "Pandanrejo, Kaligesing",
    luas: "442 m²",
    harga: "Rp 85.000.000",
    deskripsi: "Status Sertifikat : SHM Pekarangan",
    youtube: "https://youtu.be/3xLTMBcRuqk",
    thumbnail: "Pandanrejo442.jpg"
  },
  {
    judul: "MURAH!! Luas 251m² Hanya 220jt!!! Strategis Berada Di Jalan Godean 16 km Dari Tugu Jogja",
    lokasi: "Jalan Godean KM 15, Sumberarum, Moyudan, Sleman",
    luas: "251 m²",
    harga: "Rp 220.000.000",
    deskripsi: "Status Sertifikat : SHM Pekarangan",
    youtube: "https://youtu.be/vbCkXPBdREs",
    thumbnail: "Sumberarum251.jpg"
  },
  {
    judul: "Turun Harga!! Jual Tanah Gratis Bangunan!!! Luas 252m² Cocok Untuk Usaha! Dekat Mall Sleman Jogja",
    lokasi: "Tridadi Sleman",
    luas: "252 m²",
    harga: "Rp 5.000.000/m²",
    deskripsi: "Status Sertifikat : SHM Pekarangan",
    youtube: "https://youtu.be/BEKNQ4kje-Y",
    thumbnail: "Tridadi252.jpg"
  }
];

// ================= CONFIG =================
const WHATSAPP_NUMBER = "6287737447313";
const ITEMS_PER_PAGE = 10;

let currentPage = 1;

const container = document.getElementById("property-list");
const pagination = document.getElementById("pagination");

// ================= RENDER PRODUK =================
function renderProperties(page = 1) {
  container.innerHTML = "";

  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const items = properties.slice(start, end);

  items.forEach(item => {
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

  renderPagination();
}

// ================= PAGINATION =================
function renderPagination() {
  pagination.innerHTML = "";

  const totalPages = Math.ceil(properties.length / ITEMS_PER_PAGE);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.className = i === currentPage ? "active" : "";

    btn.addEventListener("click", () => {
      currentPage = i;
      renderProperties(currentPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    pagination.appendChild(btn);
  }
}

// ================= INIT =================
renderProperties(currentPage);

