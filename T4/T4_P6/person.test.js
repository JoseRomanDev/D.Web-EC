import Person , {person} from './person.js';

describe("OOP Person", () => {
  it("should gets name, surname, country and age", () => {
    const personInstance = new Person(
      person.name,
      person.surname,
      person.country,
      person.age,
      person.address
    );
    
    expect(personInstance.name).toBe("John");
    expect(personInstance.surname).toBe("Doe");
    expect(personInstance.country).toBe("USA");
    expect(personInstance.age).toBe(32);
  });

  it("should sets name = Peter, surname = Jackson, country = CANADA and age 39", () => {
    const personInstance = new Person(
      person.name,
      person.surname,
      person.country,
      person.age,
      person.address
    );
    
    personInstance.name = "Peter";
    personInstance.surname = "Jackson";
    personInstance.country = "CANADA";
    personInstance.age = 39;
    
    expect(personInstance.name).toBe("Peter");
    expect(personInstance.surname).toBe("Jackson");
    expect(personInstance.country).toBe("CANADA");
    expect(personInstance.age).toBe(39);
  });
});