const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

function addTodo(newTodo) {
  const todoBox = document.createElement("li");
  const todo = document.createElement("span");
  todoList.append(todoBox);
  todoBox.append(todo);
  todo.innerText = newTodo;
}

function handletodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  addTodo(newTodo);
  todoInput.value = ""; //Enter입력시 input값이 비워짐
}
todoForm.addEventListener("submit", handletodoSubmit);
