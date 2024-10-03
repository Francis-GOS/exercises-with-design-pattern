import Book from "./book";

export default class Library {
    books: Book[];
    constructor() {
        this.books = [];
    }
    addBook(book: Book): void {
        this.books.push(book);
    }
    removeBook(title: string): void {
        this.books = this.books.filter((book) => book.title !== title);
    }
}
