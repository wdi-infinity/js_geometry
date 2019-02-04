class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  area() {
    console.log(this.width * this.length);
  }
}
let square = new Rectangle(10, 10);




class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  area(){
    console.log(this.sideA, this.sideB, this.sideC);
  }
}
let equilateral = new Triangle()
let isosceles = new Triangle()
let obtuse = new Triangle()


class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}