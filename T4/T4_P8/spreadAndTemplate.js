//** spread operator **//

export const mergeArrays = (array1, array2) => {
    return array3 = [...array1, ...array2];
};

export const mergeObject = (obj1, obj2) => {
    return mergedObject = [...obj1, ...obj2]; 
};

//** String templates **//

export const concatInfoPerson = (name, age, place) => {
     let text = `${name} tiene ${age} y vive en ${place}.`
     return text;
};

//"Pedro tiene 25 años y vive en Madrid"
//"Ana tiene 30 años y vive en Barcelona"

export const generateInvoice = (producto, precio, cantidad) => {
let text = `Producto: ${producto}, Precio unitario: ${precio}, Cantidad: ${cantidad}, Total a pagar: ${precio * cantidad}.`
return text;
};

// `Producto: Ordenador, Precio unitario: 1000€, Cantidad: 2, Total a pagar: 2000€`
// `Producto: Ratón, Precio unitario: 10€, Cantidad: 3, Total a pagar: 30€`
