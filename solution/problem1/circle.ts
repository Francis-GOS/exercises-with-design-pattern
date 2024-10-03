import Shape from "./shape";

export default class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
      super([]);
      this.radius = radius;
  }
  calculateArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}
