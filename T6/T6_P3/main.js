import {  fetchCarMakers } from './apiServices.js';
import { containerRadioGroup } from "./domHelper.js";

let makes;

const run = async () => {
    makes = await fetchCarMakers();
    const containerRadio = document.querySelector(".radio-container")
    const radioGroup = containerRadioGroup(makes.slice(0,5), document.querySelector(".card-grid"));
    containerRadio.appendChild(radioGroup);
}
run();