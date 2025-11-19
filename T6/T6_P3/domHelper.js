import { fetchCarDataMakers } from "./apiServices.js";

let previousRadio = null; // <-- para que anteriormente no exista un radio seleccionado


const newLabel = (className) => {
    const label = document.createElement("label");
    label.className = className;
    return label;
}

const newInput = (name) => { 
    const input = document.createElement("input");
    input.type = "radio";
    input.name = name;
    input.value = name.toLowerCase();
    return input;
}

const newSpan = (text) => {
    const span = document.createElement("span");
    span.textContent = text;
    return span;
}

const newCard = (car) =>{
    const card = document.createElement("div");
    card.className = "card";
    const cardHeader = document.createElement("div");
    cardHeader.className = "card-header";
    const h3 = document.createElement("h3");
    h3.textContent = `Fabricante: ${car.make}`;
    h3.className = "card-title";
    const pHeader = document.createElement("p");
    pHeader.textContent = `Modelo: ${car.model}`;
    pHeader.className = "card-description";
    const cardContent = document.createElement("div");
    cardContent.className = "card-content";
    const pContent = pHeader.cloneNode();
    pContent.textContent = `Tipo: ${car.type}`;

    cardHeader.append(h3,pHeader);
    cardContent.appendChild(pContent);
    card.append(cardHeader,cardContent);

    return card;
}

const newRadioSelected = (newRadio) => {
if(previousRadio && previousRadio !== newRadio){
    previousRadio.checked = false;
}
previousRadio = newRadio;
const cardsGridContainer = document.querySelector(".card-grid")
cardsGridContainer.innerHTML = "";

fetchCarDataMakers(newRadio.value).then((data) =>{
    data.forEach(card => {
        cardsGridContainer.appendChild(newCard(card))
    });
});
}

export const containerRadioGroup = (make, cardsGrid) =>{
    const container = document.createElement ("div");
    container.className = "radio-group"
    make.forEach((make,index) =>{
        const label = newLabel("radio-label");
        const input = newInput(make);
        if(index === 0){
            input.checked = true;
            previousRadio = input;
            setTimeout(()=>{
                fetchCarDataMakers(input.make).then((data)=>{
                    data.forEach(card=>{
                        cardsGrid.appendChild(newCard(card));
                    });
                });
            }, 1000);
        }
        input.addEventListener("change", () => newRadioSelected(input));
        const span = newSpan(make);
        label.append(input,span);
        container.appendChild(label);
    });
    return container;
}