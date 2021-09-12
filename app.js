const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const getting = document.querySelector("#getting");

const HIDDEN_CLASS = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  const userName = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASS);
  //getting.innerText = "Hello! " + userName;
  getting.innerText = `Hello! ${userName}`;
  getting.classList.remove(HIDDEN_CLASS);
}

loginForm.addEventListener("submit", onLoginSubmit);
