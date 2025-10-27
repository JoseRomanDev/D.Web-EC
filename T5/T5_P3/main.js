const DIV = document.createElement("div");
const H1 = document.createElement("h1");
H1.textContent = "The input min and max attributes";
const BR = document.createElement("br");
const P = document.createElement("p");
P.textContent = "The min and max attributes specify the minimun and maximun values fir and input element";
const FORM = document.createElement("form")
FORM.action = "/action_page.php";
const LABEL_DATE_MAX = document.createElement("label");
LABEL_DATE_MAX.for = "datemax";
LABEL_DATE_MAX.textContent = "Enter a date before 1980-01-01:";
const INPUT_DATE_MAX = document.createElement("input");
INPUT_DATE_MAX.type = "date";
INPUT_DATE_MAX.id = "datemax";
INPUT_DATE_MAX.name ="datemax";
INPUT_DATE_MAX.max="1979-12-31";
const LABEL_DATE_MIN = document.createElement("label");
LABEL_DATE_MIN.for = "datemin";
LABEL_DATE_MIN.textContent = "Enter a date after 2000-01-01:"
const INPUT_DATE_MIN = document.createElement("input");
INPUT_DATE_MIN.type="date";
INPUT_DATE_MIN.id="datemin";
INPUT_DATE_MIN.name="datemin";
INPUT_DATE_MIN.min="200-01-02";
const LABEL_QUANTITY = document.createElement("label");
LABEL_QUANTITY.for = "quantity";
LABEL_QUANTITY.textContent = "Quantity (between 1 and 5):"
const INPUT_QUANTITY = document.createElement("input");
INPUT_QUANTITY.type="number";
INPUT_QUANTITY.id="quantity";
INPUT_QUANTITY.name="quantity";
INPUT_QUANTITY.min="1";
INPUT_QUANTITY.max="5";
const BUTTON = document.createElement("input");
BUTTON.type="submit"
BUTTON.value="Submit";

document.body.append(DIV);
DIV.append(H1,BR,BR.cloneNode(),P,BR.cloneNode(),FORM)
FORM.append(LABEL_DATE_MAX,INPUT_DATE_MAX,BR,BR.cloneNode(),LABEL_DATE_MIN,INPUT_DATE_MIN,BR.cloneNode(),BR.cloneNode(),LABEL_QUANTITY,INPUT_QUANTITY,BR.cloneNode(),BR.cloneNode(),BUTTON)