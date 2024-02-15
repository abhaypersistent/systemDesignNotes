// Fly weight pattern is useful tom conserve memory when we are creating 
// large number of similar objects


// Take an exmaple of books bewfore inserting any document we should always 
// check it already exist or not

class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn =isbn;
    }
}


const books = new Map();

const createBook = (title, author, isbn) => {
    const existingBook = books.has(isbn);

    if(existingBook){
        return books.get(isbn);
    }

    const book = new Book(title, author, isbn)
    books.set(isbn, book);


    return book;
    
}

// The flyweight pattern is useful when you’re creating a huge number of objects, which could potentially drain all available RAM. It allows us to minimize the amount of consumed memory.