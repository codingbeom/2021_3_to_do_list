const colors = ["rgba(255,0,0,0.4)", "rgba(0,255,0,0.4)", "rgba(0,0,255,0.4)"];
const randColor = colors[Math.floor(Math.random() * colors.length)];

const loginBack = document.querySelector("#user-box");
loginBack.style.backgroundColor = `${randColor}`;
