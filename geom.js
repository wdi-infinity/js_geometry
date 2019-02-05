class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare(){
    if(this.length === this.width){
      return "the rectangle is square"
    }
    else{
      return "it is not a square"
    }
  }
  area(){
    return this.length * this.width;
  }
  perimeter(){
    return 2(this.length + this.width);
  }
}


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral(){
    if (SideA === sideB && sideB === sideC){
      return true;
    }
    else{
      return false;
    }
  }
  isIsosceles(){
    if (sideA === sideB || sideB === sideC || sideA === sideC){
      return true
    }
    else{
      return false
    }
  }
  area(){

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



