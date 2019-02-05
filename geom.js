class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  perimeter() {
    return ((this.length + this.width) * 2);
  }


area(){
    return this.length * this.width
  }
      isSquare() {
      if(this.length === this.width){
        return true;
      }
      else{
       return false;
      }
  }
  }
  rectangle1 = new Rectangle(11,11);
  rectangle1.isSquare();
  rectangle1.area();
  rectangle1.perimeter();

 rectangle2 = new Rectangle(1,51);
 rectangle2.isSquare();
 rectangle2.area();
 rectangle2.perimeter();

 rectangle3 = new Rectangle(4,8);
 rectangle3.isSquare();
 rectangle3.area();
 rectangle3.perimeter();


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral(){
    if(this.sideA === this.sideB && this.sideA === this.sideC )
    {
     
      console.log("sorry ,this calculater is not for Equilateral Triangle");
      return true;
    }
    else{
      console.log("you can use this calculater");
      return false;
    }
  }
  isIsosceles(){
    if((this.sideA === this.sideB && this.sideA !== this.sideC) || (this.sideC === this.sideB && this.sideA !== this.sideB) ){
      return true;
    }
    else{
      return false;
    }
  }

  isObtuse() { // this function dont work , always return falls

    if(((this.sideA *2)+(this.sideB *2) === (this.sideC *2))||((this.sideB *2)+(this.sideC *2) === this.sideA *2) ||((this.sideA *2)+(this.sideC *2) === this.sideB *2)) {
return true
    }
    else {
      return false;
    }
  }


  area() {
    return ((this.sideA + this.sideB + this.sideC) * 0.5);
  }


}
triangle1 = new Triangle(20,20,20) //after googleing I found out if the tringle is Equilateral Triangle , it will have diffrant way to calculate
triangle1.isEquilateral();
triangle1.area();

class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  length(){
    for( var x = this.x1 ; x >= this.x2 ; x++){
      this.length = x;
    }
    for(var y = this.y1 ; y >= this.y2 ; y++){
      this.length = y;
    }
  }
}
let line = new LineSegment(2,3,14,10)
line.length();
// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
