class Shape {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  getArea() {
    return this.x * this.y;
  }
}

let rec1 = new Shape(3, 4);
console.log(rec1.getArea());

class Rectangle extends Shape {
  constructor(x, y) {
    super(x, y);
  }

  getDiagonal() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
}

let rec2 = new Rectangle(3, 4);
console.log(rec2.getDiagonal());

class Triangle extends Shape {
  constructor(x, y) {
    super(x, y);
  }
  getArea() {
    return (this.x * this.y) / 2;
  }
}

let rec3 = new Triangle(3, 4);
console.log(rec3.getArea());

class Circle extends Shape {
  constructor(x, y, radius) {
    super(x, y);
    this.radius = radius;
  }
  getArea() {
    return this.radius ** 2 * Math.PI;
  }
}

let rec4 = new Circle(4, 4, 2);
console.log(rec4.getArea());
