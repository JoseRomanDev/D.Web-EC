document.body.classList = "p-3 m-0 border-0 bd-example";

const CLASSES = [
    "list-group-item list-group-item-action",
    "list-group-item list-group-item-action list-group-item-primary",
    "list-group-item list-group-item-action list-group-item-secondary",
    "list-group-item list-group-item-action list-group-item-success",
    "list-group-item list-group-item-action list-group-item-danger",
    "list-group-item list-group-item-action list-group-item-warning",
    "list-group-item list-group-item-action list-group-item-info",
    "list-group-item list-group-item-action list-group-item-light",
    "list-group-item list-group-item-action list-group-item-dark",
];

CLASSES.forEach((classes) => {
let a = document.createElement("a");
a.href = "#";
a.classList = classes;
a.textContent = "A simple default list group item"
})

document.body.append(a);