let obj = {};
let obj1 = {};
// let pict = document.getElementById("pict");

fetch("https://api.data.metro.tokyo.lg.jp/v1/CulturalProperty?limit=1000")
  .then(response => response.json())
  .then(data => {
    obj = data;
    obj1 = obj[0];
    console.log(data)
  })