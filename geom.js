class Rectangle {
  //constructor take a length and width
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  // method isSquare
  isSquare(){
     return this.length === this.width;
  }
  // calculatesArea method
  calculatesArea(){
       return this.length*this.width;
  }
//calculates the perimeter of the rectangle
  calculatesPerimeter(){
     return (2*this.length)+(2*this.width);
  }
}// end class rectangle

// Triangle
class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  // method isEquilateral() return true if al side equal
  isEquilateral(){
    return this.sideA === this.sideB === this.sideC;//return 
  }
  // true if at least tow side is equal
  isIsosceles(){
     return this.sideA === this.sideB || this.sideB=== this.sideC||this.sideA === this.sideC;
  }
  // method calculatesArea
  calculatesArea(){
     let s=(this.sideA+this.sideB+this.sideC)/2; // assign the semi-perimeter of the triangle
     return Math.sqrt((s*(s-this.sideA))*(s-this.sideB)*(s-this.sideC));// return area
  }

  //check sideA^2 + sideB^2 less than sideC^2
  isObtuse(){
    return (Math.pow(this.sideA,2)+Math.pow(this.sideB,2)) < (Math.pow(this.sideC,2));//return true or false
  }
}


class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  // calculate the distance between two points
  length(){
    return Math.sqrt((Math.pow(this.x1-this.x2,2))+(Math.pow(this.y1-this.y2,2)));
  }
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
