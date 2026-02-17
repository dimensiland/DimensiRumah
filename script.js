const properties=[

{
judul:"Villa Dekat Candi Prambanan Dan Exit Tol Jogja, Madhava Prambanan, Harga Mulai Dari 395 Juta!",
lokasi:"Jl. Sesek, Rejoso, Kec. Jogonalan, Kabupaten Klaten, Jawa Tengah 57452",
luas:"72 - 88 m²",
harga:"Rp 395.000.000",
thumbnail:"VillaMadhava.jpg",
video:"https://youtu.be/UKibhZLzA6Y"
},

{
judul:"Jual Tanah Hutan Durian Di Magelang Luas 6050m² Harga 450Juta!!! Sudah Banyak Pohon Durian Besar",
lokasi:"Growong, Kabupaten Magelang, Jawa Tengah",
luas:"6050 m²",
harga:"Rp 450.000.000",
thumbnail:"Growong6050.jpg",
video:"https://youtu.be/kfGf5Qff894"
},

{
judul:"Tanah 3180m² Murah 250rb/m² Dekat Jalur Luna Maya Kulonprogo Jogja Di Daerah Wisata Kuliner & Villa",
lokasi:"Pendoworejo, Kulon Progo Regency, Special Region of Yogyakarta",
luas:"3180 m²",
harga:"Rp 250.000/m²",
thumbnail:"Pendoworejo3180.jpg",
video:"https://youtu.be/al9ccrWuQsg"
}

];



const itemsPerPage=10;
let currentPage=1;

const container=document.getElementById("property-list");
const pagination=document.getElementById("pagination");



function generateArticle(item){

return `

<div class="article">

<p><strong>Saat sebagian orang masih mencari, investor yang lebih dulu bergerak sudah mengamankan aset di ${item.lokasi}.</strong></p>

<p>
Perkembangan kawasan ini menunjukkan potensi kenaikan nilai yang kuat.
Ketersediaan lahan semakin terbatas sementara permintaan terus meningkat.
</p>

<p>
Dengan luas ${item.luas}, properti ini memberikan fleksibilitas sebagai hunian, villa, maupun aset investasi.
</p>

<p>
Investor berpengalaman memahami bahwa keputusan terbaik sering diambil sebelum harga meningkat signifikan.
</p>

<p><strong>Peluang ini tersedia hari ini — dan dapat berubah seiring waktu.</strong></p>

</div>

`;

}



function renderPage(page){

container.innerHTML="";

const start=(page-1)*itemsPerPage;
const end=start+itemsPerPage;

const pageItems=properties.slice(start,end);

pageItems.forEach((item,i)=>{

const card=document.createElement("div");

card.className="property-card";

card.innerHTML=`

<div class="thumbnail-wrapper">
<img src="${item.thumbnail}">
</div>

<div class="property-content">

<h3>${item.judul}</h3>

<div class="location">${item.lokasi}</div>

<div>Luas: ${item.luas}</div>

<div class="price">${item.harga}</div>

${generateArticle(item)}

<a href="${item.video}" target="_blank" class="video-btn">
▶ Lihat Video Properti
</a>

<a href="https://wa.me/6287737447313?text=Saya tertarik dengan properti: ${item.judul}" target="_blank" class="whatsapp-btn">
Hubungi via WhatsApp
</a>

</div>

`;

container.appendChild(card);

setTimeout(()=>{
card.classList.add("show");
},100*i);

});

renderPagination();

}



function renderPagination(){

pagination.innerHTML="";

const totalPages=Math.ceil(properties.length/itemsPerPage);

for(let i=1;i<=totalPages;i++){

const btn=document.createElement("button");

btn.innerText=i;
btn.className="page-btn";

if(i===currentPage)
btn.classList.add("active");

btn.onclick=()=>{
currentPage=i;
renderPage(i);
window.scrollTo({top:0,behavior:"smooth"});
};

pagination.appendChild(btn);

}

}



renderPage(currentPage);
