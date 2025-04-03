
document.addEventListener("keypress", (e) => {
    console.log(e.which,e.key,"Keypress")
})

document.addEventListener("keydown", (e) => {
    console.log(e.which,e.key,"KeyDown")
})

document.addEventListener("keyup", (e) => {
    console.log(e.which,e.key,"KeyUp")
})