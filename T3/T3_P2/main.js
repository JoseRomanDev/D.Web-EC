//Obtener el titulo y pintarlo en las DevTools

let titulo = document.getElementById("titulo");
console.log(titulo.textContent);

//Obtener Parrafo 1 y 2 y pintarlo en las DevTools

//let contenedor = document.getElementById("contenedor");
let parrafo = document.getElementsByClassName("parrafo");

for(i = 0; i < parrafo.length;i++){
console.log(parrafo[i].textContent);
};


//Obtener Nombre y Apellido y pintarlo en las DevTools
let nombre = document.getElementsByName("nombre");
let apellido = document.getElementsByName("apellido");

console.log(nombre[0].placeholder);
console.log(apellido[0].placeholder);

//Obtener Elemento 1,2,3 y pintarlo en DevTools
let elemento = document.getElementsByTagName("li")
for(i = 0;i < elemento.length; i++){
    console.log(elemento[i].textContent);
}

//Obtener titulo de pagina por QuerySelector

let newtitulo = document.querySelector("#titulo");
console.log(newtitulo.textContent);


//Obtener Parrafo 1 y 2 por QuerySelectorAll

let newparrafo = document.querySelectorAll(".parrafo");
for(i = 0; i< newparrafo.length; i++){
    console.log(newparrafo[i].textContent)
}
