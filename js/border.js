const borderColors = [
  "rgba(255,0,0,0.6)",
  "rgba(0,255,0,0.6)",
  "rgba(0,0,255,0.6)",
  "rgba(1,0,0,0.6)",
  "rgba(255,0,255,0.6)",
];
const randomColor =
  borderColors[Math.floor(Math.random() * borderColors.length)];
const userBox = document.querySelector("#user-name");
const userBox2 = document.querySelector("#user-date");

userBox.style.backgroundColor = `${randomColor}`;
userBox2.style.backgroundColor = `${randomColor}`;
