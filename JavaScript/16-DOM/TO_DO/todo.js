const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const addButton = document.querySelector("#add");
const todoList = document.querySelector("#todo-list")

// console.log(form);
// console.log(todoInput);
// console.log(todoList);
// console.log(addButton);
eventListenerLoad();
function eventListenerLoad(){
    form.addEventListener("submit",() => {});
    addButton.addEventListener("click", () => {});
    todoInput.addEventListener("focus",() => {});
    todoInput.addEventListener("blur", () => {});
}

