// dEBES USAR QUERYSELECTORALL/QUERYSELECT PARA TODOS LOS EJERCICIOS

// Recuerar los elemntos usando la clase 'chip'
const getAllChipClass = () => {
    chip = document.getElementsByClassName("chip")
}

// Recuperar los elementos usando el tag 'p'
const getAllParagraphs = () => {
    paragraphs = document.querySelectorAll("p")
}

// Recuperar los elementos usando el tag 'li'
const getAllListItems = () => {
    list = document.querySelectorAll("li")
}

// Recuperar todas las opciones del select con id 'tema'
const getAllOptionFromThemeSelect = () => {
    tema = document.querySelectorAll("#tema option")
}

// Recuperar el input del formulario con id 'usuario'
const getUserFromForm = () => {
    user = document.querySelectorAll("input#usuario")
}

// Recuperar el input del formulario con id 'correo'
const getMailFromForm = () => {
    mail = document.querySelectorAll("input#correo")
}

// Recuperar todos los radios con name 'color'
const getAllColorRadios = () => {
    radio = document.querySelectorAll("input[type=radio")
}

// Recuperar todos los checkboxes
const getAllCheckboxes = () => {
     checkbox = document.querySelectorAll("input[type=checkbox]")
}

// Recuperar todas las opciones del select con id 'cursos'
const getAllOptionsFromCursosSelect = () => {
    courses = document.querySelectorAll("#cursos option")
}

// Recuperar el textarea con id 'bio'
const getTextArea = () => {
    textArea = document.querySelector("textarea#bio")
}


// Recuperar la opción seleccionada del select con id 'tema'
const getThemeSelectedOption = () => {
    /*theme = document.querySelector("select#tema")
    theme.options[theme.SelectedIndex].value;*/
}

// Recuperar el radio seleccionado del grupo de radios con name 'color'
const getColorSelectedRadio = () => {
}    

// Recuperar el checkbox seleccionado
const getCheckBoxSelected = () => {
}   

