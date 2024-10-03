import NewerPrinter from "../solution/newerPrinter";
import OldFashionedPrinter from "../solution/oldFasionPrinter";
describe('Printer Interfaces and Classes', () => {

  describe('OldFasionPrinter', () => {
    let oldPrinter;

    beforeEach(() => {
      oldPrinter = new OldFashionedPrinter();
    });
    test('print method returns correct string', () => {
      const consoleSpy = jest.spyOn(console, 'log');
      oldPrinter.print("Document 1")
      expect( oldPrinter.print).toBeInstanceOf(Object);
    });

    test('does not have scan method', () => {
      expect(oldPrinter.scan).toBeUndefined();
    });

    test('does not have fax method', () => {
      expect(oldPrinter.fax).toBeUndefined();
    });
  });

  describe('NewerPrinter', () => {
    let newerPrinter;

    beforeEach(() => {
      newerPrinter = new NewerPrinter();
    });

    test('Test print function of newerPrinter', () => {
      expect(newerPrinter.print).toBeDefined();
      newerPrinter.print("Document 1")
    });
    test('Test scan function of newerPrinter', () => {
      expect(newerPrinter.scan).toBeDefined();
      newerPrinter.scan("Document 1")
    });
    test('implements Scanner interface', () => {
      expect(newerPrinter.scan).toBeDefined();
      expect(typeof newerPrinter.scan).toBe('function');
    });

    test('does not have fax method', () => {
      expect(newerPrinter.fax).toBeUndefined();
    });
  });
});