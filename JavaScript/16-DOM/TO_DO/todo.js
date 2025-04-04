const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const addButton = document.querySelector("#add");
const todoList = document.querySelector("#todo-list");
const todoBody = document.querySelector("#todo-body");
const clearButton = document.querySelector("#clear");
const searcInput = document.querySelector("#search");

// console.log(form);
// console.log(todoInput);
// console.log(todoList);
// console.log(addButton);

// İLK OLUŞTURULAN YAPI
eventListenerLoad();
function eventListenerLoad(){
    form.addEventListener("submit",addToDo);
    document.addEventListener("DOMContentLoaded",loadTodosPage)
    todoBody.addEventListener("click",deleteToDo)
    clearButton.addEventListener("click",clearTodos);
    searcInput.addEventListener("keyup",searchTodo);
}


// 9
function searchTodo(e){
    const searchText = e.target.value.toLowerCase();
    const listTodoItems = document.querySelectorAll(".list-group-item");
    //console.log(listTodoItems);
    listTodoItems.forEach((item) => {
        //console.log(item.firstChild.textContent);
        const todoText = item.firstChild.textContent.toLowerCase();

        if(todoText.indexOf(searchText) === -1){
            item.setAttribute("style","display:none !important");
        }else{
            item.setAttribute("style","display:block");
        }
    })
}
// 8
function clearTodos(e){
    //console.log(todoList.firstElementChild);
    while(todoList.firstElementChild != null){
        todoList.removeChild(todoList.firstElementChild);
    }
    //localStorage.setItem("todos",JSON.stringify([]));
    localStorage.removeItem("todos");
}
// 6
function deleteToDo(e){
    //console.log(e.target);
    if(e.target.className === "fa-solid fa-trash"){
        //console.log(e.target.parentElement);
        e.target.parentElement.remove();

        deleteTodoLocalStorage(e.target.parentElement.firstChild.textContent)
    }
}
// 7
function deleteTodoLocalStorage(todo){
    let todos = getLocalStorage();
        // todos.forEach((todo,index) => {
        //     //console.log(e.target.parentElement.firstChild.textContent);
        //     if(todo === e.target.parentElement.firstChild.textContent){
        //         todos.splice(index,1);
        //     }
        // });
        // localStorage.setItem("todos",JSON.stringify(todos));
        todos = todos.filter(item => item !== todo);
        localStorage.setItem("todos",JSON.stringify(todos));
}


// 5
//Local Storageda bulunan todoları sayfada gösteren metot
function loadTodosPage(){
    let todos = getLocalStorage();

    todos.forEach((todo) => {
        createToDoHTML(todo);
    })
}
// 1
function addToDo(e){
    let newToDo = todoInput.value.trim();
    
    if(newToDo === ""){
        console.log("Boş değer girilemez...");
    }else{
        createToDoHTML(newToDo);
        addLocalStorage(newToDo);
    }
    
    e.preventDefault();
    
    //console.log(todos);

    //console.log(newToDo);

}

// 4
//local storagedan todos listesini dönen metot
function getLocalStorage(){
    let todos = localStorage.getItem("todos") 
        ? JSON.parse(localStorage.getItem("todos")) 
        : [];
    return todos;
}

// 3
//local storage üzerine todo ekleyen metot
function addLocalStorage(todo){
        let todos = getLocalStorage();
        todos.push(todo);
        //console.log(todos)
        localStorage.setItem("todos",JSON.stringify(todos));
}

// 2
//ToDo için HTML sayfasında yeni bir li elementi oluşturan metot
function createToDoHTML(todo){
    // <li class="list-group-item bg-danger text-light d-flex justify-content-between align-items-center"><span>HTML</span><i class="fa-solid fa-trash"></i></li>
    const todoItem = document.createElement("li");
    todoItem.className = "d-flex justify-content-between align-items-center";
    todoItem.classList.add("list-group-item","bg-danger","text-light");
    const todoSpan = document.createElement("span");
    todoSpan.appendChild(document.createTextNode(todo));
    todoItem.appendChild(todoSpan);
    todoItem.innerHTML += `<i class="fa-solid fa-trash"></i>`;
    todoList.appendChild(todoItem);
    todoInput.value = "";
    todoInput.focus();
}
