let products = JSON.parse(localStorage.getItem("products")) || [
  {
    id:1,
    title:"Tanah Kavling Strategis",
    location:"Sleman, Yogyakarta",
    landSize:120,
    price:"450.000.000",
    legal:"SHM",
    image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    youtube:"https://www.youtube.com/embed/dQw4w9WgXcQ",
    description:"Tanah siap bangun, akses mobil, dekat pusat kota dan kawasan berkembang."
  }
];

function saveData(){
  localStorage.setItem("products", JSON.stringify(products));
}
