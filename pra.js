let obj = {};
let obj1 = {};

fetch("https://api.data.metro.tokyo.lg.jp/v1/CulturalProperty?limit=1000")
  .then(response => response.json())
  .then(data => {
    obj = data;
    obj1 = obj[0];
    console.log(data)
  })

document.getElementById("demo").innerHTML=this.data;
