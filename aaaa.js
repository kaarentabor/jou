const nupp1 = document.querySelector("#nupp")
const pilt = document.querySelector("#appi")
let img1 = ""

async function getpilt() {
  const response = await fetch('https://api.thecatapi.com/v1/images/search');
  const data = await response.json();
  console.log(data[0].url);
  img1 = data[0].url
}

nupp1.addEventListener("click", function(){
getpilt()
pilt.src = img1

})