const images = ["back1.jpg", "back2.jpg", "back3.jpg", "back4.jpg"];
const randImg = images[Math.floor(Math.random() * images.length)];

const bgImag = document.createElement("img");

bgImag.src = "img/" + randImg;
document.body.appendChild(bgImag);
