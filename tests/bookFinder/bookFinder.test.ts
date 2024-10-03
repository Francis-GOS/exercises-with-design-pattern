import BookFinder from "../../solution/bookFinder";
import Book from "../../solution/book";
import Library from "../../solution/library";
describe("BookFinder", () => {
    let bookFinder: BookFinder;
    let library: Library;
    let book1: Book;
    let book2: Book;
    let book3: Book;
    beforeEach(() => {
        bookFinder = new BookFinder();
        book1 = new Book("Book 1", "Author 1", 2000);
        book2 = new Book("Book 2", "Author 2", 2005);
        book3 = new Book("Book 3", "Author 1", 2010);
        library = new Library();
        library.addBook(book1);
        library.addBook(book2);
        library.addBook(book3);
    });

    test("getBookByTitle should return the book with the given title", () => {
        const expectedBook = book1;
        const result = bookFinder.getBookByTitle(
            library.books,
            expectedBook.title
        );
        expect(result).toEqual(expectedBook);
    });

    test("getBookByTitle should return undefined if no book with the given title exists", () => {
        const result = bookFinder.getBookByTitle(
            library.books,
            "Non-existent Book"
        );
        expect(result).toBeUndefined();
    });

    test("getTotalNumberOfBooks should return the total number of books", () => {
        const expectedTotal = 3;
        const result = bookFinder.getTotalNumberOfBooks(library.books);
        expect(result).toBe(expectedTotal);
    });

    test("getBooksByAuthor should return books written by the given author", () => {
        const expectedBooks = library.books.filter(
            (book) => book.author === "Author 1"
        );
        const result = bookFinder.getBooksByAuthor(library.books, "Author 1");
        expect(result).toEqual(expectedBooks);
    });

    test("getBooksByPublicationYear should return books published in the given year", () => {
        const expectedBooks = [book2];
        const result = bookFinder.getBooksByPublicationYear(
            library.books,
            2005
        );
        expect(result).toEqual(expectedBooks);
    });
});
