let alert = window.alert("This is an alert message, click me to move on !!!");
let confirm = window.confirm("Show me in an alert if u clicked on ok or false");

//let confirm_value = (confirm) ? "You clicked on true click me to move on" : "You clicked on false click me to move on";

if(confirm == true){
    let Talert = window.alert("You clicked on true click me to move on");
} else{
    let Falert = window.alert("You clicked on false click me to move on")
}

let Newprompt = window.prompt("Show me in an alert the typed message", "Type Something")
let promptAlert = window.alert("you typed " + Newprompt + " click me to kove on!!!" )

////
const ALERT_MESSAGES = "This is an alert message, click me to move on !!!";
const CONFIRM = "Show me in an alert if u clicked on ok or false";
const TRUE_ALERT = "You clicked on true click me to move on";
const FALSE_ALERT = "You clicked on false click me to move on";
const PROMPT = "Show me in an alert the typed message";
const PLACEHOLDER = "Type Something";
let prompt_value = prompt(PROMPT, PLACEHOLDER);
const PROMP_ALERT = "You Typed" + prompt_value  + " click me to kove on!!!";
////