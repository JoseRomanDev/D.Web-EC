const books = [
  {
    title: "La vida del lazarillo de Tormes",
    author: "Anonymous",
    published: "1554",
  },
  {
    title: "The NeverEnding Story",
    author: "Michael Ende",
    published: "1984",
  },
  {
    title: "The Lord of the Rings",
    author: "J. R. R. Tolkien",
    published: "1954",
  },
  {
    title: "Beowulf",
    author: "Anonymous",
    published: "900",
  },
];

export default class Book {
    #title;
    #author;
    published;
  constructor(title, author, published) {
    this.#title = title;
    this.#author = author;
    this.published = published;
  }
  
  getTitle() { 
    return this.#title; 
  }

  getAuthor() { 
    return this.#author; 
  }

  getPublished() { 
    return this.published; 
  }

  setTitle(newTitle) {
    this.#title = newTitle;
  }

  setAuthor(newAuthor) {
    this.#author = newAuthor;
  }

  setPublished(newPublishedYear) {
    this.published = newPublishedYear;
  }

  
}