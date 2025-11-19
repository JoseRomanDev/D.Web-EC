import Person from "./classes/Person";
export const objectParseToStr = (people) =>{
    return new Promise((resolve,reject) =>{
        if(
            people == null ||
            people === undefined ||
            Object.keys(people).length === 0
        )
        reject("Problems with the L.O people");
        else{
            let arrayPerson = Object.values(people).map((person) =>{
                let newPerson = new Person(person.name, person.age);
                return newPerson;
            });
            resolve(arrayPerson);
        }
    });   
}
