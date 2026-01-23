const form = document.getElementById("productForm");
const adminList = document.getElementById("adminList");

function renderAdmin(){
  adminList.innerHTML="";
  products.forEach((p,i)=>{
    adminList.innerHTML+=`
      <div>
        <b>${p.title}</b>
        <button onclick="hapus(${i})">Hapus</button>
      </div>`;
  });
}

function hapus(i){
  products.splice(i,1);
  saveData();
  renderAdmin();
}

form.onsubmit=e=>{
  e.preventDefault();

  products.push({
    id:Date.now(),
    title:title.value,
    location:location.value,
    landSize:landSize.value,
    price:price.value,
    legal:legal.value,
    image:image.value,
    youtube:youtube.value,
    description:description.value
  });

  saveData();
  renderAdmin();
  form.reset();
};

renderAdmin();
