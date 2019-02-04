class Rectangle {
  constructor(lenght, width) {

    this.lenght = lenght;
    this.width = width;

  }
  isSquare() {

    if (this.lenght === this.width)
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

tri.isSquare();
tri.area(); // supposed to return 50 but instead it returned NaN 
tri.perimeter();// NaN





class Triangle {
  constructor(sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral() {

    if (this.sideA === this.sideB && this.sideB === this.sideC) {
      return true;
    } else { return false; }
  }


  isIsosceles() {
    if (this.sideA === this.sideB || this.sideB === this.sideC)
      return true;
  }
  area() {
    return this.sideC * this.sideA / 2
  }
  isObtuse() {
    if (this.sideA || this.sideB || this.sideC > 90) // was not so clear 
      return true;
  }

  let tri = new Triangle(4, 2, 2)
tri.isEquilateral();
tri.isIsosceles();
tri.area();// NaN 
tri.isObtuse();// 



class LineSegment {
  constructor(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;

  }
  length() {
    return Math.sqrt((x1 - x2) + (y2 - y1)) // I tried googling but it did not work ;(
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
