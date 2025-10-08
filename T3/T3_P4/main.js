/**
 * Show an alert immediately and store the return value (alerts return undefined).
 * @type {void}
 */
let alert = window.alert("This is an alert message, click me to move on !!!");

/**
 * Ask for confirmation and store boolean true/false depending on user choice.
 * @type {boolean}
 */
let confirm = window.confirm("Show me in an alert if u clicked on ok or false");

//let confirm_value = (confirm) ? "You clicked on true click me to move on" : "You clicked on false click me to move on";

/**
 * Show different alerts depending on the confirmation result.
 */
if(confirm == true){
    /**
     * Alert shown when user clicked OK/true.
     * @type {void}
     */
    let Talert = window.alert("You clicked on true click me to move on");
} else{
    /**
     * Alert shown when user clicked Cancel/false.
     * @type {void}
     */
    let Falert = window.alert("You clicked on false click me to move on")
}

/**
 * Prompt the user for some text. Result is string or null if cancelled.
 * @type {(string|null)}
 */
let Newprompt = window.prompt("Show me in an alert the typed message", "Type Something")

/**
 * Show an alert with the typed input (Newprompt may be null).
 * @type {void}
 */
let promptAlert = window.alert("you typed " + Newprompt + " click me to kove on!!!" )

////
/**
 * Default alert message used in examples.
 * @constant {string}
 */
const ALERT_MESSAGES = "This is an alert message, click me to move on !!!";
/**
 * Confirmation message shown when asking user to confirm.
 * @constant {string}
 */
const CONFIRM = "Show me in an alert if u clicked on ok or false";
/**
 * Message shown when confirmation is true.
 * @constant {string}
 */
const TRUE_ALERT = "You clicked on true click me to move on";
/**
 * Message shown when confirmation is false.
 * @constant {string}
 */
const FALSE_ALERT = "You clicked on false click me to move on";
/**
 * Prompt question shown to the user.
 * @constant {string}
 */
const PROMPT = "Show me in an alert the typed message";
/**
 * Placeholder text used in prompt input.
 * @constant {string}
 */
const PLACEHOLDER = "Type Something";
/**
 * Value entered by the user in the prompt; may be string or null.
 * @type {(string|null)}
 */
let prompt_value = prompt(PROMPT, PLACEHOLDER);
/**
 * Alert message composed from the prompt result.
 * @constant {string}
 */
const PROMP_ALERT = "You Typed" + prompt_value  + " click me to kove on!!!";
////