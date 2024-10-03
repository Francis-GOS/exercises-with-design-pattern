export default class Shape {
    shapes: Shape[];
    constructor(shapes: Shape[]) {
        this.shapes = shapes;
    }

    calculateArea(): number {
        let total = 0;
        this.shapes.forEach((shape) => {
            total += shape.calculateArea();
        });
        return total;
    }
}
