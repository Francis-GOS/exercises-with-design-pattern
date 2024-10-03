import Book from '../../solution/book';
import Library from '../../solution/library';
describe('Library functions', () => {
  let library: Library;
  let book1: Book;
  let book2: Book;
  let book3: Book;
  beforeEach(() => {
      book1 = new Book("Book 1", "Author 1", 2000);
      book2 = new Book("Book 2", "Author 2", 2005);
      book3 = new Book("Book 3", "Author 1", 2010);
      library = new Library();
      library.addBook(book1);
      library.addBook(book2);
  });
  test('addBook should add the book to the library', () => {
    library.addBook(book3);
    expect(library.books.length).toBe(3);
  });

  test('removeBook should remove the book by title from the library', () => {
    library.removeBook("Book 2")
    expect(library.books.length).toBe(1);
  });
});