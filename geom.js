class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  isSquare(){
    if(this.length === this.width ){
      return true ;
    }
    else { return false;}
  }

  area(){
    var TheArea = this.length * this.width;
    return TheArea ;
  }

  perimeter(){
    var Theperimeter = 2*(this.length + this.width);
    return Theperimeter ;
  }
}


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  isEquilateral(){
   if(this.sideA === this.sideB &&  this.sideB === this.sideC){
     return true ;
   }
  }

  isIsosceles(){
  if(this.sideA === this.sideB || this.sideB === this.sideC || this.sideA === this.sideC ){
    return true;
  }
  }

  area(){
    var s = (this.sideA + this.sideB + this.sideC)/2;
    var area =  Math.sqrt(s*((s-this.sideA)*(s-this.sideB)*(s-this.sideC)));
    return area;
    }
    
  isObtuse(angle){
    if(angle >= 90){
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

  length(){
    var FindTheLength =  math.sqrt((this.x2-this.x1)*(this.x2-this.x1)+(this.y2-this.y1)*(this.y2-this.y1));
   return FindTheLength;
  }
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
