class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  isSquare(){
    if(this.length === this.width ){
      return true; 
    }
  }

  calculateArea(){
    let area = this.length*this.width;
    return area; 
  }
  calculatePerimeter(){
    let perimeter = 2*(this.length+this.width);
    return perimeter; 
  }
}


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

// Equilateral Triangle:
// All three sides have equal length
// All three angles are equal to 60 degrees
  isEquilateral() {
    if(this.sideA === this.sideB && this.sideB === this.sideC){
      return true;
    }
  }
  //has two equal sides
  isIsosceles(){
    if(this.sideA === this.sideB) {
      return true;
    }
  }

  //Heron's Formula
  // I used Math.sqrt() to find the square root
  area(){
    let s = (this.sideA + this.sideB + this.sideB)/2
    let area = s*(s-this.sideA)*(s-this.sideB)*(s-this.sideC);
    return Math.sqrt(area);
  }

  isObtuse(){
    let a = Math.pow(this.sideA,2);
    let b = Math.pow(this.sideB,2);
    let c = Math.pow(this.sideC,2);
    if(c > a+b ){
      return true;
    }
  }

}


class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  calculateLength(){
    x1 = this.x1;
    x2 = this.x2;
    x3 = this.x3;
    x4 = this.x4;
    let length = Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2));
    return length;
  }
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
