class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  //isSquare - returns true if the rectangle is a square
  isSquare(){
    if (this.width===this.length){
      return true;
    }
    else {
      return false;
    }
  }

// area - calculates the area of the rectangle.

area(){
  return this.width*this.length;
}
// perimeter - calculates the perimeter of the rectangle.

perimeter(){
  return 2*(this.width+this.length);
}
}
// Create a few rectangles with different lengths and widths.
const rectangle1= new Rectangle(10,5);
const rectangle2= new Rectangle(4,5);
const rectangle3= new Rectangle(2,6);










class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  // isEquilateral - returns true if the triangle is equilateral.
  isEquilateral(){
    if ( this.sideA === this.sideB && this.sideB === this.sideC){
      return true;
    }
    else{
      return false;
    }
  }

  // isIsosceles - return true if the triangle is isosceles.
  isIsosceles(){
    if ( this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC ){
      return true;
    }
    else{
      return false;
    }
  }
  // area - calculates the area of the Triangle.
  area(){
    var s=0.5*( this.sideA + this.sideB +this.sideC)
    return Math.sqrt(s*(s-this.sideA)*(s-this.sideB)*(s-this.sideC));
  }
  // isObtuse - returns true if the triangle is obtuse.


}
trinangle1 =new Triangle(2,3,4);

class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  //length – calculates the length of the (x1, y1) --> (x2, y2) line segment.

  lineLength(){
    var point1= Math.pow( this.y1 -  this.y2 , 2);
    var point2= Math.pow( this.x1 -  this.x2 , 2);
    return Math.sqrt(point1+point2);

  }
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
