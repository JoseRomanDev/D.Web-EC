const DIV = document.querySelector(".container")
const botones = DIV.querySelectorAll("button")
const arrayDeBotones = Array.from(botones);
const clickEvent = () => alert("Click Event")
const mouseEnter = () => alert("Mouse Enter");
const onMouseUp = () => alert("Mouse Up");
const mouseLeave = () => alert("Mouse Leave")
const mouseOver = ()=>{
    arrayDeBotones[4].className = "btn btn-danger"
}
const mouseOut = () =>{
    arrayDeBotones[4].className = "btn btn-warning"
}
const bgChange = () =>{
    document.body.style.backgroundColor = "red"
}
const bgBase = () => {
    document.body.style.backgroundColor = "white"
}
const allBlck = () => {
     arrayDeBotones.forEach(boton => {
        boton.className = "btn btn-dark"
    })
}


arrayDeBotones[0].addEventListener("click", clickEvent);
arrayDeBotones[1].addEventListener("mouseenter", mouseEnter);
arrayDeBotones[2].addEventListener("mouseup", onMouseUp);
arrayDeBotones[3].addEventListener("mouseleave",mouseLeave);
arrayDeBotones[4].addEventListener("mouseover",mouseOver)
arrayDeBotones[4].addEventListener("mouseout",mouseOut)
arrayDeBotones[5].addEventListener("click",bgChange);
arrayDeBotones[6].addEventListener("click", bgBase);
arrayDeBotones[7].addEventListener("click", allBlck);
arrayDeBotones[7]
