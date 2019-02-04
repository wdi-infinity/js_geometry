class Rectangle {
  constructor(lenght, width) {

    this.lenght = lenght;
    this.width = width;

  }
  isSquare() {

    return true;
  }
  area() {

    return this.length * this.width

  }
  perimeter() {

    return 2 * (this.length + this.width)

  }

}

let tri = new Rectangle(5, 10)

tri.isSquare();// returns True
tri.area(); // supposed to return 50 but instead it returned NaN 
tri.perimeter();// NaN





class Triangle {
  constructor(sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral() {
    return true;

  }
  isIsosceles() {
    return true;
  }
  area() {
    return this.sideC * this.sideA / 2
  }
  isObtuse() {
    return true;
  }

  let tri = new Triangle(4, 2, 2)
tri.isEquilateral();// True
tri.isIsosceles(); // True 
tri.area();// NaN 
tri.isObtuse();// True



class LineSegment {
  constructor(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;

  }
  length() {
    return Math.sqrt((x1 - x2) + (y2 - y1))
  }
}

let ls = new LineSegment(8, 9, 4, 3)

ls.length(); // I think I'm doing something wrong here but it can't be caught 

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
