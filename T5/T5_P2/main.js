
const IMG = document.createElement("img");
IMG.src = "./assets/img_la.jpg";
IMG.alt = "Imagen de prueba";
const H1 = document.createElement("h1");
H1.textContent = "This is a Heading";
const P = document.createElement("p");
P.textContent = "This is a paragraph";
const P2 = document.createElement("p");
P2.textContent = "This is another paragraph";

document.body.append(IMG,H1,P,P2);


/*document.body.appendChild(IMG);
document.body.appendChild(H1);
document.body.appendChild(P);
document.body.appendChild(P2);*/