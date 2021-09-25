const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");
const TODOS_KEY = "toDo";
let toDos = [];
const saveToDos = localStorage.getItem(TODOS_KEY);

todoForm.addEventListener("submit", handletodoSubmit);

function deleteToDo(event) {
  const delTarget = event.target.parentElement;
  delTarget.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(delTarget.id));
  saveToDo();
}

function addTodo(newTodo) {
  const todoPar = document.createElement("div");
  const todoBox = document.createElement("li");
  todoBox.id = newTodo.id;
  const todo = document.createElement("span");
  todo.innerText = newTodo.text;
  const delButton = document.createElement("button");
  todoList.appendChild(todoPar);
  todoPar.appendChild(todoBox);
  todoBox.appendChild(todo);
  todoBox.appendChild(delButton);
  delButton.addEventListener("click", deleteToDo);
  delButton.innerText = "💥";
}

function handletodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  const newTodoOBJ = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoOBJ);
  saveToDo();
  addTodo(newTodoOBJ);
  todoInput.value = ""; //Enter입력시 input값이 비워짐
}

function saveToDo(item) {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  //JSON.stringify 값을 String타입으로 변환
  //JSON.parse String값을 배열로 변환
}

if (saveToDos !== null) {
  const parseToDos = JSON.parse(saveToDos);
  toDos = parseToDos;
  parseToDos.forEach(addTodo);
}
