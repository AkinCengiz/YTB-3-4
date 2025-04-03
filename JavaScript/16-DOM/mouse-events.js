const buttonElement = document.getElementById("send");
const outboxElement = document.querySelector("#outbox");

// console.log(nameElement,emailElement,buttonElement)


//MOUSE EVENTS


//MouseOver ve MouseOut

buttonElement.addEventListener("mouseover",function(){
    buttonElement.classList.remove("btn-primary");
    buttonElement.classList.add("btn-success");
})
buttonElement.addEventListener("mouseout", () => {
    buttonElement.classList.remove("btn-success");
    buttonElement.classList.add("btn-primary");
})

//MouseClick

const writeText = () => {
    console.log("Mouse Click olayı tetiklendi...");
}

buttonElement.addEventListener("click",writeText)

//MouseDoubleClick
function writeDoubleText(){
    console.log("Mouse Double Click olayı tetiklendi...")
}

buttonElement.addEventListener("dblclick",writeDoubleText);

//MouseUp ve MouseDown

const mouseUpText = () => {
    console.log("Mouse Up olayı tetiklendi...")
}

function mouseDownText(){
    console.log("Mouse Down olayı tetiklendi...")
}

buttonElement.addEventListener("mouseup",mouseUpText);
buttonElement.addEventListener("mousedown",mouseDownText);

buttonElement.addEventListener("mouseenter",() => {
    console.log("Mouse Enter olayı tetiklendi...");
})

outboxElement.addEventListener("mouseenter", () => {
    console.log("Mouse Enter olayı tetiklendi...");
})
outboxElement.addEventListener("mouseleave", () => {
    console.log("Mouse Leave olayı tetiklendi...")
})
outboxElement.addEventListener("mouseover", () => {
    console.log("Mouse Over olayı tetiklendi...")
})
outboxElement.addEventListener("mouseout", () => {
    console.log("Mouse Out olayı tetiklendi...")
})