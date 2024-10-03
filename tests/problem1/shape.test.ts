import Circle from "../../solution/problem1/circle";
import Rectangle from "../../solution/problem1/rectangle";
import Shape from "../../solution/problem1/shape";
import Triangle from "../../solution/problem1/triangle";
// Shape.test.js
describe('Shape Classes', () => {
  describe('Circle', () => {
    test('calculates area correctly', () => {
      const circle = new Circle(5);
      expect(circle.calculateArea()).toBeCloseTo(78.54, 2);
    });
  });

  describe('Rectangle', () => {
    test('calculates area correctly', () => {
      const rectangle = new Rectangle(4, 5);
      expect(rectangle.calculateArea()).toBe(20);
    });
  });

  describe('Triangle', () => {
    test('calculates area correctly', () => {
      const triangle = new Triangle(6);
      expect(triangle.calculateArea()).toBe(18);
    });
  });

  describe('Shape (Composite)', () => {
    test('calculates total area of multiple shapes', () => {
      const shape = new Shape([new Circle(3), new Rectangle(4, 5), new Triangle(6)]);

      const expectedArea = Math.PI * 3 ** 2 + 4 * 5 + 0.5 * 6 * 6;
      expect(shape.calculateArea()).toBeCloseTo(expectedArea, 2);
    });

    test('calculates area of nested shapes', () => {
      const innerShape = new Shape([new Circle(2), new Rectangle(3, 4)]);
      const outerShape = new Shape([innerShape, new Triangle( 6)]);

      const expectedArea = Math.PI * 2 ** 2 + 3 * 4 + 0.5 * 6 * 6;
      expect(outerShape.calculateArea()).toBeCloseTo(expectedArea, 2);
    });
  });
});