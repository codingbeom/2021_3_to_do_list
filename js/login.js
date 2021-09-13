const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const getting = document.querySelector("#getting");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

const saveUserName = localStorage.getItem(USERNAME_KEY);

if (saveUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGetting(saveUserName);
}

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASS);
  const loginName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, loginName);
  paintGetting(loginName);
}

function paintGetting(username) {
  getting.innerText = "Hello! " + username;
  //getting.innerText = `Hello! ${username}`;
  getting.classList.remove(HIDDEN_CLASS);
}
