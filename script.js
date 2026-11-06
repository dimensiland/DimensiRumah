const properties=[


{
judul: "Tanah Murah 700m² View Sawah & Gunung Menoreh di Sleman | Dekat Mang Engking & Pintu Tol",
lokasi: "Plumbon, Sendangsari, Minggir, Sleman Barat, D.I. Yogyakarta",
luas: "700m²",
mdpl: "110 - 130",
harga: "Rp 395.000.000,-",
thumbnail: "Minggir700m.jpg",
video: "https://youtu.be/TxDTI_8L4QI",
sertifikat: "SHM Sawah",
muka: "20 Meter",
akses: "Berjarak sekitar 20–30 meter dari jalan aspal utama, namun jalur masuk langsung menuju lokasi saat ini masih berupa tanah/jalan eksisting (disarankan untuk dicor), Berjarak sekitar 500 meter dari jalan provinsi",
air: "Tersedia",
listrik: "PLN Tersedia",
lingkungan: "Asri dengan landscape pemandangan sawah dan Pegunungan Menoreh, Berada di lingkungan Sleman Barat yang subur, tenang, serta memiliki toleransi masyarakat yang bagus (dekat dengan tempat ibadah seperti masjid dan gereja)",
kondisi: "Tanah subur siap bangun yang saat ini ditanami pohon pisang dan kelapa",
prospek: "Sangat cocok untuk konsep slow living, tempat tinggal sekaligus kantor remote, maupun dibangun menjadi 2 unit vila sebagai aset investasi (passive income)",
point: "Memiliki pemandangan alam (view gunung & sawah) yang indah dan udara yang sangat segar, Dekat dengan pintu tol Jogja–Semarang (sekitar 7 km), Hanya 1 km dari Kantor Kecamatan Minggir, Pasar Minggir, rumah sakit, dan pom bensin, Berjarak sekitar 15 km (kurang lebih 20–30 menit) dari kawasan Malioboro, Kota Jogja",
},

//CODE DIBAWAH JANGAN DIUBAH ATAU DIUTAK ATIK 'u'
  
];


const itemsPerPage=10;
let currentPage=1;
let filtered=properties;

const container=document.getElementById("property-list");
const pagination=document.getElementById("pagination");
const searchInput=document.getElementById("property-search");
const searchClear=document.getElementById("search-clear");
const searchInfo=document.getElementById("search-info");


/* ---------- PENCARIAN ---------- */

function normalize(text){
return String(text||"")
.toLowerCase()
.replace(/²/g,"2")
.replace(/\s+/g," ")
.trim();
}

/* teks yang dicari: judul, lokasi, luas, harga, sertifikat */
const searchIndex=properties.map(item=>({
item,
text:normalize([item.judul,item.lokasi,item.luas,item.harga,item.sertifikat].join(" "))
}));

function applySearch(){

const query=normalize(searchInput.value);
const words=query.split(" ").filter(Boolean);

filtered=words.length
? searchIndex.filter(e=>words.every(w=>e.text.includes(w))).map(e=>e.item)
: properties;

currentPage=1;
searchClear.hidden=!searchInput.value;

searchInfo.textContent=words.length
? `${filtered.length} properti ditemukan untuk pencarian "${searchInput.value.trim()}"`
: "";

renderPage(1);

}

let searchTimer;

searchInput.addEventListener("input",()=>{
clearTimeout(searchTimer);
searchTimer=setTimeout(applySearch,250);
});

function clearSearch(){
searchInput.value="";
applySearch();
searchInput.focus();
}

searchClear.addEventListener("click",clearSearch);

searchInput.addEventListener("keydown",e=>{
if(e.key==="Escape") clearSearch();
});



/* ---------- DETAIL ---------- */

function generateDetail(item){

return `

<div class="detail-grid">

<div class="detail-item">
<span>Lokasi</span>
<strong>${item.lokasi}</strong>
</div>

<div class="detail-item">
<span>Ketinggian</span>
<strong>${item.mdpl ? `${item.mdpl} mdpl` : "-"}</strong>
</div>

<div class="detail-item">
<span>Akses Jalan</span>
<strong>${item.akses}</strong>
</div>

<div class="detail-item">
<span>Fasilitas Air</span>
<strong>${item.air}</strong>
</div>

<div class="detail-item">
<span>Fasilitas Listrik</span>
<strong>${item.listrik}</strong>
</div>

<div class="detail-item">
<span>Kondisi</span>
<strong>${item.kondisi}</strong>
</div>

</div>

<div class="prospek-box">
<strong>Prospek:</strong> ${item.prospek}
</div>

<div class="point-box">
<strong>Point Penting:</strong> ${item.point}
</div>

`;

}


/* ---------- RENDER ---------- */

function renderEmpty(){

container.innerHTML="";
pagination.innerHTML="";

const box=document.createElement("div");
box.className="no-result";

const msg=document.createElement("p");
msg.textContent=`Tidak ada properti untuk "${searchInput.value.trim()}".`;

const btn=document.createElement("button");
btn.type="button";
btn.textContent="Hapus pencarian";
btn.onclick=clearSearch;

box.appendChild(msg);
box.appendChild(btn);
container.appendChild(box);

}


function renderPage(page){

if(filtered.length===0){
renderEmpty();
return;
}

container.innerHTML="";

const start=(page-1)*itemsPerPage;
const end=start+itemsPerPage;

filtered.slice(start,end).forEach((item,i)=>{

const card=document.createElement("div");

card.className="property-card";

card.innerHTML=`

<div class="thumbnail-wrapper">
<img src="${item.thumbnail}" alt="${item.judul}" loading="lazy">
</div>

<div class="property-content">

<h3>${item.judul}</h3>

<div class="price">${item.harga}</div>

${generateDetail(item)}

<div class="btn-row">
  <a href="${item.video}" target="_blank" class="video-btn">▶ Lihat Video</a>

  <a href="https://wa.me/6287737447313?text=Saya tertarik dengan properti: ${encodeURIComponent(item.judul)}"
     target="_blank" class="whatsapp-btn">Hubungi WhatsApp</a>
</div>

</div>

`;

container.appendChild(card);

setTimeout(()=>card.classList.add("show"),100*i);

});

renderPagination();

}


function renderPagination(){

pagination.innerHTML="";

const totalPages=Math.ceil(filtered.length/itemsPerPage);

for(let i=1;i<=totalPages;i++){

const btn=document.createElement("button");

btn.innerText=i;

btn.className="page-btn";

if(i===currentPage)
btn.classList.add("active");

btn.onclick = () => {

  currentPage = i;

  renderPage(i);

  document.getElementById("property").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

};

pagination.appendChild(btn);

}

}


renderPage(currentPage);
