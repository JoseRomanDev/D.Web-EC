import Movie  from './movie.js';
import Director  from './movie.js';
import Birth from './movie.js';

describe("Inheritance - Birth class", () =>{
it("Should gets date an place birth of Peter Jackson", () => {
const BirthInstance = new Birth(
    "31 de octubre de 1961","Pukerua Bay, Nueva Zelanda"
);
    expect(BirthInstance.date).toBer("31 de octubre de 1961");
    expect(BirthInstance.place).toBe("Pukerua Bay, Nueva Zelanda");
});
});
describe("Inheritance - Director class", () => {
it("Should gets name, nacionality and notableFilmography for Director" ,() => {
const DirectorInstance = new Director(
 "Peter Jackson","Neozelandés",["El Señor de los Anillos" , "El Hobbit", "Jink Kong"]
);
    expect(DirectorInstance.name).toBe("Peter Jackson");
    expect(DirectorInstance.nacionality).toBe("Neozelandés");
    expect(DirectorInstance.notableFilmography).toBe(["El Señor de los Anillos" , "El Hobbit", "Jink Kong"])

});
});
describe("Inheritance - Movie class", () => {
it("Should gets title, year, genre, duration, rating and synopsis for El Señor de los Anillos", () => {
const MovieInstance = new Movie("El Señor de los Anillos: La Comunidad del Anillo",2001,"Fantasía",178, 9.2, "Un hobbit llamado Frodo Baggins emprende un viaje épico para destruir el anillo malévolo y evitar que caiga en manos del Señor Oscuro");
  
    expect(MovieInstance.title).toBe("El Señor de los Anillos: La Comunidad del Anillo");
    expect(MovieInstance.year).toBe(2001);
    expect(MovieInstance.genre).toBe("Fantasía")
    expect(MovieInstance.duration).toBe(178);
    expect(MovieInstance.rating).toBe(9.2);
    expect(MovieInstance.synopsis).toBe( "Un hobbit llamado Frodo Baggins emprende un viaje épico para destruir el anillo malévolo y evitar que caiga en manos del Señor Oscuro");
});
});