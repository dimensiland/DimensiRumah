const list = document.getElementById("productList");

if(list){
  products.forEach(p=>{
    list.innerHTML += `
    <div class="card">
      <img src="${p.image}">
      <h3>${p.title}</h3>
      <p>${p.landSize} m² • ${p.location}</p>
      <p>Legalitas: ${p.legal}</p>
      <a href="detail.html?id=${p.id}">Lihat Detail</a>
    </div>`;
  });
}

const detail = document.getElementById("detail");
if(detail){
  const id = new URLSearchParams(window.location.search).get("id");
  const p = products.find(x=>x.id==id);

  detail.innerHTML = `
    <h2>${p.title}</h2>
    <img src="${p.image}">
    <p>${p.description}</p>
    <p><b>Luas:</b> ${p.landSize} m²</p>
    <p><b>Lokasi:</b> ${p.location}</p>
    <p><b>Legalitas:</b> ${p.legal}</p>
    <iframe src="${p.youtube}" width="100%" height="300"></iframe>
    <br><br>
    <a href="https://wa.me/6281234567890?text=Halo saya tertarik dengan tanah di ${p.location}" class="btn-primary">
      Chat WhatsApp Sekarang
    </a>
  `;
}
