class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
 checkIsSqure(){
 this.lengh === this.width;
 return true
}
calcArea (){
    this.lenght = this.lenght *this.Width;
       
}
calcperimeter(){
this.lenght = 2*(this.length + this.width);
 }
}
  



class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral(){
  
  if(this.sideA === this.sideB === this.sideC) {

  return True
}
    
}
isIsosceles() {
if(this.sideA === this.sideB !== this.sideC){
  return True 
}
  
}



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
