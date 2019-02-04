class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
isSquare(){
if(this.length != this.width){
return false;
}
else {
return true;
}
}
area(){
return "Area is " + (this.length * this.width)
}

perimeter(){
return "Perimeter is " + ((this.length + this.width) * 2)
}
}

class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
isEquilateral(){
if (this.sideA ==  this.sideB  ){
if ( this.sideB == this.sideC){
return true;
}

}
else return false;
}
isIsosceles(){
if (this.sideA ===  this.sideB || this.sideB === this.sideC || this.sideA === this.sideC  ){
return true;
}
else return false;
}
isObtuse(){
if ( ( ((this.sideA * this.sideA) + (this.sideB * this.sideB) > (this.sideC * this.sideC)) || ((this.sideA * this.sideA) + (this.sideC * this.sideC) > (this.sideB * this.sideB)) || ((this.sideB * this.sideB) + (this.sideC * this.sideC) > (this.sideA * this.sideA)) ) || ( ( x>z && y>z ) || ( x>y && z>y ) || ( y>x && z>x ) ) ) {
return true;
}
}
area(){
return ((this.sideA + this.sideB + this.sideC )/2)
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
