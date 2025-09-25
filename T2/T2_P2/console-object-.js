/*const paragrahp = document.createElement('p')
paragrahp.textContent = "Welcome to the aplication!"
document.body.appendChild(paragrahp)*/

//const arr =["John","Jane","Bob"];

console.log("%c Welcome to the application!","font-size:18px; font-weight:bold;color:blue;");
console.log("%c This is an informational message.", "font-size:16px;color:green;");
console.warn("%c This is a warning. Be cautious.","font-size:16px;");
console.error("%c Error! Something went wrong.","font-size:16px;");
console.table([
    {Name:"John", Age:30, City: "New York"},
    {Name:"Jane", Age:25, City: "San Diego"},
    {Name:"Bob", Age:40, City: "Chicago"},
]);
