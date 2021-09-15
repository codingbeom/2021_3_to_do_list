const images = ["1.jpg", "2.webp", "3.webp"];
const randImg = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url('img/${randImg}')`;
