const properties=[


{
judul: "Tanah Samping Air Terjun Surodipo Berada Di Kaki Gunung Prau, Luas 3034m² Dekat Dieng, Gn. Sindoro",
lokasi: "Tawangsari, Kecamatan Wonoboyo, Kabupaten Temanggung, Jawa Tengah",
luas: "3034m²",
mdpl: "1200 Mdpl",
harga: "Rp. 550.000.000 (Net)",
thumbnail: "https://i.ytimg.com/vi/JToiUcUsAN8/maxresdefault.jpg",
video: "https://youtu.be/JToiUcUsAN8",
sertifikat: "SHM (Sertifikat Hak Milik)",
muka: "Menempel sungai sekitar 80 meter dan berbatasan langsung dengan area Air Terjun Surodipo",
akses: "Akses jalan kaki (tersedia opsi sewa/beli lahan parkir di depan)",
air: "Tersedia mata air alami",
listrik: "PLN Tersedia",
lingkungan: "Asri dengan pemandangan pegunungan (Gunung Prau, Sindoro, Sumbing), perkebunan kopi, sayur, dan hutan bambu",
kondisi: "Kontur bervariasi (datar dan tebing/lembah), tanah sangat subur dengan aura tenang",
prospek: "Cocok untuk Private Villa, Kabin Panggung (Glamping), Tempat Meditasi/Yoga, atau Wisata Eksklusif",
point: "Lokasi unik menempel Air Terjun Surodipo, debit air stabil, dekat ikon wisata internasional (Dieng, Sikunir, Borobudur), area konservasi.",
},

{
judul: "Langka Banget! Tanah Luas 1671m² Mangku Jalan Provinsi Ada Air Terjun Alami Cocok Wisata & Villa",
lokasi: "Banyunganti, Jatimulyo, Girimulyo, Kulon Progo, D.I. Yogyakarta (Jogja Barat)",
luas: "1.671 m² (Lahan Atas 936 m² & Lahan Bawah 735 m²)",
mdpl: "575-640",
harga: "Rp 450.000.000 (Nett)",
thumbnail: "https://img.youtube.com/vi/r4rwoht8lo0/maxresdefault.jpg",
video: "https://youtu.be/r4rwoht8lo0",
sertifikat: "SHM (2 sertifikat/2 bidang)",
muka: "Mangku jalan provinsi lebar ± 13 meter",
akses: "Pinggir jalan raya provinsi, sangat lebar dan mobil berpapasan lancar",
air: "Tersedia air pegunungan yang jernih dan mengalir deras sepanjang tahun",
listrik: "PLN Tersedia",
lingkungan: "Tenang, alami, asri, sejuk khas pegunungan Menoreh",
kondisi: "Tanah berkontur perbukitan alami, ada air terjun pribadi, sungai kecil, serta kebun kopi, cengkeh, dan durian",
prospek: "Potensial untuk wisata alam, resto/cafe, villa/resort glamping mewah",
point: "Menempel langsung dengan air terjun alami, 1 km ke Ekowisata Sungai Mudal, 17 km ke Bandara YIA, 27 km ke pusat kota Jogja",
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
<span>Status Sertifikat</span>
<strong>${item.sertifikat}</strong>
</div>

<div class="detail-item">
<span>Luasan</span>
<strong>${item.luas}${item.mdpl ? ` | ${item.mdpl} mdpl` : ""}</strong>
</div>

<div class="detail-item">
<span>Muka Tanah</span>
<strong>${item.muka}</strong>
</div>

<div class="detail-item">
<span>Lokasi</span>
<strong>${item.lokasi}</strong>
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
Prospek: ${item.prospek}
</div>

<div class="point-box">
Point Penting: ${item.point}
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
