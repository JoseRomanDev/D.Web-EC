let movie = {
    title:"El Señor de los Anillos: La Comunidad del Anillo",
    director: {
        name:"Peter Jackson",
        nacionality: "Neozelandés",
        birth:{
            date:"31 de octubre de 1961",
            place:"Pukerua Bay, Nueva Zelanda",
        },
        notableFilmography: ["El Señor de los Anillos" , "El Hobbit", "Jink Kong"],
    
    },
    year: 2001,
    genre:"Fantasía",
    duration:178,
    rating: 9.2,
    synopsis:
        "Un hobbit llamado Frodo Baggins emprende un viaje épico para destruir el anillo malévolo y evitar que caiga en manos del Señor Oscuro"
};



export default class Movie extends Director{
    #title;
    #year;
    #genre;
    #duraction
    #rating;
    #synopsis;

    constructor(title, director, year, genre, duration, rating, synopsis){
        super(director);
        this.#title = title;
        this.#year = year;
        this.#genre = genre;
        this.#duraction = duration;
        this.#rating = rating;
        this.#synopsis = synopsis;
    }

    getTitle(){
        return this.#title;
    }
    setTitle(newTitle){
        this.#title = newTitle;
    }

    getYear(){
        return this.#year;
    }
    setYear(newYear){
        this.#year = newYear;
    }

    getGenre(){
        return this.#genre;
    }
    setGenre(newGenre){
        this.#genre = newGenre;
    }

    getDuration(){
        return this.#duraction;
    }
    setDuration(newDuration){
        this.#duraction = newDuration
    }

    getRating(){
        return this.#rating;
    }
    setRating(newRating){
        this.#rating = newRating;
    }

    getSynopsis(){
        return this.#synopsis;
    }
    setSynopsis(newSynopsis){
        this.#synopsis = newSynopsis;
    }
}

 class Director extends Birth{
 #name;
 #nacionality;
 #notableFilmography;

 constructor(date,place,name,nacionality,notableFilmography){
    super(date,place)
    this.#name = name;
    this.#nacionality = nacionality;
    this.#notableFilmography = notableFilmography;
 }
 getName(){
    return this.#name;
 }
 setName(newName){
    this.#name = newName;
 }

 getNacionality(){
    return this.#nacionality;
 }
 setNacionality(newNacionality){
    this.#nacionality = newNacionality;
 }

 getNotableFilmography(){
    return this.#notableFilmography;
 }
 setNotableFilmography(newNotableFilmography){
    this.#notableFilmography = newNotableFilmography; 
}
}

class Birth{
#date;
#place;
constructor(place, date){
    this.#date = date;
    this.#place = place
}

getDate(){
return this.#date;
}
setDate(newDate){
    this.#date = newDate;
}
getPlace(){
    return this.#place;
}
setPlace(newPlace){
    this.#place = newPlace;
}
}
