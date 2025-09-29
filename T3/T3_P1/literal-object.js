let person = {
    name: "Jose",
    surname: "Roman",
    age: 23,
    adress:{
        street:"Mi casa",
        number: 10,
    },
    fullName: function(){
        return ("Mi nombre completo es: " + this.name + this.surname)
    },
    languages:[
        "Java", "Python", "Php","C++"
    ],
}


let claves = Object.keys(person);
let values = Object.values(person);

console.log(claves);
console.log(values);