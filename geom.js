class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  } isSquare(length, width){
    this.length = this.width;
    return true;
    console.log(isSquare);
    
  }
  area(){
    var recArea =this.width * this.length;
    console.log(recArea);
    
  }
  perimeter(){
    var parim = (this.length+this.length ) + (this.width+this.width);
    console.log(parim);
  }
}
var first=new Rectangle(4,4);
var second=new Rectangle(3,4);
var third=new Rectangle(2,2);


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral(){
    var equal=(this.sideA =this.sideB=this.sideC);
    return true;
    console.log(equal);
    
  } 
  isIsosceles(){
    var isosceles=(this.sideA=this.sideB);
    return true;
    console.log(isosceles);
    
  }
  area(){
    var triangleAre = .5 * (this.sideC) * this.sideA;
    return true;
    console.log(triangleAre);
    
  }
  obtuse(){
    var triangleObtuse=(this.sideA - this.sideC) * (this.sideB - this.sideC);
    return true ;
    console.log(triangleObtuse);
    
  }
}
var triangleFirst = new Triangle (3,3,3);
var triangleSecond = new Triangle (5,3,6);
var triangleThird = new Triangle (2,3,4);

class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  length(){
    var firstLine=Math.pow(this.x1-this.x2,2);
    var secondLine=Math.pow(this.y1-this.y2,2);
  }
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
