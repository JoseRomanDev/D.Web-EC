let person = {
  name: "John",
  surname: "Doe",
  country: "USA",
  age: 32,
  getAge: function () {
    return this.age;
  },
  address: {
    street: "C/ Larios",
    number: 25,
    "c.p": 29785,
  },
};

export default class Person {
    #name;
    #surname;
    country;
    age;
    address;

constructor(name, surname, country, age, address) {
    this.#name = name;
    this.#surname = surname;
    this.country = country;
    this.age = age;

    
    this.address = {
      street: address.street,
      number: address.number,
      cp: address["c.p"],
    };
}

    get name() {
        return this.#name;
    }
    set name(newName) {
        this.#name = newName;
    }

    get surname() {
        return this.#surname;
    }
    set surname(newSurname) {
        this.#surname = newSurname;
    }

    
    get street() {
        return this.address.street;
    }
    set street(newStreet) {
        this.address.street = newStreet;
    }
    
    get number() {
        return this.address.number;
    }
    set number(newNumber) {
        this.address.number = newNumber;
    }

    get cp() {
        return this.address.cp;
    }
    set cp(newCp) {
        this.address.cp = newCp;
    }
}

export { person };