import Book from './book.js';

describe("OOP Books", () => {

  it("should gets title, author and published for La vida del lazarillo de Tormes", () => {
    const firstbook= new Book("La vida del lazarillo de Tormes", "Anonymous", "1554");
    expect(firstbook.getTitle()).toBe("La vida del lazarillo de Tormes");
    expect(firstbook.getAuthor()).toBe("Anonymous");
    expect(firstbook.getPublished()).toBe("1554");
  });

  it("should gets title, author and published for The NeverEnding Story", () => {
    const secondbook= new Book("The NeverEnding Story", "Michael Ende", "1984");
    expect(secondbook.getTitle()).toBe("The NeverEnding Story");
    expect(secondbook.getAuthor()).toBe("Michael Ende");
    expect(secondbook.getPublished()).toBe("1984");
  });

  it("should gets title, author and published for The Lord of the Rings", () => {
    const thirdbook = new Book("The Lord of the Rings", "J. R. R. Tolkien", "1954");
    expect(thirdbook.getTitle()).toBe("The Lord of the Rings");
    expect(thirdbook.getAuthor()).toBe("J. R. R. Tolkien");
    expect(thirdbook.getPublished()).toBe("1954");
  });

  it("should gets title, author and published for Beowulf", () => {
    const fourthbook = new Book("Beowulf", "Anonymous", "900");
    expect(fourthbook.getTitle()).toBe("Beowulf");
    expect(fourthbook.getAuthor()).toBe("Anonymous");
    expect(fourthbook.getPublished()).toBe("900");
  });

});