class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare() {
    return this.length === this.width ; 
  }
  area(){
    return this.length*this.width
  }
  perimeter(){
    return 2*this.length + this.width*2
  }
}



class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral(){
    return this.sideA === this.sideB === this.sideC ;
  }
  isIsosceles(){
    return this.sideA === this.sideB || this.sideB === this.sideC || this.sideA === this.sideC ;
  }
  area(){
    let a = (sideA+ sideB + sideC)/2;
let area =  Math.sqrt(a*((a-this.sideA)*(a-this.sideB)*(a-this.sideC)));
console.log(area) ;
  }
  Obtuse(){
    return this.sideA === this.sideB && this.sideA !== this.sideC || 
           this.sideA === this.sideB && this.sideB !== this.sideC ||
           this.sideA === this.sideC && this.sideA !== this.sideB ||
           this.sideA === this.sideC && this.sideC !== this.sideB ||
           this.sideB === this.sideC && this.sideC !== this.sideA ||
           this.sideB === this.sideC && this.sideB !== this.sideA  
  }
}


class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  LineSegment(){
  return (this.y2 - this.y1) / (this.x2 - this.x1);
  }
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}


