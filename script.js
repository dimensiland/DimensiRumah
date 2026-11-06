
const properties = [

  {
    judul: "Tanah Murah 700m² View Sawah & Gunung Menoreh di Sleman | Dekat Mang Engking & Pintu Tol",
    lokasi: "Plumbon, Sendangsari, Minggir, Sleman Barat, D.I. Yogyakarta",
    mdpl: "110 - 130",
    harga: "Rp 395.000.000,-",
    thumbnail: "DL-026.jpg",
    video: "https://youtu.be/TxDTI_8L4QI",
    akses: "Berjarak sekitar 20–30 meter dari jalan aspal utama, namun jalur masuk langsung menuju lokasi saat ini masih berupa tanah/jalan eksisting (disarankan untuk dicor)",
    air: "Tersedia",
    listrik: "PLN Tersedia",
    kondisi: "Tanah subur siap bangun yang saat ini ditanami pohon pisang dan kelapa",
    prospek: "Sangat cocok untuk konsep slow living, tempat tinggal sekaligus kantor remote, maupun dibangun menjadi 2 unit vila sebagai aset investasi (passive income)",
    point: "Memiliki pemandangan alam (view gunung & sawah) yang indah dan udara yang sangat segar, Dekat dengan pintu tol Jogja–Semarang (sekitar 7 km), Hanya 1 km dari Kantor Kecamatan Minggir, Pasar Minggir, rumah sakit, dan pom bensin, Berjarak sekitar 15 km (kurang lebih 20–30 menit) dari kawasan Malioboro, Kota Jogja"
  }

  // Tambahkan data properti berikutnya di Atas Halaman ini.
  // Tanpa Merubah Satu Pun Huruf, Koma atau Titik Bagian Bawah.
  // By. Choky Pinky
  // SELAMAT DAN SUKSES

];

const itemsPerPage = 10;
let currentPage = 1;
let filtered = properties;

const container = document.getElementById("property-list");
const pagination = document.getElementById("pagination");
const searchInput = document.getElementById("property-search");
const searchClear = document.getElementById("search-clear");
const searchInfo = document.getElementById("search-info");


/* ---------- NORMALISASI PENCARIAN ---------- */

function normalize(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/²/g, "2")
    .replace(/m\s*2/g, "m2")
    .replace(/(\d)\s+(m|meter)\b/g, "$1$2")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}


/* ---------- INDEKS PENCARIAN ---------- */

// Mengambil seluruh informasi dari setiap properti
const searchIndex = properties.map(item => {

  const searchableText = Object.values(item)
    .filter(value => value !== null && value !== undefined)
    .join(" ");

  return {
    item,
    text: normalize(searchableText)
  };

});


/* ---------- PENCARIAN ---------- */

function applySearch() {

  const query = normalize(searchInput.value);
  const words = query.split(" ").filter(Boolean);

  filtered = words.length
    ? searchIndex
        .filter(entry =>
          words.every(word => entry.text.includes(word))
        )
        .map(entry => entry.item)
    : properties;

  currentPage = 1;

  searchClear.hidden = !searchInput.value;

  searchInfo.textContent = words.length
    ? `${filtered.length} properti ditemukan untuk pencarian "${searchInput.value.trim()}"`
    : "";

  renderPage(currentPage);

}


// Debounce pencarian agar lebih ringan
let searchTimer;

searchInput.addEventListener("input", () => {

  clearTimeout(searchTimer);

  searchTimer = setTimeout(applySearch, 250);

});


// Tombol hapus pencarian
function clearSearch() {

  clearTimeout(searchTimer);

  searchInput.value = "";

  applySearch();

  searchInput.focus();

}

searchClear.addEventListener("click", clearSearch);


// Tombol Escape untuk menghapus pencarian
searchInput.addEventListener("keydown", event => {

  if (event.key === "Escape") {
    clearSearch();
  }

});


/* ---------- DETAIL PROPERTI ---------- */

function generateDetail(item) {

  return `
    <div class="detail-grid">

      <div class="detail-item">
        <span>Lokasi</span>
        <strong>${item.lokasi || "-"}</strong>
      </div>

      <div class="detail-item">
        <span>Ketinggian</span>
        <strong>${item.mdpl ? `${item.mdpl} mdpl` : "-"}</strong>
      </div>

      <div class="detail-item">
        <span>Akses Jalan</span>
        <strong>${item.akses || "-"}</strong>
      </div>

      <div class="detail-item">
        <span>Fasilitas Air / Listrik</span>
        <strong>${item.air || "-"} / ${item.listrik || "-"}</strong>
      </div>

    </div>

    <div class="kondisi-box">
      <strong>Kondisi</strong>
      ${item.kondisi || "-"}
    </div>

    <div class="prospek-box">
      <strong>Prospek</strong>
      ${item.prospek || "-"}
    </div>

    <div class="point-box">
      <strong>Poin Penting</strong>
      ${item.point || "-"}
    </div>
  `;

}


/* ---------- TAMPILAN KOSONG ---------- */

function renderEmpty() {

  container.innerHTML = "";

  pagination.innerHTML = "";

  const box = document.createElement("div");

  box.className = "no-result";

  const message = document.createElement("p");

  message.textContent =
    `Tidak ada properti untuk "${searchInput.value.trim()}".`;

  const button = document.createElement("button");

  button.type = "button";

  button.textContent = "Hapus pencarian";

  button.onclick = clearSearch;

  box.appendChild(message);

  box.appendChild(button);

  container.appendChild(box);

}


/* ---------- RENDER PROPERTI ---------- */

function renderPage(page) {

  if (filtered.length === 0) {

    renderEmpty();

    return;

  }

  container.innerHTML = "";

  const start = (page - 1) * itemsPerPage;

  const end = start + itemsPerPage;

  filtered.slice(start, end).forEach((item, index) => {

    const card = document.createElement("div");

    card.className = "property-card";

    card.innerHTML = `
      <div class="thumbnail-wrapper">

        <img
          src="${item.thumbnail}"
          alt="${item.judul}"
          loading="lazy"
        >

      </div>

      <div class="property-content">

        <h3>${item.judul}</h3>

        <div class="price">${item.harga}</div>

        ${generateDetail(item)}

        <div class="btn-row">

          <a
            href="${item.video}"
            target="_blank"
            rel="noopener noreferrer"
            class="video-btn"
          >▶ Lihat Video</a>

          <a
            href="https://wa.me/6287737447313?text=${encodeURIComponent("Saya tertarik dengan properti: " + item.judul)}"
            target="_blank"
            rel="noopener noreferrer"
            class="whatsapp-btn"
          >Hubungi WhatsApp</a>

        </div>

      </div>
    `;

    container.appendChild(card);

    setTimeout(() => {

      card.classList.add("show");

    }, 100 * index);

  });

  renderPagination();

}


/* ---------- PAGINATION ---------- */

function renderPagination() {

  pagination.innerHTML = "";

  const totalPages = Math.ceil(
    filtered.length / itemsPerPage
  );

  for (let i = 1; i <= totalPages; i++) {

    const button = document.createElement("button");

    button.innerText = i;

    button.className = "page-btn";

    if (i === currentPage) {

      button.classList.add("active");

    }

    button.onclick = () => {

      currentPage = i;

      renderPage(i);

      document.getElementById("property").scrollIntoView({

        behavior: "smooth",

        block: "start"

      });

    };

    pagination.appendChild(button);

  }

}


/* ---------- INISIALISASI ---------- */

searchClear.hidden = true;

renderPage(currentPage);
