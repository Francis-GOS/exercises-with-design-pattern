import Book from "./book";


export default class BookFinder {
    getBookByTitle(books: Book[], title: string): Book | undefined {
        return books.find((book) => book.title === title);
    }

    getTotalNumberOfBooks(books: Book[]): number {
        return books.length;
    }

    getBooksByAuthor(books: Book[], author: string): Book[] {
        return books.filter((book) => book.author === author);
    }

    getBooksByPublicationYear(books: Book[], publicationYear: number): Book[] {
        return books.filter(
            (book) => book.publicationYear === publicationYear
        );
    }
}
